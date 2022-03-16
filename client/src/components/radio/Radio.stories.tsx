import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Radio, RadioProps } from './Radio';

export default {
  title: 'Forms/Radio',
  component: Radio,
  args: {
    label: 'Radio description',
  },
} as Meta;

const Template: Story<RadioProps> = (args) => {
  const [selected, setSelected] = useState('no');

  const onClick = (value: string) => () => {
    setSelected(value);
  };

  return (
    <>
      <Radio
        name="gender"
        value="male"
        checked={args.checked != null ? args.checked : selected === 'male'}
        hasError={args.hasError}
        onChange={onClick('male')}
        label="male"
      />
      <Radio
        name="gender"
        value="female"
        checked={selected === 'female'}
        hasError={args.hasError}
        onChange={onClick('female')}
        label="female"
      />
    </>
  );
};

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const WithError = Template.bind({});
WithError.args = {
  hasError: true,
  checked: false,
};
