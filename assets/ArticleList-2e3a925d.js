import{e as m,c as p,a as t,F as _,h as f,i as x,o as c,t as d,n as v,j as k,v as A,k as b,u as P,f as w,l as S,m as y}from"./index-89785fe1.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const C={key:0,class:"flex flex-col"},I={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},B={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},M={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},j={class:"min-w-full divide-y divide-gray-200"},N=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," ID "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 標題 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 創建日期 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 作者 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 目前進度 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"}," 變更進度 "),t("th",{scope:"col",class:"px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"})])],-1),V={class:"bg-white divide-y divide-gray-200"},D={class:"px-6 py-4 whitespace-nowrap text-gray-500"},z={class:"px-6 py-4 whitespace-nowrap text-gray-500"},E={class:"px-6 py-4 whitespace-nowrap text-gray-500"},R={class:"px-6 py-4 whitespace-nowrap text-gray-500"},F={class:"px-6 py-4 whitespace-nowrap text-gray-500"},L={class:"py-1 flex gap-4"},T=["onUpdate:modelValue"],U=b('<option disabled selected>審核進度</option><option value="1">待審核</option><option value="2">審核中</option><option value="3">審核失敗</option><option value="4">審核成功</option>',5),q=[U],O={class:"px-6 py-4 whitespace-nowrap text-gray-500"},J=["onClick"],W=m({__name:"ReviewArticles",props:{reviewArticles:{type:Array,required:!0},getAllArticles:{type:Function,required:!0}},setup(i){const l=i,g="https://islandofhealing.rocket-coding.com/api",u=async o=>{const r=localStorage.getItem("token");if(r)try{const s=await(await fetch(`${g}/followedwriternewarticlenotification/create?articleid=${o}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${r}`},method:"POST"})).json();if(console.log(s),s.StatusCode===200)console.log(s.Message),l.getAllArticles();else throw new Error(`發生錯誤 ${s.Message}`)}catch(e){console.log(e)}},h=async(o,r)=>{const e=localStorage.getItem("token"),s=localStorage.getItem("adminId");if(!(!e&&!s)){console.log(o);try{const a=await(await fetch(`${g}/article/updateprogress/${r}`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${e}`},method:"PUT",body:JSON.stringify({Progress:o.newProgress})})).json();if(console.log(a),a.StatusCode===200&&o.newProgress!=="4")alert(a.Message),l.getAllArticles();else if(a.StatusCode===200&&o.newProgress==="4")alert(a.Message),u(r);else throw new Error(`發生錯誤 ${a.Message}`)}catch(n){console.log(n)}}};return(o,r)=>i.reviewArticles?(c(),p("div",C,[t("div",I,[t("div",B,[t("div",M,[t("table",j,[N,t("tbody",V,[(c(!0),p(_,null,f(i.reviewArticles,e=>(c(),p("tr",{key:e.Id},[t("td",D,d(e.Id),1),t("td",z,d(e.Title),1),t("td",E,d(new Date(e.Initdate).toLocaleString()),1),t("td",R,d(e.WriterNickName),1),t("td",{class:v(["px-6 py-4 whitespace-nowrap text-gray-500",{"text-green-600":e.Progress==="審核成功","text-red-600":e.Progress==="待審核"}])},d(e.Progress),3),t("td",F,[t("div",L,[k(t("select",{"onUpdate:modelValue":s=>e.newProgress=s,class:"w-30 select select-sm select-bordered"},q,8,T),[[A,e.newProgress]])])]),t("td",O,[t("button",{type:"button",class:"btn-sm bg-slate-300 font-normal btn self-end",onClick:s=>h(e,e.Id)}," 確認 ",8,J)])]))),128))])])])])])])):x("",!0)}}),G={};function H(i,l){return c(),p("div",null,"hi")}const K=$(G,[["render",H]]),Y=m({__name:"ArticleList",setup(i){const l=P();console.log(l.currentRoute.value);const g="https://islandofhealing.rocket-coding.com/api",u=w(!0),h=e=>{switch(e){case"待審核":return"1";case"審核中":return"2";case"審核失敗":return"3";case"審核成功":return"4";default:return"1"}},o=w([]),r=async()=>{const e=localStorage.getItem("token");if(e)try{const n=await(await fetch(`${g}/administratorarticles/get`,{headers:{"Content-type":"application/json",Authorization:`Bearer ${e}`}})).json();if(console.log(n),n.StatusCode===200)o.value=n.ArticlesData.map(a=>({...a,newProgress:h(a.Progress)})).reverse(),console.log(o.value);else throw new Error(`發生錯誤 ${n.Message}`)}catch(s){console.log(s)}};return S(r),(e,s)=>(c(),p("div",null,[u.value?(c(),y(W,{key:0,reviewArticles:o.value,getAllArticles:r},null,8,["reviewArticles"])):(c(),y(K,{key:1}))]))}});export{Y as default};
