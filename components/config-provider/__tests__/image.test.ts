import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('configProvider image', () => {
  imageDemoTest('config-provider', { skip: ['direction.tsx', 'theme.tsx'] });
});
