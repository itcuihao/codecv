import{k as D,l as ie,m as le}from"./element-plus-5b013558.js";import{U as F,n as L,H as re,B as ae}from"./browseHistory-3c0d87eb.js";import{r as b,a5 as W,E as B,L as ce,o as r,c as v,a as i,_ as ue,al as me,u as t,U as de,i as pe,F as M,a7 as S,X as _,S as w,P as $,au as X,av as G,w as U,n as ve,W as A,V as j,h as x,K,j as ye,aw as J,M as fe,R as O}from"./@vue-c8b849dd.js";import{P as he}from"./vue3-emoji-picker-16a8470e.js";import{b as Q,u as E,e as T,I as ge,w as z,s as Y,_ as q,i as Z,E as _e,c as Ie}from"./index-242f51d6.js";import{e as ee}from"./@vueuse-67b6382f.js";import{s as te,c as oe}from"./index-885f6543.js";import{M as ke}from"./highlight-98565460.js";import{b as Ce}from"./vue-router-059fda26.js";import{a as $e,l as be}from"./community-7138e1b3.js";import"./lodash-es-742d3967.js";import"./async-validator-8a4f889d.js";import"./@element-plus-6e6d71a8.js";import"./dayjs-e78a62a1.js";import"./aos-17f8bee5.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./pinia-9e5c94d8.js";import"./picture-verification-code-aba23b74.js";import"./nprogress-8660dfbd.js";import"./config-4240d15d.js";import"./markdown-transform-html-ab2f9e2b.js";function we(e){return Q("/communityComment/publish",e)}function Te(e){return Q("/communityComment/reply",e)}function Ae(e){return Q("/communityComment/remove",e)}function Ne(e){return Q("/communityComment/queryCommentsByArticleId",e)}function xe(e){return Q("/communityComment/queryCommentPosition",e)}function Me(e){const n=b(!1);function s(){n.value=!n.value}function a(p){s(),e.value+=p.i}return{picker:n,togglePicker:s,setEmoji:a}}function Se(e,n,s,a,p,l,m,h,y){const d=b(""),{loginState:f,loginModelToggle:I,userInfo:c}=E();async function o(){if(!f.logined){I();return}if(!d.value.trim()){z("你发个空内容是想干嘛呢？？？");return}if(d.value.length>200){z("太多了存不下, 删到200字以内吧");return}const g=n.value==1?we:Te,u={content:d.value.replace(/</g,"&lt;").replace(/>/g,"&gt;"),authorId:c.uid,images:y.value.join("~$^$~"),level:n.value,articleId:e.value,posterCommentId:s.value,replyAuthorId:a.value,replyArticleAuthorId:p.value,replyCommentId:l.value,replyCommentLevel:m.value},k=await g(u);k.code==200&&(d.value="",y.value.length=0,h("reQueryComments")),k.code==200?Y(k.msg):T(k.msg)}return W(()=>{d.value="",y.value.length=0}),{shareMainContent:d,publish:ee(o,1e3)}}function Qe(){const e=b([]);async function n(){if(e.value.length>=2)return T("最多只能上传2张图片！");const a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("accept",".png,.jpg,.gif,.jpeg,.webp"),a.click(),a.onchange=async function(){const p=Array.from(a.files);for(const l of p){const m=await ge(l);e.value.push(m)}a.remove()}}function s(a){e.value.splice(a,1)}return{images:e,pickerImage:n,deleteImage:s}}const ne=e=>(X("data-v-cee10d60"),e=e(),G(),e),Re={class:"community-publish content-card"},Pe={class:"community-content-edit"},Be={key:0,class:"covers-container community-comment-cover"},Ee=["onClick"],qe={class:"community-operator-group flex community-content-edit-publish"},Le={class:"community-edit-picker"},je=ne(()=>i("i",{class:"iconfont icon-emoji font-25 mr-10"},null,-1)),ze=[je],De=ne(()=>i("i",{class:"iconfont icon-image font-25"},null,-1)),Fe=[De],Ue=B({__name:"publish",props:{articleId:null,level:null,replyCommentLevel:{default:1},posterCommentId:{default:0},replyCommentId:{default:0},replyAuthorId:{default:0},replyArticleAuthorId:{default:0},background:{default:"var(--body-background)"}},emits:["reQueryComments"],setup(e,{emit:n}){const s=e,{pickerImage:a,images:p,deleteImage:l}=Qe(),m=ce(s),{shareMainContent:h,publish:y}=Se(m.articleId,m.level,m.posterCommentId,m.replyAuthorId,m.replyArticleAuthorId,m.replyCommentId,m.replyCommentLevel,n,p),{picker:d,setEmoji:f,togglePicker:I}=Me(h);return(c,o)=>{const g=D;return r(),v("div",Re,[i("div",Pe,[ue(i("textarea",{style:de({background:e.background}),class:"content-edit main-content","onUpdate:modelValue":o[0]||(o[0]=u=>pe(h)?h.value=u:null),placeholder:"内容控制在200字以内～"},null,4),[[me,t(h)]])]),t(p).length?(r(),v("div",Be,[(r(!0),v(M,null,S(t(p),(u,k)=>(r(),v("div",{class:"mr-10 cover-item-container",key:k},[$(g,{loading:"lazy",src:u,fit:"cover",class:"cover-item","initial-index":k,"preview-src-list":t(p),"preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","initial-index","preview-src-list"]),i("i",{onClick:P=>t(l)(k),class:"iconfont icon-delete pointer hover cover-item-close"},null,8,Ee)]))),128))])):_("",!0),i("div",qe,[i("div",Le,[i("span",{class:"emoji pointer hover",onClick:o[1]||(o[1]=(...u)=>t(I)&&t(I)(...u))},ze),i("span",{class:"emoji pointer hover",onClick:o[2]||(o[2]=(...u)=>t(a)&&t(a)(...u))},Fe),t(d)?(r(),w(t(he),{key:0,class:"picker",native:!0,"hide-search":!0,"hide-group-names":!0,onSelect:t(f),"static-texts":{skinTone:"换肤"}},null,8,["onSelect"])):_("",!0)]),i("button",{class:"btn primary",onClick:o[3]||(o[3]=(...u)=>t(y)&&t(y)(...u))},"发表")])])}}});const V=q(Ue,[["__scopeId","data-v-cee10d60"]]);function se(e){const{userInfo:n}=E(),s=b(-1);let a=-1;function p(m){if(a===m){s.value=-1,a=-1;return}a=m,s.value=m}async function l(m,h,y){if(!Z()){T("请先登录！"),window.location.reload();return}const d=await Ae({commentId:m,articleId:h,level:y});if(d.code==200){Y(d.msg),e("reQueryComments");return}T(d.msg)}return{userInfo:n,reply:p,remove:l,currenId:s}}function Ve(e){const n=b(e>1);function s(){n.value=!1}return{more:n,setMore:s}}function He(e){const n=b();return U(()=>e.value,()=>{try{ve(()=>{const s=n.value.children[e.value];te(oe(s)-65),s.classList.add("notice"),setTimeout(()=>{s.classList.remove("notice")},1e3)})}catch{T("出了点错，请刷新后重新尝试～")}}),{comments:n}}const Ke={class:"comments-list mt-20 content-card"},Oe={class:"comment-content line-4"},We={class:"reply-text pointer"},Xe={key:0,class:"covers-container"},Ge={class:"list-style-init flex operator"},Je=["onClick"],Ye=["onClick"],Ze=B({__name:"reply",props:{data:null,commentId:null,articleId:null},emits:["reQueryComments"],setup(e,{emit:n}){const s=e,{currenId:a,reply:p,userInfo:l,remove:m}=se(n),{more:h,setMore:y}=Ve(s.data.length);return(d,f)=>{const I=D;return r(),v("div",Ke,[(r(!0),v(M,null,S(t(h)?e.data.slice(0,1):e.data,(c,o)=>(r(),v("div",{class:"comment-item",key:o},[$(F,{"user-info":c.authorInfo,"publish-time":c.createTime},null,8,["user-info","publish-time"]),i("p",Oe,[i("span",We,"@"+A(c.replyNickName)+"：",1),j(" "+A(c.content),1)]),c.images?(r(),v("div",Xe,[(r(!0),v(M,null,S(c.images.split("~$^$~"),(g,u)=>(r(),w(I,{key:u,src:g,"preview-src-list":c.images.split("~$^$~"),"initial-index":u,fit:"cover",loading:"lazy",lazy:!0,class:"mr-10 cover-item","preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","preview-src-list","initial-index"]))),128))])):_("",!0),i("ul",Ge,[i("li",{class:"mr-10",onClick:g=>t(p)(c.commentId)},"回复",8,Je),t(l).uid===c.authorId?(r(),v("li",{key:0,onClick:g=>t(m)(c.commentId,e.articleId,2)}," 删除 ",8,Ye)):_("",!0)]),t(a)===c.commentId?(r(),w(V,{key:1,"article-id":e.articleId,level:2,"reply-comment-level":c.level,"poster-comment-id":e.commentId,"reply-comment-id":c.commentId,"reply-author-id":c.authorId,background:"white",onReQueryComments:f[0]||(f[0]=g=>d.$emit("reQueryComments"))},null,8,["article-id","reply-comment-level","poster-comment-id","reply-comment-id","reply-author-id"])):_("",!0)]))),128)),t(h)?(r(),v("span",{key:0,onClick:f[1]||(f[1]=(...c)=>t(y)&&t(y)(...c)),class:"pointer showMore"},"显示全部...")):_("",!0)])}}});const et=q(Ze,[["__scopeId","data-v-31c94d5a"]]),tt={class:"comments-container content-card"},ot={class:"tip"},nt={class:"comment-content line-4"},st={key:0,class:"covers-container"},it={class:"list-style-init flex operator"},lt=["onClick"],rt=["onClick"],at=B({__name:"comments",props:{data:null,articleId:null,pageNum:null,scrollTo:null,total:null,articleAuthorId:null,commentsTotal:null},emits:["pageNumChange","reQueryComments"],setup(e,{emit:n}){const s=e,a=x(()=>s.scrollTo),{currenId:p,reply:l,userInfo:m,remove:h}=se(n),{comments:y}=He(a);return(d,f)=>{const I=D,c=ie;return r(),v("div",tt,[i("span",ot,"本页评论/回复共 "+A(t(L)(e.total))+" 条",1),e.data.length?(r(),v("div",{key:0,class:"comments-list mt-20 content-card",ref_key:"comments",ref:y},[(r(!0),v(M,null,S(e.data,(o,g)=>(r(),v("div",{class:"comment-item",key:g},[$(F,{"user-info":o.authorInfo,"publish-time":o.createTime},null,8,["user-info","publish-time"]),i("p",nt,A(o.content),1),o.images?(r(),v("div",st,[(r(!0),v(M,null,S(o.images.split("~$^$~"),(u,k)=>(r(),w(I,{src:u,"preview-src-list":o.images.split("~$^$~"),key:k,"initial-index":k,fit:"cover",lazy:!0,loading:"lazy",class:"mr-10 cover-item","preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","preview-src-list","initial-index"]))),128))])):_("",!0),i("ul",it,[i("li",{class:"mr-10",onClick:u=>t(l)(o.commentId)},"回复",8,lt),t(m).uid===o.authorId?(r(),v("li",{key:0,onClick:u=>t(h)(o.commentId,e.articleId,1)}," 删除 ",8,rt)):_("",!0)]),t(p)===o.commentId?(r(),w(V,{key:1,"article-id":e.articleId,level:2,"poster-comment-id":o.commentId,"reply-comment-id":o.commentId,"reply-comment-level":o.level,"reply-author-id":o.authorId,"reply-article-author-id":e.articleAuthorId,onReQueryComments:f[0]||(f[0]=u=>d.$emit("reQueryComments"))},null,8,["article-id","poster-comment-id","reply-comment-id","reply-comment-level","reply-author-id","reply-article-author-id"])):_("",!0),o.children.length?(r(),w(et,{key:2,data:o.children,"comment-id":o.commentId,"article-id":e.articleId,onReQueryComments:f[1]||(f[1]=u=>d.$emit("reQueryComments"))},null,8,["data","comment-id","article-id"])):_("",!0)]))),128))],512)):_("",!0),e.data.length?(r(),w(c,{key:1,background:"",layout:"prev, pager, next",total:e.commentsTotal,class:"mt-4 mt-20","current-page":e.pageNum,onCurrentChange:f[2]||(f[2]=o=>d.$emit("pageNumChange",o))},null,8,["total","current-page"])):_("",!0),e.data.length?_("",!0):(r(),w(_e,{key:2,title:"还没有人发表评论..."}))])}}});const ct=q(at,[["__scopeId","data-v-e3386f8f"]]);function ut(e,n){const s=K({title:"",content:"",professional:"",authorId:0,likes:[],commentTotal:0,hot:0,createTime:"",updateTime:"",articleId:e.value,introduce:"",authorInfo:Ie,comments:[]}),a=b(0),p=b(0),l=K({pageNum:1,pageSize:10,articleId:e.value}),m=b();async function h(){if(!e.value){T("出错了");return}const o=await $e({articleId:e.value});o.code==200&&mt(s,o.data)}async function y(){l.articleId=e.value;const o=await Ne(l);o.code==200&&(s.comments=o.data,a.value=o.total,p.value=o.commentsTotal)}function d(){const o=document.querySelector(".anchor");te(oe(o)-65)}function f(o){l.pageNum=o,y(),d()}async function I(o){if(!Z())return T("请先登录");if(o){z("点过赞了, 不用再点了～");return}const{userInfo:g}=E(),{code:u}=await be({articleId:e.value,userId:g.uid});u==200&&s.likes.push(g.uid)}const c=ee(function(){isNaN(e.value)||(y(),h())});return U(()=>e.value,()=>{c()}),ye(async()=>{if(isNaN(n.value))return;const{data:o,code:g,msg:u}=await xe({commentId:n.value,pageSize:l.pageSize,articleId:e.value});g===200?(l.pageNum=o.pageNum,s.comments=o.data,m.value=o.position):T(u)}),J(c),W(()=>s.content=""),{commentsConditions:l,total:a,position:m,commentsTotal:p,article:s,like:I,queryArticle:h,pageNumChange:f,queryComments:y,toCommentFieldTop:d}}function mt(e,n){e.articleId=n.articleId,e.title=n.title,e.content=n.content,e.commentTotal=n.commentTotal,e.professional=n.professional,e.authorId=n.authorId,e.likes=n.likes,e.createTime=n.createTime,e.updateTime=n.updateTime,e.introduce=n.introduce,e.authorInfo=n.authorInfo}function dt(e){const n=b(!1);function s(){n.value=!1,setTimeout(()=>n.value=!0,200)}return J(()=>{s()}),U(()=>e.value,()=>{s()}),{delay:n}}const R=e=>(X("data-v-587ff286"),e=e(),G(),e),pt={class:"community-detail flex"},vt={class:"main-content mr-20"},yt={class:"main content-card"},ft=["innerHTML"],ht={class:"supports mb-20"},gt=R(()=>i("i",{class:"iconfont icon-like font-20"},null,-1)),_t=R(()=>i("i",{class:"iconfont icon-comment font-20"},null,-1)),It=R(()=>i("i",{class:"iconfont icon-share font-20"},null,-1)),kt=R(()=>i("i",{class:"iconfont icon-edit font-20"},null,-1)),Ct={class:"pointer tag mr-20"},$t=R(()=>i("i",{class:"anchor"},null,-1)),bt={class:"slide-content"},wt=B({__name:"communityDetail",setup(e){const n=Ce(),s=x(()=>parseInt(n.query.articleId)),a=x(()=>parseInt(n.query.posterCommentId)),{userInfo:p}=E(),{article:l,total:m,position:h,commentsTotal:y,like:d,pageNumChange:f,toCommentFieldTop:I,queryComments:c,commentsConditions:o}=ut(s,a),{delay:g}=dt(s),u=x(()=>l.likes.includes(p.uid)),k=x(()=>l.authorId==p.uid);return(P,C)=>{const H=le;return r(),v("div",pt,[i("div",vt,[i("div",yt,[$(F,{class:"user-info","user-info":t(l).authorInfo,"publish-time":t(l).createTime},null,8,["user-info","publish-time"]),i("article",{class:"content",innerHTML:t(l).content},null,8,ft),i("div",ht,[i("span",{onClick:C[0]||(C[0]=N=>t(d)(t(u))),class:fe({clicked:t(u)})},[gt,j(" "+A(t(L)(t(l).likes.length)),1)],2),i("span",{onClick:C[1]||(C[1]=(...N)=>t(I)&&t(I)(...N))},[_t,j(" "+A(t(L)(t(l).comments.length)),1)]),i("span",null,[$(H,{placement:"bottom",content:"分享给朋友"},{default:O(()=>[It]),_:1})]),t(k)?(r(),v("span",{key:0,onClick:C[2]||(C[2]=N=>P.$router.push(`/community/editor?articleId=${t(s)}`))},[$(H,{placement:"bottom",content:"编辑"},{default:O(()=>[kt]),_:1})])):_("",!0)]),i("span",Ct,"#"+A(t(l).professional),1),i("span",{class:"pointer hover",onClick:C[3]||(C[3]=N=>P.$router.back())},"返回上一页"),i("span",{class:"pointer hover back absolute",onClick:C[4]||(C[4]=N=>P.$router.back())},"返回上一页")]),$(V,{"article-id":t(s),level:1,"reply-article-author-id":t(l).authorId,onReQueryComments:t(c)},null,8,["article-id","reply-article-author-id","onReQueryComments"]),$t,$(ct,{data:t(l).comments,"article-id":t(s),total:t(m),"page-num":t(o).pageNum,"scroll-to":t(h),"comments-total":t(y),"article-author-id":t(l).authorId,onPageNumChange:t(f),onReQueryComments:t(c)},null,8,["data","article-id","total","page-num","scroll-to","comments-total","article-author-id","onPageNumChange","onReQueryComments"])]),i("div",bt,[$(re,{class:"slide-item"}),$(ae),t(g)?(r(),w(ke,{key:0,class:"slide-item menu-bar content-card",body:".content",style:{width:"300px"}})):_("",!0)])])}}});const Wt=q(wt,[["__scopeId","data-v-587ff286"]]);export{Wt as default};
