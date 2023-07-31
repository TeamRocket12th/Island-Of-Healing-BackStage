import{e as k,f as g,l as b,c as s,a as t,j as l,q as d,F as m,h as v,o as a,t as r,v as C,s as I,x as D}from"./index-88941983.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const u=i=>(I("data-v-9ebe6353"),i=i(),D(),i),E=u(()=>t("h1",{class:"text-3xl mb-4"},"新增費用單",-1)),$={class:"flex mb-10"},P={class:"flex flex-col"},U={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},V={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},F={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},A={class:"min-w-full divide-y divide-gray-200"},j=u(()=>t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 筆數 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 費用單編號 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 作家編號 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 費用 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 是否已完成付款 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 費用單創建日期 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 付款日期 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 編輯 ")])],-1)),B={class:"bg-white divide-y divide-gray-200"},M={class:"px-6 py-4 whitespace-nowrap text-gray-500"},z={key:0,class:"px-6 py-4 whitespace-nowrap"},T=["onUpdate:modelValue"],N={key:1,class:"px-6 py-4 whitespace-nowrap"},O={class:"px-6 py-4 whitespace-nowrap text-gray-500"},q={key:2,class:"px-6 py-4 whitespace-nowrap"},J=["onUpdate:modelValue"],L={key:3,class:"px-6 py-4 whitespace-nowrap text-gray-500"},W={key:4,class:"px-6 py-4 whitespace-nowrap"},Y=["onUpdate:modelValue"],G=u(()=>t("option",{value:!0},"是",-1)),H=u(()=>t("option",{value:!1},"否",-1)),K=[G,H],Q={key:5,class:"px-6 py-4 whitespace-nowrap text-gray-500"},R={key:0},X={key:1},Z={class:"px-6 py-4 whitespace-nowrap text-gray-500"},ee={key:6,class:"px-6 py-4 whitespace-nowrap"},te=["onUpdate:modelValue"],oe={key:7,class:"px-6 py-4 whitespace-nowrap text-gray-500"},se={class:"px-6 py-4 whitespace-nowrap text-gray-500"},ae=["onClick"],ne=["onClick"],ce=k({__name:"FeeCalculate",setup(i){const h="https://islandofhealing.rocket-coding.com/api",p=g([]),_=async()=>{const n=localStorage.getItem("token");if(n)try{const e=await(await fetch(`${h}/expense/get`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${n}`}})).json();if(console.log(e),e.StatusCode===200)console.log(e.ExpenseData),p.value=e.ExpenseData;else throw new Error(`發生錯誤 ${e.Message}`)}catch(o){console.log(o)}};b(_);const x=g(""),w=async()=>{const n=localStorage.getItem("token");if(n)try{const e=await(await fetch(`${h}/expense/create?userid=${x.value}`,{method:"POST",headers:{"Content-type":"application/json",Authorization:`Bearer ${n}`}})).json();if(console.log(e),e.StatusCode===200)console.log(e.ExpenseData),p.value=e.ExpenseData,_();else throw new Error(`發生錯誤 ${e.Message}`)}catch(o){console.log(o)}},f=async n=>{const o=localStorage.getItem("token");if(o)try{const c=await(await fetch(`${h}/expense/update`,{method:"PUT",headers:{"Content-type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({Id:n.Id,ContractId:n.ContractId,PayDate:n.PayDate,Amount:n.Amount,Paid:n.Paid})})).json();if(console.log(c),c.StatusCode===200)p.value=c.ExpenseData,_();else throw new Error(`發生錯誤 ${c.Message}`)}catch(e){console.log(e)}},y=n=>{const o=new Date(n);return`${o.getFullYear()}-${(o.getMonth()+1).toString().padStart(2,"0")}-${o.getDate().toString().padStart(2,"0")}`};return(n,o)=>(a(),s(m,null,[E,t("div",$,[l(t("input",{class:"px-2 border shadow-md","onUpdate:modelValue":o[0]||(o[0]=e=>x.value=e),placeholder:"請輸入作家編號",type:"text"},null,512),[[d,x.value]]),t("button",{class:"shadow-lg border ml-2 h-[40px] px-4 bg-blue-900 text-white rounded",onClick:w},"新增")]),t("div",P,[t("div",U,[t("div",V,[t("div",F,[t("table",A,[j,t("tbody",B,[(a(!0),s(m,null,v(p.value,e=>(a(),s("tr",{key:e.Id},[t("td",M,r(e.Id),1),e.Edit?(a(),s("td",z,[l(t("input",{"onUpdate:modelValue":c=>e.ContractId=c,class:"border"},null,8,T),[[d,e.ContractId]])])):(a(),s("td",N,r(e.ContractId),1)),t("td",O,r(e.WriterId),1),e.Edit?(a(),s("td",q,[l(t("input",{"onUpdate:modelValue":c=>e.Amount=c,class:"border w-20"},null,8,J),[[d,e.Amount]])])):(a(),s("td",L,r(e.Amount),1)),e.Edit?(a(),s("td",W,[l(t("select",{"onUpdate:modelValue":c=>e.Paid=c,class:"border w-20"},K,8,Y),[[C,e.Paid]])])):(a(),s("td",Q,[e.Paid===!0?(a(),s("p",R,"是")):(a(),s("p",X,"否"))])),t("td",Z,r(y(e.InitDate)),1),e.Edit?(a(),s("td",ee,[l(t("input",{"onUpdate:modelValue":c=>e.PayDate=c,class:"border w-[220px]"},null,8,te),[[d,e.PayDate]])])):(a(),s("td",oe,r(y(e.PayDate)),1)),t("td",se,[e.Edit?(a(),s("button",{key:1,class:"border ml-2 p-2 h-[40px] px-4 bg-blue-900 text-white rounded",onClick:c=>f(e)},"完成",8,ne)):(a(),s("button",{key:0,class:"border ml-2 p-2 h-[40px] px-4 bg-blue-900 text-white rounded",onClick:c=>e.Edit=!0},"編輯",8,ae))])]))),128))])])])])])])],64))}});const ie=S(ce,[["__scopeId","data-v-9ebe6353"]]);export{ie as default};
