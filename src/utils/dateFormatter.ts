/* eslint-disable @typescript-eslint/no-explicit-any */
const formattedDate = (date: any) => {
  return new Date(date).toISOString().split("T")[0];
};

export default formattedDate;
