import React from 'react';
import { Story, Meta } from '@storybook/react';

import {ProjectPane} from './ProjectPane';

export default {
  title: 'Example/ProjectPane',
  component: ProjectPane,
} as Meta;

const Template: Story = (args) => <ProjectPane {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
