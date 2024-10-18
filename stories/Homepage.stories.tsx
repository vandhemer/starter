import type { Meta, StoryObj } from '@storybook/react';
import Homepage from '@/app/page';
import { http, HttpResponse } from 'msw';
import cmsHomeMock from '__mocks__/cmsHomeMock.json';

const meta: Meta<typeof Homepage> = {
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {},
  // parameters: {
  //   msw: {
  //     handlers: [
  //       http.get(
  //         process.env.CONTENTSTACK_APP_HOST + '/UEFSSVMgTkFUSU9O/fullproduct?productsCodes=793544',
  //         () => {
  //           return HttpResponse.json(cmsHomeMock)
  //         }
  //       ),
  //     ]
  //   }
  // }
};