import type { Meta, StoryObj } from '@storybook/react';
import AutoPromo from '@/app/components/cms/Autopromo';

const meta: Meta<typeof AutoPromo>  = {
  title: 'Components/AutoPromo',
  component: AutoPromo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof AutoPromo>;

export const AutopromoContent: Story = {
    args: {
        autopromo: [ 
          {
            autopromo_content: "EXCLUSIVITE CONFORAMA.fr : Payez en 4 fois Carte bancaire",
            background_color: "#fff"
          }
        ]
    },
};