import type { Meta, StoryObj } from '@storybook/react';
import CategorySelect, { CategorySelectProps } from 'components/select/CategorySelect';

const meta = {
  title: 'Components/Select/CategorySelect',
  component: CategorySelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onSelectChange: { action: 'callback' } // event action
  }
} satisfies Meta<typeof CategorySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Choose a community'
  },

  render: ({ ...args }: CategorySelectProps) => {
    return <CategorySelect {...args} />;
  }
};
