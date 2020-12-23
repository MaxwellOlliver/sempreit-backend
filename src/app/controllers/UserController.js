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
      await schema.validate(request.body);
    } catch (error) {
      return response.status(400).json({
        error: error.errors ? error.errors.join('. ') : 'Validation fails.',
      });
    }

    const { email, name, password } = request.body;
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return response.status(403).json({
        error: `User with email ${email} already exists`,
        field: 'email',
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    user.password_hash = undefined;

    return response.json(user);
  }

  async show(request, response) {
    const me = await User.findOne({
      where: { id: request.userId },
      attributes: {
        exclude: ['password_hash'],
      },
    });

    return response.json(me);
  }
}

export default new UserController();
