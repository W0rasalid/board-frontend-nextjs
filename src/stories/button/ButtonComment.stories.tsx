import type { Meta, StoryObj } from '@storybook/react';
import ButtonComment, { ButtonCommentProps } from 'components/button/ButtonComment';

const meta = {
  title: 'Components/Button/ButtonComment',
  component: ButtonComment,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ButtonComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Add Comments',
    size: 'medium'
  },

  render: ({ ...args }: ButtonCommentProps) => {
    return <ButtonComment {...args} />;
  }
};
