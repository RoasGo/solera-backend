import { Request, Response } from 'express';
import Logger from '../../lib/logger';
import { BDError, Forbidden, Ok } from '../../helpers/http.helper';
import UserService from './user.service';
import { to } from '../../helpers/fetch.helper';

const logger = Logger.getLogger('user-controller');

export default class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  public async findAll(req: Request, res: Response): Promise<any> {
    const [err, userRes] = await to(this.userService.findAll());
    if (err) {
      logger.error('Error retrieving users');
      return BDError(res, err);
    }

    return Ok(res, userRes);
  }

  public async getFullName(req: Request, res: Response): Promise<any> {
    const { username, password } = req.body;

    const [err, userRes] = await to(this.userService.findBy({ username }));
    if (err) {
      logger.error('Error retrieving users');
      return BDError(res, err);
    }

    if (!this.userService.comparePassword(password, userRes[0].password)) {
      return Forbidden(res, { message: 'Password mismatch' });
    }

    return Ok(res, { fullName: userRes[0].fullName });
  }
}
