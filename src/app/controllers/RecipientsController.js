import * as Yup from 'yup';

import Recipients from '../model/Recipients';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number()
        .integer()
        .required(),
      additional_details: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail.' });
    }

    const recipients = await Recipients.create(req.body);

    if (!recipients) {
      return res.status(400).json({ error: 'Fails to create recipients.' });
    }

    return res.status(201).json(recipients);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number().integer(),
      additional_details: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zipcode: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail.' });
    }

    const { id } = req.params;

    const recipients = await Recipients.findByPk(id);

    if (!recipients) {
      return res.status(404).json({ error: 'Recipient not found.' });
    }

    const {
      name,
      street,
      number,
      additional_details,
      city,
      state,
      zipcode,
    } = await recipients.update(req.body);

    return res.json({
      name,
      street,
      number,
      additional_details,
      city,
      state,
      zipcode,
    });
  }
}

export default new RecipientsController();
