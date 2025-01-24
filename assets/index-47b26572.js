import f from"./index-ed55890e.js";import g from"./index-9eb8ef13.js";import{_ as w}from"./index-10e24cf3.js";import{g as $,r as m,h as t,j as s,B as a,I as u,m as d,F as _,N as y,n as k,R as C}from"./vue-e0e31f72.js";import"./arco-38a32e5c.js";/* empty css              */const o=`
\`\`\`css
.sl-icon {
    position: relative;
    display: inline-block;
    height: 20px;
    width: 20px;
    font-size: 20px;
    box-sizing: border-box;
    text-indent: -9999px;
    vertical-align: middle;  
  }`,r=` content: '';
      box-sizing: inherit;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);`,v=[{cla:"sl-icon-arrow-up",code:{css:`${o}
.sl-icon-arrow-up{
  &::before {
     ${r}
      height: 13px;
      width: 13px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      box-sizing: inherit;
      transform: translate(-50%, -25%) rotate(45deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-arrow-right",code:{css:`${o}
.sl-icon-arrow-right{
  &::before {
     ${r}
      height: 13px;
      width: 13px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      transform: translate(-75%, -50%) rotate(135deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-arrow-down",code:{css:`${o}
.sl-icon-arrow-down {
  &::before {
     ${r}
      height: 13px;
      width: 13px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      transform: translate(-50%, -75%) rotate(225deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-arrow-left",code:{css:`${o}
.sl-icon-arrow-left {
  &::before {
     ${r}
      height: 13px;
      width: 13px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      transform: translate(-25%, -50%) rotate(-45deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-upward",code:{css:`${o}
.sl-icon-upward {
  &::before {
     ${r}
      height: 13px;
      width: 13px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
     ${r}
      height: 16px;
      border-left: 2px solid;
      top: 55%;
  }
}
\`\`\`
`}},{cla:"sl-icon-forward",code:{css:`${o}
.sl-icon-forward {
  &::before {
     ${r}
      height: 13px;
      width: 13px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      transform: translate(-50%, -50%) rotate(135deg);
  }
  &::after {
     ${r}
      width: 16px;
      border-top: 2px solid;
      left: 45%;
  }
}
\`\`\`
`}},{cla:"sl-icon-downward",code:{css:`${o}
.sl-icon-downward {
  &::before {
     ${r}
      height: 13px;
      width: 13px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      transform: translate(-50%, -50%) rotate(-135deg);
  }
  &::after {
     ${r}
      height: 16px;
      border-left: 2px solid;
      top: 45%;
  }
}
\`\`\`
`}},{cla:"sl-icon-backward",code:{css:`${o}
.sl-icon-backward {
  &::before {
     ${r}
      height: 13px;
      width: 13px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
     ${r}
      width: 16px;
      border-top: 2px solid;
      left: 55%;
  }
}
\`\`\`
            `}},{cla:"sl-icon-menu",code:{css:`${o}
.sl-icon-menu {
  &::before {
     ${r}
      box-shadow: 0 -0.35em, 0 0.35em;
      border-top: 2px solid;
      width: 100%;
  }
}
\`\`\`
`}},{cla:"sl-icon-apps",code:{css:`${o}
.sl-icon-apps {
  &::before {
     ${r}
      height: 0.15em;
      width: 0.15em;
      background: currentColor;
      box-shadow: -0.35em -0.35em, -0.35em 0, -0.35em 0.35em, 0 -0.35em, 0 0.35em,
         0.35em -0.35em, 0.35em 0, 0.35em 0.35em;
  }
}
\`\`\`
`}},{cla:"sl-icon-horiz",code:{css:`${o}
.sl-icon-horiz {
  &::before {
     ${r}
      height: 0.2em;
      width: 0.2em;
      background: currentColor;
      border-radius: 50%;
      box-shadow: -8px 0, 8px 0;
  }
}
\`\`\`
`}},{cla:"sl-icon-vert",code:{css:`${o}
.sl-icon-vert {
  &::before {
     ${r}
      height: 0.2em;
      width: 0.2em;
      background: currentColor;
      border-radius: 50%;
      box-shadow: 0 -8px, 0 8px;
  }
}
\`\`\`
`}},{cla:"sl-icon-resize-horiz",code:{css:`${o}
.sl-icon-resize-horiz {
  &::before,
  &::after {
     ${r}
      height: 8px;
      width: 8px;
      border-style: solid;
      border-width: 2px 0 0 2px;
  }
  &::before {
     transform: translate(-90%, -50%) rotate(-45deg);
  &::after {
     transform: translate(-10%, -50%) rotate(135deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-resize-vert",code:{css:`${o}
.sl-icon-resize-vert {
  &::before,
  &::after {
     ${r}
      height: 8px;
      width: 8px;
      border-style: solid;
      border-width: 2px 0 0 2px;
  }
  &::before {
     transform: translate(-50%, -90%) rotate(45deg);
  &::after {
     transform: translate(-50%, -10%) rotate(225deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-plus",code:{css:`${o}
.sl-icon-plus {
  &::before {
     ${r}
      width: 90%;
      border-top: 2px solid;
  }
  &::after {
     ${r}
      height: 90%;
      border-left: 2px solid;
  }
}
\`\`\`
`}},{cla:"sl-icon-minus",code:{css:`${o}
.sl-icon-minus {
  &::before {
     ${r}
      width: 90%;
      border-top: 2px solid;
  }
}
\`\`\`
`}},{cla:"sl-icon-close",code:{css:`${o}
.sl-icon-close {
  &::before {
     ${r}
      width: 90%;
      border-top: 2px solid;
      transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
     ${r}
      height: 90%;
      border-left: 2px solid;
      transform: translate(-50%, -50%) rotate(45deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-check",code:{css:`${o}
.sl-icon-check {
  &::before {
     ${r}
      border-style: solid;
      border-width: 0 0 2px 2px;
      height: 10px;
      width: 18px;
      transform: translate(-50%, -6px) rotate(-45deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-stop",code:{css:`${o}
.sl-icon-stop {
  &::before {
     ${r}
      width: 18px;
      border-top: 2px solid;
      transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
     ${r}
      width: 18px;
      height: 18px;
      border: 2px solid;
      border-radius: 50%;
  }
}
\`\`\`
`}},{cla:"sl-icon-shutdown",code:{css:`${o}
.sl-icon-shutdown {
  &::before {
     ${r}
      height: 10px;
      border-left: 2px solid;
      top: 5px;
  }
  &::after {
     ${r}
      width: 18px;
      height: 18px;
      border: 2px solid;
      border-top-color: transparent;
      border-radius: 50%;
  } 
}
\`\`\`
`}},{cla:"sl-icon-refresh",code:{css:`${o}
.sl-icon-refresh {
  &::before {
     ${r}
      width: 18px;
      height: 18px;
      border: 2px solid;
      border-right-color: transparent;
      border-radius: 50%;
  }
  &::after {
     ${r}
      border: 4px solid;
      border-left-color: transparent;
      border-top-color: transparent;
      left: 75%;
      top: 20%;
  }
}
\`\`\`
`}},{cla:"sl-icon-search",code:{css:`${o}
.sl-icon-search {
  &::before {
     ${r}
      width: 15px;
      height: 15px;
      border: 2px solid;
      border-radius: 50%;
      left: 5%;
      top: 5%;
      transform: translate(0, 0) rotate(45deg);
  }
  &::after {
     ${r}
      width: 8px;
      border-top: 2px solid;
      left: 80%;
      top: 80%;
      transform: translate(-50%, -50%) rotate(45deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-flag",code:{css:`${o}
.sl-icon-flag {
  &::before {
     ${r}
      height: 18px;
      border-left: 2px solid;
      left: 10%;
  &::after {
     ${r}
      width: 17px;
      height: 14px;
      border: 2px solid;
      border-bottom-right-radius: 2px;
      border-left: 0;
      border-top-right-radius: 2px;
      left: 52%;
      top: 35%;
  }
}
\`\`\`
`}},{cla:"sl-icon-bookmark",code:{css:`${o}
.sl-icon-bookmark {
  &::before {
     ${r}
      width: 17px;
      height: 18px;
      border: 2px solid;
      border-bottom: 0;
      border-radius: 2px 2px 0 0;
  }
  &::after {
     ${r}
      width: 10px;
      height: 10px;
      border-style: solid;
      border-width: 2px 2px 0 0;
      border-radius: 2px;
      transform: translate(-50%, 4px) rotate(-45deg) skew(15deg, 15deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-edit",code:{css:`${o}
.sl-icon-edit {
  &::before {
     ${r}
      border: 2px solid;
      width: 17px;
      height: 8px;
      transform: translate(-7px, -5px) rotate(-45deg);
  }
  &::after {
     ${r}
      border: 3px solid;
      border-right-color: transparent;
      border-top-color: transparent;
      left: 5%;
      top: 95%;
      transform: translate(0, -100%);
  }
}
\`\`\`
`}},{cla:"sl-icon-delete",code:{css:`${o}
.sl-icon-delete {
  &::before {
     ${r}
      width: 15px;
      height: 12px;
      border: 2px solid;
      border-top: 0;
      border-radius: 0 0 2px 2px;
      top: 70%;
  }
  &::after {
     ${r}
      width: 10px;
      border-top: 2px solid;
      box-shadow: -4px 4px, 4px 4px;
      top: 1px;
  }
}
\`\`\`
`}},{cla:"sl-icon-share",code:{css:`${o}
.sl-icon-share {
  border: solid transparent;
  border-width: 2px 2px 0 0;
  box-shadow: inset 0 -2px, inset 2px 0;
  &::before {
     ${r}
      width: 8px;
      height: 8px;
      border-style: solid;
      border-width: 0 2px 2px 0;
      left: 100%;
      top: 4px;
      transform: translate(-125%, -50%) rotate(-45deg);
  }
  &::after {
     ${r}
      width: 12px;
      height: 12px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      border-radius: 75% 15%;
  }
}
\`\`\`
`}},{cla:"sl-icon-download",code:{css:`${o}
.sl-icon-download {
  border: solid transparent;
  border-width: 0 1px;
  box-shadow: inset 0 -2px;
  &::before {
     ${r}
      width: 10px;
      height: 10px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      transform: translate(-50%, -6px) rotate(-135deg);
  }
  &::after {
     ${r}
      height: 12px;
      border-left: 2px solid;
      top: 40%;
  }
}
\`\`\`
`}},{cla:"sl-icon-upload",code:{css:`${o}
.sl-icon-upload {
  border: solid transparent;
  border-width: 0 1px;
  box-shadow: inset 0 -2px;
  &::before {
     ${r}
      width: 10px;
      height: 10px;
      border-style: solid;
      border-width: 2px 0 0 2px;
      transform: translate(-50%, -60%) rotate(45deg);
  }
  &::after {
     ${r}
      height: 12px;
      border-left: 2px solid;
  }
}
\`\`\`
`}},{cla:"sl-icon-copy",code:{css:`${o}
.sl-icon-copy {
  &::before {
     ${r}
      width: 14px;
      height: 16px;
      border: 2px solid;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-radius: 2px;
      left: 40%;
      top: 40%;
  }
  &::after {
     ${r}
      width: 14px;
      height: 16px;
      border: 2px solid;
      border-radius: 2px;
      left: 60%;
      top: 60%;
  }
}
\`\`\`
`}},{cla:"sl-icon-info",code:{css:`${o}
.sl-icon-info {
  &::before {
     ${r}
      width: 18px;
      height: 18px;
      border: 2px solid;
      border-radius: 50%;
  }
  &::after {
     ${r}
      width: 2px;
      height: 10px;
      border-top: 6px solid;
      border-bottom: 2px solid;
  }
}
\`\`\`
`}},{cla:"sl-icon-audio",code:{css:`${o}
.sl-icon-audio {
  border: solid transparent;
  border-width: 4px 6px;
  border-radius: 45%;
  box-shadow: inset 0 2px, inset 2px 0, inset -2px 0, inset 0 -2px;
  transform: translateY(-4px);
  &::before {
     ${r}
      height: 3px;
      border-left: 2px solid;
      transform: translate(-50%, 10px);
  }
  &::after {
     ${r}
      width: 14px;
      height: 14px;
      border: 2px solid;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-radius: 50%;
      transform: translate(-50%, -25%) rotate(-135deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-mail",code:{css:`${o}
.sl-icon-mail {
  &::before {
     ${r}
      width: 18px;
      height: 15px;
      border: 2px solid;
      border-radius: 2px;
  }
  &::after {
     ${r}
      width: 8px;
      height: 8px;
      border-style: solid;
      border-width: 0 0 2px 2px;
      transform: translate(-50%, -7px) rotate(-45deg) skew(10deg, 10deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-person",code:{css:`${o}
.sl-icon-person {
  &::before {
     ${r}
      width: 9px;
      height: 9px;
      border: 2px solid;
      border-radius: 50%;
      top: 25%;
  }
  &::after {
     ${r}
      width: 18px;
      height: 8px;
      border: 2px solid;
      border-radius: 50% 50% 0 0;
      top: 75%;
  }
}
\`\`\`
`}},{cla:"sl-icon-message",code:{css:`${o}
.sl-icon-message {
  border: solid transparent;
  border-width: 1px 1px 6px;
  border-radius: 3px;
  box-shadow: inset 0 2px, inset -2px 0, inset 2px 0;
  &::before {
     ${r}
      width: 17px;
      height: 2px;
      border-left: calc(2px + 2px) solid;
      border-right: calc(10px - 2px) solid;
      top: 100%;
  }
  &::after {
     ${r}
      width: 6px;
      height: 6px;
      border-style: solid;
      border-width: 0 0 2px 2px;
      left: calc(2px + 2px);
      top: calc(100% - 2.4px);
      transform: skewY(-45deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-photo",code:{css:`${o}
.sl-icon-photo {
  border: solid transparent;
  border-width: 2px 1px;
  box-shadow: inset 0 2px, inset 2px 0, inset -2px 0, inset 0 -2px;
  border-radius: 4px;
  &::before {
     ${r}
      width: 6px;
      height: 6px;
      border: 2px solid;
      border-radius: 50%;
      left: 35%;
      top: 35%;
  } 
  &::after {
     ${r}
      width: 10px;
      height: 10px;
      border-style: solid;
      border-width: 2px 2px 0 0;
      left: 60%;
      transform: translate(-45%, 20%) rotate(-45deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-time",code:{css:`${o}
.sl-icon-time {
  border: 1px solid transparent;
  box-shadow: inset 0 2px, inset 2px 0, inset -2px 0, inset 0 -2px;
  border-radius: 50%;
  &::before {
     ${r}
      height: 8px;
      border-left: 2px solid;
      transform: translate(-50%, -75%);
  }
  &::after {
     ${r}
      height: 5px;
      border-left: 2px solid;
      transform: translate(-50%, -75%) rotate(125deg);
      transform-origin: 50% 100%;
  }
}
\`\`\`
`}},{cla:"sl-icon-location",code:{css:`${o}
.sl-icon-location {
  &::before {
     ${r}
      width: 16px;
      height: 16px;
      border: 2px solid;
      border-radius: 50% 50% 50% 0;
      transform: translate(-50%, -60%) rotate(-45deg);
  }
  &::after {
     ${r}
      width: 6px;
      height: 6px;
      border: 2px solid;
      border-radius: 50%;
      transform: translate(-50%, -5px);
  }
}
\`\`\`
`}},{cla:"sl-icon-link",code:{css:`${o}
.sl-icon-link {
  &::before,
  &::after {
     ${r}
      width: 15px;
      height: 10px;
      border: 2px solid;
      border-right: 0;
      border-radius: 50px 0 0 50px;
  }
  &::before {
     transform: translate(-70%, -45%) rotate(-45deg);
  }
  &::after {
     transform: translate(-30%, -55%) rotate(135deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-emoji",code:{css:`${o}
.sl-icon-emoji {
  border: 1px solid transparent;
  box-shadow: inset 0 2px, inset 2px 0, inset -2px 0, inset 0 -2px;
  border-radius: 50%;
  &::before {
     ${r}
      width: 4px;
      height: 4px;
      border-radius: 50%;
      box-shadow: -3.4px -2px, 3.4px -2px;
  }
  &::after {
     ${r}
      width: 10px;
      height: 10px;
      border: 2px solid;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-radius: 50%;
      transform: translate(-50%, -4px) rotate(-135deg);
  }
}
\`\`\`
`}},{cla:"sl-icon-eye",code:{css:`${o}
.sl-icon-eye {
  &::before {
     ${r}
      width: 18px;
      height: 18px;
      border: 2px solid;
      border-radius: 70% 15%;
      transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
     ${r}
      width: 10px;
      height: 10px;
      border: 2px solid;
      border-radius: 50%;
  }
}
\`\`\`
`}},{cla:"sl-icon-pin",code:{css:`${o}
.sl-icon-pin {
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  border: 2px s
  &::before {
     ${r}
      width: 6px;
      height: 6px;
      border: 2px solid;
      border-radius: 50%;
  }
}
\`\`\`
`}},{cla:"sl-icon-sun",code:{css:`${o}
.sl-icon-sun {
  width: 22px;
  height: 22px;
  border: 2px solid;
  border-radius: 50%;
  box-shadow: -15px 0 0 -9px, 15px 0 0 -9px, 0 -15px 0 -9px, 0 15px 0 -9px, 11px 11px 0 -9px,
      -11px -11px 0 -9px, 11px -11px 0 -9px, -11px 11px 0 -9px;
}
\`\`\`
`}},{cla:"sl-icon-moon",code:{css:`${o}
.sl-icon-moon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-top: solid 2px currentColor;
  border-bottom: solid 2px currentColor;
  border-left: solid 2px currentColor;
  border-right: solid 2px transparent;
  &::before {
     content: '';
     position: absolute;
     left: 9px;
     top: 1px;
     width: 14px;
     height: 14px;
     border-radius: 50%;
     border-top: solid 2px transparent;
     border-bottom: solid 2px currentColor;
     border-left: solid 2px currentColor;
     border-right: solid 2px transparent;
     transform: rotate(45deg);
  }
}
\`\`\`            
`}},{cla:"sl-icon-battery",code:{css:`${o}
.sl-icon-battery {
  position: relative;
  width: 26px;
  height: 14px;
  border-radius: 3px;
  border: solid 2px currentColor;
  &::before {
     content: '';
     position: absolute;
     right: -5px;
     top: 2px;
     width: 4px;
     height: 6px;
     border-radius: 0 2px 2px 0;
     border-top: solid 2px currentColor;
     border-right: solid 2px currentColor;
     border-bottom: solid 2px currentColor;
  }
  &:after {
     content: '';
     position: absolute;
     height: 9px;
     width: 18px;
     left: 1px;
     top: 50%;
     transform: translateY(-50%);
     background-color: currentColor;
  }
}
\`\`\`            
`}}];const z={class:"sl-layout-content"},B={class:"list"},I=["onClick"],j={__name:"index",setup(N){const{proxy:l}=$();l.$pub;const n=v,i=m(null);function x(e){i.value.show({html:`
\`\`\`html
    <i class="sl-icon ${e.cla}"></i>
\`\`\`
`,css:e.code.css})}return(e,Y)=>{const c=g,h=f;return t(),s("div",z,[a(c,null,{default:u(()=>[d("div",B,[d("ul",null,[(t(!0),s(_,null,y(C(n),(p,b)=>(t(),s("li",{key:b,onClick:D=>x(p)},[d("i",{class:k(["sl-icon",p.cla])},null,2)],8,I))),128))])])]),_:1}),a(h,{ref_key:"slComCode",ref:i},null,512)])}}},q=w(j,[["__scopeId","data-v-fd269017"]]);export{q as default};
