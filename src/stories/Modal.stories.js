import { fn } from '@storybook/test';

import { Modal } from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
   
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultMedium = {
  args: {
    size: 'medium',
  },
};


export const Small = {
  args: {
    size: 'small',
  },
};


export const Large = {
  args: {
    size: 'large',
  },
};



export const extraLarge = {
  args: {
    size: 'extraLarge',
  },
};


