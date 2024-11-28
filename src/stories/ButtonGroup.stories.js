import React, { useState } from 'react';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Example/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    // layout: 'centered', // 필요 시 사용
  },
  tags: ['autodocs'],
  argTypes: {
    selectedValue: { control: 'select', options: ['버튼1', '버튼2', '버튼3', '버튼4'] },
    disabled: { control: 'boolean' },
  },
};

const Template = ({
  buttons = [],
  selectedValue = '',
  disabled = false,
  ...args
}) => {
  const [selectedValueState, setSelectedValueState] = useState(selectedValue);

  const handleChange = (value) => {
    setSelectedValueState(value);
    console.log(`Selected: ${value}`);
  };

  return (
    <ButtonGroup
      {...args}
      buttons={buttons}
      selectedValue={selectedValueState}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  buttons: [
    { label: '버튼1', value: '버튼1' },
    { label: '버튼2', value: '버튼2' },
    { label: '버튼3', value: '버튼3' },
    { label: '버튼4', value: '버튼4' },
  ],
  selectedValue: '',
  disabled: false,
};
Default.parameters = {
  docs: {
    description: {
      story: '기본적으로 선택되지 않은 상태로 시작하며, 클릭하여 선택하거나 해제할 수 있습니다.',
    },
  },
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selectedValue: '버튼1',
};
Selected.parameters = {
  docs: {
    description: {
      story: '선택되었을때 상태를 표시합니다.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: '비활성화 상태로 시작하며, 클릭해도 변경되지 않습니다.',
    },
  },
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  ...Default.args,
  selectedValue: '버튼2',
  disabled: true,
};
DisabledSelected.parameters = {
  docs: {
    description: {
      story: '비활성화 상태에서 선택된 상태로 시작하며, 클릭해도 변경되지 않습니다.',
    },
  },
};
