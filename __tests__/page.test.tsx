/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import ProductList from '@/app/(pages)/productslist/page';

describe('Homepage', () => {

    it('renders a heading', () => {

        render(<ProductList />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
    })

})