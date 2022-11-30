export const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toUTCString().slice(0, -7);
};

export const formatBookDate = (date: string) => {
  const d = new Date(date);
  //Y-m-d H:m:s
  const newFormat =
    d.toISOString().substring(0, 10) +
    " " +
    d.toISOString().substring(11).slice(0, -5);
  return newFormat;
};
