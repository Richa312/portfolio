import { Meta, StoryObj } from '@storybook/react';
import AboutMe from '../pages/about-me';

const meta = {
    title: "Portfolio",
    component: AboutMe,
} satisfies Meta<typeof AboutMe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const About_Me: Story = {
    args: {

    },
  };