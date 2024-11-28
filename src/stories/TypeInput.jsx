import { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"; 
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "./Button";

// 숫자만 추출
const generateOnlyNumber = (value) => {
  return value.replace(/[^0-9]/g, ""); // 숫자만 남기고 나머지 문자 제거
};

// 전화번호 포맷팅
const generateMobilePhoneNumber = (value) => {
  if (value) {
    value = generateOnlyNumber(value.replace(/-/g, "")); // '-'를 제거하고 숫자만 추출
    
    // 11자리까지만 입력 가능
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

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

// 전화번호 포맷팅 (blur 시 처리) - *표시 적용
const generateBlurPhoneNumber = (value) => {
  if (value) {
    value = generateOnlyNumber(value.replace(/-/g, ""));
    const length = value.length;

    // 전화번호 길이가 9자 이상일 경우만 *표시로 변환
    if (length >= 9) {
      value = value.substr(0, 3) + "-***-****"; 
    }
  }
  return value;
};

// 가격 포맷팅
const formatPrice = (value) => {
  const priceValue = value.replace(/[^0-9]/g, ""); 

  if (!priceValue) return "";

  // 숫자에 쉼표 추가
  const formattedValue = new Intl.NumberFormat().format(priceValue);

  return formattedValue;
};

export default function TypeInput({
  type = "text", 
  placeholder = "", 
  fullWidth = false, 
  disabled = false, 
  error = false, 
  helperText = "", 
  showButton = false, 
  buttonLabel = "확인", 
  buttonIcon = null, 
  onSearch = null, 
  onButtonClick = null, 
  value = "",
  onBlur = null
}) {
  const [Input, setInput] = useState(value);  
  const [showPassword, setShowPassword] = useState(false);

  // 입력 값 변경 처리
  const handleChange = (e) => {
    const { value } = e.target;

    if (type === "phone") {
      setInput(generateMobilePhoneNumber(value)); 
    }  else if (type === "number") {
      const onlyNumbers = generateOnlyNumber(value); 
      setInput(onlyNumbers); 
    } else if (type === "price") {
      setInput(formatPrice(value)); 
    } else {
      setInput(value); 
    }
  };

  // 전화번호 blur 이벤트 처리
  const handleBlur = () => {
    if (type === "phone") {
      const formattedPhone = generateBlurPhoneNumber(Input); // blur 시 전화번호 포맷팅 처리
      setInput(formattedPhone);  // 상태 업데이트
      if (onBlur) onBlur(formattedPhone);  // 외부 onBlur 처리
    }
  };

  // 비밀번호 보기/숨기기
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // 검색 버튼 클릭 처리
  const handleSearchClick = () => {
    console.log("검색어:", Input);
    if (onSearch) {
      onSearch(Input);
    }
  };

  // 버튼 클릭 처리
  const handleButtonClick = () => {
    console.log("버튼 클릭, 입력 값:", Input);
    if (onButtonClick) {
      onButtonClick(Input);
    }
  };

  // endAdornment
  const getAdornment = () => {
    if (type === "password") {
      return (
        <IconButton
          sx={{ padding: "5px 8px" }}
          aria-label="비밀번호 보기"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      );
    }

    if (type === "price") {
      return <InputAdornment position="end">원</InputAdornment>;
    }

    if (type === "search") {
      return (
        <InputAdornment position="end">
          <IconButton onClick={handleSearchClick} sx={{ padding: 0 }}>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      );
    }

    return null;
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start",width:'100%' }}>
      <TextField
        margin="normal"
        variant="outlined"
        value={Input}
        onChange={handleChange}
        placeholder={placeholder}
        size="small"
        onBlur={handleBlur} 
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
        helperText={helperText}
        type={type === "password" ? (showPassword ? "text" : "password") : "text"}
        sx={{ margin: '0' }}
        InputProps={{
          endAdornment: getAdornment(),
        }}
        inputProps={{
          style: {
            textAlign: type === "price" ? "right" : "left", 
          },
        }}
      />

      {showButton && (
        <Button
          label={buttonLabel}
          variant="primary"
          size="medium"
          onClick={handleButtonClick}
          icon={buttonIcon}
        />
      )}
    </div>
  );
}
