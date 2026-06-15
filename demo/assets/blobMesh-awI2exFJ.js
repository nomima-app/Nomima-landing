function HS(r,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const c=Object.getOwnPropertyDescriptor(s,l);c&&Object.defineProperty(r,l,c.get?c:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var v3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zh={exports:{}},Jo={};var E_;function GS(){if(E_)return Jo;E_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Jo.Fragment=t,Jo.jsx=n,Jo.jsxs=n,Jo}var b_;function VS(){return b_||(b_=1,zh.exports=GS()),zh.exports}var x3=VS(),Ih={exports:{}},se={};var T_;function XS(){if(T_)return se;T_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(z,Q,vt){this.props=z,this.context=Q,this.refs=M,this.updater=vt||T}S.prototype.isReactComponent={},S.prototype.setState=function(z,Q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Q,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function C(){}C.prototype=S.prototype;function D(z,Q,vt){this.props=z,this.context=Q,this.refs=M,this.updater=vt||T}var U=D.prototype=new C;U.constructor=D,w(U,S.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function N(){}var I={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function O(z,Q,vt){var Tt=vt.ref;return{$$typeof:r,type:z,key:Q,ref:Tt!==void 0?Tt:null,props:vt}}function k(z,Q){return O(z.type,Q,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function Y(z){var Q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(vt){return Q[vt]})}var ct=/\/+/g;function ot(z,Q){return typeof z=="object"&&z!==null&&z.key!=null?Y(""+z.key):Q.toString(36)}function Z(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(N,N):(z.status="pending",z.then(function(Q){z.status==="pending"&&(z.status="fulfilled",z.value=Q)},function(Q){z.status==="pending"&&(z.status="rejected",z.reason=Q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function P(z,Q,vt,Tt,wt){var st=typeof z;(st==="undefined"||st==="boolean")&&(z=null);var xt=!1;if(z===null)xt=!0;else switch(st){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(z.$$typeof){case r:case t:xt=!0;break;case _:return xt=z._init,P(xt(z._payload),Q,vt,Tt,wt)}}if(xt)return wt=wt(z),xt=Tt===""?"."+ot(z,0):Tt,F(wt)?(vt="",xt!=null&&(vt=xt.replace(ct,"$&/")+"/"),P(wt,Q,vt,"",function(ee){return ee})):wt!=null&&(H(wt)&&(wt=k(wt,vt+(wt.key==null||z&&z.key===wt.key?"":(""+wt.key).replace(ct,"$&/")+"/")+xt)),Q.push(wt)),1;xt=0;var Et=Tt===""?".":Tt+":";if(F(z))for(var Ht=0;Ht<z.length;Ht++)Tt=z[Ht],st=Et+ot(Tt,Ht),xt+=P(Tt,Q,vt,st,wt);else if(Ht=y(z),typeof Ht=="function")for(z=Ht.call(z),Ht=0;!(Tt=z.next()).done;)Tt=Tt.value,st=Et+ot(Tt,Ht++),xt+=P(Tt,Q,vt,st,wt);else if(st==="object"){if(typeof z.then=="function")return P(Z(z),Q,vt,Tt,wt);throw Q=String(z),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return xt}function V(z,Q,vt){if(z==null)return z;var Tt=[],wt=0;return P(z,Tt,"","",function(st){return Q.call(vt,st,wt++)}),Tt}function rt(z){if(z._status===-1){var Q=z._result;Q=Q(),Q.then(function(vt){(z._status===0||z._status===-1)&&(z._status=1,z._result=vt)},function(vt){(z._status===0||z._status===-1)&&(z._status=2,z._result=vt)}),z._status===-1&&(z._status=0,z._result=Q)}if(z._status===1)return z._result.default;throw z._result}var mt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},St={map:V,forEach:function(z,Q,vt){V(z,function(){Q.apply(this,arguments)},vt)},count:function(z){var Q=0;return V(z,function(){Q++}),Q},toArray:function(z){return V(z,function(Q){return Q})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return se.Activity=v,se.Children=St,se.Component=S,se.Fragment=n,se.Profiler=l,se.PureComponent=D,se.StrictMode=s,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,se.__COMPILER_RUNTIME={__proto__:null,c:function(z){return I.H.useMemoCache(z)}},se.cache=function(z){return function(){return z.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(z,Q,vt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Tt=w({},z.props),wt=z.key;if(Q!=null)for(st in Q.key!==void 0&&(wt=""+Q.key),Q)!b.call(Q,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&Q.ref===void 0||(Tt[st]=Q[st]);var st=arguments.length-2;if(st===1)Tt.children=vt;else if(1<st){for(var xt=Array(st),Et=0;Et<st;Et++)xt[Et]=arguments[Et+2];Tt.children=xt}return O(z.type,wt,Tt)},se.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},se.createElement=function(z,Q,vt){var Tt,wt={},st=null;if(Q!=null)for(Tt in Q.key!==void 0&&(st=""+Q.key),Q)b.call(Q,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(wt[Tt]=Q[Tt]);var xt=arguments.length-2;if(xt===1)wt.children=vt;else if(1<xt){for(var Et=Array(xt),Ht=0;Ht<xt;Ht++)Et[Ht]=arguments[Ht+2];wt.children=Et}if(z&&z.defaultProps)for(Tt in xt=z.defaultProps,xt)wt[Tt]===void 0&&(wt[Tt]=xt[Tt]);return O(z,st,wt)},se.createRef=function(){return{current:null}},se.forwardRef=function(z){return{$$typeof:d,render:z}},se.isValidElement=H,se.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:rt}},se.memo=function(z,Q){return{$$typeof:m,type:z,compare:Q===void 0?null:Q}},se.startTransition=function(z){var Q=I.T,vt={};I.T=vt;try{var Tt=z(),wt=I.S;wt!==null&&wt(vt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(N,mt)}catch(st){mt(st)}finally{Q!==null&&vt.types!==null&&(Q.types=vt.types),I.T=Q}},se.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},se.use=function(z){return I.H.use(z)},se.useActionState=function(z,Q,vt){return I.H.useActionState(z,Q,vt)},se.useCallback=function(z,Q){return I.H.useCallback(z,Q)},se.useContext=function(z){return I.H.useContext(z)},se.useDebugValue=function(){},se.useDeferredValue=function(z,Q){return I.H.useDeferredValue(z,Q)},se.useEffect=function(z,Q){return I.H.useEffect(z,Q)},se.useEffectEvent=function(z){return I.H.useEffectEvent(z)},se.useId=function(){return I.H.useId()},se.useImperativeHandle=function(z,Q,vt){return I.H.useImperativeHandle(z,Q,vt)},se.useInsertionEffect=function(z,Q){return I.H.useInsertionEffect(z,Q)},se.useLayoutEffect=function(z,Q){return I.H.useLayoutEffect(z,Q)},se.useMemo=function(z,Q){return I.H.useMemo(z,Q)},se.useOptimistic=function(z,Q){return I.H.useOptimistic(z,Q)},se.useReducer=function(z,Q,vt){return I.H.useReducer(z,Q,vt)},se.useRef=function(z){return I.H.useRef(z)},se.useState=function(z){return I.H.useState(z)},se.useSyncExternalStore=function(z,Q,vt){return I.H.useSyncExternalStore(z,Q,vt)},se.useTransition=function(){return I.H.useTransition()},se.version="19.2.6",se}var A_;function xp(){return A_||(A_=1,Ih.exports=XS()),Ih.exports}var qv=xp();const kS=Wv(qv),y3=HS({__proto__:null,default:kS},[qv]);var Bh={exports:{}},Qo={},Fh={exports:{}},Hh={};var R_;function WS(){return R_||(R_=1,(function(r){function t(P,V){var rt=P.length;P.push(V);t:for(;0<rt;){var mt=rt-1>>>1,St=P[mt];if(0<l(St,V))P[mt]=V,P[rt]=St,rt=mt;else break t}}function n(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var V=P[0],rt=P.pop();if(rt!==V){P[0]=rt;t:for(var mt=0,St=P.length,z=St>>>1;mt<z;){var Q=2*(mt+1)-1,vt=P[Q],Tt=Q+1,wt=P[Tt];if(0>l(vt,rt))Tt<St&&0>l(wt,vt)?(P[mt]=wt,P[Tt]=rt,mt=Tt):(P[mt]=vt,P[Q]=rt,mt=Q);else if(Tt<St&&0>l(wt,rt))P[mt]=wt,P[Tt]=rt,mt=Tt;else break t}}return V}function l(P,V){var rt=P.sortIndex-V.sortIndex;return rt!==0?rt:P.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,v=null,g=3,y=!1,T=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var V=n(m);V!==null;){if(V.callback===null)s(m);else if(V.startTime<=P)s(m),V.sortIndex=V.expirationTime,t(p,V);else break;V=n(m)}}function F(P){if(w=!1,U(P),!T)if(n(p)!==null)T=!0,N||(N=!0,Y());else{var V=n(m);V!==null&&Z(F,V.startTime-P)}}var N=!1,I=-1,b=5,O=-1;function k(){return M?!0:!(r.unstable_now()-O<b)}function H(){if(M=!1,N){var P=r.unstable_now();O=P;var V=!0;try{t:{T=!1,w&&(w=!1,C(I),I=-1),y=!0;var rt=g;try{e:{for(U(P),v=n(p);v!==null&&!(v.expirationTime>P&&k());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,g=v.priorityLevel;var St=mt(v.expirationTime<=P);if(P=r.unstable_now(),typeof St=="function"){v.callback=St,U(P),V=!0;break e}v===n(p)&&s(p),U(P)}else s(p);v=n(p)}if(v!==null)V=!0;else{var z=n(m);z!==null&&Z(F,z.startTime-P),V=!1}}break t}finally{v=null,g=rt,y=!1}V=void 0}}finally{V?Y():N=!1}}}var Y;if(typeof D=="function")Y=function(){D(H)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ot=ct.port2;ct.port1.onmessage=H,Y=function(){ot.postMessage(null)}}else Y=function(){S(H,0)};function Z(P,V){I=S(function(){P(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(P){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var rt=g;g=V;try{return P()}finally{g=rt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var rt=g;g=P;try{return V()}finally{g=rt}},r.unstable_scheduleCallback=function(P,V,rt){var mt=r.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?mt+rt:mt):rt=mt,P){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=rt+St,P={id:_++,callback:V,priorityLevel:P,startTime:rt,expirationTime:St,sortIndex:-1},rt>mt?(P.sortIndex=rt,t(m,P),n(p)===null&&P===n(m)&&(w?(C(I),I=-1):w=!0,Z(F,rt-mt))):(P.sortIndex=St,t(p,P),T||y||(T=!0,N||(N=!0,Y()))),P},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(P){var V=g;return function(){var rt=g;g=V;try{return P.apply(this,arguments)}finally{g=rt}}}})(Hh)),Hh}var C_;function qS(){return C_||(C_=1,Fh.exports=WS()),Fh.exports}var Gh={exports:{}},zn={};var w_;function YS(){if(w_)return zn;w_=1;var r=xp();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,_)},zn.flushSync=function(p){var m=f.T,_=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=_,s.d.f()}},zn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},zn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},zn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),g=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},zn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},zn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},zn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},zn.requestFormReset=function(p){s.d.r(p)},zn.unstable_batchedUpdates=function(p,m){return p(m)},zn.useFormState=function(p,m,_){return f.H.useFormState(p,m,_)},zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},zn.version="19.2.6",zn}var D_;function jS(){if(D_)return Gh.exports;D_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Gh.exports=YS(),Gh.exports}var U_;function ZS(){if(U_)return Qo;U_=1;var r=qS(),t=xp(),n=jS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),i;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=h;break}if(R===o){x=!0,o=u,a=h;break}R=R.sibling}if(!x){for(R=h.child;R;){if(R===a){x=!0,a=h,o=u;break}if(R===o){x=!0,o=h,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case D:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case U:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:ot(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return ot(e(i))}catch{}}return null}var Z=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},mt=[],St=-1;function z(e){return{current:e}}function Q(e){0>St||(e.current=mt[St],mt[St]=null,St--)}function vt(e,i){St++,mt[St]=e.current,e.current=i}var Tt=z(null),wt=z(null),st=z(null),xt=z(null);function Et(e,i){switch(vt(st,i),vt(wt,e),vt(Tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?qg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=qg(i),e=Yg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Tt),vt(Tt,e)}function Ht(){Q(Tt),Q(wt),Q(st)}function ee(e){e.memoizedState!==null&&vt(xt,e);var i=Tt.current,a=Yg(i,e.type);i!==a&&(vt(wt,e),vt(Tt,a))}function Jt(e){wt.current===e&&(Q(Tt),Q(wt)),xt.current===e&&(Q(xt),Yo._currentValue=rt)}var ke,pe;function ye(e){if(ke===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ke=i&&i[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+e+pe}var Le=!1;function fe(e,i){if(!e||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var at=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){at=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){at=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],R=h[1];if(x&&R){var B=x.split(`
`),tt=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===tt.length)for(o=B.length-1,u=tt.length-1;1<=o&&0<=u&&B[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==tt[u]){var ht=`
`+B[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ye(a):""}function ln(e,i){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye("Lazy");case 13:return e.child!==i&&i!==null?ye("Suspense Fallback"):ye("Suspense");case 19:return ye("SuspenseList");case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return ye("Activity");default:return""}}function Ye(e){try{var i="",a=null;do i+=ln(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Cn=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,nn=r.unstable_cancelCallback,me=r.unstable_shouldYield,Fe=r.unstable_requestPaint,At=r.unstable_now,Qe=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,gt=r.unstable_LowPriority,Mt=r.unstable_IdlePriority,Rt=r.log,Lt=r.unstable_setDisableYieldValue,ut=null,ft=null;function Nt(e){if(typeof Rt=="function"&&Lt(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(ut,e)}catch{}}var Ot=Math.clz32?Math.clz32:ie,Dt=Math.log,Ct=Math.LN2;function ie(e){return e>>>=0,e===0?32:31-(Dt(e)/Ct|0)|0}var ae=256,ge=262144,X=4194304;function bt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=bt(o):(x&=R,x!==0?u=bt(x):a||(a=R&~e,a!==0&&(u=bt(a))))):(R=o&~h,R!==0?u=bt(R):x!==0?u=bt(x):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,a=i&-i,h>=a||h===32&&(a&4194048)!==0)?i:u}function Bt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ut(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=X;return X<<=1,(X&62914560)===0&&(X=4194304),e}function qt(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function ne(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function an(e,i,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,tt=e.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-Ot(a),_t=1<<ht;R[ht]=0,B[ht]=-1;var at=tt[ht];if(at!==null)for(tt[ht]=null,ht=0;ht<at.length;ht++){var lt=at[ht];lt!==null&&(lt.lane&=-536870913)}a&=~_t}o!==0&&we(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~i))}function we(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ot(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function _i(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Ot(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function ti(e,i){var a=i&-i;return a=(a&42)!==0?1:Ss(a),(a&(e.suspendedLanes|i))!==0?0:a}function Ss(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ao(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function so(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:g_(e.type))}function ro(e,i){var a=V.p;try{return V.p=e,i()}finally{V.p=a}}var On=Math.random().toString(36).slice(2),cn="__reactFiber$"+On,wn="__reactProps$"+On,ea="__reactContainer$"+On,Na="__reactEvents$"+On,Ml="__reactListeners$"+On,Js="__reactHandles$"+On,oo="__reactResources$"+On,Oa="__reactMarker$"+On;function lo(e){delete e[cn],delete e[wn],delete e[Na],delete e[Ml],delete e[Js]}function Pa(e){var i=e[cn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[ea]||a[cn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=t_(e);e!==null;){if(a=e[cn])return a;e=t_(e)}return i}e=a,a=e.parentNode}return null}function za(e){if(e=e[cn]||e[ea]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Ms(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Ia(e){var i=e[oo];return i||(i=e[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function dn(e){e[Oa]=!0}var El=new Set,A={};function j(e,i){it(e,i),it(e+"Capture",i)}function it(e,i){for(A[e]=i,e=0;e<i.length;e++)El.add(i[e])}var et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},It={};function Vt(e){return Cn.call(It,e)?!0:Cn.call(nt,e)?!1:et.test(e)?It[e]=!0:(nt[e]=!0,!1)}function Pt(e,i,a){if(Vt(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function kt(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Xt(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function Zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function jt(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ae(e){if(!e._valueTracker){var i=oe(e)?"checked":"value";e._valueTracker=jt(e,i,""+e[i])}}function $e(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function We(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function Oe(e){return e.replace(Ne,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Gt(e,i,a,o,u,h,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),i!=null?x==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Zt(i)):e.value!==""+Zt(i)&&(e.value=""+Zt(i)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),i!=null?_e(e,x,Zt(i)):a!=null?_e(e,x,Zt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Zt(R):e.removeAttribute("name")}function Pn(e,i,a,o,u,h,x,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Ae(e);return}a=a!=null?""+Zt(a):"",i=i!=null?""+Zt(i):a,R||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ae(e)}function _e(e,i,a){i==="number"&&We(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xn(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Zt(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function ei(e,i,a){if(i!=null&&(i=""+Zt(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Zt(a):""}function Ci(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(Z(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=Zt(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ae(e)}function ni(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Pe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||Pe.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function wi(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&tn(e,u,o)}else for(var h in i)i.hasOwnProperty(h)&&tn(e,h,i[h])}function Ue(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ba=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Es(e){return Ba.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var Lu=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,$s=null;function Wp(e){var i=za(e);if(i&&(e=i.stateNode)){var a=e[wn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Gt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Oe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[wn]||null;if(!u)throw Error(s(90));Gt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&$e(o)}break t;case"textarea":ei(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&xn(e,!!a.multiple,i,!1)}}}var Ou=!1;function qp(e,i,a){if(Ou)return e(i,a);Ou=!0;try{var o=e(i);return o}finally{if(Ou=!1,(Qs!==null||$s!==null)&&(uc(),Qs&&(i=Qs,e=$s,$s=Qs=null,Wp(i),e)))for(i=0;i<e.length;i++)Wp(e[i])}}function co(e,i){var a=e.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(ia)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Pu=!1}var Fa=null,zu=null,bl=null;function Yp(){if(bl)return bl;var e,i=zu,a=i.length,o,u="value"in Fa?Fa.value:Fa.textContent,h=u.length;for(e=0;e<a&&i[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&i[a-o]===u[h-o];o++);return bl=u.slice(e,1<o?1-o:void 0)}function Tl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Al(){return!0}function jp(){return!1}function Wn(e){function i(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Al:jp,this.isPropagationStopped=jp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),i}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Wn(bs),fo=v({},bs,{view:0,detail:0}),Bx=Wn(fo),Iu,Bu,ho,Cl=v({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Iu=e.screenX-ho.screenX,Bu=e.screenY-ho.screenY):Bu=Iu=0,ho=e),Iu)},movementY:function(e){return"movementY"in e?e.movementY:Bu}}),Zp=Wn(Cl),Fx=v({},Cl,{dataTransfer:0}),Hx=Wn(Fx),Gx=v({},fo,{relatedTarget:0}),Fu=Wn(Gx),Vx=v({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xx=Wn(Vx),kx=v({},bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wx=Wn(kx),qx=v({},bs,{data:0}),Kp=Wn(qx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Zx[e])?!!i[e]:!1}function Hu(){return Kx}var Jx=v({},fo,{key:function(e){if(e.key){var i=Yx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qx=Wn(Jx),$x=v({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Wn($x),ty=v({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),ey=Wn(ty),ny=v({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=Wn(ny),ay=v({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sy=Wn(ay),ry=v({},bs,{newState:0,oldState:0}),oy=Wn(ry),ly=[9,13,27,32],Gu=ia&&"CompositionEvent"in window,po=null;ia&&"documentMode"in document&&(po=document.documentMode);var cy=ia&&"TextEvent"in window&&!po,Qp=ia&&(!Gu||po&&8<po&&11>=po),$p=" ",tm=!1;function em(e,i){switch(e){case"keyup":return ly.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function uy(e,i){switch(e){case"compositionend":return nm(i);case"keypress":return i.which!==32?null:(tm=!0,$p);case"textInput":return e=i.data,e===$p&&tm?null:e;default:return null}}function fy(e,i){if(tr)return e==="compositionend"||!Gu&&em(e,i)?(e=Yp(),bl=zu=Fa=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qp&&i.locale!=="ko"?null:i.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!hy[e.type]:i==="textarea"}function am(e,i,a,o){Qs?$s?$s.push(o):$s=[o]:Qs=o,i=_c(i,"onChange"),0<i.length&&(a=new Rl("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var mo=null,go=null;function dy(e){Hg(e,0)}function wl(e){var i=Ms(e);if($e(i))return e}function sm(e,i){if(e==="change")return i}var rm=!1;if(ia){var Vu;if(ia){var Xu="oninput"in document;if(!Xu){var om=document.createElement("div");om.setAttribute("oninput","return;"),Xu=typeof om.oninput=="function"}Vu=Xu}else Vu=!1;rm=Vu&&(!document.documentMode||9<document.documentMode)}function lm(){mo&&(mo.detachEvent("onpropertychange",cm),go=mo=null)}function cm(e){if(e.propertyName==="value"&&wl(go)){var i=[];am(i,go,e,Nu(e)),qp(dy,i)}}function py(e,i,a){e==="focusin"?(lm(),mo=i,go=a,mo.attachEvent("onpropertychange",cm)):e==="focusout"&&lm()}function my(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(go)}function gy(e,i){if(e==="click")return wl(i)}function _y(e,i){if(e==="input"||e==="change")return wl(i)}function vy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ii=typeof Object.is=="function"?Object.is:vy;function _o(e,i){if(ii(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Cn.call(i,u)||!ii(e[u],i[u]))return!1}return!0}function um(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fm(e,i){var a=um(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=um(a)}}function hm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?hm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function dm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=We(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=We(e.document)}return i}function ku(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var xy=ia&&"documentMode"in document&&11>=document.documentMode,er=null,Wu=null,vo=null,qu=!1;function pm(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||er==null||er!==We(o)||(o=er,"selectionStart"in o&&ku(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&_o(vo,o)||(vo=o,o=_c(Wu,"onSelect"),0<o.length&&(i=new Rl("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=er)))}function Ts(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var nr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},Yu={},mm={};ia&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function As(e){if(Yu[e])return Yu[e];if(!nr[e])return e;var i=nr[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in mm)return Yu[e]=i[a];return e}var gm=As("animationend"),_m=As("animationiteration"),vm=As("animationstart"),yy=As("transitionrun"),Sy=As("transitionstart"),My=As("transitioncancel"),xm=As("transitionend"),ym=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function Di(e,i){ym.set(e,i),j(i,[e])}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vi=[],ir=0,Zu=0;function Ul(){for(var e=ir,i=Zu=ir=0;i<e;){var a=vi[i];vi[i++]=null;var o=vi[i];vi[i++]=null;var u=vi[i];vi[i++]=null;var h=vi[i];if(vi[i++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&Sm(a,u,h)}}function Ll(e,i,a,o){vi[ir++]=e,vi[ir++]=i,vi[ir++]=a,vi[ir++]=o,Zu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ku(e,i,a,o){return Ll(e,i,a,o),Nl(e)}function Rs(e,i){return Ll(e,null,null,i),Nl(e)}function Sm(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&i!==null&&(u=31-Ot(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=a|536870912),h):null}function Nl(e){if(50<Ho)throw Ho=0,rh=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ar={};function Ey(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,i,a,o){return new Ey(e,i,a,o)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,i){var a=e.alternate;return a===null?(a=ai(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mm(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ol(e,i,a,o,u,h){var x=0;if(o=e,typeof e=="function")Ju(e)&&(x=1);else if(typeof e=="string")x=CS(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ai(31,a,i,u),e.elementType=O,e.lanes=h,e;case w:return Cs(a.children,u,h,i);case M:x=8,u|=24;break;case S:return e=ai(12,a,i,u|2),e.elementType=S,e.lanes=h,e;case F:return e=ai(13,a,i,u),e.elementType=F,e.lanes=h,e;case N:return e=ai(19,a,i,u),e.elementType=N,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:x=10;break t;case C:x=9;break t;case U:x=11;break t;case I:x=14;break t;case b:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=ai(x,a,i,u),i.elementType=e,i.type=o,i.lanes=h,i}function Cs(e,i,a,o){return e=ai(7,e,o,i),e.lanes=a,e}function Qu(e,i,a){return e=ai(6,e,null,i),e.lanes=a,e}function Em(e){var i=ai(18,null,null,0);return i.stateNode=e,i}function $u(e,i,a){return i=ai(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var bm=new WeakMap;function xi(e,i){if(typeof e=="object"&&e!==null){var a=bm.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Ye(i)},bm.set(e,i),i)}return{value:e,source:i,stack:Ye(i)}}var sr=[],rr=0,Pl=null,xo=0,yi=[],Si=0,Ha=null,Fi=1,Hi="";function sa(e,i){sr[rr++]=xo,sr[rr++]=Pl,Pl=e,xo=i}function Tm(e,i,a){yi[Si++]=Fi,yi[Si++]=Hi,yi[Si++]=Ha,Ha=e;var o=Fi;e=Hi;var u=32-Ot(o)-1;o&=~(1<<u),a+=1;var h=32-Ot(i)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Fi=1<<32-Ot(i)+u|a<<u|o,Hi=h+e}else Fi=1<<h|a<<u|o,Hi=e}function tf(e){e.return!==null&&(sa(e,1),Tm(e,1,0))}function ef(e){for(;e===Pl;)Pl=sr[--rr],sr[rr]=null,xo=sr[--rr],sr[rr]=null;for(;e===Ha;)Ha=yi[--Si],yi[Si]=null,Hi=yi[--Si],yi[Si]=null,Fi=yi[--Si],yi[Si]=null}function Am(e,i){yi[Si++]=Fi,yi[Si++]=Hi,yi[Si++]=Ha,Fi=i.id,Hi=i.overflow,Ha=e}var Dn=null,Ze=null,Ee=!1,Ga=null,Mi=!1,nf=Error(s(519));function Va(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(xi(i,e)),nf}function Rm(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[cn]=e,i[wn]=o,a){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(a=0;a<Vo.length;a++)xe(Vo[a],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),Pn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),Ci(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||kg(i.textContent,a)?(o.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),o.onScroll!=null&&xe("scroll",i),o.onScrollEnd!=null&&xe("scrollend",i),o.onClick!=null&&(i.onclick=na),i=!0):i=!1,i||Va(e,!0)}function Cm(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Dn=Dn.return}}function or(e){if(e!==Dn)return!1;if(!Ee)return Cm(e),Ee=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Sh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Va(e),Cm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=$g(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=$g(e)}else i===27?(i=Ze,ns(e.type)?(e=Ah,Ah=null,Ze=e):Ze=i):Ze=Dn?bi(e.stateNode.nextSibling):null;return!0}function ws(){Ze=Dn=null,Ee=!1}function af(){var e=Ga;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Ga=null),e}function yo(e){Ga===null?Ga=[e]:Ga.push(e)}var sf=z(null),Ds=null,ra=null;function Xa(e,i,a){vt(sf,i._currentValue),i._currentValue=a}function oa(e){e._currentValue=sf.current,Q(sf)}function rf(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function of(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var B=0;B<i.length;B++)if(R.context===i[B]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),rf(h.return,a,e),o||(x=null);break t}h=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),rf(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function lr(e,i,a,o){e=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;ii(u.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(u===xt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Yo):e=[Yo])}u=u.return}e!==null&&of(i,e,a,o),i.flags|=262144}function zl(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ds=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return wm(Ds,e)}function Il(e,i){return Ds===null&&Us(e),wm(e,i)}function wm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(s(308));ra=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ra=ra.next=i;return a}var by=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},Ty=r.unstable_scheduleCallback,Ay=r.unstable_NormalPriority,pn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new by,data:new Map,refCount:0}}function So(e){e.refCount--,e.refCount===0&&Ty(Ay,function(){e.controller.abort()})}var Mo=null,cf=0,cr=0,ur=null;function Ry(e,i){if(Mo===null){var a=Mo=[];cf=0,cr=hh(),ur={status:"pending",value:void 0,then:function(o){a.push(o)}}}return cf++,i.then(Dm,Dm),i}function Dm(){if(--cf===0&&Mo!==null){ur!==null&&(ur.status="fulfilled");var e=Mo;Mo=null,cr=0,ur=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Cy(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Um=P.S;P.S=function(e,i){pg=At(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ry(e,i),Um!==null&&Um(e,i)};var Ls=z(null);function uf(){var e=Ls.current;return e!==null?e:qe.pooledCache}function Bl(e,i){i===null?vt(Ls,Ls.current):vt(Ls,i.pool)}function Lm(){var e=uf();return e===null?null:{parent:pn._currentValue,pool:e}}var fr=Error(s(460)),ff=Error(s(474)),Fl=Error(s(542)),Hl={then:function(){}};function Nm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Om(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(na,na),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,zm(e),e;default:if(typeof i.status=="string")i.then(na,na);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,zm(e),e}throw Os=i,fr}}function Ns(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,fr):a}}var Os=null;function Pm(){if(Os===null)throw Error(s(459));var e=Os;return Os=null,e}function zm(e){if(e===fr||e===Fl)throw Error(s(483))}var hr=null,Eo=0;function Gl(e){var i=Eo;return Eo+=1,hr===null&&(hr=[]),Om(hr,e,i)}function bo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Vl(e,i){throw i.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Im(e){function i(K,W){if(e){var $=K.deletions;$===null?(K.deletions=[W],K.flags|=16):$.push(W)}}function a(K,W){if(!e)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function o(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=aa(K,W),K.index=0,K.sibling=null,K}function h(K,W,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<W?(K.flags|=67108866,W):$):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,W,$,pt){return W===null||W.tag!==6?(W=Qu($,K.mode,pt),W.return=K,W):(W=u(W,$),W.return=K,W)}function B(K,W,$,pt){var Kt=$.type;return Kt===w?ht(K,W,$.props.children,pt,$.key):W!==null&&(W.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&Ns(Kt)===W.type)?(W=u(W,$.props),bo(W,$),W.return=K,W):(W=Ol($.type,$.key,$.props,null,K.mode,pt),bo(W,$),W.return=K,W)}function tt(K,W,$,pt){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=$u($,K.mode,pt),W.return=K,W):(W=u(W,$.children||[]),W.return=K,W)}function ht(K,W,$,pt,Kt){return W===null||W.tag!==7?(W=Cs($,K.mode,pt,Kt),W.return=K,W):(W=u(W,$),W.return=K,W)}function _t(K,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Qu(""+W,K.mode,$),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return $=Ol(W.type,W.key,W.props,null,K.mode,$),bo($,W),$.return=K,$;case T:return W=$u(W,K.mode,$),W.return=K,W;case b:return W=Ns(W),_t(K,W,$)}if(Z(W)||Y(W))return W=Cs(W,K.mode,$,null),W.return=K,W;if(typeof W.then=="function")return _t(K,Gl(W),$);if(W.$$typeof===D)return _t(K,Il(K,W),$);Vl(K,W)}return null}function at(K,W,$,pt){var Kt=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Kt!==null?null:R(K,W,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===Kt?B(K,W,$,pt):null;case T:return $.key===Kt?tt(K,W,$,pt):null;case b:return $=Ns($),at(K,W,$,pt)}if(Z($)||Y($))return Kt!==null?null:ht(K,W,$,pt,null);if(typeof $.then=="function")return at(K,W,Gl($),pt);if($.$$typeof===D)return at(K,W,Il(K,$),pt);Vl(K,$)}return null}function lt(K,W,$,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get($)||null,R(W,K,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return K=K.get(pt.key===null?$:pt.key)||null,B(W,K,pt,Kt);case T:return K=K.get(pt.key===null?$:pt.key)||null,tt(W,K,pt,Kt);case b:return pt=Ns(pt),lt(K,W,$,pt,Kt)}if(Z(pt)||Y(pt))return K=K.get($)||null,ht(W,K,pt,Kt,null);if(typeof pt.then=="function")return lt(K,W,$,Gl(pt),Kt);if(pt.$$typeof===D)return lt(K,W,$,Il(W,pt),Kt);Vl(W,pt)}return null}function Wt(K,W,$,pt){for(var Kt=null,Re=null,Yt=W,he=W=0,Me=null;Yt!==null&&he<$.length;he++){Yt.index>he?(Me=Yt,Yt=null):Me=Yt.sibling;var Ce=at(K,Yt,$[he],pt);if(Ce===null){Yt===null&&(Yt=Me);break}e&&Yt&&Ce.alternate===null&&i(K,Yt),W=h(Ce,W,he),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce,Yt=Me}if(he===$.length)return a(K,Yt),Ee&&sa(K,he),Kt;if(Yt===null){for(;he<$.length;he++)Yt=_t(K,$[he],pt),Yt!==null&&(W=h(Yt,W,he),Re===null?Kt=Yt:Re.sibling=Yt,Re=Yt);return Ee&&sa(K,he),Kt}for(Yt=o(Yt);he<$.length;he++)Me=lt(Yt,K,he,$[he],pt),Me!==null&&(e&&Me.alternate!==null&&Yt.delete(Me.key===null?he:Me.key),W=h(Me,W,he),Re===null?Kt=Me:Re.sibling=Me,Re=Me);return e&&Yt.forEach(function(os){return i(K,os)}),Ee&&sa(K,he),Kt}function $t(K,W,$,pt){if($==null)throw Error(s(151));for(var Kt=null,Re=null,Yt=W,he=W=0,Me=null,Ce=$.next();Yt!==null&&!Ce.done;he++,Ce=$.next()){Yt.index>he?(Me=Yt,Yt=null):Me=Yt.sibling;var os=at(K,Yt,Ce.value,pt);if(os===null){Yt===null&&(Yt=Me);break}e&&Yt&&os.alternate===null&&i(K,Yt),W=h(os,W,he),Re===null?Kt=os:Re.sibling=os,Re=os,Yt=Me}if(Ce.done)return a(K,Yt),Ee&&sa(K,he),Kt;if(Yt===null){for(;!Ce.done;he++,Ce=$.next())Ce=_t(K,Ce.value,pt),Ce!==null&&(W=h(Ce,W,he),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return Ee&&sa(K,he),Kt}for(Yt=o(Yt);!Ce.done;he++,Ce=$.next())Ce=lt(Yt,K,he,Ce.value,pt),Ce!==null&&(e&&Ce.alternate!==null&&Yt.delete(Ce.key===null?he:Ce.key),W=h(Ce,W,he),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return e&&Yt.forEach(function(FS){return i(K,FS)}),Ee&&sa(K,he),Kt}function Ve(K,W,$,pt){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:t:{for(var Kt=$.key;W!==null;){if(W.key===Kt){if(Kt=$.type,Kt===w){if(W.tag===7){a(K,W.sibling),pt=u(W,$.props.children),pt.return=K,K=pt;break t}}else if(W.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&Ns(Kt)===W.type){a(K,W.sibling),pt=u(W,$.props),bo(pt,$),pt.return=K,K=pt;break t}a(K,W);break}else i(K,W);W=W.sibling}$.type===w?(pt=Cs($.props.children,K.mode,pt,$.key),pt.return=K,K=pt):(pt=Ol($.type,$.key,$.props,null,K.mode,pt),bo(pt,$),pt.return=K,K=pt)}return x(K);case T:t:{for(Kt=$.key;W!==null;){if(W.key===Kt)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){a(K,W.sibling),pt=u(W,$.children||[]),pt.return=K,K=pt;break t}else{a(K,W);break}else i(K,W);W=W.sibling}pt=$u($,K.mode,pt),pt.return=K,K=pt}return x(K);case b:return $=Ns($),Ve(K,W,$,pt)}if(Z($))return Wt(K,W,$,pt);if(Y($)){if(Kt=Y($),typeof Kt!="function")throw Error(s(150));return $=Kt.call($),$t(K,W,$,pt)}if(typeof $.then=="function")return Ve(K,W,Gl($),pt);if($.$$typeof===D)return Ve(K,W,Il(K,$),pt);Vl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(a(K,W.sibling),pt=u(W,$),pt.return=K,K=pt):(a(K,W),pt=Qu($,K.mode,pt),pt.return=K,K=pt),x(K)):a(K,W)}return function(K,W,$,pt){try{Eo=0;var Kt=Ve(K,W,$,pt);return hr=null,Kt}catch(Yt){if(Yt===fr||Yt===Fl)throw Yt;var Re=ai(29,Yt,null,K.mode);return Re.lanes=pt,Re.return=K,Re}}}var Ps=Im(!0),Bm=Im(!1),ka=!1;function hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Nl(e),Sm(e,null,a),i}return Ll(e,o,i,a),Nl(e)}function To(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,_i(e,a)}}function pf(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=i:h=h.next=i}else u=h=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var mf=!1;function Ao(){if(mf){var e=ur;if(e!==null)throw e}}function Ro(e,i,a,o){mf=!1;var u=e.updateQueue;ka=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,tt=B.next;B.next=null,x===null?h=tt:x.next=tt,x=B;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,R=ht.lastBaseUpdate,R!==x&&(R===null?ht.firstBaseUpdate=tt:R.next=tt,ht.lastBaseUpdate=B))}if(h!==null){var _t=u.baseState;x=0,ht=tt=B=null,R=h;do{var at=R.lane&-536870913,lt=at!==R.lane;if(lt?(Se&at)===at:(o&at)===at){at!==0&&at===cr&&(mf=!0),ht!==null&&(ht=ht.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,$t=R;at=i;var Ve=a;switch($t.tag){case 1:if(Wt=$t.payload,typeof Wt=="function"){_t=Wt.call(Ve,_t,at);break t}_t=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=$t.payload,at=typeof Wt=="function"?Wt.call(Ve,_t,at):Wt,at==null)break t;_t=v({},_t,at);break t;case 2:ka=!0}}at=R.callback,at!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ht===null?(tt=ht=lt,B=_t):ht=ht.next=lt,x|=at;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,h===null&&(u.shared.lanes=0),Ja|=x,e.lanes=x,e.memoizedState=_t}}function Fm(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Hm(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fm(a[e],i)}var dr=z(null),Xl=z(0);function Gm(e,i){e=ga,vt(Xl,e),vt(dr,i),ga=e|i.baseLanes}function gf(){vt(Xl,ga),vt(dr,dr.current)}function _f(){ga=Xl.current,Q(dr),Q(Xl)}var si=z(null),Ei=null;function Ya(e){var i=e.alternate;vt(un,un.current&1),vt(si,e),Ei===null&&(i===null||dr.current!==null||i.memoizedState!==null)&&(Ei=e)}function vf(e){vt(un,un.current),vt(si,e),Ei===null&&(Ei=e)}function Vm(e){e.tag===22?(vt(un,un.current),vt(si,e),Ei===null&&(Ei=e)):ja()}function ja(){vt(un,un.current),vt(si,si.current)}function ri(e){Q(si),Ei===e&&(Ei=null),Q(un)}var un=z(0);function kl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||bh(a)||Th(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var la=0,le=null,He=null,mn=null,Wl=!1,pr=!1,zs=!1,ql=0,Co=0,mr=null,wy=0;function rn(){throw Error(s(321))}function xf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!ii(e[a],i[a]))return!1;return!0}function yf(e,i,a,o,u,h){return la=h,le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=e===null||e.memoizedState===null?T0:Pf,zs=!1,h=a(o,u),zs=!1,pr&&(h=km(i,a,o,u)),Xm(e),h}function Xm(e){P.H=Uo;var i=He!==null&&He.next!==null;if(la=0,mn=He=le=null,Wl=!1,Co=0,mr=null,i)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&zl(e)&&(gn=!0))}function km(e,i,a,o){le=e;var u=0;do{if(pr&&(mr=null),Co=0,pr=!1,25<=u)throw Error(s(301));if(u+=1,mn=He=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=A0,h=i(a,o)}while(pr);return h}function Dy(){var e=P.H,i=e.useState()[0];return i=typeof i.then=="function"?wo(i):i,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(le.flags|=1024),i}function Sf(){var e=ql!==0;return ql=0,e}function Mf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Ef(e){if(Wl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Wl=!1}la=0,mn=He=le=null,pr=!1,Co=ql=0,mr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?le.memoizedState=mn=e:mn=mn.next=e,mn}function fn(){if(He===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var i=mn===null?le.memoizedState:mn.next;if(i!==null)mn=i,He=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},mn===null?le.memoizedState=mn=e:mn=mn.next=e}return mn}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(e){var i=Co;return Co+=1,mr===null&&(mr=[]),e=Om(mr,e,i),i=le,(mn===null?i.memoizedState:mn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?T0:Pf),e}function jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wo(e);if(e.$$typeof===D)return Un(e)}throw Error(s(438,String(e)))}function bf(e){var i=null,a=le.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Yl(),le.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=k;return i.index++,a}function ca(e,i){return typeof i=="function"?i(e):i}function Zl(e){var i=fn();return Tf(i,He,e)}function Tf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}i.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{i=u.next;var R=x=null,B=null,tt=i,ht=!1;do{var _t=tt.lane&-536870913;if(_t!==tt.lane?(Se&_t)===_t:(la&_t)===_t){var at=tt.revertLane;if(at===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),_t===cr&&(ht=!0);else if((la&at)===at){tt=tt.next,at===cr&&(ht=!0);continue}else _t={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(R=B=_t,x=h):B=B.next=_t,le.lanes|=at,Ja|=at;_t=tt.action,zs&&a(h,_t),h=tt.hasEagerState?tt.eagerState:a(h,_t)}else at={lane:_t,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(R=B=at,x=h):B=B.next=at,le.lanes|=_t,Ja|=_t;tt=tt.next}while(tt!==null&&tt!==i);if(B===null?x=h:B.next=R,!ii(h,e.memoizedState)&&(gn=!0,ht&&(a=ur,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=B,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Af(e){var i=fn(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=i.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);ii(h,i.memoizedState)||(gn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,o]}function Wm(e,i,a){var o=le,u=fn(),h=Ee;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=i();var x=!ii((He||u).memoizedState,a);if(x&&(u.memoizedState=a,gn=!0),u=u.queue,wf(jm.bind(null,o,u,e),[e]),u.getSnapshot!==i||x||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,gr(9,{destroy:void 0},Ym.bind(null,o,u,a,i),null),qe===null)throw Error(s(349));h||(la&127)!==0||qm(o,i,a)}return a}function qm(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=le.updateQueue,i===null?(i=Yl(),le.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Ym(e,i,a,o){i.value=a,i.getSnapshot=o,Zm(i)&&Km(e)}function jm(e,i,a){return a(function(){Zm(i)&&Km(e)})}function Zm(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!ii(e,a)}catch{return!0}}function Km(e){var i=Rs(e,2);i!==null&&Kn(i,e,2)}function Rf(e){var i=Gn();if(typeof e=="function"){var a=e;if(e=a(),zs){Nt(!0);try{a()}finally{Nt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},i}function Jm(e,i,a,o){return e.baseState=a,Tf(e,He,typeof o=="function"?o:ca)}function Uy(e,i,a,o,u){if(Ql(e))throw Error(s(485));if(e=i.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=i.pending,a===null?(h.next=i.pending=h,Qm(i,h)):(h.next=a.next,i.pending=a.next=h)}}function Qm(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var h=P.T,x={};P.T=x;try{var R=a(u,o),B=P.S;B!==null&&B(x,R),$m(e,i,R)}catch(tt){Cf(e,i,tt)}finally{h!==null&&x.types!==null&&(h.types=x.types),P.T=h}}else try{h=a(u,o),$m(e,i,h)}catch(tt){Cf(e,i,tt)}}function $m(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){t0(e,i,o)},function(o){return Cf(e,i,o)}):t0(e,i,a)}function t0(e,i,a){i.status="fulfilled",i.value=a,e0(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Qm(e,a)))}function Cf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,e0(i),i=i.next;while(i!==o)}e.action=null}function e0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function n0(e,i){return i}function i0(e,i){if(Ee){var a=qe.formState;if(a!==null){t:{var o=le;if(Ee){if(Ze){e:{for(var u=Ze,h=Mi;u.nodeType!==8;){if(!h){u=null;break e}if(u=bi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ze=bi(u.nextSibling),o=u.data==="F!";break t}}Va(o)}o=!1}o&&(i=a[0])}}return a=Gn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n0,lastRenderedState:i},a.queue=o,a=M0.bind(null,le,o),o.dispatch=a,o=Rf(!1),h=Of.bind(null,le,!1,o.queue),o=Gn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=Uy.bind(null,le,u,h,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function a0(e){var i=fn();return s0(i,He,e)}function s0(e,i,a){if(i=Tf(e,i,n0)[0],e=Zl(ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=wo(i)}catch(x){throw x===fr?Fl:x}else o=i;i=fn();var u=i.queue,h=u.dispatch;return a!==i.memoizedState&&(le.flags|=2048,gr(9,{destroy:void 0},Ly.bind(null,u,a),null)),[o,h,e]}function Ly(e,i){e.action=i}function r0(e){var i=fn(),a=He;if(a!==null)return s0(i,a,e);fn(),i=i.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function gr(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=le.updateQueue,i===null&&(i=Yl(),le.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function o0(){return fn().memoizedState}function Kl(e,i,a,o){var u=Gn();le.flags|=e,u.memoizedState=gr(1|i,{destroy:void 0},a,o===void 0?null:o)}function Jl(e,i,a,o){var u=fn();o=o===void 0?null:o;var h=u.memoizedState.inst;He!==null&&o!==null&&xf(o,He.memoizedState.deps)?u.memoizedState=gr(i,h,a,o):(le.flags|=e,u.memoizedState=gr(1|i,h,a,o))}function l0(e,i){Kl(8390656,8,e,i)}function wf(e,i){Jl(2048,8,e,i)}function Ny(e){le.flags|=4;var i=le.updateQueue;if(i===null)i=Yl(),le.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function c0(e){var i=fn().memoizedState;return Ny({ref:i,nextImpl:e}),function(){if((De&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function u0(e,i){return Jl(4,2,e,i)}function f0(e,i){return Jl(4,4,e,i)}function h0(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function d0(e,i,a){a=a!=null?a.concat([e]):null,Jl(4,4,h0.bind(null,i,e),a)}function Df(){}function p0(e,i){var a=fn();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&xf(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function m0(e,i){var a=fn();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&xf(i,o[1]))return o[0];if(o=e(),zs){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,i],o}function Uf(e,i,a){return a===void 0||(la&1073741824)!==0&&(Se&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=gg(),le.lanes|=e,Ja|=e,a)}function g0(e,i,a,o){return ii(a,i)?a:dr.current!==null?(e=Uf(e,a,o),ii(e,i)||(gn=!0),e):(la&42)===0||(la&1073741824)!==0&&(Se&261930)===0?(gn=!0,e.memoizedState=a):(e=gg(),le.lanes|=e,Ja|=e,i)}function _0(e,i,a,o,u){var h=V.p;V.p=h!==0&&8>h?h:8;var x=P.T,R={};P.T=R,Of(e,!1,i,a);try{var B=u(),tt=P.S;if(tt!==null&&tt(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=Cy(B,o);Do(e,i,ht,ci(e))}else Do(e,i,o,ci(e))}catch(_t){Do(e,i,{then:function(){},status:"rejected",reason:_t},ci())}finally{V.p=h,x!==null&&R.types!==null&&(x.types=R.types),P.T=x}}function Oy(){}function Lf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var u=v0(e).queue;_0(e,u,i,rt,a===null?Oy:function(){return x0(e),a(o)})}function v0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:rt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function x0(e){var i=v0(e);i.next===null&&(i=e.alternate.memoizedState),Do(e,i.next.queue,{},ci())}function Nf(){return Un(Yo)}function y0(){return fn().memoizedState}function S0(){return fn().memoizedState}function Py(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=ci();e=Wa(a);var o=qa(i,e,a);o!==null&&(Kn(o,i,a),To(o,i,a)),i={cache:lf()},e.payload=i;return}i=i.return}}function zy(e,i,a){var o=ci();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ql(e)?E0(i,a):(a=Ku(e,i,a,o),a!==null&&(Kn(a,e,o),b0(a,i,o)))}function M0(e,i,a){var o=ci();Do(e,i,a,o)}function Do(e,i,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ql(e))E0(i,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var x=i.lastRenderedState,R=h(x,a);if(u.hasEagerState=!0,u.eagerState=R,ii(R,x))return Ll(e,i,u,0),qe===null&&Ul(),!1}catch{}if(a=Ku(e,i,u,o),a!==null)return Kn(a,e,o),b0(a,i,o),!0}return!1}function Of(e,i,a,o){if(o={lane:2,revertLane:hh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ql(e)){if(i)throw Error(s(479))}else i=Ku(e,a,o,2),i!==null&&Kn(i,e,2)}function Ql(e){var i=e.alternate;return e===le||i!==null&&i===le}function E0(e,i){pr=Wl=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function b0(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,_i(e,a)}}var Uo={readContext:Un,use:jl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Uo.useEffectEvent=rn;var T0={readContext:Un,use:jl,useCallback:function(e,i){return Gn().memoizedState=[e,i===void 0?null:i],e},useContext:Un,useEffect:l0,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Kl(4194308,4,h0.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Kl(4194308,4,e,i)},useInsertionEffect:function(e,i){Kl(4,2,e,i)},useMemo:function(e,i){var a=Gn();i=i===void 0?null:i;var o=e();if(zs){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Gn();if(a!==void 0){var u=a(i);if(zs){Nt(!0);try{a(i)}finally{Nt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=zy.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var i=Gn();return e={current:e},i.memoizedState=e},useState:function(e){e=Rf(e);var i=e.queue,a=M0.bind(null,le,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Df,useDeferredValue:function(e,i){var a=Gn();return Uf(a,e,i)},useTransition:function(){var e=Rf(!1);return e=_0.bind(null,le,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=le,u=Gn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),qe===null)throw Error(s(349));(Se&127)!==0||qm(o,i,a)}u.memoizedState=a;var h={value:a,getSnapshot:i};return u.queue=h,l0(jm.bind(null,o,h,e),[e]),o.flags|=2048,gr(9,{destroy:void 0},Ym.bind(null,o,h,a,i),null),a},useId:function(){var e=Gn(),i=qe.identifierPrefix;if(Ee){var a=Hi,o=Fi;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=ql++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=wy++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Nf,useFormState:i0,useActionState:i0,useOptimistic:function(e){var i=Gn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Of.bind(null,le,!0,a),a.dispatch=i,[e,i]},useMemoCache:bf,useCacheRefresh:function(){return Gn().memoizedState=Py.bind(null,le)},useEffectEvent:function(e){var i=Gn(),a={impl:e};return i.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Pf={readContext:Un,use:jl,useCallback:p0,useContext:Un,useEffect:wf,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:f0,useMemo:m0,useReducer:Zl,useRef:o0,useState:function(){return Zl(ca)},useDebugValue:Df,useDeferredValue:function(e,i){var a=fn();return g0(a,He.memoizedState,e,i)},useTransition:function(){var e=Zl(ca)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:wo(e),i]},useSyncExternalStore:Wm,useId:y0,useHostTransitionStatus:Nf,useFormState:a0,useActionState:a0,useOptimistic:function(e,i){var a=fn();return Jm(a,He,e,i)},useMemoCache:bf,useCacheRefresh:S0};Pf.useEffectEvent=c0;var A0={readContext:Un,use:jl,useCallback:p0,useContext:Un,useEffect:wf,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:f0,useMemo:m0,useReducer:Af,useRef:o0,useState:function(){return Af(ca)},useDebugValue:Df,useDeferredValue:function(e,i){var a=fn();return He===null?Uf(a,e,i):g0(a,He.memoizedState,e,i)},useTransition:function(){var e=Af(ca)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:wo(e),i]},useSyncExternalStore:Wm,useId:y0,useHostTransitionStatus:Nf,useFormState:r0,useActionState:r0,useOptimistic:function(e,i){var a=fn();return He!==null?Jm(a,He,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bf,useCacheRefresh:S0};A0.useEffectEvent=c0;function zf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:v({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var If={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=ci(),u=Wa(o);u.payload=i,a!=null&&(u.callback=a),i=qa(e,u,o),i!==null&&(Kn(i,e,o),To(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=ci(),u=Wa(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=qa(e,u,o),i!==null&&(Kn(i,e,o),To(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=ci(),o=Wa(a);o.tag=2,i!=null&&(o.callback=i),i=qa(e,o,a),i!==null&&(Kn(i,e,a),To(i,e,a))}};function R0(e,i,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):i.prototype&&i.prototype.isPureReactComponent?!_o(a,o)||!_o(u,h):!0}function C0(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&If.enqueueReplaceState(i,i.state,null)}function Is(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function w0(e){Dl(e)}function D0(e){console.error(e)}function U0(e){Dl(e)}function $l(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function L0(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Bf(e,i,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){$l(e,i)},a}function N0(e){return e=Wa(e),e.tag=3,e}function O0(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){L0(i,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){L0(i,a,o),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Iy(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&lr(i,a,u,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return Ei===null?fc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Hl?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),ch(e,o,u)),!1;case 22:return a.flags|=65536,o===Hl?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),ch(e,o,u)),!1}throw Error(s(435,a.tag))}return ch(e,o,u),fc(),!1}if(Ee)return i=si.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==nf&&(e=Error(s(422),{cause:o}),yo(xi(e,a)))):(o!==nf&&(i=Error(s(423),{cause:o}),yo(xi(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=xi(o,a),u=Bf(e.stateNode,o,u),pf(e,u),on!==4&&(on=2)),!1;var h=Error(s(520),{cause:o});if(h=xi(h,a),Fo===null?Fo=[h]:Fo.push(h),on!==4&&(on=2),i===null)return!0;o=xi(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Bf(a.stateNode,o,e),pf(a,e),!1;case 1:if(i=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qa===null||!Qa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=N0(u),O0(u,e,a,o),pf(a,u),!1}a=a.return}while(a!==null);return!1}var Ff=Error(s(461)),gn=!1;function Ln(e,i,a,o){i.child=e===null?Bm(i,null,a,o):Ps(i,e.child,a,o)}function P0(e,i,a,o,u){a=a.render;var h=i.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Us(i),o=yf(e,i,a,x,h,u),R=Sf(),e!==null&&!gn?(Mf(e,i,u),ua(e,i,u)):(Ee&&R&&tf(i),i.flags|=1,Ln(e,i,o,u),i.child)}function z0(e,i,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Ju(h)&&h.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=h,I0(e,i,h,o,u)):(e=Ol(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!Yf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:_o,a(x,o)&&e.ref===i.ref)return ua(e,i,u)}return i.flags|=1,e=aa(h,o),e.ref=i.ref,e.return=i,i.child=e}function I0(e,i,a,o,u){if(e!==null){var h=e.memoizedProps;if(_o(h,o)&&e.ref===i.ref)if(gn=!1,i.pendingProps=o=h,Yf(e,u))(e.flags&131072)!==0&&(gn=!0);else return i.lanes=e.lanes,ua(e,i,u)}return Hf(e,i,a,o,u)}function B0(e,i,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,i.child=null;return F0(e,i,h,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(i,h!==null?h.cachePool:null),h!==null?Gm(i,h):gf(),Vm(i);else return o=i.lanes=536870912,F0(e,i,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Bl(i,h.cachePool),Gm(i,h),ja(),i.memoizedState=null):(e!==null&&Bl(i,null),gf(),ja());return Ln(e,i,u,a),i.child}function Lo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function F0(e,i,a,o,u){var h=uf();return h=h===null?null:{parent:pn._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Bl(i,null),gf(),Vm(i),e!==null&&lr(e,i,o,!0),i.childLanes=u,null}function tc(e,i){return i=nc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function H0(e,i,a){return Ps(i,e.child,null,a),e=tc(i,i.pendingProps),e.flags|=2,ri(i),i.memoizedState=null,e}function By(e,i,a){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=tc(i,o),i.lanes=536870912,Lo(null,e);if(vf(i),(e=Ze)?(e=Qg(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Em(e),a.return=i,i.child=a,Dn=i,Ze=null)):e=null,e===null)throw Va(i);return i.lanes=536870912,null}return tc(i,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(vf(i),u)if(i.flags&256)i.flags&=-257,i=H0(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(gn||lr(e,i,a,!1),u=(a&e.childLanes)!==0,gn||u){if(o=qe,o!==null&&(x=ti(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,Rs(e,x),Kn(o,e,x),Ff;fc(),i=H0(e,i,a)}else e=h.treeContext,Ze=bi(x.nextSibling),Dn=i,Ee=!0,Ga=null,Mi=!1,e!==null&&Am(i,e),i=tc(i,o),i.flags|=4096;return i}return e=aa(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ec(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Hf(e,i,a,o,u){return Us(i),a=yf(e,i,a,o,void 0,u),o=Sf(),e!==null&&!gn?(Mf(e,i,u),ua(e,i,u)):(Ee&&o&&tf(i),i.flags|=1,Ln(e,i,a,u),i.child)}function G0(e,i,a,o,u,h){return Us(i),i.updateQueue=null,a=km(i,o,a,u),Xm(e),o=Sf(),e!==null&&!gn?(Mf(e,i,h),ua(e,i,h)):(Ee&&o&&tf(i),i.flags|=1,Ln(e,i,a,h),i.child)}function V0(e,i,a,o,u){if(Us(i),i.stateNode===null){var h=ar,x=a.contextType;typeof x=="object"&&x!==null&&(h=Un(x)),h=new a(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=If,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},hf(i),x=a.contextType,h.context=typeof x=="object"&&x!==null?Un(x):ar,h.state=i.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(zf(i,a,x,o),h.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&If.enqueueReplaceState(h,h.state,null),Ro(i,o,h,u),Ao(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){h=i.stateNode;var R=i.memoizedProps,B=Is(a,R);h.props=B;var tt=h.context,ht=a.contextType;x=ar,typeof ht=="object"&&ht!==null&&(x=Un(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||tt!==x)&&C0(i,h,o,x),ka=!1;var at=i.memoizedState;h.state=at,Ro(i,o,h,u),Ao(),tt=i.memoizedState,R||at!==tt||ka?(typeof _t=="function"&&(zf(i,a,_t,o),tt=i.memoizedState),(B=ka||R0(i,a,B,o,at,tt,x))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=tt),h.props=o,h.state=tt,h.context=x,o=B):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,df(e,i),x=i.memoizedProps,ht=Is(a,x),h.props=ht,_t=i.pendingProps,at=h.context,tt=a.contextType,B=ar,typeof tt=="object"&&tt!==null&&(B=Un(tt)),R=a.getDerivedStateFromProps,(tt=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==_t||at!==B)&&C0(i,h,o,B),ka=!1,at=i.memoizedState,h.state=at,Ro(i,o,h,u),Ao();var lt=i.memoizedState;x!==_t||at!==lt||ka||e!==null&&e.dependencies!==null&&zl(e.dependencies)?(typeof R=="function"&&(zf(i,a,R,o),lt=i.memoizedState),(ht=ka||R0(i,a,ht,o,at,lt,B)||e!==null&&e.dependencies!==null&&zl(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,B)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=lt),h.props=o,h.state=lt,h.context=B,o=ht):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),o=!1)}return h=o,ec(e,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&o?(i.child=Ps(i,e.child,null,u),i.child=Ps(i,null,a,u)):Ln(e,i,a,u),i.memoizedState=h.state,e=i.child):e=ua(e,i,u),e}function X0(e,i,a,o){return ws(),i.flags|=256,Ln(e,i,a,o),i.child}var Gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:Lm()}}function Xf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=li),e}function k0(e,i,a){var o=i.pendingProps,u=!1,h=(i.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),x&&(u=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ee){if(u?Ya(i):ja(),(e=Ze)?(e=Qg(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Em(e),a.return=i,i.child=a,Dn=i,Ze=null)):e=null,e===null)throw Va(i);return Th(e)?i.lanes=32:i.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ja(),u=i.mode,R=nc({mode:"hidden",children:R},u),o=Cs(o,u,a,null),R.return=i,o.return=i,R.sibling=o,i.child=R,o=i.child,o.memoizedState=Vf(a),o.childLanes=Xf(e,x,a),i.memoizedState=Gf,Lo(null,o)):(Ya(i),kf(i,R))}var B=e.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(h)i.flags&256?(Ya(i),i.flags&=-257,i=Wf(e,i,a)):i.memoizedState!==null?(ja(),i.child=e.child,i.flags|=128,i=null):(ja(),R=o.fallback,u=i.mode,o=nc({mode:"visible",children:o.children},u),R=Cs(R,u,a,null),R.flags|=2,o.return=i,R.return=i,o.sibling=R,i.child=o,Ps(i,e.child,null,a),o=i.child,o.memoizedState=Vf(a),o.childLanes=Xf(e,x,a),i.memoizedState=Gf,i=Lo(null,o));else if(Ya(i),Th(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var tt=x.dgst;x=tt,o=Error(s(419)),o.stack="",o.digest=x,yo({value:o,source:null,stack:null}),i=Wf(e,i,a)}else if(gn||lr(e,i,a,!1),x=(a&e.childLanes)!==0,gn||x){if(x=qe,x!==null&&(o=ti(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,Rs(e,o),Kn(x,e,o),Ff;bh(R)||fc(),i=Wf(e,i,a)}else bh(R)?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,Ze=bi(R.nextSibling),Dn=i,Ee=!0,Ga=null,Mi=!1,e!==null&&Am(i,e),i=kf(i,o.children),i.flags|=4096);return i}return u?(ja(),R=o.fallback,u=i.mode,B=e.child,tt=B.sibling,o=aa(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,tt!==null?R=aa(tt,R):(R=Cs(R,u,a,null),R.flags|=2),R.return=i,o.return=i,o.sibling=R,i.child=o,Lo(null,o),o=i.child,R=e.child.memoizedState,R===null?R=Vf(a):(u=R.cachePool,u!==null?(B=pn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Lm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Xf(e,x,a),i.memoizedState=Gf,Lo(e.child,o)):(Ya(i),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(x=i.deletions,x===null?(i.deletions=[e],i.flags|=16):x.push(e)),i.child=a,i.memoizedState=null,a)}function kf(e,i){return i=nc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function nc(e,i){return e=ai(22,e,null,i),e.lanes=0,e}function Wf(e,i,a){return Ps(i,e.child,null,a),e=kf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function W0(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),rf(e.return,i,a)}function qf(e,i,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function q0(e,i,a){var o=i.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=un.current,R=(x&2)!==0;if(R?(x=x&1|2,i.flags|=128):x&=1,vt(un,x),Ln(e,i,o,a),o=Ee?xo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&W0(e,a,i);else if(e.tag===19)W0(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&kl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),qf(i,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&kl(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}qf(i,!0,a,null,h,o);break;case"together":qf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function ua(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ja|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(lr(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=aa(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Yf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&zl(e)))}function Fy(e,i,a){switch(i.tag){case 3:Et(i,i.stateNode.containerInfo),Xa(i,pn,e.memoizedState.cache),ws();break;case 27:case 5:ee(i);break;case 4:Et(i,i.stateNode.containerInfo);break;case 10:Xa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,vf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ya(i),i.flags|=128,null):(a&i.child.childLanes)!==0?k0(e,i,a):(Ya(i),e=ua(e,i,a),e!==null?e.sibling:null);Ya(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(lr(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return q0(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(un,un.current),o)break;return null;case 22:return i.lanes=0,B0(e,i,a,i.pendingProps);case 24:Xa(i,pn,e.memoizedState.cache)}return ua(e,i,a)}function Y0(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)gn=!0;else{if(!Yf(e,a)&&(i.flags&128)===0)return gn=!1,Fy(e,i,a);gn=(e.flags&131072)!==0}else gn=!1,Ee&&(i.flags&1048576)!==0&&Tm(i,xo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Ns(i.elementType),i.type=e,typeof e=="function")Ju(e)?(o=Is(e,o),i.tag=1,i=V0(null,i,e,o,a)):(i.tag=0,i=Hf(null,i,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){i.tag=11,i=P0(null,i,e,o,a);break t}else if(u===I){i.tag=14,i=z0(null,i,e,o,a);break t}}throw i=ot(e)||e,Error(s(306,i,""))}}return i;case 0:return Hf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=Is(o,i.pendingProps),V0(e,i,o,u,a);case 3:t:{if(Et(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var h=i.memoizedState;u=h.element,df(e,i),Ro(i,o,null,a);var x=i.memoizedState;if(o=x.cache,Xa(i,pn,o),o!==h.cache&&of(i,[pn],a,!0),Ao(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=X0(e,i,o,a);break t}else if(o!==u){u=xi(Error(s(424)),i),yo(u),i=X0(e,i,o,a);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=bi(e.firstChild),Dn=i,Ee=!0,Ga=null,Mi=!0,a=Bm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),o===u){i=ua(e,i,a);break t}Ln(e,i,o,a)}i=i.child}return i;case 26:return ec(e,i),e===null?(a=a_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ee||(a=i.type,e=i.pendingProps,o=vc(st.current).createElement(a),o[cn]=i,o[wn]=e,Nn(o,a,e),dn(o),i.stateNode=o):i.memoizedState=a_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ee(i),e===null&&Ee&&(o=i.stateNode=e_(i.type,i.pendingProps,st.current),Dn=i,Mi=!0,u=Ze,ns(i.type)?(Ah=u,Ze=bi(o.firstChild)):Ze=u),Ln(e,i,i.pendingProps.children,a),ec(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ee&&((u=o=Ze)&&(o=mS(o,i.type,i.pendingProps,Mi),o!==null?(i.stateNode=o,Dn=i,Ze=bi(o.firstChild),Mi=!1,u=!0):u=!1),u||Va(i)),ee(i),u=i.type,h=i.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,Sh(u,h)?o=null:x!==null&&Sh(u,x)&&(i.flags|=32),i.memoizedState!==null&&(u=yf(e,i,Dy,null,null,a),Yo._currentValue=u),ec(e,i),Ln(e,i,o,a),i.child;case 6:return e===null&&Ee&&((e=a=Ze)&&(a=gS(a,i.pendingProps,Mi),a!==null?(i.stateNode=a,Dn=i,Ze=null,e=!0):e=!1),e||Va(i)),null;case 13:return k0(e,i,a);case 4:return Et(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ps(i,null,o,a):Ln(e,i,o,a),i.child;case 11:return P0(e,i,i.type,i.pendingProps,a);case 7:return Ln(e,i,i.pendingProps,a),i.child;case 8:return Ln(e,i,i.pendingProps.children,a),i.child;case 12:return Ln(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Xa(i,i.type,o.value),Ln(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Us(i),u=Un(u),o=o(u),i.flags|=1,Ln(e,i,o,a),i.child;case 14:return z0(e,i,i.type,i.pendingProps,a);case 15:return I0(e,i,i.type,i.pendingProps,a);case 19:return q0(e,i,a);case 31:return By(e,i,a);case 22:return B0(e,i,a,i.pendingProps);case 24:return Us(i),o=Un(pn),e===null?(u=uf(),u===null&&(u=qe,h=lf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),i.memoizedState={parent:o,cache:u},hf(i),Xa(i,pn,u)):((e.lanes&a)!==0&&(df(e,i),Ro(i,null,null,a),Ao()),u=e.memoizedState,h=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Xa(i,pn,o)):(o=h.cache,Xa(i,pn,o),o!==u.cache&&of(i,[pn],a,!0))),Ln(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function fa(e){e.flags|=4}function jf(e,i,a,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(yg())e.flags|=8192;else throw Os=Hl,ff}else e.flags&=-16777217}function j0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!c_(i))if(yg())e.flags|=8192;else throw Os=Hl,ff}function ic(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?yt():536870912,e.lanes|=i,yr|=i)}function No(e,i){if(!Ee)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function Hy(e,i,a){var o=i.pendingProps;switch(ef(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),oa(pn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(or(i)?fa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,af())),Ke(i),null;case 26:var u=i.type,h=i.memoizedState;return e===null?(fa(i),h!==null?(Ke(i),j0(i,h)):(Ke(i),jf(i,u,null,o,a))):h?h!==e.memoizedState?(fa(i),Ke(i),j0(i,h)):(Ke(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&fa(i),Ke(i),jf(i,u,e,o,a)),null;case 27:if(Jt(i),a=st.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&fa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Ke(i),null}e=Tt.current,or(i)?Rm(i):(e=e_(u,o,a),i.stateNode=e,fa(i))}return Ke(i),null;case 5:if(Jt(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&fa(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Ke(i),null}if(h=Tt.current,or(i))Rm(i);else{var x=vc(st.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[cn]=i,h[wn]=o;t:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break t;for(;x.sibling===null;){if(x.return===null||x.return===i)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=h;t:switch(Nn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&fa(i)}}return Ke(i),jf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&fa(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=st.current,or(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||kg(e.nodeValue,a)),e||Va(i,!0)}else e=vc(e).createTextNode(o),e[cn]=i,i.stateNode=e}return Ke(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=or(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),e=!1}else a=af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(ri(i),i):(ri(i),null);if((i.flags&128)!==0)throw Error(s(558))}return Ke(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=or(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),u=!1}else u=af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ri(i),i):(ri(i),null)}return ri(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),ic(i,i.updateQueue),Ke(i),null);case 4:return Ht(),e===null&&gh(i.stateNode.containerInfo),Ke(i),null;case 10:return oa(i.type),Ke(i),null;case 19:if(Q(un),o=i.memoizedState,o===null)return Ke(i),null;if(u=(i.flags&128)!==0,h=o.rendering,h===null)if(u)No(o,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=kl(e),h!==null){for(i.flags|=128,No(o,!1),e=h.updateQueue,i.updateQueue=e,ic(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Mm(a,e),a=a.sibling;return vt(un,un.current&1|2),Ee&&sa(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&At()>lc&&(i.flags|=128,u=!0,No(o,!1),i.lanes=4194304)}else{if(!u)if(e=kl(h),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,ic(i,e),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ee)return Ke(i),null}else 2*At()-o.renderingStartTime>lc&&a!==536870912&&(i.flags|=128,u=!0,No(o,!1),i.lanes=4194304);o.isBackwards?(h.sibling=i.child,i.child=h):(e=o.last,e!==null?e.sibling=h:i.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=At(),e.sibling=null,a=un.current,vt(un,u?a&1|2:a&1),Ee&&sa(i,o.treeForkCount),e):(Ke(i),null);case 22:case 23:return ri(i),_f(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),a=i.updateQueue,a!==null&&ic(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&Q(Ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),oa(pn),Ke(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Gy(e,i){switch(ef(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return oa(pn),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Jt(i),null;case 31:if(i.memoizedState!==null){if(ri(i),i.alternate===null)throw Error(s(340));ws()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ri(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ws()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Q(un),null;case 4:return Ht(),null;case 10:return oa(i.type),null;case 22:case 23:return ri(i),_f(),e!==null&&Q(Ls),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return oa(pn),null;case 25:return null;default:return null}}function Z0(e,i){switch(ef(i),i.tag){case 3:oa(pn),Ht();break;case 26:case 27:case 5:Jt(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&ri(i);break;case 13:ri(i);break;case 19:Q(un);break;case 10:oa(i.type);break;case 22:case 23:ri(i),_f(),e!==null&&Q(Ls);break;case 24:oa(pn)}}function Oo(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){Ie(i,i.return,R)}}function Za(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=i;var B=a,tt=R;try{tt()}catch(ht){Ie(u,B,ht)}}}o=o.next}while(o!==h)}}catch(ht){Ie(i,i.return,ht)}}function K0(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Hm(i,a)}catch(o){Ie(e,e.return,o)}}}function J0(e,i,a){a.props=Is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,i,o)}}function Po(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ie(e,i,u)}}function Gi(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ie(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(e,i,u)}else a.current=null}function Q0(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ie(e,e.return,u)}}function Zf(e,i,a){try{var o=e.stateNode;cS(o,e.type,a,i),o[wn]=i}catch(u){Ie(e,e.return,u)}}function $0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function Kf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=na));else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Jf(e,i,a),e=e.sibling;e!==null;)Jf(e,i,a),e=e.sibling}function ac(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ac(e,i,a),e=e.sibling;e!==null;)ac(e,i,a),e=e.sibling}function tg(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Nn(i,o,a),i[cn]=e,i[wn]=a}catch(h){Ie(e,e.return,h)}}var ha=!1,_n=!1,Qf=!1,eg=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function Vy(e,i){if(e=e.containerInfo,xh=Tc,e=dm(e),ku(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,R=-1,B=-1,tt=0,ht=0,_t=e,at=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(R=x+u),_t!==h||o!==0&&_t.nodeType!==3||(B=x+o),_t.nodeType===3&&(x+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)at=_t,_t=lt;for(;;){if(_t===e)break e;if(at===a&&++tt===u&&(R=x),at===h&&++ht===o&&(B=x),(lt=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=lt}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(yh={focusedElem:e,selectionRange:a},Tc=!1,Tn=i;Tn!==null;)if(i=Tn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Tn=e;else for(;Tn!==null;){switch(i=Tn,h=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=i,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Wt=Is(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ie(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Eh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Tn=e;break}Tn=i.return}}function ng(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),o&4&&Oo(5,a);break;case 1:if(pa(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(x){Ie(a,a.return,x)}else{var u=Is(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(a,a.return,x)}}o&64&&K0(a),o&512&&Po(a,a.return);break;case 3:if(pa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Hm(e,i)}catch(x){Ie(a,a.return,x)}}break;case 27:i===null&&o&4&&tg(a);case 26:case 5:pa(e,a),i===null&&o&4&&Q0(a),o&512&&Po(a,a.return);break;case 12:pa(e,a);break;case 31:pa(e,a),o&4&&sg(e,a);break;case 13:pa(e,a),o&4&&rg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Jy.bind(null,a),_S(e,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){i=i!==null&&i.memoizedState!==null||_n,u=ha;var h=_n;ha=o,(_n=i)&&!h?ma(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),ha=u,_n=h}break;case 30:break;default:pa(e,a)}}function ig(e){var i=e.alternate;i!==null&&(e.alternate=null,ig(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&lo(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,qn=!1;function da(e,i,a){for(a=a.child;a!==null;)ag(e,i,a),a=a.sibling}function ag(e,i,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:_n||Gi(a,i),da(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||Gi(a,i);var o=en,u=qn;ns(a.type)&&(en=a.stateNode,qn=!1),da(e,i,a),ko(a.stateNode),en=o,qn=u;break;case 5:_n||Gi(a,i);case 6:if(o=en,u=qn,en=null,da(e,i,a),en=o,qn=u,en!==null)if(qn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(h){Ie(a,i,h)}else try{en.removeChild(a.stateNode)}catch(h){Ie(a,i,h)}break;case 18:en!==null&&(qn?(e=en,Kg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cr(e)):Kg(en,a.stateNode));break;case 4:o=en,u=qn,en=a.stateNode.containerInfo,qn=!0,da(e,i,a),en=o,qn=u;break;case 0:case 11:case 14:case 15:Za(2,a,i),_n||Za(4,a,i),da(e,i,a);break;case 1:_n||(Gi(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&J0(a,i,o)),da(e,i,a);break;case 21:da(e,i,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,da(e,i,a),_n=o;break;default:da(e,i,a)}}function sg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cr(e)}catch(a){Ie(i,i.return,a)}}}function rg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cr(e)}catch(a){Ie(i,i.return,a)}}function Xy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new eg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new eg),i;default:throw Error(s(435,e.tag))}}function sc(e,i){var a=Xy(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var u=Qy.bind(null,e,o);o.then(u,u)}})}function Yn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=i,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(ns(R.type)){en=R.stateNode,qn=!1;break t}break;case 5:en=R.stateNode,qn=!1;break t;case 3:case 4:en=R.stateNode.containerInfo,qn=!0;break t}R=R.return}if(en===null)throw Error(s(160));ag(h,x,u),en=null,qn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)og(i,e),i=i.sibling}var Ui=null;function og(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(i,e),jn(e),o&4&&(Za(3,e,e.return),Oo(3,e),Za(5,e,e.return));break;case 1:Yn(i,e),jn(e),o&512&&(_n||a===null||Gi(a,a.return)),o&64&&ha&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ui;if(Yn(i,e),jn(e),o&512&&(_n||a===null||Gi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Oa]||h[cn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Nn(h,o,a),h[cn]=e,dn(h),o=h;break t;case"link":var x=o_("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(h=x[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}h=u.createElement(o),Nn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=o_("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(h=x[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}h=u.createElement(o),Nn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[cn]=e,dn(h),o=h}e.stateNode=o}else l_(u,e.type,e.stateNode);else e.stateNode=r_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?l_(u,e.type,e.stateNode):r_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(i,e),jn(e),o&512&&(_n||a===null||Gi(a,a.return)),a!==null&&o&4&&Zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(i,e),jn(e),o&512&&(_n||a===null||Gi(a,a.return)),e.flags&32){u=e.stateNode;try{ni(u,"")}catch(Wt){Ie(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Zf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Qf=!0);break;case 6:if(Yn(i,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){Ie(e,e.return,Wt)}}break;case 3:if(Sc=null,u=Ui,Ui=xc(i.containerInfo),Yn(i,e),Ui=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(i.containerInfo)}catch(Wt){Ie(e,e.return,Wt)}Qf&&(Qf=!1,lg(e));break;case 4:o=Ui,Ui=xc(e.stateNode.containerInfo),Yn(i,e),jn(e),Ui=o;break;case 12:Yn(i,e),jn(e);break;case 31:Yn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sc(e,o)));break;case 13:Yn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(oc=At()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sc(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=ha,ht=_n;if(ha=tt||u,_n=ht||B,Yn(i,e),_n=ht,ha=tt,jn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||B||ha||_n||Bs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){B=a=i;try{if(h=B.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=B.stateNode;var _t=B.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;R.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Wt){Ie(B,B.return,Wt)}}}else if(i.tag===6){if(a===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Wt){Ie(B,B.return,Wt)}}}else if(i.tag===18){if(a===null){B=i;try{var lt=B.stateNode;u?Jg(lt,!0):Jg(B.stateNode,!1)}catch(Wt){Ie(B,B.return,Wt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,sc(e,a))));break;case 19:Yn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sc(e,o)));break;case 30:break;case 21:break;default:Yn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if($0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Kf(e);ac(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(ni(x,""),a.flags&=-33);var R=Kf(e);ac(e,R,x);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=Kf(e);Jf(e,tt,B);break;default:throw Error(s(161))}}catch(ht){Ie(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function lg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;lg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function pa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ng(e,i.alternate,i),i=i.sibling}function Bs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Za(4,i,i.return),Bs(i);break;case 1:Gi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&J0(i,i.return,a),Bs(i);break;case 27:ko(i.stateNode);case 26:case 5:Gi(i,i.return),Bs(i);break;case 22:i.memoizedState===null&&Bs(i);break;case 30:Bs(i);break;default:Bs(i)}e=e.sibling}}function ma(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,h=i,x=h.flags;switch(h.tag){case 0:case 11:case 15:ma(u,h,a),Oo(4,h);break;case 1:if(ma(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ie(o,o.return,tt)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Fm(B[u],R)}catch(tt){Ie(o,o.return,tt)}}a&&x&64&&K0(h),Po(h,h.return);break;case 27:tg(h);case 26:case 5:ma(u,h,a),a&&o===null&&x&4&&Q0(h),Po(h,h.return);break;case 12:ma(u,h,a);break;case 31:ma(u,h,a),a&&x&4&&sg(u,h);break;case 13:ma(u,h,a),a&&x&4&&rg(u,h);break;case 22:h.memoizedState===null&&ma(u,h,a),Po(h,h.return);break;case 30:break;default:ma(u,h,a)}i=i.sibling}}function $f(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&So(a))}function th(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&So(e))}function Li(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)cg(e,i,a,o),i=i.sibling}function cg(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Li(e,i,a,o),u&2048&&Oo(9,i);break;case 1:Li(e,i,a,o);break;case 3:Li(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&So(e)));break;case 12:if(u&2048){Li(e,i,a,o),e=i.stateNode;try{var h=i.memoizedProps,x=h.id,R=h.onPostCommit;typeof R=="function"&&R(x,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ie(i,i.return,B)}}else Li(e,i,a,o);break;case 31:Li(e,i,a,o);break;case 13:Li(e,i,a,o);break;case 23:break;case 22:h=i.stateNode,x=i.alternate,i.memoizedState!==null?h._visibility&2?Li(e,i,a,o):zo(e,i):h._visibility&2?Li(e,i,a,o):(h._visibility|=2,_r(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&$f(x,i);break;case 24:Li(e,i,a,o),u&2048&&th(i.alternate,i);break;default:Li(e,i,a,o)}}function _r(e,i,a,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=e,x=i,R=a,B=o,tt=x.flags;switch(x.tag){case 0:case 11:case 15:_r(h,x,R,B,u),Oo(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?_r(h,x,R,B,u):zo(h,x):(ht._visibility|=2,_r(h,x,R,B,u)),u&&tt&2048&&$f(x.alternate,x);break;case 24:_r(h,x,R,B,u),u&&tt&2048&&th(x.alternate,x);break;default:_r(h,x,R,B,u)}i=i.sibling}}function zo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:zo(a,o),u&2048&&$f(o.alternate,o);break;case 24:zo(a,o),u&2048&&th(o.alternate,o);break;default:zo(a,o)}i=i.sibling}}var Io=8192;function vr(e,i,a){if(e.subtreeFlags&Io)for(e=e.child;e!==null;)ug(e,i,a),e=e.sibling}function ug(e,i,a){switch(e.tag){case 26:vr(e,i,a),e.flags&Io&&e.memoizedState!==null&&wS(a,Ui,e.memoizedState,e.memoizedProps);break;case 5:vr(e,i,a);break;case 3:case 4:var o=Ui;Ui=xc(e.stateNode.containerInfo),vr(e,i,a),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Io,Io=16777216,vr(e,i,a),Io=o):vr(e,i,a));break;default:vr(e,i,a)}}function fg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Bo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Tn=o,dg(o,e)}fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hg(e),e=e.sibling}function hg(e){switch(e.tag){case 0:case 11:case 15:Bo(e),e.flags&2048&&Za(9,e,e.return);break;case 3:Bo(e);break;case 12:Bo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,rc(e)):Bo(e);break;default:Bo(e)}}function rc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Tn=o,dg(o,e)}fg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Za(8,i,i.return),rc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,rc(i));break;default:rc(i)}e=e.sibling}}function dg(e,i){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Za(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else t:for(a=e;Tn!==null;){o=Tn;var u=o.sibling,h=o.return;if(ig(o),o===a){Tn=null;break t}if(u!==null){u.return=h,Tn=u;break t}Tn=h}}}var ky={getCacheForType:function(e){var i=Un(pn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return Un(pn).controller.signal}},Wy=typeof WeakMap=="function"?WeakMap:Map,De=0,qe=null,ve=null,Se=0,ze=0,oi=null,Ka=!1,xr=!1,eh=!1,ga=0,on=0,Ja=0,Fs=0,nh=0,li=0,yr=0,Fo=null,Zn=null,ih=!1,oc=0,pg=0,lc=1/0,cc=null,Qa=null,yn=0,$a=null,Sr=null,_a=0,ah=0,sh=null,mg=null,Ho=0,rh=null;function ci(){return(De&2)!==0&&Se!==0?Se&-Se:P.T!==null?hh():so()}function gg(){if(li===0)if((Se&536870912)===0||Ee){var e=ge;ge<<=1,(ge&3932160)===0&&(ge=262144),li=e}else li=536870912;return e=si.current,e!==null&&(e.flags|=32),li}function Kn(e,i,a){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Mr(e,0),ts(e,Se,li,!1)),ne(e,a),((De&2)===0||e!==qe)&&(e===qe&&((De&2)===0&&(Fs|=a),on===4&&ts(e,Se,li,!1)),Vi(e))}function _g(e,i,a){if((De&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Bt(e,i),u=o?jy(e,i):lh(e,i,!0),h=o;do{if(u===0){xr&&!o&&ts(e,i,0,!1);break}else{if(a=e.current.alternate,h&&!qy(a)){u=lh(e,i,!1),h=!1;continue}if(u===2){if(h=i,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;t:{var R=e;u=Fo;var B=R.current.memoizedState.isDehydrated;if(B&&(Mr(R,x).flags|=256),x=lh(R,x,!1),x!==2){if(eh&&!B){R.errorRecoveryDisabledLanes|=h,Fs|=h,u=4;break t}h=Zn,Zn=u,h!==null&&(Zn===null?Zn=h:Zn.push.apply(Zn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){Mr(e,0),ts(e,i,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:ts(o,i,li,!Ka);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=oc+300-At(),10<u)){if(ts(o,i,li,!Ka),dt(o,0,!0)!==0)break t;_a=i,o.timeoutHandle=jg(vg.bind(null,o,a,Zn,cc,ih,i,li,Fs,yr,Ka,h,"Throttled",-0,0),u);break t}vg(o,a,Zn,cc,ih,i,li,Fs,yr,Ka,h,null,-0,0)}}break}while(!0);Vi(e)}function vg(e,i,a,o,u,h,x,R,B,tt,ht,_t,at,lt){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},ug(i,h,_t);var Wt=(h&62914560)===h?oc-At():(h&4194048)===h?pg-At():0;if(Wt=DS(_t,Wt),Wt!==null){_a=h,e.cancelPendingCommit=Wt(Ag.bind(null,e,i,h,a,o,u,x,R,B,ht,_t,null,at,lt)),ts(e,h,x,!tt);return}}Ag(e,i,h,a,o,u,x,R,B)}function qy(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ii(h(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ts(e,i,a,o){i&=~nh,i&=~Fs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var h=31-Ot(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&we(e,a,i)}function uc(){return(De&6)===0?(Go(0),!1):!0}function oh(){if(ve!==null){if(ze===0)var e=ve.return;else e=ve,ra=Ds=null,Ef(e),hr=null,Eo=0,e=ve;for(;e!==null;)Z0(e.alternate,e),e=e.return;ve=null}}function Mr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),_a=0,oh(),qe=e,ve=a=aa(e.current,null),Se=i,ze=0,oi=null,Ka=!1,xr=Bt(e,i),eh=!1,yr=li=nh=Fs=Ja=on=0,Zn=Fo=null,ih=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Ot(o),h=1<<u;i|=e[u],o&=~h}return ga=i,Ul(),a}function xg(e,i){le=null,P.H=Uo,i===fr||i===Fl?(i=Pm(),ze=3):i===ff?(i=Pm(),ze=4):ze=i===Ff?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,oi=i,ve===null&&(on=1,$l(e,xi(i,e.current)))}function yg(){var e=si.current;return e===null?!0:(Se&4194048)===Se?Ei===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Ei:!1}function Sg(){var e=P.H;return P.H=Uo,e===null?Uo:e}function Mg(){var e=P.A;return P.A=ky,e}function fc(){on=4,Ka||(Se&4194048)!==Se&&si.current!==null||(xr=!0),(Ja&134217727)===0&&(Fs&134217727)===0||qe===null||ts(qe,Se,li,!1)}function lh(e,i,a){var o=De;De|=2;var u=Sg(),h=Mg();(qe!==e||Se!==i)&&(cc=null,Mr(e,i)),i=!1;var x=on;t:do try{if(ze!==0&&ve!==null){var R=ve,B=oi;switch(ze){case 8:oh(),x=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(i=!0);var tt=ze;if(ze=0,oi=null,Er(e,R,B,tt),a&&xr){x=0;break t}break;default:tt=ze,ze=0,oi=null,Er(e,R,B,tt)}}Yy(),x=on;break}catch(ht){xg(e,ht)}while(!0);return i&&e.shellSuspendCounter++,ra=Ds=null,De=o,P.H=u,P.A=h,ve===null&&(qe=null,Se=0,Ul()),x}function Yy(){for(;ve!==null;)Eg(ve)}function jy(e,i){var a=De;De|=2;var o=Sg(),u=Mg();qe!==e||Se!==i?(cc=null,lc=At()+500,Mr(e,i)):xr=Bt(e,i);t:do try{if(ze!==0&&ve!==null){i=ve;var h=oi;e:switch(ze){case 1:ze=0,oi=null,Er(e,i,h,1);break;case 2:case 9:if(Nm(h)){ze=0,oi=null,bg(i);break}i=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Vi(e)},h.then(i,i);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Nm(h)?(ze=0,oi=null,bg(i)):(ze=0,oi=null,Er(e,i,h,7));break;case 5:var x=null;switch(ve.tag){case 26:x=ve.memoizedState;case 5:case 27:var R=ve;if(x?c_(x):R.stateNode.complete){ze=0,oi=null;var B=R.sibling;if(B!==null)ve=B;else{var tt=R.return;tt!==null?(ve=tt,hc(tt)):ve=null}break e}}ze=0,oi=null,Er(e,i,h,5);break;case 6:ze=0,oi=null,Er(e,i,h,6);break;case 8:oh(),on=6;break t;default:throw Error(s(462))}}Zy();break}catch(ht){xg(e,ht)}while(!0);return ra=Ds=null,P.H=o,P.A=u,De=a,ve!==null?0:(qe=null,Se=0,Ul(),on)}function Zy(){for(;ve!==null&&!me();)Eg(ve)}function Eg(e){var i=Y0(e.alternate,e,ga);e.memoizedProps=e.pendingProps,i===null?hc(e):ve=i}function bg(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=G0(a,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=G0(a,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:Ef(i);default:Z0(a,i),i=ve=Mm(i,ga),i=Y0(a,i,ga)}e.memoizedProps=e.pendingProps,i===null?hc(e):ve=i}function Er(e,i,a,o){ra=Ds=null,Ef(i),hr=null,Eo=0;var u=i.return;try{if(Iy(e,u,i,a,Se)){on=1,$l(e,xi(a,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;on=1,$l(e,xi(a,e.current)),ve=null;return}i.flags&32768?(Ee||o===1?e=!0:xr||(Se&536870912)!==0?e=!1:(Ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Tg(i,e)):hc(i)}function hc(e){var i=e;do{if((i.flags&32768)!==0){Tg(i,Ka);return}e=i.return;var a=Hy(i.alternate,i,ga);if(a!==null){ve=a;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);on===0&&(on=5)}function Tg(e,i){do{var a=Gy(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);on=6,ve=null}function Ag(e,i,a,o,u,h,x,R,B){e.cancelPendingCommit=null;do dc();while(yn!==0);if((De&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(h=i.lanes|i.childLanes,h|=Zu,an(e,a,h,x,R,B),e===qe&&(ve=qe=null,Se=0),Sr=i,$a=e,_a=a,ah=h,sh=u,mg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$y(J,function(){return Ug(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=V.p,V.p=2,x=De,De|=4;try{Vy(e,i,a)}finally{De=x,V.p=u,P.T=o}}yn=1,Rg(),Cg(),wg()}}function Rg(){if(yn===1){yn=0;var e=$a,i=Sr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=V.p;V.p=2;var u=De;De|=4;try{og(i,e);var h=yh,x=dm(e.containerInfo),R=h.focusedElem,B=h.selectionRange;if(x!==R&&R&&R.ownerDocument&&hm(R.ownerDocument.documentElement,R)){if(B!==null&&ku(R)){var tt=B.start,ht=B.end;if(ht===void 0&&(ht=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(ht,R.value.length);else{var _t=R.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var lt=at.getSelection(),Wt=R.textContent.length,$t=Math.min(B.start,Wt),Ve=B.end===void 0?$t:Math.min(B.end,Wt);!lt.extend&&$t>Ve&&(x=Ve,Ve=$t,$t=x);var K=fm(R,$t),W=fm(R,Ve);if(K&&W&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==W.node||lt.focusOffset!==W.offset)){var $=_t.createRange();$.setStart(K.node,K.offset),lt.removeAllRanges(),$t>Ve?(lt.addRange($),lt.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),lt.addRange($))}}}}for(_t=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_t.length;R++){var pt=_t[R];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Tc=!!xh,yh=xh=null}finally{De=u,V.p=o,P.T=a}}e.current=i,yn=2}}function Cg(){if(yn===2){yn=0;var e=$a,i=Sr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=V.p;V.p=2;var u=De;De|=4;try{ng(e,i.alternate,i)}finally{De=u,V.p=o,P.T=a}}yn=3}}function wg(){if(yn===4||yn===3){yn=0,Fe();var e=$a,i=Sr,a=_a,o=mg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?yn=5:(yn=0,Sr=$a=null,Dg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Qa=null),ao(a),i=i.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ut,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=P.T,u=V.p,V.p=2,P.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];h(R.value,{componentStack:R.stack})}}finally{P.T=i,V.p=u}}(_a&3)!==0&&dc(),Vi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===rh?Ho++:(Ho=0,rh=e):Ho=0,Go(0)}}function Dg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,So(i)))}function dc(){return Rg(),Cg(),wg(),Ug()}function Ug(){if(yn!==5)return!1;var e=$a,i=ah;ah=0;var a=ao(_a),o=P.T,u=V.p;try{V.p=32>a?32:a,P.T=null,a=sh,sh=null;var h=$a,x=_a;if(yn=0,Sr=$a=null,_a=0,(De&6)!==0)throw Error(s(331));var R=De;if(De|=4,hg(h.current),cg(h,h.current,x,a),De=R,Go(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ut,h)}catch{}return!0}finally{V.p=u,P.T=o,Dg(e,i)}}function Lg(e,i,a){i=xi(a,i),i=Bf(e.stateNode,i,2),e=qa(e,i,2),e!==null&&(ne(e,2),Vi(e))}function Ie(e,i,a){if(e.tag===3)Lg(e,e,a);else for(;i!==null;){if(i.tag===3){Lg(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){e=xi(a,e),a=N0(2),o=qa(i,a,2),o!==null&&(O0(a,o,i,e),ne(o,2),Vi(o));break}}i=i.return}}function ch(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Wy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(eh=!0,u.add(a),e=Ky.bind(null,e,i,a),i.then(e,e))}function Ky(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Se&a)===a&&(on===4||on===3&&(Se&62914560)===Se&&300>At()-oc?(De&2)===0&&Mr(e,0):nh|=a,yr===Se&&(yr=0)),Vi(e)}function Ng(e,i){i===0&&(i=yt()),e=Rs(e,i),e!==null&&(ne(e,i),Vi(e))}function Jy(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Ng(e,a)}function Qy(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),Ng(e,a)}function $y(e,i){return q(e,i)}var pc=null,br=null,uh=!1,mc=!1,fh=!1,es=0;function Vi(e){e!==br&&e.next===null&&(br===null?pc=br=e:br=br.next=e),mc=!0,uh||(uh=!0,eS())}function Go(e,i){if(!fh&&mc){fh=!0;do for(var a=!1,o=pc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Ot(42|e)+1)-1,h&=u&~(x&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Ig(o,h))}else h=Se,h=dt(o,o===qe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Bt(o,h)||(a=!0,Ig(o,h));o=o.next}while(a);fh=!1}}function tS(){Og()}function Og(){mc=uh=!1;var e=0;es!==0&&fS()&&(e=es);for(var i=At(),a=null,o=pc;o!==null;){var u=o.next,h=Pg(o,i);h===0?(o.next=null,a===null?pc=u:a.next=u,u===null&&(br=a)):(a=o,(e!==0||(h&3)!==0)&&(mc=!0)),o=u}yn!==0&&yn!==5||Go(e),es!==0&&(es=0)}function Pg(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Ot(h),R=1<<x,B=u[x];B===-1?((R&a)===0||(R&o)!==0)&&(u[x]=Ut(R,i)):B<=i&&(e.expiredLanes|=R),h&=~R}if(i=qe,a=Se,a=dt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&nn(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&nn(o),ao(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=Mt;break;default:a=J}return o=zg.bind(null,e),a=q(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&nn(o),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,i){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dc()&&e.callbackNode!==a)return null;var o=Se;return o=dt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(_g(e,o,i),Pg(e,At()),e.callbackNode!=null&&e.callbackNode===a?zg.bind(null,e):null)}function Ig(e,i){if(dc())return null;_g(e,i,!0)}function eS(){dS(function(){(De&6)!==0?q(L,tS):Og()})}function hh(){if(es===0){var e=cr;e===0&&(e=ae,ae<<=1,(ae&261888)===0&&(ae=256)),es=e}return es}function Bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Es(""+e)}function Fg(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function nS(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var h=Bg((u[wn]||null).action),x=o.submitter;x&&(i=(i=x[wn]||null)?Bg(i.formAction):x.getAttribute("formAction"),i!==null&&(h=i,x=null));var R=new Rl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(es!==0){var B=x?Fg(u,x):new FormData(u);Lf(a,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(R.preventDefault(),B=x?Fg(u,x):new FormData(u),Lf(a,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var dh=0;dh<ju.length;dh++){var ph=ju[dh],iS=ph.toLowerCase(),aS=ph[0].toUpperCase()+ph.slice(1);Di(iS,"on"+aS)}Di(gm,"onAnimationEnd"),Di(_m,"onAnimationIteration"),Di(vm,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(yy,"onTransitionRun"),Di(Sy,"onTransitionStart"),Di(My,"onTransitionCancel"),Di(xm,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Hg(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(i)for(var x=o.length-1;0<=x;x--){var R=o[x],B=R.instance,tt=R.currentTarget;if(R=R.listener,B!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=tt;try{h(u)}catch(ht){Dl(ht)}u.currentTarget=null,h=B}else for(x=0;x<o.length;x++){if(R=o[x],B=R.instance,tt=R.currentTarget,R=R.listener,B!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=tt;try{h(u)}catch(ht){Dl(ht)}u.currentTarget=null,h=B}}}}function xe(e,i){var a=i[Na];a===void 0&&(a=i[Na]=new Set);var o=e+"__bubble";a.has(o)||(Gg(i,e,2,!1),a.add(o))}function mh(e,i,a){var o=0;i&&(o|=4),Gg(a,e,o,i)}var gc="_reactListening"+Math.random().toString(36).slice(2);function gh(e){if(!e[gc]){e[gc]=!0,El.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||mh(a,!1,e),mh(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[gc]||(i[gc]=!0,mh("selectionchange",!1,i))}}function Gg(e,i,a,o){switch(g_(i)){case 2:var u=NS;break;case 8:u=OS;break;default:u=Uh}a=u.bind(null,i,a,e),u=void 0,!Pu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function _h(e,i,a,o,u){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Pa(R),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=h=x;continue t}R=R.parentNode}}o=o.return}qp(function(){var tt=h,ht=Nu(a),_t=[];t:{var at=ym.get(e);if(at!==void 0){var lt=Rl,Wt=e;switch(e){case"keypress":if(Tl(a)===0)break t;case"keydown":case"keyup":lt=Qx;break;case"focusin":Wt="focus",lt=Fu;break;case"focusout":Wt="blur",lt=Fu;break;case"beforeblur":case"afterblur":lt=Fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=ey;break;case gm:case _m:case vm:lt=Xx;break;case xm:lt=iy;break;case"scroll":case"scrollend":lt=Bx;break;case"wheel":lt=sy;break;case"copy":case"cut":case"paste":lt=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Jp;break;case"toggle":case"beforetoggle":lt=oy}var $t=(i&4)!==0,Ve=!$t&&(e==="scroll"||e==="scrollend"),K=$t?at!==null?at+"Capture":null:at;$t=[];for(var W=tt,$;W!==null;){var pt=W;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||K===null||(pt=co(W,K),pt!=null&&$t.push(Xo(W,pt,$))),Ve)break;W=W.return}0<$t.length&&(at=new lt(at,Wt,null,a,ht),_t.push({event:at,listeners:$t}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",at&&a!==Lu&&(Wt=a.relatedTarget||a.fromElement)&&(Pa(Wt)||Wt[ea]))break t;if((lt||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=tt,Wt=Wt?Pa(Wt):null,Wt!==null&&(Ve=c(Wt),$t=Wt.tag,Wt!==Ve||$t!==5&&$t!==27&&$t!==6)&&(Wt=null)):(lt=null,Wt=tt),lt!==Wt)){if($t=Zp,pt="onMouseLeave",K="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&($t=Jp,pt="onPointerLeave",K="onPointerEnter",W="pointer"),Ve=lt==null?at:Ms(lt),$=Wt==null?at:Ms(Wt),at=new $t(pt,W+"leave",lt,a,ht),at.target=Ve,at.relatedTarget=$,pt=null,Pa(ht)===tt&&($t=new $t(K,W+"enter",Wt,a,ht),$t.target=$,$t.relatedTarget=Ve,pt=$t),Ve=pt,lt&&Wt)e:{for($t=rS,K=lt,W=Wt,$=0,pt=K;pt;pt=$t(pt))$++;pt=0;for(var Kt=W;Kt;Kt=$t(Kt))pt++;for(;0<$-pt;)K=$t(K),$--;for(;0<pt-$;)W=$t(W),pt--;for(;$--;){if(K===W||W!==null&&K===W.alternate){$t=K;break e}K=$t(K),W=$t(W)}$t=null}else $t=null;lt!==null&&Vg(_t,at,lt,$t,!1),Wt!==null&&Ve!==null&&Vg(_t,Ve,Wt,$t,!0)}}t:{if(at=tt?Ms(tt):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var Re=sm;else if(im(at))if(rm)Re=_y;else{Re=my;var Yt=py}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&Ue(tt.elementType)&&(Re=sm):Re=gy;if(Re&&(Re=Re(e,tt))){am(_t,Re,a,ht);break t}Yt&&Yt(e,at,tt),e==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&_e(at,"number",at.value)}switch(Yt=tt?Ms(tt):window,e){case"focusin":(im(Yt)||Yt.contentEditable==="true")&&(er=Yt,Wu=tt,vo=null);break;case"focusout":vo=Wu=er=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,pm(_t,a,ht);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":pm(_t,a,ht)}var he;if(Gu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else tr?em(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(Qp&&a.locale!=="ko"&&(tr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&tr&&(he=Yp()):(Fa=ht,zu="value"in Fa?Fa.value:Fa.textContent,tr=!0)),Yt=_c(tt,Me),0<Yt.length&&(Me=new Kp(Me,e,null,a,ht),_t.push({event:Me,listeners:Yt}),he?Me.data=he:(he=nm(a),he!==null&&(Me.data=he)))),(he=cy?uy(e,a):fy(e,a))&&(Me=_c(tt,"onBeforeInput"),0<Me.length&&(Yt=new Kp("onBeforeInput","beforeinput",null,a,ht),_t.push({event:Yt,listeners:Me}),Yt.data=he)),nS(_t,e,tt,a,ht)}Hg(_t,i)})}function Xo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function _c(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=co(e,a),u!=null&&o.unshift(Xo(e,u,h)),u=co(e,i),u!=null&&o.push(Xo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function rS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vg(e,i,a,o,u){for(var h=i._reactName,x=[];a!==null&&a!==o;){var R=a,B=R.alternate,tt=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||tt===null||(B=tt,u?(tt=co(a,h),tt!=null&&x.unshift(Xo(a,tt,B))):u||(tt=co(a,h),tt!=null&&x.push(Xo(a,tt,B)))),a=a.return}x.length!==0&&e.push({event:i,listeners:x})}var oS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Xg(e){return(typeof e=="string"?e:""+e).replace(oS,`
`).replace(lS,"")}function kg(e,i){return i=Xg(i),Xg(e)===i}function Ge(e,i,a,o,u,h){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||ni(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&ni(e,""+o);break;case"className":kt(e,"class",o);break;case"tabIndex":kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(e,a,o);break;case"style":wi(e,o,h);break;case"data":if(i!=="object"){kt(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Es(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(i!=="input"&&Ge(e,i,"name",u.name,u,null),Ge(e,i,"formEncType",u.formEncType,u,null),Ge(e,i,"formMethod",u.formMethod,u,null),Ge(e,i,"formTarget",u.formTarget,u,null)):(Ge(e,i,"encType",u.encType,u,null),Ge(e,i,"method",u.method,u,null),Ge(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Es(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=na);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Es(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Pt(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Pt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Pt(e,a,o))}}function vh(e,i,a,o,u,h){switch(a){case"style":wi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ni(e,o):(typeof o=="number"||typeof o=="bigint")&&ni(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),h=e[wn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(i,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Pt(e,a,o)}}}function Nn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ge(e,i,h,x,a,null)}}u&&Ge(e,i,"srcSet",a.srcSet,a,null),o&&Ge(e,i,"src",a.src,a,null);return;case"input":xe("invalid",e);var R=h=x=u=null,B=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":x=ht;break;case"checked":B=ht;break;case"defaultChecked":tt=ht;break;case"value":h=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,i));break;default:Ge(e,i,o,ht,a,null)}}Pn(e,h,R,B,tt,x,u,!1);return;case"select":xe("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Ge(e,i,u,R,a,null)}i=h,a=x,e.multiple=!!o,i!=null?xn(e,!!o,i,!1):a!=null&&xn(e,!!o,a,!0);return;case"textarea":xe("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ge(e,i,x,R,a,null)}Ci(e,o,u,h);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,i,B,o,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Vo.length;o++)xe(Vo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ge(e,i,tt,o,a,null)}return;default:if(Ue(i)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&vh(e,i,ht,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ge(e,i,R,o,a,null))}function cS(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,R=null,B=null,tt=null,ht=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=_t;default:o.hasOwnProperty(lt)||Ge(e,i,lt,null,o,_t)}}for(var at in o){var lt=o[at];if(_t=a[at],o.hasOwnProperty(at)&&(lt!=null||_t!=null))switch(at){case"type":h=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":ht=lt;break;case"value":x=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,i));break;default:lt!==_t&&Ge(e,i,at,lt,o,_t)}}Gt(e,x,R,B,tt,ht,h,u);return;case"select":lt=x=R=at=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":lt=B;default:o.hasOwnProperty(h)||Ge(e,i,h,null,o,B)}for(u in o)if(h=o[u],B=a[u],o.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":at=h;break;case"defaultValue":R=h;break;case"multiple":x=h;default:h!==B&&Ge(e,i,u,h,o,B)}i=R,a=x,o=lt,at!=null?xn(e,!!a,at,!1):!!o!=!!a&&(i!=null?xn(e,!!a,i,!0):xn(e,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ge(e,i,R,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":at=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ge(e,i,x,u,o,h)}ei(e,at,lt);return;case"option":for(var Wt in a)at=a[Wt],a.hasOwnProperty(Wt)&&at!=null&&!o.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Ge(e,i,Wt,null,o,at));for(B in o)at=o[B],lt=a[B],o.hasOwnProperty(B)&&at!==lt&&(at!=null||lt!=null)&&(B==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":Ge(e,i,B,at,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)at=a[$t],a.hasOwnProperty($t)&&at!=null&&!o.hasOwnProperty($t)&&Ge(e,i,$t,null,o,at);for(tt in o)if(at=o[tt],lt=a[tt],o.hasOwnProperty(tt)&&at!==lt&&(at!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,i));break;default:Ge(e,i,tt,at,o,lt)}return;default:if(Ue(i)){for(var Ve in a)at=a[Ve],a.hasOwnProperty(Ve)&&at!==void 0&&!o.hasOwnProperty(Ve)&&vh(e,i,Ve,void 0,o,at);for(ht in o)at=o[ht],lt=a[ht],!o.hasOwnProperty(ht)||at===lt||at===void 0&&lt===void 0||vh(e,i,ht,at,o,lt);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!o.hasOwnProperty(K)&&Ge(e,i,K,null,o,at);for(_t in o)at=o[_t],lt=a[_t],!o.hasOwnProperty(_t)||at===lt||at==null&&lt==null||Ge(e,i,_t,at,o,lt)}function Wg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,R=u.duration;if(h&&R&&Wg(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],tt=B.startTime;if(tt>R)break;var ht=B.transferSize,_t=B.initiatorType;ht&&Wg(_t)&&(B=B.responseEnd,x+=ht*(B<R?1:(R-tt)/(B-tt)))}if(--o,i+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,yh=null;function vc(e){return e.nodeType===9?e:e.ownerDocument}function qg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Sh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mh=null;function fS(){var e=window.event;return e&&e.type==="popstate"?e===Mh?!1:(Mh=e,!0):(Mh=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(e){return Zg.resolve(null).then(e).catch(pS)}:jg;function pS(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function Kg(e,i){var a=i,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Cr(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ko(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ko(a);for(var h=a.firstChild;h;){var x=h.nextSibling,R=h.nodeName;h[Oa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&ko(e.ownerDocument.body);a=u}while(a);Cr(i)}function Jg(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Eh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Eh(a),lo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mS(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Oa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function gS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function Qg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=bi(e.nextSibling),e===null))return null;return e}function bh(e){return e.data==="$?"||e.data==="$~"}function Th(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _S(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Ah=null;function $g(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return bi(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function t_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function e_(e,i,a){switch(i=vc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ko(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);lo(e)}var Ti=new Map,n_=new Set;function xc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=V.d;V.d={f:vS,r:xS,D:yS,C:SS,L:MS,m:ES,X:TS,S:bS,M:AS};function vS(){var e=va.f(),i=uc();return e||i}function xS(e){var i=za(e);i!==null&&i.tag===5&&i.type==="form"?x0(i):va.r(e)}var Tr=typeof document>"u"?null:document;function i_(e,i,a){var o=Tr;if(o&&typeof i=="string"&&i){var u=Oe(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),n_.has(u)||(n_.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Nn(i,"link",e),dn(i),o.head.appendChild(i)))}}function yS(e){va.D(e),i_("dns-prefetch",e,null)}function SS(e,i){va.C(e,i),i_("preconnect",e,i)}function MS(e,i,a){va.L(e,i,a);var o=Tr;if(o&&e&&i){var u='link[rel="preload"][as="'+Oe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Oe(a.imageSizes)+'"]')):u+='[href="'+Oe(e)+'"]';var h=u;switch(i){case"style":h=Ar(e);break;case"script":h=Rr(e)}Ti.has(h)||(e=v({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Ti.set(h,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Wo(h))||i==="script"&&o.querySelector(qo(h))||(i=o.createElement("link"),Nn(i,"link",e),dn(i),o.head.appendChild(i)))}}function ES(e,i){va.m(e,i);var a=Tr;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Oe(o)+'"][href="'+Oe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Rr(e)}if(!Ti.has(h)&&(e=v({rel:"modulepreload",href:e},i),Ti.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qo(h)))return}o=a.createElement("link"),Nn(o,"link",e),dn(o),a.head.appendChild(o)}}}function bS(e,i,a){va.S(e,i,a);var o=Tr;if(o&&e){var u=Ia(o).hoistableStyles,h=Ar(e);i=i||"default";var x=u.get(h);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Wo(h)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Ti.get(h))&&Rh(e,a);var B=x=o.createElement("link");dn(B),Nn(B,"link",e),B._p=new Promise(function(tt,ht){B.onload=tt,B.onerror=ht}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,yc(x,i,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(h,x)}}}function TS(e,i){va.X(e,i);var a=Tr;if(a&&e){var o=Ia(a).hoistableScripts,u=Rr(e),h=o.get(u);h||(h=a.querySelector(qo(u)),h||(e=v({src:e,async:!0},i),(i=Ti.get(u))&&Ch(e,i),h=a.createElement("script"),dn(h),Nn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function AS(e,i){va.M(e,i);var a=Tr;if(a&&e){var o=Ia(a).hoistableScripts,u=Rr(e),h=o.get(u);h||(h=a.querySelector(qo(u)),h||(e=v({src:e,async:!0,type:"module"},i),(i=Ti.get(u))&&Ch(e,i),h=a.createElement("script"),dn(h),Nn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function a_(e,i,a,o){var u=(u=st.current)?xc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ar(a.href),a=Ia(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ar(a.href);var h=Ia(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Wo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),Ti.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(e,a),h||RS(u,e,a,x.state))),i&&o===null)throw Error(s(528,""));return x}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Rr(a),a=Ia(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ar(e){return'href="'+Oe(e)+'"'}function Wo(e){return'link[rel="stylesheet"]['+e+"]"}function s_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function RS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Nn(i,"link",a),dn(i),e.head.appendChild(i))}function Rr(e){return'[src="'+Oe(e)+'"]'}function qo(e){return"script[async]"+e}function r_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Oe(a.href)+'"]');if(o)return i.instance=o,dn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),dn(o),Nn(o,"style",u),yc(o,a.precedence,e),i.instance=o;case"stylesheet":u=Ar(a.href);var h=e.querySelector(Wo(u));if(h)return i.state.loading|=4,i.instance=h,dn(h),h;o=s_(a),(u=Ti.get(u))&&Rh(o,u),h=(e.ownerDocument||e).createElement("link"),dn(h);var x=h;return x._p=new Promise(function(R,B){x.onload=R,x.onerror=B}),Nn(h,"link",o),i.state.loading|=4,yc(h,a.precedence,e),i.instance=h;case"script":return h=Rr(a.src),(u=e.querySelector(qo(h)))?(i.instance=u,dn(u),u):(o=a,(u=Ti.get(h))&&(o=v({},a),Ch(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),dn(u),Nn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,yc(o,a.precedence,e));return i.instance}function yc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===i)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Rh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ch(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Sc=null;function o_(e,i,a){if(Sc===null){var o=new Map,u=Sc=new Map;u.set(a,o)}else u=Sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Oa]||h[cn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(i)||"";x=e+x;var R=o.get(x);R?R.push(h):o.set(x,[h])}}return o}function l_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function CS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function c_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wS(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ar(o.href),h=i.querySelector(Wo(u));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Mc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=h,dn(h);return}h=i.ownerDocument||i,o=s_(o),(u=Ti.get(u))&&Rh(o,u),h=h.createElement("link"),dn(h);var x=h;x._p=new Promise(function(R,B){x.onload=R,x.onerror=B}),Nn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Mc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var wh=0;function DS(e,i){return e.stylesheets&&e.count===0&&bc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+i);0<e.imgBytes&&wh===0&&(wh=62500*uS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>wh?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function bc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,i.forEach(US,e),Ec=null,Mc.call(e))}function US(e,i){if(!(i.state.loading&4)){var a=Ec.get(e);if(a)var o=a.get(null);else{a=new Map,Ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=i.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=Mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Yo={$$typeof:D,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function LS(e,i,a,o,u,h,x,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function u_(e,i,a,o,u,h,x,R,B,tt,ht,_t){return e=new LS(e,i,a,x,B,tt,ht,_t,R),i=1,h===!0&&(i|=24),h=ai(3,null,null,i),e.current=h,h.stateNode=e,i=lf(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:i},hf(h),e}function f_(e){return e?(e=ar,e):ar}function h_(e,i,a,o,u,h){u=f_(u),o.context===null?o.context=u:o.pendingContext=u,o=Wa(i),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=qa(e,o,i),a!==null&&(Kn(a,e,i),To(a,e,i))}function d_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Dh(e,i){d_(e,i),(e=e.alternate)&&d_(e,i)}function p_(e){if(e.tag===13||e.tag===31){var i=Rs(e,67108864);i!==null&&Kn(i,e,67108864),Dh(e,67108864)}}function m_(e){if(e.tag===13||e.tag===31){var i=ci();i=Ss(i);var a=Rs(e,i);a!==null&&Kn(a,e,i),Dh(e,i)}}var Tc=!0;function NS(e,i,a,o){var u=P.T;P.T=null;var h=V.p;try{V.p=2,Uh(e,i,a,o)}finally{V.p=h,P.T=u}}function OS(e,i,a,o){var u=P.T;P.T=null;var h=V.p;try{V.p=8,Uh(e,i,a,o)}finally{V.p=h,P.T=u}}function Uh(e,i,a,o){if(Tc){var u=Lh(o);if(u===null)_h(e,i,o,Ac,a),__(e,o);else if(zS(u,e,i,a,o))o.stopPropagation();else if(__(e,o),i&4&&-1<PS.indexOf(e)){for(;u!==null;){var h=za(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=bt(h.pendingLanes);if(x!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var B=1<<31-Ot(x);R.entanglements[1]|=B,x&=~B}Vi(h),(De&6)===0&&(lc=At()+500,Go(0))}}break;case 31:case 13:R=Rs(h,2),R!==null&&Kn(R,h,2),uc(),Dh(h,2)}if(h=Lh(o),h===null&&_h(e,i,o,Ac,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else _h(e,i,o,null,a)}}function Lh(e){return e=Nu(e),Nh(e)}var Ac=null;function Nh(e){if(Ac=null,e=Pa(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=d(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ac=e,null}function g_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case L:return 2;case E:return 8;case J:case gt:return 32;case Mt:return 268435456;default:return 32}default:return 32}}var Oh=!1,is=null,as=null,ss=null,jo=new Map,Zo=new Map,rs=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,i){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(i.pointerId)}}function Ko(e,i,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},i!==null&&(i=za(i),i!==null&&p_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function zS(e,i,a,o,u){switch(i){case"focusin":return is=Ko(is,e,i,a,o,u),!0;case"dragenter":return as=Ko(as,e,i,a,o,u),!0;case"mouseover":return ss=Ko(ss,e,i,a,o,u),!0;case"pointerover":var h=u.pointerId;return jo.set(h,Ko(jo.get(h)||null,e,i,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Zo.set(h,Ko(Zo.get(h)||null,e,i,a,o,u)),!0}return!1}function v_(e){var i=Pa(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,ro(e.priority,function(){m_(a)});return}}else if(i===31){if(i=d(a),i!==null){e.blockedOn=i,ro(e.priority,function(){m_(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Lh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Lu=o,a.target.dispatchEvent(o),Lu=null}else return i=za(a),i!==null&&p_(i),e.blockedOn=a,!1;i.shift()}return!0}function x_(e,i,a){Rc(e)&&a.delete(i)}function IS(){Oh=!1,is!==null&&Rc(is)&&(is=null),as!==null&&Rc(as)&&(as=null),ss!==null&&Rc(ss)&&(ss=null),jo.forEach(x_),Zo.forEach(x_)}function Cc(e,i){e.blockedOn===i&&(e.blockedOn=null,Oh||(Oh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,IS)))}var wc=null;function y_(e){wc!==e&&(wc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wc===e&&(wc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Nh(o||a)===null)continue;break}var h=za(a);h!==null&&(e.splice(i,3),i-=3,Lf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(e){function i(B){return Cc(B,e)}is!==null&&Cc(is,e),as!==null&&Cc(as,e),ss!==null&&Cc(ss,e),jo.forEach(i),Zo.forEach(i);for(var a=0;a<rs.length;a++){var o=rs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)v_(a),a.blockedOn===null&&rs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[wn]||null;if(typeof h=="function")x||y_(a);else if(x){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[wn]||null)R=x.formAction;else if(Nh(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),y_(a)}}}function S_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Ph(e){this._internalRoot=e}Dc.prototype.render=Ph.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=ci();h_(a,o,e,i,null,null)},Dc.prototype.unmount=Ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;h_(e.current,2,null,e,null,null),uc(),i[ea]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var i=so();e={blockedOn:null,target:e,priority:i};for(var a=0;a<rs.length&&i!==0&&i<rs[a].priority;a++);rs.splice(a,0,e),a===0&&v_(e)}};var M_=t.version;if(M_!=="19.2.6")throw Error(s(527,M_,"19.2.6"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var BS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{ut=Uc.inject(BS),ft=Uc}catch{}}return Qo.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",u=w0,h=D0,x=U0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=u_(e,1,!1,null,null,a,o,null,u,h,x,S_),e[ea]=i.current,gh(e),new Ph(i)},Qo.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=w0,x=D0,R=U0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),i=u_(e,1,!0,i,a??null,o,u,B,h,x,R,S_),i.context=f_(null),a=i.current,o=ci(),o=Ss(o),u=Wa(o),u.callback=null,qa(a,u,o),a=o,i.current.lanes=a,ne(i,a),Vi(i),e[ea]=i.current,gh(e),new Dc(i)},Qo.version="19.2.6",Qo}var L_;function KS(){if(L_)return Bh.exports;L_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Bh.exports=ZS(),Bh.exports}var JS=KS();const S3=Wv(JS);const yp="184",Zr={ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},QS=0,N_=1,$S=2,M3=0,ou=1,tM=2,cl=3,_s=0,Qn=1,ba=2,Ra=0,Kr=1,O_=2,P_=3,z_=4,eM=5,E3=6,ks=100,nM=101,iM=102,aM=103,sM=104,rM=200,oM=201,lM=202,cM=203,Rd=204,Cd=205,uM=206,fM=207,hM=208,dM=209,pM=210,mM=211,gM=212,_M=213,vM=214,wd=0,Dd=1,Ud=2,Qr=3,Ld=4,Nd=5,Od=6,Pd=7,bu=0,xM=1,yM=2,Zi=0,Yv=1,jv=2,Zv=3,Kv=4,Jv=5,Qv=6,$v=7,tx=300,js=301,$r=302,lu=303,Vh=304,Tu=306,zd=1e3,Aa=1001,Id=1002,Mn=1003,SM=1004,Lc=1005,Fn=1006,Xh=1007,qs=1008,mi=1009,ex=1010,nx=1011,gl=1012,Sp=1013,Ji=1014,ji=1015,Da=1016,Mp=1017,Ep=1018,_l=1020,ix=35902,ax=35899,sx=1021,rx=1022,zi=1023,Ua=1026,Ys=1027,ox=1028,bp=1029,Zs=1030,Tp=1031,b3=1032,Ap=1033,cu=33776,uu=33777,fu=33778,hu=33779,Bd=35840,Fd=35841,Hd=35842,Gd=35843,Vd=36196,Xd=37492,kd=37496,Wd=37488,qd=37489,pu=37490,Yd=37491,jd=37808,Zd=37809,Kd=37810,Jd=37811,Qd=37812,$d=37813,tp=37814,ep=37815,np=37816,ip=37817,ap=37818,sp=37819,rp=37820,op=37821,lp=36492,cp=36494,up=36495,fp=36283,hp=36284,mu=36285,dp=36286,MM=3200,vs=0,EM=1,ms="",di="srgb",gu="srgb-linear",_u="linear",Be="srgb",T3="",A3="rg",R3="ga",C3=0,wr=7680,w3=7681,D3=7682,U3=7683,L3=34055,N3=34056,O3=5386,P3=512,z3=513,I3=514,B3=515,F3=516,H3=517,G3=518,I_=519,bM=512,TM=513,AM=514,Rp=515,RM=516,CM=517,Cp=518,wM=519,pp=35044,V3=35048,B_="300 es",Ii=2e3,vl=2001,X3={COMPUTE:"compute",RENDER:"render"},k3={TEXTURE_COMPARE:"depthTextureCompare"};function DM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function W3(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function UM(){const r=xl("canvas");return r.style.display="block",r}const F_={};function vu(...r){const t="THREE."+r.shift();console.log(t,...r)}function lx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Qt(...r){r=lx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function be(...r){r=lx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function mp(...r){const t=r.join(" ");t in F_||(F_[t]=!0,Qt(...r))}function q3(){return typeof self<"u"&&typeof self.scheduler<"u"&&typeof self.scheduler.yield<"u"?self.scheduler.yield():new Promise(r=>{requestAnimationFrame(r)})}function LM(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const NM={[wd]:Dd,[Ud]:Od,[Ld]:Pd,[Qr]:Nd,[Dd]:wd,[Od]:Ud,[Pd]:Ld,[Nd]:Qr};class ys{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let H_=1234567;const hl=Math.PI/180,to=180/Math.PI;function Ca(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function ue(r,t,n){return Math.max(t,Math.min(n,r))}function wp(r,t){return(r%t+t)%t}function OM(r,t,n,s,l){return s+(r-t)*(l-s)/(n-t)}function PM(r,t,n){return r!==t?(n-r)/(t-r):0}function dl(r,t,n){return(1-n)*r+n*t}function zM(r,t,n,s){return dl(r,t,1-Math.exp(-n*s))}function IM(r,t=1){return t-Math.abs(wp(r,t*2)-t)}function BM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function FM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function HM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function GM(r,t){return r+Math.random()*(t-r)}function VM(r){return r*(.5-Math.random())}function XM(r){r!==void 0&&(H_=r);let t=H_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kM(r){return r*hl}function WM(r){return r*to}function qM(r){return(r&r-1)===0&&r!==0}function YM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ZM(r,t,n,s,l){const c=Math.cos,f=Math.sin,d=c(n/2),p=f(n/2),m=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),y=c((s-t)/2),T=f((s-t)/2);switch(l){case"XYX":r.set(d*_,p*v,p*g,d*m);break;case"YZY":r.set(p*g,d*_,p*v,d*m);break;case"ZXZ":r.set(p*v,p*g,d*_,d*m);break;case"XZX":r.set(d*_,p*T,p*y,d*m);break;case"YXY":r.set(p*y,d*_,p*T,d*m);break;case"ZYZ":r.set(p*T,p*y,d*_,d*m);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ce(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const KM={DEG2RAD:hl,RAD2DEG:to,generateUUID:Ca,clamp:ue,euclideanModulo:wp,mapLinear:OM,inverseLerp:PM,lerp:dl,damp:zM,pingpong:IM,smoothstep:BM,smootherstep:FM,randInt:HM,randFloat:GM,randFloatSpread:VM,seededRandom:XM,degToRad:kM,radToDeg:WM,isPowerOfTwo:qM,ceilPowerOfTwo:YM,floorPowerOfTwo:jM,setQuaternionFromProperEuler:ZM,normalize:ce,denormalize:kn},Hp=class Hp{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ue(this.x,t.x,n.x),this.y=ue(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ue(this.x,t,n),this.y=ue(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ue(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hp.prototype.isVector2=!0;let zt=Hp;class xs{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,f,d){let p=s[l+0],m=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],y=c[f+1],T=c[f+2],w=c[f+3];if(v!==w||p!==g||m!==y||_!==T){let M=p*g+m*y+_*T+v*w;M<0&&(g=-g,y=-y,T=-T,w=-w,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),D=Math.sin(C);S=Math.sin(S*C)/D,d=Math.sin(d*C)/D,p=p*S+g*d,m=m*S+y*d,_=_*S+T*d,v=v*S+w*d}else{p=p*S+g*d,m=m*S+y*d,_=_*S+T*d,v=v*S+w*d;const C=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=C,m*=C,_*=C,v*=C}}t[n]=p,t[n+1]=m,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],v=c[f],g=c[f+1],y=c[f+2],T=c[f+3];return t[n]=d*T+_*v+p*y-m*g,t[n+1]=p*T+_*g+m*v-d*y,t[n+2]=m*T+_*y+d*g-p*v,t[n+3]=_*T-d*v-p*g-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),v=d(c/2),g=p(s/2),y=p(l/2),T=p(c/2);switch(f){case"XYZ":this._x=g*_*v+m*y*T,this._y=m*y*v-g*_*T,this._z=m*_*T+g*y*v,this._w=m*_*v-g*y*T;break;case"YXZ":this._x=g*_*v+m*y*T,this._y=m*y*v-g*_*T,this._z=m*_*T-g*y*v,this._w=m*_*v+g*y*T;break;case"ZXY":this._x=g*_*v-m*y*T,this._y=m*y*v+g*_*T,this._z=m*_*T+g*y*v,this._w=m*_*v-g*y*T;break;case"ZYX":this._x=g*_*v-m*y*T,this._y=m*y*v+g*_*T,this._z=m*_*T-g*y*v,this._w=m*_*v+g*y*T;break;case"YZX":this._x=g*_*v+m*y*T,this._y=m*y*v+g*_*T,this._z=m*_*T-g*y*v,this._w=m*_*v-g*y*T;break;case"XZY":this._x=g*_*v-m*y*T,this._y=m*y*v-g*_*T,this._z=m*_*T+g*y*v,this._w=m*_*v+g*y*T;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],g=s+d+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-m)*y,this._z=(f-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(f-l)/y,this._x=(c+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,f=t._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=s*_+f*d+l*m-c*p,this._y=l*_+f*p+c*d-s*m,this._z=c*_+f*m+s*p-l*d,this._w=f*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,n){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);p=Math.sin(p*m)/_,n=Math.sin(n*m)/_,this._x=this._x*p+s*n,this._y=this._y*p+l*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this._onChangeCallback()}else this._x=this._x*p+s*n,this._y=this._y*p+l*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gp=class Gp{constructor(t=0,n=0,s=0){this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(G_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(G_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),_=2*(d*n-c*l),v=2*(c*s-f*n);return this.x=n+p*m+f*v-d*_,this.y=s+p*_+d*m-c*v,this.z=l+p*v+c*_-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ue(this.x,t.x,n.x),this.y=ue(this.y,t.y,n.y),this.z=ue(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ue(this.x,t,n),this.y=ue(this.y,t,n),this.z=ue(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ue(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,f=n.x,d=n.y,p=n.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return kh.copy(this).projectOnVector(t),this.sub(kh)}reflect(t){return this.sub(kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gp.prototype.isVector3=!0;let G=Gp;const kh=new G,G_=new xs,Vp=class Vp{constructor(t,n,s,l,c,f,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,d,p,m)}set(t,n,s,l,c,f,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=n,_[4]=c,_[5]=p,_[6]=s,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],_=s[4],v=s[7],g=s[2],y=s[5],T=s[8],w=l[0],M=l[3],S=l[6],C=l[1],D=l[4],U=l[7],F=l[2],N=l[5],I=l[8];return c[0]=f*w+d*C+p*F,c[3]=f*M+d*D+p*N,c[6]=f*S+d*U+p*I,c[1]=m*w+_*C+v*F,c[4]=m*M+_*D+v*N,c[7]=m*S+_*U+v*I,c[2]=g*w+y*C+T*F,c[5]=g*M+y*D+T*N,c[8]=g*S+y*U+T*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return n*f*_-n*d*m-s*c*_+s*d*p+l*c*m-l*f*p}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=_*f-d*m,g=d*p-_*c,y=m*c-f*p,T=n*v+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=v*w,t[1]=(l*m-_*s)*w,t[2]=(d*s-l*f)*w,t[3]=g*w,t[4]=(_*n-l*p)*w,t[5]=(l*c-d*n)*w,t[6]=y*w,t[7]=(s*p-m*n)*w,t[8]=(f*n-s*c)*w,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(Wh.makeScale(t,n)),this}rotate(t){return this.premultiply(Wh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Wh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vp.prototype.isMatrix3=!0;let re=Vp;const Wh=new re,V_=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const r={enabled:!0,workingColorSpace:gu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Be&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Be&&(l.r=Jr(l.r),l.g=Jr(l.g),l.b=Jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?_u:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return mp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return mp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[gu]:{primaries:t,whitePoint:s,transfer:_u,toXYZ:V_,fromXYZ:X_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:V_,fromXYZ:X_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),r}const Te=JM();function wa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class QM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Dr===void 0&&(Dr=xl("canvas")),Dr.width=t.width,Dr.height=t.height;const l=Dr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Dr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=xl("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=wa(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(wa(n[s]/255)*255):n[s]=wa(n[s]);return{data:n,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $M=0;class Dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Ca(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(qh(l[f].image)):c.push(qh(l[f]))}else c=qh(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?QM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}let tE=0;const Yh=new G;class Rn extends ys{constructor(t=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,s=Aa,l=Aa,c=Fn,f=qs,d=zi,p=mi,m=Rn.DEFAULT_ANISOTROPY,_=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Ca(),this.name="",this.source=new Dp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yh).x}get height(){return this.source.getSize(Yh).y}get depth(){return this.source.getSize(Yh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){Qt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){Qt(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zd:t.x=t.x-Math.floor(t.x);break;case Aa:t.x=t.x<0?0:1;break;case Id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zd:t.y=t.y-Math.floor(t.y);break;case Aa:t.y=t.y<0?0:1;break;case Id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=tx;Rn.DEFAULT_ANISOTROPY=1;const Xp=class Xp{constructor(t=0,n=0,s=0,l=1){this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const p=t.elements,m=p[0],_=p[4],v=p[8],g=p[1],y=p[5],T=p[9],w=p[2],M=p[6],S=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(T+M)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,U=(y+1)/2,F=(S+1)/2,N=(_+g)/4,I=(v+w)/4,b=(T+M)/4;return D>U&&D>F?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=N/s,c=I/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=N/l,c=b/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=I/c,l=b/c),this.set(s,l,c,n),this}let C=Math.sqrt((M-T)*(M-T)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(v-w)/C,this.z=(g-_)/C,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ue(this.x,t.x,n.x),this.y=ue(this.y,t.y,n.y),this.z=ue(this.z,t.z,n.z),this.w=ue(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ue(this.x,t,n),this.y=ue(this.y,t,n),this.z=ue(this.z,t,n),this.w=ue(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ue(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xp.prototype.isVector4=!0;let sn=Xp;class eE extends ys{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new sn(0,0,t,n),this.scissorTest=!1,this.viewport=new sn(0,0,t,n),this.textures=[];const l={width:t,height:n,depth:s.depth},c=new Rn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends eE{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class cx extends Rn{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nE extends Rn{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=class Eu{constructor(t,n,s,l,c,f,d,p,m,_,v,g,y,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,d,p,m,_,v,g,y,T,w,M)}set(t,n,s,l,c,f,d,p,m,_,v,g,y,T,w,M){const S=this.elements;return S[0]=t,S[4]=n,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=d,S[13]=p,S[2]=m,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=T,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Eu().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,l=1/Ur.setFromMatrixColumn(t,0).length(),c=1/Ur.setFromMatrixColumn(t,1).length(),f=1/Ur.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,y=f*v,T=d*_,w=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=y+T*m,n[5]=g-w*m,n[9]=-d*p,n[2]=w-g*m,n[6]=T+y*m,n[10]=f*p}else if(t.order==="YXZ"){const g=p*_,y=p*v,T=m*_,w=m*v;n[0]=g+w*d,n[4]=T*d-y,n[8]=f*m,n[1]=f*v,n[5]=f*_,n[9]=-d,n[2]=y*d-T,n[6]=w+g*d,n[10]=f*p}else if(t.order==="ZXY"){const g=p*_,y=p*v,T=m*_,w=m*v;n[0]=g-w*d,n[4]=-f*v,n[8]=T+y*d,n[1]=y+T*d,n[5]=f*_,n[9]=w-g*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(t.order==="ZYX"){const g=f*_,y=f*v,T=d*_,w=d*v;n[0]=p*_,n[4]=T*m-y,n[8]=g*m+w,n[1]=p*v,n[5]=w*m+g,n[9]=y*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(t.order==="YZX"){const g=f*p,y=f*m,T=d*p,w=d*m;n[0]=p*_,n[4]=w-g*v,n[8]=T*v+y,n[1]=v,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=y*v+T,n[10]=g-w*v}else if(t.order==="XZY"){const g=f*p,y=f*m,T=d*p,w=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=g*v+w,n[5]=f*_,n[9]=y*v-T,n[2]=T*v-y,n[6]=d*_,n[10]=w*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iE,t,aE)}lookAt(t,n,s){const l=this.elements;return ui.subVectors(t,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ls.crossVectors(s,ui),ls.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ls.crossVectors(s,ui)),ls.normalize(),Nc.crossVectors(ui,ls),l[0]=ls.x,l[4]=Nc.x,l[8]=ui.x,l[1]=ls.y,l[5]=Nc.y,l[9]=ui.y,l[2]=ls.z,l[6]=Nc.z,l[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],_=s[1],v=s[5],g=s[9],y=s[13],T=s[2],w=s[6],M=s[10],S=s[14],C=s[3],D=s[7],U=s[11],F=s[15],N=l[0],I=l[4],b=l[8],O=l[12],k=l[1],H=l[5],Y=l[9],ct=l[13],ot=l[2],Z=l[6],P=l[10],V=l[14],rt=l[3],mt=l[7],St=l[11],z=l[15];return c[0]=f*N+d*k+p*ot+m*rt,c[4]=f*I+d*H+p*Z+m*mt,c[8]=f*b+d*Y+p*P+m*St,c[12]=f*O+d*ct+p*V+m*z,c[1]=_*N+v*k+g*ot+y*rt,c[5]=_*I+v*H+g*Z+y*mt,c[9]=_*b+v*Y+g*P+y*St,c[13]=_*O+v*ct+g*V+y*z,c[2]=T*N+w*k+M*ot+S*rt,c[6]=T*I+w*H+M*Z+S*mt,c[10]=T*b+w*Y+M*P+S*St,c[14]=T*O+w*ct+M*V+S*z,c[3]=C*N+D*k+U*ot+F*rt,c[7]=C*I+D*H+U*Z+F*mt,c[11]=C*b+D*Y+U*P+F*St,c[15]=C*O+D*ct+U*V+F*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],_=t[2],v=t[6],g=t[10],y=t[14],T=t[3],w=t[7],M=t[11],S=t[15],C=p*y-m*g,D=d*y-m*v,U=d*g-p*v,F=f*y-m*_,N=f*g-p*_,I=f*v-d*_;return n*(w*C-M*D+S*U)-s*(T*C-M*F+S*N)+l*(T*D-w*F+S*I)-c*(T*U-w*N+M*I)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=t[9],g=t[10],y=t[11],T=t[12],w=t[13],M=t[14],S=t[15],C=n*d-s*f,D=n*p-l*f,U=n*m-c*f,F=s*p-l*d,N=s*m-c*d,I=l*m-c*p,b=_*w-v*T,O=_*M-g*T,k=_*S-y*T,H=v*M-g*w,Y=v*S-y*w,ct=g*S-y*M,ot=C*ct-D*Y+U*H+F*k-N*O+I*b;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ot;return t[0]=(d*ct-p*Y+m*H)*Z,t[1]=(l*Y-s*ct-c*H)*Z,t[2]=(w*I-M*N+S*F)*Z,t[3]=(g*N-v*I-y*F)*Z,t[4]=(p*k-f*ct-m*O)*Z,t[5]=(n*ct-l*k+c*O)*Z,t[6]=(M*U-T*I-S*D)*Z,t[7]=(_*I-g*U+y*D)*Z,t[8]=(f*Y-d*k+m*b)*Z,t[9]=(s*k-n*Y-c*b)*Z,t[10]=(T*N-w*U+S*C)*Z,t[11]=(v*U-_*N-y*C)*Z,t[12]=(d*O-f*H-p*b)*Z,t[13]=(n*H-s*O+l*b)*Z,t[14]=(w*D-T*F-M*C)*Z,t[15]=(_*F-v*D+g*C)*Z,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=t.x,d=t.y,p=t.z,m=c*f,_=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*f,0,m*p-l*d,_*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,f=n._y,d=n._z,p=n._w,m=c+c,_=f+f,v=d+d,g=c*m,y=c*_,T=c*v,w=f*_,M=f*v,S=d*v,C=p*m,D=p*_,U=p*v,F=s.x,N=s.y,I=s.z;return l[0]=(1-(w+S))*F,l[1]=(y+U)*F,l[2]=(T-D)*F,l[3]=0,l[4]=(y-U)*N,l[5]=(1-(g+S))*N,l[6]=(M+C)*N,l[7]=0,l[8]=(T+D)*I,l[9]=(M-C)*I,l[10]=(1-(g+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),n.identity(),this;let f=Ur.set(l[0],l[1],l[2]).length();const d=Ur.set(l[4],l[5],l[6]).length(),p=Ur.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ni.copy(this);const m=1/f,_=1/d,v=1/p;return Ni.elements[0]*=m,Ni.elements[1]*=m,Ni.elements[2]*=m,Ni.elements[4]*=_,Ni.elements[5]*=_,Ni.elements[6]*=_,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,n.setFromRotationMatrix(Ni),s.x=f,s.y=d,s.z=p,this}makePerspective(t,n,s,l,c,f,d=Ii,p=!1){const m=this.elements,_=2*c/(n-t),v=2*c/(s-l),g=(n+t)/(n-t),y=(s+l)/(s-l);let T,w;if(p)T=c/(f-c),w=f*c/(f-c);else if(d===Ii)T=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===vl)T=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=v,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,s,l,c,f,d=Ii,p=!1){const m=this.elements,_=2/(n-t),v=2/(s-l),g=-(n+t)/(n-t),y=-(s+l)/(s-l);let T,w;if(p)T=1/(f-c),w=f/(f-c);else if(d===Ii)T=-2/(f-c),w=-(f+c)/(f-c);else if(d===vl)T=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=v,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}};Eu.prototype.isMatrix4=!0;let je=Eu;const Ur=new G,Ni=new je,iE=new G(0,0,0),aE=new G(1,1,1),ls=new G,Nc=new G,ui=new G,k_=new je,W_=new xs;class Qi{constructor(t=0,n=0,s=0,l=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ue(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ue(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ue(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return k_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(k_,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return W_.setFromEuler(this),this.setFromQuaternion(W_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class Up{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sE=0;const q_=new G,Lr=new xs,xa=new je,Oc=new G,$o=new G,rE=new G,oE=new xs,Y_=new G(1,0,0),j_=new G(0,1,0),Z_=new G(0,0,1),K_={type:"added"},lE={type:"removed"},Nr={type:"childadded",child:null},jh={type:"childremoved",child:null};class hn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const t=new G,n=new Qi,s=new xs,l=new G(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new re}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(Y_,t)}rotateY(t){return this.rotateOnAxis(j_,t)}rotateZ(t){return this.rotateOnAxis(Z_,t)}translateOnAxis(t,n){return q_.copy(t).applyQuaternion(this.quaternion),this.position.add(q_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Y_,t)}translateY(t){return this.translateOnAxis(j_,t)}translateZ(t){return this.translateOnAxis(Z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Oc.copy(t):Oc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt($o,Oc,this.up):xa.lookAt(Oc,$o,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),Lr.setFromRotationMatrix(xa),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(K_),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(lE),jh.child=t,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xa.multiply(t.parent.matrixWorld)),t.applyMatrix4(xa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(K_),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,rE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,oE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*s-c[8]*l,c[13]+=s-c[1]*n-c[5]*s-c[9]*l,c[14]+=l-c[2]*n-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(n){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),y=f(t.animations),T=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}hn.DEFAULT_UP=new G(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ul extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cE={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const w of t.hand.values()){const M=n.getJointPose(w,s),S=this._getHandJoint(m,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,T=.005;m.inputState.pinching&&g>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&g<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(cE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new ul;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function Kh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class te{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=Te.workingColorSpace){return this.r=t,this.g=n,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=Te.workingColorSpace){if(t=wp(t,1),n=ue(n,0,1),s=ue(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=Kh(f,c,t+1/3),this.g=Kh(f,c,t),this.b=Kh(f,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,n=di){function s(c){c!==void 0&&parseFloat(c)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Qt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=di){const s=ux[t.toLowerCase()];return s!==void 0?this.setHex(s,n):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wa(t.r),this.g=wa(t.g),this.b=wa(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Te.workingToColorSpace(Bn.copy(this),t),Math.round(ue(Bn.r*255,0,255))*65536+Math.round(ue(Bn.g*255,0,255))*256+Math.round(ue(Bn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Te.workingColorSpace){Te.workingToColorSpace(Bn.copy(this),n);const s=Bn.r,l=Bn.g,c=Bn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case s:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-s)/v+2;break;case c:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,n=Te.workingColorSpace){return Te.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=di){Te.workingToColorSpace(Bn.copy(this),t);const n=Bn.r,s=Bn.g,l=Bn.b;return t!==di?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+n,cs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(cs),t.getHSL(Pc);const s=dl(cs.h,Pc.h,n),l=dl(cs.s,Pc.s,n),c=dl(cs.l,Pc.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new te;te.NAMES=ux;class fx{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=n}clone(){return new fx(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Y3 extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Oi=new G,ya=new G,Jh=new G,Sa=new G,Or=new G,Pr=new G,J_=new G,Qh=new G,$h=new G,td=new G,ed=new sn,nd=new sn,id=new sn;class Ri{constructor(t=new G,n=new G,s=new G){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),Oi.subVectors(t,n),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){Oi.subVectors(l,n),ya.subVectors(s,n),Jh.subVectors(t,n);const f=Oi.dot(Oi),d=Oi.dot(ya),p=Oi.dot(Jh),m=ya.dot(ya),_=ya.dot(Jh),v=f*m-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(m*p-d*_)*g,T=(f*_-d*p)*g;return c.set(1-y-T,T,y)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,n,s,l,c,f,d,p){return this.getBarycoord(t,n,s,l,Sa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Sa.x),p.addScaledVector(f,Sa.y),p.addScaledVector(d,Sa.z),p)}static getInterpolatedAttribute(t,n,s,l,c,f){return ed.setScalar(0),nd.setScalar(0),id.setScalar(0),ed.fromBufferAttribute(t,n),nd.fromBufferAttribute(t,s),id.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ed,c.x),f.addScaledVector(nd,c.y),f.addScaledVector(id,c.z),f}static isFrontFacing(t,n,s,l){return Oi.subVectors(s,n),ya.subVectors(t,n),Oi.cross(ya).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Oi.cross(ya).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ri.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return Ri.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let f,d;Or.subVectors(l,s),Pr.subVectors(c,s),Qh.subVectors(t,s);const p=Or.dot(Qh),m=Pr.dot(Qh);if(p<=0&&m<=0)return n.copy(s);$h.subVectors(t,l);const _=Or.dot($h),v=Pr.dot($h);if(_>=0&&v<=_)return n.copy(l);const g=p*v-_*m;if(g<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(s).addScaledVector(Or,f);td.subVectors(t,c);const y=Or.dot(td),T=Pr.dot(td);if(T>=0&&y<=T)return n.copy(c);const w=y*m-p*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(s).addScaledVector(Pr,d);const M=_*T-y*v;if(M<=0&&v-_>=0&&y-T>=0)return J_.subVectors(c,l),d=(v-_)/(v-_+(y-T)),n.copy(l).addScaledVector(J_,d);const S=1/(M+w+g);return f=w*S,d=g*S,n.copy(s).addScaledVector(Or,f).addScaledVector(Pr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class yl{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Pi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Pi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Pi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),zc.copy(s.boundingBox)),zc.applyMatrix4(t.matrixWorld),this.union(zc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tl),Ic.subVectors(this.max,tl),zr.subVectors(t.a,tl),Ir.subVectors(t.b,tl),Br.subVectors(t.c,tl),us.subVectors(Ir,zr),fs.subVectors(Br,Ir),Hs.subVectors(zr,Br);let n=[0,-us.z,us.y,0,-fs.z,fs.y,0,-Hs.z,Hs.y,us.z,0,-us.x,fs.z,0,-fs.x,Hs.z,0,-Hs.x,-us.y,us.x,0,-fs.y,fs.x,0,-Hs.y,Hs.x,0];return!ad(n,zr,Ir,Br,Ic)||(n=[1,0,0,0,1,0,0,0,1],!ad(n,zr,Ir,Br,Ic))?!1:(Bc.crossVectors(us,fs),n=[Bc.x,Bc.y,Bc.z],ad(n,zr,Ir,Br,Ic))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ma=[new G,new G,new G,new G,new G,new G,new G,new G],Pi=new G,zc=new yl,zr=new G,Ir=new G,Br=new G,us=new G,fs=new G,Hs=new G,tl=new G,Ic=new G,Bc=new G,Gs=new G;function ad(r,t,n,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Gs.fromArray(r,c);const d=l.x*Math.abs(Gs.x)+l.y*Math.abs(Gs.y)+l.z*Math.abs(Gs.z),p=t.dot(Gs),m=n.dot(Gs),_=s.dot(Gs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const Ta=uE();function uE(){const r=new ArrayBuffer(4),t=new Float32Array(r),n=new Uint32Array(r),s=new Uint32Array(512),l=new Uint32Array(512);for(let p=0;p<256;++p){const m=p-127;m<-27?(s[p]=0,s[p|256]=32768,l[p]=24,l[p|256]=24):m<-14?(s[p]=1024>>-m-14,s[p|256]=1024>>-m-14|32768,l[p]=-m-1,l[p|256]=-m-1):m<=15?(s[p]=m+15<<10,s[p|256]=m+15<<10|32768,l[p]=13,l[p|256]=13):m<128?(s[p]=31744,s[p|256]=64512,l[p]=24,l[p|256]=24):(s[p]=31744,s[p|256]=64512,l[p]=13,l[p|256]=13)}const c=new Uint32Array(2048),f=new Uint32Array(64),d=new Uint32Array(64);for(let p=1;p<1024;++p){let m=p<<13,_=0;for(;(m&8388608)===0;)m<<=1,_-=8388608;m&=-8388609,_+=947912704,c[p]=m|_}for(let p=1024;p<2048;++p)c[p]=939524096+(p-1024<<13);for(let p=1;p<31;++p)f[p]=p<<23;f[31]=1199570944,f[32]=2147483648;for(let p=33;p<63;++p)f[p]=2147483648+(p-32<<23);f[63]=3347054592;for(let p=1;p<64;++p)p!==32&&(d[p]=1024);return{floatView:t,uint32View:n,baseTable:s,shiftTable:l,mantissaTable:c,exponentTable:f,offsetTable:d}}function fi(r){Math.abs(r)>65504&&Qt("DataUtils.toHalfFloat(): Value out of range."),r=ue(r,-65504,65504),Ta.floatView[0]=r;const t=Ta.uint32View[0],n=t>>23&511;return Ta.baseTable[n]+((t&8388607)>>Ta.shiftTable[n])}function Fc(r){const t=r>>10;return Ta.uint32View[0]=Ta.mantissaTable[Ta.offsetTable[t]+(r&1023)]+Ta.exponentTable[t],Ta.floatView[0]}const vn=new G,Hc=new zt;let fE=0;class gi extends ys{constructor(t,n,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=pp,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Hc.fromBufferAttribute(this,n),Hc.applyMatrix3(t),this.setXY(n,Hc.x,Hc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=kn(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=ce(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=kn(n,this.array)),n}setX(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=kn(n,this.array)),n}setY(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=kn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=kn(n,this.array)),n}setW(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),s=ce(s,this.array),l=ce(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),s=ce(s,this.array),l=ce(l,this.array),c=ce(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pp&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class hx extends gi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class dx extends gi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class j3 extends gi{constructor(t,n,s){super(new Uint16Array(t),n,s),this.isFloat16BufferAttribute=!0}getX(t){let n=Fc(this.array[t*this.itemSize]);return this.normalized&&(n=kn(n,this.array)),n}setX(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize]=fi(n),this}getY(t){let n=Fc(this.array[t*this.itemSize+1]);return this.normalized&&(n=kn(n,this.array)),n}setY(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+1]=fi(n),this}getZ(t){let n=Fc(this.array[t*this.itemSize+2]);return this.normalized&&(n=kn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+2]=fi(n),this}getW(t){let n=Fc(this.array[t*this.itemSize+3]);return this.normalized&&(n=kn(n,this.array)),n}setW(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+3]=fi(n),this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=fi(n),this.array[t+1]=fi(s),this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),s=ce(s,this.array),l=ce(l,this.array)),this.array[t+0]=fi(n),this.array[t+1]=fi(s),this.array[t+2]=fi(l),this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),s=ce(s,this.array),l=ce(l,this.array),c=ce(c,this.array)),this.array[t+0]=fi(n),this.array[t+1]=fi(s),this.array[t+2]=fi(l),this.array[t+3]=fi(c),this}}class Je extends gi{constructor(t,n,s){super(new Float32Array(t),n,s)}}const hE=new yl,el=new G,sd=new G;class Au{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):hE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;el.subVectors(t,this.center);const n=el.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(el,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(el.copy(t.center).add(sd)),this.expandByPoint(el.copy(t.center).sub(sd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let dE=0;const Ai=new je,rd=new hn,Fr=new G,hi=new yl,nl=new yl,An=new G;class Hn extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(DM(t)?dx:hx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new re().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,n,s){return Ai.makeTranslation(t,n,s),this.applyMatrix4(Ai),this}scale(t,n,s){return Ai.makeScale(t,n,s),this.applyMatrix4(Ai),this}lookAt(t){return rd.lookAt(t),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Je(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Au);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(hi.min,nl.min),hi.expandByPoint(An),An.addVectors(hi.max,nl.max),hi.expandByPoint(An)):(hi.expandByPoint(nl.min),hi.expandByPoint(nl.max))}hi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)An.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(An));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)An.fromBufferAttribute(d,m),p&&(Fr.fromBufferAttribute(t,m),An.add(Fr)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let b=0;b<s.count;b++)d[b]=new G,p[b]=new G;const m=new G,_=new G,v=new G,g=new zt,y=new zt,T=new zt,w=new G,M=new G;function S(b,O,k){m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,O),v.fromBufferAttribute(s,k),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,O),T.fromBufferAttribute(c,k),_.sub(m),v.sub(m),y.sub(g),T.sub(g);const H=1/(y.x*T.y-T.x*y.y);isFinite(H)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(H),d[b].add(w),d[O].add(w),d[k].add(w),p[b].add(M),p[O].add(M),p[k].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let b=0,O=C.length;b<O;++b){const k=C[b],H=k.start,Y=k.count;for(let ct=H,ot=H+Y;ct<ot;ct+=3)S(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const D=new G,U=new G,F=new G,N=new G;function I(b){F.fromBufferAttribute(l,b),N.copy(F);const O=d[b];D.copy(O),D.sub(F.multiplyScalar(F.dot(O))).normalize(),U.crossVectors(N,O);const H=U.dot(p[b])<0?-1:1;f.setXYZW(b,D.x,D.y,D.z,H)}for(let b=0,O=C.length;b<O;++b){const k=C[b],H=k.start,Y=k.count;for(let ct=H,ot=H+Y;ct<ot;ct+=3)I(t.getX(ct+0)),I(t.getX(ct+1)),I(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new G,c=new G,f=new G,d=new G,p=new G,m=new G,_=new G,v=new G;if(t)for(let g=0,y=t.count;g<y;g+=3){const T=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,w),f.fromBufferAttribute(n,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),d.add(_),p.add(_),m.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let g=0,y=n.count;g<y;g+=3)l.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),f.fromBufferAttribute(n,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,v=d.normalized,g=new m.constructor(p.length*_);let y=0,T=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*_;for(let S=0;S<_;S++)g[T++]=m[y++]}return new gi(g,_,v)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,v=m.length;_<v;_++){const g=m[_],y=t(g,s);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,g=m.length;v<g;v++){const y=m[v];_.push(y.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(n))}const c=t.morphAttributes;for(const m in c){const _=[],v=c[m];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class px{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=pp,this.updateRanges=[],this.version=0,this.uuid=Ca()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,s){t*=this.stride,s*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=n.array[s+l];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ca()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ca()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new G;class xu{constructor(t,n,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,s=this.data.count;n<s;n++)Vn.fromBufferAttribute(this,n),Vn.applyMatrix4(t),this.setXYZ(n,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)Vn.fromBufferAttribute(this,n),Vn.applyNormalMatrix(t),this.setXYZ(n,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)Vn.fromBufferAttribute(this,n),Vn.transformDirection(t),this.setXYZ(n,Vn.x,Vn.y,Vn.z);return this}getComponent(t,n){let s=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(s=kn(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=ce(s,this.array)),this.data.array[t*this.data.stride+this.offset+n]=s,this}setX(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=kn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=kn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=kn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=kn(n,this.array)),n}setXY(t,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=s,this}setXYZ(t,n,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=ce(n,this.array),s=ce(s,this.array),l=ce(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=ce(n,this.array),s=ce(s,this.array),l=ce(l,this.array),c=ce(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){vu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new gi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){vu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let pE=0;class $n extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=Kr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Cd,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){Qt(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){Qt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(s.blending=this.blending),this.side!==_s&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rd&&(s.blendSrc=this.blendSrc),this.blendDst!==Cd&&(s.blendDst=this.blendDst),this.blendEquation!==ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==I_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mE extends $n{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hr;const il=new G,Gr=new G,Vr=new G,Xr=new zt,al=new zt,mx=new je,Gc=new G,sl=new G,Vc=new G,Q_=new zt,od=new zt,$_=new zt;class Z3 extends hn{constructor(t=new mE){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new Hn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new px(n,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new xu(s,3,0,!1)),Hr.setAttribute("uv",new xu(s,2,3,!1))}this.geometry=Hr,this.material=t,this.center=new zt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gr.setFromMatrixScale(this.matrixWorld),mx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-Vr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;Xc(Gc.set(-.5,-.5,0),Vr,f,Gr,l,c),Xc(sl.set(.5,-.5,0),Vr,f,Gr,l,c),Xc(Vc.set(.5,.5,0),Vr,f,Gr,l,c),Q_.set(0,0),od.set(1,0),$_.set(1,1);let d=t.ray.intersectTriangle(Gc,sl,Vc,!1,il);if(d===null&&(Xc(sl.set(-.5,.5,0),Vr,f,Gr,l,c),od.set(0,1),d=t.ray.intersectTriangle(Gc,Vc,sl,!1,il),d===null))return;const p=t.ray.origin.distanceTo(il);p<t.near||p>t.far||n.push({distance:p,point:il.clone(),uv:Ri.getInterpolation(il,Gc,sl,Vc,Q_,od,$_,new zt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xc(r,t,n,s,l,c){Xr.subVectors(r,n).addScalar(.5).multiply(s),l!==void 0?(al.x=c*Xr.x-l*Xr.y,al.y=l*Xr.x+c*Xr.y):al.copy(Xr),r.copy(t),r.x+=al.x,r.y+=al.y,r.applyMatrix4(mx)}const Ea=new G,ld=new G,kc=new G,hs=new G,cd=new G,Wc=new G,ud=new G;class Ru{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ea)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ea.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ea.copy(this.origin).addScaledVector(this.direction,n),Ea.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){ld.copy(t).add(n).multiplyScalar(.5),kc.copy(n).sub(t).normalize(),hs.copy(this.origin).sub(ld);const c=t.distanceTo(n)*.5,f=-this.direction.dot(kc),d=hs.dot(this.direction),p=-hs.dot(kc),m=hs.lengthSq(),_=Math.abs(1-f*f);let v,g,y,T;if(_>0)if(v=f*p-d,g=f*d-p,T=c*_,v>=0)if(g>=-T)if(g<=T){const w=1/_;v*=w,g*=w,y=v*(v+f*g+2*d)+g*(f*v+g+2*p)+m}else g=c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*p)+m;else g=-c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*p)+m;else g<=-T?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+g*(g+2*p)+m):g<=T?(v=0,g=Math.min(Math.max(-c,-p),c),y=g*(g+2*p)+m):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+g*(g+2*p)+m);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ld).addScaledVector(kc,g),y}intersectSphere(t,n){Ea.subVectors(t.center,this.origin);const s=Ea.dot(this.direction),l=Ea.dot(Ea)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return m>=0?(s=(t.min.x-g.x)*m,l=(t.max.x-g.x)*m):(s=(t.max.x-g.x)*m,l=(t.min.x-g.x)*m),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,p=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,p=(t.min.z-g.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,Ea)!==null}intersectTriangle(t,n,s,l,c){cd.subVectors(n,t),Wc.subVectors(s,t),ud.crossVectors(cd,Wc);let f=this.direction.dot(ud),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hs.subVectors(this.origin,t);const p=d*this.direction.dot(Wc.crossVectors(hs,Wc));if(p<0)return null;const m=d*this.direction.dot(cd.cross(hs));if(m<0||p+m>f)return null;const _=-d*hs.dot(ud);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gx extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tv=new je,Vs=new Ru,qc=new Au,ev=new G,Yc=new G,jc=new G,Zc=new G,fd=new G,Kc=new G,nv=new G,Jc=new G;class $i extends hn{constructor(t=new Hn,n=new gx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Kc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],v=c[p];_!==0&&(fd.fromBufferAttribute(v,t),f?Kc.addScaledVector(fd,_):Kc.addScaledVector(fd.sub(n),_))}n.add(Kc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(c),Vs.copy(t.ray).recast(t.near),!(qc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(qc,ev)===null||Vs.origin.distanceToSquared(ev)>(t.far-t.near)**2))&&(tv.copy(c).invert(),Vs.copy(t.ray).applyMatrix4(tv),!(s.boundingBox!==null&&Vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Vs)))}_computeIntersections(t,n,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const M=g[T],S=f[M.materialIndex],C=Math.max(M.start,y.start),D=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=C,F=D;U<F;U+=3){const N=d.getX(U),I=d.getX(U+1),b=d.getX(U+2);l=Qc(this,S,t,s,m,_,v,N,I,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const C=d.getX(M),D=d.getX(M+1),U=d.getX(M+2);l=Qc(this,f,t,s,m,_,v,C,D,U),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const M=g[T],S=f[M.materialIndex],C=Math.max(M.start,y.start),D=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let U=C,F=D;U<F;U+=3){const N=U,I=U+1,b=U+2;l=Qc(this,S,t,s,m,_,v,N,I,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const C=M,D=M+1,U=M+2;l=Qc(this,f,t,s,m,_,v,C,D,U),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function gE(r,t,n,s,l,c,f,d){let p;if(t.side===Qn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,t.side===_s,d),p===null)return null;Jc.copy(d),Jc.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Jc);return m<n.near||m>n.far?null:{distance:m,point:Jc.clone(),object:r}}function Qc(r,t,n,s,l,c,f,d,p,m){r.getVertexPosition(d,Yc),r.getVertexPosition(p,jc),r.getVertexPosition(m,Zc);const _=gE(r,t,n,s,Yc,jc,Zc,nv);if(_){const v=new G;Ri.getBarycoord(nv,Yc,jc,Zc,v),l&&(_.uv=Ri.getInterpolatedAttribute(l,d,p,m,v,new zt)),c&&(_.uv1=Ri.getInterpolatedAttribute(c,d,p,m,v,new zt)),f&&(_.normal=Ri.getInterpolatedAttribute(f,d,p,m,v,new G),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new G,materialIndex:0};Ri.getNormal(Yc,jc,Zc,g.normal),_.face=g,_.barycoord=v}return _}class _E extends Rn{constructor(t=null,n=1,s=1,l,c,f,d,p,m=Mn,_=Mn,v,g){super(null,f,d,p,m,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K3 extends gi{constructor(t,n,s,l=1){super(t,n,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hd=new G,vE=new G,xE=new re;class ps{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=hd.subVectors(s,n).cross(vE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,s=!0){const l=t.delta(hd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:n.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||xE.getNormalMatrix(t),l=this.coplanarPoint(hd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new Au,yE=new zt(.5,.5),$c=new G;class Cu{constructor(t=new ps,n=new ps,s=new ps,l=new ps,c=new ps,f=new ps){this.planes=[t,n,s,l,c,f]}set(t,n,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Ii,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],p=c[2],m=c[3],_=c[4],v=c[5],g=c[6],y=c[7],T=c[8],w=c[9],M=c[10],S=c[11],C=c[12],D=c[13],U=c[14],F=c[15];if(l[0].setComponents(m-f,y-_,S-T,F-C).normalize(),l[1].setComponents(m+f,y+_,S+T,F+C).normalize(),l[2].setComponents(m+d,y+v,S+w,F+D).normalize(),l[3].setComponents(m-d,y-v,S-w,F-D).normalize(),s)l[4].setComponents(p,g,M,U).normalize(),l[5].setComponents(m-p,y-g,S-M,F-U).normalize();else if(l[4].setComponents(m-p,y-g,S-M,F-U).normalize(),n===Ii)l[5].setComponents(m+p,y+g,S+M,F+U).normalize();else if(n===vl)l[5].setComponents(p,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const n=yE.distanceTo(t.center);return Xs.radius=.7071067811865476+n,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if($c.x=l.normal.x>0?t.max.x:t.min.x,$c.y=l.normal.y>0?t.max.y:t.min.y,$c.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint($c)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Xi=new je,ki=new Cu;class _x{constructor(){this.coordinateSystem=Ii}intersectsObject(t,n){if(!n.isArrayCamera||n.cameras.length===0)return!1;for(let s=0;s<n.cameras.length;s++){const l=n.cameras[s];if(Xi.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),ki.setFromProjectionMatrix(Xi,l.coordinateSystem,l.reversedDepth),ki.intersectsObject(t))return!0}return!1}intersectsSprite(t,n){if(!n||!n.cameras||n.cameras.length===0)return!1;for(let s=0;s<n.cameras.length;s++){const l=n.cameras[s];if(Xi.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),ki.setFromProjectionMatrix(Xi,l.coordinateSystem,l.reversedDepth),ki.intersectsSprite(t))return!0}return!1}intersectsSphere(t,n){if(!n||!n.cameras||n.cameras.length===0)return!1;for(let s=0;s<n.cameras.length;s++){const l=n.cameras[s];if(Xi.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),ki.setFromProjectionMatrix(Xi,l.coordinateSystem,l.reversedDepth),ki.intersectsSphere(t))return!0}return!1}intersectsBox(t,n){if(!n||!n.cameras||n.cameras.length===0)return!1;for(let s=0;s<n.cameras.length;s++){const l=n.cameras[s];if(Xi.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),ki.setFromProjectionMatrix(Xi,l.coordinateSystem,l.reversedDepth),ki.intersectsBox(t))return!0}return!1}containsPoint(t,n){if(!n||!n.cameras||n.cameras.length===0)return!1;for(let s=0;s<n.cameras.length;s++){const l=n.cameras[s];if(Xi.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),ki.setFromProjectionMatrix(Xi,l.coordinateSystem,l.reversedDepth),ki.containsPoint(t))return!0}return!1}clone(){return new _x}}class vx extends $n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yu=new G,Su=new G,iv=new je,rl=new Ru,tu=new Au,dd=new G,av=new G;class J3 extends hn{constructor(t=new Hn,n=new vx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let l=1,c=n.count;l<c;l++)yu.fromBufferAttribute(n,l-1),Su.fromBufferAttribute(n,l),s[l]=s[l-1],s[l]+=yu.distanceTo(Su);t.setAttribute("lineDistance",new Je(s,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),tu.copy(s.boundingSphere),tu.applyMatrix4(l),tu.radius+=c,t.ray.intersectsSphere(tu)===!1)return;iv.copy(l).invert(),rl.copy(t.ray).applyMatrix4(iv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const y=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let w=y,M=T-1;w<M;w+=m){const S=_.getX(w),C=_.getX(w+1),D=eu(this,t,rl,p,S,C,w);D&&n.push(D)}if(this.isLineLoop){const w=_.getX(T-1),M=_.getX(y),S=eu(this,t,rl,p,w,M,T-1);S&&n.push(S)}}else{const y=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let w=y,M=T-1;w<M;w+=m){const S=eu(this,t,rl,p,w,w+1,w);S&&n.push(S)}if(this.isLineLoop){const w=eu(this,t,rl,p,T-1,y,T-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function eu(r,t,n,s,l,c,f){const d=r.geometry.attributes.position;if(yu.fromBufferAttribute(d,l),Su.fromBufferAttribute(d,c),n.distanceSqToSegment(yu,Su,dd,av)>s)return;dd.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(dd);if(!(m<t.near||m>t.far))return{distance:m,point:av.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class Q3 extends $n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class $3 extends Rn{constructor(t,n){super({width:t,height:n}),this.isFramebufferTexture=!0,this.magFilter=Mn,this.minFilter=Mn,this.generateMipmaps=!1,this.needsUpdate=!0}}class xx extends Rn{constructor(t=[],n=js,s,l,c,f,d,p,m,_){super(t,n,s,l,c,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class SE extends Rn{constructor(t,n,s,l,c,f,d,p,m){super(t,n,s,l,c,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eo extends Rn{constructor(t,n,s=Ji,l,c,f,d=Mn,p=Mn,m,_=Ua,v=1){if(_!==Ua&&_!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,l,c,f,d,p,_,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ME extends eo{constructor(t,n=Ji,s=js,l,c,f=Mn,d=Mn,p,m=Ua){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,s,l,c,f,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yx extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sl extends Hn{constructor(t=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],v=[];let g=0,y=0;T("z","y","x",-1,-1,s,n,t,f,c,0),T("z","y","x",1,-1,s,n,-t,f,c,1),T("x","z","y",1,1,t,s,n,l,f,2),T("x","z","y",1,-1,t,s,-n,l,f,3),T("x","y","z",1,-1,t,n,s,l,c,4),T("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(v,2));function T(w,M,S,C,D,U,F,N,I,b,O){const k=U/I,H=F/b,Y=U/2,ct=F/2,ot=N/2,Z=I+1,P=b+1;let V=0,rt=0;const mt=new G;for(let St=0;St<P;St++){const z=St*H-ct;for(let Q=0;Q<Z;Q++){const vt=Q*k-Y;mt[w]=vt*C,mt[M]=z*D,mt[S]=ot,m.push(mt.x,mt.y,mt.z),mt[w]=0,mt[M]=0,mt[S]=N>0?1:-1,_.push(mt.x,mt.y,mt.z),v.push(Q/I),v.push(1-St/b),V+=1}}for(let St=0;St<b;St++)for(let z=0;z<I;z++){const Q=g+z+Z*St,vt=g+z+Z*(St+1),Tt=g+(z+1)+Z*(St+1),wt=g+(z+1)+Z*St;p.push(Q,vt,wt),p.push(vt,Tt,wt),rt+=6}d.addGroup(y,rt,O),y+=rt,g+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Lp extends Hn{constructor(t=1,n=1,s=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],g=[],y=[];let T=0;const w=[],M=s/2;let S=0;C(),f===!1&&(t>0&&D(!0),n>0&&D(!1)),this.setIndex(_),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(g,3)),this.setAttribute("uv",new Je(y,2));function C(){const U=new G,F=new G;let N=0;const I=(n-t)/s;for(let b=0;b<=c;b++){const O=[],k=b/c,H=k*(n-t)+t;for(let Y=0;Y<=l;Y++){const ct=Y/l,ot=ct*p+d,Z=Math.sin(ot),P=Math.cos(ot);F.x=H*Z,F.y=-k*s+M,F.z=H*P,v.push(F.x,F.y,F.z),U.set(Z,I,P).normalize(),g.push(U.x,U.y,U.z),y.push(ct,1-k),O.push(T++)}w.push(O)}for(let b=0;b<l;b++)for(let O=0;O<c;O++){const k=w[O][b],H=w[O+1][b],Y=w[O+1][b+1],ct=w[O][b+1];(t>0||O!==0)&&(_.push(k,H,ct),N+=3),(n>0||O!==c-1)&&(_.push(H,Y,ct),N+=3)}m.addGroup(S,N,0),S+=N}function D(U){const F=T,N=new zt,I=new G;let b=0;const O=U===!0?t:n,k=U===!0?1:-1;for(let Y=1;Y<=l;Y++)v.push(0,M*k,0),g.push(0,k,0),y.push(.5,.5),T++;const H=T;for(let Y=0;Y<=l;Y++){const ot=Y/l*p+d,Z=Math.cos(ot),P=Math.sin(ot);I.x=O*P,I.y=M*k,I.z=O*Z,v.push(I.x,I.y,I.z),g.push(0,k,0),N.x=Z*.5+.5,N.y=P*.5*k+.5,y.push(N.x,N.y),T++}for(let Y=0;Y<l;Y++){const ct=F+Y,ot=H+Y;U===!0?_.push(ot,ot+1,ct):_.push(ot+1,ot,ct),b+=3}m.addGroup(S,b,U===!0?1:2),S+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sx extends Lp{constructor(t=1,n=1,s=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,n,s,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new Sx(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Np extends Hn{constructor(t=[],n=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:s,detail:l};const c=[],f=[];d(l),m(s),_(),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(c.slice(),3)),this.setAttribute("uv",new Je(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(C){const D=new G,U=new G,F=new G;for(let N=0;N<n.length;N+=3)y(n[N+0],D),y(n[N+1],U),y(n[N+2],F),p(D,U,F,C)}function p(C,D,U,F){const N=F+1,I=[];for(let b=0;b<=N;b++){I[b]=[];const O=C.clone().lerp(U,b/N),k=D.clone().lerp(U,b/N),H=N-b;for(let Y=0;Y<=H;Y++)Y===0&&b===N?I[b][Y]=O:I[b][Y]=O.clone().lerp(k,Y/H)}for(let b=0;b<N;b++)for(let O=0;O<2*(N-b)-1;O++){const k=Math.floor(O/2);O%2===0?(g(I[b][k+1]),g(I[b+1][k]),g(I[b][k])):(g(I[b][k+1]),g(I[b+1][k+1]),g(I[b+1][k]))}}function m(C){const D=new G;for(let U=0;U<c.length;U+=3)D.x=c[U+0],D.y=c[U+1],D.z=c[U+2],D.normalize().multiplyScalar(C),c[U+0]=D.x,c[U+1]=D.y,c[U+2]=D.z}function _(){const C=new G;for(let D=0;D<c.length;D+=3){C.x=c[D+0],C.y=c[D+1],C.z=c[D+2];const U=M(C)/2/Math.PI+.5,F=S(C)/Math.PI+.5;f.push(U,1-F)}T(),v()}function v(){for(let C=0;C<f.length;C+=6){const D=f[C+0],U=f[C+2],F=f[C+4],N=Math.max(D,U,F),I=Math.min(D,U,F);N>.9&&I<.1&&(D<.2&&(f[C+0]+=1),U<.2&&(f[C+2]+=1),F<.2&&(f[C+4]+=1))}}function g(C){c.push(C.x,C.y,C.z)}function y(C,D){const U=C*3;D.x=t[U+0],D.y=t[U+1],D.z=t[U+2]}function T(){const C=new G,D=new G,U=new G,F=new G,N=new zt,I=new zt,b=new zt;for(let O=0,k=0;O<c.length;O+=9,k+=6){C.set(c[O+0],c[O+1],c[O+2]),D.set(c[O+3],c[O+4],c[O+5]),U.set(c[O+6],c[O+7],c[O+8]),N.set(f[k+0],f[k+1]),I.set(f[k+2],f[k+3]),b.set(f[k+4],f[k+5]),F.copy(C).add(D).add(U).divideScalar(3);const H=M(F);w(N,k+0,C,H),w(I,k+2,D,H),w(b,k+4,U,H)}}function w(C,D,U,F){F<0&&C.x===1&&(f[D]=C.x-1),U.x===0&&U.z===0&&(f[D]=F/2/Math.PI+.5)}function M(C){return Math.atan2(C.z,-C.x)}function S(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Np(t.vertices,t.indices,t.radius,t.detail)}}class La{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,n){const s=this.getUtoTmapping(t);return this.getPoint(s,n)}getPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return n}getSpacedPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPointAt(s/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let s,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),n.push(c),l=s;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const s=this.getLengths();let l=0;const c=s.length;let f;n?f=n:f=t*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(f-_)/g;return(l+y)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=n||(f.isVector2?new zt:new G);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,n){const s=this.getUtoTmapping(t);return this.getTangent(s,n)}computeFrenetFrames(t,n=!1){const s=new G,l=[],c=[],f=[],d=new G,p=new je;for(let y=0;y<=t;y++){const T=y/t;l[y]=this.getTangentAt(T,new G)}c[0]=new G,f[0]=new G;let m=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=m&&(m=_,s.set(1,0,0)),v<=m&&(m=v,s.set(0,1,0)),g<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(ue(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(d,T))}f[y].crossVectors(l[y],c[y])}if(n===!0){let y=Math.acos(ue(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let T=1;T<=t;T++)c[T].applyMatrix4(p.makeRotationAxis(l[T],y*T)),f[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Mx extends La{constructor(t=0,n=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,n=new zt){const s=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=p-this.aX,y=m-this.aY;p=g*_-y*v+this.aX,m=g*v+y*_+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class EE extends Mx{constructor(t,n,s,l,c,f){super(t,n,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Op(){let r=0,t=0,n=0,s=0;function l(c,f,d,p){r=c,t=d,n=-3*c+3*f-2*d-p,s=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,_,v){let g=(f-c)/m-(d-c)/(m+_)+(d-f)/_,y=(d-f)/_-(p-f)/(_+v)+(p-d)/v;g*=_,y*=_,l(f,d,g,y)},calc:function(c){const f=c*c,d=f*c;return r+t*c+n*f+s*d}}}const sv=new G,rv=new G,pd=new Op,md=new Op,gd=new Op;class bE extends La{constructor(t=[],n=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=s,this.tension=l}getPoint(t,n=new G){const s=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,_;this.closed||d>0?m=l[(d-1)%c]:(rv.subVectors(l[0],l[1]).add(l[0]),m=rv);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(sv.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=sv),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(m.distanceToSquared(v),y),w=Math.pow(v.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);w<1e-4&&(w=1),T<1e-4&&(T=w),M<1e-4&&(M=w),pd.initNonuniformCatmullRom(m.x,v.x,g.x,_.x,T,w,M),md.initNonuniformCatmullRom(m.y,v.y,g.y,_.y,T,w,M),gd.initNonuniformCatmullRom(m.z,v.z,g.z,_.z,T,w,M)}else this.curveType==="catmullrom"&&(pd.initCatmullRom(m.x,v.x,g.x,_.x,this.tension),md.initCatmullRom(m.y,v.y,g.y,_.y,this.tension),gd.initCatmullRom(m.z,v.z,g.z,_.z,this.tension));return s.set(pd.calc(p),md.calc(p),gd.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new G().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ov(r,t,n,s,l){const c=(s-t)*.5,f=(l-n)*.5,d=r*r,p=r*d;return(2*n-2*s+c+f)*p+(-3*n+3*s-2*c-f)*d+c*r+n}function TE(r,t){const n=1-r;return n*n*t}function AE(r,t){return 2*(1-r)*r*t}function RE(r,t){return r*r*t}function pl(r,t,n,s){return TE(r,t)+AE(r,n)+RE(r,s)}function CE(r,t){const n=1-r;return n*n*n*t}function wE(r,t){const n=1-r;return 3*n*n*r*t}function DE(r,t){return 3*(1-r)*r*r*t}function UE(r,t){return r*r*r*t}function ml(r,t,n,s,l){return CE(r,t)+wE(r,n)+DE(r,s)+UE(r,l)}class LE extends La{constructor(t=new zt,n=new zt,s=new zt,l=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new zt){const s=n,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(ml(t,l.x,c.x,f.x,d.x),ml(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class NE extends La{constructor(t=new G,n=new G,s=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new G){const s=n,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(ml(t,l.x,c.x,f.x,d.x),ml(t,l.y,c.y,f.y,d.y),ml(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class OE extends La{constructor(t=new zt,n=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new zt){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new zt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class PE extends La{constructor(t=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new G){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zE extends La{constructor(t=new zt,n=new zt,s=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new zt){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(pl(t,l.x,c.x,f.x),pl(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ex extends La{constructor(t=new G,n=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new G){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(pl(t,l.x,c.x,f.x),pl(t,l.y,c.y,f.y),pl(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class IE extends La{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new zt){const s=n,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],_=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(ov(d,p.x,m.x,_.x,v.x),ov(d,p.y,m.y,_.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new zt().fromArray(l))}return this}}var BE=Object.freeze({__proto__:null,ArcCurve:EE,CatmullRomCurve3:bE,CubicBezierCurve:LE,CubicBezierCurve3:NE,EllipseCurve:Mx,LineCurve:OE,LineCurve3:PE,QuadraticBezierCurve:zE,QuadraticBezierCurve3:Ex,SplineCurve:IE});class Pp extends Np{constructor(t=1,n=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Pp(t.radius,t.detail)}}class wu extends Hn{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,f=n/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,v=t/d,g=n/p,y=[],T=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-f;for(let D=0;D<m;D++){const U=D*v-c;T.push(U,-C,0),w.push(0,0,1),M.push(D/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let C=0;C<d;C++){const D=C+m*S,U=C+m*(S+1),F=C+1+m*(S+1),N=C+1+m*S;y.push(D,U,N),y.push(U,F,N)}this.setIndex(y),this.setAttribute("position",new Je(T,3)),this.setAttribute("normal",new Je(w,3)),this.setAttribute("uv",new Je(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wu(t.width,t.height,t.widthSegments,t.heightSegments)}}class bx extends Hn{constructor(t=1,n=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const _=[],v=new G,g=new G,y=[],T=[],w=[],M=[];for(let S=0;S<=s;S++){const C=[],D=S/s;let U=0;S===0&&f===0?U=.5/n:S===s&&p===Math.PI&&(U=-.5/n);for(let F=0;F<=n;F++){const N=F/n;v.x=-t*Math.cos(l+N*c)*Math.sin(f+D*d),v.y=t*Math.cos(f+D*d),v.z=t*Math.sin(l+N*c)*Math.sin(f+D*d),T.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(N+U,1-D),C.push(m++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<n;C++){const D=_[S][C+1],U=_[S][C],F=_[S+1][C],N=_[S+1][C+1];(S!==0||f>0)&&y.push(D,U,N),(S!==s-1||p<Math.PI)&&y.push(U,F,N)}this.setIndex(y),this.setAttribute("position",new Je(T,3)),this.setAttribute("normal",new Je(w,3)),this.setAttribute("uv",new Je(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bx(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tx extends Hn{constructor(t=1,n=.4,s=12,l=48,c=Math.PI*2,f=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const p=[],m=[],_=[],v=[],g=new G,y=new G,T=new G;for(let w=0;w<=s;w++){const M=f+w/s*d;for(let S=0;S<=l;S++){const C=S/l*c;y.x=(t+n*Math.cos(M))*Math.cos(C),y.y=(t+n*Math.cos(M))*Math.sin(C),y.z=n*Math.sin(M),m.push(y.x,y.y,y.z),g.x=t*Math.cos(C),g.y=t*Math.sin(C),T.subVectors(y,g).normalize(),_.push(T.x,T.y,T.z),v.push(S/l),v.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const S=(l+1)*w+M-1,C=(l+1)*(w-1)+M-1,D=(l+1)*(w-1)+M,U=(l+1)*w+M;p.push(S,C,U),p.push(C,D,U)}this.setIndex(p),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tx(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ax extends Hn{constructor(t=new Ex(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),n=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:s,radialSegments:l,closed:c};const f=t.computeFrenetFrames(n,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new G,p=new G,m=new zt;let _=new G;const v=[],g=[],y=[],T=[];w(),this.setIndex(T),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(g,3)),this.setAttribute("uv",new Je(y,2));function w(){for(let D=0;D<n;D++)M(D);M(c===!1?n:0),C(),S()}function M(D){_=t.getPointAt(D/n,_);const U=f.normals[D],F=f.binormals[D];for(let N=0;N<=l;N++){const I=N/l*Math.PI*2,b=Math.sin(I),O=-Math.cos(I);p.x=O*U.x+b*F.x,p.y=O*U.y+b*F.y,p.z=O*U.z+b*F.z,p.normalize(),g.push(p.x,p.y,p.z),d.x=_.x+s*p.x,d.y=_.y+s*p.y,d.z=_.z+s*p.z,v.push(d.x,d.y,d.z)}}function S(){for(let D=1;D<=n;D++)for(let U=1;U<=l;U++){const F=(l+1)*(D-1)+(U-1),N=(l+1)*D+(U-1),I=(l+1)*D+U,b=(l+1)*(D-1)+U;T.push(F,N,b),T.push(N,I,b)}}function C(){for(let D=0;D<=n;D++)for(let U=0;U<=l;U++)m.x=D/n,m.y=U/l,y.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ax(new BE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class t2 extends $n{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new te(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function no(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];if(lv(l))l.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone();else if(Array.isArray(l))if(lv(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[n][s]=c}else t[n][s]=l.slice();else t[n][s]=l}}return t}function Xn(r){const t={};for(let n=0;n<r.length;n++){const s=no(r[n]);for(const l in s)t[l]=s[l]}return t}function lv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function FE(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Rx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const HE={clone:no,merge:Xn};var GE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GE,this.fragmentShader=VE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=no(t.uniforms),this.uniformsGroups=FE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class XE extends ta{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kE extends $n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class WE extends kE{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class e2 extends $n{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=bu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class n2 extends $n{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class i2 extends $n{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class a2 extends $n{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=bu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qE extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YE extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class s2 extends $n{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new te(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class r2 extends vx{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const _d={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(cv(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!cv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function cv(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class jE{constructor(t,n,s){const l=this;let c=!1,f=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=s,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,d),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return m.push(_,v),this},this.removeHandler=function(_){const v=m.indexOf(_);return v!==-1&&m.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=m.length;v<g;v+=2){const y=m[v],T=m[v+1];if(y.global&&(y.lastIndex=0),y.test(_))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ZE=new jE;class zp{constructor(t){this.manager=t!==void 0?t:ZE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const s=this;return new Promise(function(l,c){s.load(t,l,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}zp.DEFAULT_MATERIAL_NAME="__DEFAULT";const kr=new WeakMap;class KE extends zp{constructor(t){super(t)}load(t,n,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=_d.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(f),c.manager.itemEnd(t)},0);else{let v=kr.get(f);v===void 0&&(v=[],kr.set(f,v)),v.push({onLoad:n,onError:l})}return f}const d=xl("img");function p(){_(),n&&n(this);const v=kr.get(this)||[];for(let g=0;g<v.length;g++){const y=v[g];y.onLoad&&y.onLoad(this)}kr.delete(this),c.manager.itemEnd(t)}function m(v){_(),l&&l(v),_d.remove(`image:${t}`);const g=kr.get(this)||[];for(let y=0;y<g.length;y++){const T=g[y];T.onError&&T.onError(v)}kr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),_d.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class o2 extends zp{constructor(t){super(t)}load(t,n,s,l){const c=new Rn,f=new KE(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},s,l),c}}class Ks extends hn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class l2 extends Ks{constructor(t,n,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const vd=new je,uv=new G,fv=new G;class Ip{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cu,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;uv.setFromMatrixPosition(t.matrixWorld),n.position.copy(uv),fv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fv),n.updateMatrixWorld(),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===vl||n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(vd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nu=new G,iu=new xs,Wi=new G;class Cx extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nu,iu,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(nu,iu,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new G,hv=new zt,dv=new zt;class pi extends Cx{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,n){return this.getViewBounds(t,hv,dv),n.subVectors(dv,hv)}setViewOffset(t,n,s,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(hl*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class JE extends Ip{constructor(){super(new pi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,s=to*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(s!==n.fov||l!==n.aspect||c!==n.far)&&(n.fov=s,n.aspect=l,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class c2 extends Ks{constructor(t,n,s=0,l=Math.PI/3,c=0,f=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new JE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}}class QE extends Ip{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class pv extends Ks{constructor(t,n,s=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new QE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Bp extends Cx{constructor(t=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $E extends Ip{constructor(){super(new Bp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u2 extends Ks{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new $E}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class f2 extends Ks{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class h2 extends Ks{constructor(t,n,s=10,l=10){super(t,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=s,this.height=l}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const n=super.toJSON(t);return n.object.width=this.width,n.object.height=this.height,n}}class tb{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new G)}set(t){for(let n=0;n<9;n++)this.coefficients[n].copy(t[n]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,n){const s=t.x,l=t.y,c=t.z,f=this.coefficients;return n.copy(f[0]).multiplyScalar(.282095),n.addScaledVector(f[1],.488603*l),n.addScaledVector(f[2],.488603*c),n.addScaledVector(f[3],.488603*s),n.addScaledVector(f[4],1.092548*(s*l)),n.addScaledVector(f[5],1.092548*(l*c)),n.addScaledVector(f[6],.315392*(3*c*c-1)),n.addScaledVector(f[7],1.092548*(s*c)),n.addScaledVector(f[8],.546274*(s*s-l*l)),n}getIrradianceAt(t,n){const s=t.x,l=t.y,c=t.z,f=this.coefficients;return n.copy(f[0]).multiplyScalar(.886227),n.addScaledVector(f[1],2*.511664*l),n.addScaledVector(f[2],2*.511664*c),n.addScaledVector(f[3],2*.511664*s),n.addScaledVector(f[4],2*.429043*s*l),n.addScaledVector(f[5],2*.429043*l*c),n.addScaledVector(f[6],.743125*c*c-.247708),n.addScaledVector(f[7],2*.429043*s*c),n.addScaledVector(f[8],.429043*(s*s-l*l)),n}add(t){for(let n=0;n<9;n++)this.coefficients[n].add(t.coefficients[n]);return this}addScaledSH(t,n){for(let s=0;s<9;s++)this.coefficients[s].addScaledVector(t.coefficients[s],n);return this}scale(t){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(t);return this}lerp(t,n){for(let s=0;s<9;s++)this.coefficients[s].lerp(t.coefficients[s],n);return this}equals(t){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(t.coefficients[n]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,n=0){const s=this.coefficients;for(let l=0;l<9;l++)s[l].fromArray(t,n+l*3);return this}toArray(t=[],n=0){const s=this.coefficients;for(let l=0;l<9;l++)s[l].toArray(t,n+l*3);return t}static getBasisAt(t,n){const s=t.x,l=t.y,c=t.z;n[0]=.282095,n[1]=.488603*l,n[2]=.488603*c,n[3]=.488603*s,n[4]=1.092548*s*l,n[5]=1.092548*l*c,n[6]=.315392*(3*c*c-1),n[7]=1.092548*s*c,n[8]=.546274*(s*s-l*l)}}class d2 extends Ks{constructor(t=new tb,n=1){super(void 0,n),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const n=super.toJSON(t);return n.object.sh=this.sh.toArray(),n}}const Wr=-90,qr=1;class eb extends hn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Wr,qr,t,n);l.layers=this.layers,this.add(l);const c=new pi(Wr,qr,t,n);c.layers=this.layers,this.add(c);const f=new pi(Wr,qr,t,n);f.layers=this.layers,this.add(f);const d=new pi(Wr,qr,t,n);d.layers=this.layers,this.add(d);const p=new pi(Wr,qr,t,n);p.layers=this.layers,this.add(p);const m=new pi(Wr,qr,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,d,p]=n;for(const m of n)this.remove(m);if(t===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===vl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class nb extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class p2{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ib.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ib(){this._document.hidden===!1&&this.reset()}class m2 extends px{constructor(t,n,s=1){super(t,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const n=super.clone(t);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(t){const n=super.toJSON(t);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}const mv=new je;class g2{constructor(t,n,s=0,l=1/0){this.ray=new Ru(t,n),this.near=s,this.far=l,this.camera=null,this.layers=new Up,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):be("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return mv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mv),this}intersectObject(t,n=!0,s=[]){return gp(t,this,s,n),s.sort(gv),s}intersectObjects(t,n=!0,s=[]){for(let l=0,c=t.length;l<c;l++)gp(t[l],this,s,n);return s.sort(gv),s}}function gv(r,t){return r.distance-t.distance}function gp(r,t,n,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)gp(c[f],t,n,!0)}}class _v{constructor(t=1,n=0,s=0){this.radius=t,this.phi=n,this.theta=s}set(t,n,s){return this.radius=t,this.phi=n,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ue(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,s){return this.radius=Math.sqrt(t*t+n*n+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ue(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const kp=class kp{constructor(t,n,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let s=0;s<4;s++)this.elements[s]=t[s+n];return this}set(t,n,s,l){const c=this.elements;return c[0]=t,c[2]=n,c[1]=s,c[3]=l,this}};kp.prototype.isMatrix2=!0;let vv=kp;class ab extends ys{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Qt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function xv(r,t,n,s){const l=sb(s);switch(n){case sx:return r*t;case ox:return r*t/l.components*l.byteLength;case bp:return r*t/l.components*l.byteLength;case Zs:return r*t*2/l.components*l.byteLength;case Tp:return r*t*2/l.components*l.byteLength;case rx:return r*t*3/l.components*l.byteLength;case zi:return r*t*4/l.components*l.byteLength;case Ap:return r*t*4/l.components*l.byteLength;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fu:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fd:case Gd:return Math.max(r,16)*Math.max(t,8)/4;case Bd:case Hd:return Math.max(r,8)*Math.max(t,8)/2;case Vd:case Xd:case Wd:case qd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kd:case pu:case Yd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case tp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ep:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case np:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ip:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case sp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case rp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case op:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case lp:case cp:case up:return Math.ceil(r/4)*Math.ceil(t/4)*16;case fp:case hp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case mu:case dp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sb(r){switch(r){case mi:case ex:return{byteLength:1,components:1};case gl:case nx:case Da:return{byteLength:2,components:1};case Mp:case Ep:return{byteLength:2,components:4};case Ji:case Sp:case ji:return{byteLength:4,components:1};case ix:case ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);function wx(){let r=null,t=!1,n=null,s=null;function l(c,f){n(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function rb(r){const t=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const _=p.array,v=p.updateRanges;if(r.bindBuffer(m,d),v.length===0)r.bufferSubData(m,0,_);else{v.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<v.length;y++){const T=v[g],w=v[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,v[g]=w)}v.length=g+1;for(let y=0,T=v.length;y<T;y++){const w=v[y];r.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Db=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$b=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ST=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:ob,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:fb,alphatest_pars_fragment:hb,aomap_fragment:db,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:vb,bsdfs:xb,iridescence_fragment:yb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:Eb,clipping_planes_pars_vertex:bb,clipping_planes_vertex:Tb,color_fragment:Ab,color_pars_fragment:Rb,color_pars_vertex:Cb,color_vertex:wb,common:Db,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Lb,displacementmap_pars_vertex:Nb,displacementmap_vertex:Ob,emissivemap_fragment:Pb,emissivemap_pars_fragment:zb,colorspace_fragment:Ib,colorspace_pars_fragment:Bb,envmap_fragment:Fb,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Gb,envmap_pars_vertex:Vb,envmap_physical_pars_fragment:$b,envmap_vertex:Xb,fog_vertex:kb,fog_pars_vertex:Wb,fog_fragment:qb,fog_pars_fragment:Yb,gradientmap_pars_fragment:jb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Kb,lights_lambert_pars_fragment:Jb,lights_pars_begin:Qb,lights_toon_fragment:t1,lights_toon_pars_fragment:e1,lights_phong_fragment:n1,lights_phong_pars_fragment:i1,lights_physical_fragment:a1,lights_physical_pars_fragment:s1,lights_fragment_begin:r1,lights_fragment_maps:o1,lights_fragment_end:l1,lightprobes_pars_fragment:c1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:d1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:g1,map_particle_pars_fragment:_1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:x1,morphinstance_vertex:y1,morphcolor_vertex:S1,morphnormal_vertex:M1,morphtarget_pars_vertex:E1,morphtarget_vertex:b1,normal_fragment_begin:T1,normal_fragment_maps:A1,normal_pars_fragment:R1,normal_pars_vertex:C1,normal_vertex:w1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:L1,clearcoat_pars_fragment:N1,iridescence_pars_fragment:O1,opaque_fragment:P1,packing:z1,premultiplied_alpha_fragment:I1,project_vertex:B1,dithering_fragment:F1,dithering_pars_fragment:H1,roughnessmap_fragment:G1,roughnessmap_pars_fragment:V1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:k1,shadowmap_vertex:W1,shadowmask_pars_fragment:q1,skinbase_vertex:Y1,skinning_pars_vertex:j1,skinning_vertex:Z1,skinnormal_vertex:K1,specularmap_fragment:J1,specularmap_pars_fragment:Q1,tonemapping_fragment:$1,tonemapping_pars_fragment:tT,transmission_fragment:eT,transmission_pars_fragment:nT,uv_pars_fragment:iT,uv_pars_vertex:aT,uv_vertex:sT,worldpos_vertex:rT,background_vert:oT,background_frag:lT,backgroundCube_vert:cT,backgroundCube_frag:uT,cube_vert:fT,cube_frag:hT,depth_vert:dT,depth_frag:pT,distance_vert:mT,distance_frag:gT,equirect_vert:_T,equirect_frag:vT,linedashed_vert:xT,linedashed_frag:yT,meshbasic_vert:ST,meshbasic_frag:MT,meshlambert_vert:ET,meshlambert_frag:bT,meshmatcap_vert:TT,meshmatcap_frag:AT,meshnormal_vert:RT,meshnormal_frag:CT,meshphong_vert:wT,meshphong_frag:DT,meshphysical_vert:UT,meshphysical_frag:LT,meshtoon_vert:NT,meshtoon_frag:OT,points_vert:PT,points_frag:zT,shadow_vert:IT,shadow_frag:BT,sprite_vert:FT,sprite_frag:HT},Ft={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Yi={basic:{uniforms:Xn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Xn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Xn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Xn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Xn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new te(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Xn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Xn([Ft.points,Ft.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Xn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Xn([Ft.common,Ft.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Xn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Xn([Ft.sprite,Ft.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Xn([Ft.common,Ft.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Xn([Ft.lights,Ft.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Yi.physical={uniforms:Xn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const au={r:0,b:0,g:0},GT=new je,Dx=new re;Dx.set(-1,0,0,0,1,0,0,0,1);function VT(r,t,n,s,l,c){const f=new te(0);let d=l===!0?0:1,p,m,_=null,v=0,g=null;function y(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){const U=C.backgroundBlurriness>0;D=t.get(D,U)}return D}function T(C){let D=!1;const U=y(C);U===null?M(f,d):U&&U.isColor&&(M(U,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,D){const U=y(D);U&&(U.isCubeTexture||U.mapping===Tu)?(m===void 0&&(m=new $i(new Sl(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:no(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=U,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(GT.makeRotationFromEuler(D.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Dx),m.material.toneMapped=Te.getTransfer(U.colorSpace)!==Be,(_!==U||v!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,v=U.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new $i(new wu(2,2),new ta({name:"BackgroundMaterial",uniforms:no(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Te.getTransfer(U.colorSpace)!==Be,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||v!==U.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=U,v=U.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function M(C,D){C.getRGB(au,Rx(r)),n.buffers.color.setClear(au.r,au.g,au.b,D,c)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,D=1){f.set(C),d=D,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(f,d)},render:T,addToRenderList:w,dispose:S}}function XT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(H,Y,ct,ot,Z){let P=!1;const V=v(H,ot,ct,Y);c!==V&&(c=V,m(c.object)),P=y(H,ot,ct,Z),P&&T(H,ot,ct,Z),Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(P||f)&&(f=!1,U(H,Y,ct,ot),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return r.createVertexArray()}function m(H){return r.bindVertexArray(H)}function _(H){return r.deleteVertexArray(H)}function v(H,Y,ct,ot){const Z=ot.wireframe===!0;let P=s[Y.id];P===void 0&&(P={},s[Y.id]=P);const V=H.isInstancedMesh===!0?H.id:0;let rt=P[V];rt===void 0&&(rt={},P[V]=rt);let mt=rt[ct.id];mt===void 0&&(mt={},rt[ct.id]=mt);let St=mt[Z];return St===void 0&&(St=g(p()),mt[Z]=St),St}function g(H){const Y=[],ct=[],ot=[];for(let Z=0;Z<n;Z++)Y[Z]=0,ct[Z]=0,ot[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ct,attributeDivisors:ot,object:H,attributes:{},index:null}}function y(H,Y,ct,ot){const Z=c.attributes,P=Y.attributes;let V=0;const rt=ct.getAttributes();for(const mt in rt)if(rt[mt].location>=0){const z=Z[mt];let Q=P[mt];if(Q===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),z===void 0||z.attribute!==Q||Q&&z.data!==Q.data)return!0;V++}return c.attributesNum!==V||c.index!==ot}function T(H,Y,ct,ot){const Z={},P=Y.attributes;let V=0;const rt=ct.getAttributes();for(const mt in rt)if(rt[mt].location>=0){let z=P[mt];z===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(z=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(z=H.instanceColor));const Q={};Q.attribute=z,z&&z.data&&(Q.data=z.data),Z[mt]=Q,V++}c.attributes=Z,c.attributesNum=V,c.index=ot}function w(){const H=c.newAttributes;for(let Y=0,ct=H.length;Y<ct;Y++)H[Y]=0}function M(H){S(H,0)}function S(H,Y){const ct=c.newAttributes,ot=c.enabledAttributes,Z=c.attributeDivisors;ct[H]=1,ot[H]===0&&(r.enableVertexAttribArray(H),ot[H]=1),Z[H]!==Y&&(r.vertexAttribDivisor(H,Y),Z[H]=Y)}function C(){const H=c.newAttributes,Y=c.enabledAttributes;for(let ct=0,ot=Y.length;ct<ot;ct++)Y[ct]!==H[ct]&&(r.disableVertexAttribArray(ct),Y[ct]=0)}function D(H,Y,ct,ot,Z,P,V){V===!0?r.vertexAttribIPointer(H,Y,ct,Z,P):r.vertexAttribPointer(H,Y,ct,ot,Z,P)}function U(H,Y,ct,ot){w();const Z=ot.attributes,P=ct.getAttributes(),V=Y.defaultAttributeValues;for(const rt in P){const mt=P[rt];if(mt.location>=0){let St=Z[rt];if(St===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(St=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(St=H.instanceColor)),St!==void 0){const z=St.normalized,Q=St.itemSize,vt=t.get(St);if(vt===void 0)continue;const Tt=vt.buffer,wt=vt.type,st=vt.bytesPerElement,xt=wt===r.INT||wt===r.UNSIGNED_INT||St.gpuType===Sp;if(St.isInterleavedBufferAttribute){const Et=St.data,Ht=Et.stride,ee=St.offset;if(Et.isInstancedInterleavedBuffer){for(let Jt=0;Jt<mt.locationSize;Jt++)S(mt.location+Jt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Jt=0;Jt<mt.locationSize;Jt++)M(mt.location+Jt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let Jt=0;Jt<mt.locationSize;Jt++)D(mt.location+Jt,Q/mt.locationSize,wt,z,Ht*st,(ee+Q/mt.locationSize*Jt)*st,xt)}else{if(St.isInstancedBufferAttribute){for(let Et=0;Et<mt.locationSize;Et++)S(mt.location+Et,St.meshPerAttribute);H.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Et=0;Et<mt.locationSize;Et++)M(mt.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let Et=0;Et<mt.locationSize;Et++)D(mt.location+Et,Q/mt.locationSize,wt,z,Q*st,Q/mt.locationSize*Et*st,xt)}}else if(V!==void 0){const z=V[rt];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(mt.location,z);break;case 3:r.vertexAttrib3fv(mt.location,z);break;case 4:r.vertexAttrib4fv(mt.location,z);break;default:r.vertexAttrib1fv(mt.location,z)}}}}C()}function F(){O();for(const H in s){const Y=s[H];for(const ct in Y){const ot=Y[ct];for(const Z in ot){const P=ot[Z];for(const V in P)_(P[V].object),delete P[V];delete ot[Z]}}delete s[H]}}function N(H){if(s[H.id]===void 0)return;const Y=s[H.id];for(const ct in Y){const ot=Y[ct];for(const Z in ot){const P=ot[Z];for(const V in P)_(P[V].object),delete P[V];delete ot[Z]}}delete s[H.id]}function I(H){for(const Y in s){const ct=s[Y];for(const ot in ct){const Z=ct[ot];if(Z[H.id]===void 0)continue;const P=Z[H.id];for(const V in P)_(P[V].object),delete P[V];delete Z[H.id]}}}function b(H){for(const Y in s){const ct=s[Y],ot=H.isInstancedMesh===!0?H.id:0,Z=ct[ot];if(Z!==void 0){for(const P in Z){const V=Z[P];for(const rt in V)_(V[rt].object),delete V[rt];delete Z[P]}delete ct[ot],Object.keys(ct).length===0&&delete s[Y]}}}function O(){k(),f=!0,c!==l&&(c=l,m(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function kT(r,t,n){let s;function l(p){s=p}function c(p,m){r.drawArrays(s,p,m),n.update(m,s,1)}function f(p,m,_){_!==0&&(r.drawArraysInstanced(s,p,m,_),n.update(m,s,_))}function d(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,_);let g=0;for(let y=0;y<_;y++)g+=m[y];n.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function WT(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==zi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const b=I===Da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==mi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ji&&!b)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(Qt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:U,maxSamples:F,samples:N}}function qT(r){const t=this;let n=null,s=0,l=!1,c=!1;const f=new ps,d=new re,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,y){const T=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||T===null||T.length===0||c&&!M)c?_(null):m();else{const C=c?0:s,D=C*4;let U=S.clippingState||null;p.value=U,U=_(T,g,D,y);for(let F=0;F!==D;++F)U[F]=n[F];S.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,T){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=p.value,T!==!0||M===null){const S=y+w*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let D=0,U=y;D!==w;++D,U+=4)f.copy(v[D]).applyMatrix4(C,d),f.normal.toArray(M,U),M[U+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const gs=4,yv=[.125,.215,.35,.446,.526,.582],Ws=20,YT=256,ol=new Bp,Sv=new te;let xd=null,yd=0,Sd=0,Md=!1;const jT=new G;class Mv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,l=100,c={}){const{size:f=256,position:d=jT}=c;xd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xd,yd,Sd),this._renderer.xr.enabled=Md,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===js||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Da,format:zi,colorSpace:gu,depthBuffer:!1},l=Ev(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZT(c)),this._blurMaterial=JT(c,t,n),this._ggxMaterial=KT(c,t,n)}return l}_compileMaterial(t){const n=new $i(new Hn,t);this._renderer.compile(n,ol)}_sceneToCubeUV(t,n,s,l,c){const p=new pi(90,1,n,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(Sv),v.toneMapping=Zi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $i(new Sl,new gx({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(Sv),S=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(p.up.set(0,m[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[D],c.y,c.z)):U===1?(p.up.set(0,0,m[D]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[D],c.z)):(p.up.set(0,m[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[D]));const F=this._cubeSize;Yr(l,U*F,D>2?F:0,F,F),v.setRenderTarget(l),S&&v.render(w,p),v.render(t,p)}v.toneMapping=y,v.autoClear=g,t.background=C}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===js||t.mapping===$r;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Yr(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(f,ol)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const p=f.uniforms,m=s/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(m*m-_*_),g=0+m*1.25,y=v*g,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-gs?s-T+gs:0),S=4*(this._cubeSize-w);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=T-n,Yr(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,ol),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-s,Yr(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,ol)}_blur(t,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=m;const g=m.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ws-1),w=c/T,M=isFinite(c)?1+Math.floor(_*w):Ws;M>Ws&&Qt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ws}`);const S=[];let C=0;for(let I=0;I<Ws;++I){const b=I/w,O=Math.exp(-b*b/2);S.push(O),I===0?C+=O:I<M&&(C+=2*O)}for(let I=0;I<S.length;I++)S[I]=S[I]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:D}=this;g.dTheta.value=T,g.mipInt.value=D-s;const U=this._sizeLods[l],F=3*U*(l>D-gs?l-D+gs:0),N=4*(this._cubeSize-U);Yr(n,F,N,3*U,2*U),p.setRenderTarget(n),p.render(v,ol)}}function ZT(r){const t=[],n=[],s=[];let l=r;const c=r-gs+1+yv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let p=1/d;f>r-gs?p=yv[f-r+gs-1]:f===0&&(p=0),n.push(p);const m=1/(d-2),_=-m,v=1+m,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,T=6,w=3,M=2,S=1,C=new Float32Array(w*T*y),D=new Float32Array(M*T*y),U=new Float32Array(S*T*y);for(let N=0;N<y;N++){const I=N%3*2/3-1,b=N>2?0:-1,O=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];C.set(O,w*T*N),D.set(g,M*T*N);const k=[N,N,N,N,N,N];U.set(k,S*T*N)}const F=new Hn;F.setAttribute("position",new gi(C,w)),F.setAttribute("uv",new gi(D,M)),F.setAttribute("faceIndex",new gi(U,S)),s.push(new $i(F,null)),l>gs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function Ev(r,t,n){const s=new Ki(r,t,n);return s.texture.mapping=Tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Yr(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function KT(r,t,n){return new ta({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function JT(r,t,n){const s=new Float32Array(Ws),l=new G(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function bv(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Tv(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ux extends Ki{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new xx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Sl(5,5,5),c=new ta({name:"CubemapFromEquirect",uniforms:no(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ra});c.uniforms.tEquirect.value=n;const f=new $i(l,c),d=n.minFilter;return n.minFilter===qs&&(n.minFilter=Fn),new eb(1,10,this).update(t,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,l);t.setRenderTarget(c)}}function QT(r){let t=new WeakMap,n=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===lu||y===Vh)if(t.has(g)){const T=t.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Ux(T.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",m),d(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,T=y===lu||y===Vh,w=y===js||y===$r;if(T||w){let M=n.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Mv(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return T&&C&&C.height>0||w&&C&&p(C)?(s===null&&(s=new Mv(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===lu?g.mapping=js:y===Vh&&(g.mapping=$r),g}function p(g){let y=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&y++;return y===T}function m(g){const y=g.target;y.removeEventListener("dispose",m);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=n.get(y);T!==void 0&&(n.delete(y),T.dispose())}function v(){t=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function $T(r){const t={};function n(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&mp("WebGLRenderer: "+s+" extension not supported."),l}}}function tA(r,t,n,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,n.memory.geometries++),g}function p(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function m(v){const g=[],y=v.index,T=v.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let D=0,U=C.length;D<U;D+=3){const F=C[D+0],N=C[D+1],I=C[D+2];g.push(F,N,N,I,I,F)}}else{const C=T.array;w=T.version;for(let D=0,U=C.length/3-1;D<U;D+=3){const F=D+0,N=D+1,I=D+2;g.push(F,N,N,I,I,F)}}const M=new(T.count>=65535?dx:hx)(g,1);M.version=w;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function eA(r,t,n){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function p(v,g){r.drawElements(s,g,c,v*f),n.update(g,s,1)}function m(v,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,v*f,y),n.update(g,s,y))}function _(v,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,y);let w=0;for(let M=0;M<y;M++)w+=g[M];n.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function nA(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:be("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function iA(r,t,n){const s=new WeakMap,l=new sn;function c(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let O=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();const y=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let D=0;y===!0&&(D=1),T===!0&&(D=2),w===!0&&(D=3);let U=d.attributes.position.count*D,F=1;U>t.maxTextureSize&&(F=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const N=new Float32Array(U*F*4*v),I=new cx(N,U,F,v);I.type=ji,I.needsUpdate=!0;const b=D*4;for(let k=0;k<v;k++){const H=M[k],Y=S[k],ct=C[k],ot=U*F*4*k;for(let Z=0;Z<H.count;Z++){const P=Z*b;y===!0&&(l.fromBufferAttribute(H,Z),N[ot+P+0]=l.x,N[ot+P+1]=l.y,N[ot+P+2]=l.z,N[ot+P+3]=0),T===!0&&(l.fromBufferAttribute(Y,Z),N[ot+P+4]=l.x,N[ot+P+5]=l.y,N[ot+P+6]=l.z,N[ot+P+7]=0),w===!0&&(l.fromBufferAttribute(ct,Z),N[ot+P+8]=l.x,N[ot+P+9]=l.y,N[ot+P+10]=l.z,N[ot+P+11]=ct.itemSize===4?l.w:1)}}g={count:v,texture:I,size:new zt(U,F)},s.set(d,g),d.addEventListener("dispose",O)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let y=0;for(let w=0;w<m.length;w++)y+=m[w];const T=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function aA(r,t,n,s,l){let c=new WeakMap;function f(m){const _=l.render.frame,v=m.geometry,g=t.get(m,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const y=m.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),s.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:f,dispose:d}}const sA={[Yv]:"LINEAR_TONE_MAPPING",[jv]:"REINHARD_TONE_MAPPING",[Zv]:"CINEON_TONE_MAPPING",[Kv]:"ACES_FILMIC_TONE_MAPPING",[Qv]:"AGX_TONE_MAPPING",[$v]:"NEUTRAL_TONE_MAPPING",[Jv]:"CUSTOM_TONE_MAPPING"};function rA(r,t,n,s,l){const c=new Ki(t,n,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new eo(t,n):void 0}),f=new Ki(t,n,{type:Da,depthBuffer:!1,stencilBuffer:!1}),d=new Hn;d.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Je([0,2,0,0,2,0],2));const p=new XE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new $i(d,p),_=new Bp(-1,1,1,-1,0,1);let v=null,g=null,y=!1,T,w=null,M=[],S=!1;this.setSize=function(C,D){c.setSize(C,D),f.setSize(C,D);for(let U=0;U<M.length;U++){const F=M[U];F.setSize&&F.setSize(C,D)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const D=c.width,U=c.height;for(let F=0;F<M.length;F++){const N=M[F];N.setSize&&N.setSize(D,U)}},this.begin=function(C,D){if(y||C.toneMapping===Zi&&M.length===0)return!1;if(w=D,D!==null){const U=D.width,F=D.height;(c.width!==U||c.height!==F)&&this.setSize(U,F)}return S===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=Zi,!0},this.hasRenderPass=function(){return S},this.end=function(C,D){C.toneMapping=T,y=!0;let U=c,F=f;for(let N=0;N<M.length;N++){const I=M[N];if(I.enabled!==!1&&(I.render(C,F,U,D),I.needsSwap!==!1)){const b=U;U=F,F=b}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,p.defines={},Te.getTransfer(v)===Be&&(p.defines.SRGB_TRANSFER="");const N=sA[g];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(w),C.render(m,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),d.dispose(),p.dispose()}}const Lx=new Rn,_p=new eo(1,1),Nx=new cx,Ox=new nE,Px=new xx,Av=[],Rv=[],Cv=new Float32Array(16),wv=new Float32Array(9),Dv=new Float32Array(4);function io(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=Av[l];if(c===void 0&&(c=new Float32Array(l),Av[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=n,r[f].toArray(c,d)}return c}function En(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function bn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function Uu(r,t){let n=Rv[t];n===void 0&&(n=new Int32Array(t),Rv[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function oA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function lA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2fv(this.addr,t),bn(n,t)}}function cA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(En(n,t))return;r.uniform3fv(this.addr,t),bn(n,t)}}function uA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4fv(this.addr,t),bn(n,t)}}function fA(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(En(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(En(n,s))return;Dv.set(s),r.uniformMatrix2fv(this.addr,!1,Dv),bn(n,s)}}function hA(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(En(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(En(n,s))return;wv.set(s),r.uniformMatrix3fv(this.addr,!1,wv),bn(n,s)}}function dA(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(En(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(En(n,s))return;Cv.set(s),r.uniformMatrix4fv(this.addr,!1,Cv),bn(n,s)}}function pA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function mA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2iv(this.addr,t),bn(n,t)}}function gA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;r.uniform3iv(this.addr,t),bn(n,t)}}function _A(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4iv(this.addr,t),bn(n,t)}}function vA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function xA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2uiv(this.addr,t),bn(n,t)}}function yA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;r.uniform3uiv(this.addr,t),bn(n,t)}}function SA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4uiv(this.addr,t),bn(n,t)}}function MA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(_p.compareFunction=n.isReversedDepthBuffer()?Cp:Rp,c=_p):c=Lx,n.setTexture2D(t||c,l)}function EA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||Ox,l)}function bA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||Px,l)}function TA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||Nx,l)}function AA(r){switch(r){case 5126:return oA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return hA;case 35676:return dA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return _A;case 5125:return vA;case 36294:return xA;case 36295:return yA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return TA}}function RA(r,t){r.uniform1fv(this.addr,t)}function CA(r,t){const n=io(t,this.size,2);r.uniform2fv(this.addr,n)}function wA(r,t){const n=io(t,this.size,3);r.uniform3fv(this.addr,n)}function DA(r,t){const n=io(t,this.size,4);r.uniform4fv(this.addr,n)}function UA(r,t){const n=io(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function LA(r,t){const n=io(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function NA(r,t){const n=io(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function OA(r,t){r.uniform1iv(this.addr,t)}function PA(r,t){r.uniform2iv(this.addr,t)}function zA(r,t){r.uniform3iv(this.addr,t)}function IA(r,t){r.uniform4iv(this.addr,t)}function BA(r,t){r.uniform1uiv(this.addr,t)}function FA(r,t){r.uniform2uiv(this.addr,t)}function HA(r,t){r.uniform3uiv(this.addr,t)}function GA(r,t){r.uniform4uiv(this.addr,t)}function VA(r,t,n){const s=this.cache,l=t.length,c=Uu(n,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=_p:f=Lx;for(let d=0;d!==l;++d)n.setTexture2D(t[d]||f,c[d])}function XA(r,t,n){const s=this.cache,l=t.length,c=Uu(n,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||Ox,c[f])}function kA(r,t,n){const s=this.cache,l=t.length,c=Uu(n,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||Px,c[f])}function WA(r,t,n){const s=this.cache,l=t.length,c=Uu(n,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||Nx,c[f])}function qA(r){switch(r){case 5126:return RA;case 35664:return CA;case 35665:return wA;case 35666:return DA;case 35674:return UA;case 35675:return LA;case 35676:return NA;case 5124:case 35670:return OA;case 35667:case 35671:return PA;case 35668:case 35672:return zA;case 35669:case 35673:return IA;case 5125:return BA;case 36294:return FA;case 36295:return HA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return WA}}class YA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=AA(n.type)}}class jA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qA(n.type)}}class ZA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,n[d.id],s)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function Uv(r,t){r.seq.push(t),r.map[t.id]=t}function KA(r,t,n){const s=r.name,l=s.length;for(Ed.lastIndex=0;;){const c=Ed.exec(s),f=Ed.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){Uv(n,m===void 0?new YA(d,r,t):new jA(d,r,t));break}else{let v=n.map[d];v===void 0&&(v=new ZA(d),Uv(n,v)),n=v}}}class du{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(n,f),p=t.getUniformLocation(n,d.name);KA(d,p,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,f=n.length;c!==f;++c){const d=n[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&s.push(f)}return s}}function Lv(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const JA=37297;let QA=0;function $A(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${n[f]}`)}return s.join(`
`)}const Nv=new re;function tR(r){Te._getMatrix(Nv,Te.workingColorSpace,r);const t=`mat3( ${Nv.elements.map(n=>n.toFixed(4))} )`;switch(Te.getTransfer(r)){case _u:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ov(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+$A(r.getShaderSource(t),d)}else return c}function eR(r,t){const n=tR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const nR={[Yv]:"Linear",[jv]:"Reinhard",[Zv]:"Cineon",[Kv]:"ACESFilmic",[Qv]:"AgX",[$v]:"Neutral",[Jv]:"Custom"};function iR(r,t){const n=nR[t];return n===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const su=new G;function aR(){Te.getLuminanceCoefficients(su);const r=su.x.toFixed(4),t=su.y.toFixed(4),n=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function rR(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function oR(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return n}function fl(r){return r!==""}function Pv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lR=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(r){return r.replace(lR,uR)}const cR=new Map;function uR(r,t){let n=de[t];if(n===void 0){const s=cR.get(t);if(s!==void 0)n=de[s],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return vp(n)}const fR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iv(r){return r.replace(fR,hR)}function hR(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Bv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const dR={[ou]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function pR(r){return dR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mR={[js]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE_UV"};function gR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":mR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const _R={[$r]:"ENVMAP_MODE_REFRACTION"};function vR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_R[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xR={[bu]:"ENVMAP_BLENDING_MULTIPLY",[xM]:"ENVMAP_BLENDING_MIX",[yM]:"ENVMAP_BLENDING_ADD"};function yR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":xR[r.combine]||"ENVMAP_BLENDING_NONE"}function SR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function MR(r,t,n,s){const l=r.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=pR(n),m=gR(n),_=vR(n),v=yR(n),g=SR(n),y=sR(n),T=rR(c),w=l.createProgram();let M,S,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(fl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(fl).join(`
`),S.length>0&&(S+=`
`)):(M=[Bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),S=[Bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?de.tonemapping_pars_fragment:"",n.toneMapping!==Zi?iR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,eR("linearToOutputTexel",n.outputColorSpace),aR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fl).join(`
`)),f=vp(f),f=Pv(f,n),f=zv(f,n),d=vp(d),d=Pv(d,n),d=zv(d,n),f=Iv(f),d=Iv(d),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===B_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===B_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=C+M+f,U=C+S+d,F=Lv(l,l.VERTEX_SHADER,D),N=Lv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,F),l.attachShader(w,N),n.index0AttributeName!==void 0?l.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(H){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(w)||"",ct=l.getShaderInfoLog(F)||"",ot=l.getShaderInfoLog(N)||"",Z=Y.trim(),P=ct.trim(),V=ot.trim();let rt=!0,mt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,F,N);else{const St=Ov(l,F,"vertex"),z=Ov(l,N,"fragment");be("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+St+`
`+z)}else Z!==""?Qt("WebGLProgram: Program Info Log:",Z):(P===""||V==="")&&(mt=!1);mt&&(H.diagnostics={runnable:rt,programLog:Z,vertexShader:{log:P,prefix:M},fragmentShader:{log:V,prefix:S}})}l.deleteShader(F),l.deleteShader(N),b=new du(l,w),O=oR(l,w)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let O;this.getAttributes=function(){return O===void 0&&I(this),O};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(w,JA)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=N,this}let ER=0;class bR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new TR(t),n.set(t,s)),s}}class TR{constructor(t){this.id=ER++,this.code=t,this.usedTimes=0}}function AR(r){return r===Zs||r===pu||r===mu}function RR(r,t,n,s,l,c){const f=new Up,d=new bR,p=new Set,m=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return p.add(b),b===0?"uv":`uv${b}`}function w(b,O,k,H,Y,ct){const ot=H.fog,Z=Y.geometry,P=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,V=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,rt=t.get(b.envMap||P,V),mt=rt&&rt.mapping===Tu?rt.image.height:null,St=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&Qt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const z=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Q=z!==void 0?z.length:0;let vt=0;Z.morphAttributes.position!==void 0&&(vt=1),Z.morphAttributes.normal!==void 0&&(vt=2),Z.morphAttributes.color!==void 0&&(vt=3);let Tt,wt,st,xt;if(St){const ne=Yi[St];Tt=ne.vertexShader,wt=ne.fragmentShader}else Tt=b.vertexShader,wt=b.fragmentShader,d.update(b),st=d.getVertexShaderID(b),xt=d.getFragmentShaderID(b);const Et=r.getRenderTarget(),Ht=r.state.buffers.depth.getReversed(),ee=Y.isInstancedMesh===!0,Jt=Y.isBatchedMesh===!0,ke=!!b.map,pe=!!b.matcap,ye=!!rt,Le=!!b.aoMap,fe=!!b.lightMap,ln=!!b.bumpMap,Ye=!!b.normalMap,Cn=!!b.displacementMap,q=!!b.emissiveMap,nn=!!b.metalnessMap,me=!!b.roughnessMap,Fe=b.anisotropy>0,At=b.clearcoat>0,Qe=b.dispersion>0,L=b.iridescence>0,E=b.sheen>0,J=b.transmission>0,gt=Fe&&!!b.anisotropyMap,Mt=At&&!!b.clearcoatMap,Rt=At&&!!b.clearcoatNormalMap,Lt=At&&!!b.clearcoatRoughnessMap,ut=L&&!!b.iridescenceMap,ft=L&&!!b.iridescenceThicknessMap,Nt=E&&!!b.sheenColorMap,Ot=E&&!!b.sheenRoughnessMap,Dt=!!b.specularMap,Ct=!!b.specularColorMap,ie=!!b.specularIntensityMap,ae=J&&!!b.transmissionMap,ge=J&&!!b.thicknessMap,X=!!b.gradientMap,bt=!!b.alphaMap,dt=b.alphaTest>0,Bt=!!b.alphaHash,Ut=!!b.extensions;let yt=Zi;b.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(yt=r.toneMapping);const qt={shaderID:St,shaderType:b.type,shaderName:b.name,vertexShader:Tt,fragmentShader:wt,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Jt,batchingColor:Jt&&Y._colorsTexture!==null,instancing:ee,instancingColor:ee&&Y.instanceColor!==null,instancingMorph:ee&&Y.morphTexture!==null,outputColorSpace:Et===null?r.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:pe,envMap:ye,envMapMode:ye&&rt.mapping,envMapCubeUVHeight:mt,aoMap:Le,lightMap:fe,bumpMap:ln,normalMap:Ye,displacementMap:Cn,emissiveMap:q,normalMapObjectSpace:Ye&&b.normalMapType===EM,normalMapTangentSpace:Ye&&b.normalMapType===vs,packedNormalMap:Ye&&b.normalMapType===vs&&AR(b.normalMap.format),metalnessMap:nn,roughnessMap:me,anisotropy:Fe,anisotropyMap:gt,clearcoat:At,clearcoatMap:Mt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Lt,dispersion:Qe,iridescence:L,iridescenceMap:ut,iridescenceThicknessMap:ft,sheen:E,sheenColorMap:Nt,sheenRoughnessMap:Ot,specularMap:Dt,specularColorMap:Ct,specularIntensityMap:ie,transmission:J,transmissionMap:ae,thicknessMap:ge,gradientMap:X,opaque:b.transparent===!1&&b.blending===Kr&&b.alphaToCoverage===!1,alphaMap:bt,alphaTest:dt,alphaHash:Bt,combine:b.combine,mapUv:ke&&T(b.map.channel),aoMapUv:Le&&T(b.aoMap.channel),lightMapUv:fe&&T(b.lightMap.channel),bumpMapUv:ln&&T(b.bumpMap.channel),normalMapUv:Ye&&T(b.normalMap.channel),displacementMapUv:Cn&&T(b.displacementMap.channel),emissiveMapUv:q&&T(b.emissiveMap.channel),metalnessMapUv:nn&&T(b.metalnessMap.channel),roughnessMapUv:me&&T(b.roughnessMap.channel),anisotropyMapUv:gt&&T(b.anisotropyMap.channel),clearcoatMapUv:Mt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(b.sheenRoughnessMap.channel),specularMapUv:Dt&&T(b.specularMap.channel),specularColorMapUv:Ct&&T(b.specularColorMap.channel),specularIntensityMapUv:ie&&T(b.specularIntensityMap.channel),transmissionMapUv:ae&&T(b.transmissionMap.channel),thicknessMapUv:ge&&T(b.thicknessMap.channel),alphaMapUv:bt&&T(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ye||Fe),vertexNormals:!!Z.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!Z.attributes.uv&&(ke||bt),fog:!!ot,useFog:b.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||Z.attributes.normal===void 0&&Ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:Y.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:vt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ct.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:yt,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&Te.getTransfer(b.map.colorSpace)===Be,decodeVideoTextureEmissive:q&&b.emissiveMap.isVideoTexture===!0&&Te.getTransfer(b.emissiveMap.colorSpace)===Be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ba,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function M(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)O.push(k),O.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(S(O,b),C(O,b),O.push(r.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function S(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function C(b,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),b.push(f.mask)}function D(b){const O=y[b.type];let k;if(O){const H=Yi[O];k=HE.clone(H.uniforms)}else k=b.uniforms;return k}function U(b,O){let k=_.get(O);return k!==void 0?++k.usedTimes:(k=new MR(r,O,b,l),m.push(k),_.set(O,k)),k}function F(b){if(--b.usedTimes===0){const O=m.indexOf(b);m[O]=m[m.length-1],m.pop(),_.delete(b.cacheKey),b.destroy()}}function N(b){d.remove(b)}function I(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:D,acquireProgram:U,releaseProgram:F,releaseShaderCache:N,programs:m,dispose:I}}function CR(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function wR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Fv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Hv(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,T,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=f(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function p(g,y,T,w,M,S){const C=d(g,y,T,w,M,S);T.transmission>0?s.push(C):T.transparent===!0?l.push(C):n.push(C)}function m(g,y,T,w,M,S){const C=d(g,y,T,w,M,S);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):n.unshift(C)}function _(g,y){n.length>1&&n.sort(g||wR),s.length>1&&s.sort(y||Fv),l.length>1&&l.sort(y||Fv)}function v(){for(let g=t,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:v,sort:_}}function DR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Hv,r.set(s,[f])):l>=c.length?(f=new Hv,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function UR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new G,color:new te};break;case"SpotLight":n={position:new G,direction:new G,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new te,groundColor:new te};break;case"RectAreaLight":n={color:new te,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=n,n}}}function LR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let NR=0;function OR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function PR(r){const t=new UR,n=LR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new G);const l=new G,c=new je,f=new je;function d(m){let _=0,v=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,T=0,w=0,M=0,S=0,C=0,D=0,U=0,F=0,N=0,I=0;m.sort(OR);for(let O=0,k=m.length;O<k;O++){const H=m[O],Y=H.color,ct=H.intensity,ot=H.distance;let Z=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Zs?Z=H.shadow.map.texture:Z=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=Y.r*ct,v+=Y.g*ct,g+=Y.b*ct;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],ct);I++}else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,rt=n.get(H);rt.shadowIntensity=V.intensity,rt.shadowBias=V.bias,rt.shadowNormalBias=V.normalBias,rt.shadowRadius=V.radius,rt.shadowMapSize=V.mapSize,s.directionalShadow[y]=rt,s.directionalShadowMap[y]=Z,s.directionalShadowMatrix[y]=H.shadow.matrix,C++}s.directional[y]=P,y++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(Y).multiplyScalar(ct),P.distance=ot,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[w]=P;const V=H.shadow;if(H.map&&(s.spotLightMap[F]=H.map,F++,V.updateMatrices(H),H.castShadow&&N++),s.spotLightMatrix[w]=V.matrix,H.castShadow){const rt=n.get(H);rt.shadowIntensity=V.intensity,rt.shadowBias=V.bias,rt.shadowNormalBias=V.normalBias,rt.shadowRadius=V.radius,rt.shadowMapSize=V.mapSize,s.spotShadow[w]=rt,s.spotShadowMap[w]=Z,U++}w++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(Y).multiplyScalar(ct),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=P,M++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const V=H.shadow,rt=n.get(H);rt.shadowIntensity=V.intensity,rt.shadowBias=V.bias,rt.shadowNormalBias=V.normalBias,rt.shadowRadius=V.radius,rt.shadowMapSize=V.mapSize,rt.shadowCameraNear=V.camera.near,rt.shadowCameraFar=V.camera.far,s.pointShadow[T]=rt,s.pointShadowMap[T]=Z,s.pointShadowMatrix[T]=H.shadow.matrix,D++}s.point[T]=P,T++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(ct),P.groundColor.copy(H.groundColor).multiplyScalar(ct),s.hemi[S]=P,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==C||b.numPointShadows!==D||b.numSpotShadows!==U||b.numSpotMaps!==F||b.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+F-N,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=I,b.directionalLength=y,b.pointLength=T,b.spotLength=w,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=C,b.numPointShadows=D,b.numSpotShadows=U,b.numSpotMaps=F,b.numLightProbes=I,s.version=NR++)}function p(m,_){let v=0,g=0,y=0,T=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=m.length;S<C;S++){const D=m[S];if(D.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(D.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),f.identity(),c.copy(D.matrixWorld),c.premultiply(M),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),T++}else if(D.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),g++}else if(D.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(M),w++}}}return{setup:d,setupView:p,state:s}}function Gv(r){const t=new PR(r),n=[],s=[],l=[];function c(g){v.camera=g,n.length=0,s.length=0,l.length=0}function f(g){n.push(g)}function d(g){s.push(g)}function p(g){l.push(g)}function m(){t.setup(n)}function _(g){t.setupView(n,g)}const v={lightsArray:n,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:m,setupLightsView:_,pushLight:f,pushShadow:d,pushLightProbeGrid:p}}function zR(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Gv(r),t.set(l,[d])):c>=f.length?(d=new Gv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:n,dispose:s}}const IR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FR=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],HR=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Vv=new je,ll=new G,bd=new G;function GR(r,t,n){let s=new Cu;const l=new zt,c=new zt,f=new sn,d=new qE,p=new YE,m={},_=n.maxTextureSize,v={[_s]:Qn,[Qn]:_s,[ba]:ba},g=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:IR,fragmentShader:BR}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new Hn;T.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new $i(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let S=this.type;this.render=function(N,I,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===tM&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ou);const O=r.getRenderTarget(),k=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Ra),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ct=S!==this.type;ct&&I.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(Z=>Z.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,Z=N.length;ot<Z;ot++){const P=N[ot],V=P.shadow;if(V===void 0){Qt("WebGLShadowMap:",P,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const rt=V.getFrameExtents();l.multiply(rt),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/rt.x),l.x=c.x*rt.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/rt.y),l.y=c.y*rt.y,V.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=mt,V.map===null||ct===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===cl){if(P.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ki(l.x,l.y,{format:Zs,type:Da,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),V.map.texture.name=P.name+".shadowMap",V.map.depthTexture=new eo(l.x,l.y,ji),V.map.depthTexture.name=P.name+".shadowMapDepth",V.map.depthTexture.format=Ua,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Mn,V.map.depthTexture.magFilter=Mn}else P.isPointLight?(V.map=new Ux(l.x),V.map.depthTexture=new ME(l.x,Ji)):(V.map=new Ki(l.x,l.y),V.map.depthTexture=new eo(l.x,l.y,Ji)),V.map.depthTexture.name=P.name+".shadowMap",V.map.depthTexture.format=Ua,this.type===ou?(V.map.depthTexture.compareFunction=mt?Cp:Rp,V.map.depthTexture.minFilter=Fn,V.map.depthTexture.magFilter=Fn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Mn,V.map.depthTexture.magFilter=Mn);V.camera.updateProjectionMatrix()}const St=V.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<St;z++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,z),r.clear();else{z===0&&(r.setRenderTarget(V.map),r.clear());const Q=V.getViewport(z);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),Y.viewport(f)}if(P.isPointLight){const Q=V.camera,vt=V.matrix,Tt=P.distance||Q.far;Tt!==Q.far&&(Q.far=Tt,Q.updateProjectionMatrix()),ll.setFromMatrixPosition(P.matrixWorld),Q.position.copy(ll),bd.copy(Q.position),bd.add(FR[z]),Q.up.copy(HR[z]),Q.lookAt(bd),Q.updateMatrixWorld(),vt.makeTranslation(-ll.x,-ll.y,-ll.z),Vv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Vv,Q.coordinateSystem,Q.reversedDepth)}else V.updateMatrices(P);s=V.getFrustum(),U(I,b,V.camera,P,this.type)}V.isPointLightShadow!==!0&&this.type===cl&&C(V,b),V.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(O,k,H)};function C(N,I){const b=t.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ki(l.x,l.y,{format:Zs,type:Da})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(I,null,b,g,w,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(I,null,b,y,w,null)}function D(N,I,b,O){let k=null;const H=b.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)k=H;else if(k=b.isPointLight===!0?p:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Y=k.uuid,ct=I.uuid;let ot=m[Y];ot===void 0&&(ot={},m[Y]=ot);let Z=ot[ct];Z===void 0&&(Z=k.clone(),ot[ct]=Z,I.addEventListener("dispose",F)),k=Z}if(k.visible=I.visible,k.wireframe=I.wireframe,O===cl?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:v[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=r.properties.get(k);Y.light=b}return k}function U(N,I,b,O,k){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&k===cl)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,N.matrixWorld);const ct=t.update(N),ot=N.material;if(Array.isArray(ot)){const Z=ct.groups;for(let P=0,V=Z.length;P<V;P++){const rt=Z[P],mt=ot[rt.materialIndex];if(mt&&mt.visible){const St=D(N,mt,O,k);N.onBeforeShadow(r,N,I,b,ct,St,rt),r.renderBufferDirect(b,null,ct,St,N,rt),N.onAfterShadow(r,N,I,b,ct,St,rt)}}}else if(ot.visible){const Z=D(N,ot,O,k);N.onBeforeShadow(r,N,I,b,ct,Z,null),r.renderBufferDirect(b,null,ct,Z,N,null),N.onAfterShadow(r,N,I,b,ct,Z,null)}}const Y=N.children;for(let ct=0,ot=Y.length;ct<ot;ct++)U(Y[ct],I,b,O,k)}function F(N){N.target.removeEventListener("dispose",F);for(const b in m){const O=m[b],k=N.target.uuid;k in O&&(O[k].dispose(),delete O[k])}}}function VR(r,t){function n(){let X=!1;const bt=new sn;let dt=null;const Bt=new sn(0,0,0,0);return{setMask:function(Ut){dt!==Ut&&!X&&(r.colorMask(Ut,Ut,Ut,Ut),dt=Ut)},setLocked:function(Ut){X=Ut},setClear:function(Ut,yt,qt,ne,an){an===!0&&(Ut*=ne,yt*=ne,qt*=ne),bt.set(Ut,yt,qt,ne),Bt.equals(bt)===!1&&(r.clearColor(Ut,yt,qt,ne),Bt.copy(bt))},reset:function(){X=!1,dt=null,Bt.set(-1,0,0,0)}}}function s(){let X=!1,bt=!1,dt=null,Bt=null,Ut=null;return{setReversed:function(yt){if(bt!==yt){const qt=t.get("EXT_clip_control");yt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),bt=yt;const ne=Ut;Ut=null,this.setClear(ne)}},getReversed:function(){return bt},setTest:function(yt){yt?Et(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(yt){dt!==yt&&!X&&(r.depthMask(yt),dt=yt)},setFunc:function(yt){if(bt&&(yt=NM[yt]),Bt!==yt){switch(yt){case wd:r.depthFunc(r.NEVER);break;case Dd:r.depthFunc(r.ALWAYS);break;case Ud:r.depthFunc(r.LESS);break;case Qr:r.depthFunc(r.LEQUAL);break;case Ld:r.depthFunc(r.EQUAL);break;case Nd:r.depthFunc(r.GEQUAL);break;case Od:r.depthFunc(r.GREATER);break;case Pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=yt}},setLocked:function(yt){X=yt},setClear:function(yt){Ut!==yt&&(Ut=yt,bt&&(yt=1-yt),r.clearDepth(yt))},reset:function(){X=!1,dt=null,Bt=null,Ut=null,bt=!1}}}function l(){let X=!1,bt=null,dt=null,Bt=null,Ut=null,yt=null,qt=null,ne=null,an=null;return{setTest:function(we){X||(we?Et(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(we){bt!==we&&!X&&(r.stencilMask(we),bt=we)},setFunc:function(we,_i,ti){(dt!==we||Bt!==_i||Ut!==ti)&&(r.stencilFunc(we,_i,ti),dt=we,Bt=_i,Ut=ti)},setOp:function(we,_i,ti){(yt!==we||qt!==_i||ne!==ti)&&(r.stencilOp(we,_i,ti),yt=we,qt=_i,ne=ti)},setLocked:function(we){X=we},setClear:function(we){an!==we&&(r.clearStencil(we),an=we)},reset:function(){X=!1,bt=null,dt=null,Bt=null,Ut=null,yt=null,qt=null,ne=null,an=null}}}const c=new n,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},v={},g={},y=new WeakMap,T=[],w=null,M=!1,S=null,C=null,D=null,U=null,F=null,N=null,I=null,b=new te(0,0,0),O=0,k=!1,H=null,Y=null,ct=null,ot=null,Z=null;const P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,rt=0;const mt=r.getParameter(r.VERSION);mt.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(mt)[1]),V=rt>=1):mt.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),V=rt>=2);let St=null,z={};const Q=r.getParameter(r.SCISSOR_BOX),vt=r.getParameter(r.VIEWPORT),Tt=new sn().fromArray(Q),wt=new sn().fromArray(vt);function st(X,bt,dt,Bt){const Ut=new Uint8Array(4),yt=r.createTexture();r.bindTexture(X,yt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<dt;qt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Ut):r.texImage2D(bt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ut);return yt}const xt={};xt[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Et(r.DEPTH_TEST),f.setFunc(Qr),ln(!1),Ye(N_),Et(r.CULL_FACE),Le(Ra);function Et(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Ht(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function ee(X,bt){return g[X]!==bt?(r.bindFramebuffer(X,bt),g[X]=bt,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=bt),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function Jt(X,bt){let dt=T,Bt=!1;if(X){dt=y.get(bt),dt===void 0&&(dt=[],y.set(bt,dt));const Ut=X.textures;if(dt.length!==Ut.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,qt=Ut.length;yt<qt;yt++)dt[yt]=r.COLOR_ATTACHMENT0+yt;dt.length=Ut.length,Bt=!0}}else dt[0]!==r.BACK&&(dt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(dt)}function ke(X){return w!==X?(r.useProgram(X),w=X,!0):!1}const pe={[ks]:r.FUNC_ADD,[nM]:r.FUNC_SUBTRACT,[iM]:r.FUNC_REVERSE_SUBTRACT};pe[aM]=r.MIN,pe[sM]=r.MAX;const ye={[rM]:r.ZERO,[oM]:r.ONE,[lM]:r.SRC_COLOR,[Rd]:r.SRC_ALPHA,[pM]:r.SRC_ALPHA_SATURATE,[hM]:r.DST_COLOR,[uM]:r.DST_ALPHA,[cM]:r.ONE_MINUS_SRC_COLOR,[Cd]:r.ONE_MINUS_SRC_ALPHA,[dM]:r.ONE_MINUS_DST_COLOR,[fM]:r.ONE_MINUS_DST_ALPHA,[mM]:r.CONSTANT_COLOR,[gM]:r.ONE_MINUS_CONSTANT_COLOR,[_M]:r.CONSTANT_ALPHA,[vM]:r.ONE_MINUS_CONSTANT_ALPHA};function Le(X,bt,dt,Bt,Ut,yt,qt,ne,an,we){if(X===Ra){M===!0&&(Ht(r.BLEND),M=!1);return}if(M===!1&&(Et(r.BLEND),M=!0),X!==eM){if(X!==S||we!==k){if((C!==ks||F!==ks)&&(r.blendEquation(r.FUNC_ADD),C=ks,F=ks),we)switch(X){case Kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case O_:r.blendFunc(r.ONE,r.ONE);break;case P_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case z_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:be("WebGLState: Invalid blending: ",X);break}else switch(X){case Kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case O_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case P_:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",X);break}D=null,U=null,N=null,I=null,b.set(0,0,0),O=0,S=X,k=we}return}Ut=Ut||bt,yt=yt||dt,qt=qt||Bt,(bt!==C||Ut!==F)&&(r.blendEquationSeparate(pe[bt],pe[Ut]),C=bt,F=Ut),(dt!==D||Bt!==U||yt!==N||qt!==I)&&(r.blendFuncSeparate(ye[dt],ye[Bt],ye[yt],ye[qt]),D=dt,U=Bt,N=yt,I=qt),(ne.equals(b)===!1||an!==O)&&(r.blendColor(ne.r,ne.g,ne.b,an),b.copy(ne),O=an),S=X,k=!1}function fe(X,bt){X.side===ba?Ht(r.CULL_FACE):Et(r.CULL_FACE);let dt=X.side===Qn;bt&&(dt=!dt),ln(dt),X.blending===Kr&&X.transparent===!1?Le(Ra):Le(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),q(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Et(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function ln(X){H!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),H=X)}function Ye(X){X!==QS?(Et(r.CULL_FACE),X!==Y&&(X===N_?r.cullFace(r.BACK):X===$S?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),Y=X}function Cn(X){X!==ct&&(V&&r.lineWidth(X),ct=X)}function q(X,bt,dt){X?(Et(r.POLYGON_OFFSET_FILL),(ot!==bt||Z!==dt)&&(ot=bt,Z=dt,f.getReversed()&&(bt=-bt),r.polygonOffset(bt,dt))):Ht(r.POLYGON_OFFSET_FILL)}function nn(X){X?Et(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function me(X){X===void 0&&(X=r.TEXTURE0+P-1),St!==X&&(r.activeTexture(X),St=X)}function Fe(X,bt,dt){dt===void 0&&(St===null?dt=r.TEXTURE0+P-1:dt=St);let Bt=z[dt];Bt===void 0&&(Bt={type:void 0,texture:void 0},z[dt]=Bt),(Bt.type!==X||Bt.texture!==bt)&&(St!==dt&&(r.activeTexture(dt),St=dt),r.bindTexture(X,bt||xt[X]),Bt.type=X,Bt.texture=bt)}function At(){const X=z[St];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function J(){try{r.texSubImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function gt(){try{r.compressedTexSubImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function Rt(){try{r.texStorage2D(...arguments)}catch(X){be("WebGLState:",X)}}function Lt(){try{r.texStorage3D(...arguments)}catch(X){be("WebGLState:",X)}}function ut(){try{r.texImage2D(...arguments)}catch(X){be("WebGLState:",X)}}function ft(){try{r.texImage3D(...arguments)}catch(X){be("WebGLState:",X)}}function Nt(X){return v[X]!==void 0?v[X]:r.getParameter(X)}function Ot(X,bt){v[X]!==bt&&(r.pixelStorei(X,bt),v[X]=bt)}function Dt(X){Tt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Tt.copy(X))}function Ct(X){wt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),wt.copy(X))}function ie(X,bt){let dt=m.get(bt);dt===void 0&&(dt=new WeakMap,m.set(bt,dt));let Bt=dt.get(X);Bt===void 0&&(Bt=r.getUniformBlockIndex(bt,X.name),dt.set(X,Bt))}function ae(X,bt){const Bt=m.get(bt).get(X);p.get(bt)!==Bt&&(r.uniformBlockBinding(bt,Bt,X.__bindingPointIndex),p.set(bt,Bt))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},St=null,z={},g={},y=new WeakMap,T=[],w=null,M=!1,S=null,C=null,D=null,U=null,F=null,N=null,I=null,b=new te(0,0,0),O=0,k=!1,H=null,Y=null,ct=null,ot=null,Z=null,Tt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Et,disable:Ht,bindFramebuffer:ee,drawBuffers:Jt,useProgram:ke,setBlending:Le,setMaterial:fe,setFlipSided:ln,setCullFace:Ye,setLineWidth:Cn,setPolygonOffset:q,setScissorTest:nn,activeTexture:me,bindTexture:Fe,unbindTexture:At,compressedTexImage2D:Qe,compressedTexImage3D:L,texImage2D:ut,texImage3D:ft,pixelStorei:Ot,getParameter:Nt,updateUBOMapping:ie,uniformBlockBinding:ae,texStorage2D:Rt,texStorage3D:Lt,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:gt,compressedTexSubImage3D:Mt,scissor:Dt,viewport:Ct,reset:ge}}function XR(r,t,n,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new zt,_=new WeakMap,v=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,E){return T?new OffscreenCanvas(L,E):xl("canvas")}function M(L,E,J){let gt=1;const Mt=Qe(L);if((Mt.width>J||Mt.height>J)&&(gt=J/Math.max(Mt.width,Mt.height)),gt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Rt=Math.floor(gt*Mt.width),Lt=Math.floor(gt*Mt.height);g===void 0&&(g=w(Rt,Lt));const ut=E?w(Rt,Lt):g;return ut.width=Rt,ut.height=Lt,ut.getContext("2d").drawImage(L,0,0,Rt,Lt),Qt("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+Rt+"x"+Lt+")."),ut}else return"data"in L&&Qt("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function S(L){return L.generateMipmaps}function C(L){r.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(L,E,J,gt,Mt,Rt=!1){if(L!==null){if(r[L]!==void 0)return r[L];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Lt;gt&&(Lt=t.get("EXT_texture_norm16"),Lt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=E;if(E===r.RED&&(J===r.FLOAT&&(ut=r.R32F),J===r.HALF_FLOAT&&(ut=r.R16F),J===r.UNSIGNED_BYTE&&(ut=r.R8),J===r.UNSIGNED_SHORT&&Lt&&(ut=Lt.R16_EXT),J===r.SHORT&&Lt&&(ut=Lt.R16_SNORM_EXT)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.R8UI),J===r.UNSIGNED_SHORT&&(ut=r.R16UI),J===r.UNSIGNED_INT&&(ut=r.R32UI),J===r.BYTE&&(ut=r.R8I),J===r.SHORT&&(ut=r.R16I),J===r.INT&&(ut=r.R32I)),E===r.RG&&(J===r.FLOAT&&(ut=r.RG32F),J===r.HALF_FLOAT&&(ut=r.RG16F),J===r.UNSIGNED_BYTE&&(ut=r.RG8),J===r.UNSIGNED_SHORT&&Lt&&(ut=Lt.RG16_EXT),J===r.SHORT&&Lt&&(ut=Lt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.RG8UI),J===r.UNSIGNED_SHORT&&(ut=r.RG16UI),J===r.UNSIGNED_INT&&(ut=r.RG32UI),J===r.BYTE&&(ut=r.RG8I),J===r.SHORT&&(ut=r.RG16I),J===r.INT&&(ut=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),J===r.UNSIGNED_INT&&(ut=r.RGB32UI),J===r.BYTE&&(ut=r.RGB8I),J===r.SHORT&&(ut=r.RGB16I),J===r.INT&&(ut=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),J===r.UNSIGNED_INT&&(ut=r.RGBA32UI),J===r.BYTE&&(ut=r.RGBA8I),J===r.SHORT&&(ut=r.RGBA16I),J===r.INT&&(ut=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_SHORT&&Lt&&(ut=Lt.RGB16_EXT),J===r.SHORT&&Lt&&(ut=Lt.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),E===r.RGBA){const ft=Rt?_u:Te.getTransfer(Mt);J===r.FLOAT&&(ut=r.RGBA32F),J===r.HALF_FLOAT&&(ut=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ut=ft===Be?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Lt&&(ut=Lt.RGBA16_EXT),J===r.SHORT&&Lt&&(ut=Lt.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function F(L,E){let J;return L?E===null||E===Ji||E===_l?J=r.DEPTH24_STENCIL8:E===ji?J=r.DEPTH32F_STENCIL8:E===gl&&(J=r.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ji||E===_l?J=r.DEPTH_COMPONENT24:E===ji?J=r.DEPTH_COMPONENT32F:E===gl&&(J=r.DEPTH_COMPONENT16),J}function N(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mn&&L.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){const E=L.target;E.removeEventListener("dispose",I),O(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function b(L){const E=L.target;E.removeEventListener("dispose",b),H(E)}function O(L){const E=s.get(L);if(E.__webglInit===void 0)return;const J=L.source,gt=y.get(J);if(gt){const Mt=gt[E.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&k(L),Object.keys(gt).length===0&&y.delete(J)}s.remove(L)}function k(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const J=L.source,gt=y.get(J);delete gt[E.__cacheKey],f.memory.textures--}function H(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(E.__webglFramebuffer[gt]))for(let Mt=0;Mt<E.__webglFramebuffer[gt].length;Mt++)r.deleteFramebuffer(E.__webglFramebuffer[gt][Mt]);else r.deleteFramebuffer(E.__webglFramebuffer[gt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[gt])}else{if(Array.isArray(E.__webglFramebuffer))for(let gt=0;gt<E.__webglFramebuffer.length;gt++)r.deleteFramebuffer(E.__webglFramebuffer[gt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let gt=0;gt<E.__webglColorRenderbuffer.length;gt++)E.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[gt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=L.textures;for(let gt=0,Mt=J.length;gt<Mt;gt++){const Rt=s.get(J[gt]);Rt.__webglTexture&&(r.deleteTexture(Rt.__webglTexture),f.memory.textures--),s.remove(J[gt])}s.remove(L)}let Y=0;function ct(){Y=0}function ot(){return Y}function Z(L){Y=L}function P(){const L=Y;return L>=l.maxTextures&&Qt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),Y+=1,L}function V(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function rt(L,E){const J=s.get(L);if(L.isVideoTexture&&Fe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const gt=L.image;if(gt===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(J,L,E);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function mt(L,E){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Ht(J,L,E);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function St(L,E){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Ht(J,L,E);return}n.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function z(L,E){const J=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){ee(J,L,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const Q={[zd]:r.REPEAT,[Aa]:r.CLAMP_TO_EDGE,[Id]:r.MIRRORED_REPEAT},vt={[Mn]:r.NEAREST,[SM]:r.NEAREST_MIPMAP_NEAREST,[Lc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Xh]:r.LINEAR_MIPMAP_NEAREST,[qs]:r.LINEAR_MIPMAP_LINEAR},Tt={[bM]:r.NEVER,[wM]:r.ALWAYS,[TM]:r.LESS,[Rp]:r.LEQUAL,[AM]:r.EQUAL,[Cp]:r.GEQUAL,[RM]:r.GREATER,[CM]:r.NOTEQUAL};function wt(L,E){if(E.type===ji&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Xh||E.magFilter===Lc||E.magFilter===qs||E.minFilter===Fn||E.minFilter===Xh||E.minFilter===Lc||E.minFilter===qs)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Q[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,vt[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==Lc&&E.minFilter!==qs||E.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function st(L,E){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",I));const gt=E.source;let Mt=y.get(gt);Mt===void 0&&(Mt={},y.set(gt,Mt));const Rt=V(E);if(Rt!==L.__cacheKey){Mt[Rt]===void 0&&(Mt[Rt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,J=!0),Mt[Rt].usedTimes++;const Lt=Mt[L.__cacheKey];Lt!==void 0&&(Mt[L.__cacheKey].usedTimes--,Lt.usedTimes===0&&k(E)),L.__cacheKey=Rt,L.__webglTexture=Mt[Rt].texture}return J}function xt(L,E,J){return Math.floor(Math.floor(L/J)/E)}function Et(L,E,J,gt){const Rt=L.updateRanges;if(Rt.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,gt,E.data);else{Rt.sort((Ot,Dt)=>Ot.start-Dt.start);let Lt=0;for(let Ot=1;Ot<Rt.length;Ot++){const Dt=Rt[Lt],Ct=Rt[Ot],ie=Dt.start+Dt.count,ae=xt(Ct.start,E.width,4),ge=xt(Dt.start,E.width,4);Ct.start<=ie+1&&ae===ge&&xt(Ct.start+Ct.count-1,E.width,4)===ae?Dt.count=Math.max(Dt.count,Ct.start+Ct.count-Dt.start):(++Lt,Rt[Lt]=Ct)}Rt.length=Lt+1;const ut=n.getParameter(r.UNPACK_ROW_LENGTH),ft=n.getParameter(r.UNPACK_SKIP_PIXELS),Nt=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ot=0,Dt=Rt.length;Ot<Dt;Ot++){const Ct=Rt[Ot],ie=Math.floor(Ct.start/4),ae=Math.ceil(Ct.count/4),ge=ie%E.width,X=Math.floor(ie/E.width),bt=ae,dt=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,ge,X,bt,dt,J,gt,E.data)}L.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ut),n.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),n.pixelStorei(r.UNPACK_SKIP_ROWS,Nt)}}function Ht(L,E,J){let gt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=r.TEXTURE_3D);const Mt=st(L,E),Rt=E.source;n.bindTexture(gt,L.__webglTexture,r.TEXTURE0+J);const Lt=s.get(Rt);if(Rt.version!==Lt.__version||Mt===!0){if(n.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const dt=Te.getPrimaries(Te.workingColorSpace),Bt=E.colorSpace===ms?null:Te.getPrimaries(E.colorSpace),Ut=E.colorSpace===ms||dt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ft=M(E.image,!1,l.maxTextureSize);ft=At(E,ft);const Nt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type);let Dt=U(E.internalFormat,Nt,Ot,E.normalized,E.colorSpace,E.isVideoTexture);wt(gt,E);let Ct;const ie=E.mipmaps,ae=E.isVideoTexture!==!0,ge=Lt.__version===void 0||Mt===!0,X=Rt.dataReady,bt=N(E,ft);if(E.isDepthTexture)Dt=F(E.format===Ys,E.type),ge&&(ae?n.texStorage2D(r.TEXTURE_2D,1,Dt,ft.width,ft.height):n.texImage2D(r.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Nt,Ot,null));else if(E.isDataTexture)if(ie.length>0){ae&&ge&&n.texStorage2D(r.TEXTURE_2D,bt,Dt,ie[0].width,ie[0].height);for(let dt=0,Bt=ie.length;dt<Bt;dt++)Ct=ie[dt],ae?X&&n.texSubImage2D(r.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,Nt,Ot,Ct.data):n.texImage2D(r.TEXTURE_2D,dt,Dt,Ct.width,Ct.height,0,Nt,Ot,Ct.data);E.generateMipmaps=!1}else ae?(ge&&n.texStorage2D(r.TEXTURE_2D,bt,Dt,ft.width,ft.height),X&&Et(E,ft,Nt,Ot)):n.texImage2D(r.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Nt,Ot,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ae&&ge&&n.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Dt,ie[0].width,ie[0].height,ft.depth);for(let dt=0,Bt=ie.length;dt<Bt;dt++)if(Ct=ie[dt],E.format!==zi)if(Nt!==null)if(ae){if(X)if(E.layerUpdates.size>0){const Ut=xv(Ct.width,Ct.height,E.format,E.type);for(const yt of E.layerUpdates){const qt=Ct.data.subarray(yt*Ut/Ct.data.BYTES_PER_ELEMENT,(yt+1)*Ut/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,yt,Ct.width,Ct.height,1,Nt,qt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Ct.width,Ct.height,ft.depth,Nt,Ct.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,dt,Dt,Ct.width,Ct.height,ft.depth,0,Ct.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?X&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Ct.width,Ct.height,ft.depth,Nt,Ot,Ct.data):n.texImage3D(r.TEXTURE_2D_ARRAY,dt,Dt,Ct.width,Ct.height,ft.depth,0,Nt,Ot,Ct.data)}else{ae&&ge&&n.texStorage2D(r.TEXTURE_2D,bt,Dt,ie[0].width,ie[0].height);for(let dt=0,Bt=ie.length;dt<Bt;dt++)Ct=ie[dt],E.format!==zi?Nt!==null?ae?X&&n.compressedTexSubImage2D(r.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,Nt,Ct.data):n.compressedTexImage2D(r.TEXTURE_2D,dt,Dt,Ct.width,Ct.height,0,Ct.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?X&&n.texSubImage2D(r.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,Nt,Ot,Ct.data):n.texImage2D(r.TEXTURE_2D,dt,Dt,Ct.width,Ct.height,0,Nt,Ot,Ct.data)}else if(E.isDataArrayTexture)if(ae){if(ge&&n.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Dt,ft.width,ft.height,ft.depth),X)if(E.layerUpdates.size>0){const dt=xv(ft.width,ft.height,E.format,E.type);for(const Bt of E.layerUpdates){const Ut=ft.data.subarray(Bt*dt/ft.data.BYTES_PER_ELEMENT,(Bt+1)*dt/ft.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Bt,ft.width,ft.height,1,Nt,Ot,Ut)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Nt,Ot,ft.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,ft.width,ft.height,ft.depth,0,Nt,Ot,ft.data);else if(E.isData3DTexture)ae?(ge&&n.texStorage3D(r.TEXTURE_3D,bt,Dt,ft.width,ft.height,ft.depth),X&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Nt,Ot,ft.data)):n.texImage3D(r.TEXTURE_3D,0,Dt,ft.width,ft.height,ft.depth,0,Nt,Ot,ft.data);else if(E.isFramebufferTexture){if(ge)if(ae)n.texStorage2D(r.TEXTURE_2D,bt,Dt,ft.width,ft.height);else{let dt=ft.width,Bt=ft.height;for(let Ut=0;Ut<bt;Ut++)n.texImage2D(r.TEXTURE_2D,Ut,Dt,dt,Bt,0,Nt,Ot,null),dt>>=1,Bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const dt=r.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),ft.parentNode!==dt){dt.appendChild(ft),v.add(E),dt.onpaint=ne=>{const an=ne.changedElements;for(const we of v)an.includes(we.image)&&(we.needsUpdate=!0)},dt.requestPaint();return}const Bt=0,Ut=r.RGBA,yt=r.RGBA,qt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Bt,Ut,yt,qt,ft),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ie.length>0){if(ae&&ge){const dt=Qe(ie[0]);n.texStorage2D(r.TEXTURE_2D,bt,Dt,dt.width,dt.height)}for(let dt=0,Bt=ie.length;dt<Bt;dt++)Ct=ie[dt],ae?X&&n.texSubImage2D(r.TEXTURE_2D,dt,0,0,Nt,Ot,Ct):n.texImage2D(r.TEXTURE_2D,dt,Dt,Nt,Ot,Ct);E.generateMipmaps=!1}else if(ae){if(ge){const dt=Qe(ft);n.texStorage2D(r.TEXTURE_2D,bt,Dt,dt.width,dt.height)}X&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Nt,Ot,ft)}else n.texImage2D(r.TEXTURE_2D,0,Dt,Nt,Ot,ft);S(E)&&C(gt),Lt.__version=Rt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ee(L,E,J){if(E.image.length!==6)return;const gt=st(L,E),Mt=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+J);const Rt=s.get(Mt);if(Mt.version!==Rt.__version||gt===!0){n.activeTexture(r.TEXTURE0+J);const Lt=Te.getPrimaries(Te.workingColorSpace),ut=E.colorSpace===ms?null:Te.getPrimaries(E.colorSpace),ft=E.colorSpace===ms||Lt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ot=E.image[0]&&E.image[0].isDataTexture,Dt=[];for(let yt=0;yt<6;yt++)!Nt&&!Ot?Dt[yt]=M(E.image[yt],!0,l.maxCubemapSize):Dt[yt]=Ot?E.image[yt].image:E.image[yt],Dt[yt]=At(E,Dt[yt]);const Ct=Dt[0],ie=c.convert(E.format,E.colorSpace),ae=c.convert(E.type),ge=U(E.internalFormat,ie,ae,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,bt=Rt.__version===void 0||gt===!0,dt=Mt.dataReady;let Bt=N(E,Ct);wt(r.TEXTURE_CUBE_MAP,E);let Ut;if(Nt){X&&bt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ge,Ct.width,Ct.height);for(let yt=0;yt<6;yt++){Ut=Dt[yt].mipmaps;for(let qt=0;qt<Ut.length;qt++){const ne=Ut[qt];E.format!==zi?ie!==null?X?dt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,ne.width,ne.height,ie,ne.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,ge,ne.width,ne.height,0,ne.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?dt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,ne.width,ne.height,ie,ae,ne.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,ge,ne.width,ne.height,0,ie,ae,ne.data)}}}else{if(Ut=E.mipmaps,X&&bt){Ut.length>0&&Bt++;const yt=Qe(Dt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ge,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Ot){X?dt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Dt[yt].width,Dt[yt].height,ie,ae,Dt[yt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ge,Dt[yt].width,Dt[yt].height,0,ie,ae,Dt[yt].data);for(let qt=0;qt<Ut.length;qt++){const an=Ut[qt].image[yt].image;X?dt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,an.width,an.height,ie,ae,an.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,ge,an.width,an.height,0,ie,ae,an.data)}}else{X?dt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ie,ae,Dt[yt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ge,ie,ae,Dt[yt]);for(let qt=0;qt<Ut.length;qt++){const ne=Ut[qt];X?dt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,ie,ae,ne.image[yt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,ge,ie,ae,ne.image[yt])}}}S(E)&&C(r.TEXTURE_CUBE_MAP),Rt.__version=Mt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Jt(L,E,J,gt,Mt,Rt){const Lt=c.convert(J.format,J.colorSpace),ut=c.convert(J.type),ft=U(J.internalFormat,Lt,ut,J.normalized,J.colorSpace),Nt=s.get(E),Ot=s.get(J);if(Ot.__renderTarget=E,!Nt.__hasExternalTextures){const Dt=Math.max(1,E.width>>Rt),Ct=Math.max(1,E.height>>Rt);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?n.texImage3D(Mt,Rt,ft,Dt,Ct,E.depth,0,Lt,ut,null):n.texImage2D(Mt,Rt,ft,Dt,Ct,0,Lt,ut,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),me(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,Mt,Ot.__webglTexture,0,nn(E)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,Mt,Ot.__webglTexture,Rt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(L,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const gt=E.depthTexture,Mt=gt&&gt.isDepthTexture?gt.type:null,Rt=F(E.stencilBuffer,Mt),Lt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;me(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nn(E),Rt,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,nn(E),Rt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Rt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Lt,r.RENDERBUFFER,L)}else{const gt=E.textures;for(let Mt=0;Mt<gt.length;Mt++){const Rt=gt[Mt],Lt=c.convert(Rt.format,Rt.colorSpace),ut=c.convert(Rt.type),ft=U(Rt.internalFormat,Lt,ut,Rt.normalized,Rt.colorSpace);me(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nn(E),ft,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,nn(E),ft,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ft,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(L,E,J){const gt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=s.get(E.depthTexture);if(Mt.__renderTarget=E,(!Mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),gt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),Mt.__webglTexture===void 0){Mt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),wt(r.TEXTURE_CUBE_MAP,E.depthTexture);const Nt=c.convert(E.depthTexture.format),Ot=c.convert(E.depthTexture.type);let Dt;E.depthTexture.format===Ua?Dt=r.DEPTH_COMPONENT24:E.depthTexture.format===Ys&&(Dt=r.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Dt,E.width,E.height,0,Nt,Ot,null)}}else rt(E.depthTexture,0);const Rt=Mt.__webglTexture,Lt=nn(E),ut=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,ft=E.depthTexture.format===Ys?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ua)me(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,ut,Rt,0,Lt):r.framebufferTexture2D(r.FRAMEBUFFER,ft,ut,Rt,0);else if(E.depthTexture.format===Ys)me(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,ut,Rt,0,Lt):r.framebufferTexture2D(r.FRAMEBUFFER,ft,ut,Rt,0);else throw new Error("Unknown depthTexture format")}function ye(L){const E=s.get(L),J=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const gt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),gt){const Mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,gt.removeEventListener("dispose",Mt)};gt.addEventListener("dispose",Mt),E.__depthDisposeCallback=Mt}E.__boundDepthTexture=gt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let gt=0;gt<6;gt++)pe(E.__webglFramebuffer[gt],L,gt);else{const gt=L.texture.mipmaps;gt&&gt.length>0?pe(E.__webglFramebuffer[0],L,0):pe(E.__webglFramebuffer,L,0)}else if(J){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]===void 0)E.__webglDepthbuffer[gt]=r.createRenderbuffer(),ke(E.__webglDepthbuffer[gt],L,!1);else{const Mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=E.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,Rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,Rt)}}else{const gt=L.texture.mipmaps;if(gt&&gt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ke(E.__webglDepthbuffer,L,!1);else{const Mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,Rt)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(L,E,J){const gt=s.get(L);E!==void 0&&Jt(gt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ye(L)}function fe(L){const E=L.texture,J=s.get(L),gt=s.get(E);L.addEventListener("dispose",b);const Mt=L.textures,Rt=L.isWebGLCubeRenderTarget===!0,Lt=Mt.length>1;if(Lt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=E.version,f.memory.textures++),Rt){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let ft=0;ft<E.mipmaps.length;ft++)J.__webglFramebuffer[ut][ft]=r.createFramebuffer()}else J.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)J.__webglFramebuffer[ut]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Lt)for(let ut=0,ft=Mt.length;ut<ft;ut++){const Nt=s.get(Mt[ut]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&me(L)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<Mt.length;ut++){const ft=Mt[ut];J.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);const Nt=c.convert(ft.format,ft.colorSpace),Ot=c.convert(ft.type),Dt=U(ft.internalFormat,Nt,Ot,ft.normalized,ft.colorSpace,L.isXRRenderTarget===!0),Ct=nn(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,Dt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Rt){n.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),wt(r.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)Jt(J.__webglFramebuffer[ut][ft],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ft);else Jt(J.__webglFramebuffer[ut],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);S(E)&&C(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Lt){for(let ut=0,ft=Mt.length;ut<ft;ut++){const Nt=Mt[ut],Ot=s.get(Nt);let Dt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Dt,Ot.__webglTexture),wt(Dt,Nt),Jt(J.__webglFramebuffer,L,Nt,r.COLOR_ATTACHMENT0+ut,Dt,0),S(Nt)&&C(Dt)}n.unbindTexture()}else{let ut=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ut=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ut,gt.__webglTexture),wt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)Jt(J.__webglFramebuffer[ft],L,E,r.COLOR_ATTACHMENT0,ut,ft);else Jt(J.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,ut,0);S(E)&&C(ut),n.unbindTexture()}L.depthBuffer&&ye(L)}function ln(L){const E=L.textures;for(let J=0,gt=E.length;J<gt;J++){const Mt=E[J];if(S(Mt)){const Rt=D(L),Lt=s.get(Mt).__webglTexture;n.bindTexture(Rt,Lt),C(Rt),n.unbindTexture()}}}const Ye=[],Cn=[];function q(L){if(L.samples>0){if(me(L)===!1){const E=L.textures,J=L.width,gt=L.height;let Mt=r.COLOR_BUFFER_BIT;const Rt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=s.get(L),ut=E.length>1;if(ut)for(let Nt=0;Nt<E.length;Nt++)n.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const ft=L.texture.mipmaps;ft&&ft.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Nt=0;Nt<E.length;Nt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Nt]);const Ot=s.get(E[Nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ot,0)}r.blitFramebuffer(0,0,J,gt,0,0,J,gt,Mt,r.NEAREST),p===!0&&(Ye.length=0,Cn.length=0,Ye.push(r.COLOR_ATTACHMENT0+Nt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ye.push(Rt),Cn.push(Rt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Cn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ye))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let Nt=0;Nt<E.length;Nt++){n.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Nt]);const Ot=s.get(E[Nt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,Ot,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function nn(L){return Math.min(l.maxSamples,L.samples)}function me(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Fe(L){const E=f.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function At(L,E){const J=L.colorSpace,gt=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==gu&&J!==ms&&(Te.getTransfer(J)===Be?(gt!==zi||Mt!==mi)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",J)),E}function Qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=P,this.resetTextureUnits=ct,this.getTextureUnits=ot,this.setTextureUnits=Z,this.setTexture2D=rt,this.setTexture2DArray=mt,this.setTexture3D=St,this.setTextureCube=z,this.rebindTextures=Le,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kR(r,t){function n(s,l=ms){let c;const f=Te.getTransfer(l);if(s===mi)return r.UNSIGNED_BYTE;if(s===Mp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ep)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ix)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ax)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ex)return r.BYTE;if(s===nx)return r.SHORT;if(s===gl)return r.UNSIGNED_SHORT;if(s===Sp)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Da)return r.HALF_FLOAT;if(s===sx)return r.ALPHA;if(s===rx)return r.RGB;if(s===zi)return r.RGBA;if(s===Ua)return r.DEPTH_COMPONENT;if(s===Ys)return r.DEPTH_STENCIL;if(s===ox)return r.RED;if(s===bp)return r.RED_INTEGER;if(s===Zs)return r.RG;if(s===Tp)return r.RG_INTEGER;if(s===Ap)return r.RGBA_INTEGER;if(s===cu||s===uu||s===fu||s===hu)if(f===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bd||s===Fd||s===Hd||s===Gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vd||s===Xd||s===kd||s===Wd||s===qd||s===pu||s===Yd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Vd||s===Xd)return f===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===kd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Wd)return c.COMPRESSED_R11_EAC;if(s===qd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===pu)return c.COMPRESSED_RG11_EAC;if(s===Yd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===jd||s===Zd||s===Kd||s===Jd||s===Qd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp||s===op)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===jd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tp)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ep)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===np)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ip)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sp)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rp)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===op)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lp||s===cp||s===up)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===lp)return f===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===up)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fp||s===hp||s===mu||s===dp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===fp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===hp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_l?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const WR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new yx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new ta({vertexShader:WR,fragmentShader:qR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $i(new wu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jR extends ys{constructor(t,n){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,_=null,v=null,g=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",M=new YR,S={},C=n.getContextAttributes();let D=null,U=null;const F=[],N=[],I=new zt;let b=null;const O=new pi;O.viewport=new sn;const k=new pi;k.viewport=new sn;const H=[O,k],Y=new nb;let ct=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let xt=F[st];return xt===void 0&&(xt=new Zh,F[st]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(st){let xt=F[st];return xt===void 0&&(xt=new Zh,F[st]=xt),xt.getGripSpace()},this.getHand=function(st){let xt=F[st];return xt===void 0&&(xt=new Zh,F[st]=xt),xt.getHandSpace()};function Z(st){const xt=N.indexOf(st.inputSource);if(xt===-1)return;const Et=F[xt];Et!==void 0&&(Et.update(st.inputSource,st.frame,m||f),Et.dispatchEvent({type:st.type,data:st.inputSource}))}function P(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",V);for(let st=0;st<F.length;st++){const xt=N[st];xt!==null&&(N[st]=null,F[st].disconnect(xt))}ct=null,ot=null,M.reset();for(const st in S)delete S[st];t.setRenderTarget(D),y=null,g=null,v=null,l=null,U=null,wt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){d=st,s.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(st){m=st},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",P),l.addEventListener("inputsourceschange",V),C.xrCompatible!==!0&&await n.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ht=null,ee=null;C.depth&&(ee=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Et=C.stencil?Ys:Ua,Ht=C.stencil?_l:Ji);const Jt={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new Ki(g.textureWidth,g.textureHeight,{format:zi,type:mi,depthTexture:new eo(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Et={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Et),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Ki(y.framebufferWidth,y.framebufferHeight,{format:zi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(st){for(let xt=0;xt<st.removed.length;xt++){const Et=st.removed[xt],Ht=N.indexOf(Et);Ht>=0&&(N[Ht]=null,F[Ht].disconnect(Et))}for(let xt=0;xt<st.added.length;xt++){const Et=st.added[xt];let Ht=N.indexOf(Et);if(Ht===-1){for(let Jt=0;Jt<F.length;Jt++)if(Jt>=N.length){N.push(Et),Ht=Jt;break}else if(N[Jt]===null){N[Jt]=Et,Ht=Jt;break}if(Ht===-1)break}const ee=F[Ht];ee&&ee.connect(Et)}}const rt=new G,mt=new G;function St(st,xt,Et){rt.setFromMatrixPosition(xt.matrixWorld),mt.setFromMatrixPosition(Et.matrixWorld);const Ht=rt.distanceTo(mt),ee=xt.projectionMatrix.elements,Jt=Et.projectionMatrix.elements,ke=ee[14]/(ee[10]-1),pe=ee[14]/(ee[10]+1),ye=(ee[9]+1)/ee[5],Le=(ee[9]-1)/ee[5],fe=(ee[8]-1)/ee[0],ln=(Jt[8]+1)/Jt[0],Ye=ke*fe,Cn=ke*ln,q=Ht/(-fe+ln),nn=q*-fe;if(xt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(nn),st.translateZ(q),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),ee[10]===-1)st.projectionMatrix.copy(xt.projectionMatrix),st.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const me=ke+q,Fe=pe+q,At=Ye-nn,Qe=Cn+(Ht-nn),L=ye*pe/Fe*me,E=Le*pe/Fe*me;st.projectionMatrix.makePerspective(At,Qe,L,E,me,Fe),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function z(st,xt){xt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(xt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let xt=st.near,Et=st.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(Et=M.depthFar)),Y.near=k.near=O.near=xt,Y.far=k.far=O.far=Et,(ct!==Y.near||ot!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ct=Y.near,ot=Y.far),Y.layers.mask=st.layers.mask|6,O.layers.mask=Y.layers.mask&-5,k.layers.mask=Y.layers.mask&-3;const Ht=st.parent,ee=Y.cameras;z(Y,Ht);for(let Jt=0;Jt<ee.length;Jt++)z(ee[Jt],Ht);ee.length===2?St(Y,O,k):Y.projectionMatrix.copy(O.projectionMatrix),Q(st,Y,Ht)};function Q(st,xt,Et){Et===null?st.matrix.copy(xt.matrixWorld):(st.matrix.copy(Et.matrixWorld),st.matrix.invert(),st.matrix.multiply(xt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(xt.projectionMatrix),st.projectionMatrixInverse.copy(xt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=to*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&y===null))return p},this.setFoveation=function(st){p=st,g!==null&&(g.fixedFoveation=st),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(st){return S[st]};let vt=null;function Tt(st,xt){if(_=xt.getViewerPose(m||f),T=xt,_!==null){const Et=_.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Ht=!1;Et.length!==Y.cameras.length&&(Y.cameras.length=0,Ht=!0);for(let pe=0;pe<Et.length;pe++){const ye=Et[pe];let Le=null;if(y!==null)Le=y.getViewport(ye);else{const ln=v.getViewSubImage(g,ye);Le=ln.viewport,pe===0&&(t.setRenderTargetTextures(U,ln.colorTexture,ln.depthStencilTexture),t.setRenderTarget(U))}let fe=H[pe];fe===void 0&&(fe=new pi,fe.layers.enable(pe),fe.viewport=new sn,H[pe]=fe),fe.matrix.fromArray(ye.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ye.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Le.x,Le.y,Le.width,Le.height),pe===0&&(Y.matrix.copy(fe.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ht===!0&&Y.cameras.push(fe)}const ee=l.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const pe=v.getDepthInformation(Et[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(ee&&ee.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let pe=0;pe<Et.length;pe++){const ye=Et[pe].camera;if(ye){let Le=S[ye];Le||(Le=new yx,S[ye]=Le);const fe=v.getCameraImage(ye);Le.sourceTexture=fe}}}}for(let Et=0;Et<F.length;Et++){const Ht=N[Et],ee=F[Et];Ht!==null&&ee!==void 0&&ee.update(Ht,xt,m||f)}vt&&vt(st,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),T=null}const wt=new wx;wt.setAnimationLoop(Tt),this.setAnimationLoop=function(st){vt=st},this.dispose=function(){}}}const ZR=new je,zx=new re;zx.set(-1,0,0,0,1,0,0,0,1);function KR(r,t){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Rx(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,D,U){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,U)):S.isMeshMatcapMaterial?(c(M,S),T(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,C,D):S.isSpriteMaterial?m(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),D=C.envMap,U=C.envMapRotation;D&&(M.envMap.value=D,M.envMapRotation.value.setFromMatrix4(ZR.makeRotationFromEuler(U)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(zx),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,C,D){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=D*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function JR(r,t,n,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,D){const U=D.program;s.uniformBlockBinding(C,U)}function m(C,D){let U=l[C.id];U===void 0&&(T(C),U=_(C),l[C.id]=U,C.addEventListener("dispose",M));const F=D.program;s.updateUBOMapping(C,F);const N=t.render.frame;c[C.id]!==N&&(g(C),c[C.id]=N)}function _(C){const D=v();C.__bindingPointIndex=D;const U=r.createBuffer(),F=C.__size,N=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,U),U}function v(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const D=l[C.id],U=C.uniforms,F=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let N=0,I=U.length;N<I;N++){const b=Array.isArray(U[N])?U[N]:[U[N]];for(let O=0,k=b.length;O<k;O++){const H=b[O];if(y(H,N,O,F)===!0){const Y=H.__offset,ct=Array.isArray(H.value)?H.value:[H.value];let ot=0;for(let Z=0;Z<ct.length;Z++){const P=ct[Z],V=w(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Y+ot,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):ArrayBuffer.isView(P)?H.__data.set(new P.constructor(P.buffer,P.byteOffset,H.__data.length)):(P.toArray(H.__data,ot),ot+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,D,U,F){const N=C.value,I=D+"_"+U;if(F[I]===void 0)return typeof N=="number"||typeof N=="boolean"?F[I]=N:ArrayBuffer.isView(N)?F[I]=N.slice():F[I]=N.clone(),!0;{const b=F[I];if(typeof N=="number"||typeof N=="boolean"){if(b!==N)return F[I]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(b.equals(N)===!1)return b.copy(N),!0}}return!1}function T(C){const D=C.uniforms;let U=0;const F=16;for(let I=0,b=D.length;I<b;I++){const O=Array.isArray(D[I])?D[I]:[D[I]];for(let k=0,H=O.length;k<H;k++){const Y=O[k],ct=Array.isArray(Y.value)?Y.value:[Y.value];for(let ot=0,Z=ct.length;ot<Z;ot++){const P=ct[ot],V=w(P),rt=U%F,mt=rt%V.boundary,St=rt+mt;U+=mt,St!==0&&F-St<V.storage&&(U+=F-St),Y.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=V.storage}}}const N=U%F;return N>0&&(U+=F-N),C.__size=U,C.__cache={},this}function w(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",C),D}function M(C){const D=C.target;D.removeEventListener("dispose",M);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:p,update:m,dispose:S}}const QR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function $R(){return qi===null&&(qi=new _E(QR,16,16,Zs,Da),qi.name="DFG_LUT",qi.minFilter=Fn,qi.magFilter=Fn,qi.wrapS=Aa,qi.wrapT=Aa,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class _2{constructor(t={}){const{canvas:n=UM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=mi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const w=y,M=new Set([Ap,Tp,bp]),S=new Set([mi,Ji,gl,_l,Mp,Ep]),C=new Uint32Array(4),D=new Int32Array(4),U=new G;let F=null,N=null;const I=[],b=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let H=!1,Y=null;this._outputColorSpace=di;let ct=0,ot=0,Z=null,P=-1,V=null;const rt=new sn,mt=new sn;let St=null;const z=new te(0);let Q=0,vt=n.width,Tt=n.height,wt=1,st=null,xt=null;const Et=new sn(0,0,vt,Tt),Ht=new sn(0,0,vt,Tt);let ee=!1;const Jt=new Cu;let ke=!1,pe=!1;const ye=new je,Le=new G,fe=new sn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Cn(){return Z===null?wt:1}let q=s;function nn(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yp}`),n.addEventListener("webglcontextlost",yt,!1),n.addEventListener("webglcontextrestored",qt,!1),n.addEventListener("webglcontextcreationerror",ne,!1),q===null){const j="webgl2";if(q=nn(j,A),q===null)throw nn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw be("WebGLRenderer: "+A.message),A}let me,Fe,At,Qe,L,E,J,gt,Mt,Rt,Lt,ut,ft,Nt,Ot,Dt,Ct,ie,ae,ge,X,bt,dt;function Bt(){me=new $T(q),me.init(),X=new kR(q,me),Fe=new WT(q,me,t,X),At=new VR(q,me),Fe.reversedDepthBuffer&&g&&At.buffers.depth.setReversed(!0),Qe=new nA(q),L=new CR,E=new XR(q,me,At,L,Fe,X,Qe),J=new QT(k),gt=new rb(q),bt=new XT(q,gt),Mt=new tA(q,gt,Qe,bt),Rt=new aA(q,Mt,gt,bt,Qe),ie=new iA(q,Fe,E),Ot=new qT(L),Lt=new RR(k,J,me,Fe,bt,Ot),ut=new KR(k,L),ft=new DR,Nt=new zR(me),Ct=new VT(k,J,At,Rt,T,p),Dt=new GR(k,Rt,Fe),dt=new JR(q,Qe,Fe,At),ae=new kT(q,me,Qe),ge=new eA(q,me,Qe),Qe.programs=Lt.programs,k.capabilities=Fe,k.extensions=me,k.properties=L,k.renderLists=ft,k.shadowMap=Dt,k.state=At,k.info=Qe}Bt(),w!==mi&&(O=new rA(w,n.width,n.height,l,c));const Ut=new jR(k,q);this.xr=Ut,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(A){A!==void 0&&(wt=A,this.setSize(vt,Tt,!1))},this.getSize=function(A){return A.set(vt,Tt)},this.setSize=function(A,j,it=!0){if(Ut.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=A,Tt=j,n.width=Math.floor(A*wt),n.height=Math.floor(j*wt),it===!0&&(n.style.width=A+"px",n.style.height=j+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(vt*wt,Tt*wt).floor()},this.setDrawingBufferSize=function(A,j,it){vt=A,Tt=j,wt=it,n.width=Math.floor(A*it),n.height=Math.floor(j*it),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(w===mi){be("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){Qt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(rt)},this.getViewport=function(A){return A.copy(Et)},this.setViewport=function(A,j,it,et){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,j,it,et),At.viewport(rt.copy(Et).multiplyScalar(wt).round())},this.getScissor=function(A){return A.copy(Ht)},this.setScissor=function(A,j,it,et){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,j,it,et),At.scissor(mt.copy(Ht).multiplyScalar(wt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){At.setScissorTest(ee=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,it=!0){let et=0;if(A){let nt=!1;if(Z!==null){const It=Z.texture.format;nt=M.has(It)}if(nt){const It=Z.texture.type,Vt=S.has(It),Pt=Ct.getClearColor(),kt=Ct.getClearAlpha(),Xt=Pt.r,Zt=Pt.g,oe=Pt.b;Vt?(C[0]=Xt,C[1]=Zt,C[2]=oe,C[3]=kt,q.clearBufferuiv(q.COLOR,0,C)):(D[0]=Xt,D[1]=Zt,D[2]=oe,D[3]=kt,q.clearBufferiv(q.COLOR,0,D))}else et|=q.COLOR_BUFFER_BIT}j&&(et|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(et|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&q.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){n.removeEventListener("webglcontextlost",yt,!1),n.removeEventListener("webglcontextrestored",qt,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),Ct.dispose(),ft.dispose(),Nt.dispose(),L.dispose(),J.dispose(),Rt.dispose(),bt.dispose(),dt.dispose(),Lt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",so),Ut.removeEventListener("sessionend",ro),On.stop()};function yt(A){A.preventDefault(),vu("WebGLRenderer: Context Lost."),H=!0}function qt(){vu("WebGLRenderer: Context Restored."),H=!1;const A=Qe.autoReset,j=Dt.enabled,it=Dt.autoUpdate,et=Dt.needsUpdate,nt=Dt.type;Bt(),Qe.autoReset=A,Dt.enabled=j,Dt.autoUpdate=it,Dt.needsUpdate=et,Dt.type=nt}function ne(A){be("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function an(A){const j=A.target;j.removeEventListener("dispose",an),we(j)}function we(A){_i(A),L.remove(A)}function _i(A){const j=L.get(A).programs;j!==void 0&&(j.forEach(function(it){Lt.releaseProgram(it)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,it,et,nt,It){j===null&&(j=ln);const Vt=nt.isMesh&&nt.matrixWorld.determinant()<0,Pt=Pa(A,j,it,et,nt);At.setMaterial(et,Vt);let kt=it.index,Xt=1;if(et.wireframe===!0){if(kt=Mt.getWireframeAttribute(it),kt===void 0)return;Xt=2}const Zt=it.drawRange,oe=it.attributes.position;let jt=Zt.start*Xt,Ae=(Zt.start+Zt.count)*Xt;It!==null&&(jt=Math.max(jt,It.start*Xt),Ae=Math.min(Ae,(It.start+It.count)*Xt)),kt!==null?(jt=Math.max(jt,0),Ae=Math.min(Ae,kt.count)):oe!=null&&(jt=Math.max(jt,0),Ae=Math.min(Ae,oe.count));const $e=Ae-jt;if($e<0||$e===1/0)return;bt.setup(nt,et,Pt,it,kt);let We,Ne=ae;if(kt!==null&&(We=gt.get(kt),Ne=ge,Ne.setIndex(We)),nt.isMesh)et.wireframe===!0?(At.setLineWidth(et.wireframeLinewidth*Cn()),Ne.setMode(q.LINES)):Ne.setMode(q.TRIANGLES);else if(nt.isLine){let Oe=et.linewidth;Oe===void 0&&(Oe=1),At.setLineWidth(Oe*Cn()),nt.isLineSegments?Ne.setMode(q.LINES):nt.isLineLoop?Ne.setMode(q.LINE_LOOP):Ne.setMode(q.LINE_STRIP)}else nt.isPoints?Ne.setMode(q.POINTS):nt.isSprite&&Ne.setMode(q.TRIANGLES);if(nt.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Ne.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Oe=nt._multiDrawStarts,Gt=nt._multiDrawCounts,Pn=nt._multiDrawCount,_e=kt?gt.get(kt).bytesPerElement:1,xn=L.get(et).currentProgram.getUniforms();for(let ei=0;ei<Pn;ei++)xn.setValue(q,"_gl_DrawID",ei),Ne.render(Oe[ei]/_e,Gt[ei])}else if(nt.isInstancedMesh)Ne.renderInstances(jt,$e,nt.count);else if(it.isInstancedBufferGeometry){const Oe=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Gt=Math.min(it.instanceCount,Oe);Ne.renderInstances(jt,$e,Gt)}else Ne.render(jt,$e)};function ti(A,j,it){A.transparent===!0&&A.side===ba&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Js(A,j,it),A.side=_s,A.needsUpdate=!0,Js(A,j,it),A.side=ba):Js(A,j,it)}this.compile=function(A,j,it=null){it===null&&(it=A),N=Nt.get(it),N.init(j),b.push(N),it.traverseVisible(function(nt){nt.isLight&&nt.layers.test(j.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),A!==it&&A.traverseVisible(function(nt){nt.isLight&&nt.layers.test(j.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),N.setupLights();const et=new Set;return A.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const It=nt.material;if(It)if(Array.isArray(It))for(let Vt=0;Vt<It.length;Vt++){const Pt=It[Vt];ti(Pt,it,nt),et.add(Pt)}else ti(It,it,nt),et.add(It)}),N=b.pop(),et},this.compileAsync=function(A,j,it=null){const et=this.compile(A,j,it);return new Promise(nt=>{function It(){if(et.forEach(function(Vt){L.get(Vt).currentProgram.isReady()&&et.delete(Vt)}),et.size===0){nt(A);return}setTimeout(It,10)}me.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Ss=null;function ao(A){Ss&&Ss(A)}function so(){On.stop()}function ro(){On.start()}const On=new wx;On.setAnimationLoop(ao),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(A){Ss=A,Ut.setAnimationLoop(A),A===null?On.stop():On.start()},Ut.addEventListener("sessionstart",so),Ut.addEventListener("sessionend",ro),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Y!==null&&Y.renderStart(A,j);const it=Ut.enabled===!0&&Ut.isPresenting===!0,et=O!==null&&(Z===null||it)&&O.begin(k,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(j),j=Ut.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,j,Z),N=Nt.get(A,b.length),N.init(j),N.state.textureUnits=E.getTextureUnits(),b.push(N),ye.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Jt.setFromProjectionMatrix(ye,Ii,j.reversedDepth),pe=this.localClippingEnabled,ke=Ot.init(this.clippingPlanes,pe),F=ft.get(A,I.length),F.init(),I.push(F),Ut.enabled===!0&&Ut.isPresenting===!0){const Vt=k.xr.getDepthSensingMesh();Vt!==null&&cn(Vt,j,-1/0,k.sortObjects)}cn(A,j,0,k.sortObjects),F.finish(),k.sortObjects===!0&&F.sort(st,xt),Ye=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Ye&&Ct.addToRenderList(F,A),this.info.render.frame++,ke===!0&&Ot.beginShadows();const nt=N.state.shadowsArray;if(Dt.render(nt,A,j),ke===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&O.hasRenderPass())===!1){const Vt=F.opaque,Pt=F.transmissive;if(N.setupLights(),j.isArrayCamera){const kt=j.cameras;if(Pt.length>0)for(let Xt=0,Zt=kt.length;Xt<Zt;Xt++){const oe=kt[Xt];ea(Vt,Pt,A,oe)}Ye&&Ct.render(A);for(let Xt=0,Zt=kt.length;Xt<Zt;Xt++){const oe=kt[Xt];wn(F,A,oe,oe.viewport)}}else Pt.length>0&&ea(Vt,Pt,A,j),Ye&&Ct.render(A),wn(F,A,j)}Z!==null&&ot===0&&(E.updateMultisampleRenderTarget(Z),E.updateRenderTargetMipmap(Z)),et&&O.end(k),A.isScene===!0&&A.onAfterRender(k,A,j),bt.resetDefaultState(),P=-1,V=null,b.pop(),b.length>0?(N=b[b.length-1],E.setTextureUnits(N.state.textureUnits),ke===!0&&Ot.setGlobalState(k.clippingPlanes,N.state.camera)):N=null,I.pop(),I.length>0?F=I[I.length-1]:F=null,Y!==null&&Y.renderEnd()};function cn(A,j,it,et){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Jt.intersectsSprite(A)){et&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);const Vt=Rt.update(A),Pt=A.material;Pt.visible&&F.push(A,Vt,Pt,it,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Jt.intersectsObject(A))){const Vt=Rt.update(A),Pt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),fe.copy(Vt.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(ye)),Array.isArray(Pt)){const kt=Vt.groups;for(let Xt=0,Zt=kt.length;Xt<Zt;Xt++){const oe=kt[Xt],jt=Pt[oe.materialIndex];jt&&jt.visible&&F.push(A,Vt,jt,it,fe.z,oe)}}else Pt.visible&&F.push(A,Vt,Pt,it,fe.z,null)}}const It=A.children;for(let Vt=0,Pt=It.length;Vt<Pt;Vt++)cn(It[Vt],j,it,et)}function wn(A,j,it,et){const{opaque:nt,transmissive:It,transparent:Vt}=A;N.setupLightsView(it),ke===!0&&Ot.setGlobalState(k.clippingPlanes,it),et&&At.viewport(rt.copy(et)),nt.length>0&&Na(nt,j,it),It.length>0&&Na(It,j,it),Vt.length>0&&Na(Vt,j,it),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function ea(A,j,it,et){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[et.id]===void 0){const jt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[et.id]=new Ki(1,1,{generateMipmaps:!0,type:jt?Da:mi,minFilter:qs,samples:Math.max(4,Fe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const It=N.state.transmissionRenderTarget[et.id],Vt=et.viewport||rt;It.setSize(Vt.z*k.transmissionResolutionScale,Vt.w*k.transmissionResolutionScale);const Pt=k.getRenderTarget(),kt=k.getActiveCubeFace(),Xt=k.getActiveMipmapLevel();k.setRenderTarget(It),k.getClearColor(z),Q=k.getClearAlpha(),Q<1&&k.setClearColor(16777215,.5),k.clear(),Ye&&Ct.render(it);const Zt=k.toneMapping;k.toneMapping=Zi;const oe=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),N.setupLightsView(et),ke===!0&&Ot.setGlobalState(k.clippingPlanes,et),Na(A,it,et),E.updateMultisampleRenderTarget(It),E.updateRenderTargetMipmap(It),me.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ae=0,$e=j.length;Ae<$e;Ae++){const We=j[Ae],{object:Ne,geometry:Oe,material:Gt,group:Pn}=We;if(Gt.side===ba&&Ne.layers.test(et.layers)){const _e=Gt.side;Gt.side=Qn,Gt.needsUpdate=!0,Ml(Ne,it,et,Oe,Gt,Pn),Gt.side=_e,Gt.needsUpdate=!0,jt=!0}}jt===!0&&(E.updateMultisampleRenderTarget(It),E.updateRenderTargetMipmap(It))}k.setRenderTarget(Pt,kt,Xt),k.setClearColor(z,Q),oe!==void 0&&(et.viewport=oe),k.toneMapping=Zt}function Na(A,j,it){const et=j.isScene===!0?j.overrideMaterial:null;for(let nt=0,It=A.length;nt<It;nt++){const Vt=A[nt],{object:Pt,geometry:kt,group:Xt}=Vt;let Zt=Vt.material;Zt.allowOverride===!0&&et!==null&&(Zt=et),Pt.layers.test(it.layers)&&Ml(Pt,j,it,kt,Zt,Xt)}}function Ml(A,j,it,et,nt,It){A.onBeforeRender(k,j,it,et,nt,It),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),nt.onBeforeRender(k,j,it,et,A,It),nt.transparent===!0&&nt.side===ba&&nt.forceSinglePass===!1?(nt.side=Qn,nt.needsUpdate=!0,k.renderBufferDirect(it,j,et,nt,A,It),nt.side=_s,nt.needsUpdate=!0,k.renderBufferDirect(it,j,et,nt,A,It),nt.side=ba):k.renderBufferDirect(it,j,et,nt,A,It),A.onAfterRender(k,j,it,et,nt,It)}function Js(A,j,it){j.isScene!==!0&&(j=ln);const et=L.get(A),nt=N.state.lights,It=N.state.shadowsArray,Vt=nt.state.version,Pt=Lt.getParameters(A,nt.state,It,j,it,N.state.lightProbeGridArray),kt=Lt.getProgramCacheKey(Pt);let Xt=et.programs;et.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,et.fog=j.fog;const Zt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;et.envMap=J.get(A.envMap||et.environment,Zt),et.envMapRotation=et.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",an),Xt=new Map,et.programs=Xt);let oe=Xt.get(kt);if(oe!==void 0){if(et.currentProgram===oe&&et.lightsStateVersion===Vt)return Oa(A,Pt),oe}else Pt.uniforms=Lt.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,it,Pt),A.onBeforeCompile(Pt,k),oe=Lt.acquireProgram(Pt,kt),Xt.set(kt,oe),et.uniforms=Pt.uniforms;const jt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=Ot.uniform),Oa(A,Pt),et.needsLights=Ms(A),et.lightsStateVersion=Vt,et.needsLights&&(jt.ambientLightColor.value=nt.state.ambient,jt.lightProbe.value=nt.state.probe,jt.directionalLights.value=nt.state.directional,jt.directionalLightShadows.value=nt.state.directionalShadow,jt.spotLights.value=nt.state.spot,jt.spotLightShadows.value=nt.state.spotShadow,jt.rectAreaLights.value=nt.state.rectArea,jt.ltc_1.value=nt.state.rectAreaLTC1,jt.ltc_2.value=nt.state.rectAreaLTC2,jt.pointLights.value=nt.state.point,jt.pointLightShadows.value=nt.state.pointShadow,jt.hemisphereLights.value=nt.state.hemi,jt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,jt.spotLightMatrix.value=nt.state.spotLightMatrix,jt.spotLightMap.value=nt.state.spotLightMap,jt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=N.state.lightProbeGridArray.length>0,et.currentProgram=oe,et.uniformsList=null,oe}function oo(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=du.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Oa(A,j){const it=L.get(A);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.batchingColor=j.batchingColor,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function lo(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;U.setFromMatrixPosition(j.matrixWorld);for(let it=0,et=A.length;it<et;it++){const nt=A[it];if(nt.texture!==null&&nt.boundingBox.containsPoint(U))return nt}return null}function Pa(A,j,it,et,nt){j.isScene!==!0&&(j=ln),E.resetTextureUnits();const It=j.fog,Vt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?j.environment:null,Pt=Z===null?k.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Te.workingColorSpace,kt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Xt=J.get(et.envMap||Vt,kt),Zt=et.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,oe=!!it.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),jt=!!it.morphAttributes.position,Ae=!!it.morphAttributes.normal,$e=!!it.morphAttributes.color;let We=Zi;et.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(We=k.toneMapping);const Ne=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Oe=Ne!==void 0?Ne.length:0,Gt=L.get(et),Pn=N.state.lights;if(ke===!0&&(pe===!0||A!==V)){const Ue=A===V&&et.id===P;Ot.setState(et,A,Ue)}let _e=!1;et.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Pn.state.version||Gt.outputColorSpace!==Pt||nt.isBatchedMesh&&Gt.batching===!1||!nt.isBatchedMesh&&Gt.batching===!0||nt.isBatchedMesh&&Gt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Gt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Gt.instancing===!1||!nt.isInstancedMesh&&Gt.instancing===!0||nt.isSkinnedMesh&&Gt.skinning===!1||!nt.isSkinnedMesh&&Gt.skinning===!0||nt.isInstancedMesh&&Gt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Gt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Gt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Gt.instancingMorph===!1&&nt.morphTexture!==null||Gt.envMap!==Xt||et.fog===!0&&Gt.fog!==It||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ot.numPlanes||Gt.numIntersection!==Ot.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==oe||Gt.morphTargets!==jt||Gt.morphNormals!==Ae||Gt.morphColors!==$e||Gt.toneMapping!==We||Gt.morphTargetsCount!==Oe||!!Gt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Gt.__version=et.version);let xn=Gt.currentProgram;_e===!0&&(xn=Js(et,j,nt),Y&&et.isNodeMaterial&&Y.onUpdateProgram(et,xn,Gt));let ei=!1,Ci=!1,ni=!1;const Pe=xn.getUniforms(),tn=Gt.uniforms;if(At.useProgram(xn.program)&&(ei=!0,Ci=!0,ni=!0),et.id!==P&&(P=et.id,Ci=!0),Gt.needsLights){const Ue=lo(N.state.lightProbeGridArray,nt);Gt.lightProbeGrid!==Ue&&(Gt.lightProbeGrid=Ue,Ci=!0)}if(ei||V!==A){At.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pe.setValue(q,"projectionMatrix",A.projectionMatrix),Pe.setValue(q,"viewMatrix",A.matrixWorldInverse);const Bi=Pe.map.cameraPosition;Bi!==void 0&&Bi.setValue(q,Le.setFromMatrixPosition(A.matrixWorld)),Fe.logarithmicDepthBuffer&&Pe.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Pe.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,Ci=!0,ni=!0)}if(Gt.needsLights&&(Pn.state.directionalShadowMap.length>0&&Pe.setValue(q,"directionalShadowMap",Pn.state.directionalShadowMap,E),Pn.state.spotShadowMap.length>0&&Pe.setValue(q,"spotShadowMap",Pn.state.spotShadowMap,E),Pn.state.pointShadowMap.length>0&&Pe.setValue(q,"pointShadowMap",Pn.state.pointShadowMap,E)),nt.isSkinnedMesh){Pe.setOptional(q,nt,"bindMatrix"),Pe.setOptional(q,nt,"bindMatrixInverse");const Ue=nt.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(q,"boneTexture",Ue.boneTexture,E))}nt.isBatchedMesh&&(Pe.setOptional(q,nt,"batchingTexture"),Pe.setValue(q,"batchingTexture",nt._matricesTexture,E),Pe.setOptional(q,nt,"batchingIdTexture"),Pe.setValue(q,"batchingIdTexture",nt._indirectTexture,E),Pe.setOptional(q,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Pe.setValue(q,"batchingColorTexture",nt._colorsTexture,E));const wi=it.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&ie.update(nt,it,xn),(Ci||Gt.receiveShadow!==nt.receiveShadow)&&(Gt.receiveShadow=nt.receiveShadow,Pe.setValue(q,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&j.environment!==null&&(tn.envMapIntensity.value=j.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=$R()),Ci){if(Pe.setValue(q,"toneMappingExposure",k.toneMappingExposure),Gt.needsLights&&za(tn,ni),It&&et.fog===!0&&ut.refreshFogUniforms(tn,It),ut.refreshMaterialUniforms(tn,et,wt,Tt,N.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ue=Gt.lightProbeGrid;tn.probesSH.value=Ue.texture,tn.probesMin.value.copy(Ue.boundingBox.min),tn.probesMax.value.copy(Ue.boundingBox.max),tn.probesResolution.value.copy(Ue.resolution)}du.upload(q,oo(Gt),tn,E)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(du.upload(q,oo(Gt),tn,E),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Pe.setValue(q,"center",nt.center),Pe.setValue(q,"modelViewMatrix",nt.modelViewMatrix),Pe.setValue(q,"normalMatrix",nt.normalMatrix),Pe.setValue(q,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const Ue=et.uniformsGroups;for(let Bi=0,Ba=Ue.length;Bi<Ba;Bi++){const Es=Ue[Bi];dt.update(Es,xn),dt.bind(Es,xn)}}return xn}function za(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Ms(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return ot},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,j,it){const et=L.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),L.get(A.texture).__webglTexture=j,L.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:it,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const it=L.get(A);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0};const Ia=q.createFramebuffer();this.setRenderTarget=function(A,j=0,it=0){Z=A,ct=j,ot=it;let et=null,nt=!1,It=!1;if(A){const Pt=L.get(A);if(Pt.__useDefaultFramebuffer!==void 0){At.bindFramebuffer(q.FRAMEBUFFER,Pt.__webglFramebuffer),rt.copy(A.viewport),mt.copy(A.scissor),St=A.scissorTest,At.viewport(rt),At.scissor(mt),At.setScissorTest(St),P=-1;return}else if(Pt.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Pt.__hasExternalTextures)E.rebindTextures(A,L.get(A.texture).__webglTexture,L.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(Pt.__boundDepthTexture!==Zt){if(Zt!==null&&L.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(It=!0);const Xt=L.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[j])?et=Xt[j][it]:et=Xt[j],nt=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?et=L.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?et=Xt[it]:et=Xt,rt.copy(A.viewport),mt.copy(A.scissor),St=A.scissorTest}else rt.copy(Et).multiplyScalar(wt).floor(),mt.copy(Ht).multiplyScalar(wt).floor(),St=ee;if(it!==0&&(et=Ia),At.bindFramebuffer(q.FRAMEBUFFER,et)&&At.drawBuffers(A,et),At.viewport(rt),At.scissor(mt),At.setScissorTest(St),nt){const Pt=L.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pt.__webglTexture,it)}else if(It){const Pt=j;for(let kt=0;kt<A.textures.length;kt++){const Xt=L.get(A.textures[kt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+kt,Xt.__webglTexture,it,Pt)}}else if(A!==null&&it!==0){const Pt=L.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Pt.__webglTexture,it)}P=-1},this.readRenderTargetPixels=function(A,j,it,et,nt,It,Vt,Pt=0){if(!(A&&A.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=L.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt){At.bindFramebuffer(q.FRAMEBUFFER,kt);try{const Xt=A.textures[Pt],Zt=Xt.format,oe=Xt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Pt),!Fe.textureFormatReadable(Zt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(oe)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-et&&it>=0&&it<=A.height-nt&&q.readPixels(j,it,et,nt,X.convert(Zt),X.convert(oe),It)}finally{const Xt=Z!==null?L.get(Z).__webglFramebuffer:null;At.bindFramebuffer(q.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,j,it,et,nt,It,Vt,Pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=L.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt)if(j>=0&&j<=A.width-et&&it>=0&&it<=A.height-nt){At.bindFramebuffer(q.FRAMEBUFFER,kt);const Xt=A.textures[Pt],Zt=Xt.format,oe=Xt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Pt),!Fe.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,jt),q.bufferData(q.PIXEL_PACK_BUFFER,It.byteLength,q.STREAM_READ),q.readPixels(j,it,et,nt,X.convert(Zt),X.convert(oe),0);const Ae=Z!==null?L.get(Z).__webglFramebuffer:null;At.bindFramebuffer(q.FRAMEBUFFER,Ae);const $e=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await LM(q,$e,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,jt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,It),q.deleteBuffer(jt),q.deleteSync($e),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,it=0){const et=Math.pow(2,-it),nt=Math.floor(A.image.width*et),It=Math.floor(A.image.height*et),Vt=j!==null?j.x:0,Pt=j!==null?j.y:0;E.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,it,0,0,Vt,Pt,nt,It),At.unbindTexture()};const dn=q.createFramebuffer(),El=q.createFramebuffer();this.copyTextureToTexture=function(A,j,it=null,et=null,nt=0,It=0){let Vt,Pt,kt,Xt,Zt,oe,jt,Ae,$e;const We=A.isCompressedTexture?A.mipmaps[It]:A.image;if(it!==null)Vt=it.max.x-it.min.x,Pt=it.max.y-it.min.y,kt=it.isBox3?it.max.z-it.min.z:1,Xt=it.min.x,Zt=it.min.y,oe=it.isBox3?it.min.z:0;else{const tn=Math.pow(2,-nt);Vt=Math.floor(We.width*tn),Pt=Math.floor(We.height*tn),A.isDataArrayTexture?kt=We.depth:A.isData3DTexture?kt=Math.floor(We.depth*tn):kt=1,Xt=0,Zt=0,oe=0}et!==null?(jt=et.x,Ae=et.y,$e=et.z):(jt=0,Ae=0,$e=0);const Ne=X.convert(j.format),Oe=X.convert(j.type);let Gt;j.isData3DTexture?(E.setTexture3D(j,0),Gt=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(E.setTexture2DArray(j,0),Gt=q.TEXTURE_2D_ARRAY):(E.setTexture2D(j,0),Gt=q.TEXTURE_2D),At.activeTexture(q.TEXTURE0),At.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),At.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),At.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const Pn=At.getParameter(q.UNPACK_ROW_LENGTH),_e=At.getParameter(q.UNPACK_IMAGE_HEIGHT),xn=At.getParameter(q.UNPACK_SKIP_PIXELS),ei=At.getParameter(q.UNPACK_SKIP_ROWS),Ci=At.getParameter(q.UNPACK_SKIP_IMAGES);At.pixelStorei(q.UNPACK_ROW_LENGTH,We.width),At.pixelStorei(q.UNPACK_IMAGE_HEIGHT,We.height),At.pixelStorei(q.UNPACK_SKIP_PIXELS,Xt),At.pixelStorei(q.UNPACK_SKIP_ROWS,Zt),At.pixelStorei(q.UNPACK_SKIP_IMAGES,oe);const ni=A.isDataArrayTexture||A.isData3DTexture,Pe=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const tn=L.get(A),wi=L.get(j),Ue=L.get(tn.__renderTarget),Bi=L.get(wi.__renderTarget);At.bindFramebuffer(q.READ_FRAMEBUFFER,Ue.__webglFramebuffer),At.bindFramebuffer(q.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Ba=0;Ba<kt;Ba++)ni&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,L.get(A).__webglTexture,nt,oe+Ba),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,L.get(j).__webglTexture,It,$e+Ba)),q.blitFramebuffer(Xt,Zt,Vt,Pt,jt,Ae,Vt,Pt,q.DEPTH_BUFFER_BIT,q.NEAREST);At.bindFramebuffer(q.READ_FRAMEBUFFER,null),At.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(nt!==0||A.isRenderTargetTexture||L.has(A)){const tn=L.get(A),wi=L.get(j);At.bindFramebuffer(q.READ_FRAMEBUFFER,dn),At.bindFramebuffer(q.DRAW_FRAMEBUFFER,El);for(let Ue=0;Ue<kt;Ue++)ni?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tn.__webglTexture,nt,oe+Ue):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,tn.__webglTexture,nt),Pe?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,wi.__webglTexture,It,$e+Ue):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,wi.__webglTexture,It),nt!==0?q.blitFramebuffer(Xt,Zt,Vt,Pt,jt,Ae,Vt,Pt,q.COLOR_BUFFER_BIT,q.NEAREST):Pe?q.copyTexSubImage3D(Gt,It,jt,Ae,$e+Ue,Xt,Zt,Vt,Pt):q.copyTexSubImage2D(Gt,It,jt,Ae,Xt,Zt,Vt,Pt);At.bindFramebuffer(q.READ_FRAMEBUFFER,null),At.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Pe?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Gt,It,jt,Ae,$e,Vt,Pt,kt,Ne,Oe,We.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(Gt,It,jt,Ae,$e,Vt,Pt,kt,Ne,We.data):q.texSubImage3D(Gt,It,jt,Ae,$e,Vt,Pt,kt,Ne,Oe,We):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,It,jt,Ae,Vt,Pt,Ne,Oe,We.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,It,jt,Ae,We.width,We.height,Ne,We.data):q.texSubImage2D(q.TEXTURE_2D,It,jt,Ae,Vt,Pt,Ne,Oe,We);At.pixelStorei(q.UNPACK_ROW_LENGTH,Pn),At.pixelStorei(q.UNPACK_IMAGE_HEIGHT,_e),At.pixelStorei(q.UNPACK_SKIP_PIXELS,xn),At.pixelStorei(q.UNPACK_SKIP_ROWS,ei),At.pixelStorei(q.UNPACK_SKIP_IMAGES,Ci),It===0&&j.generateMipmaps&&q.generateMipmap(Gt),At.unbindTexture()},this.initRenderTarget=function(A){L.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),At.unbindTexture()},this.resetState=function(){ct=0,ot=0,Z=null,At.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),n.unpackColorSpace=Te._getUnpackColorSpace()}}const Xv={type:"change"},Fp={type:"start"},Ix={type:"end"},ru=new Ru,kv=new ps,t3=Math.cos(70*KM.DEG2RAD),Sn=new G,Jn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Td=1e-6;class v2 extends ab{constructor(t,n=null){super(t,n),this.state=Xe.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new xs,this._lastTargetPosition=new G,this._quat=new xs().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _v,this._sphericalDelta=new _v,this._scale=1,this._panOffset=new G,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new G,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=n3.bind(this),this._onPointerDown=e3.bind(this),this._onPointerUp=i3.bind(this),this._onContextMenu=u3.bind(this),this._onMouseWheel=r3.bind(this),this._onKeyDown=o3.bind(this),this._onTouchStart=l3.bind(this),this._onTouchMove=c3.bind(this),this._onMouseDown=a3.bind(this),this._onMouseMove=s3.bind(this),this._interceptControlDown=f3.bind(this),this._interceptControlUp=h3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xv),this.update(),this.state=Xe.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;Sn.copy(n).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Jn:s>Math.PI&&(s-=Jn),l<-Math.PI?l+=Jn:l>Math.PI&&(l-=Jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Sn.length();f=this._clampDistance(d*this._scale);const p=d-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new G(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new G(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),f=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(ru.origin.copy(this.object.position),ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ru.direction))<t3?this.object.lookAt(this.target):(kv.setFromNormalAndCoplanarPoint(this.object.up,this.target),ru.intersectPlane(kv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Td||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Td||this._lastTargetPosition.distanceToSquared(this.target)>Td?(this.dispatchEvent(Xv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Jn/60*this.autoRotateSpeed*t:Jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Sn.setFromMatrixColumn(n,0),Sn.multiplyScalar(-t),this._panOffset.add(Sn)}_panUp(t,n){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(n,1):(Sn.setFromMatrixColumn(n,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(t),this._panOffset.add(Sn)}_pan(t,n){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Sn.copy(l).sub(this.target);let c=Sn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*n*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=n-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,d=(t.pageY+n.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new zt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function e3(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function n3(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function i3(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ix),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function a3(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Zr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Zr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Fp)}function s3(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function r3(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(Fp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ix))}function o3(r){this.enabled!==!1&&this._handleKeyDown(r)}function l3(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case jr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case jr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case jr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Fp)}function c3(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function u3(r){this.enabled!==!1&&r.preventDefault()}function f3(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function h3(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mu(r,t){return typeof window>"u"?t:getComputedStyle(document.documentElement).getPropertyValue(r).trim()||t}const d3=`
vec3 nm_mod289(vec3 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 nm_mod289(vec4 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 nm_permute(vec4 x){ return nm_mod289(((x * 34.0) + 1.0) * x); }
vec4 nm_taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float nm_snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = nm_mod289(i);
  vec4 p = nm_permute( nm_permute( nm_permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = nm_taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`,p3=`
uniform float uTime;
uniform float uDistort;
uniform float uFreq;
uniform float uSpeed;
uniform float uPattern;
uniform vec4 uPoke;   // xyz = touch direction on the unit sphere, w = strength (0 = off)
${d3}
float nm_field(vec3 p){
  float t = uTime * uSpeed;
  if (uPattern < 0.5) {            // 0 — liquid
    float d  = nm_snoise(p * uFreq + vec3(0.0, 0.0, t));
    d += 0.5 * nm_snoise(p * uFreq * 2.1 + vec3(t * 1.3));
    return d;
  } else if (uPattern < 1.5) {     // 1 — brain
    float d  = abs(nm_snoise(p * uFreq * 2.4 + vec3(0.0, 0.0, t)));
    d += 0.45 * abs(nm_snoise(p * uFreq * 4.8 - vec3(t * 0.7)));
    return d * 1.25 - 0.45;
  } else if (uPattern < 2.5) {     // 2 — twister
    float ang = atan(p.z, p.x);
    float d = sin(ang * 5.0 + p.y * 4.2 + t * 1.6);
    d += 0.35 * nm_snoise(p * uFreq + vec3(t * 0.5));
    return d * 0.75;
  } else if (uPattern < 3.5) {     // 3 — fungi
    float n = nm_snoise(p * uFreq * 1.4 + vec3(0.0, t, 0.0));
    float d = 1.0 - abs(n);
    d = d * d * 1.5 - 0.65;
    d += 0.3 * nm_snoise(p * uFreq * 3.0 + vec3(t * 0.4));
    return d;
  }                                 // 4 — pulse
  float d = sin(p.y * 6.0 + t * 1.5) * 0.8;
  d += 0.35 * nm_snoise(p * uFreq * 1.5 + vec3(t * 0.6));
  return d;
}
vec3 nm_displace(vec3 p){
  vec3 n = normalize(p);
  float d = nm_field(p) * uDistort;
  // Localized poke: a soft, natural bulge toward where the surface was touched,
  // falling off with angular distance (cubic). w = 0 leaves the blob untouched.
  float prox = max(0.0, dot(n, uPoke.xyz));
  d += prox * prox * prox * uPoke.w;
  return p + n * d;
}
vec3 nm_ortho(vec3 v){
  return normalize(abs(v.x) > 0.5 ? vec3(v.y, -v.x, 0.0) : vec3(0.0, v.z, -v.y));
}
`;function m3(r,t){const n=document.createElement("canvas");n.width=512,n.height=256;const s=n.getContext("2d");s.fillStyle="#0b0b1c",s.fillRect(0,0,512,256);const l=(d,p,m,_)=>{const v=s.createRadialGradient(d,p,0,d,p,m);v.addColorStop(0,_),v.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=v,s.fillRect(0,0,512,256)};l(150,55,240,"rgba(255,255,255,1)"),l(400,90,300,t),l(250,215,320,r),l(70,205,220,t),l(450,195,200,"rgba(255,255,255,0.6)");const c=[[60,40,13,"#ffffff"],[120,28,9,t],[205,62,11,"#ffffff"],[300,38,14,r],[352,74,9,"#ffffff"],[432,48,12,t],[482,112,10,"#ffffff"],[92,150,12,r],[182,120,9,"#ffffff"],[322,158,12,t],[410,172,10,r],[240,92,8,"#ffffff"],[140,202,10,t],[378,212,9,"#ffffff"]];for(const[d,p,m,_]of c)l(d,p,m,_);const f=new SE(n);return f.mapping=lu,f.colorSpace=di,f}let Ad=null;function g3(){return Ad||(Ad=m3(Mu("--nm-accent","#4848f0"),Mu("--nm-accent-secondary","#f048a8"))),Ad}function _3({color:r,distort:t=.16,freq:n=1.35,speed:s=.22,pattern:l=0}){const c=g3(),f=new WE({color:new te(r),metalness:1,roughness:.12,clearcoat:1,clearcoatRoughness:.2,emissive:new te(r),emissiveIntensity:.12,envMap:c,envMapIntensity:1.4}),d={uTime:{value:0},uDistort:{value:t},uFreq:{value:n},uSpeed:{value:s},uPattern:{value:l},uPoke:{value:new sn(0,0,0,0)}};return f.onBeforeCompile=p=>{p.uniforms.uTime=d.uTime,p.uniforms.uDistort=d.uDistort,p.uniforms.uFreq=d.uFreq,p.uniforms.uSpeed=d.uSpeed,p.uniforms.uPattern=d.uPattern,p.uniforms.uPoke=d.uPoke,p.vertexShader=p.vertexShader.replace("void main() {",`${p3}
void main() {`),p.vertexShader=p.vertexShader.replace("#include <beginnormal_vertex>",`
      vec3 nmN = normalize(normal);
      vec3 nmP = nm_displace(position);
      float nmEps = 0.04;
      vec3 nmT = nm_ortho(nmN);
      vec3 nmB = cross(nmN, nmT);
      vec3 nmP1 = nm_displace(position + nmT * nmEps);
      vec3 nmP2 = nm_displace(position + nmB * nmEps);
      vec3 nmNewN = normalize(cross(nmP1 - nmP, nmP2 - nmP));
      if (dot(nmNewN, nmN) < 0.0) nmNewN = -nmNewN;
      vec3 objectNormal = nmNewN;
      `),p.vertexShader=p.vertexShader.replace("#include <begin_vertex>","vec3 transformed = nm_displace(position);")},{material:f,uniforms:d,dispose:()=>f.dispose()}}function x2({detail:r=18,lights:t=!0}={}){const n=Mu("--nm-accent","#4848f0"),s=Mu("--nm-accent-secondary","#f048a8"),l=new Pp(1,r),{material:c,uniforms:f,dispose:d}=_3({color:n}),p=new ul,m=new $i(l,c);if(p.add(m),t){const _=new pv(s,18,12);_.position.set(3,2,4);const v=new pv(n,14,12);v.position.set(-3,-2,3),p.add(_,v)}return{object:p,uniforms:f,material:c,setTime:_=>{f.uTime.value=_},dispose:()=>{l.dispose(),d()}}}export{y3 as $,Kv as A,Qn as B,SE as C,$r as D,xx as E,Tu as F,NE as G,N_ as H,$S as I,QS as J,eM as K,Lp as L,cx as M,_E as N,U3 as O,N3 as P,Ua as Q,Ys as R,eo as S,u2 as T,ba as U,uM as V,hM as W,V3 as X,AM as Y,Ld as Z,I3 as _,ks as a,aM as a$,lu as a0,Vh as a1,ys as a2,j3 as a3,Je as a4,ji as a5,fx as a6,$3 as a7,_s as a8,Cu as a9,d2 as aA,J3 as aB,vx as aC,r2 as aD,Fn as aE,qs as aF,Xh as aG,gu as aH,Yv as aI,_u as aJ,Zr as aK,$n as aL,E3 as aM,KM as aN,vv as aO,re as aP,je as aQ,sM as aR,$i as aS,gx as aT,a2 as aU,s2 as aV,i2 as aW,e2 as aX,WE as aY,kE as aZ,n2 as a_,_x as aa,RM as ab,Od as ac,Cp as ad,Nd as ae,G3 as af,F3 as ag,ul as ah,Da as ai,l2 as aj,Pp as ak,D3 as al,L3 as am,K3 as an,m2 as ao,Sp as ap,px as aq,xu as ar,O3 as as,wr as at,TM as au,Ud as av,Rp as aw,Qr as ax,B3 as ay,z3 as az,yM as b,Hd as b$,Id as b0,xM as b1,z_ as b2,bu as b3,Mn as b4,Lc as b5,SM as b6,$v as b7,bM as b8,wd as b9,Ex as bA,xs as bB,Wd as bC,to as bD,mu as bE,fp as bF,yp as bG,pu as bH,zi as bI,Ap as bJ,sp as bK,np as bL,ip as bM,ap as bN,rp as bO,op as bP,jd as bQ,Zd as bR,Kd as bS,Jd as bT,Qd as bU,$d as bV,tp as bW,ep as bX,lp as bY,kd as bZ,Gd as b_,P3 as ba,Ra as bb,ms as bc,T3 as bd,Zi as be,Kr as bf,R3 as bg,A3 as bh,CM as bi,Pd as bj,H3 as bk,EM as bl,oM as bm,fM as bn,dM as bo,Cd as bp,cM as bq,v2 as br,Bp as bs,ou as bt,tM as bu,pi as bv,ps as bw,wu as bx,pv as by,Q3 as bz,O_ as c,gl as c$,uu as c0,fu as c1,hu as c2,rx as c3,b3 as c4,Vd as c5,Xd as c6,Fd as c7,Bd as c8,cu as c9,Z3 as cA,mE as cB,Rd as cC,pM as cD,lM as cE,pp as cF,nM as cG,P_ as cH,jr as cI,vs as cJ,Rn as cK,o2 as cL,p2 as cM,X3 as cN,Tx as cO,Ax as cP,tx as cQ,hx as cR,dx as cS,HE as cT,mi as cU,ax as cV,_l as cW,ix as cX,Ji as cY,Mp as cZ,Ep as c_,Zs as ca,Tp as cb,g2 as cc,S3 as cd,h2 as ce,ox as cf,bp as cg,jv as ch,eE as ci,zd as cj,w3 as ck,iM as cl,NM as cm,qd as cn,dp as co,hp as cp,Yd as cq,di as cr,Be as cs,Y3 as ct,ta as cu,t2 as cv,nx as cw,Au as cx,bx as cy,c2 as cz,Qv as d,cl as d0,zt as d1,G as d2,sn as d3,Ii as d4,Ki as d5,_2 as d6,vl as d7,Zh as d8,rM as d9,C3 as da,v3 as db,_3 as dc,UM as dd,x2 as de,be as df,xv as dg,Wv as dh,W3 as di,x3 as dj,vu as dk,qv as dl,xp as dm,jS as dn,kS as dp,Qt as dq,mp as dr,q3 as ds,sx as e,wM as f,Dd as g,I_ as h,f2 as i,nb as j,M3 as k,yl as l,Sl as m,gi as n,Hn as o,ex as p,Zv as q,Aa as r,te as s,Te as t,k3 as u,Sx as v,ab as w,eb as x,ME as y,js as z};
