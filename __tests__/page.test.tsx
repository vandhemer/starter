/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { fetchMock } from '__mocks__/fetchMock';
import cmsHomeMock from '__mocks__/cmsHomeMock.json';
import ProductList from '@/app/(pages)/productslist/page';

describe('Homepage', () => {

    it('renders a heading', () => {
        window.fetch = fetchMock(cmsHomeMock);
        
        render(<ProductList />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
    })

})