import type { Meta, StoryObj } from '@storybook/react';
import ProductDetailPage from '@/app/(pages)/(navigation)/product/[...id]/page';
import { http, HttpResponse } from 'msw';
import productMock from '__mocks__/productMock.json';
import Header from '@/app/components/header/Header';

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
  decorators: [(Story) =>
    <main className="relative">
      <div className="w-full mx-auto relative container">
        <Header headerTransparent={ true } />
        <Story />
      </div>
    </main>
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ConforamaProduct: Story = {
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