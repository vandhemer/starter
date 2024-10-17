import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/header/Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderTransparent: Story = {
  args: {
    headerTransparent: false
  },
};