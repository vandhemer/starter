import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Header from '@/components/header/Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
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