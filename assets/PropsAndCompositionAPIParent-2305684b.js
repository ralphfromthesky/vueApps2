import{_ as v,q as O,r,o as i,c as d,a as n,t as l,F as P,g,n as S,p as w,b as x,j as B,h as F,w as $,e as C,v as f,E as y,s as I,y as p}from"./index-e159c977.js";const L={name:"PropsAndCompositionAPIchild",props:{messageFromParentComponent:String,AnotherMessage:String,sampleDataBindingProsp:String,anoDaw:String,anoDawto:String,sukasuka:String},setup(o,{emit:s}){const a=O("datas"),e=r(!0),m=r(o.model),u=r(o.model),t=r(o.model);return{dataFromAnotherSampleOfData:a,tae:e,names:m,ages:t,locations:u}}},V=o=>(w("data-v-2025cdeb"),o=o(),x(),o),U=V(()=>n("h1",null,"this is props a message comes from parent component App.vue",-1)),j=V(()=>n("hr",null,null,-1));function E(o,s,a,e,m,u){return i(),d("div",null,[U,n("h2",null,l(a.messageFromParentComponent)+" - "+l(a.AnotherMessage),1),j,(i(!0),d(P,null,g(a.sampleDataBindingProsp,t=>(i(),d("div",{key:t.name},[n("h1",{class:S(e.tae?"taeDaw":"taeNga")},l(t),3)]))),128)),n("h1",null,l(a.anoDaw),1),(i(!0),d(P,null,g(e.dataFromAnotherSampleOfData,t=>(i(),d("div",{key:t},[n("h1",null,l(t.name)+" - "+l(t.age)+" - "+l(t.location),1)]))),128)),n("h1",null,l(a.anoDawto),1),n("h1",null,l(a.sukasuka),1)])}const R=v(L,[["render",E],["__scopeId","data-v-2025cdeb"]]);const K={props:["bindMessageFromParents","anotherSampleOfBindDataFromParentComponent","usingComputedPropertiesForFirstName","usingComputedPropertiesForlastName","bindThisfromparents","dataList2"],setup(o){return{usingComputedOnprops:B(()=>`my full name is ${o.usingComputedPropertiesForFirstName} ${o.usingComputedPropertiesForlastName}`)}}},b=o=>(w("data-v-cd96f4da"),o=o(),x(),o),q=b(()=>n("h1",null,"thi is bind message from App.vue",-1)),z=b(()=>n("br",null,null,-1)),G=b(()=>n("hr",null,null,-1)),H=b(()=>n("h1",null,"this is props using computed properties",-1)),J=b(()=>n("br",null,null,-1));function Q(o,s,a,e,m,u){return i(),d("div",null,[q,n("h2",null,[F(l(a.bindMessageFromParents)+" ",1),z,F(" "+l(a.anotherSampleOfBindDataFromParentComponent),1)]),G,H,F(" "+l(e.usingComputedOnprops)+" ",1),J,F(" "+l(a.bindThisfromparents)+" ",1),(i(!0),d(P,null,g(a.dataList2,t=>(i(),d("div",{key:t},[n("h1",null,l(t),1)]))),128))])}const W=v(K,[["render",Q],["__scopeId","data-v-cd96f4da"]]),X={props:["data","messageFromTheSky","tupacShakur"],setup(o){return{}}};function Y(o,s,a,e,m,u){return i(),d("div",null,[(i(!0),d(P,null,g(a.data,t=>(i(),d("div",{key:t},[n("h1",null,l(t),1)]))),128)),n("h2",null,l(a.messageFromTheSky),1),(i(!0),d(P,null,g(a.tupacShakur,t=>(i(),d("div",{key:t},[n("h1",null,l(t),1)]))),128))])}const Z=v(X,[["render",Y]]),nn={name:"forms",props:{modelValue:Object},setup(o,{emit:s}){const a=r(o.modelValue.nameInputFromParent),e=r(o.modelValue.cardInputFromParent),m=r(o.modelValue.expiryInputFromParent),u=r(o.modelValue.cvvInputFromParent),t=r(o.modelValue.addressInputFromParent),c=r(o.modelValue.boolFromParent);return $([a,e,m,u,t,c],()=>{s("update:modelValue",{nameInput:a.value,cardInput:e.value,expiryInput:m.value,cvvInput:u.value,addressInput:t.value,tae:c.value})}),{nameInput:a,cardInput:e,expiryInput:m,cvvInput:u,addressInput:t,boolers:c,click:()=>{c.value=!0}}}},en={class:"separator"},tn={class:"credit-card-info--form"},on={class:"labeled"},an=n("label",{for:""},"full name",-1),sn={class:"labeled"},rn=n("label",{for:""},"card number",-1),ln={class:"labeled"},dn=n("label",{for:""},"expiry date",-1),mn={class:"labeled"},un=n("label",{for:""},"CVV",-1),cn={class:"labeled"},pn=n("label",{for:""},"complete address",-1);function _n(o,s,a,e,m,u){return i(),d("div",en,[n("div",tn,[n("div",on,[an,C(n("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>e.nameInput=t)},null,512),[[f,e.nameInput]])]),n("div",sn,[rn,C(n("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>e.cardInput=t)},null,512),[[f,e.cardInput]])]),n("div",ln,[dn,C(n("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=t=>e.expiryInput=t)},null,512),[[f,e.expiryInput]])]),n("div",mn,[un,C(n("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=t=>e.cvvInput=t)},null,512),[[f,e.cvvInput]])]),n("div",cn,[pn,C(n("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=t=>e.addressInput=t)},null,512),[[f,e.addressInput]])])]),n("button",{class:"purchase--btn",style:{cursor:"pointer"},onClick:s[5]||(s[5]=(...t)=>e.click&&e.click(...t))}," PLACE-ORDER ")])}const hn=v(nn,[["render",_n]]),Pn={name:"PropsAndCompositionAPIChild4",props:{haha:Object},setup(){return{}}},gn=n("h1",null,"this props object",-1);function vn(o,s,a,e,m,u){return i(),d("div",null,[gn,n("div",null,l(a.haha.name)+" "+l(a.haha.status)+" "+l(a.haha.age),1),(i(!0),d(P,null,g(a.haha,t=>(i(),d("div",{key:t},l(t),1))),128))])}const Cn=v(Pn,[["render",vn]]);const fn={name:"propsUsingCompositionApi",components:{PropsAndCompositionAPIChild:R,PropsAndCompositionAPIChild2:W,PropsAndCompositionAPIChild23:Z,propsPassingDataFromChildToParentComponentVue:hn,PropsAndCompositionAPIChild4Vue:Cn},setup(){const o=r({name:"",location:"",age:""}),s=r("a bind message from Parent App.vue"),a=r("this is the new messageeeeeee"),e=r("new Message"),m=r("ralph rigor"),u=r("santolorin"),t=r("how are you!!!!!"),c=r("1111111111111"),h=r({name:"lilith lust",name2:"anna belle peaks",name3:"winona ryder"}),D=r("im Really ok talaga"),k=r({name:"ralph",age:39,status:"single"}),A=y({name:"ralph santolorin",age:"39",location:"navotas"}),T=y({name:"shenron santolorin",age:10,location:"navotas"});r({name:"rigor",age:39,location:"navotas"});const M=y({name:"tupac shakur",age:50,location:"usa"}),N=r({nameInputFromParent:"",cardInputFromParent:"",expiryInputFromParent:"",cvvInputFromParent:"",addressInputFromParent:"",boolFromParent:!1});return{MessageFromParentComponent:s,bindThisData:e,firstname:m,lastname:u,changeData:()=>{m.value="new data from a button click from parent component",u.value="new data from a button click from parent component",e.value="new data from a button click from parent component"},dataList:A,newMessage:a,messageFromSky:t,newData:T,taeKa:h,okImFine:D,sampleData:M,parentData:N,newParetntData:o,newestData:k,silato:c}}},_=o=>(w("data-v-f8805288"),o=o(),x(),o),In={class:"main-props"},Fn={class:"w-[50rem]"},bn=_(()=>n("hr",null,null,-1)),An=_(()=>n("hr",null,null,-1)),Dn=_(()=>n("hr",null,null,-1)),kn=_(()=>n("br",null,null,-1)),yn=_(()=>n("br",null,null,-1)),wn={class:"passingDataofChildToParent"},xn={class:"childData"},Sn=_(()=>n("h1",{style:{"text-align":"center"}}," this is child data to be passed on parent ",-1)),Vn=_(()=>n("h1",{style:{"text-align":"center"}},"this is the Parent",-1)),Tn=_(()=>n("br",null,null,-1));function Mn(o,s,a,e,m,u){const t=I("PropsAndCompositionAPIChild"),c=I("PropsAndCompositionAPIChild2"),h=I("PropsAndCompositionAPIChild23"),D=I("propsPassingDataFromChildToParentComponentVue"),k=I("PropsAndCompositionAPIChild4Vue");return i(),d("div",In,[n("div",Fn,[p(t,{messageFromParentComponent:"this is the message from parent Component",AnotherMessage:"ralph santolorin",sampleDataBindingProsp:e.taeKa,anoDaw:e.okImFine,sukasuka:e.silato},null,8,["sampleDataBindingProsp","anoDaw","sukasuka"]),bn,p(c,{bindMessageFromParents:e.MessageFromParentComponent,anotherSampleOfBindDataFromParentComponent:e.bindThisData},null,8,["bindMessageFromParents","anotherSampleOfBindDataFromParentComponent"]),p(c,{usingComputedPropertiesForFirstName:e.firstname,usingComputedPropertiesForlastName:e.lastname},null,8,["usingComputedPropertiesForFirstName","usingComputedPropertiesForlastName"]),p(c,{bindThisfromparents:e.newMessage},null,8,["bindThisfromparents"]),p(c,{dataList2:e.newData},null,8,["dataList2"]),An,n("button",{onClick:s[0]||(s[0]=A=>e.changeData())},"change data from parent component"),Dn,p(h,{data:e.dataList},null,8,["data"]),p(h,{messageFromTheSky:e.messageFromSky},null,8,["messageFromTheSky"]),p(h,{tupacShakur:e.sampleData},null,8,["tupacShakur"]),kn,yn,n("div",wn,[n("div",xn,[Sn,p(D,{modelValue:e.parentData,"onUpdate:modelValue":s[1]||(s[1]=A=>e.parentData=A)},null,8,["modelValue"])]),n("div",{class:S(["parentData",e.parentData.boolFromParent?"boolxs":""])},[Vn,F(" "+l(e.parentData)+" ",1),Tn],2)])]),n("div",null,[p(k,{haha:e.newestData},null,8,["haha"])])])}const Bn=v(fn,[["render",Mn],["__scopeId","data-v-f8805288"]]);export{Bn as default};
