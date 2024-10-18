import{_ as q,r as a,j as v,o as s,c as o,a as e,F as w,g as x,t as c,n as b,k as h,h as k,p as I,b as N,y as F}from"./index-e159c977.js";const m=d=>(I("data-v-e33eec3b"),d=d(),N(),d),M={class:"main mx-[10vw]"},H={class:"border-2 p-2 rounded-[.5rem]"},D=m(()=>e("div",{class:"text-center text-[2rem] font-bold"},"SIMPLE QUIZ APP",-1)),S={key:0},B=["index"],L={key:0,class:"text-[1.6rem]"},P={class:"flex justify-end text-[1rem]"},j={class:"my-2 font-bold"},E=["onClick"],Q={class:"text-center"},V=["disabled"],G={key:1,class:"text-[1.6rem] text-center"},O={key:0,class:"flex justify-center mt-10"},T=m(()=>e("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerNfJr-vJiOL5j90bVNFehH8_y8U2U_DR5g&s",alt:""},null,-1)),J=[T],R={key:1,class:"flex justify-center mt-10"},U=m(()=>e("img",{src:"https://i.pinimg.com/originals/86/d1/76/86d1767ba3ecb6af8df3e4e5dda376eb.gif",alt:""},null,-1)),$=[U],K=m(()=>e("div",{class:"mt-[2rem] text-center"},[e("h2",null,"Description:"),e("p",null,[k(` "The Quiz" is an interactive web app that challenges your knowledge with multiple-choice questions. Test yourself, earn points for correct answers, and see how well you perform. When you've completed the quiz, when you answer it right it turns green if wrong turns red and your final score is revealed. Enjoy a fun and educational experience! `),e("br"),e("br"),e("b",null," Using composition API: ref, computed, watch")])],-1)),X={__name:"quizzApp2",setup(d){const r=a(0),n=a(null),t=a(0),i=a(!1),g=a(!0),A=(p,l)=>{n.value=p,p===l&&!i.value?(t.value+=1,i.value=!0):p!==l&&i.value&&(t.value-=1,i.value=!1)},z=()=>{if(i.value=!1,!n.value){alert("please choose answer");return}r.value++,n.value=null},W=()=>{g.value=!1,alert("you finished the test!")},C=v(()=>r.value===f.value.length-1),f=a([{index:1,question:"Who is the Greek goddess of wisdom and warfare?",options:["Aphrodite","Athena","Hera","Artemis"],answer:"Athena"},{index:2,question:"In Roman mythology, who is the counterpart of the Greek goddess Demeter, goddess of the harvest?",options:["Ceres","Venus","Juno","Minerva"],answer:"Ceres"},{index:3,question:"Which Norse goddess is known as the goddess of love, beauty, and fertility?",options:["Frigg","Hel","Freya","Sif"],answer:"Freya"},{index:4,question:"Who is the Hindu goddess of wealth and prosperity?",options:["Parvati","Durga","Lakshmi","Saraswati"],answer:"Lakshmi"},{index:5,question:"In Egyptian mythology, which goddess is associated with motherhood and magic?",options:["Isis","Bastet","Nephthys","Hathor"],answer:"Isis"},{index:6,question:"Which goddess in Greek mythology is known as the queen of the gods and goddess of marriage?",options:["Hera","Aphrodite","Demeter","Persephone"],answer:"Hera"},{index:7,question:"Who is the Aztec goddess of fertility and agriculture?",options:["Chalchiuhtlicue","Tlazolteotl","Coatlicue","Xochiquetzal"],answer:"Xochiquetzal"},{index:8,question:"In Celtic mythology, who is the goddess of the river Boyne and knowledge?",options:["Brigid","Danu","Morrigan","Boann"],answer:"Boann"},{index:9,question:"Who is the Shinto goddess of the sun and the universe?",options:["Amaterasu","Inari","Izanami","Hachiman"],answer:"Amaterasu"},{index:10,question:"In Greek mythology, who is the goddess of the hunt and the moon?",options:["Hestia","Athena","Artemis","Demeter"],answer:"Artemis"}]);return(p,l)=>(s(),o("div",M,[e("div",H,[D,g.value?(s(),o("div",S,[(s(!0),o(w,null,x(f.value,(u,y)=>(s(),o("div",{index:u.index,bor:""},[y===r.value?(s(),o("div",L,[e("div",P," Question - "+c(u.index)+"/10 ",1),e("div",j,c(u.question),1),(s(!0),o(w,null,x(u.options,(_,te)=>(s(),o("div",{class:b([_===n.value?"bg-gray-200 text-[#000000] border-red-200":" text-[#7a7a7a]","leading-[2.5rem] my-2 text-[1.4rem] hover:bg-[#f8f5f5] hover:text-[#000000]"]),key:y,onClick:se=>A(_,u.answer)},[e("div",null,c(_),1)],10,E))),128))])):h("",!0)],8,B))),256)),e("div",Q,[r.value<9&&n.value?(s(),o("button",{key:0,class:b(["p-1 rounded-[.5rem] w-full border-2 my-5",n.value?"bg-[#c7c5c5] transition-all duration-300 ease-in-out":"border-[white]"]),disabled:C.value,onClick:l[0]||(l[0]=u=>z())}," Next question... ",10,V)):h("",!0),r.value===9&&n.value?(s(),o("button",{key:1,class:"p-1 rounded bg-[green] w-full text-white border-2",onClick:l[1]||(l[1]=u=>W())}," Submits ")):h("",!0)])])):(s(),o("div",G,[k(" CONGRATULATION!!! you got "+c(t.value)+" out of 10 "+c(t.value<=5?"you failed the tests 😄":"you pass the test! 😀")+" ",1),t.value<=5?(s(),o("div",O,J)):h("",!0),t.value>=6?(s(),o("div",R,$)):h("",!0)]))]),K]))}},Z=q(X,[["__scopeId","data-v-e33eec3b"]]);const Y={key:1},ee={__name:"quizzApp",setup(d){const r=a([{question:"What is the capital of France?",answer:1,options:["Paris","London","Berlin","Madrid"],selected:null},{question:"Which planet is known as the Red Planet?",answer:2,options:["Earth","Venus","Mars","Jupiter"],selected:null},{question:"What is the chemical symbol for water?",answer:0,options:["H2O","CO2","O2","N2"],selected:null},{question:"Which gas do plants absorb from the atmosphere?",answer:3,options:["Oxygen","Carbon Dioxide","Nitrogen","Carbon Monoxide"],selected:null},{question:"What is the largest mammal on Earth?",answer:1,options:["Elephant","Blue Whale","Giraffe","Hippopotamus"],selected:null},{question:"Who wrote the play 'Romeo and Juliet'?",answer:0,options:["William Shakespeare","Charles Dickens","Jane Austen","Leo Tolstoy"],selected:null},{question:"What is the tallest mountain in the world?",answer:2,options:["Mount Kilimanjaro","Mount Everest","Mount McKinley","Mount Fuji"],selected:null},{question:"What is the freezing point of water in Fahrenheit?",answer:3,options:["32°F","0°F","100°F","212°F"],selected:null},{question:"Who painted the Mona Lisa?",answer:1,options:["Pablo Picasso","Leonardo da Vinci","Vincent van Gogh","Michelangelo"],selected:null},{question:"Which gas makes up the majority of Earth's atmosphere?",answer:0,options:["Nitrogen","Oxygen","Carbon Dioxide","Hydrogen"],selected:null}]);a(!1);const n=a(0);return v(()=>{let t=0;return r.value.map(i=>{i.selected!=null&&i.answer==i.selected&&(console.log("correct"),t++)}),t}),v(()=>{let t=r.value[n.value];return t.index=n.value,t}),(t,i)=>(s(),o("div",Y,[F(Z)]))}},ne=q(ee,[["__scopeId","data-v-e2bbea64"]]);export{ne as default};
