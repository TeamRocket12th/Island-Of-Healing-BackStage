import{d as m,r as i,a as p,o as t,c as s,b as n,F as b,e as k,n as u,f as _,w,g,t as f,u as y,h as C,i as B,j as V}from"./index-ed710b8a.js";const L={class:"bg-slate-200 w-64 h-full"},R={class:"py-3 flex flex-col"},S=m({__name:"SideBar",setup(x){const c=[{id:"1",content:"作家身份管理",link:"manageusers"},{id:"2",content:"管理文章",link:"reviewarticles"},{id:"3",content:"精選文章管理",link:"bestarticles"},{id:"4",content:"熱門關鍵字搜尋",link:"hotword"},{id:"5",content:"費用單管理",link:"feecalculate"}],a=i(""),r=e=>{a.value=e};return(e,h)=>{const l=p("RouterLink");return t(),s("div",L,[n("ul",R,[(t(),s(b,null,k(c,o=>n("li",{key:o.id,class:u(["text-blue-950 hover:bg-slate-600 hover:text-white cursor-pointer",{"bg-slate-600 text-white":a.value===o.id}])},[_(l,{to:`/dashboard/${o.link}`,class:"block px-4 py-2",onClick:v=>r(o.id)},{default:w(()=>[g(f(o.content),1)]),_:2},1032,["to","onClick"])],2)),64))])])}}}),$={class:"bg-slate-100 relative min-h-screen"},z={key:0},N={key:1},F={class:"bg-slate-100 p-14"},D={key:0},j=n("h2",{class:"text-2xl font-semibold text-slate-800 mb-10"},"目前功能",-1),E=m({__name:"DashBoard",setup(x){const c=i([{id:"1",content:"修改文章審核進度"},{id:"2",content:"審核使用者提出的成為作家申請,取消作家身分"},{id:"3",content:"精選文章管理"},{id:"4",content:"熱門關鍵字搜尋"},{id:"5",content:"費用單管理"}]),a=i(!0),r=y();C(()=>r.path,(l,o)=>{l!=="/dashboard"?a.value=!1:a.value=!0},{immediate:!0});const e=i(!0),h=()=>{e.value=!e.value};return(l,o)=>{const v=p("RouterView");return t(),s("main",$,[n("div",{class:u([e.value?"w-48":"w-0","h-full absolute bg-slate-200 transition-all duration-300 z-10 overflow-hidden"])},[_(S)],2),n("div",{class:u([e.value?"ml-48":"ml-0","h-full transition-all duration-300"])},[n("button",{onClick:h,class:"fixed top-1/4 bg-slate-500 text-white rounded-full p-2 z-20",style:B({left:e.value?"11rem":"1rem"})},[e.value?(t(),s("span",z,"-")):(t(),s("span",N,"+"))],4),n("div",F,[a.value?(t(),s("div",D,[j,n("ul",null,[(t(!0),s(b,null,k(c.value,d=>(t(),s("li",{key:d.id,class:"mb-2"},f(d.id+". "+d.content),1))),128))])])):V("",!0),_(v)])],2)])}}});export{E as default};