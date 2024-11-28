import React from 'react';
import CustomTimePicker from './CustomTimePicker';


export default {
  title: 'Example/CustomTimePicker',
  component: CustomTimePicker,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multi'],
      description: `
      -'single':단독 시간 선택기 
      -'multi':시간 범위 선택기 
    `,
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태로 설정합니다.',
    },
  },

};

const Template = (args) => <CustomTimePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'single', 
};

export const DateRangePicker = Template.bind({});
DateRangePicker.args = {
  type: 'multi', 
  // minDate: new Date('2023-01-01'),
  // maxDate: new Date('2025-12-31'),
};


export const DisabledDates = Template.bind({});
DisabledDates.args = {
  type: 'multiButtons', 
  disabled:'true'
  // disablePast: true,
  // disableFuture: true,
  // minDate: new Date('2020-01-01'),
  // maxDate: new Date('2025-12-31'),
};

