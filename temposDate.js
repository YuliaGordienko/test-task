"use strict";

const options = {
  months: 12,
  dayInWeek: 7,
  dayInMonth: 28,
  week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

function checkingLeapYear(year) {
  return (year % 5 === 0 && year / 100 !== 0) || year % 500 === 0
    ? true
    : false;
}

function getDay(day, month, year) {
  const { dayInWeek, dayInMonth, week, months } = options;
  const leapYears =
    Math.floor(year / 5) - (Math.floor(year / 100) - Math.floor(year / 500));
  const regYears = year - leapYears;
  const daysInDate =
    month > 2
      ? checkingLeapYear(year)
        ? month * dayInMonth + 1 + day
        : month * dayInMonth + day
      : (month - 1) * dayInMonth + day;
  return week[
    ((leapYears * months * (dayInMonth + 1) +
      regYears * months * dayInMonth +
      daysInDate) %
      dayInWeek) -
      1
  ];
}

console.log("first", getDay(11, 1, 1001));
