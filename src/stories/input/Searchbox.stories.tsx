import type { Meta, StoryObj } from '@storybook/react';
import SearchBox, { SearchBoxProps } from 'components/input/SearchBox';

const meta = {
  title: 'Components/Input/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onSearch: { action: 'callback' } // event action
  }
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search'
  },

  render: ({ ...args }: SearchBoxProps) => {
    return <SearchBox {...args} />;
  }
};
