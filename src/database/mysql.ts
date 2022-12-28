import * as mysql from 'mysql2/promise';

import Config from '../utils/config';
import Logger from '../lib/logger';

const config = Config.get();
const logger = Logger.getLogger('mysql');

export default class MySQL {
  database;
  connectionPool;

  static instance;

  constructor(database) {
    const { dbName, user, password, host, port } = config.service.databases[database];
    this.database = database;
    this.connectionPool = mysql.createPool({
      user,
      host,
      database: dbName,
      password,
      port,
    });
  }

  async initMySQL() {
    const client = await this.connectionPool.getConnection();
    try {
      await client.query('SELECT NOW()');
      logger.info(`Connection to <${this.database}> has been established successfully.`);
    } catch (err) {
      logger.error(`Unable to connect to the database:: <${this.database}> :: ${err}`);
    } finally {
      client?.release();
    }
  }

  static async getConnectionClient(database) {
    if (!MySQL.instance) {
      MySQL.instance = new MySQL(database);
      await MySQL.instance.initMySQL();
    }

    return MySQL.instance.connectionPool.getConnection();
  }
}
