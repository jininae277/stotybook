import React from 'react';
import CustomDatePicker from './CustomDatePicker';
import { DisabledInput } from './TypeInput.stories';

export default {
  title: 'Example/CustomDatePicker',
  component: CustomDatePicker, 
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multi', 'multiButtons'],
      description: `
        - single: 단독 날짜 선택기
        - multi: 날짜 범위 선택기
        - multiButtons: 버튼을 사용한 날짜 범위선택`,
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태로 설정합니다.',
    },
  },
};

const Template = (args) => <CustomDatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'single', 
};
Default.parameters = {
  docs: {
    storyDescription: '기본 설정으로, 단일 날짜를 선택할 수 있는 날짜 선택기입니다.',
  },
};

export const DateRangePicker = Template.bind({});
DateRangePicker.args = {
  type: 'multi', 
  // minDate: new Date('2023-01-01'),
  // maxDate: new Date('2025-12-31'),
};
DateRangePicker.parameters = {
  docs: {
    storyDescription: '시작일과 종료일을 선택하여 날짜 범위를 지정할 수 있습니다.',
  },
};

export const RangeWithButtons = Template.bind({});
RangeWithButtons.args = {
  type: 'multiButtons', 
  // minDate: new Date('2023-01-01'),
  // maxDate: new Date('2025-12-31'),
};
RangeWithButtons.parameters = {
  docs: {
    storyDescription: '버튼을 사용하여 빠르게 범위를 선택할 수 있습니다.',
  },
};

export const DisabledDates = Template.bind({});
DisabledDates.args = {
  type: 'multiButtons', 
  disabled: true
  // disablePast: true,
  // disableFuture: true,
  // minDate: new Date('2020-01-01'),
  // maxDate: new Date('2025-12-31'),
};
DisabledDates.parameters = {
  docs: {
    storyDescription: '이 설정은 날짜 선택기를 비활성화하여 사용자가 상호작용할 수 없게 만드는 예시입니다.',
  },
};
