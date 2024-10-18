import type { Meta, StoryObj } from '@storybook/react';
import Stars from '@/components/stars/Stars';

const meta: Meta<typeof Stars>  = {
  title: 'Components/Stars',
  component: Stars,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  decorators: [(Story) => 
    <div className="flex items-center gap-2 p-6">
        <Story />
    </div>
  ]
};

export default meta;

type Story = StoryObj<typeof Stars>;

export const StarsEmpty: Story = {
    args: {
        rate: 0
    },
};

export const StarsFull: Story = {
    args: {
        rate: 5
    },
};