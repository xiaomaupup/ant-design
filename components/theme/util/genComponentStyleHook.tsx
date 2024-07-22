/* eslint-disable no-redeclare */
import { useContext } from 'react';

import { ConfigContext } from '../../config-provider/context';
import { genCommonStyle, genLinkStyle } from '../../style';
import type {
  AliasToken,
  ComponentTokenMap,
  SeedToken,
} from '../interface';

import localUseToken from '../useToken';
import useResetIconStyle from './useResetIconStyle';

import { genStyleUtils } from '@ant-design/cssinjs-utils';
import type {
  FullToken as OrgFullToken,
  GetDefaultToken as OrgGetDefaultToken,
  GenStyleFn as OrgGenStyleFn,
  TokenMapKey,
} from '@ant-design/cssinjs-utils';

export type { TokenWithCommonCls, CSSUtil } from '@ant-design/cssinjs-utils';

export type OverrideComponent = TokenMapKey<ComponentTokenMap>;

export type FullToken<C extends TokenMapKey<ComponentTokenMap>> = OrgFullToken<ComponentTokenMap, AliasToken, C>;

export type GetDefaultToken<C extends TokenMapKey<ComponentTokenMap>> = OrgGetDefaultToken<ComponentTokenMap, AliasToken, C>;

export type GenStyleFn<C extends TokenMapKey<ComponentTokenMap>> = OrgGenStyleFn<ComponentTokenMap, AliasToken, C>;

export const {
  genStyleHooks,
  genComponentStyleHook,
  genSubStyleComponent,
} = genStyleUtils<
  ComponentTokenMap,
  AliasToken,
  SeedToken
>({
  usePrefix: () => {
    const { getPrefixCls, iconPrefixCls } = useContext(ConfigContext);

    const rootPrefixCls = getPrefixCls();

    return {
      rootPrefixCls,
      iconPrefixCls,
    }
  },
  useToken: () => {
    const [theme, realToken, hashId, token, cssVar] = localUseToken();

    return {
      theme,
      realToken,
      hashId,
      token,
      cssVar,
    };
  },
  useCSP: () => {
    const { csp, iconPrefixCls } = useContext(ConfigContext);

    // Generate style for icons
    useResetIconStyle(iconPrefixCls, csp);

    return csp ?? {};
  },
  getResetStyles: (token) =>
    [
      {
        // Link
        '&': genLinkStyle(token as any),
      },
    ]
  ,
  getCommonStyle: genCommonStyle,
})
