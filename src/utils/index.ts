export const mapQueriesVal = (params) =>
  Object.keys(params)
    .map((p) => `${p} = '${params[p]}'`)
    .join(' AND ');
