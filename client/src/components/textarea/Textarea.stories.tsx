import { Meta, Story } from '@storybook/react';
import React, { useRef, useEffect } from 'react';

import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  args: {
    label: 'Field label',
    placeholder: 'Enter a name',
  },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});

export const EmptyWithError = Template.bind({});
EmptyWithError.args = {
  error: 'Something went horribly wrong!',
};

export const ValueWithError = Template.bind({});
ValueWithError.args = {
  error: 'Something went horribly wrong!',
  defaultValue: 'Some random value',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  tooltip: 'This is a tooltip',
};

const FocusedTextField = (props: TextareaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return <Textarea {...props} ref={ref} />;
};

export const Focused: Story<TextareaProps> = (args) => <FocusedTextField {...args} />;
