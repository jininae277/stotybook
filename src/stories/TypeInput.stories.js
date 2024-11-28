// TypeInput.stories.js

import React from "react";
import TypeInput from "./TypeInput"; 

export default {
  title: "Example/TypeInput",
  component: TypeInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: "select",
      options: [
        "text", "number", "onBlur", "price", "search", 
        "phone", "password", "Disabled", "ErrorInput", 
        "FullWidth", "showButton"
      ],
      description: "입력 유형에 따라 포맷팅 및 유효성 검사가 달라집니다.",
    },
    placeholder: {
      control: "text",
      description: "입력 필드에 표시될 기본 텍스트입니다.",
    },
    disabled: {
      control: "boolean",
      description: "입력 필드를 비활성화 할지 여부를 설정합니다.",
    },
    error: {
      control: "boolean",
      description: "입력 필드에 오류가 발생한 상태인지를 설정합니다.",
    },
    helperText: {
      control: "text",
      description: "입력 필드 하단에 표시될 가이드 메시지입니다.",
    },
    fullWidth: {
      control: "boolean",
      description: "입력 필드가 부모 요소의 전체 너비를 차지할지 여부를 설정합니다.",
    },
    showButton: {
      control: "boolean",
      description: "입력 필드 옆에 버튼을 표시할지 여부를 설정합니다.",
    },
    buttonLabel: {
      control: "text",
      description: "입력 필드 옆에 표시될 버튼의 텍스트입니다.",
    },
    onSearch: {
      action: 'search',
      description: "검색어 입력 후 실행될 함수입니다.",
    },
  },
};

const Template = (args) => <TypeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "기본 텍스트 입력",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",  
  placeholder: "숫자 입력",
};

export const PriceInput = Template.bind({});
PriceInput.args = {
  type: "price",
  placeholder: "가격 입력",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "비밀번호 입력",
};

export const PhoneInput = Template.bind({});
PhoneInput.args = {
  type: "phone",
  placeholder: "전화번호 입력",
};

export const SearchInput = Template.bind({});
SearchInput.args = {
  type: "search",
  placeholder: "검색어 입력",
  onSearch: (value) => {
    console.log("검색된 값:", value);
  },
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  type: "text",
  placeholder: "비활성화 상태",
  disabled: true,
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  type: "text",
  placeholder: "오류 발생",
  error: true,
  helperText: "입력 값이 유효하지 않습니다.",
};

export const FullWidthInput = Template.bind({});
FullWidthInput.args = {
  type: "text",
  placeholder: "전체 너비",
  fullWidth: true,
  helperText: "가이드 메시지 영역",
};

export const ButtonInput = Template.bind({});
ButtonInput.args = {
  type: "text",
  showButton: true,
  buttonLabel: "중복확인",
  helperText: "가이드 메시지 영역",
};
