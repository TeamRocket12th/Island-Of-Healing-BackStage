import{d as f,r as d,m as w,c as o,b as e,k as _,v as x,F as n,e as p,o as a,t as l}from"./index-ed710b8a.js";const b={class:"flex justify-between py-5 items-center"},k=e("h1",{class:"text-3xl"},"熱門關鍵字前20名",-1),B={class:"flex p-4 gap-4 items-center h-[40px]"},$=e("p",null,"請選擇年/月",-1),C=["value"],M=e("option",{value:"0"},"整年",-1),S=["value"],V={class:"flex flex-col"},j={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},D={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},E={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},F={class:"min-w-full divide-y divide-gray-200"},H=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 熱門關鍵字 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 搜尋次數 ")])],-1),R={class:"px-6 py-4 whitespace-nowrap text-gray-500"},U={class:"px-6 py-4 whitespace-nowrap text-gray-500"},A=f({__name:"HotWord",setup(W){const g="https://islandofhealing.rocket-coding.com/api",u=d([]),v=[2023,2024,2025,2026,2027,2028],y=[1,2,3,4,5,6,7,8,9,10,11,12],r=d("2023"),i=d(0),h=async()=>{const c=localStorage.getItem("token");if(c)try{const t=await(await fetch(`${g}/trendanalysis/get?year=${r.value}&month=${i.value}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${c}`}})).json();if(t.StatusCode===200)u.value=t.sortedReturnResult;else throw new Error(`發生錯誤 ${t.Message}`)}catch(s){console.log(s)}};return w(h),(c,s)=>(a(),o(n,null,[e("div",b,[k,e("div",B,[$,_(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>r.value=t),class:"rounded p-2 h-[40px] w-[120px] cursor-pointer"},[(a(),o(n,null,p(v,t=>e("option",{key:t,value:t},l(t),9,C)),64))],512),[[x,r.value]]),_(e("select",{"onUpdate:modelValue":s[1]||(s[1]=t=>i.value=t),class:"rounded p-2 h-[40px] w-[120px] cursor-pointer"},[M,(a(),o(n,null,p(y,t=>e("option",{key:t,value:t},l(t),9,S)),64))],512),[[x,i.value]]),e("button",{type:"button",class:"h-9 px-4 bg-blue-900 text-white hover:bg-blue-800 rounded-md",onClick:h}," 查詢 ")])]),e("div",V,[e("div",j,[e("div",D,[e("div",E,[e("table",F,[H,(a(!0),o(n,null,p(u.value,(t,m)=>(a(),o("tbody",{class:"bg-white divide-y divide-gray-200",key:m},[e("tr",null,[e("td",R,l(t.Key),1),e("td",U,l(t.Value),1)])]))),128))])])])])])],64))}});export{A as default};