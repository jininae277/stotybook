import React from 'react';
import SelectCustom from './SelectCustom';  // SelectCustom 컴포넌트
import { ThemeProvider } from 'styled-components';  // styled-components의 ThemeProvider
import { createTheme } from '@mui/material/styles';  // MUI에서 제공하는 createTheme

// Material-UI 테마 
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

// Storybook 설정
export default {
  title: 'Example/SelectCustom', 
  component: SelectCustom,  // SelectCustom 컴포넌트
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'], 
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>  
        <Story />
      </ThemeProvider>
    ),
  ],
};

const Template = (args) => <SelectCustom {...args} />;


export const Default = Template.bind({});
Default.args = {
  selected: [], 
  multiple: false,  
  disabled: false,
  placeholder: '선택하세요',
  options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  onChange: (newValue) => console.log(newValue),
  error: false,        
  displayEmpty: true,   
  fullWidth: false,
};


export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  selected: [],  
  multiple: true,  
  disabled: false,  
  placeholder: '선택하세요',
  options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  onChange: (newValue) => console.log(newValue),
  error: false,        
  displayEmpty: true,   
  fullWidth: false,
};

export const fullWidth = Template.bind({});
fullWidth.args = {
  selected: [],  
  multiple: false,  
  disabled: false,
  fullWidth: true, 
  placeholder: '선택하세요',
  options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  onChange: (newValue) => console.log(newValue),
  error: false,        
  displayEmpty: true,   
};


export const Disabled = Template.bind({});
Disabled.args = {
  selected: [],  
  multiple: false,  
  disabled: true, 
  placeholder: '선택하세요',
  options: ['옵션1', '옵션2', '옵션3', '옵션4'],
};

