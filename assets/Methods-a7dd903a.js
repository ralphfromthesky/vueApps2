import{_ as h,r as i,o as _,c as m,a as l,t as s}from"./index-e159c977.js";const b={setup(){const n=i(10),r=i(20),o=i(20);return{multiplier:n,basevalue:r,subtract:o,add:(a,u,d)=>a+u+d,multiply:a=>a*n.value,subtraction:a=>a-o.value}}},p=l("h1",null,s(2+5+8),-1),f=l("h1",null,s(7*10),-1),y=l("h1",null,s((2+5+8)*10),-1);function v(n,r,o,t,c,e){return _(),m("div",null,[p,f,y,l("h1",null,"this total is "+s(t.add(1,2,3)),1),l("h1",null,"this total is "+s(t.add(10,20,30)),1),l("h1",null,"this multiply is "+s(t.multiply(10)),1),l("h1",null,"this multiply is "+s(t.multiply(t.basevalue)),1),l("h1",null,"this subtract is "+s(t.subtraction(100)),1),l("h1",null,s(t.add(t.multiplier,t.basevalue,t.subtract)),1)])}const B=h(b,[["render",v]]);export{B as default};
