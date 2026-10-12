import{u as d,_ as g}from"./use-css-sample-CR3oCY3A.js";import{_ as h}from"./index-DWUak_7I.js";import{j as b,O as o,H as s,k as r,I as _,P as e,F as y,Q as x,G as a}from"./vue-Dsq7ZBFK.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xml-B4wjFJM7.js";import"./tdesign-BuA519YA.js";const t=`
  input {
   font-size: 16px;
   width: 150px;
   height: 50px;
   padding: 7px 9px;
   border: 1px solid @default_border_color;
   transition: background-color 0.3s ease-in-out;
  } `,k=[{cla:"sl-input-border-type-1",code:{html:`
<div class="sl-input-border-type-1" >
    <input  type="text" placeholder="Input Outline"  />
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
</div>
`,css:`
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

`}},{cla:"sl-input-border-type-2",code:{html:`
<div class="sl-input-border-type-2">
  <input type="text" placeholder="Input Outline" />
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
`,css:`
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

`}},{cla:"sl-input-border-type-3",code:{html:`
<div class="sl-input-border-type-3">
  <input type="text" placeholder="Input Trace" />
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
`,css:`

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

`}},{cla:"sl-input-border-type-4",code:{html:`
<div class="sl-input-border-type-4">
  <input type="text" placeholder="Input Underline" />
  <span></span>
</div>

`,css:`

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

`}},{cla:"sl-input-border-type-5",code:{html:`
<div class="sl-input-border-type-5">
  <input type="text" placeholder="Input Underline" />
  <span></span>
</div>
`,css:`
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

`}}];function X(){return d({samples:k,ignoreInput:!0})}const w={class:"sl-layout-content"},I={class:"list"},Y=["innerHTML","onClick"],C=b({__name:"index",setup($){const{samples:i,codeViewRef:l,codeDetail:p}=X();return(B,V)=>{const c=h,f=g;return s(),o("div",w,[r(c,null,{default:_(()=>[e("div",I,[e("ul",null,[(s(!0),o(y,null,x(a(i),(n,m)=>(s(),o("li",{innerHTML:n.code.html,key:m,onClick:u=>a(p)(n,u)},null,8,Y))),128))])])]),_:1}),r(f,{ref_key:"codeViewRef",ref:l},null,512)])}}}),N=v(C,[["__scopeId","data-v-f441dc90"]]);export{N as default};
