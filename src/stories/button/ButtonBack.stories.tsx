import type { Meta, StoryObj } from '@storybook/react';
import ButtonBack, { ButtonBackProps } from 'components/button/ButtonBack';

const meta = {
  title: 'Components/Button/ButtonBack',
  component: ButtonBack,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ButtonBack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium'
  },

  render: ({ ...args }: ButtonBackProps) => {
    return <ButtonBack {...args} />;
  }
};
