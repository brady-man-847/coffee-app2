(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{8037:function(e,t,r){"use strict";var a=r(4836);t.Z=void 0;var i=a(r(4938)),n=r(5893),o=(0,i.default)((0,n.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");t.Z=o},6761:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order",function(){return r(4117)}])},5179:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(5893),i=r(4974),n=r(7294);function o(e){let{handleValueChange:t,...r}=e,[o,l]=(0,n.useState)(""),s=e=>{let{value:r}=e.target,a=r.replace(/\D/g,"").replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3").slice(0,13);l(a),t(a)};return(0,a.jsx)(i.Z,{type:"text",id:"phone-number-input",value:o,onChange:s,...r})}},1084:function(e,t,r){"use strict";r.d(t,{g:function(){return n}});var a=r(5893),i=r(1458);function n(){return(0,a.jsx)(i.Z,{sx:{background:"linear-gradient(to right, #6fcbb6, #9c64f4)","> span":{backgroundColor:"primary"}}})}},4117:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ev}});var a,i,n=r(5893),o=r(4682),l=r(7294);(a=i||(i={}))[a.TYPE_PHONE=0]="TYPE_PHONE",a[a.CHOOSE_ORDER=1]="CHOOSE_ORDER",a[a.FINISH_ORDER=2]="FINISH_ORDER";let s={view:i.TYPE_PHONE,phone:""},c=(e,t)=>{switch(t.type){case"SET_PHONE":return{...e,phone:t.phone};case"SET_VIEW":return{...e,view:t.view};default:throw Error("unknown action type")}},d=()=>(0,l.useReducer)(c,s),u=(0,o.kr)([s,()=>null]);var h=r(7357),p=r(5861),f=r(3321),v=r(8433),m=r(5179);function g(){let{phone:e}=(0,o.Sz)(u,e=>e[0]),t=(0,o.Sz)(u,e=>e[1]),r=()=>{v.Z.get("https://mcafe-api.onrender.com/order/".concat(e)).then(async e=>{let{data:r}=e;(null==r?void 0:r.length)!==0?t({type:"SET_VIEW",view:i.CHOOSE_ORDER}):alert("주문이 없습니다")}).catch(e=>{console.error(e)})},a=e=>{t({type:"SET_PHONE",phone:e})};return(0,n.jsxs)(h.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(p.Z,{component:"h1",variant:"h5",children:"당신은 누구십니까?"}),(0,n.jsxs)(h.Z,{sx:{mt:1},children:[(0,n.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,label:"핸드폰 번호",autoFocus:!0,handleValueChange:a}),(0,n.jsx)(f.Z,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:r,children:"인증하기"})]})]})}var x=r(7848),Z=r(5676),b=r(3366),w=r(7462),R=r(6010),y=r(4780),j=r(1796),C=r(1496),S=r(7623),E=r(1588),N=r(4867);function P(e){return(0,N.Z)("MuiDivider",e)}(0,E.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);let M=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],_=e=>{let{absolute:t,children:r,classes:a,flexItem:i,light:n,orientation:o,textAlign:l,variant:s}=e;return(0,y.Z)({root:["root",t&&"absolute",s,n&&"light","vertical"===o&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]},P,a)},D=(0,C.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,w.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,j.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,w.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,w.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,w.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),k=(0,C.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,w.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),O=l.forwardRef(function(e,t){let r=(0,S.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:i,className:o,component:l=i?"div":"hr",flexItem:s=!1,light:c=!1,orientation:d="horizontal",role:u="hr"!==l?"separator":void 0,textAlign:h="center",variant:p="fullWidth"}=r,f=(0,b.Z)(r,M),v=(0,w.Z)({},r,{absolute:a,component:l,flexItem:s,light:c,orientation:d,role:u,textAlign:h,variant:p}),m=_(v);return(0,n.jsx)(D,(0,w.Z)({as:l,className:(0,R.Z)(m.root,o),role:u,ref:t,ownerState:v},f,{children:i?(0,n.jsx)(k,{className:m.wrapper,ownerState:v,children:i}):null}))});var I=r(629),A=r(1084),H=r(8228);function T(){let{phone:e}=(0,o.Sz)(u,e=>e[0]),t=(0,o.Sz)(u,e=>e[1]),{data:r,isLoading:a,refetch:l}=(0,x.a)(Z.a.order.byPhone(e),async()=>{let{data:t}=await v.Z.get("https://mcafe-api.onrender.com/order/".concat(e));return t},{enabled:""!==e}),{mutate:s,isLoading:c}=function(){let e=async e=>{let{data:t}=await v.Z.post("https://mcafe-api.onrender.com/pay",{phone:e});return t};return(0,H.D)(Z.a.order.pay(),e)}(),{mutate:d,isLoading:m}=(0,H.D)(Z.a.order.cancel(),async e=>{let{data:t}=await v.Z.delete("https://mcafe-api.onrender.com/order/".concat(e));return t}),g=()=>{window.confirm("주문하시겠습니까?? ".concat(e,"님?"))?s(e,{onSuccess:()=>t({type:"SET_VIEW",view:i.FINISH_ORDER})}):window.alert("네")};return(0,n.jsx)(I.Z,{elevation:3,sx:{p:1,m:1},children:a||c||m?(0,n.jsx)(A.g,{}):(e=>{if(void 0===e)return;let t=e.map((e,t)=>(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(p.Z,{children:e.menuName}),(0,n.jsx)(p.Z,{children:e.name}),(0,n.jsx)(p.Z,{children:e.optionNameList.join(" ")}),(0,n.jsx)(O,{sx:{m:2}})]}));return(0,n.jsxs)(n.Fragment,{children:[t,(0,n.jsx)(f.Z,{variant:"contained",onClick:g,sx:[e=>({backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText})],children:"결제하기"})]})})(r)})}function z(e){return(0,N.Z)("MuiCard",e)}(0,E.Z)("MuiCard",["root"]);let F=["className","raised"],W=e=>{let{classes:t}=e;return(0,y.Z)({root:["root"]},z,t)},L=(0,C.ZP)(I.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),$=l.forwardRef(function(e,t){let r=(0,S.Z)({props:e,name:"MuiCard"}),{className:a,raised:i=!1}=r,o=(0,b.Z)(r,F),l=(0,w.Z)({},r,{raised:i}),s=W(l);return(0,n.jsx)(L,(0,w.Z)({className:(0,R.Z)(s.root,a),elevation:i?8:void 0,ref:t,ownerState:l},o))});function V(e){return(0,N.Z)("MuiCardHeader",e)}let B=(0,E.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Y=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],q=e=>{let{classes:t}=e;return(0,y.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},V,t)},X=(0,C.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,w.Z)({[`& .${B.title}`]:t.title,[`& .${B.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),G=(0,C.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),J=(0,C.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),K=(0,C.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),Q=l.forwardRef(function(e,t){let r=(0,S.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:i,className:o,component:l="div",disableTypography:s=!1,subheader:c,subheaderTypographyProps:d,title:u,titleTypographyProps:h}=r,f=(0,b.Z)(r,Y),v=(0,w.Z)({},r,{component:l,disableTypography:s}),m=q(v),g=u;null==g||g.type===p.Z||s||(g=(0,n.jsx)(p.Z,(0,w.Z)({variant:i?"body2":"h5",className:m.title,component:"span",display:"block"},h,{children:g})));let x=c;return null==x||x.type===p.Z||s||(x=(0,n.jsx)(p.Z,(0,w.Z)({variant:i?"body2":"body1",className:m.subheader,color:"text.secondary",component:"span",display:"block"},d,{children:x}))),(0,n.jsxs)(X,(0,w.Z)({className:(0,R.Z)(m.root,o),as:l,ref:t,ownerState:v},f,{children:[i&&(0,n.jsx)(G,{className:m.avatar,ownerState:v,children:i}),(0,n.jsxs)(K,{className:m.content,ownerState:v,children:[g,x]}),a&&(0,n.jsx)(J,{className:m.action,ownerState:v,children:a})]}))});var U=(0,r(8169).Z)((0,n.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ee(e){return(0,N.Z)("MuiAvatar",e)}(0,E.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let et=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],er=e=>{let{classes:t,variant:r,colorDefault:a}=e;return(0,y.Z)({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},ee,t)},ea=(0,C.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,w.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,w.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),ei=(0,C.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),en=(0,C.ZP)(U,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),eo=l.forwardRef(function(e,t){let r=(0,S.Z)({props:e,name:"MuiAvatar"}),{alt:a,children:i,className:o,component:s="div",imgProps:c,sizes:d,src:u,srcSet:h,variant:p="circular"}=r,f=(0,b.Z)(r,et),v=null,m=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:a}){let[i,n]=l.useState(!1);return l.useEffect(()=>{if(!r&&!a)return;n(!1);let i=!0,o=new Image;return o.onload=()=>{i&&n("loaded")},o.onerror=()=>{i&&n("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=r,a&&(o.srcset=a),()=>{i=!1}},[e,t,r,a]),i}((0,w.Z)({},c,{src:u,srcSet:h})),g=u||h,x=g&&"error"!==m,Z=(0,w.Z)({},r,{colorDefault:!x,component:s,variant:p}),y=er(Z);return v=x?(0,n.jsx)(ei,(0,w.Z)({alt:a,src:u,srcSet:h,sizes:d,ownerState:Z,className:y.img},c)):null!=i?i:g&&a?a[0]:(0,n.jsx)(en,{className:y.fallback}),(0,n.jsx)(ea,(0,w.Z)({as:s,ownerState:Z,className:(0,R.Z)(y.root,o),ref:t},f,{children:v}))});function el(e){return(0,N.Z)("MuiCardContent",e)}(0,E.Z)("MuiCardContent",["root"]);let es=["className","component"],ec=e=>{let{classes:t}=e;return(0,y.Z)({root:["root"]},el,t)},ed=(0,C.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),eu=l.forwardRef(function(e,t){let r=(0,S.Z)({props:e,name:"MuiCardContent"}),{className:a,component:i="div"}=r,o=(0,b.Z)(r,es),l=(0,w.Z)({},r,{component:i}),s=ec(l);return(0,n.jsx)(ed,(0,w.Z)({as:i,className:(0,R.Z)(s.root,a),ownerState:l,ref:t},o))});var eh=r(8037);function ep(){let{phone:e}=(0,o.Sz)(u,e=>e[0]);return(0,n.jsx)(h.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,n.jsxs)($,{sx:{maxWidth:345},children:[(0,n.jsx)(Q,{avatar:(0,n.jsx)(eo,{"aria-label":"recipe"}),title:"잘 먹겠습니다.",subheader:"".concat(new Date().toLocaleDateString()+e,"님")}),(0,n.jsx)(eu,{sx:{textAlign:"center",height:400},children:(0,n.jsx)(eh.Z,{color:"success",sx:{height:400,fontSize:300}})})]})})}function ef(){let{view:e}=(0,o.Sz)(u,e=>e[0]);return(0,n.jsx)(n.Fragment,{children:e===i.TYPE_PHONE?(0,n.jsx)(g,{}):e===i.CHOOSE_ORDER?(0,n.jsx)(T,{}):e===i.FINISH_ORDER?(0,n.jsx)(ep,{}):(0,n.jsx)(n.Fragment,{})})}function ev(){return(0,n.jsx)(u.Provider,{value:d(),children:(0,n.jsx)(ef,{})})}}},function(e){e.O(0,[119,774,888,179],function(){return e(e.s=6761)}),_N_E=e.O()}]);