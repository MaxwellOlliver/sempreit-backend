import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async create(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
    });

    try {
      await schema.validate();
    } catch (error) {
      return response.status(400).json({
        error: error.errors ? error.errors.join('. ') : 'Validation fails.',
      });
    }

    const { email, name, password } = request.body;
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return response.status(403).json({ error: 'User already exists.' });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return response.json({
      user,
    });
  }
}

export default new UserController();
