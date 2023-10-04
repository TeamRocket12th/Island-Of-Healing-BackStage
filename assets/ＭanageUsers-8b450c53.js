import{S as g}from"./sweetalert2.all-9555961e.js";import{d as f,r as x,m as _,c as r,b as e,F as k,e as b,j as v,o as n,t as i}from"./index-ed710b8a.js";const $={key:0,class:"flex flex-col"},C={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},S={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},B={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},I={class:"min-w-full divide-y divide-gray-200"},j=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," ID "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 大頭照 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 帳號 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 暱稱 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 申請狀態 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 動作 ")])],-1),A={class:"bg-white divide-y divide-gray-200"},M={class:"px-6 py-4 whitespace-nowrap text-gray-500"},P={class:"px-6 py-4 whitespace-nowrap text-gray-500"},E=["src"],T={class:"px-6 py-4 whitespace-nowrap text-gray-500"},U={class:"px-6 py-4 whitespace-nowrap text-gray-500"},z={class:"px-6 py-4 whitespace-nowrap text-gray-500"},W={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},D={key:0,class:"flex gap-4"},N=["onClick"],R=["onClick"],F={key:1,class:"flex gap-4"},O=["onClick"],V={key:2},H=f({__name:"ＭanageUsers",setup(L){const c="https://islandofhealing.rocket-coding.com/api",l=x([]),d=async()=>{const s=localStorage.getItem("token");if(s)try{const t=await(await fetch(`${c}/administratorwriters/get`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${s}`}})).json();if(t.StatusCode===200)l.value=t.UserData;else throw new Error(`發生錯誤 ${t.Message}`)}catch(o){console.log(o)}};_(d);const m=async s=>{const o=localStorage.getItem("token");if(o)try{const a=await(await fetch(`${c}/writernotification/create?writerid=${s}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${o}`},method:"POST"})).json();if(a.StatusCode===200)await y(s);else throw new Error(`發生錯誤 ${a.Message}`)}catch(t){console.log(t)}},y=async s=>{const o=localStorage.getItem("token");if(o)try{const a=await(await fetch(`${c}/pusher/bewriter?writerid=${s}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${o}`},method:"POST"})).json();if(a.StatusCode!==200)throw new Error(`發生錯誤 ${a.Message}`)}catch(t){console.log(t)}},h=async(s,o)=>{const t=localStorage.getItem("token");if(t)try{const p=await(await fetch(`${c}/applyforwriterresult/${s}/${o}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${t}`},method:"PUT"})).json();if(p.StatusCode===200)alert(p.Message),m(s),d();else throw new Error(`發生錯誤 ${p.Message}`)}catch(a){console.log(a)}},w=s=>{g.fire({title:"請確認是否刪除作家身份",text:"一但刪除將無法回復，必須重新申請",icon:"error",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定刪除",cancelButtonText:"關閉"}).then(o=>{o.isConfirmed&&u(s)})},u=async s=>{const o=localStorage.getItem("token");if(o)try{const a=await(await fetch(`${c}/cancelwriter/${s}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${o}`},method:"PUT"})).json();if(a.StatusCode===200)g.fire("已刪除","該作家身份刪除成功","success"),d();else throw new Error(`發生錯誤 ${a.Message}`)}catch(t){console.log(t)}};return(s,o)=>l.value?(n(),r("div",$,[e("div",C,[e("div",S,[e("div",B,[e("table",I,[j,e("tbody",A,[(n(!0),r(k,null,b(l.value,t=>(n(),r("tr",{key:t.Id},[e("td",M,i(t.Id),1),e("td",P,[e("img",{src:t.ImgUrl,alt:"User Image",class:"h-10 w-10 rounded-full"},null,8,E)]),e("td",T,i(t.Account),1),e("td",U,i(t.Nickname),1),e("td",z,i(t.WriterProgress),1),e("td",W,[t.WriterProgress==="已申請"?(n(),r("div",D,[e("button",{type:"button",class:"btn btn-sm font-normal bg-emerald-600 opacity-90 text-white hover:bg-emerald-700",onClick:a=>h(t.Id,"3")}," 審核通過 ",8,N),e("button",{type:"button",class:"btn btn-sm font-normal bg-rose-700 text-white hover:bg-rose-800",onClick:a=>h(t.Id,"2")}," 審核失敗 ",8,R)])):t.WriterProgress==="申請成功"?(n(),r("div",F,[e("button",{type:"button",class:"btn btn-sm font-normal border-orange-200 bg-slate-50 border-2 hover:bg-orange-400 hover:text-white",onClick:a=>w(t.Id)}," 取消作家身份 ",8,O)])):(n(),r("div",V,"-"))])]))),128))])])])])])])):v("",!0)}});export{H as default};
