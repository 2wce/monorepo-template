// import React from 'react';
// import { Meta, Story } from '@storybook/react';
// import { Button, ButtonProps as Props } from './Button';

// const meta: Meta = {
//   title: 'Button',
//   component: Button,
//   argTypes: {
//     children: {
//       control: {
//         type: 'button',
//       },
//     },
//   },
//   parameters: {
//     controls: { expanded: true },
//   },
// };

// export default meta;

// const Template: Story<Props> = (args) => <Button {...args}>Button</Button>;

// // By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// // https://storybook.js.org/docs/react/workflows/unit-testing
// export const Default = Template.bind({});

// Default.args = {};
// // Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => (
  <Button {...props}>Button</Button>
);

Default.args = {
  variant: 'default',
  size: 'default',
};
