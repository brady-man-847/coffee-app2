(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[212],{2033:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/room/[roomSn]",function(){return a(6297)}])},1084:function(e,t,a){"use strict";a.d(t,{g:function(){return n}});var r=a(5893),i=a(1458);function n(){return(0,r.jsx)(i.Z,{sx:{background:"linear-gradient(to right, #6fcbb6, #9c64f4)","> span":{backgroundColor:"primary"}}})}},2951:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(5893),i=a(7918);function n(e){let{data:t}=e,{sn:a,hostName:n,name:o,status:l}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsxs)("div",{children:["방번호:"," ",(0,r.jsx)(i.Z,{sx:{height:"auto","& .MuiChip-label":{display:"block",whiteSpace:"normal"}},label:a})]}),(0,r.jsxs)("div",{children:["방장:"," ",(0,r.jsx)(i.Z,{sx:{height:"auto","& .MuiChip-label":{display:"block",whiteSpace:"normal"}},label:n})]})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsxs)("div",{children:["방이름:",(0,r.jsx)(i.Z,{sx:{height:"auto","& .MuiChip-label":{display:"block",whiteSpace:"normal"}},label:o})]}),(0,r.jsxs)("div",{children:["방상태:",(0,r.jsx)(i.Z,{sx:{height:"auto","& .MuiChip-label":{display:"block",whiteSpace:"normal"}},label:l})]})]})]})}},2629:function(e,t,a){"use strict";var r,i;a.d(t,{a:function(){return r}}),(i=r||(r={})).MENU="/menu",i.LOGIN="/auth/login",i.NOT_FOUND="/404"},4665:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7041),i=a(7801),n=a(1163),o=a(7294),l=a(2629);function s(e){let{redirectPath:t}=e,a=(0,n.useRouter)(),s=(0,r.getCookie)(i.LA);(0,o.useEffect)(()=>{s?t&&a.push(t):a.push(l.a.LOGIN)},[s])}},6297:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});var r=a(5893),i=a(1857),n=a.n(i),o=a(1163),l=a(7848),s=a(6401),c=function(e){let{req:{roomSn:t},queryOption:a}=e;return(0,l.a)({queryKey:["room","get",t],queryFn:async()=>(await s.L.getRoomInfo(t)).data,...a})},d=a(5861),u=a(3366),x=a(7462),b=a(7294),m=a(6010),p=a(4780),f=a(1496),h=a(7623),g=(0,a(8169).Z)((0,r.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),j=a(1588),w=a(4867);function y(e){return(0,w.Z)("MuiAvatar",e)}(0,j.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],k=e=>{let{classes:t,variant:a,colorDefault:r}=e;return(0,p.Z)({root:["root",a,r&&"colorDefault"],img:["img"],fallback:["fallback"]},y,t)},Z=(0,f.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,x.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,x.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),N=(0,f.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),S=(0,f.ZP)(g,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),z=b.forwardRef(function(e,t){let a=(0,h.Z)({props:e,name:"MuiAvatar"}),{alt:i,children:n,className:o,component:l="div",imgProps:s,sizes:c,src:d,srcSet:p,variant:f="circular"}=a,g=(0,u.Z)(a,v),j=null,w=function({crossOrigin:e,referrerPolicy:t,src:a,srcSet:r}){let[i,n]=b.useState(!1);return b.useEffect(()=>{if(!a&&!r)return;n(!1);let i=!0,o=new Image;return o.onload=()=>{i&&n("loaded")},o.onerror=()=>{i&&n("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=a,r&&(o.srcset=r),()=>{i=!1}},[e,t,a,r]),i}((0,x.Z)({},s,{src:d,srcSet:p})),y=d||p,z=y&&"error"!==w,M=(0,x.Z)({},a,{colorDefault:!z,component:l,variant:f}),_=k(M);return j=z?(0,r.jsx)(N,(0,x.Z)({alt:i,src:d,srcSet:p,sizes:c,ownerState:M,className:_.img},s)):null!=n?n:y&&i?i[0]:(0,r.jsx)(S,{className:_.fallback}),(0,r.jsx)(Z,(0,x.Z)({as:l,ownerState:M,className:(0,m.Z)(_.root,o),ref:t},g,{children:j}))});var M=a(7918),_=a(3321);function C(e){return{sx:{bgcolor:function(e){let t,a=0;for(t=0;t<e.length;t+=1)a=e.charCodeAt(t)+((a<<5)-a);let r="#";for(t=0;t<3;t+=1){let e=a>>8*t&255;r+="00".concat(e.toString(16)).slice(-2)}return r}(e)},children:e[0].toUpperCase()}}var R=a(1084),O=a(2951),E=a(8228),I=function(e){let{mutationOption:t}=e;return(0,E.D)({mutationFn:async e=>(await s.L.payOrder(e)).data,...t})};function A(){let e=(0,o.useRouter)(),{roomSn:t}=e.query,{data:a,isLoading:i}=c({req:{roomSn:Number(t)}}),{mutate:l}=I({}),s=()=>{window.confirm("방번호:".concat(t," 결제하시겠습니까?"))&&l({roomSn:Number(t)})};return i?(0,r.jsx)(R.g,{}):a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"jsx-d2077b3caa3647d0 wrapper",children:[(0,r.jsx)(d.Z,{children:"ROOM INFO"}),(0,r.jsx)("div",{className:"jsx-d2077b3caa3647d0 room-wrapper",children:(0,r.jsx)(O.Z,{data:a.room})}),(0,r.jsx)(d.Z,{color:"secondary",children:"ROOM MEMBERS"}),(0,r.jsx)("div",{className:"jsx-d2077b3caa3647d0 avatar-wrapper",children:null==a?void 0:a.memberList.map(e=>(0,r.jsxs)("div",{className:"jsx-d2077b3caa3647d0 avatar",children:[(0,r.jsx)(z,{...C(e.nickname)}),(0,r.jsx)("div",{className:"jsx-d2077b3caa3647d0",children:e.nickname})]},"".concat(e.memberSn,"_member_key")))}),(0,r.jsx)(d.Z,{children:"ORDER LIST"}),(0,r.jsx)("div",{className:"jsx-d2077b3caa3647d0 order-wrapper",children:a.orderList.map(e=>{let{menu:t,optionList:a,memberNickname:i,memberSn:n}=e,{name:o,optionGroupList:l}=t,s=l.flatMap(e=>e.optionList).filter(e=>a.includes(e.code));return(0,r.jsxs)("div",{className:"jsx-d2077b3caa3647d0 order-item",children:[(0,r.jsx)(z,{...C(i)}),(0,r.jsxs)("div",{className:"jsx-d2077b3caa3647d0",children:[(0,r.jsx)(M.Z,{sx:{height:"auto","& .MuiChip-label":{display:"block",whiteSpace:"normal"}},label:o}),s.map(e=>(0,r.jsx)(M.Z,{sx:{height:"auto","& .MuiChip-label":{display:"block",whiteSpace:"normal"}},label:e.name},"".concat(n,"_").concat(e.code,"_option")))]})]},"".concat(e.memberSn,"_order_item"))})}),(0,r.jsx)("div",{onClick:s,className:"jsx-d2077b3caa3647d0 payment-wrapper",children:(0,r.jsx)(_.Z,{variant:"contained",children:"결제하기"})})]}),(0,r.jsx)(n(),{id:"d2077b3caa3647d0",children:".wrapper.jsx-d2077b3caa3647d0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;padding:16px}.avatar-wrapper.jsx-d2077b3caa3647d0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:8px}.avatar.jsx-d2077b3caa3647d0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:8px}.room-wrapper.jsx-d2077b3caa3647d0{padding:8px}.order-item.jsx-d2077b3caa3647d0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:8px;border:1px solid lightgray}.payment-wrapper.jsx-d2077b3caa3647d0{}"})]}):(0,r.jsx)(R.g,{})}var F=a(4665);function D(){return(0,F.Z)({}),(0,r.jsx)(A,{})}}},function(e){e.O(0,[440,184,401,774,888,179],function(){return e(e.s=2033)}),_N_E=e.O()}]);