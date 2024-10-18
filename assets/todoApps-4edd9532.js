import{_ as w,r as i,w as _,d as x,o as l,c,a as o,e as p,v as u,f as b,F as y,g as I,n as v,u as k,h as N,t as M,p as A,b as V}from"./index-e159c977.js";const U={name:"todoApps",setup(){const n=k(),s=i(""),r=i(""),e=i([]),h=t=>{e.value=e.value.filter(a=>a!==t)},g=()=>{if(r.value.trim()===""){alert("input todo!");return}const t=new Date;t.getDate(),t.getMonth()+1,t.getFullYear();const a=t.getHours(),d=t.getMinutes();t.getSeconds();const f=a>=12?"pm":"am",S=a%12===0?12:a%12,T=d<10?"0"+d:d;e.value.push({content:r.value,createdAt:`${S}:${T}${f}`}),r.value=""};return _(s,t=>{localStorage.setItem("name",t)}),_(e,t=>{localStorage.setItem("todos",JSON.stringify(t))},{deep:!0}),x(()=>{s.value=localStorage.getItem("name")||"";const t=localStorage.getItem("todos");if(t)try{e.value=JSON.parse(t)}catch(a){console.error("Error parsing JSON from localStorage:",a)}}),{name:s,todos:e,input_todo:r,addTodo:g,deleteTodo:h,store:n}}},m=n=>(A("data-v-23d88e20"),n=n(),V(),n),D={class:"todolabel"},J=m(()=>o("h1",null,"what is your name ?",-1)),B=m(()=>o("button",null,"Add Todo",-1)),C=["onUpdate:modelValue"],F=["onClick"],O=m(()=>o("div",{class:"description"},[o("div",{class:"description2"}," The Todo application is a simple web application built using Vue.js, a popular JavaScript framework. It allows users to create, manage, and keep track of their tasks or to-do items. The application stores user data, including the user's name and a list of todos, in the browser's local storage so that the data persists even after the user closes or refreshes the page. "),o("br"),o("span",null,"Using composition API, watcher, ref, onMounted, v-model.")],-1));function E(n,s,r,e,h,g){return l(),c("div",{class:v(["theRealMainTodo",{night:e.store.state.isNight,light:!e.store.state.isNight}])},[o("div",{class:v(["mainTodo",{night:e.store.state.isNight,light:!e.store.state.isNight}])},[o("div",D,[J,p(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>e.name=t)},null,512),[[u,e.name]])]),o("form",{onSubmit:s[2]||(s[2]=b((...t)=>e.addTodo&&e.addTodo(...t),["prevent"]))},[p(o("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>e.input_todo=t)},null,512),[[u,e.input_todo]]),B],32),(l(!0),c(y,null,I(e.todos,t=>(l(),c("div",{key:t,class:"todoList"},[p(o("input",{type:"text","onUpdate:modelValue":a=>t.content=a},null,8,C),[[u,t.content]]),N(" "+M(t.createdAt)+" ",1),o("i",{class:"bx bxs-trash",onClick:a=>e.deleteTodo(t)},null,8,F)]))),128))],2),O],2)}const L=w(U,[["render",E],["__scopeId","data-v-23d88e20"]]);export{L as default};
