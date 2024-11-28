import dayjs from "dayjs";

export const secondToMinute = (v) => {
  const min = Math.floor(v / 60);
  const sec = v % 60;

  return `${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
};

export const getPrevDate = (date) => {
  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  let prevDay;

  if (date === 30) {
    prevDay = new Date(currentYear, currentMonth - 1, currentDate); //?
  } else {
    prevDay = new Date(currentYear, currentMonth, currentDate - date);
  }

  return dayjs(prevDay).format("YYYY-MM-DD");
};

export const getPrevMonth = (month) => {
  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  let prevDay;
  if (currentMonth === 0) {
    prevDay = new Date(currentYear - 1, 11, currentDate);
  } else {
    prevDay = new Date(currentYear, currentMonth - month, currentDate);
  }

  return dayjs(prevDay).format("YYYY-MM-DD");
};

//** 만나이 계산 **//
export const calcKoreanAge = (day) => {
  const today = new Date();
  const birthday = new Date(day);

  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return age;
};
