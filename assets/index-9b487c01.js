import g from"./index-ed55890e.js";import b from"./index-9eb8ef13.js";import{_}from"./index-10e24cf3.js";import{g as y,r as x,h as s,j as n,B as l,I as v,m as p,F as k,N as X,R as I}from"./vue-e0e31f72.js";import"./arco-38a32e5c.js";/* empty css              */const t=`
  input {
   font-size: 16px;
   width: 150px;
   height: 50px;
   padding: 7px 9px;
   border: 1px solid @default_border_color;
   transition: background-color 0.3s ease-in-out;
  } `,C=[{cla:"sl-input-border-type-1",code:{html:`
\`\`\`html
<div class="sl-input-border-type-1" >
    <input  type="text" placeholder="Input Outline"  />
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-1 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
  }
                 
  span {
      position: absolute;
      background-color: @default_color;
      transition: transform 0.5s ease;
  
      &.bottom,
      &.top {
          height: 2px;
          left: 0;
          right: 0;
          transform: scaleX(0);
      }
  
      &.left,
      &.right {
          width: 2px;
          top: 0;
          bottom: 0;
          transform: scaleY(0);
      }
  
      &.bottom {
          bottom: 0;
          transform-origin: bottom right;
      }
  
      &.right {
          right: 0;
          transform-origin: top right;
      }
  
      &.top {
          top: 0;
          transform-origin: top left;
      }
  
      &.left {
          left: 0;
          transform-origin: bottom left;
      }
  }
                 
  input:focus {
      ~ .bottom {
          transform-origin: bottom left;
          transform: scaleX(1);
      }
      ~ .right {
          transform-origin: bottom right;
          transform: scaleY(1);
      }
  
      ~ .top {
          transform-origin: top right;
          transform: scaleX(1);
      }
      ~ .left {
          transform-origin: top left;
          transform: scaleY(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-input-border-type-2",code:{html:`
\`\`\`html
<div class="sl-input-border-type-2">
  <input type="text" placeholder="Input Outline" />
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-2 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
  }
                 
  span {
      position: absolute;
      background-color: @default_color;
      transition: transform 0.5s ease;
  
      &.bottom,
      &.top {
          height: 2px;
          left: 0;
          right: 0;
          transform: scaleX(0);
      }
  
      &.left,
      &.right {
          width: 2px;
          top: 0;
          bottom: 0;
          transform: scaleY(0);
      }
  
      &.top {
          top: 0;
      }
  
      &.bottom {
          bottom: 0;
      }
  
      &.left {
          left: 0;
      }
  
      &.right {
          right: 0;
      }
  }
                 
  input:focus {
      ~ .top,
      ~ .bottom {
          transform: scaleX(1);
      }
  
      ~ .left,
      ~ .right {
          transform: scaleY(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-input-border-type-3",code:{html:`
\`\`\`html 
<div class="sl-input-border-type-3">
  <input type="text" placeholder="Input Trace" />
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-3 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
  }
                 
  span {
      position: absolute;
      background-color: @default_color;
      transition: transform 0.1s ease;
  
      &.bottom,
      &.top {
          height: 2px;
          left: 0;
          right: 0;
          transform: scaleX(0);
      }
  
      &.left,
      &.right {
          width: 2px;
          top: 0;
          bottom: 0;
          transform: scaleY(0);
      }
  
      &.bottom {
          bottom: 0;
          transform-origin: bottom right;
      }
  
      &.right {
          right: 0;
          transform-origin: top right;
          transition-delay: 0.05s;
      }
  
      &.top {
          top: 0;
          transform-origin: top left;
          transition-delay: 0.15s;
      }
  
      &.left {
          left: 0;
          transform-origin: bottom left;
          transition-delay: 0.25s;
      }
  }
                 
  input:focus {
      ~ .bottom {
          transform-origin: bottom left;
          transform: scaleX(1);
      }
  
      ~ .right {
          transform-origin: bottom right;
          transform: scaleY(1);
      }
  
      ~ .top {
          transform-origin: top right;
          transform: scaleX(1);
      }
  
      ~ .left {
          transform-origin: top left;
          transform: scaleY(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-input-border-type-4",code:{html:`
\`\`\`html 
<div class="sl-input-border-type-4">
  <input type="text" placeholder="Input Underline" />
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-4 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
      ~ span {
          transform-origin: bottom left;
          transform: scaleX(1);
      }
  }
  span {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: @default_color;
      transform-origin: bottom right;
      transform: scaleX(0);
      transition: transform 0.5s ease;
  }
}
\`\`\`
`}},{cla:"sl-input-border-type-5",code:{html:`
\`\`\`html 
<div class="sl-input-border-type-5">
  <input type="text" placeholder="Input Underline" />
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-5 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
      ~ span {
          transform: translate(-50%, 0) scaleX(1);
          opacity: 1;
      }
  }
  span {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 2px;
      opacity: 0;
      background-color: @default_color;
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: all 0.3s ease;
  }
}
\`\`\`
`}}];const Y={class:"sl-layout-content"},w={class:"list"},$=["innerHTML","onClick"],N={__name:"index",setup(B){const{proxy:c}=y();c.$pub;const m=C,r=x(null);function f(e,a){if(a.target.nodeName!=="INPUT"){let o=e.code;r.value.show({html:o.html,css:o.css})}}return(e,a)=>{const o=b,u=g;return s(),n("div",Y,[l(o,null,{default:v(()=>[p("div",w,[p("ul",null,[(s(!0),n(k,null,X(I(m),(i,d)=>(s(),n("li",{innerHTML:i.code.html,key:d,onClick:h=>f(i,h)},null,8,$))),128))])])]),_:1}),l(u,{ref_key:"slComCode",ref:r},null,512)])}}},M=_(N,[["__scopeId","data-v-130c1219"]]);export{M as default};
