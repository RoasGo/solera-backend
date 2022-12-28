import * as bcrypt from 'bcryptjs';
import MySQL from '../../database/MySQL';
import Logger from '../../lib/logger';
import { mapQueriesVal } from '../../utils';
import * as UserQueries from './user.queries';

const logger = Logger.getLogger('user-controller');

export default class UserService {
  private client;

  public async findAll(): Promise<any> {
    try {
      this.client = await MySQL.getConnectionClient('main');
      const [rows] = await this.client.execute(UserQueries.findAll());

      return rows.map((row) => ({ ...row, password: undefined }));
    } catch (err) {
      logger.error(err.code, err.message);
      return Promise.reject(err);
    }
  }

  public async findBy(params): Promise<any> {
    try {
      this.client = await MySQL.getConnectionClient('main');
      const [rows] = await this.client.execute(UserQueries.findAll(mapQueriesVal(params)));

      return rows;
    } catch (err) {
      logger.error(err.code, err.message);
      return Promise.reject(err);
    }
  }

  public comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
