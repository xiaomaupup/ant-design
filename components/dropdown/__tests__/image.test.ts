import { imageDemoTest } from '../../../tests/shared/imageTest';

describe('dropdown image', () => {
  imageDemoTest('dropdown', { skip: ['dropdown-button.tsx'] });
});
