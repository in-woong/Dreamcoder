//모듈간의 의존성을 최소화 시킨 후에 테스트를 한다
const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: '🥛', available: true },
    { item: '🍌', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });

  let productService;
  beforeEach(() => {
    productService = new ProductService();
  });
  it('should filter out only available items',async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1)
    expect(items).toEqual([{ item: '🥛', available: true }]);
  });
});
