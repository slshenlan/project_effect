import{u,_ as m}from"./use-css-sample-CR3oCY3A.js";import{_ as p}from"./index-DWUak_7I.js";import{j as h,O as t,H as r,k as s,I as x,P as n,F as _,Q as v,G as i,R as g,S as z}from"./vue-Dsq7ZBFK.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xml-B4wjFJM7.js";import"./tdesign-BuA519YA.js";const k=[{cla:"sl-btn-hover-1",text:"bubble",code:{css:`
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
  `}},{cla:"sl-btn-hover-2",text:"bubble",code:{css:`
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
  `}},{cla:"sl-btn-hover-3",text:"bubble",code:{css:`
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
  `}},{cla:"sl-btn-hover-4",text:"bubble",code:{css:`
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
  `}},{cla:"sl-btn-hover-5",text:"bubble",code:{css:`
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
  `}},{cla:"sl-btn-slide-1",text:"slide",code:{css:`
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
   `}},{cla:"sl-btn-slide-2",text:"slide",code:{css:`
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
   `}},{cla:"sl-btn-slide-3",text:"slide",code:{css:`
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
  `}},{cla:"sl-btn-slide-4",text:"slide",code:{css:`
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
  `}},{cla:"sl-btn-jelly",text:"jelly",code:{css:`
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
  `}}];function y(){return u({samples:k,html:o=>`
 <button class="${o.cla}">${o.text}</button>
        `})}const C={class:"sl-layout-content"},j={class:"list"},B=["onClick"],V=h({__name:"index",setup(o){const{samples:a,codeViewRef:l,codeDetail:c}=y();return(X,Y)=>{const d=p,f=m;return r(),t("div",C,[s(d,null,{default:x(()=>[n("div",j,[n("ul",null,[(r(!0),t(_,null,v(i(a),(e,b)=>(r(),t("li",{key:b,onClick:R=>i(c)(e)},[n("button",{class:g(e.cla)},z(e.text),3)],8,B))),128))])])]),_:1}),s(f,{ref_key:"codeViewRef",ref:l},null,512)])}}}),P=w(V,[["__scopeId","data-v-fe2dd6b2"]]);export{P as default};
