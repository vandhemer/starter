import type { Meta, StoryObj } from '@storybook/react';
import Homepage from '@/app/page';

const meta: Meta<typeof Homepage> = {
  title: 'Pages/Home page',
  component: Homepage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
        appDirectory: true,
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {},
};