import{_ as p,o as r,c as d,a as t,M as S,N as f,t as s,h as I,F as P,g as b,p as u,b as y,r as l,E as k,s as h,y as o}from"./index-e159c977.js";const x={name:"props validation",props:{title:{type:String,required:!0,default:"this the default"},likes:Number,ishonest:Boolean},inheritAttrs:!1,data(){return{}}};function A(n,c,e,a,_,i){return r(),d("div",null,[t("h1",S(f(n.$attrs)),"Props validation",16),t("h1",null,s(e.title),1),t("h1",null,s(e.likes),1),t("h1",null,"are you "+s(e.ishonest?"this is true":"this is false"),1)])}const N=p(x,[["render",A],["__scopeId","data-v-c3ed9c2b"]]);const V={name:"propsChild",props:["name","message","number","sample","thisIsSample","myname","mynumber","mymessage","data"]},C=n=>(u("data-v-9a4a8773"),n=n(),y(),n),E=C(()=>t("h2",null,"sample of data from parent",-1));function D(n,c,e,a,_,i){return r(),d("div",null,[I(" hello my name is "+s(e.name)+" at "+s(e.message)+" "+s(e.number)+" "+s(e.sample)+" "+s(e.thisIsSample)+" ",1),t("h1",null," this is binding composition API "+s(e.myname)+" "+s(e.mymessage)+" "+s(e.mynumber),1),E,(r(!0),d(P,null,b(e.data,m=>(r(),d("div",{key:m},s(m),1))),128))])}const B=p(V,[["render",D],["__scopeId","data-v-9a4a8773"]]);const w={inject:["username","sampleName"],components:{PropsChild:B,PropsAndValidation:N},setup(){const n=l("PEDRO"),c=l("MESSAGE OF PEDRO"),e=l("09617587967"),a=l("sampleLang"),_=l("ralph"),i=k({name:"ralph",age:"39",location:"navotas"});return{myname:n,mymessage:c,mynumber:e,thisIsSample:a,name:_,sameDataProps:i}}},g=n=>(u("data-v-847d66d5"),n=n(),y(),n),F=g(()=>t("h1",null,"this the Props passing data from parent component to child component",-1)),O=g(()=>t("h1",null,"this is props validation",-1));function R(n,c,e,a,_,i){const m=h("PropsChild"),v=h("PropsAndValidation");return r(),d("div",null,[t("h2",null,"this is provide and inject sample sharing data"+s(i.username)+" and "+s(i.sampleName),1),F,o(m,{name:"ralph santolorin",message:"developer ako",thisIsSample:a.thisIsSample},null,8,["thisIsSample"]),o(m,{name:"gadwin santolorin",message:"makulit din ako"}),o(m,{name:"shenron santolorin",message:"makulit",number:"123456",sample:"thisIsSample"}),o(m,{myname:a.myname,mymessage:a.mymessage,mynumber:a.mynumber,thisIsSample:a.thisIsSample},null,8,["myname","mymessage","mynumber","thisIsSample"]),o(m,{myname:a.myname,mymessage:a.mymessage,mynumber:a.mynumber,thisIsSample:a.thisIsSample},null,8,["myname","mymessage","mynumber","thisIsSample"]),O,o(v,{id:"myArticle",title:"this is String titlle",likes:55,ishonest:!1}),t("h1",null,"this is my name "+s(a.name),1),o(m,{data:a.sameDataProps},null,8,["data"])])}const L=p(w,[["render",R],["__scopeId","data-v-847d66d5"]]);export{L as default};
