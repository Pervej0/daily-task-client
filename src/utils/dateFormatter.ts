/* eslint-disable @typescript-eslint/no-explicit-any */
const formattedDate = (date: any) => {
  const localDate = new Date(date);
  localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());
  return localDate.toISOString().split("T")[0];
};

export default formattedDate;
