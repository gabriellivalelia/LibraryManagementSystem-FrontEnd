export function getToday() {
  const date = new Date();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

export function convertDateToDateTimeType(date) {
  const [year, month, day] = date.split("-");

  return new Date(year, month - 1, day);
}
