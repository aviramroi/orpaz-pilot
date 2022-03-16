import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Datepicker, DatepickerProps } from './Datepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
} as Meta;

const Template: Story<DatepickerProps> = (args) => <Datepicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your birthday',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Your birthday',
  value: '1980-01-20',
};
