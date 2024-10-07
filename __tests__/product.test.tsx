import { createMocks } from 'node-mocks-http';
import { GET } from '@/api/v1/products/[id]/route';

import axios from 'axios';

// Mock Axios
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('/api/product/id API route', () => {
  it('should return data when API call is successful', async () => {
    // Simuler une réponse réussie d'Axios
    mockedAxios.get.mockResolvedValue({
      data: { product: ['John', 'Jane', 'Alice'] },
    });

    // Créer des mocks pour req et res
    const { req } = createMocks<Request >({
        method: 'GET',
      });

      const params = { id: 'E13939610' };

    // Appeler l'API handler avec les mocks
    await GET(req,{params});

    // Vérifier que le code de statut est 200
   // expect(res._getStatusCode()).toBe(200);

    // Vérifier que la réponse contient les données attendues
   // expect(res._getJSONData()).toEqual({ users: ['John', 'Jane', 'Alice'] });

    // Vérifier que l'appel Axios a été effectué une seule fois
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
/*
  it('should return 500 when API call fails', async () => {
    // Simuler une erreur dans Axios
    mockedAxios.get.mockRejectedValue(new Error('API Error'));

    // Créer des mocks pour req et res
    const { req, res } = createMocks({
      method: 'GET',
    });

    // Appeler l'API handler avec les mocks
    await handler(req, res);

    // Vérifier que le code de statut est 500
    expect(res._getStatusCode()).toBe(500);

    // Vérifier que le message d'erreur est correct
    expect(res._getJSONData()).toEqual({ message: 'Error fetching data' });

    // Vérifier que l'appel Axios a été effectué une seule fois
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });*/
});
