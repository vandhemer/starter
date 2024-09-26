/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/react';
import { fetchMock } from '__mocks__/fetchMock';
import cmsHomeMock from '__mocks__/cmsHomeMock.json';
import { GET } from '@/app/api/cms/[page_title]/route';

describe('API route CMS', () => {

    it('should return a JSON response', () => {

        window.fetch = fetchMock(cmsHomeMock);
        const response = GET('/');

        expect(heading).toBeInTheDocument()
    })

})