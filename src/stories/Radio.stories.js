import React, { useState } from 'react';
import { Radio } from './Radio';

export default {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue || 'option1'); // 기본값 'option1'
  
  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <Radio
        {...args}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
        value="option1"
        name="group1"
      />
      <Radio
        {...args}
        checked={selectedValue === 'option2'}
        onChange={handleRadioChange}
        value="option2"
        name="group1"
      />
      <Radio
        {...args}
        checked={selectedValue === 'option3'}
        onChange={handleRadioChange}
        value="option3"
        name="group1"
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  disabled: false,
  selectedValue: null, // 기본적으로 아무것도 선택되지 않음
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
  label: 'Selected',
  disabled: false,
};
Selected.parameters = {
  docs: {
    description: {
      story: '선택되었을 때 상태를 표시합니다.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
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
  label: 'Disabled Selected',
  disabled: true,
};
DisabledSelected.parameters = {
  docs: {
    description: {
      story: '비활성화 상태에서 선택된 상태로 시작하며, 클릭해도 변경되지 않습니다.',
    },
  },
};
