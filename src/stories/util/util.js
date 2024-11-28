import moment from "moment";

export const generateMobiePhoneNumber = (value) => {
  if (value) {
    value = generateOnlyNumber(value.replace(/-/g, ""));
    const length = value.length;
    if (length < 4) {
      value = value;
    } else if (length < 7) {
      value = value.substr(0, 3) + "-" + value.substr(3);
    } else if (length === 8) {
      value = value.substr(0, 4) + "-" + value.substr(4, 4);
    } else if (length < 11) {
      value = value.substr(0, 3) + "-" + value.substr(3, 3) + "-" + value.substr(6);
    } else {
      value = value.substr(0, 3) + "-" + value.substr(3, 4) + "-" + value.substr(7);
    }
  }
  return value;
};

export const generateBlurPhoneNumber = (value) => {
  if (value) {
    value = generateOnlyNumber(value.replace(/-/g, ""));
    const length = value.length;
    if (length === 9) {
      value = value.substr(0, 2) + "-" + value.substr(2, 3) + "-" + value.substr(5);
    }
  }
  return value;
};
export const generateCASNumber = (value) => {
  const cleanedInput = value.replace(/\D/g, "");

  if (cleanedInput.length <= 2) {
    return cleanedInput;
  } else if (cleanedInput.length <= 3) {
    return `${cleanedInput.slice(0, 2)}-${cleanedInput.slice(-1)}`;
  } else {
    return `${cleanedInput.slice(0, cleanedInput.length - 3)}-${cleanedInput.slice(
      cleanedInput.length - 3,
      cleanedInput.length - 1
    )}-${cleanedInput.slice(-1)}`;
  }
};

export const generateLicenseNumber = (value) => {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/(\d{3})/, "$1-")
    .replace(/(\d{3})-(\d{2})/, "$1-$2-")
    .replace(/(\d{3})-(\d{2})-(\d{5})/, "$1-$2-$3");
};

// 외국인등록번호
export const generateRegisterNumber = (value) => {
  if (value) {
    value = generateOnlyNumber(value.replace(/-/g, ""));

    const length = value.length;

    if (length < 7) {
      value = value;
    } else {
      value = value.substr(0, 6) + "-" + value.substr(6);
    }
  }

  return value;
};

export const generateOnlyEnglish = (value) => {
  const regExp = /^[a-zA-Z\s]+$/;

  if (regExp.test(value)) {
    return value;
  }
};

export const generateProcessRate = (value) => {
  if (value >= 100) return 100;
  const regExp = /^([1-9]{1}\d{0,2}|0{1})(\.{1}\d{0,1})?$/g;
  if (!regExp.test(value)) {
    value = value.substr(0, value.length - 1);
  }
  return value;
};

export function calculateAge(date) {
  const currentYear = moment().format("YYYY");
  const year = moment(date).format("YYYY");

  const age = Number(currentYear) - Number(year);
  return age;
}

export const parseAccessToken = (token) => {
  const payload = token.split(".")[1];
  const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  const parsedToken = JSON.parse(jsonPayload);

  return parsedToken;
};

export const generateOnlyNumber = (val) => {
  const regex = /^[0-9\b]+$/;
  const isNumber = regex.test(val);

  if (isNumber) {
    return val;
  } else {
    val = val.replaceAll(/[\D]/gi, "");
    return val;
  }
};

export const generateQueryParamUrl = (url, params) => {
  const queryParam = Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `${url}${queryParam ? `?${queryParam}` : ""}`;
};

export const generateWeatherApiXY = (lat, lng) => {
  const RE = 6371.00877; // 지구 반경(km)
  const GRID = 5.0; // 격자 간격(km)
  const SLAT1 = 30.0; // 투영 위도1(degree)
  const SLAT2 = 60.0; // 투영 위도2(degree)
  const OLON = 126.0; // 기준점 경도(degree)
  const OLAT = 38.0; // 기준점 위도(degree)
  const XO = 43; // 기준점 X좌표(GRID)
  const YO = 136; // 기1준점 Y좌표(GRID)

  const DEGRAD = Math.PI / 180.0;
  const RADDEG = 180.0 / Math.PI;

  const re = RE / GRID;
  const slat1 = SLAT1 * DEGRAD;
  const slat2 = SLAT2 * DEGRAD;
  const olon = OLON * DEGRAD;
  const olat = OLAT * DEGRAD;

  let sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
  let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);

  const rs = {};

  rs["lat"] = lat;
  rs["lng"] = lng;

  let ra = Math.tan(Math.PI * 0.25 + lat * DEGRAD * 0.5);
  ra = (re * sf) / Math.pow(ra, sn);

  let theta = lng * DEGRAD - olon;

  if (theta > Math.PI) theta -= 2.0 * Math.PI;
  if (theta < -Math.PI) theta += 2.0 * Math.PI;

  theta *= sn;

  rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);

  return rs;
};

export const generateThousand = (value) => {
  if (value) {
    return value
      .replace(/(^0+)/, "")
      .replaceAll(/[^0-9]/g, "")
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "";
  }
};

export const convertChunks = (list = [], n = 1) => {
  const chunkLength = Math.ceil(Math.max(list.length / n, 1));
  let chunks = [];

  for (let i = 0; i < chunkLength; i++) {
    chunks.push(list.slice(i * n, (i + 1) * n));
  }

  return chunks;
};

export function hashCode(...args) {
  let str = args.join("");
  let hash = 0;
  if (str.length == 0) return hash;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
