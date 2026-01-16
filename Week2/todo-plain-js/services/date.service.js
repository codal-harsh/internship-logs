const dayMap = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednusday",
  4: "Thrusday",
  5: "Friday",
  6: "Saturday",
};

const monthMap = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const getDate = () => {
  const date = new Date();
  return {
    Date: date.getDate(),
    Month: monthMap[date.getMonth()],
    Year: date.getFullYear(),
    Day: dayMap[date.getDay()],
  };
};
