(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["417d4115"],{"09725a14":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("c8c5c2d9");var t='import React from \'react\';\nimport { Alert, Flex } from \'antd\';\n\nconst Demo = () => (\n  <Flex gap="large" vertical style={{ maxWidth: 600 }}>\n    <Flex gap="middle" vertical>\n      <div>\u6210\u529F\u63D0\u793A</div>\n      <Alert\n        showIcon\n        type="success"\n        message="\u606D\u559C\uFF01\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u5982\u6709\u95EE\u9898\u8BF7\u8054\u7CFB\u5BA2\u670D\u3002"\n      />\n      <Alert\n        showIcon\n        type="success"\n        message="\u5DF2\u6210\u529F\uFF01"\n        description="\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u901A\u8FC7\uFF0C\u8BF7\u53CA\u65F6\u8DDF\u8FDB\u7533\u8BF7\u72B6\u51B5\u3002\u5982\u6709\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u5BA1\u6838\u4EBA\u5458\u6216\u5728\u7EBF\u5BA2\u670D\u3002"\n      />\n    </Flex>\n    <Flex gap="middle" vertical>\n      <div>\u4FE1\u606F\u63D0\u793A</div>\n      <Alert\n        showIcon\n        type="info"\n        message="\u4F60\u597D\uFF01\u6B22\u8FCE\u4F7F\u7528\u4E13\u4E1A\u7248\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u8EAB\u9700\u6C42\u6DFB\u52A0\u4E1A\u52A1\u6A21\u5757\u3002"\n      />\n      <Alert\n        showIcon\n        type="info"\n        message="\u5E2E\u52A9\u4FE1\u606F"\n        description="\u4F60\u597D\uFF0C\u7531\u4E8E\u4F60\u7684\u826F\u597D\u4FE1\u7528\uFF0C\u6211\u4EEC\u51B3\u5B9A\u8D60\u9001\u4F60\u4E09\u4E2A\u6708\u4EA7\u54C1\u4F1A\u5458\uFF0C\u6B32\u4E86\u89E3\u4F1A\u5458\u7279\u6743\u4E0E\u6D3B\u52A8\u8BF7\u8FDB\u9996\u9875\u4F1A\u5458\u4E13\u533A\u67E5\u770B\u3002"\n      />\n    </Flex>\n    <Flex gap="middle" vertical>\n      <div>\u8B66\u544A\u63D0\u793A</div>\n      <Alert\n        showIcon\n        type="warning"\n        message="\u7CFB\u7EDF\u5C06\u4E8E 15 : 00 - 17 : 00 \u8FDB\u884C\u5347\u7EA7\uFF0C\u8BF7\u53CA\u65F6\u4FDD\u5B58\u4F60\u7684\u8D44\u6599\uFF01"\n      />\n      <Alert\n        showIcon\n        type="warning"\n        message="\u8BF7\u6CE8\u610F"\n        description="\u4F60\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u5DF2\u7ECF\u5BA1\u6838\u5931\u8D25\uFF0C\u53EF\u4EE5\u8FDB\u5165\u4E2A\u4EBA\u4FE1\u7BB1\u67E5\u770B\u539F\u56E0\uFF0C\u5982\u6709\u7591\u95EE\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\u4EBA\u5458\u3002"\n      />\n    </Flex>\n    <Flex gap="middle" vertical>\n      <div>\u9519\u8BEF\u63D0\u793A</div>\n      <Alert showIcon type="error" message="\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002" />\n      <Alert\n        showIcon\n        type="error"\n        message="\u51FA\u9519\u4E86\uFF01"\n        description="\u4F60\u7684\u8D26\u6237\u4F1A\u5458\u4F7F\u7528\u6743\u9650\u5C06\u57283\u5929\u540E\u5230\u671F\uFF0C\u8BF7\u53CA\u65F6\u8DDF\u8FDB\u7533\u8BF7\u72B6\u51B5\u3002\u5982\u6709\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u5BA1\u6838\u4EBA\u5458\u3002"\n      />\n    </Flex>\n  </Flex>\n);\n\nexport default Demo;\n';},"417d4115":function(e,n,a){"use strict";var t=a("852bbaa9")._;a.d(n,"__esModule",{value:!0}),a.d(n,"demos",{enumerable:!0,get:function(){return d;}});var r=a("852bbaa9"),o=r._(a("5b220c3d"));a("342e95ab");var s=r._(a("a9d1a279"));let d={"components-alert-index-tab-design-demo-behavior-pattern":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("0185eee1")]).then(a.dr(t,a.bind(a,"0185eee1"))))),asset:null,context:void 0,renderOpts:void 0},"components-alert-index-tab-design-demo-content":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("4089a7c8")]).then(a.dr(t,a.bind(a,"4089a7c8"))))),asset:{type:"BLOCK",id:"components-alert-index-tab-design-demo-content",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:a("999a65dd").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.20.5"}},entry:"index.tsx",title:"\u4E86\u89E3\u63D0\u793A\u5185\u5BB9",description:"\u5C55\u793A\u63D0\u793A\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u914D\u5408\u6807\u9898\u4E00\u8D77\u4F7F\u7528"},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"components-alert-index-tab-design-demo-type":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("92b805ae")]).then(a.dr(t,a.bind(a,"92b805ae"))))),asset:{type:"BLOCK",id:"components-alert-index-tab-design-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:a("09725a14").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.20.5"}},entry:"index.tsx",title:"\u4E86\u89E3\u63D0\u793A\u7C7B\u578B",description:"\u914D\u5408\u5E95\u8272\u548C\u56FE\u6807\uFF0C\u4E86\u89E3\u63D0\u793A\u7C7B\u578B\uFF08\u6210\u529F\u3001\u4FE1\u606F\u3001\u8B66\u544A\u3001\u9519\u8BEF\uFF09"},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}},"components-alert-index-tab-design-demo-action":{component:o.default.memo(o.default.lazy(()=>Promise.all([a.ensure("common"),a.ensure("40811cd6")]).then(a.dr(t,a.bind(a,"40811cd6"))))),asset:{type:"BLOCK",id:"components-alert-index-tab-design-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:a("fc806d29").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.20.5"}},entry:"index.tsx",title:"\u9488\u5BF9\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C",description:"\u53EF\u5BF9\u63D0\u793A\u8FDB\u884C\u5173\u95ED\u3001\u5C55\u5F00/\u6536\u8D77\uFF0C\u6216\u6267\u884C\u5176\u4ED6\u64CD\u4F5C"},context:{react:o,antd:s},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}}};},"999a65dd":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("5ab232f2");var t='import React from \'react\';\nimport { Alert, Flex } from \'antd\';\n\nconst Demo = () => (\n  <Flex gap="middle" vertical style={{ maxWidth: 600 }}>\n    <Alert message="\u4F60\u597D\uFF01\u6B22\u8FCE\u4F7F\u7528\u4E13\u4E1A\u7248\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u8EAB\u9700\u6C42\u6DFB\u52A0\u4E1A\u52A1\u6A21\u5757\u3002" />\n    <Alert\n      message="\u5E2E\u52A9\u4FE1\u606F"\n      description="\u4F60\u597D\uFF0C\u7531\u4E8E\u4F60\u7684\u826F\u597D\u4FE1\u7528\uFF0C\u6211\u4EEC\u51B3\u5B9A\u8D60\u9001\u4F60\u4E09\u4E2A\u6708\u4EA7\u54C1\u4F1A\u5458\uFF0C\u6B32\u4E86\u89E3\u4F1A\u5458\u7279\u6743\u4E0E\u6D3B\u52A8\u8BF7\u8FDB\u9996\u9875\u4F1A\u5458\u4E13\u533A\u67E5\u770B\u3002"\n    />\n  </Flex>\n);\n\nexport default Demo;\n';},fc806d29:function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return t;}}),a("ae46ac80");var t='import React from \'react\';\nimport { Alert, Flex, Typography } from \'antd\';\n\nconst Demo = () => {\n  const [expandA, setExpandA] = React.useState(false);\n  const [expandB, setExpandB] = React.useState(true);\n\n  return (\n    <Flex gap="large" vertical style={{ maxWidth: 600 }}>\n      <Flex gap="middle" vertical>\n        <div>\u5173\u95ED\u63D0\u793A</div>\n        <Alert showIcon closable message="\u4F60\u597D\uFF01\u6B22\u8FCE\u4F7F\u7528\u4E13\u4E1A\u7248\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u8EAB\u9700\u6C42\u6DFB\u52A0\u4E1A\u52A1\u6A21\u5757\u3002" />\n        <Alert\n          showIcon\n          closable\n          message="\u5E2E\u52A9\u4FE1\u606F"\n          description="\u4F60\u597D\uFF0C\u7531\u4E8E\u4F60\u7684\u826F\u597D\u4FE1\u7528\uFF0C\u6211\u4EEC\u51B3\u5B9A\u8D60\u9001\u4F60\u4E09\u4E2A\u6708\u4EA7\u54C1\u4F1A\u5458\uFF0C\u6B32\u4E86\u89E3\u4F1A\u5458\u7279\u6743\u4E0E\u6D3B\u52A8\u8BF7\u8FDB\u9996\u9875\u4F1A\u5458\u4E13\u533A\u67E5\u770B\u3002"\n        />\n      </Flex>\n      <Flex gap="middle" vertical>\n        <div>\u5C55\u5F00/\u6536\u8D77\u63D0\u793A</div>\n        <Alert\n          showIcon\n          closable\n          message={\n            <div>\n              <Typography.Paragraph ellipsis={!expandA && { rows: 2 }} style={{ marginBottom: 8 }}>\n                \u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\n              </Typography.Paragraph>\n              <Typography.Link onClick={() => setExpandA((prev) => !prev)}>\n                {expandA ? \'\u6536\u8D77\' : \'\u5C55\u5F00\u66F4\u591A\'}\n              </Typography.Link>\n            </div>\n          }\n          style={{ alignItems: \'baseline\' }}\n        />\n        <Alert\n          showIcon\n          closable\n          message={\n            <div>\n              <Typography.Paragraph ellipsis={!expandB && { rows: 2 }} style={{ marginBottom: 8 }}>\n                \u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\u63D0\u793A\u4FE1\u606F\u8D85\u8FC72\u884C\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5C06\u90E8\u5206\u4FE1\u606F\u6298\u53E0\uFF0C\u4EE5\u51CF\u5C11\u7A7A\u95F4\u5360\u7528\u3002\n              </Typography.Paragraph>\n              <Typography.Link onClick={() => setExpandB((prev) => !prev)}>\n                {expandB ? \'\u6536\u8D77\' : \'\u5C55\u5F00\u66F4\u591A\'}\n              </Typography.Link>\n            </div>\n          }\n          style={{ alignItems: \'baseline\' }}\n        />\n      </Flex>\n      <Flex gap="middle" vertical>\n        <div>\u6267\u884C\u5176\u4ED6\u64CD\u4F5C</div>\n        <Alert\n          showIcon\n          closable\n          message="\u63D0\u793A\u4FE1\u606F\u4E0D\u8D85\u8FC7\u4E00\u884C\u65F6\uFF0C\u6309\u94AE\u653E\u5728\u4FE1\u606F\u53F3\u4FA7\u3002"\n          action={<Typography.Link>\u76F8\u5173\u64CD\u4F5C</Typography.Link>}\n        />\n        <Alert\n          showIcon\n          closable\n          message={\n            <div>\n              <Typography.Paragraph style={{ marginBottom: 8 }}>\n                \u63D0\u793A\u4FE1\u606F\u8D85\u8FC7\u4E00\u884C\uFF0C\u6B64\u65F6\u6309\u94AE\u6309\u7167\u4ECE\u4E0A\u81F3\u4E0B\u7684\u89C6\u89C9\u6D41\uFF0C\u653E\u7F6E\u5728\u4FE1\u606F\u533A\u4E0B\u65B9\uFF0C\u8FD9\u6837\u6D4F\u89C8\u8D77\u6765\u66F4\u6D41\u7545\uFF0C\u5373\u5148\u9605\u8BFB\u63D0\u793A\u4FE1\u606F\uFF0C\u518D\u6839\u636E\u4FE1\u606F\u5224\u65AD\u6267\u884C\u4EC0\u4E48\u64CD\u4F5C\u3002\n              </Typography.Paragraph>\n              <Flex gap={8}>\n                <Typography.Link>\u76F8\u5173\u64CD\u4F5C1</Typography.Link>\n                <Typography.Link>\u76F8\u5173\u64CD\u4F5C2</Typography.Link>\n              </Flex>\n            </div>\n          }\n          style={{ alignItems: \'baseline\' }}\n        />\n        <Alert\n          showIcon\n          closable\n          message="\u63D0\u793A\u6807\u9898"\n          description={\n            <div>\n              <Typography.Paragraph style={{ marginBottom: 8 }}>\n                \u63D0\u793A\u4FE1\u606F\u8D85\u8FC7\u4E00\u884C\uFF0C\u6B64\u65F6\u6309\u94AE\u6309\u7167\u4ECE\u4E0A\u81F3\u4E0B\u7684\u89C6\u89C9\u6D41\uFF0C\u653E\u7F6E\u5728\u4FE1\u606F\u533A\u4E0B\u65B9\uFF0C\u8FD9\u6837\u6D4F\u89C8\u8D77\u6765\u66F4\u6D41\u7545\uFF0C\u5373\u5148\u9605\u8BFB\u63D0\u793A\u4FE1\u606F\uFF0C\u518D\u6839\u636E\u4FE1\u606F\u5224\u65AD\u6267\u884C\u4EC0\u4E48\u64CD\u4F5C\u3002\n              </Typography.Paragraph>\n              <Flex gap={8}>\n                <Typography.Link>\u76F8\u5173\u64CD\u4F5C1</Typography.Link>\n                <Typography.Link>\u76F8\u5173\u64CD\u4F5C2</Typography.Link>\n              </Flex>\n            </div>\n          }\n        />\n        <Typography.Paragraph type="secondary">\n          \u5EFA\u8BAE\u7EDF\u4E00\u4F7F\u7528Link\n          Button\uFF0C\u660E\u786E\u53EF\u70B9\u51FB\u7684\u540C\u65F6\uFF0C\u6574\u4F53\u89C6\u89C9\u4E5F\u66F4\u548C\u8C10\uFF1B\u5F53\u63D0\u793A\u4FE1\u606F\u4E0D\u8D85\u4E00\u884C\u65F6\uFF0C\u6309\u94AE\u653E\u5728\u4FE1\u606F\u53F3\u4FA7\uFF1B\u5F53\u63D0\u793A\u4FE1\u606F\u8D85\u8FC7\u4E00\u884C\uFF0C\u6309\u94AE\u653E\u7F6E\u5728\u4FE1\u606F\u533A\u4E0B\u65B9\uFF1B\u8FD9\u6837\u80FD\u591F\u786E\u4FDD\u7528\u6237\u7684\u6D4F\u89C8\u52A8\u7EBF\u4E00\u81F4\uFF0C\u5373\u5148\u9605\u8BFB\u63D0\u793A\u4FE1\u606F\uFF0C\u518D\u6839\u636E\u4FE1\u606F\u5224\u65AD\u6267\u884C\u4EC0\u4E48\u64CD\u4F5C\u3002\n        </Typography.Paragraph>\n      </Flex>\n    </Flex>\n  );\n};\n\nexport default Demo;\n';}}]);