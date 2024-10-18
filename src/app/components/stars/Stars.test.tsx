/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Stars from '@/app/components/stars/Stars';

describe('<Stars />', () => {
    it('renders the correct number of stars based on the rate prop', () => {
        const { getAllByTestId } = render(<Stars rate={3} />);

        // Check if there are 5 stars in total
        expect(getAllByTestId('star')).toHaveLength(5);

        // Check if the first 3 stars have the 'text-yellow-300' class
        for (let i = 0; i < 3; i++) {
            expect(getAllByTestId('star')[i]).toHaveClass('text-yellow-300');
        }

        // Check if the remaining 2 stars have the 'text-gray-300' class
        for (let i = 3; i < 5; i++) {
            expect(getAllByTestId('star')[i]).toHaveClass('text-gray-300');
        }
    });

    it('renders all stars as gray when rate is 0', () => {
        const { getAllByTestId } = render(<Stars rate={0} />);

        for (const star of getAllByTestId('star')) {
            expect(star).toHaveClass('text-gray-300');
        }
    });

    it('renders all stars as yellow when rate is 5', () => {
        const { getAllByTestId } = render(<Stars rate={5} />);

        for (const star of getAllByTestId('star')) {
            expect(star).toHaveClass('text-yellow-300');
        }
    });
});