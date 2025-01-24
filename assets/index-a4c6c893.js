import b from"./index-ed55890e.js";import m from"./index-9eb8ef13.js";import{_ as p}from"./index-10e24cf3.js";import{r as h,h as r,j as s,m as e,B as i,I as _,F as l,N as x,n as v,K as g,R as z}from"./vue-e0e31f72.js";import"./arco-38a32e5c.js";/* empty css              */const k=[{cla:"sl-btn-hover-1",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-1 {
   position: relative;
   z-index: 1;
   transition: color 0.4s ease-in-out;
   overflow: hidden;   
     &::before {
       content: '';
       z-index: -1;
       position: absolute;
       top: 100%;
       right: 100%;
       width: 60px;
       height: 60px;
       border-radius: 50%;
       background-color: @default_color;
       transform-origin: center;
       transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
       transition: transform 0.45s ease-in-out;
     }
     &:hover {
       cursor: pointer;
       color: #fff;
       &:before {
         transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
       }
     }
}
\`\`\`
`}},{cla:"sl-btn-hover-2",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-2 {
   position: relative;
   z-index: 1;
   transition: color 0.4s ease-in-out;
   overflow: hidden;   
   &::before {
     content: '';
     z-index: -1;
     position: absolute;
     top: 100%;
     left: 100%;
     width: 60px;
     height: 60px;
     border-radius: 50%;
     background-color: @default_color;
     transform-origin: center;
     transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
     transition: transform 0.45s ease-in-out;
   }
   &:hover {
     cursor: pointer;
     color: #fff;
     &:before {
         transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
     }
   }
}
\`\`\`
`}},{cla:"sl-btn-hover-3",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-3 {
  position: relative;
  z-index: 1;
  transition: color 0.4s ease-in-out;
  overflow: hidden;       
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 100%;
    right: 100%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: @default_color;
    transform-origin: center;
    transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    color: #fff;
    &:before {
      transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
    }
  }
}
\`\`\`
`}},{cla:"sl-btn-hover-4",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-4 {
  position: relative;
  z-index: 1;
  transition: color 0.4s ease-in-out;
  overflow: hidden;
                 
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 100%;
    left: 100%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: @default_color;
    transform-origin: center;
    transform: translate3d(-50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    color: #fff;
    &:before {
      transform: translate3d(-50%, 50%, 0) scale3d(15, 15, 15);
    }
  }
}
  
\`\`\`
`}},{cla:"sl-btn-hover-5",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-5 {
  position: relative;
  z-index: 1;
  transition: color 0.4s ease-in-out;
  overflow: hidden;  
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: @default_color;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    color: #fff;
    &:before {
        transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
    }
  }
}
\`\`\`
`}},{cla:"sl-btn-slide-1",text:"slide",code:{css:`
\`\`\`css
.sl-btn-slide-1 {
  position: relative;
  z-index: 1;
  overflow: hidden;
 
  &::before {
      content: '';
      z-index: -1;
      position: absolute;
      background-color: @default_color;
  
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform-origin: center bottom;
      transform: scaleY(0);
      transition: transform 0.25s ease-in-out;
  }
  &:hover {
      cursor: pointer;
      color: #fff;
      &::before {
          transform-origin: center top;
          transform: scaleY(1);
      }
  }
 }
 \`\`\`
 `}},{cla:"sl-btn-slide-2",text:"slide",code:{css:`
\`\`\`css
.sl-btn-slide-2 {
  position: relative;
  z-index: 1;
  overflow: hidden;
 
  &::before {
      content: '';
      z-index: -1;
      position: absolute;
      background-color: @default_color;
  
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform-origin: center left;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
  }
  &:hover {
      cursor: pointer;
      color: #fff;
      &::before {
          transform-origin: center right;
          transform: scaleX(1);
      }
  }
}
\`\`\`
 `}},{cla:"sl-btn-slide-3",text:"slide",code:{css:`
\`\`\`css
.sl-btn-slide-3 {
  position: relative;
  z-index: 1;
  overflow: hidden;
 
  &::before {
      content: '';
      z-index: -1;
      position: absolute;
      background-color: @default_color;
  
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform-origin: center right;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
  }
  &:hover {
      cursor: pointer;
      color: #fff;
      &::before {
          transform-origin: center left;
          transform: scaleX(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-btn-slide-4",text:"slide",code:{css:`
\`\`\`css
.sl-btn-slide-4 {
  position: relative;
  z-index: 1;
  overflow: hidden;
 
  &::before {
      content: '';
      z-index: -1;
      position: absolute;
      background-color: @default_color;
  
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform-origin: center top;
      transform: scaleY(0);
      transition: transform 0.25s ease-in-out;
  }
  &:hover {
      cursor: pointer;
      color: #fff;
      &::before {
          transform-origin: center bottom;
          transform: scaleY(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-btn-jelly",text:"jelly",code:{css:`
\`\`\`css
.sl-btn-jelly {
      // z-index: 1;
      cursor: pointer;
      &:hover {
          animation: jelly 0.5s;
      }
  }
  
  @keyframes jelly {
      0%,
      100% {
          transform: scale(1, 1);
      }
      25% {
          transform: scale(0.9, 1.1);
      }
      50% {
          transform: scale(1.1, 0.9);
      }
      75% {
          transform: scale(0.95, 1.05);
      }
  }
}
\`\`\`  
`}}];const w={class:"sl-layout-content"},y={class:"list"},C=["onClick"],j={__name:"index",setup(B){const a=k,n=h(null);function c(o){n.value.show({html:`
\`\`\`html
          <button class="${o.cla}">${o.text}</button>
\`\`\`
        `,css:o.code.css})}return(o,X)=>{const d=m,f=b;return r(),s(l,null,[e("div",w,[i(d,null,{default:_(()=>[e("div",y,[e("ul",null,[(r(!0),s(l,null,x(z(a),(t,u)=>(r(),s("li",{key:u,onClick:Y=>c(t)},[e("button",{class:v(t.cla)},g(t.text),3)],8,C))),128))])])]),_:1})]),i(f,{ref_key:"slComCode",ref:n},null,512)],64)}}},V=p(j,[["__scopeId","data-v-7d09ad38"]]);export{V as default};
