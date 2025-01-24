import y from"./index-ed55890e.js";import f from"./index-9eb8ef13.js";import{_ as g}from"./index-10e24cf3.js";import{g as v,r as x,h as i,j as a,B as o,I as u,m as l,F as b,N as w,R as k}from"./vue-e0e31f72.js";import"./arco-38a32e5c.js";/* empty css              */const _=[{cla:"sl-loading-type-1",code:{html:`
\`\`\`html
<div class="sl-loading-type-1">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css   
.sl-loading-type-1 {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 30px;
  span {
      display: inline-block;
      width: 5px;
      height: 15px;
      background-color: #2d8cf0;
      &:nth-child(1) {
          animation: sl-animgrow-date-type-1 1s ease-in-out -0.45s infinite;
      }
      &:nth-child(2) {
          animation: sl-animgrow-date-type-1 1s ease-in-out -0.3s infinite;
      }
      &:nth-child(3) {
          animation: sl-animgrow-date-type-1 1s ease-in-out -0.15s infinite;
      }
      &:nth-child(4) {
          animation: sl-animgrow-date-type-1 1s ease-in-out infinite;
      }
  }
}
           
@keyframes sl-animgrow-date-type-1 {
    0%,
    100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(2);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-2",code:{html:`
\`\`\`html
<div class="sl-loading-type-2">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css 
.sl-loading-type-2 {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
                 
  span {
    display: inline-block;
    background-color: #2d8cf0;
    height: 100%;
    width: 6px;
    margin: auto 2px;
    animation: sl-animgrow-date-type-2 1.2s ease-in-out infinite;
               
    &:nth-child(2) {
        animation-delay: -1.1s;
    }
    &:nth-child(3) {
        animation-delay: -1s;
    }
    &:nth-child(4) {
        animation-delay: -0.9s;
    }
    &:nth-child(5) {
        animation-delay: -0.8s;
    }
  }
}
@keyframes sl-animgrow-date-type-2 {
  0%,
  40%,
  100% {
      transform: scaleY(0.4);
  }  
  20% {
      transform: scaleY(1);
  }
}
\`\`\`
`}},{cla:"sl-loading-type-3",code:{html:'\n```html\n<div class="sl-loading-type-3">\n  <div></div>\n</div>\n```\n',css:`
\`\`\`css 
.sl-loading-type-3 {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  > div {
      width: 50px;
      height: 50px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      botto
      &::before {
          content: '';
          width: 50px;
          position: absolute;
          left: 0;
          height: 5px;
          // background: #000;
          opacity: 0.1;
          top: 59px;
          border-radius: 50%;
          animation: sl-animtype-3-shadow 0.5s linear infinite;
  
      &:after {
          content: '';
          width: 50px;
          position: absolute;
          left: 0;
          height: 50px;
          background: #2d8cf0;
          animation: sl-animtype-3-animate 0.5s linear infinite;
          top: 0;
          border-radius: 3px;
      }
  }
}

@keyframes sl-animtype-3-shadow {
    0%,
    to {
        transform: scale(1);
    }
    50% {
        transform: scaleX(1.2);
    }
}
@keyframes sl-animtype-3-animate {
    17% {
        border-bottom-right-radius: 3px;
    }
    25% {
        transform: translateY(9px) rotate(22.5deg);
    }
    50% {
        transform: translateY(18px) scaleY(0.9) rotate(45deg);
        border-bottom-right-radius: 40px;
    }
    75% {
        transform: translateY(9px) rotate(67.5deg);
    }
    to {
        transform: translateY(0) rotate(90deg);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-4",code:{html:`
\`\`\`html      
<div class="sl-loading-type-4">
  <span></span>
  <span></span>
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css 
.sl-loading-type-4 {
   width: 70px;
   display: flex;
   flex-flow: row nowrap;
   align-items: center;
   justify-content: space-between;
   span {
       display: inline-block;
       width: 14px;
       height: 14px;
       border-radius: 50%;
       background: #2d8cf0;
       &:nth-child(1) {
           transform: translateX(-100%);
           animation: sl-animtype-4-left-swing 0.5s ease-in infinite alternate;
       }
       &:nth-child(3) {
           transform: translateX(-95%);
           animation: sl-animtype-4-right-swing 0.5s ease-out infinite alternate;
       }
   }
}

@keyframes sl-animtype-4-left-swing {
    50%,
    100% {
        transform: translateX(95%);
    }
}
@keyframes sl-animtype-4-right-swing {
    50% {
        transform: translateX(-95%);
    }
    100% {
        transform: translateX(100%);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-5",code:{html:`
\`\`\`html  
<div class="sl-loading-type-5">
  <span></span>
  <span></span>
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-loading-type-5 {
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #2d8cf0;
      animation: sl-animtype-5 0.8s ease-in-out infinite alternate;
                 
      &:nth-child(1) {
          animation-delay: -0.4s;
      }
      &:nth-child(2) {
          animation-delay: -0.2s;
      }
  }
}
@keyframes sl-animtype-5 {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
\`\`\`
`}},{cla:"sl-loading-type-6",code:{html:`
\`\`\`html 
<div class="sl-loading-type-6">
  <span></span>
  <span></span>
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-loading-type-6 {
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  span {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #2d8cf0;
      transform: translateY(-100%);
      animation: sl-animtype-6 0.8s ease-in-out infinite alternate;
 
      &:nth-child(1) {
          animation-delay: -0.4s;
      }
      &:nth-child(2) {
          animation-delay: -0.2s;
      }
  }
}

@keyframes sl-animtype-6 {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(100%);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-7",code:{html:`
\`\`\`html 
<div class="sl-loading-type-7">
   <span></span>
   <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-loading-type-7 {
  width: 70px;
  height: 70px;
  position: relative;
  text-align: center;
  animation: sl-animtype-7-rotate 2s linear infinite;
                 
  span {
      display: inline-block;
      width: 42px;
      height: 42px;
      position: absolute;
                 
      background-color: #2d8cf0;
      border-radius: 100%;
      animation: sl-animtype-7-bounce 2s ease-in-out infinite;
                 
      &:nth-child(2) {
          top: 0;
      }
      &:nth-child(2) {
          top: auto;
          bottom: 0;
          animation-delay: -1s;
      }
  }
}
  

@keyframes sl-animtype-7-rotate {
    100% {
        transform: rotate(1turn);
    }
}
@keyframes sl-animtype-7-bounce {
    0%,
    100% {
        transform: scale(0);

    50% {
        transform: scale(1);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-8",code:{html:`
\`\`\`html 
<div class="sl-loading-type-8">
  <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
  <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
  <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
</div>
\`\`\`
`,css:`
\`\`\`
.sl-loading-type-8 {
  width: 48px;
  height: 48px;
  position: relative;
  > div {
      position: absolute;
      width: 100%;
      height: 100%;
                 
      > div {
          width: 12px;
          height: 12px;
          background-color: #2d8cf0;
          border-radius: 100%;
          position: absolute;
          animation: sl-animtype-7 1.2s ease-in-out infinite;
          animation-fill-mode: both;
      }
                 
      &:nth-child(1) {
          > div {
              &:nth-child(1) {
                  top: 0;
                  left: 0;
              }
              &:nth-child(2) {
                  top: 0;
                  right: 0;
                  animation-delay: -0.9s;
              }
              &:nth-child(3) {
                  right: 0;
                  bottom: 0;
                  animation-delay: -0.6s;
              }
              &:nth-child(4) {
                  left: 0;
                  bottom: 0;
                  animation-delay: -0.3s;
              }
          }
      }
                 
      &:nth-child(2) {
          transform: rotate(45deg);
          > div {
              &:nth-child(1) {
                  top: 0;
                  left: 0;
                  animation-delay: -1.1s;
              }
              &:nth-child(2) {
                  top: 0;
                  right: 0;
                  animation-delay: -0.8s;
              }
              &:nth-child(3) {
                  right: 0;
                  bottom: 0;
                  animation-delay: -0.5s;
              }
              &:nth-child(4) {
                  left: 0;
                  bottom: 0;
                  animation-delay: -0.2s;
              }
          }
      }
                 
      &:nth-child(3) {
          transform: rotate(90deg);
          > div {
              &:nth-child(1) {
                  top: 0;
                  left: 0;
                  animation-delay: -1s;
              }
              &:nth-child(2) {
                  top: 0;
                  right: 0;
                  animation-delay: -0.7s;
              }
              &:nth-child(3) {
                  right: 0;
                  bottom: 0;
                  animation-delay: -0.4s;
              }
              &:nth-child(4) {
                  left: 0;
                  bottom: 0;
                  animation-delay: -0.1s;
              }
          }
      }
    }
}
@keyframes sl-animtype-7 {
    0%,
    80%,
    100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-9",code:{html:`
\`\`\`html
<div class="sl-loading-type-9">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-loading-type-9 {
  width: 90px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: #2d8cf0;
      opacity: 0.8;
      border-radius: 100%;
      animation: sl-animtype-9 1s ease-in-out infinite;
                 
      &:nth-child(1) {
          left: 0;
          animation-delay: 0s;
      }
      &:nth-child(2) {
          left: 18px;
          animation-delay: 0.2s;
      }
      &:nth-child(3) {
          left: 36px;
          animation-delay: 0.4s;
      }
      &:nth-child(4) {
          left: 54px;
          animation-delay: 0.6s;
      }
      &:nth-child(5) {
          left: 72px;
          animation-delay: 0.8s;
      }
  }
 }

@keyframes sl-animtype-9 {
    0% {
        opacity: 0.3;
        transform: translateY(0);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    }
    50% {
        opacity: 1;
        transform: translateY(-10px);
        background-color: #2d8cf0;
        box-shadow: 0 20px 3px rgba(0, 0, 0, 0.05);
    }
    100% {
        opacity: 0.3;
        transform: translateY(0);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-10",code:{html:'\n```html\n<div class="sl-loading-type-10">\n  <div></div>\n</div>\n```\n',css:`
\`\`\`css
.sl-loading-type-10 {
  width: 35px;
  height: 45px;
  border-color: #2d8cf0 transparent;
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;
  animation: sl-animtype-10 2s ease infinite;
 }

 @keyframes sl-animtype-10 {
     50% {
         transform: rotate(1turn) scale(0.4, 0.33);
         border-width: 8px;
     }
     100% {
         transform: rotate(2turn) scale(1);
         border-width: 3px;
     }
 }
\`\`\`
 `}},{cla:"sl-loading-type-11",code:{html:`
\`\`\`html
<div class="sl-loading-type-11">
  <div></div>
  <div></div>
  <div></div>
</div>
\`\`\`
`,css:`
\`\`\`css   
.sl-loading-type-11 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  > div {
      border-color: #2d8cf0 #2d8cf0 transparent transparent;
      border-style: solid;
      border-width: 3px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      &:nth-child(1) {
          width: 52.5px;
          height: 52.5px;
          margin-left: -26px;
          margin-top: -26px;
          animation: sl-animtype-11 2s linear infinite;
      }
      &:nth-child(2) {
          width: 31px;
          height: 31px;
          margin-left: -15.5px;
          margin-top: -15.5px;
          animation: sl-animtype-11 1.75s linear infinite reverse;
      }
      &:nth-child(3) {
          width: 12px;
          height: 12px;
          margin-left: -6px;
          margin-top: -6px;
          animation: sl-animtype-11 1.5s linear infinite;
      }
  }
 }
 @keyframes sl-animtype-11 {
     100% {
         transform: rotate(1turn);
     }
 }
\`\`\`
`}},{cla:"sl-loading-type-12",code:{html:'\n```html\n<div class="sl-loading-type-12"></div>\n```\n',css:`
\`\`\`css
.sl-loading-type-12 {
  display: flex;
  width: 45px;
  height: 45px;
  border-color: #2d8cf0 transparent;
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;
  animation: sl-animtype-12-spin 1.5s linear infinite;
                 
  &::before {
      content: '';
      display: block;
      margin: auto;
      width: 16px;
      height: 16px;
      border: 3px solid #2d8cf0;
      border-radius: 50%;
      animation: sl-animtype-12-pulse 1s ease-in-out infinite alternate;
  }
 }
 @keyframes sl-animtype-12-spin {
     100% {
         transform: rotate(1turn);
     }
 }
 @keyframes sl-animtype-12-pulse {
     0% {
         -webkit-transform: scale(0.5);
         transform: scale(0.5);
     }

     to {
         -webkit-transform: scale(1);
         transform: scale(1);
     }
 }
\`\`\`
 `}},{cla:"sl-loading-type-13",code:{html:`
\`\`\`html
<svg class="sl-loading-type-13" viewBox="0 0 50 50">
  <circle cx="25" cy="25" r="20" class="loading-ring"></circle>
  <circle cx="25" cy="5" r="3.5" class="loading-ball"></circle>
</svg>
\`\`\`
`,css:`
\`\`\`css
.sl-loading-type-13 {
  width: 60px;
  animation: sl-anim-type-13 1.5s ease infinite;
  .loading-ring {
      fill: none;
      stroke-width: 2;
      stroke: rgba(45, 140, 240, 0.3);
  }
  .loading-ball {
      fill: #2d8cf0;
      stroke: none;
  }
 }
 @keyframes sl-anim-type-13 {
     100% {
         transform: rotate(1turn);
     }
 }
 \`\`\`
`}},{cla:"sl-loading-type-14",code:{html:'\n```html\n<div class="sl-loading-type-14"></div>\n```\n      ',css:`
\`\`\`css
.sl-loading-type-14 {
  border: 3px solid rgba(45, 140, 240, 0.2);
  border-top-color: #2d8cf0;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: sl-anim-type-14 1s linear infinite;
 }
 @keyframes sl-anim-type-14 {
     100% {
         transform: rotate(1turn);
     }
 }
 \`\`\`
`}},{cla:"sl-loading-type-15",code:{html:`
\`\`\`html
<div class="sl-loading-type-15">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-loading-type-15 {
  display: grid;
  height: 10px;
  grid-gap: 5px;
  grid-template-columns: repeat(5, 10px);
 
  > div {
      animation: sl-anim-type-15 1s infinite ease backwards;
      background: #2d8cf0;
      border-radius: 100%;
      height: 10px;
      width: 10px;
 
      &:nth-child(1) {
          animation-delay: 0.1s;
      }
      &:nth-child(2) {
          animation-delay: 0.2s;
      }
      &:nth-child(3) {
          animation-delay: 0.3s;
      }
      &:nth-child(4) {
          animation-delay: 0.4s;
      }
      &:nth-child(5) {
          animation-delay: 0.5s;
      }
  }
 }
 
 @keyframes sl-anim-type-15 {
     0%,
     100% {
         transform: scale(0);
     }
     40%,
     60% {
         transform: scale(1);
     }
 }
\`\`\`
`}},{cla:"sl-loading-type-16",code:{html:`
\`\`\`html
<div class="sl-loading-type-16">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
\`\`\`
`,css:`
\`\`\`css     
.sl-loading-type-16 {
  animation: sl-anim-type-16-spin 1s linear infinite;
  height: 10px;
  width: 10px;
                 
  > div {
      height: 100%;
      position: absolute;
      width: 100%;
      animation: sl-anim-type-16-meetup 1.25s ease infinite;
      background: #2d8cf0;
      border-radius: 100%;
                 
      &:nth-child(1) {
          --rotation: 90;
      }
      &:nth-child(2) {
          --rotation: 180;
      }
      &:nth-child(3) {
          --rotation: 270;
      }
      &:nth-child(4) {
          --rotation: 360;
      }
  }
 }

@keyframes sl-anim-type-16-spin {
    100% {
        transform: rotate(1turn);
    }
}
@keyframes sl-anim-type-16-meetup {
    0%,
    100% {
        transform: rotate(calc(var(--rotation) * 1deg)) translateY(0);
    }
    50% {
        transform: rotate(calc(var(--rotation) * 1deg)) translateY(300%);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-17",code:{html:`
\`\`\`html
<div class="sl-loading-type-17">
  <div></div>
  <div></div>
  <div></div>
</div>
\`\`\`
`,css:`
\`\`\`css 
.sl-loading-type-17 {
  position: relative;
  height: 20px;
  width: 20px;
                 
  > div {
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-name: sl-anim-type-17-fed;
      animation-fill-mode: backwards;
                 
      background-color: #2d8cf0;
      border-radius: 100%;
      height: 100%;
      position: absolute;
      width: 100%;
                 
      &:nth-child(1) {
          animation-delay: 0;
      }
      &:nth-child(2) {
          animation-delay: 0.25s;
      }
      &:nth-child(3) {
          animation-delay: 0.5s;
      }
  }
 }
                    
@keyframes sl-anim-type-17-fed {
    0% {
        opacity: 0;

        transform: translateX(-200%);
    }
    30%,
    70% {
        opacity: 1;
        transform: translateX(0);
    }
    50% {
        transform: translateX(0) scale(2.5);
    }
    40%,
    60% {
        transform: translateX(0) scale(1.5);
    }
    100% {
        opacity: 0;
        transform: translateX(200%);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-18",code:{html:`
\`\`\`html
<span class="sl-loading-type-18">
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
</span>
\`\`\`
`,css:`
\`\`\`css 
.sl-loading-type-18 {
  height: 30px;
  width: 30px;
  position: relative;
  display: inline-block;
  max-width: 100%;
  margin: auto;
  max-height: 100%;
  vertical-align: middle;
  animation: sl-anim-type-18 0.8s linear infinite;
  animation-timing-function: steps(12);
  i {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &::before {
          width: 2px;
      }
                 
      &::before {
          display: block;
                 
          height: 25%;
          margin: 0 auto;
          background-color: currentColor;
          border-radius: 40%;
          content: ' ';
      }
      &:nth-of-type(1) {
          -webkit-transform: rotate(30deg);
          transform: rotate(30deg);
          opacity: 1;
      }
      &:nth-of-type(2) {
          -webkit-transform: rotate(60deg);
          transform: rotate(60deg);
          opacity: 0.9375;
      }
      &:nth-of-type(3) {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
          opacity: 0.875;
      }
      &:nth-of-type(4) {
          -webkit-transform: rotate(120deg);
          transform: rotate(120deg);
          opacity: 0.8125;
      }
      &:nth-of-type(5) {
          -webkit-transform: rotate(150deg);
          transform: rotate(150deg);
          opacity: 0.75;
      }
      &:nth-of-type(6) {
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
          opacity: 0.6875;
      }
      &:nth-of-type(7) {
          -webkit-transform: rotate(210deg);
          transform: rotate(210deg);
          opacity: 0.625;
      }
      &:nth-of-type(8) {
          -webkit-transform: rotate(240deg);
          transform: rotate(240deg);
          opacity: 0.5625;
      }
      &:nth-of-type(9) {
          -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
          opacity: 0.5;
      }
      &:nth-of-type(10) {
          -webkit-transform: rotate(300deg);
          transform: rotate(300deg);
          opacity: 0.4375;
      }
      &:nth-of-type(11) {
          -webkit-transform: rotate(330deg);
          transform: rotate(330deg);
          opacity: 0.375;
      }
      &:nth-of-type(12) {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
          opacity: 0.3125;
      }
  }
 }

@keyframes sl-anim-type-18 {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
\`\`\`
`}},{cla:"sl-loading-type-19",code:{html:`
\`\`\`html
<span class="sl-loading-type-19">
  <svg viewBox="25 25 50 50" class="loading-circular">
      <circle cx="50" cy="50" r="20" fill="none"></circle>
  </svg>
</span>
\`\`\`
`,css:`
\`\`\`css
.sl-loading-type-19 {
  height: 30px;
  width: 30px;
  position: relative;
  display: inline-block;
  max-width: 100%;
  margin: auto;
  max-height: 100%;
  vertical-align: middle;
  animation: sl-anim-type-19-rotate 0.8s linear infinite;
                 
  animation-duration: 2s;
  .loading-circular {
      circle {
          animation: sl-anim-type-19-circular 1.5s ease-in-out infinite;
          stroke: currentColor;
          stroke-width: 3;
          stroke-linecap: round;
      }
  }
 }
@keyframes sl-anim-type-19-rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes sl-anim-type-19-circular {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -40;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120;
    }
}
\`\`\`
`}},{cla:"sl-loading-type-21",code:{html:`
\`\`\`html
<div class="sl-loading-type-21">
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
\`\`\`
`,css:`
\`\`\`
.sl-loading-type-21 {
  > div {
      position: relative;
      transform: translateY(-30px);
  
      > div {
          background-color: @default_color;
          border-radius: 100%;
          position: absolute;
          left: -30px;
          top: 0;
          opacity: 0;
          margin: 0;
          width: 60px;
          height: 60px;
          animation: sl-anim-type-21 1s 0s linear infinite;
      
          &:nth-child(2) {
              animation-delay: -0.4s;
          }
          &:nth-child(3) {
              animation-delay: -0.2s;
          }
      }
  }
}
@keyframes sl-anim-type-21 {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    5% {
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: 0;
    }
}
\`\`\`
`}}];const Y={class:"sl-layout-content"},X={class:"list"},C=["innerHTML","onClick"],j={__name:"index",setup(B){const{proxy:r}=v();r.$pub;const d=_,n=x(null);function p(e){let t=e.code;n.value.show({html:t.html,css:t.css})}return(e,t)=>{const c=f,m=y;return i(),a("div",Y,[o(c,null,{default:u(()=>[l("div",X,[l("ul",null,[(i(!0),a(b,null,w(k(d),(s,h)=>(i(),a("li",{innerHTML:s.code.html,key:h,onClick:L=>p(s)},null,8,C))),128))])])]),_:1}),o(m,{ref_key:"slComCode",ref:n},null,512)])}}},T=g(j,[["__scopeId","data-v-cf13c0f7"]]);export{T as default};
