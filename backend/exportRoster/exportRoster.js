//HPALA1-Mamma,HPALA2-PAPPA,BLOODDK1-Hejsan
export const generateExportedRoster = (roster) => {
  const reducedRoster = Object.entries(roster)
    .filter(([key, value]) => value !== 'MISSING')
    .map(([key, value]) => `${key.toUpperCase()}-${value}`)
    .join(',');
  return reducedRoster;
  // const reducedRoster = Object.entries(roster)
  // .filter(([key, value]) => value !== 'MISSING')
  // .reduce((acc, [key, value]) => {
  //   acc[key] = value;
  //   return acc;
  // }, {});
}

