import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class UserController {
  async create(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
    });

    try {
      await schema.validate(request.body);
    } catch (error) {
      return response.status(400).json({
        error: error.errors ? error.errors.join('. ') : 'Validation fails',
      });
    }

    const { email, password } = request.body;
    const userExists = await User.findOne({ where: { email } });

    if (!userExists) {
      return response.status(404).json({
        error: `User with email ${email} does not exists`,
        field: 'email',
      });
    }

    if (!(await userExists.checkPassword(password))) {
      return response
        .status(403)
        .json({ error: 'Passwords does not match', field: 'password' });
    }

    return response.json({
      user: userExists,
      token: jwt.sign({ id: userExists.id }, process.env.SECRET),
    });
  }
}

export default new UserController();
