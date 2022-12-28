export const findAll = (whereParams?) => `
  SELECT 
    * 
  FROM 
    Users
  ${whereParams ? `WHERE ${whereParams}` : ''}
`;
