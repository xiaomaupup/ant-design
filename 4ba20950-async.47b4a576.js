(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["4ba20950"],{"4ba20950":function(e,t,i){"use strict";i.d(t,"__esModule",{value:!0}),i.d(t,"default",{enumerable:!0,get:function(){return d;}});var l=i("f19d2b93");i("0298622e");var o=i("5b220c3d"),n=i("e22febe0"),a=i("a9d1a279");let{Paragraph:s}=a.Typography;var d=()=>{let[e,t]=(0,o.useState)("This is an editable text."),[i,d]=(0,o.useState)("This is a loooooooooooooooooooooooooooooooong editable text with suffix."),[h,r]=(0,o.useMemo)(()=>[i.slice(0,-12),i.slice(-12)],[i]),[c,g]=(0,o.useState)("Custom Edit icon and replace tooltip text."),[u,x]=(0,o.useState)("Text or icon as trigger - click to start editing."),[b,p]=(0,o.useState)(["icon"]),[j,T]=(0,o.useState)("Editable text with a custom enter icon in edit field."),[y,f]=(0,o.useState)("Editable text with no enter icon in edit field."),[m,v]=(0,o.useState)("Hide Edit tooltip."),[C,k]=(0,o.useState)("This is an editable text with limited length."),S=e=>{switch(e){case"text":return["text"];case"both":return["icon","text"];default:return["icon"];}},w=(0,o.useMemo)(()=>b.includes("text")?b.includes("icon")?"both":"text":"icon",[b]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{editable:{onChange:t},children:e}),(0,l.jsx)(s,{editable:{onChange:d,text:i},ellipsis:{suffix:r},children:h}),(0,l.jsx)(s,{editable:{icon:(0,l.jsx)(n.HighlightOutlined,{}),tooltip:"click to edit text",onChange:g},children:c}),"Trigger edit with:"," ",(0,l.jsxs)(a.Radio.Group,{onChange:e=>p(S(e.target.value)),value:w,children:[(0,l.jsx)(a.Radio,{value:"icon",children:"icon"}),(0,l.jsx)(a.Radio,{value:"text",children:"text"}),(0,l.jsx)(a.Radio,{value:"both",children:"both"})]}),(0,l.jsx)(s,{editable:{tooltip:"click to edit text",onChange:x,triggerType:b},children:u}),(0,l.jsx)(s,{editable:{icon:(0,l.jsx)(n.HighlightOutlined,{}),tooltip:"click to edit text",onChange:T,enterIcon:(0,l.jsx)(n.CheckOutlined,{})},children:j}),(0,l.jsx)(s,{editable:{icon:(0,l.jsx)(n.HighlightOutlined,{}),tooltip:"click to edit text",onChange:f,enterIcon:null},children:y}),(0,l.jsx)(s,{editable:{tooltip:!1,onChange:v},children:m}),(0,l.jsx)(s,{editable:{onChange:k,maxLength:50,autoSize:{maxRows:5,minRows:3}},children:C}),(0,l.jsx)(a.Typography.Title,{editable:!0,level:1,style:{margin:0},children:"h1. Ant Design"}),(0,l.jsx)(a.Typography.Title,{editable:!0,level:2,style:{margin:0},children:"h2. Ant Design"}),(0,l.jsx)(a.Typography.Title,{editable:!0,level:3,style:{margin:0},children:"h3. Ant Design"}),(0,l.jsx)(a.Typography.Title,{editable:!0,level:4,style:{margin:0},children:"h4. Ant Design"}),(0,l.jsx)(a.Typography.Title,{editable:!0,level:5,style:{margin:0},children:"h5. Ant Design"})]});};}}]);