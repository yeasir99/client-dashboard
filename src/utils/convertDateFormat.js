function convertDateFormat(date) {
  const [year, month, day] = date.split('-');
  if (!year || !month || !day) return 'Invalid date format';
  return `${day}-${month}-${year.slice(-2)}`;
}

export default convertDateFormat;
