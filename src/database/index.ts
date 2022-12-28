import { to } from '../helpers/fetch.helper';
import Logger from '../lib/logger';
import Config from '../utils/config';
import MySQL from './mysql';

const config = Config.get();
const logger = Logger.getLogger('database');

export const initDatabases = () => {
  logger.info('Connecting databases... ');

  Object.keys(config.service.databases).forEach((database) => {
    const dialect = config.service.databases[database].dialect;
    switch (dialect) {
      case 'mysql':
        logger.info(`[${dialect}] init connection to <${database}>`);
        to(MySQL.getConnectionClient(database));
        break;
      default:
        break;
    }
  });
};
