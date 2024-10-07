/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, renderHook, getByText } from '@testing-library/react';
import Drawer from '../src/app/components/Drawer';
import { useDrawer } from '../src/app/hooks/useDrawer';
import { useToggle } from '../src/app/hooks/useToggle';


describe('Drawer Component', () => {
    it('should render correctly', () => {
        const {result} = renderHook(() => useToggle(false));

        const { getByText } = render(<Drawer>Test Child</Drawer>);
        const childElement = getByText('Test Child');
        expect(childElement).toBeInTheDocument();
    });

    // it('should close the drawer when clicking outside', () => {
    //     const setToggleDrawer = jest.fn();
    //     useDrawer.mockReturnValue({ setToggleDrawer });
    //     useToggle.mockReturnValue([true, jest.fn()]);

    //     const { getByTestId } = render(<Drawer>Test Child</Drawer>);
    //     const drawerBackground = getByTestId('drawer-background');

    //     fireEvent.click(drawerBackground);
    //     expect(setToggleDrawer).toHaveBeenCalledWith(false);
    // });
});