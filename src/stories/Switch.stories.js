import React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' }, 
  },
};

const Template = (args) => <Switch {...args} />;

export const Off= Template.bind({});
Off.args = {
  label: 'Off',
  selected: true,  
  disabled: false,
};

export const On= Template.bind({});
On.args = {
  label: 'On',
  selected: false,  
  disabled: false,
};

export const DisabledOff = Template.bind({});
DisabledOff.args = {
  label: 'DisabledOff',
  selected: true,  
  disabled: true,
};

export const DisabledOn = Template.bind({});
DisabledOn.args = {
  label: 'DisabledOn',
  selected: false,  
  disabled: true,
};
