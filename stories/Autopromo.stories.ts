import type { Meta, StoryObj } from '@storybook/react';
import AutoPromo from '@/app/components/cms/Autopromo';

const meta = {
  title: 'Components/AutoPromo',
  component: AutoPromo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof AutoPromo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autopromo: Story = {
    args: {
      autopromo: {
        autopromo: [ 
          {
            autopromo_content: "EXCLUSIVITE CONFORAMA.fr : Payez en 4 fois Carte bancaire",
            background_color: "#fff"
          }
        ]
      }
    },
};