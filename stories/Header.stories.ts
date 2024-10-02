import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Header from '@/components/header/Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autopromo: Story = {
  args: {
    autopromo: [ 
      {
        autopromo_content: "EXCLUSIVITE CONFORAMA.fr : Payez en 4 fois Carte bancaire",
        background_color: "#fff"
      }
    ]
  },
};