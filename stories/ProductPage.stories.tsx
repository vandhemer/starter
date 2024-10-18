import type { Meta, StoryObj } from '@storybook/react';
import ProductDetailPage from '@/app/(pages)/(navigation)/product/[...id]/page';
import NavigationLayout from '@/app/(pages)/(navigation)/layout';
import { http, HttpResponse } from 'msw';
import productMock from '__mocks__/productMock.json';

const meta: Meta<typeof ProductDetailPage> = {
  title: 'Pages/Productpage',
  component: ProductDetailPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
        appDirectory: true,
    },
  },
  decorators: [(Story) => <NavigationLayout><Story /></NavigationLayout>],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    params: {
      id: ['793544']
    }
  },
  parameters: {
    msw: {
      handlers: [
        http.get(
          process.env.PRODUCT_API_URL + '/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=793544',
          () => {
            return HttpResponse.json(productMock)
          }
        ),
      ]
    }
  }
};