import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('breadcrumb image', () => {
  imageDemoTest('breadcrumb', { skip: ['react-router.tsx'] });
});
