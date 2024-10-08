import type { Meta, StoryObj } from '@storybook/react';
import ButtonAdd, { ButtonAddProps } from 'components/button/ButtonAdd';

const meta = {
  title: 'Components/Button/ButtonAdd',
  component: ButtonAdd,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ButtonAdd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Create',
    size: 'medium',
    backgroundColor: '#4CAF50'
  },

  render: ({ ...args }: ButtonAddProps) => {
    return <ButtonAdd {...args} />;
  }
};
