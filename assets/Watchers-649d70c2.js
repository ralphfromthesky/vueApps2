import{_ as d,r as s,w as i,o as u,c as h,a as n,k as v,t as c}from"./index-e159c977.js";const _={setup(){const r=s(0),t=s(16),l=s("ralph"),e=s(1e3);return i(r,(o,a)=>{o>a&&o===t.value&&alert("Your volume is high and might damage your hearing!")}),i(l,(o,a)=>{console.log(`this is the ${a} and this is the ${o}`)}),i(e,(o,a)=>{alert(`${a} - ${o}`)}),{volume:r,alertVolume:t,name:l,changeName:()=>{l.value="santolorin",e.value++},data:e}}},g={class:"main-watchers"},N=n("h1",null,"this is watchers",-1),f=n("h1",null,"Volume Tracker - (0-20)",-1),k={key:0};function C(r,t,l,e,m,o){return u(),h("div",null,[n("div",g,[n("div",null,[N,f,e.volume===e.alertVolume?(u(),h("small",k,"Danger")):v("",!0),n("h2",null,"the volume is "+c(e.volume),1),n("div",null,[n("button",{onClick:t[0]||(t[0]=a=>e.volume+=1)},"INCREMENT"),n("button",{onClick:t[1]||(t[1]=a=>e.volume-=1)},"DECREMENT")])]),n("div",null,[n("h1",null,c(e.name),1),n("button",{onClick:t[2]||(t[2]=(...a)=>e.changeName&&e.changeName(...a))},"change")]),n("h1",null,c(e.data),1)])])}const y=d(_,[["render",C]]);export{y as default};
