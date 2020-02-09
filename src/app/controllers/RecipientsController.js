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
}

export default new RecipientsController();
