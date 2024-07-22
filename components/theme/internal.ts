import { genCalc as calc, useStyleRegister } from '@ant-design/cssinjs';

import type {
  AliasToken,
  GenerateStyle,
  PresetColorKey,
  PresetColorType,
  SeedToken,
  UseComponentStyleResult,
} from './interface';
import { PresetColors } from './interface';
import { getLineHeight } from './themes/shared/genFontSizes';
import useToken from './useToken';
import type { FullToken, GetDefaultToken } from './util/genComponentStyleHook';
import {
  genComponentStyleHook,
  genStyleHooks,
  genSubStyleComponent,
} from './util/genComponentStyleHook';
import genPresetColor from './util/genPresetColor';
import useResetIconStyle from './util/useResetIconStyle';

export { mergeToken, statisticToken } from '@ant-design/cssinjs-utils';

export { DesignTokenContext, defaultConfig } from './context';
export {
  PresetColors,
  genComponentStyleHook,
  genSubStyleComponent,
  genPresetColor,
  genStyleHooks,
  calc,
  getLineHeight,
  // hooks
  useResetIconStyle,
  useStyleRegister,
  useToken,
};
export type {
  AliasToken,
  // FIXME: Remove this type
  AliasToken as DerivativeToken,
  FullToken,
  GenerateStyle,
  PresetColorKey,
  PresetColorType,
  SeedToken,
  UseComponentStyleResult,
  GetDefaultToken,
};
