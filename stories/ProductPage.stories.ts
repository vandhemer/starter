import ProductDetailPage from '@/app/(pages)/(navigation)/product/[...id]/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/Productpage',
  component: ProductDetailPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
        appDirectory: true,
    },
  },
  args: {},
} satisfies Meta<typeof ProductDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autopromo: Story = {
  args: {
    params: {
        id: ['770491']
    }
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        segments: ['dashboard', 'analytics'],
      },
      router: {
        pathname: '/(pages)/(navigation)/product/[...id]',
        asPath: ''
      },
    },
  },
};