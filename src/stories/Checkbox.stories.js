import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '체크박스가 비활성화된 상태인지 여부를 설정합니다.',
    },
    label: {
      control: 'text',
      description: '체크박스 옆에 표시될 라벨을 설정합니다.',
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);  
  const handleChange = (newChecked) => {
    setChecked(newChecked);  
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  checked: false, 
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
  label: 'Selected',
  checked: true, 
  disabled: false,
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
  label: 'Disabled',
  checked: false,
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
  checked: true,
  disabled: true,  
};
DisabledSelected.parameters = {
  docs: {
    description: {
      story: '비활성화 상태에서 선택된 상태로 시작하며, 클릭해도 변경되지 않습니다.',
    },
  },
};
