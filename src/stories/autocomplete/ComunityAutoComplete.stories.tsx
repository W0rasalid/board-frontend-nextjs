import type { Meta, StoryObj } from '@storybook/react';
import ComunityAutoComplete, { ComunityAutoCompleteProps } from 'components/autocomplete/ComunityAutoComplete';

const meta = {
  title: 'Components/AutoComplete/ComunityAutoComplete',
  component: ComunityAutoComplete,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
} satisfies Meta<typeof ComunityAutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Comunity'
  },
  render: ({ ...args }: ComunityAutoCompleteProps) => {
    return <ComunityAutoComplete {...args} />;
  }
};
