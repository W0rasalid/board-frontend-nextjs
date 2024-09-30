import type { Meta, StoryObj } from '@storybook/react';
import MuiButton, { ButtonAddProps } from 'components/button/MuiButton';

const meta = {
  title: 'Components/Button/MuiButton',
  component: MuiButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof MuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    size: 'medium',
    label: 'Post',
    variant: 'contained'
  },

  render: ({ ...args }: ButtonAddProps) => {
    return <MuiButton {...args} />;
  }
};

export const Outlined: Story = {
  args: {
    size: 'medium',
    label: 'Cancel',
    variant: 'outlined'
  },

  render: ({ ...args }: ButtonAddProps) => {
    return <MuiButton {...args} />;
  }
};
