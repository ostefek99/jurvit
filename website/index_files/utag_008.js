//tealium universal tag - utag.37 ut4.0.201802082121, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){(function(parent,name,context,definition){if(!context||!context[parent]||!Array.prototype.filter){return;}
context[parent]['plugins'][name]=definition();})('bactm','getCoremetricsId',typeof window!=='undefined'?window:null,function(){var parent='bactm',ba=window[parent],win=window,doc=document||{},version='1.0.0',ddo=win.digitalData,LOG_LEVEL={OFF:10,FATAL:5,ERROR:4,WARN:3,INFO:2,DEBUG:1};if(!ddo)return;var fetchCMCookie=function(){(function(a,b,c,d){a='//sofa.bankofamerica.com/cookie-id.js?fn=saveCMCookieToDDO';b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);})();}
window.saveCMCookieToDDO=function(value){var user=ddo.user||{};var sharedIDs=user.sharedIDs||{};sharedIDs.coremetrics=value;user.sharedIDs=sharedIDs;ddo.user=user;}
var _init=function(){ba._log('bact.plugin.getCoremetricsId v'+version+' initializing.',LOG_LEVEL.INFO);if(win.bactm_envSelector&&win.bactm_envSelector==="prod"){ba.ready(fetchCMCookie);}}
_init();return{};});}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("37","bofa.main");}catch(error){utag.DB(error);}