import { UrlBuilder } from '@/utils/UrlBuilder';

describe('UrlBuilder', () => {

    it('should concats slug and product id', () => {

        const productSlug = 'tv-son-multimedia/gaming/chaise-gaming/fauteuil-gaming-bicolore-predator-antares';
        const productId = '782896';
  
        const result = UrlBuilder.buildProductUrl(productSlug, productId);
  
        expect(result).toEqual(productSlug);

    })

})