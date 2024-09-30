/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Homepage from '@/app/page';
import { fetchMock } from '__mocks__/fetchMock';
import cmsHomeMock from '__mocks__/cmsHomeMock.json';

describe('Homepage', () => {

    it('renders a heading', () => {
        window.fetch = fetchMock(cmsHomeMock);
        
        render(<Homepage />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
    })

})