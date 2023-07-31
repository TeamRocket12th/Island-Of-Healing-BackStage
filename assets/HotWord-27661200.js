import{e as f,f as d,l as w,c as o,a as e,j as _,v as x,F as l,h as p,o as a,t as n}from"./index-88941983.js";const b={class:"flex justify-between py-5 items-center"},k=e("h1",{class:"text-3xl"},"熱門關鍵字前20名",-1),B={class:"flex p-4 gap-4 items-center h-[40px]"},$=e("p",null,"請選擇年/月",-1),j=["value"],C=e("option",{value:"0"},"整年",-1),M=["value"],S={class:"flex flex-col"},V={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},D={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},E={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},F={class:"min-w-full divide-y divide-gray-200"},H=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 熱門關鍵字 "),e("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 搜尋次數 ")])],-1),R={class:"px-6 py-4 whitespace-nowrap text-gray-500"},U={class:"px-6 py-4 whitespace-nowrap text-gray-500"},A=f({__name:"HotWord",setup(W){const g="https://islandofhealing.rocket-coding.com/api",u=d([]),v=[2023,2024,2025,2026,2027,2028],y=[1,2,3,4,5,6,7,8,9,10,11,12],r=d("2023"),c=d(0),h=async()=>{const i=localStorage.getItem("token");if(i)try{const t=await(await fetch(`${g}/trendanalysis/get?year=${r.value}&month=${c.value}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${i}`}})).json();if(console.log(t),t.StatusCode===200)u.value=t.sortedReturnResult;else throw new Error(`發生錯誤 ${t.Message}`)}catch(s){console.log(s)}};return w(h),(i,s)=>(a(),o(l,null,[e("div",b,[k,e("div",B,[$,_(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>r.value=t),class:"rounded p-2 h-[40px] w-[120px] cursor-pointer"},[(a(),o(l,null,p(v,t=>e("option",{key:t,value:t},n(t),9,j)),64))],512),[[x,r.value]]),_(e("select",{"onUpdate:modelValue":s[1]||(s[1]=t=>c.value=t),class:"rounded p-2 h-[40px] w-[120px] cursor-pointer"},[C,(a(),o(l,null,p(y,t=>e("option",{key:t,value:t},n(t),9,M)),64))],512),[[x,c.value]]),e("button",{class:"border h-[40px] px-4 bg-blue-900 text-white rounded",onClick:h}," 查詢 ")])]),e("div",S,[e("div",V,[e("div",D,[e("div",E,[e("table",F,[H,(a(!0),o(l,null,p(u.value,(t,m)=>(a(),o("tbody",{class:"bg-white divide-y divide-gray-200",key:m},[e("tr",null,[e("td",R,n(t.Key),1),e("td",U,n(t.Value),1)])]))),128))])])])])])],64))}});export{A as default};
