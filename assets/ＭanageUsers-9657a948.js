import{S as h}from"./sweetalert2.all-9555961e.js";import{e as f,f as _,l as x,c as n,a as e,F as k,h as b,i as $,o as r,t as d}from"./index-88941983.js";const C={key:0,class:"flex flex-col"},v={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},S={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},B={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},I={class:"min-w-full divide-y divide-gray-200"},j=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," ID "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 大頭照 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 帳號 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 暱稱 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 申請狀態 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 動作 ")])],-1),M={class:"bg-white divide-y divide-gray-200"},A={class:"px-6 py-4 whitespace-nowrap text-gray-500"},P={class:"px-6 py-4 whitespace-nowrap text-gray-500"},E=["src"],T={class:"px-6 py-4 whitespace-nowrap text-gray-500"},U={class:"px-6 py-4 whitespace-nowrap text-gray-500"},z={class:"px-6 py-4 whitespace-nowrap text-gray-500"},D={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},W={key:0,class:"flex gap-4"},N=["onClick"],R=["onClick"],F={key:1,class:"flex gap-4"},O=["onClick"],V={key:2},H=f({__name:"ＭanageUsers",setup(L){const c="https://islandofhealing.rocket-coding.com/api",i=_([]),p=async()=>{const a=localStorage.getItem("token");if(a)try{const t=await(await fetch(`${c}/administratorwriters/get`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${a}`}})).json();if(console.log(t),t.StatusCode===200)i.value=t.UserData,console.log("userData",i.value);else throw new Error(`發生錯誤 ${t.Message}`)}catch(s){console.log(s)}};x(p);const u=async a=>{const s=localStorage.getItem("token");if(s)try{const o=await(await fetch(`${c}/writernotification/create?writerid=${a}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${s}`},method:"POST"})).json();if(console.log(o),o.StatusCode===200)console.log(o.Message),await m(a);else throw new Error(`發生錯誤 ${o.Message}`)}catch(t){console.log(t)}},m=async a=>{const s=localStorage.getItem("token");if(s)try{const o=await(await fetch(`${c}/pusher/bewriter?writerid=${a}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${s}`},method:"POST"})).json();if(console.log(o),o.StatusCode===200)console.log("pushed");else throw new Error(`發生錯誤 ${o.Message}`)}catch(t){console.log(t)}},g=async(a,s)=>{const t=localStorage.getItem("token");if(t)try{const l=await(await fetch(`${c}/applyforwriterresult/${a}/${s}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${t}`},method:"PUT"})).json();if(console.log(l),l.StatusCode===200)alert(l.Message),u(a),p();else throw new Error(`發生錯誤 ${l.Message}`)}catch(o){console.log(o)}},y=a=>{h.fire({title:"請確認是否刪除作家身份",text:"一但刪除將無法回復，必須重新申請",icon:"error",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定刪除",cancelButtonText:"關閉"}).then(s=>{s.isConfirmed&&w(a)})},w=async a=>{const s=localStorage.getItem("token");if(s)try{const o=await(await fetch(`${c}/cancelwriter/${a}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${s}`},method:"PUT"})).json();if(console.log(o),o.StatusCode===200)h.fire("已刪除","該作家身份刪除成功","success"),p();else throw new Error(`發生錯誤 ${o.Message}`)}catch(t){console.log(t)}};return(a,s)=>i.value?(r(),n("div",C,[e("div",v,[e("div",S,[e("div",B,[e("table",I,[j,e("tbody",M,[(r(!0),n(k,null,b(i.value,t=>(r(),n("tr",{key:t.Id},[e("td",A,d(t.Id),1),e("td",P,[e("img",{src:t.ImgUrl,alt:"User Image",class:"h-10 w-10 rounded-full"},null,8,E)]),e("td",T,d(t.Account),1),e("td",U,d(t.Nickname),1),e("td",z,d(t.WriterProgress),1),e("td",D,[t.WriterProgress==="已申請"?(r(),n("div",W,[e("button",{type:"button",class:"btn btn-sm font-medium bg-green-300",onClick:o=>g(t.Id,"3")}," 審核通過 ",8,N),e("button",{type:"button",class:"btn btn-sm font-medium bg-red-300",onClick:o=>g(t.Id,"2")}," 審核失敗 ",8,R)])):t.WriterProgress==="申請成功"?(r(),n("div",F,[e("button",{type:"button",class:"btn btn-sm font-medium bg-red-600 text-white",onClick:o=>y(t.Id)}," 取消作家身份 ",8,O)])):(r(),n("div",V,"-"))])]))),128))])])])])])])):$("",!0)}});export{H as default};
