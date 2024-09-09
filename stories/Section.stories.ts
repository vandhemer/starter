import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Section from '../components/section';

const meta = {
  title: 'Components/Section',
  component: Section,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PawPatrol: Story = {
  args: {
    section: {
      title_h2: "Mon titre H2",
      description: "Ma description",
      call_to_action: {
        title: "Mon CTA",
        href: "https://www.conforama.fr",
        $: {
          url: "https://www.conforama.fr",
          title: "Titre"
        }
      },
      image: {
        url: "https://p325k7wa.twic.pics/high/paw-patrol/paw-patrol-world/00-page-setup/PPW-mobile-header.jpg?twic=v1/step=10/quality=80/max=760",
        filename: "mobile-header.jpg",
        $: {
          url: "https://p325k7wa.twic.pics/high/paw-patrol/paw-patrol-world/00-page-setup/PPW-mobile-header.jpg?twic=v1/step=10/quality=80/max=760",
          title: "mobile-header.jpg"
        }
      },
      image_alignment: "Left",
      $: {
        title: "Titre",
        title_h2: "Titre h2",
        title_h3: "Titre h2",
        description: "Description",
        html_code: "string",
        designation: "string",
        name: "string",
      }
    },
  },
};