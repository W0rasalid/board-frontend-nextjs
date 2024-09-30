import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import MuiTextField, { MuiTextFieldProps } from 'components/input/TextField';

const meta = {
  title: 'Components/Input/MuiTextField',
  component: MuiTextField,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onChange: { action: 'onChange' }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textLabel = canvas.getByLabelText(/Example/);
    await expect(textLabel).toBeInTheDocument();
  },
  tags: ['autodocs']
} satisfies Meta<typeof MuiTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    id: 'txtField',
    label: 'Example',
    variant: 'outlined',
    color: 'green',
    shrink: true
  },

  render: ({ ...args }: MuiTextFieldProps) => {
    return <MuiTextField {...args} />;
  }
};

export const Filled: Story = {
  args: {
    id: 'txtField',
    label: 'Example',
    variant: 'filled',
    color: 'green',
    shrink: true
  },

  render: ({ ...args }: MuiTextFieldProps) => {
    return <MuiTextField {...args} />;
  }
};
