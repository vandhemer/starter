import type { Meta, StoryObj } from '@storybook/react';
import Homepage from '@/app/page';

const meta = {
  title: 'Pages/Homepage',
  component: Homepage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
        appDirectory: true,
    },
  },
  args: {},
} satisfies Meta<typeof Homepage>;

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
  parameters: {
    nextjs: {
      router: {
        pathname: '/',
      },
    },
  },
};