import MerchantResolver from '../resolvers/Merchant';

// This could clearly be used to do many unit tests, however, I'm here using it only for debugging purposes.
// it could be, however, be scaled.
describe('Tests for resolvers', () => {
    test('Test merchantResolver so we can debug it locally.', async () => {
        const merchantResolver = new MerchantResolver();
        await merchantResolver.merchantByCountryId(3);
    });
});
