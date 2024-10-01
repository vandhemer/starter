import type { Meta, StoryObj } from '@storybook/react';
import AutoPromo from '@/app/components/cms/Autopromo';

const meta = {
  title: 'Components/AutoPromo',
  component: AutoPromo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
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