import{u as M,_ as P}from"./index-10e24cf3.js";/* empty css              */import{W as E,g as N,o as O,H as g,h as S,j as I,r as L,B as w,I as $,m as R,R as j,a1 as A,a2 as D}from"./vue-e0e31f72.js";import{e as H}from"./arco-38a32e5c.js";const V={mapType:{warRescueDistribution:"map-type-war-rescue-distribution",searchRescueStatus:"map-type-search-rescue-status",instruct:"map-type-instruct"},deviceType:{person:"person",handset:"handset",staging:"staging"}};function W(s){const{$pub:p}=M(),r=E(),l=V,i=[];let t=null;function m(){BMap&&(t=new BMap.Map("sl-baidu-map",{enableMapClick:!1}),t.centerAndZoom(new BMap.Point(116.404,39.915),15),t.enableScrollWheelZoom(!0),t.addEventListener("zoomend",()=>{setTimeout(()=>{i.forEach(a=>{const d=t.getCenter();a._point=d,a.draw()})},100)}))}function b(e){const{mapType:n,deviceType:a}=l,{slNumberRandom:d}=p;e.forEach(c=>{switch(c.prevClass=["a","b","c"][d(0,2)],c.class=s.mapType,s.mapType){case n.searchRescueStatus:case n.instruct:switch(c.deviceType){case a.handset:c.prevClass="g";break;case a.staging:c.prevClass="h";break}break}x(c)})}function x(e){const{lng:n,lat:a}=e,d=new BMap.Point(n,a),c=class extends BMap.Overlay{initialize(){const o=k(e);if(t.getPanes().labelPane.appendChild(o),this._div=o,this._params=e,o.addEventListener("click",()=>{const h=this._params;if(Object.hasOwnProperty.call(h,"select")){const f=i.reduce((u,T,B)=>(T._params.id===h.id&&(u.item=T,u.index=B),u),{item:null,index:null});if(f.item){t.removeOverlay(f.item);const u=p.slDeepClone(h);u.select=!u.select,i.splice(f.index,1),x(u)}}}),Object.hasOwnProperty.call(e,"deviceType"))for(var C=o.getElementsByClassName("to-instruct"),_=0;_<C.length;_++)C[_].addEventListener("click",function(){r.push({name:"injuredSearch"})});return o}draw(){const o=t.pointToOverlayPixel(d);this._div.style.left=o.x-parseInt(v(this._div,"width"))/2-(parseInt(v(this._div,"padding-left"))+parseInt(v(this._div,"padding-right")))/2+"px",this._div.style.top=o.y-parseInt(v(this._div,"height"))/2+"px"}},y=new c;t.addOverlay(y),i.push(y)}function v(e,n){if(typeof getComputedStyle<"u"){var a=getComputedStyle(e,null).getPropertyValue(n);return n=="opacity"?a*100:a}else if(typeof e.currentStyle<"u")return n=="opacity"?Number(e.currentStyle.getAttribute("filter").match(/(?:opacity[=:])(\d+)/)[1]):e.currentStyle.getAttribute(n)}function k(e){const{name:n,distance:a="",prevClass:d}=e,{mapType:c}=l,y=document.createElement("div"),o=`${n.length*85/6}px;`;return y.style.position="absolute",y.innerHTML=`<div class="sl-com-map-item ${e.class}">
                        <div class="${d}">
                          <span></span>
                        </div> 
                        <div class="${d}">
                          <p style="width:${o}">${n}</p>
                          <p>${a}km</p>
                        </div>


                         ${s.mapType===c.searchRescueStatus?'<div class="to-instruct">发指令<span class="right-icon" ></span><div>':""}

                        ${s.mapType===c.instruct?`${Object.hasOwnProperty.call(e,"select")?`<div><p class="${e.select?"select":""}"></p></div>`:""}`:""}

                       

                    </div>`,y}return{mapConfig:l,mapInit:m,mapOverlayMethod:b}}const z={id:"sl-baidu-map",class:"sl-com-map"},Z={__name:"index",props:{mapType:{type:String,default:""}},setup(s,{expose:p}){const r=s;N();const{mapConfig:l,mapInit:i,mapOverlayMethod:t}=W(r);return O(()=>{g(()=>{})}),p({init(m){i(m)},mapOverlay:t,getConfig(){return l}}),(m,b)=>(S(),I("div",z))}};function G(){const{$pub:s,proxy:p}=M(),r=L("");function l(){s.slBasePolling(()=>p.$refs.slMapRef).then(()=>{const i=p.$refs.slMapRef,t=i.getConfig();r.value=t.mapType.warRescueDistribution,g(()=>{i.init();const m=[{id:1,name:"侦查营-营部",lng:116.404,lat:39.915,distance:"100"},{id:2,name:"侦查营2-侦查营侦查营-营部",lng:116.414,lat:39.919,distance:"200"},{id:3,name:"侦查营3-营部",lng:116.424,lat:39.921,distance:"400"},{id:4,name:"侦查营4-营部",lng:116.414,lat:39.931,distance:"400"}];i.mapOverlay(m)})})}return{mapType:r,mapInit:l}}const q=s=>(A("data-v-beae97ea"),s=s(),D(),s),F={class:"sl-main-content"},J=q(()=>R("p",null,"百度地图",-1)),K={class:"chart"},Q={__name:"index",setup(s){const{mapType:p,mapInit:r}=G();return O(()=>{g(()=>{r()})}),(l,i)=>{const t=H;return S(),I("div",F,[w(t,{"dis-hover":""},{title:$(()=>[J]),default:$(()=>[R("div",K,[w(Z,{ref:"slMapRef","map-type":j(p)},null,8,["map-type"])])]),_:1})])}}},te=P(Q,[["__scopeId","data-v-beae97ea"]]);export{te as default};
