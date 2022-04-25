export const dateStringToDate = (date: string) => {
  // Date format 29/09/2022
  const dateParts = date.split('/').map((el: string): number => parseInt(el, 10));

  // Months in Date are 0 indexed, so January is 0, February 1...
  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
};
