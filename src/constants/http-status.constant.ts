import * as httpStatus from 'http-status';

const BUSINESS_ERROR = 950;
const DB_ERROR = 900;

const myHttpStatus = { BUSINESS_ERROR, DB_ERROR };

myHttpStatus[`${BUSINESS_ERROR}`] = 'Business error';
myHttpStatus[`${BUSINESS_ERROR}_NAME`] = 'BUSINESS_ERROR';
myHttpStatus[`${BUSINESS_ERROR}_MESSAGE`] = 'Indicates that exist a business error';

myHttpStatus[`${DB_ERROR}`] = 'BD error';
myHttpStatus[`${DB_ERROR}_NAME`] = 'DB_ERROR';
myHttpStatus[`${DB_ERROR}_MESSAGE`] = 'Indicates that exist a BD error';

export const HTTP_STATUS = { ...httpStatus, ...myHttpStatus };
