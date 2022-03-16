import { Meta, Story } from '@storybook/react';
import React, { useRef, useEffect } from 'react';

import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'Forms/TextField',
  component: TextField,
  args: {
    label: 'Field label',
    placeholder: 'Enter a name',
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  tooltip: 'Does this help you?',
};

export const EmptyWithError = Template.bind({});
EmptyWithError.args = {
  error: 'Something went horribly wrong!',
};

export const ValueWithError = Template.bind({});
ValueWithError.args = {
  error: 'Something went horribly wrong!',
  defaultValue: 'Some random value',
};

const FocusedTextField = (props: TextFieldProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return <TextField {...props} ref={ref} />;
};

export const Focused: Story<TextFieldProps> = (args) => <FocusedTextField {...args} />;
