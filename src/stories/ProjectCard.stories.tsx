import React from 'react';
import { Story, Meta } from '@storybook/react';

import ProjectCard from './ProjectCard';

export default {
  title: 'Example/ProjectCard',
  component: ProjectCard,
} as Meta;

const Template: Story = (args) => <ProjectCard {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
