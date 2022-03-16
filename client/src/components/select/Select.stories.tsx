import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Select, SelectOption, SelectProps } from './Select';

const options: SelectOption[] = [
  {
    value: '',
    displayName: '',
  },
  {
    value: 'option_1',
    displayName: 'Option 1',
  },
  {
    value: 'option_2',
    displayName: 'Option 2',
  },
  {
    value: 'option_3',
    displayName: 'Option 3',
  },
];

export default {
  title: 'Forms/Select',
  component: Select,
  args: {
    label: 'Field label',
    prefix: 'EUR',
    options,
  },
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const [value, setValue] = useState<string | undefined>();

  const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);
  };

  return <Select {...args} value={value} onChange={onChange} />;
};

export const Default = Template.bind({});

export const WithError = Template.bind({});
WithError.args = {
  error: 'Something went wrong',
  value: 'option_1',
};
