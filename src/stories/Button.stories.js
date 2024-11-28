import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {
    variant: { control: 'select', options: ['default', 'primary', 'secondary'], description:'default:화이트, primary:블루, secondary:그레이 ' },
    size: { control: 'select', options: ['small', 'medium', 'large'],description:'크기는 소,중,대 로 지정' },
    icon: { control: 'select', options: ['save', 'delete', null], description:'icon이 들어가는 버튼' },
    isFullWidth: { control: 'boolean', options: ['isFullWidth',  null], description:'Width 100%' },
    disabled: { control: 'boolean', options: ['disabled',  null], description: 'Button을 비활성화 상태로 설정합니다.' }, 
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    variant: 'default',
    label: 'Button',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const FullWidth = {
  args: {
    isFullWidth:'isFullWidth',
    label: 'Button',
  },
};

export const Save = {
  args: {
    variant: 'primary',
    label: '저장',
    icon: 'save', 
    size:"medium"
  },
};

export const Delete = {
  args: {
    variant: 'secondary',
    label: '삭제',
    icon: 'delete', 
    size:"medium"
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    label: 'Disabled Button',
    size: 'medium',
    disabled: true,
  },
};