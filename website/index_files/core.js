/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
;
!function(e,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?c(e,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(e)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)
},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()
};
n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)
},pushStack:function(a){var b=n.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a){return n.each(this,a)
},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(e.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor()
},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(e=arguments[h])){for(d in e){a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c))
}}}return g
},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===n.type(a)
},isArray:Array.isArray||function(a){return"array"===n.type(a)
},isWindow:function(a){return null!=a&&a==a.window
},isNumeric:function(a){var b=a&&a.toString();
return !n.isArray(a)&&b-parseFloat(b)+1>=0
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},isPlainObject:function(a){var b;
if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a)){return !1
}try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}if(!l.ownFirst){for(b in a){return k.call(a,b)
}}for(b in a){}return void 0===b||k.call(a,b)
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a
},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b){var c,d=0;
if(s(a)){for(c=a.length;
c>d;
d++){if(b.call(a[d],d,a[d])===!1){break
}}}else{for(d in a){if(b.call(a[d],d,a[d])===!1){break
}}}return a
},trim:function(a){return null==a?"":(a+"").replace(o,"")
},makeArray:function(a,b){var c=b||[];
return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c
},inArray:function(a,b,c){var d;
if(b){if(h){return h.call(b,a,c)
}for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;
d>c;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,b){var c=+b.length,d=0,e=a.length;
while(c>d){a[e++]=b[d++]
}if(c!==c){while(void 0!==b[d]){a[e++]=b[d++]
}}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,e,g=0,h=[];
if(s(a)){for(d=a.length;
d>g;
g++){e=b(a[g],g,c),null!=e&&h.push(e)
}}else{for(g in a){e=b(a[g],g,c),null!=e&&h.push(e)
}}return f.apply([],h)
},guid:1,proxy:function(a,b){var c,d,f;
return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))
},d.guid=a.guid=a.guid||n.guid++,d):void 0
},now:function(){return +new Date
},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()
});
function s(a){var b=!!a&&"length" in a&&a.length,c=n.type(a);
return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0
},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;
d>c;
c++){if(a[c]===b){return c
}}return -1
},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
},da=function(){m()
};
try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType
}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;
if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x){return d
}if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a))){if(f=o[1]){if(9===x){if(!(j=b.getElementById(f))){return d
}if(j.id===f){return d.push(j),d
}}else{if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f){return d.push(j),d
}}}else{if(o[2]){return H.apply(d,b.getElementsByTagName(a)),d
}if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName){return H.apply(d,b.getElementsByClassName(f)),d
}}}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x){w=b,s=a
}else{if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";
while(h--){r[h]=l+" "+qa(r[h])
}s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b
}}if(s){try{return H.apply(d,w.querySelectorAll(s)),d
}catch(y){}finally{k===u&&b.removeAttribute("id")
}}}}return i(a.replace(Q,"$1"),b,d,e)
}function ga(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function ha(a){return a[u]=!0,a
}function ia(a){var b=n.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function ja(a,b){var c=a.split("|"),e=c.length;
while(e--){d.attrHandle[c[e]]=b
}}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function la(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function ma(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a
}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;
return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length
}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);
return c?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(ba,ca);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);
return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0
},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")
}),ia(function(a){var b=n.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")
})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)
}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},B=b?function(a,b){if(a===b){return l=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return l=!0,0
}var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];
if(!e||!f){return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0
}if(e===f){return ka(a,b)
}c=a;
while(c=c.parentNode){g.unshift(c)
}c=b;
while(c=c.parentNode){h.unshift(c)
}while(g[d]===h[d]){d++
}return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0
},n):n
},fa.matches=function(a,b){return fa(a,null,null,b)
},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b))){try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return fa(b,n,null,[a]).length>0
},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)
},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return k=null,a
},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[6]&&a[2];
return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=y[a+" "];
return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;
if(q){if(f){while(p){m=b;
while(m=m[p]){if(h?m.nodeName.toLowerCase()===r:1===m.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];
while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];
break
}}}else{if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1){while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b)){break
}}}}return t-=e,t===d||t%d===0&&t/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);
return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=J(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));
return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()
}
}),has:ha(function(a){return function(b){return fa(a,b).length>0
}
}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;
do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===o
},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return Y.test(a.nodeName)
},input:function(a){return X.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:na(function(){return[0]
}),last:na(function(a,b){return[b-1]
}),eq:na(function(a,b,c){return[0>c?c+b:c]
}),even:na(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:na(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=la(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=ma(b)
}function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?fa.error(a):z(a,i).slice(0)
};
function qa(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j,k=[w,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f){return k[2]=h[2]
}if(i[d]=k,k[2]=a(b,c,g)){return !0
}}}}}
}function sa(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function ta(a,b,c){for(var d=0,e=b.length;
e>d;
d++){fa(a,b[d],c)
}return c
}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)))
}return g
}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)
}})
}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b
},h,!0),l=ra(function(a){return J(b,a)>-1
},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));
return b=null,e
}];
f>i;
i++){if(c=d.relative[a[i].type]){m=[ra(sa(m),c)]
}else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;
f>e;
e++){if(d.relative[a[e].type]){break
}}return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))
}m.push(c)
}}return sa(m)
}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||0.1,z=x.length;
for(k&&(j=g===n||g||k);
s!==z&&null!=(l=x[s]);
s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);
while(q=a[o++]){if(q(l,g||n,h)){i.push(l);
break
}}k&&(w=y)
}c&&((l=!q&&l)&&r--,f&&t.push(l))
}if(r+=s,c&&s!==r){o=0;
while(q=b[o++]){q(t,u,g,h)
}if(f){if(r>0){while(s--){t[s]||u[s]||(u[s]=F.call(i))
}}u=ua(u)
}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)
}return k&&(w=y,j=v),t
};
return c?ha(f):f
}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];
if(!f){b||(b=g(a)),c=b.length;
while(c--){f=wa(b[c]),f[u]?d.push(f):e.push(f)
}f=A(a,xa(e,d)),f.selector=a
}return f
},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);
if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b){return e
}n&&(b=b.parentNode),a=a.slice(j.shift().value.length)
}i=W.needsContext.test(a)?0:j.length;
while(i--){if(k=j[i],d.relative[l=k.type]){break
}if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a){return H.apply(e,f),e
}break
}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e
},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))
}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),ia(function(a){return null==a.getAttribute("disabled")
})||ja(K,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),fa
}(a);
n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;
var u=function(a,b,c){var d=[],e=void 0!==c;
while((a=a[b])&&9!==a.nodeType){if(1===a.nodeType){if(e&&n(a).is(c)){break
}d.push(a)
}}return d
},v=function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;
function z(a,b,c){if(n.isFunction(b)){return n.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return n.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(y.test(b)){return n.filter(b,a,c)
}b=n.filter(b,a)
}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c
})
}n.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType
}))
},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;
if("string"!=typeof a){return this.pushStack(n(a).filter(function(){for(b=0;
e>b;
b++){if(n.contains(d[b],this)){return !0
}}}))
}for(b=0;
e>b;
b++){n.find(a,d[b],c)
}return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c
},filter:function(a){return this.pushStack(z(this,a||[],!1))
},not:function(a){return this.pushStack(z(this,a||[],!0))
},is:function(a){return !!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length
}});
var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;
if(!a){return this
}if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b){return !b||b.jquery?(b||c).find(a):this.constructor(b).find(a)
}if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b)){for(e in b){n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e])
}}return this
}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2]){return A.find(a)
}this.length=1,this[0]=f
}return this.context=d,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))
};
C.prototype=n.fn,A=n(d);
var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};
n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;
return this.filter(function(){for(b=0;
d>b;
b++){if(n.contains(this,c[b])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?n.uniqueSort(f):f)
},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function F(a,b){do{a=a[b]
}while(a&&1!==a.nodeType);
return a
}n.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return u(a,"parentNode")
},parentsUntil:function(a,b,c){return u(a,"parentNode",c)
},next:function(a){return F(a,"nextSibling")
},prev:function(a){return F(a,"previousSibling")
},nextAll:function(a){return u(a,"nextSibling")
},prevAll:function(a){return u(a,"previousSibling")
},nextUntil:function(a,b,c){return u(a,"nextSibling",c)
},prevUntil:function(a,b,c){return u(a,"previousSibling",c)
},siblings:function(a){return v((a.parentNode||{}).firstChild,a)
},children:function(a){return v(a.firstChild)
},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)
}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)
}
});
var G=/\S+/g;
function H(a){var b={};
return n.each(a.match(G)||[],function(a,c){b[c]=!0
}),b
}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);
var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;
g.length;
h=-1){c=g.shift();
while(++h<f.length){f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)
}}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")
},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)
})
}(arguments),c&&!b&&i()),this
},remove:function(){return n.each(arguments,function(a,b){var c;
while((c=n.inArray(b,f,c))>-1){f.splice(c,1),h>=c&&h--
}}),this
},has:function(a){return a?n.inArray(a,f)>-1:f.length>0
},empty:function(){return f&&(f=[]),this
},disable:function(){return e=g=[],f=c="",this
},disabled:function(){return !f
},lock:function(){return e=!0,c||j.disable(),this
},locked:function(){return !!e
},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this
},fire:function(){return j.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return j
},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?n.extend(a,d):d
}},e={};
return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(d>1){for(i=new Array(d),j=new Array(d),k=new Array(d);
d>b;
b++){c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var I;
n.fn.ready=function(a){return n.ready.promise().done(a),this
},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)
},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))
}});
function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))
}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())
}n.ready.promise=function(b){if(!I){if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll){a.setTimeout(n.ready)
}else{if(d.addEventListener){d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K)
}else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);
var c=!1;
try{c=null==a.frameElement&&d.documentElement
}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")
}catch(b){return a.setTimeout(f,50)
}J(),n.ready()
}}()
}}}return I.promise(b)
},n.ready.promise();
var L;
for(L in n(l)){break
}l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;
c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))
}),function(){var a=d.createElement("div");
l.deleteExpando=!0;
try{delete a.test
}catch(b){l.deleteExpando=!1
}a=null
}();
var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b
},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;
function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();
if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c
}catch(e){}n.data(a,b,c)
}else{c=void 0
}}return c
}function Q(a){var b;
for(b in a){if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b){return !1
}}return !0
}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b){return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;
while(e--){delete d[b[e]]
}if(c?!Q(d):!n.isEmptyObject(d)){return
}}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)
}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)
},data:function(a,b,c){return R(a,b,c)
},removeData:function(a,b){return S(a,b)
},_data:function(a,b,c){return R(a,b,c,!0)
},_removeData:function(a,b){return S(a,b,!0)
}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;
while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])))
}n._data(f,"parsedAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){n.data(this,a)
}):arguments.length>1?this.each(function(){n.data(this,a,b)
}):f?P(f,a,n.data(f,a)):void 0
},removeData:function(a){return this.each(function(){n.removeData(this,a)
})
}}),n.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)
})})
}}),n.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);
n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){n.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}}),function(){var a;
l.shrinkWrapBlocks=function(){if(null!=a){return a
}a=!1;
var b,c,e;
return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0
}
}();
var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)
};
function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()
}:function(){return n.css(a,b,"")
},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));
if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;
do{f=f||".5",k/=f,n.style(a,b,k+j)
}while(f!==(f=h()/i)&&1!==f&&--g)
}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e
}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===n.type(c)){e=!0;
for(h in c){Y(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");
a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)
}();
var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};
da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;
function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;
if(!f){for(f=[],c=a.childNodes||a;
null!=(d=c[e]);
e++){!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b))
}}return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f
}function fa(a,b){for(var c,d=0;
null!=(c=a[d]);
d++){n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))
}}var ga=/<|&#?\w+;/,ha=/<tbody/i;
function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)
}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;
o>r;
r++){if(g=a[r],g||0===g){if("object"===n.type(g)){n.merge(q,g.nodeType?[g]:g)
}else{if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];
while(f--){i=i.lastChild
}if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;
while(f--){n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)
}}n.merge(q,i.childNodes),i.textContent="";
while(i.firstChild){i.removeChild(i.firstChild)
}i=p.lastChild
}else{q.push(b.createTextNode(g))
}}}}i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;
while(g=q[r++]){if(d&&n.inArray(g,d)>-1){e&&e.push(g)
}else{if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;
while(g=i[f++]){_.test(g.type||"")&&c.push(g)
}}}}return i=null,p
}!function(){var b,c,e=d.createElement("div");
for(b in {submit:!0,change:!0,focusin:!0}){c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1)
}e=null
}();
var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;
function pa(){return !0
}function qa(){return !1
}function ra(){try{return d.activeElement
}catch(a){}}function sa(a,b,c,d,e,f){var g,h;
if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);
for(h in b){sa(a,h,c,d,b[h],f)
}return a
}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1){e=qa
}else{if(!e){return a
}}return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)
},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)
})
}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);
if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)
},k.elem=a),b=(b||"").match(G)||[""],h=b.length;
while(h--){f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0)
}a=null
}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);
if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;
while(j--){if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;
while(f--){g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g))
}i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])
}else{for(o in k){n.event.remove(a,o+b[j],c,d,!0)
}}}n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))
}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];
if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);
i;
i=i.parentNode){p.push(i),m=i
}m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)
}o=0;
while((i=p[o++])&&!b.isPropagationStopped()){b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault())
}if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;
try{e[q]()
}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)
}return b.result
}},dispatch:function(a){a=n.event.fix(a);
var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;
while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped()){a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1)){for(;
i!=this;
i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;
h>c;
c++){f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f)
}d.length&&g.push({elem:i,handlers:d})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},fix:function(a){if(a[n.expando]){return a
}var b,c,e,f=a.type,g=a,h=this.fixHooks[f];
h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;
while(b--){c=e[b],a[c]=g[c]
}return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a
},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;
return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus){try{return this.focus(),!1
}catch(a){}}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
},_default:function(a){return n.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});
n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()
}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)
}:function(a,b,c){var d="on"+b;
a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))
},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void (this[n.expando]=!0)):new n.Event(a,b)
},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()
}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;
c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0
}),n._data(c,"submit",!0))
})
},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))
},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")
}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)
}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)
})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;
ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)
}),n._data(b,"change",!0))
})
},handle:function(a){var b=a.target;
return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)
}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))
};
n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);
e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;
e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))
}}
}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)
},one:function(a,b,c,d){return sa(this,a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)
})
},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?n.event.trigger(a,b,c,!0):void 0
}});
var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));
function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a
}function Ea(a){var b=ya.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;
if(h){delete g.handle,g.events={};
for(c in h){for(d=0,e=h[c].length;
e>d;
d++){n.event.add(b,c,h[c][d])
}}}g.data&&(g.data=n.extend({},g.data))
}}function Ga(a,b){var c,d,e;
if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);
for(d in e.events){n.removeEvent(b,d,e.handle)
}b.removeAttribute(n.expando)
}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)
}}function Ha(a,b,c,d){b=f.apply([],b);
var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);
if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q)){return a.each(function(e){var f=a.eq(e);
r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)
})
}if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;
o>m;
m++){g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m)
}if(h){for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;
h>m;
m++){g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")))
}}k=e=null
}return a
}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;
null!=(d=e[f]);
f++){c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d))
}return a
}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")
},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);
if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a))){for(d=ea(f),h=ea(a),g=0;
null!=(e=h[g]);
++g){d[g]&&Ga(e,d[g])
}}if(b){if(c){for(h=h||ea(a),d=d||ea(f),g=0;
null!=(e=h[g]);
g++){Fa(e,d[g])
}}else{Fa(a,f)
}}return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f
},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;
null!=(d=a[h]);
h++){if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events){for(e in g.events){m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle)
}}j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))
}}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)
},remove:function(a){return Ia(this,a)
},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))
},null,a,arguments.length)
},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);
b.appendChild(a)
}})
},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&n.cleanData(ea(a,!1));
while(a.firstChild){a.removeChild(a.firstChild)
}a.options&&n.nodeName(a,"select")&&(a.options.length=0)
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)
})
},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a){return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0
}if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=[];
return Ha(this,arguments,function(b){var c=this.parentNode;
n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))
},a)
}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;
h>=d;
d++){c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get())
}return this.pushStack(e)
}
});
var Ja,Ka={HTML:"block",BODY:"block"};
function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");
return c.detach(),d
}function Ma(a){var b=d,c=Ka[a];
return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c
}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
},Qa=d.documentElement;
!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");
if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f
},boxSizingReliable:function(){return null==b&&k(),e
},pixelMarginRight:function(){return null==b&&k(),c
},pixelPosition:function(){return null==b&&k(),b
},reliableMarginRight:function(){return null==b&&k(),g
},reliableMarginLeft:function(){return null==b&&k(),h
}});
function k(){var k,l,m=d.documentElement;
m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)
}}}();
var Ra,Sa,Ta=/^(top|right|bottom|left)$/;
a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;
return c&&c.opener||(c=a),c.getComputedStyle(b)
},Sa=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""
}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle
},Sa=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"
});
function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)
}}
}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;
function bb(a){if(a in ab){return a
}var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;
while(c--){if(a=_a[c]+b,a in ab){return a
}}}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}function db(a,b,c){var d=Ya.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)))
}return g
}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e)){return e
}d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"
}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;
if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c){return g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]
}if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set" in g&&void 0===(c=g.set(a,c,d))))){try{i[b]=c
}catch(j){}}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);
return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get" in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f
}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)
}):fb(a,b,d):void 0
},set:function(a,c,d){var e=d&&Ra(a);
return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)
}}
}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)
}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0
}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left
}):0))+"px":void 0
}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+V[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},Na.test(a)||(n.cssHooks[a+b].set=db)
}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;
if(n.isArray(b)){for(d=Ra(a),e=b.length;
e>g;
g++){f[b[g]]=n.css(a,b[g],!1,d)
}return f
}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)
},show:function(){return cb(this,!0)
},hide:function(){return cb(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()
})
}});
function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)
}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")
},cur:function(){var a=gb.propHooks[this.prop];
return a&&a.get?a.get(this):gb.propHooks._default.get(this)
},run:function(a){var b,c=gb.propHooks[this.prop];
return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this
}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;
return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)
},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)
}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},n.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};
var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;
function lb(){return a.setTimeout(function(){hb=void 0
}),hb=n.now()
}function mb(a,b){var c,d={height:a},e=0;
for(b=b?1:0;
4>e;
e+=2-b){c=V[e],d["margin"+c]=d["padding"+c]=a
}return b&&(d.opacity=d.width=a),d
}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");
c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d]){continue
}q=!0
}o[d]=r&&r[d]||n.style(a,d)
}else{j=void 0
}}if(n.isEmptyObject(o)){"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j)
}else{r?"hidden" in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()
}),m.done(function(){var b;
n._removeData(a,"fxshow");
for(b in o){n.style(a,b,o[b])
}});
for(d in o){g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function pb(a,b){var c,d,e,f,g;
for(c in a){if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for(pb(k,j.opts.specialEasing);
g>f;
f++){if(d=qb.prefilters[f].call(j,a,k,j.opts)){return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d
}}return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);
return X(c.elem,a,U.exec(b),c),c
}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)
}},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)
}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};
return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)
},d
},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);
(e||n._data(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&kb.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}!b&&c||n.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;
for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];
n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)
}
}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;
for(hb=n.now();
c<b.length;
c++){a=b[c],a()||b[c]!==a||b.splice(c--,1)
}b.length||n.fx.stop(),hb=void 0
},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()
},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))
},n.fx.stop=function(){a.clearInterval(ib),ib=null
},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);
d.stop=function(){a.clearTimeout(e)
}
})
},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));
c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value
}();
var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;
n.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=n.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""
})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)
}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");
return null!=b?b:n.trim(n.text(a)).replace(sb," ")
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;
while(g--){if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1){try{d.selected=c=!0
}catch(h){d.scrollHeight
}}else{d.selected=!1
}}return c||(a.selectedIndex=-1),e
}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0
}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
});
var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;
n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)
})
}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(3!==f&&8!==f&&2!==f){return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get" in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))
}},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);
if(f&&1===a.nodeType){while(c=f[e++]){d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)
}}}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c
}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;
yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;
return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e
}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null
}
}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void (a.defaultValue=b):tb&&tb.set(a,b,c)
}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);
return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0
}},vb.id=vb.name=vb.coords=function(a,b,c){var d;
return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null
},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);
return c&&c.specified?c.value:void 0
},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)
}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0
}}
})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0
},set:function(a,b){return a.style.cssText=b+""
}});
var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;
n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)
},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]
}catch(b){}})
}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;
if(3!==f&&8!==f&&2!==f){return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");
return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)
}}
}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null
},set:function(a){var b=a.parentNode;
b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)
}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this
}),l.enctype||(n.propFix.enctype="encoding");
var Bb=/[\t\r\n\f]/g;
function Cb(a){return n.attr(a,"class")||""
}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;
if(n.isFunction(a)){return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))
})
}if("string"==typeof a&&a){b=a.match(G)||[];
while(c=this[i++]){if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;
while(f=b[g++]){d.indexOf(" "+f+" ")<0&&(d+=f+" ")
}h=n.trim(d),e!==h&&n.attr(c,"class",h)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h,i=0;
if(n.isFunction(a)){return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))
})
}if(!arguments.length){return this.attr("class","")
}if("string"==typeof a&&a){b=a.match(G)||[];
while(c=this[i++]){if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;
while(f=b[g++]){while(d.indexOf(" "+f+" ")>-1){d=d.replace(" "+f+" "," ")
}}h=n.trim(d),e!==h&&n.attr(c,"class",h)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)
}):this.each(function(){var b,d,e,f;
if("string"===c){d=0,e=n(this),f=a.match(G)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))
}})
},hasClass:function(a){var b,c,d=0;
b=" "+a+" ";
while(c=this[d++]){if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1){return !0
}}return !1
}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
}});
var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
n.parseJSON=function(b){if(a.JSON&&a.JSON.parse){return a.JSON.parse(b+"")
}var c,d=null,e=n.trim(b+"");
return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")
}))?Function("return "+e)():n.error("Invalid JSON: "+b)
},n.parseXML=function(b){var c,d;
if(!b||"string"!=typeof b){return null
}try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))
}catch(e){c=void 0
}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c
};
var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];
function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(G)||[];
if(n.isFunction(c)){while(d=f[e++]){"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function Ub(a,b,c,d){var e={},f=a===Pb;
function g(h){var i;
return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};
for(d in b){void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d])
}return c&&n.extend(!0,a,c),a
}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"))
}if(e){for(g in h){if(h[g]&&h[g].test(e)){i.unshift(g);
break
}}}if(i[0] in c){f=i[0]
}else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;
break
}d||(d=g)
}f=f||d
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)
},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};
var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;
if(2===u){if(!k){k={};
while(b=Jb.exec(g)){k[b[1].toLowerCase()]=b[2]
}}b=k[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===u?g:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return u||(a=t[c]=t[c]||a,s[a]=b),this
},overrideMimeType:function(a){return u||(l.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>u){for(b in a){r[b]=[r[b],a[b]]
}}else{w.always(a[w.status])
}}return this
},abort:function(a){var b=a||v;
return j&&j.abort(b),y(0,b),this
}};
if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u){return w
}i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);
for(e in l.headers){w.setRequestHeader(e,l.headers[e])
}if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u)){return w.abort()
}v="abort";
for(e in {success:1,error:1,complete:1}){w[e](l[e])
}if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u){return w
}l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")
},l.timeout));
try{u=1,j.send(s,y)
}catch(x){if(!(2>u)){throw x
}y(-1,x)
}}else{y(-1,"No Transport")
}function y(b,c,d,e){var k,s,t,v,x,y=c;
2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))
}return w
},getJSON:function(a,b,c){return n.get(a,b,c,"json")
},getScript:function(a,b){return n.get(a,void 0,b,"script")
}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))
}
}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})
},n.fn.extend({wrapAll:function(a){if(n.isFunction(a)){return this.each(function(b){n(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&1===a.firstChild.nodeType){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))
}):this.each(function(){var b=n(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=n.isFunction(a);
return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)
}).end()
}});
function Yb(a){return a.style&&a.style.display||n.css(a,"display")
}function Zb(a){if(!n.contains(a.ownerDocument||d,a)){return !0
}while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type){return !0
}a=a.parentNode
}return !1
}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)
},n.expr.filters.visible=function(a){return !n.expr.filters.hidden(a)
};
var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;
function dc(a,b,c,d){var e;
if(n.isArray(b)){n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==n.type(b)){d(a,b)
}else{for(e in b){dc(a+"["+e+"]",b[e],c,d)
}}}}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a)){n.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){dc(c,a[c],b,e)
}}return d.join("&").replace($b,"+")
},n.fn.extend({serialize:function(){return n.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");
return a?n.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))
}).map(function(a,b){var c=n(this).val();
return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}
}):{name:b.name,value:c.replace(ac,"\r\n")}
}).get()
}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()
}:hc;
var ec=0,fc={},gc=n.ajaxSettings.xhr();
a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc){fc[a](void 0,!0)
}}),l.cors=!!gc&&"withCredentials" in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;
return{send:function(d,e){var f,g=b.xhr(),h=++ec;
if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields){for(f in b.xhrFields){g[f]=b.xhrFields[f]
}}b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");
for(f in d){void 0!==d[f]&&g.setRequestHeader(f,d[f]+"")
}g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;
if(c&&(d||4===g.readyState)){if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d){4!==g.readyState&&g.abort()
}else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);
try{i=g.statusText
}catch(k){i=""
}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404
}}j&&e(f,i,j,g.getAllResponseHeaders())
},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()
},abort:function(){c&&c(void 0,!0)
}}
}});
function hc(){try{return new a.XMLHttpRequest
}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a
}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;
return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))
},c.insertBefore(b,c.firstChild)
},abort:function(){b&&b.onload(void 0,!0)
}}
}});
var jc=[],kc=/(=)\?(?=&|$)|\?\?/;
n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;
return this[a]=!0,a
}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||d;
var e=x.exec(a),f=!c&&[];
return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))
};
var lc=n.fn.load;
n.fn.load=function(a,b,c){if("string"!=typeof a&&lc){return lc.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)
}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])
})
}),this
},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)
}
}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem
}).length
};
function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1
}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using" in b?b.using.call(a,m):l.css(m)
}},n.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)
})
}var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;
if(f){return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d
}},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;
while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position")){a=a.offsetParent
}return a||Qa
})
}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);
n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);
return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void (f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)
},a,d,arguments.length,null)
}
}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0
})
}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return Y(this,function(b,c,d){var e;
return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}}),n.fn.size=function(){return this.length
},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n
});
var nc=a.jQuery,oc=a.$;
return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n
},b||(a.jQuery=a.$=n),n
});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(e){var c=e.fn.jquery.split(" ")[0].split(".");
if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1||c[0]>3){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}}(jQuery),+function(e){function c(){var g=document.createElement("bootstrap"),f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var h in f){if(void 0!==g.style[h]){return{end:f[h]}
}}return !1
}e.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
e(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||e(g).trigger(e.support.transition.end)
};
return setTimeout(f,a),this
},e(function(){e.support.transition=c(),e.support.transition&&(e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(a){if(e(a.target).is(this)){return a.handleObj.handler.apply(this,arguments)
}}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var n=g(this),b=n.data("bs.alert");
b||n.data("bs.alert",b=new j(this)),"string"==typeof a&&b[a].call(n)
})
}var l='[data-dismiss="alert"]',j=function(a){g(a).on("click",l,this.close)
};
j.VERSION="3.3.7",j.TRANSITION_DURATION=150,j.prototype.close=function(a){function q(){n.detach().trigger("closed.bs.alert").remove()
}var p=g(this),o=p.attr("data-target");
o||(o=p.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,""));
var n=g("#"===o?[]:o);
a&&a.preventDefault(),n.length||(n=p.closest(".alert")),n.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(n.removeClass("in"),g.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",q).emulateTransitionEnd(j.TRANSITION_DURATION):q())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=j,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",l,j.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),c=j.data("bs.button"),b="object"==typeof a&&a;
c||j.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.3.7",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var o="disabled",n=this.$element,l=n.is("input")?"val":"html",j=n.data();
a+="Text",null==j.resetText&&n.data("resetText",n[l]()),setTimeout(f.proxy(function(){n[l](null==j[a]?this.options[a]:j[a]),"loadingText"==a?(this.isLoading=!0,n.addClass(o).attr(o,o).prop(o,!0)):this.isLoading&&(this.isLoading=!1,n.removeClass(o).removeAttr(o).prop(o,!1))
},this),0)
},h.prototype.toggle=function(){var l=!0,j=this.$element.closest('[data-toggle="buttons"]');
if(j.length){var n=this.$element.find("input");
"radio"==n.prop("type")?(n.prop("checked")&&(l=!1),j.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(l=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),l&&n.trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")
}};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target).closest(".btn");
e.call(a,"toggle"),f(b.target).is('input[type="radio"], input[type="checkbox"]')||(b.preventDefault(),a.is("input,button")?a.trigger("focus"):a.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))
})
}(jQuery),+function(g){function f(a){return this.each(function(){var o=g(this),n=o.data("bs.carousel"),c=g.extend({},l.DEFAULTS,o.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
n||o.data("bs.carousel",n=new l(this,c)),"number"==typeof a?n.to(a):b?n[b]():c.interval&&n.pause().cycle()
})
}var l=function(a,e){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))
};
l.VERSION="3.3.7",l.TRANSITION_DURATION=600,l.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},l.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
}},l.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this
},l.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},l.prototype.getItemForDirection=function(o,n){var s=this.getItemIndex(n),r="prev"==o&&0===s||"next"==o&&s==this.$items.length-1;
if(r&&!this.options.wrap){return n
}var q="prev"==o?-1:1,p=(s+q)%this.$items.length;
return this.$items.eq(p)
},l.prototype.to=function(n){var e=this,o=this.getItemIndex(this.$active=this.$element.find(".item.active"));
if(!(n>this.$items.length-1||n<0)){return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(n)
}):o==n?this.pause().cycle():this.slide(n>o?"next":"prev",this.$items.eq(n))
}},l.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},l.prototype.next=function(){if(!this.sliding){return this.slide("next")
}},l.prototype.prev=function(){if(!this.sliding){return this.slide("prev")
}},l.prototype.slide=function(v,u){var t=this.$element.find(".item.active"),s=u||this.getItemForDirection(v,t),r=this.interval,q="next"==v?"left":"right",p=this;
if(s.hasClass("active")){return this.sliding=!1
}var o=s[0],n=g.Event("slide.bs.carousel",{relatedTarget:o,direction:q});
if(this.$element.trigger(n),!n.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=g(this.$indicators.children()[this.getItemIndex(s)]);
c&&c.addClass("active")
}var a=g.Event("slid.bs.carousel",{relatedTarget:o,direction:q});
return g.support.transition&&this.$element.hasClass("slide")?(s.addClass(v),s[0].offsetWidth,t.addClass(q),s.addClass(q),t.one("bsTransitionEnd",function(){s.removeClass([v,q].join(" ")).addClass("active"),t.removeClass(["active",q].join(" ")),p.sliding=!1,setTimeout(function(){p.$element.trigger(a)
},0)
}).emulateTransitionEnd(l.TRANSITION_DURATION)):(t.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(a)),r&&this.cycle(),this
}};
var j=g.fn.carousel;
g.fn.carousel=f,g.fn.carousel.Constructor=l,g.fn.carousel.noConflict=function(){return g.fn.carousel=j,this
};
var h=function(q){var p,o=g(this),n=g(o.attr("data-target")||(p=o.attr("href"))&&p.replace(/.*(?=#[^\s]+$)/,""));
if(n.hasClass("carousel")){var b=g.extend({},n.data(),o.data()),a=o.attr("data-slide-to");
a&&(b.interval=!1),f.call(n,b),a&&n.data("bs.carousel").to(a),q.preventDefault()
}};
g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);
f.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){var n,e=a.attr("data-target")||(n=a.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");
return g(e)
}function l(a){return this.each(function(){var o=g(this),n=o.data("bs.collapse"),b=g.extend({},j.DEFAULTS,o.data(),"object"==typeof a&&a);
!n&&b.toggle&&/show|hide/.test(a)&&(b.toggle=!1),n||o.data("bs.collapse",n=new j(this,b)),"string"==typeof a&&n[a]()
})
}var j=function(a,e){this.$element=g(a),this.options=g.extend({},j.DEFAULTS,e),this.$trigger=g('[data-toggle="collapse"][href="#'+a.id+'"],[data-toggle="collapse"][data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
j.VERSION="3.3.7",j.TRANSITION_DURATION=350,j.DEFAULTS={toggle:!0},j.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},j.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,q=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(q&&q.length&&(a=q.data("bs.collapse"),a&&a.transitioning))){var p=g.Event("show.bs.collapse");
if(this.$element.trigger(p),!p.isDefaultPrevented()){q&&q.length&&(l.call(q,"hide"),a||q.data("bs.collapse",null));
var o=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!g.support.transition){return n.call(this)
}var c=g.camelCase(["scroll",o].join("-"));
this.$element.one("bsTransitionEnd",g.proxy(n,this)).emulateTransitionEnd(j.TRANSITION_DURATION)[o](this.$element[0][c])
}}}},j.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var o=this.dimension();
this.$element[o](this.$element[o]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return g.support.transition?void this.$element[o](0).one("bsTransitionEnd",g.proxy(n,this)).emulateTransitionEnd(j.TRANSITION_DURATION):n.call(this)
}}},j.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},j.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(n,b){var a=g(b);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},j.prototype.addAriaAndCollapsedClass=function(n,e){var o=n.hasClass("in");
n.attr("aria-expanded",o),e.toggleClass("collapsed",!o).attr("aria-expanded",o)
};
var h=g.fn.collapse;
g.fn.collapse=l,g.fn.collapse.Constructor=j,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this
},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=g(this);
n.attr("data-target")||o.preventDefault();
var c=f(n),b=c.data("bs.collapse"),a=b?"toggle":n.data();
l.call(c,a)
})
}(jQuery),+function(l){function j(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&l(f);
return e&&e.length?e:a.parent()
}function s(a){a&&3===a.which||(l(q).remove(),l(p).each(function(){var g=l(this),c=j(g),b={relatedTarget:this};
c.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&l.contains(c[0],a.target)||(c.trigger(a=l.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger(l.Event("hidden.bs.dropdown",b)))))
}))
}function r(a){return this.each(function(){var e=l(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new o(this)),"string"==typeof a&&b[a].call(e)
})
}var q=".dropdown-backdrop",p='[data-toggle="dropdown"]',o=function(a){l(a).on("click.bs.dropdown",this.toggle)
};
o.VERSION="3.3.7",o.prototype.toggle=function(u){var t=l(this);
if(!t.is(".disabled, :disabled")){var c=j(t),b=c.hasClass("open");
if(s(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&l(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(l(this)).on("click",s);
var a={relatedTarget:this};
if(c.trigger(u=l.Event("show.bs.dropdown",a)),u.isDefaultPrevented()){return
}t.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger(l.Event("shown.bs.dropdown",a))
}return !1
}},o.prototype.keydown=function(w){if(/(38|40|27|32)/.test(w.which)&&!/input|textarea/i.test(w.target.tagName)){var v=l(this);
if(w.preventDefault(),w.stopPropagation(),!v.is(".disabled, :disabled")){var u=j(v),t=u.hasClass("open");
if(!t&&27!=w.which||t&&27==w.which){return 27==w.which&&u.find(p).trigger("focus"),v.trigger("click")
}var f=" li:not(.disabled):visible a",b=u.find(".dropdown-menu"+f);
if(b.length){var a=b.index(w.target);
38==w.which&&a>0&&a--,40==w.which&&a<b.length-1&&a++,~a||(a=0),b.eq(a).trigger("focus")
}}}};
var n=l.fn.dropdown;
l.fn.dropdown=r,l.fn.dropdown.Constructor=o,l.fn.dropdown.noConflict=function(){return l.fn.dropdown=n,this
},l(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",p,o.prototype.toggle).on("keydown.bs.dropdown.data-api",p,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var l=f(this),j=l.data("bs.modal"),b=f.extend({},h.DEFAULTS,l.data(),"object"==typeof a&&a);
j||l.data("bs.modal",j=new h(this,b)),"string"==typeof a?j[a](c):b.show&&j.show(c)
})
}var h=function(a,j){this.options=j,this.$body=f(document.body),this.$element=f(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.3.7",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var j=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){j.$element.one("mouseup.dismiss.bs.modal",function(l){f(l.target).is(j.$element)&&(j.ignoreBackdropClick=!0)
})
}),this.backdrop(function(){var l=f.support.transition&&j.$element.hasClass("fade");
j.$element.parent().length||j.$element.appendTo(j.$body),j.$element.show().scrollTop(0),j.adjustDialog(),l&&j.$element[0].offsetWidth,j.$element.addClass("in"),j.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
l?j.$dialog.one("bsTransitionEnd",function(){j.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):j.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){document===b.target||this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var n=this,l=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var j=f.support.transition&&l;
if(this.$backdrop=f(document.createElement("div")).addClass("modal-backdrop "+l).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",f.proxy(function(b){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))
},this)),j&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}j?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){n.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.handleUpdate=function(){this.adjustDialog()
},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})
},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},h.prototype.checkScrollbar=function(){var j=window.innerWidth;
if(!j){var c=document.documentElement.getBoundingClientRect();
j=c.right-Math.abs(c.left)
}this.bodyIsOverflowing=document.body.clientWidth<j,this.scrollbarWidth=this.measureScrollbar()
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
},h.prototype.measureScrollbar=function(){var j=document.createElement("div");
j.className="modal-scrollbar-measure",this.$body.append(j);
var c=j.offsetWidth-j.clientWidth;
return this.$body[0].removeChild(j),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var l=f(this),j=l.attr("href"),b=f(l.attr("data-target")||j&&j.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(j)&&j},b.data(),l.data());
l.is("a")&&n.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){l.is(":visible")&&l.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),c=j.data("bs.tooltip"),b="object"==typeof a&&a;
!c&&/destroy|hide/.test(a)||(c||j.data("bs.tooltip",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(j,c){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",j,c)
};
h.VERSION="3.3.7",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,r,q){if(this.enabled=!0,this.type=a,this.$element=f(r),this.options=this.getOptions(q),this.$viewport=this.options.viewport&&f(f.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}for(var p=this.options.trigger.split(" "),o=p.length;
o--;
){var n=p[o];
if("click"==n){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=n){var l="hover"==n?"mouseenter":"focusin",j="hover"==n?"mouseleave":"focusout";
this.$element.on(l+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},j=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){j[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var j=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return j||(j=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,j)),a instanceof f.Event&&(j.inState["focusin"==a.type?"focus":"hover"]=!0),j.tip().hasClass("in")||"in"==j.hoverState?void (j.hoverState="in"):(clearTimeout(j.timeout),j.hoverState="in",j.options.delay&&j.options.delay.show?void (j.timeout=setTimeout(function(){"in"==j.hoverState&&j.show()
},j.options.delay.show)):j.show())
},h.prototype.isInStateTrue=function(){for(var b in this.inState){if(this.inState[b]){return !0
}}return !1
},h.prototype.leave=function(a){var j=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
if(j||(j=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,j)),a instanceof f.Event&&(j.inState["focusout"==a.type?"focus":"hover"]=!1),!j.isInStateTrue()){return clearTimeout(j.timeout),j.hoverState="out",j.options.delay&&j.options.delay.hide?void (j.timeout=setTimeout(function(){"out"==j.hoverState&&j.hide()
},j.options.delay.hide)):j.hide()
}},h.prototype.show=function(){var D=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(D);
var C=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(D.isDefaultPrevented()||!C){return
}var B=this,A=this.tip(),z=this.getUID(this.type);
this.setContent(),A.attr("id",z),this.$element.attr("aria-describedby",z),this.options.animation&&A.addClass("fade");
var y="function"==typeof this.options.placement?this.options.placement.call(this,A[0],this.$element[0]):this.options.placement,x=/\s?auto?\s?/i,w=x.test(y);
w&&(y=y.replace(x,"")||"top"),A.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?A.appendTo(this.options.container):A.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);
var v=this.getPosition(),u=A[0].offsetWidth,t=A[0].offsetHeight;
if(w){var s=y,r=this.getPosition(this.$viewport);
y="bottom"==y&&v.bottom+t>r.bottom?"top":"top"==y&&v.top-t<r.top?"bottom":"right"==y&&v.right+u>r.width?"left":"left"==y&&v.left-u<r.left?"right":y,A.removeClass(s).addClass(y)
}var c=this.getCalculatedOffset(y,v,u,t);
this.applyPlacement(c,y);
var a=function(){var b=B.hoverState;
B.$element.trigger("shown.bs."+B.type),B.hoverState=null,"out"==b&&B.leave(B)
};
f.support.transition&&this.$tip.hasClass("fade")?A.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top+=u,z.left+=t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(o,x[0][a],p)
},h.prototype.replaceArrow=function(l,j,n){this.arrow().css(n?"left":"top",50*(1-l/j)+"%").css(n?"top":"left","")
},h.prototype.setContent=function(){var j=this.tip(),c=this.getTitle();
j.find(".tooltip-inner")[this.options.html?"html":"text"](c),j.removeClass("fade in top bottom left right")
},h.prototype.hide=function(a){function n(){"in"!=l.hoverState&&j.detach(),l.$element&&l.$element.removeAttr("aria-describedby").trigger("hidden.bs."+l.type),a&&a()
}var l=this,j=f(this.$tip),c=f.Event("hide.bs."+this.type);
if(this.$element.trigger(c),!c.isDefaultPrevented()){return j.removeClass("in"),f.support.transition&&j.hasClass("fade")?j.one("bsTransitionEnd",n).emulateTransitionEnd(h.TRANSITION_DURATION):n(),this.hoverState=null,this
}},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var r=a[0],q="BODY"==r.tagName,p=r.getBoundingClientRect();
null==p.width&&(p=f.extend({},p,{width:p.right-p.left,height:p.bottom-p.top}));
var o=window.SVGElement&&r instanceof window.SVGElement,n=q?{top:0,left:0}:o?null:a.offset(),l={scroll:q?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},j=q?{width:f(window).width(),height:f(window).height()}:null;
return f.extend({},p,l,j,n)
},h.prototype.getCalculatedOffset=function(l,j,o,n){return"bottom"==l?{top:j.top+j.height,left:j.left+j.width/2-o/2}:"top"==l?{top:j.top-n,left:j.left+j.width/2-o/2}:"left"==l?{top:j.top+j.height/2-n/2,left:j.left-o}:{top:j.top+j.height/2-n/2,left:j.left+j.width}
},h.prototype.getViewportAdjustedDelta=function(w,v,u,t){var s={top:0,left:0};
if(!this.$viewport){return s
}var r=this.options.viewport&&this.options.viewport.padding||0,q=this.getPosition(this.$viewport);
if(/right|left/.test(w)){var p=v.top-r-q.scroll,o=v.top+r-q.scroll+t;
p<q.top?s.top=q.top-p:o>q.top+q.height&&(s.top=q.top+q.height-o)
}else{var n=v.left-r,l=v.left+r+u;
n<q.left?s.left=q.left-n:l>q.right&&(s.left=q.left+q.width-l)
}return s
},h.prototype.getTitle=function(){var l,j=this.$element,n=this.options;
return l=j.attr("data-original-title")||("function"==typeof n.title?n.title.call(j[0]):n.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){if(!this.$tip&&(this.$tip=f(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}return this.$tip
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var j=this;
a&&(j=f(a.currentTarget).data("bs."+this.type),j||(j=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,j))),a?(j.inState.click=!j.inState.click,j.isInStateTrue()?j.enter(j):j.leave(j)):j.tip().hasClass("in")?j.leave(j):j.enter(j)
},h.prototype.destroy=function(){var b=this;
clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type),b.$tip&&b.$tip.detach(),b.$tip=null,b.$arrow=null,b.$viewport=null,b.$element=null
})
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),c=j.data("bs.popover"),b="object"==typeof a&&a;
!c&&/destroy|hide/.test(a)||(c||j.data("bs.popover",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(j,c){this.init("popover",j,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.3.7",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var l=this.tip(),j=this.getTitle(),n=this.getContent();
l.find(".popover-title")[this.options.html?"html":"text"](j),l.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),l.removeClass("fade top bottom left right in"),l.find(".popover-title").html()||l.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var j=this.$element,c=this.options;
return j.attr("data-content")||("function"==typeof c.content?c.content.call(j[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(b,a){this.$body=f(document.body),this.$scrollElement=f(f(b).is(document.body)?window:b),this.options=f.extend({},e.DEFAULTS,a),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",f.proxy(this.process,this)),this.refresh(),this.process()
}function h(a){return this.each(function(){var j=f(this),c=j.data("bs.scrollspy"),b="object"==typeof a&&a;
c||j.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a=this,l="offset",j=0;
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),f.isWindow(this.$scrollElement[0])||(l="position",j=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var c=f(this),o=c.data("target")||c.attr("href"),n=/^#./.test(o)&&f(o);
return n&&n.length&&n.is(":visible")&&[[n[l]().top+j,o]]||null
}).sort(function(n,c){return n[0]-c[0]
}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])
})
},e.prototype.process=function(){var l,j=this.$scrollElement.scrollTop()+this.options.offset,r=this.getScrollHeight(),q=this.options.offset+r-this.$scrollElement.height(),p=this.offsets,o=this.targets,n=this.activeTarget;
if(this.scrollHeight!=r&&this.refresh(),j>=q){return n!=(l=o[o.length-1])&&this.activate(l)
}if(n&&j<p[0]){return this.activeTarget=null,this.clear()
}for(l=p.length;
l--;
){n!=o[l]&&j>=p[l]&&(void 0===p[l+1]||j<p[l+1])&&this.activate(o[l])
}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();
var l=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',j=f(l).parents("li").addClass("active");
j.parent(".dropdown-menu").length&&(j=j.closest("li.dropdown").addClass("active")),j.trigger("activate.bs.scrollspy")
},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new l(this)),"string"==typeof a&&b[a]()
})
}var l=function(a){this.element=g(a)
};
l.VERSION="3.3.7",l.TRANSITION_DURATION=150,l.prototype.show=function(){var a=this.element,s=a.closest("ul:not(.dropdown-menu)"),r=a.data("target");
if(r||(r=a.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var q=s.find(".active:last a"),p=g.Event("hide.bs.tab",{relatedTarget:a[0]}),o=g.Event("show.bs.tab",{relatedTarget:q[0]});
if(q.trigger(p),a.trigger(o),!o.isDefaultPrevented()&&!p.isDefaultPrevented()){var n=g(r);
this.activate(a.closest("li"),s),this.activate(n,n.parent(),function(){q.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:q[0]})
})
}}},l.prototype.activate=function(a,q,p){function o(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),p&&p()
}var n=q.find("> .active"),c=p&&g.support.transition&&(n.length&&n.hasClass("fade")||!!q.find("> .fade").length);
n.length&&c?n.one("bsTransitionEnd",o).emulateTransitionEnd(l.TRANSITION_DURATION):o(),n.removeClass("in")
};
var j=g.fn.tab;
g.fn.tab=f,g.fn.tab.Constructor=l,g.fn.tab.noConflict=function(){return g.fn.tab=j,this
};
var h=function(a){a.preventDefault(),f.call(g(this),"show")
};
g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),c=j.data("bs.affix"),b="object"==typeof a&&a;
c||j.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.3.7",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(v,u,t,s){var r=this.$target.scrollTop(),q=this.$element.offset(),p=this.$target.height();
if(null!=t&&"top"==this.affixed){return r<t&&"top"
}if("bottom"==this.affixed){return null!=t?!(r+this.unpin<=q.top)&&"bottom":!(r+p<=v-s)&&"bottom"
}var o=null==this.affixed,n=o?r:q.top,l=o?p:u;
return null!=t&&r<=t?"top":null!=s&&n+l>=v-s&&"bottom"
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var j=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-j
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),r=this.options.offset,q=r.top,p=r.bottom,o=Math.max(f(document).height(),f(document.body).height());
"object"!=typeof r&&(p=q=r),"function"==typeof q&&(q=r.top(this.$element)),"function"==typeof p&&(p=r.bottom(this.$element));
var n=this.getState(o,a,q,p);
if(this.affixed!=n){null!=this.unpin&&this.$element.css("top","");
var l="affix"+(n?"-"+n:""),c=f.Event(l+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=n,this.unpin="bottom"==n?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")
}"bottom"==n&&this.$element.offset({top:o-a-p})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
!function(a,b){"function"==typeof define&&define.amd?define("bloodhound",["jquery"],function(c){return a.Bloodhound=b(c)
}):"object"==typeof exports?module.exports=b(require("jquery")):a.Bloodhound=b(jQuery)
}(this,function(z){var v=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1
},isBlankString:function(a){return !a||/^\s*$/.test(a)
},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(a){return"string"==typeof a
},isNumber:function(a){return"number"==typeof a
},isArray:z.isArray,isFunction:z.isFunction,isObject:z.isPlainObject,isUndefined:function(a){return"undefined"==typeof a
},isElement:function(a){return !(!a||1!==a.nodeType)
},isJQuery:function(a){return a instanceof z
},toStr:function(a){return v.isUndefined(a)||null===a?"":a+""
},bind:z.proxy,each:function(c,h){function a(l,n){return h(n,l)
}z.each(c,a)
},map:z.map,filter:z.grep,every:function(c,h){var a=!0;
return c?(z.each(c,function(e,l){return(a=h.call(null,l,e,c))?void 0:!1
}),!!a):a
},some:function(c,h){var a=!1;
return c?(z.each(c,function(e,l){return(a=h.call(null,l,e,c))?!1:void 0
}),!!a):a
},mixin:z.extend,identity:function(a){return a
},clone:function(a){return z.extend(!0,{},a)
},getIdGenerator:function(){var a=0;
return function(){return a++
}
},templatify:function(a){function c(){return String(a)
}return z.isFunction(a)?a:c
},defer:function(a){setTimeout(a,0)
},debounce:function(c,l,o){var a,h;
return function(){var r,t,n=this,e=arguments;
return r=function(){a=null,o||(h=c.apply(n,e))
},t=o&&!a,clearTimeout(a),a=setTimeout(r,l),t&&(h=c.apply(n,e)),h
}
},throttle:function(h,C){var E,c,B,l,D,a;
return D=0,a=function(){D=new Date,B=null,l=h.apply(E,c)
},function(){var e=new Date,n=C-(e-D);
return E=this,c=arguments,0>=n?(clearTimeout(B),B=null,D=e,l=h.apply(E,c)):B||(B=setTimeout(a,n)),l
}
},stringify:function(a){return v.isString(a)?a:JSON.stringify(a)
},noop:function(){}}
}(),g="0.11.1",p=function(){function c(h){return h=v.toStr(h),h?h.split(/\s+/):[]
}function e(h){return h=v.toStr(h),h?h.split(/\W+/):[]
}function a(h){return function(l){return l=v.isArray(l)?l:[].slice.call(arguments,0),function(n){var o=[];
return v.each(l,function(r){o=o.concat(h(v.toStr(n[r])))
}),o
}
}
}return{nonword:e,whitespace:c,obj:{nonword:a(e),whitespace:a(c)}}
}(),b=function(){function e(h){this.maxSize=v.isNumber(h)?h:100,this.reset(),this.maxSize<=0&&(this.set=this.get=z.noop)
}function a(){this.head=this.tail=null
}function c(h,l){this.key=h,this.val=l,this.prev=this.next=null
}return v.mixin(e.prototype,{set:function(l,o){var r,h=this.list.tail;
this.size>=this.maxSize&&(this.list.remove(h),delete this.hash[h.key],this.size--),(r=this.hash[l])?(r.val=o,this.list.moveToFront(r)):(r=new c(l,o),this.list.add(r),this.hash[l]=r,this.size++)
},get:function(h){var l=this.hash[h];
return l?(this.list.moveToFront(l),l.val):void 0
},reset:function(){this.size=0,this.hash={},this.list=new a
}}),v.mixin(a.prototype,{add:function(h){this.head&&(h.next=this.head,this.head.prev=h),this.head=h,this.tail=this.tail||h
},remove:function(h){h.prev?h.prev.next=h.next:this.head=h.next,h.next?h.next.prev=h.prev:this.tail=h.prev
},moveToFront:function(h){this.remove(h),this.add(h)
}}),e
}(),A=function(){function C(a,o){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+v.escapeRegExChars(this.prefix)),this.ls=o||e,!this.ls&&this._noop()
}function h(){return(new Date).getTime()
}function t(a){return JSON.stringify(v.isUndefined(a)?null:a)
}function l(a){return z.parseJSON(a)
}function B(o){var u,D,a=[],s=e.length;
for(u=0;
s>u;
u++){(D=e.key(u)).match(o)&&a.push(D.replace(o,""))
}return a
}var e;
try{e=window.localStorage,e.setItem("~~~","!"),e.removeItem("~~~")
}catch(c){e=null
}return v.mixin(C.prototype,{_prefix:function(a){return this.prefix+a
},_ttlKey:function(a){return this._prefix(a)+this.ttlKey
},_noop:function(){this.get=this.set=this.remove=this.clear=this.isExpired=v.noop
},_safeSet:function(a,o){try{this.ls.setItem(a,o)
}catch(r){"QuotaExceededError"===r.name&&(this.clear(),this._noop())
}},get:function(a){return this.isExpired(a)&&this.remove(a),l(this.ls.getItem(this._prefix(a)))
},set:function(a,r,o){return v.isNumber(o)?this._safeSet(this._ttlKey(a),t(h()+o)):this.ls.removeItem(this._ttlKey(a)),this._safeSet(this._prefix(a),t(r))
},remove:function(a){return this.ls.removeItem(this._ttlKey(a)),this.ls.removeItem(this._prefix(a)),this
},clear:function(){var a,n=B(this.keyMatcher);
for(a=n.length;
a--;
){this.remove(n[a])
}return this
},isExpired:function(a){var o=l(this.ls.getItem(this._ttlKey(a)));
return v.isNumber(o)&&h()>o?!0:!1
}}),C
}(),f=function(){function l(n){n=n||{},this.cancelled=!1,this.lastReq=null,this._send=n.transport,this._get=n.limiter?n.limiter(this._get):this._get,this._cache=n.cache===!1?new b(0):a
}var c=0,e={},h=6,a=new b(10);
return l.setMaxPendingRequests=function(n){h=n
},l.resetCache=function(){a.reset()
},v.mixin(l.prototype,{_fingerprint:function(n){return n=n||{},n.url+n.type+z.param(n.data||{})
},_get:function(B,E){function G(n){E(null,n),C._cache.set(o,n)
}function D(){E(!0)
}function s(){c--,delete e[o],C.onDeckRequestArgs&&(C._get.apply(C,C.onDeckRequestArgs),C.onDeckRequestArgs=null)
}var o,F,C=this;
o=this._fingerprint(B),this.cancelled||o!==this.lastReq||((F=e[o])?F.done(G).fail(D):h>c?(c++,e[o]=this._send(B).done(G).fail(D).always(s)):this.onDeckRequestArgs=[].slice.call(arguments,0))
},get:function(B,o){var u,t;
o=o||z.noop,B=v.isString(B)?{url:B}:B||{},t=this._fingerprint(B),this.cancelled=!1,this.lastReq=t,(u=this._cache.get(t))?o(null,u):this._get(B,o)
},cancel:function(){this.cancelled=!0
}}),l
}(),y=window.SearchIndex=function(){function C(a){a=a||{},a.datumTokenizer&&a.queryTokenizer||z.error("datumTokenizer and queryTokenizer are both required"),this.identify=a.identify||v.stringify,this.datumTokenizer=a.datumTokenizer,this.queryTokenizer=a.queryTokenizer,this.reset()
}function h(a){return a=v.filter(a,function(n){return !!n
}),a=v.map(a,function(n){return n.toLowerCase()
})
}function t(){var a={};
return a[c]=[],a[e]={},a
}function l(o){for(var u={},D=[],a=0,s=o.length;
s>a;
a++){u[o[a]]||(u[o[a]]=!0,D.push(o[a]))
}return D
}function B(u,F){var H=0,a=0,E=[];
u=u.sort(),F=F.sort();
for(var D=u.length,G=F.length;
D>H&&G>a;
){u[H]<F[a]?H++:u[H]>F[a]?a++:(E.push(u[H]),H++,a++)
}return E
}var e="c",c="i";
return v.mixin(C.prototype,{bootstrap:function(a){this.datums=a.datums,this.trie=a.trie
},add:function(a){var o=this;
a=v.isArray(a)?a:[a],v.each(a,function(n){var r,u;
o.datums[r=o.identify(n)]=n,u=h(o.datumTokenizer(n)),v.each(u,function(D){var E,s,F;
for(E=o.trie,s=D.split("");
F=s.shift();
){E=E[e][F]||(E[e][F]=t()),E[c].push(r)
}})
})
},get:function(a){var o=this;
return v.map(a,function(n){return o.datums[n]
})
},search:function(a){var u,o,s=this;
return u=h(this.queryTokenizer(a)),v.each(u,function(D){var F,G,r,E;
if(o&&0===o.length){return !1
}for(F=s.trie,G=D.split("");
F&&(r=G.shift());
){F=F[e][r]
}return F&&0===G.length?(E=F[c].slice(0),void (o=o?B(o,E):E)):(o=[],!1)
}),o?v.map(l(o),function(n){return s.datums[n]
}):[]
},all:function(){var a=[];
for(var n in this.datums){a.push(this.datums[n])
}return a
},reset:function(){this.datums={},this.trie=t()
},serialize:function(){return{datums:this.datums,trie:this.trie}
}}),C
}(),x=function(){function a(e){this.url=e.url,this.ttl=e.ttl,this.cache=e.cache,this.prepare=e.prepare,this.transform=e.transform,this.transport=e.transport,this.thumbprint=e.thumbprint,this.storage=new A(e.cacheKey)
}var c;
return c={data:"data",protocol:"protocol",thumbprint:"thumbprint"},v.mixin(a.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}
},store:function(e){this.cache&&(this.storage.set(c.data,e,this.ttl),this.storage.set(c.protocol,location.protocol,this.ttl),this.storage.set(c.thumbprint,this.thumbprint,this.ttl))
},fromCache:function(){var h,l={};
return this.cache?(l.data=this.storage.get(c.data),l.protocol=this.storage.get(c.protocol),l.thumbprint=this.storage.get(c.thumbprint),h=l.thumbprint!==this.thumbprint||l.protocol!==location.protocol,l.data&&!h?l.data:null):null
},fromNetwork:function(l){function s(){l(!0)
}function u(n){l(null,o.transform(n))
}var h,o=this;
l&&(h=this.prepare(this._settings()),this.transport(h).fail(s).done(u))
},clear:function(){return this.storage.clear(),this
}}),a
}(),w=function(){function a(c){this.url=c.url,this.prepare=c.prepare,this.transform=c.transform,this.transport=new f({cache:c.cache,limiter:c.limiter,transport:c.transport})
}return v.mixin(a.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}
},get:function(h,o){function s(e,r){o(e?[]:l.transform(r))
}var c,l=this;
if(o){return h=h||"",c=this.prepare(h,this._settings()),this.transport.get(c,s)
}},cancelLastRequest:function(){this.transport.cancel()
}}),a
}(),q=function(){function c(n){var o;
return n?(o={url:null,ttl:86400000,cache:!0,cacheKey:null,thumbprint:"",prepare:v.identity,transform:v.identity,transport:null},n=v.isString(n)?{url:n}:n,n=v.mixin(o,n),!n.url&&z.error("prefetch requires url to be set"),n.transform=n.filter||n.transform,n.cacheKey=n.cacheKey||n.url,n.thumbprint=g+n.thumbprint,n.transport=n.transport?a(n.transport):z.ajax,n):null
}function h(r){var o;
if(r){return o={url:null,cache:!0,prepare:null,replace:null,wildcard:null,limiter:null,rateLimitBy:"debounce",rateLimitWait:300,transform:v.identity,transport:null},r=v.isString(r)?{url:r}:r,r=v.mixin(o,r),!r.url&&z.error("remote requires url to be set"),r.transform=r.filter||r.transform,r.prepare=e(r),r.limiter=l(r),r.transport=r.transport?a(r.transport):z.ajax,delete r.replace,delete r.wildcard,delete r.rateLimitBy,delete r.rateLimitWait,r
}}function e(B){function E(n,o){return o.url=C(o.url,n),o
}function G(n,o){return o.url=o.url.replace(F,encodeURIComponent(n)),o
}function u(n,o){return o
}var D,C,F;
return D=B.prepare,C=B.replace,F=B.wildcard,D?D:D=C?E:B.wildcard?G:u
}function l(B){function F(n){return function(o){return v.debounce(o,n)
}
}function u(n){return function(o){return v.throttle(o,n)
}
}var D,C,E;
return D=B.limiter,C=B.rateLimitBy,E=B.rateLimitWait,D||(D=/^throttle$/i.test(C)?u(E):F(E)),D
}function a(o){return function(n){function u(r){v.defer(function(){B.resolve(r)
})
}function t(r){v.defer(function(){B.reject(r)
})
}var B=z.Deferred();
return o(n,u,t),B
}
}return function(u){var r,t;
return r={initialize:!0,identify:v.stringify,datumTokenizer:null,queryTokenizer:null,sufficient:5,sorter:null,local:[],prefetch:null,remote:null},u=v.mixin(r,u||{}),!u.datumTokenizer&&z.error("datumTokenizer is required"),!u.queryTokenizer&&z.error("queryTokenizer is required"),t=u.sorter,u.sorter=t?function(n){return n.sort(t)
}:v.identity,u.local=v.isFunction(u.local)?u.local():u.local,u.prefetch=c(u.prefetch),u.remote=h(u.remote),u
}
}(),j=function(){function c(e){e=q(e),this.sorter=e.sorter,this.identify=e.identify,this.sufficient=e.sufficient,this.local=e.local,this.remote=e.remote?new w(e.remote):null,this.prefetch=e.prefetch?new x(e.prefetch):null,this.index=new y({identify:this.identify,datumTokenizer:e.datumTokenizer,queryTokenizer:e.queryTokenizer}),e.initialize!==!1&&this.initialize()
}var a;
return a=window&&window.Bloodhound,c.noConflict=function(){return window&&(window.Bloodhound=a),c
},c.tokenizers=p,v.mixin(c.prototype,{__ttAdapter:function(){function h(r,s,n){return o.search(r,s,n)
}function l(n,r){return o.search(n,r)
}var o=this;
return this.remote?h:l
},_loadPrefetch:function(){function o(n,r){return n?s.reject():(l.add(r),l.prefetch.store(l.index.serialize()),void s.resolve())
}var s,h,l=this;
return s=z.Deferred(),this.prefetch?(h=this.prefetch.fromCache())?(this.index.bootstrap(h),s.resolve()):this.prefetch.fromNetwork(o):s.resolve(),s.promise()
},_initialize:function(){function h(){l.add(l.local)
}var l=this;
return this.clear(),(this.initPromise=this._loadPrefetch()).done(h),this.initPromise
},initialize:function(e){return !this.initPromise||e?this._initialize():this.initPromise
},add:function(e){return this.index.add(e),this
},get:function(e){return e=v.isArray(e)?e:[].slice.call(arguments),this.index.get(e)
},search:function(h,C,e){function u(o){var r=[];
v.each(o,function(n){!v.some(l,function(s){return B.identify(n)===B.identify(s)
})&&r.push(n)
}),e&&e(r)
}var l,B=this;
return l=this.sorter(this.index.search(h)),C(this.remote?l.slice():l),this.remote&&l.length<this.sufficient?this.remote.get(h,u):this.remote&&this.remote.cancelLastRequest(),this
},all:function(){return this.index.all()
},clear:function(){return this.index.reset(),this
},clearPrefetchCache:function(){return this.prefetch&&this.prefetch.clear(),this
},clearRemoteCache:function(){return f.resetCache(),this
},ttAdapter:function(){return this.__ttAdapter()
}}),c
}();
return j
}),function(a,b){"function"==typeof define&&define.amd?define("typeahead.js",["jquery"],function(c){return b(c)
}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)
}(this,function(x){var p=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1
},isBlankString:function(a){return !a||/^\s*$/.test(a)
},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(a){return"string"==typeof a
},isNumber:function(a){return"number"==typeof a
},isArray:x.isArray,isFunction:x.isFunction,isObject:x.isPlainObject,isUndefined:function(a){return"undefined"==typeof a
},isElement:function(a){return !(!a||1!==a.nodeType)
},isJQuery:function(a){return a instanceof x
},toStr:function(a){return p.isUndefined(a)||null===a?"":a+""
},bind:x.proxy,each:function(c,h){function a(n,o){return h(o,n)
}x.each(c,a)
},map:x.map,filter:x.grep,every:function(c,h){var a=!0;
return c?(x.each(c,function(e,n){return(a=h.call(null,n,e,c))?void 0:!1
}),!!a):a
},some:function(c,h){var a=!1;
return c?(x.each(c,function(e,n){return(a=h.call(null,n,e,c))?!1:void 0
}),!!a):a
},mixin:x.extend,identity:function(a){return a
},clone:function(a){return x.extend(!0,{},a)
},getIdGenerator:function(){var a=0;
return function(){return a++
}
},templatify:function(a){function c(){return String(a)
}return x.isFunction(a)?a:c
},defer:function(a){setTimeout(a,0)
},debounce:function(c,o,s){var a,h;
return function(){var r,t,n=this,e=arguments;
return r=function(){a=null,s||(h=c.apply(n,e))
},t=s&&!a,clearTimeout(a),a=setTimeout(r,o),t&&(h=c.apply(n,e)),h
}
},throttle:function(h,B){var D,c,A,z,C,a;
return C=0,a=function(){C=new Date,A=null,z=h.apply(D,c)
},function(){var e=new Date,n=B-(e-C);
return D=this,c=arguments,0>=n?(clearTimeout(A),A=null,C=e,z=h.apply(D,c)):A||(A=setTimeout(a,n)),z
}
},stringify:function(a){return p.isString(a)?a:JSON.stringify(a)
},noop:function(){}}
}(),g=function(){function c(r){var s,n;
return n=p.mixin({},e,r),s={css:h(),classes:n,html:o(n),selectors:a(n)},{css:s.css,html:s.html,classes:s.classes,selectors:s.selectors,mixin:function(u){p.mixin(u,s)
}}
}function o(n){return{wrapper:'<span class="'+n.wrapper+'"></span>',menu:'<div class="'+n.menu+'"></div>'}
}function a(r){var s={};
return p.each(r,function(n,u){s[u]="."+n
}),s
}function h(){var n={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};
return p.isMsie()&&p.mixin(n.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),n
}var e={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};
return c
}(),j=function(){function e(h){h&&h.el||x.error("EventBus initialized without el"),this.$el=x(h.el)
}var a,c;
return a="typeahead:",c={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"},p.mixin(e.prototype,{_trigger:function(o,s){var h;
return h=x.Event(a+o),(s=s||[]).unshift(h),this.$el.trigger.apply(this.$el,s),h
},before:function(h){var o,r;
return o=[].slice.call(arguments,1),r=this._trigger("before"+h,o),r.isDefaultPrevented()
},trigger:function(h){var n;
this._trigger(h,[].slice.call(arguments,1)),(n=c[h])&&this._trigger(n,[].slice.call(arguments,1))
}}),e
}(),b=function(){function G(c,s,u,a){var o;
if(!u){return this
}for(s=s.split(E),u=a?F(u,a):u,this._callbacks=this._callbacks||{};
o=s.shift();
){this._callbacks[o]=this._callbacks[o]||{sync:[],async:[]},this._callbacks[o][c].push(u)
}return this
}function C(c,o,a){return G.call(this,"async",c,o,a)
}function A(c,o,a){return G.call(this,"sync",c,o,a)
}function B(a){var c;
if(!this._callbacks){return this
}for(a=a.split(E);
c=a.shift();
){delete this._callbacks[c]
}return this
}function h(c){var u,J,a,s,I;
if(!this._callbacks){return this
}for(c=c.split(E),a=[].slice.call(arguments,1);
(u=c.shift())&&(J=this._callbacks[u]);
){s=H(J.sync,this,[u].concat(a)),I=H(J.async,this,[u].concat(a)),s()&&D(I)
}return this
}function H(c,o,r){function a(){for(var e,t=0,n=c.length;
!e&&n>t;
t+=1){e=c[t].apply(o,r)===!1
}return !e
}return a
}function z(){var a;
return a=window.setImmediate?function(c){setImmediate(function(){c()
})
}:function(c){setTimeout(function(){c()
},0)
}
}function F(a,c){return a.bind?a.bind(c):function(){a.apply(c,[].slice.call(arguments,0))
}
}var E=/\s+/,D=z();
return{onSync:A,onAsync:C,off:B,trigger:h}
}(),y=function(c){function e(A,E,z){for(var C,B=[],D=0,h=A.length;
h>D;
D++){B.push(p.escapeRegExChars(A[D]))
}return C=z?"\\b("+B.join("|")+")\\b":"("+B.join("|")+")",E?new RegExp(C):new RegExp(C,"i")
}var a={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};
return function(t){function n(u){var A,o,r;
return(A=h.exec(u.data))&&(r=c.createElement(t.tagName),t.className&&(r.className=t.className),o=u.splitText(A.index),o.splitText(A[0].length),r.appendChild(o.cloneNode(!0)),u.parentNode.replaceChild(r,o)),!!A
}function z(s,A){for(var B,o=3,u=0;
u<s.childNodes.length;
u++){B=s.childNodes[u],B.nodeType===o?u+=A(B)?1:0:z(B,A)
}}var h;
t=p.mixin({},a,t),t.node&&t.pattern&&(t.pattern=p.isArray(t.pattern)?t.pattern:[t.pattern],h=e(t.pattern,t.caseSensitive,t.wordsOnly),z(t.node,n))
}
}(window.document),f=function(){function r(s,o){s=s||{},s.input||x.error("input is missing"),o.mixin(this),this.$hint=x(s.hint),this.$input=x(s.input),this.query=this.$input.val(),this.queryWhenFocused=this.hasFocus()?this.query:null,this.$overflowHelper=c(this.$input),this._checkLanguageDirection(),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=p.noop)
}function c(n){return x('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:n.css("font-family"),fontSize:n.css("font-size"),fontStyle:n.css("font-style"),fontVariant:n.css("font-variant"),fontWeight:n.css("font-weight"),wordSpacing:n.css("word-spacing"),letterSpacing:n.css("letter-spacing"),textIndent:n.css("text-indent"),textRendering:n.css("text-rendering"),textTransform:n.css("text-transform")}).insertAfter(n)
}function e(n,o){return r.normalizeQuery(n)===r.normalizeQuery(o)
}function h(n){return n.altKey||n.ctrlKey||n.metaKey||n.shiftKey
}var a;
return a={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},r.normalizeQuery=function(n){return p.toStr(n).replace(/^\s*/g,"").replace(/\s{2,}/g," ")
},p.mixin(r.prototype,b,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")
},_onFocus:function(){this.queryWhenFocused=this.query,this.trigger("focused")
},_onKeydown:function(n){var o=a[n.which||n.keyCode];
this._managePreventDefault(o,n),o&&this._shouldTrigger(o,n)&&this.trigger(o+"Keyed",n)
},_onInput:function(){this._setQuery(this.getInputValue()),this.clearHintIfInvalid(),this._checkLanguageDirection()
},_managePreventDefault:function(o,s){var u;
switch(o){case"up":case"down":u=!h(s);
break;
default:u=!1
}u&&s.preventDefault()
},_shouldTrigger:function(o,s){var u;
switch(o){case"tab":u=!h(s);
break;
default:u=!0
}return u
},_checkLanguageDirection:function(){var n=(this.$input.css("direction")||"ltr").toLowerCase();
this.dir!==n&&(this.dir=n,this.$hint.attr("dir",n),this.trigger("langDirChanged",n))
},_setQuery:function(s,u){var z,o;
z=e(s,this.query),o=z?this.query.length!==s.length:!1,this.query=s,u||z?!u&&o&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)
},bind:function(){var u,B,o,A,z=this;
return u=p.bind(this._onBlur,this),B=p.bind(this._onFocus,this),o=p.bind(this._onKeydown,this),A=p.bind(this._onInput,this),this.$input.on("blur.tt",u).on("focus.tt",B).on("keydown.tt",o),!p.isMsie()||p.isMsie()>9?this.$input.on("input.tt",A):this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(n){a[n.which||n.keyCode]||p.defer(p.bind(z._onInput,z,n))
}),this
},focus:function(){this.$input.focus()
},blur:function(){this.$input.blur()
},getLangDir:function(){return this.dir
},getQuery:function(){return this.query||""
},setQuery:function(n,o){this.setInputValue(n),this._setQuery(n,o)
},hasQueryChangedSinceLastFocus:function(){return this.query!==this.queryWhenFocused
},getInputValue:function(){return this.$input.val()
},setInputValue:function(n){this.$input.val(n),this.clearHintIfInvalid(),this._checkLanguageDirection()
},resetInputValue:function(){this.setInputValue(this.query)
},getHint:function(){return this.$hint.val()
},setHint:function(n){this.$hint.val(n)
},clearHint:function(){this.setHint("")
},clearHintIfInvalid:function(){var s,u,z,o;
s=this.getInputValue(),u=this.getHint(),z=s!==u&&0===u.indexOf(s),o=""!==s&&z&&!this.hasOverflow(),!o&&this.clearHint()
},hasFocus:function(){return this.$input.is(":focus")
},hasOverflow:function(){var n=this.$input.width()-2;
return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=n
},isCursorAtEnd:function(){var s,u,o;
return s=this.$input.val().length,u=this.$input[0].selectionStart,p.isNumber(u)?u===s:document.selection?(o=document.selection.createRange(),o.moveStart("character",-s),s===o.text.length):!0
},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$overflowHelper.remove(),this.$hint=this.$input=this.$overflowHelper=x("<div>")
}}),r
}(),w=function(){function z(c,a){c=c||{},c.templates=c.templates||{},c.templates.notFound=c.templates.notFound||c.templates.empty,c.source||x.error("missing source"),c.node||x.error("missing node"),c.name&&!h(c.name)&&x.error("invalid dataset name: "+c.name),a.mixin(this),this.highlight=!!c.highlight,this.name=c.name||t(),this.limit=c.limit||5,this.displayFn=r(c.display||c.displayKey),this.templates=s(c.templates,this.displayFn),this.source=c.source.__ttAdapter?c.source.__ttAdapter():c.source,this.async=p.isUndefined(c.async)?this.source.length>2:!!c.async,this._resetLastSuggestion(),this.$el=x(c.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)
}function r(a){function c(n){return n[a]
}return a=a||p.stringify,p.isFunction(a)?a:c
}function s(o,a){function c(n){return x("<div>").text(a(n))
}return{notFound:o.notFound&&p.templatify(o.notFound),pending:o.pending&&p.templatify(o.pending),header:o.header&&p.templatify(o.header),footer:o.footer&&p.templatify(o.footer),suggestion:o.suggestion||c}
}function h(a){return/^[_a-zA-Z0-9-]+$/.test(a)
}var e,t;
return e={val:"tt-selectable-display",obj:"tt-selectable-object"},t=p.getIdGenerator(),z.extractData=function(a){var c=x(a);
return c.data(e.obj)?{val:c.data(e.val)||"",obj:c.data(e.obj)||null}:null
},p.mixin(z.prototype,b,{_overwrite:function(a,c){c=c||[],c.length?this._renderSuggestions(a,c):this.async&&this.templates.pending?this._renderPending(a):!this.async&&this.templates.notFound?this._renderNotFound(a):this._empty(),this.trigger("rendered",this.name,c,!1)
},_append:function(a,c){c=c||[],c.length&&this.$lastSuggestion.length?this._appendSuggestions(a,c):c.length?this._renderSuggestions(a,c):!this.$lastSuggestion.length&&this.templates.notFound&&this._renderNotFound(a),this.trigger("rendered",this.name,c,!0)
},_renderSuggestions:function(a,c){var o;
o=this._getSuggestionsFragment(a,c),this.$lastSuggestion=o.children().last(),this.$el.html(o).prepend(this._getHeader(a,c)).append(this._getFooter(a,c))
},_appendSuggestions:function(c,o){var u,a;
u=this._getSuggestionsFragment(c,o),a=u.children().last(),this.$lastSuggestion.after(u),this.$lastSuggestion=a
},_renderPending:function(a){var c=this.templates.pending;
this._resetLastSuggestion(),c&&this.$el.html(c({query:a,dataset:this.name}))
},_renderNotFound:function(a){var c=this.templates.notFound;
this._resetLastSuggestion(),c&&this.$el.html(c({query:a,dataset:this.name}))
},_empty:function(){this.$el.empty(),this._resetLastSuggestion()
},_getSuggestionsFragment:function(A,a){var c,u=this;
return c=document.createDocumentFragment(),p.each(a,function(B){var n,o;
o=u._injectQuery(A,B),n=x(u.templates.suggestion(o)).data(e.obj,B).data(e.val,u.displayFn(B)).addClass(u.classes.suggestion+" "+u.classes.selectable),c.appendChild(n[0])
}),this.highlight&&y({className:this.classes.highlight,node:c,pattern:A}),x(c)
},_getFooter:function(a,c){return this.templates.footer?this.templates.footer({query:a,suggestions:c,dataset:this.name}):null
},_getHeader:function(a,c){return this.templates.header?this.templates.header({query:a,suggestions:c,dataset:this.name}):null
},_resetLastSuggestion:function(){this.$lastSuggestion=x()
},_injectQuery:function(a,c){return p.isObject(c)?p.mixin({_query:a},c):c
},update:function(C){function E(n){D||(D=!0,n=(n||[]).slice(0,B.limit),a=n.length,B._overwrite(C,n),a<B.limit&&B.async&&B.trigger("asyncRequested",C))
}function c(o){o=o||[],!A&&a<B.limit&&(B.cancel=x.noop,a+=o.length,B._append(C,o.slice(0,B.limit-a)),B.async&&B.trigger("asyncReceived",C))
}var B=this,A=!1,D=!1,a=0;
this.cancel(),this.cancel=function(){A=!0,B.cancel=x.noop,B.async&&B.trigger("asyncCanceled",C)
},this.source(C,E,c),!D&&E([])
},cancel:x.noop,clear:function(){this._empty(),this.cancel(),this.trigger("cleared")
},isEmpty:function(){return this.$el.is(":empty")
},destroy:function(){this.$el=x("<div>")
}}),z
}(),v=function(){function a(o,c){function h(r){var s=e.$node.find(r.node).first();
return r.node=s.length?s:x("<div>").appendTo(e.$node),new w(r,c)
}var e=this;
o=o||{},o.node||x.error("node is required"),c.mixin(this),this.$node=x(o.node),this.query=null,this.datasets=p.map(o.datasets,h)
}return p.mixin(a.prototype,b,{_onSelectableClick:function(c){this.trigger("selectableClicked",x(c.currentTarget))
},_onRendered:function(h,o,r,c){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetRendered",o,r,c)
},_onCleared:function(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetCleared")
},_propagate:function(){this.trigger.apply(this,arguments)
},_allDatasetsEmpty:function(){function c(e){return e.isEmpty()
}return p.every(this.datasets,c)
},_getSelectables:function(){return this.$node.find(this.selectors.selectable)
},_removeCursor:function(){var c=this.getActiveSelectable();
c&&c.removeClass(this.classes.cursor)
},_ensureVisible:function(h){var s,u,c,o;
s=h.position().top,u=s+h.outerHeight(!0),c=this.$node.scrollTop(),o=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10),0>s?this.$node.scrollTop(c+s):u>o&&this.$node.scrollTop(c+(u-o))
},bind:function(){var c,e=this;
return c=p.bind(this._onSelectableClick,this),this.$node.on("click.tt",this.selectors.selectable,c),p.each(this.datasets,function(h){h.onSync("asyncRequested",e._propagate,e).onSync("asyncCanceled",e._propagate,e).onSync("asyncReceived",e._propagate,e).onSync("rendered",e._onRendered,e).onSync("cleared",e._onCleared,e)
}),this
},isOpen:function(){return this.$node.hasClass(this.classes.open)
},open:function(){this.$node.addClass(this.classes.open)
},close:function(){this.$node.removeClass(this.classes.open),this._removeCursor()
},setLanguageDirection:function(c){this.$node.attr("dir",c)
},selectableRelativeToCursor:function(h){var s,u,c,o;
return u=this.getActiveSelectable(),s=this._getSelectables(),c=u?s.index(u):-1,o=c+h,o=(o+1)%(s.length+1)-1,o=-1>o?s.length-1:o,-1===o?null:s.eq(o)
},setCursor:function(c){this._removeCursor(),(c=c&&c.first())&&(c.addClass(this.classes.cursor),this._ensureVisible(c))
},getSelectableData:function(c){return c&&c.length?w.extractData(c):null
},getActiveSelectable:function(){var c=this._getSelectables().filter(this.selectors.cursor).first();
return c.length?c:null
},getTopSelectable:function(){var c=this._getSelectables().first();
return c.length?c:null
},update:function(e){function h(n){n.update(e)
}var c=e!==this.query;
return c&&(this.query=e,p.each(this.datasets,h)),c
},empty:function(){function c(e){e.clear()
}p.each(this.datasets,c),this.query=null,this.$node.addClass(this.classes.empty)
},destroy:function(){function c(e){e.destroy()
}this.$node.off(".tt"),this.$node=x("<div>"),p.each(this.datasets,c)
}}),a
}(),q=function(){function a(){v.apply(this,[].slice.call(arguments,0))
}var c=v.prototype;
return p.mixin(a.prototype,v.prototype,{open:function(){return !this._allDatasetsEmpty()&&this._show(),c.open.apply(this,[].slice.call(arguments,0))
},close:function(){return this._hide(),c.close.apply(this,[].slice.call(arguments,0))
},_onRendered:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),c._onRendered.apply(this,[].slice.call(arguments,0))
},_onCleared:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),c._onCleared.apply(this,[].slice.call(arguments,0))
},setLanguageDirection:function(e){return this.$node.css("ltr"===e?this.css.ltr:this.css.rtl),c.setLanguageDirection.apply(this,[].slice.call(arguments,0))
},_hide:function(){this.$node.hide()
},_show:function(){this.$node.css("display","block")
}}),a
}(),l=function(){function c(A,e){var J,z,I,H,G,C,B,E,F,t,D;
A=A||{},A.input||x.error("missing input"),A.menu||x.error("missing menu"),A.eventBus||x.error("missing event bus"),e.mixin(this),this.eventBus=A.eventBus,this.minLength=p.isNumber(A.minLength)?A.minLength:1,this.input=A.input,this.menu=A.menu,this.enabled=!0,this.active=!1,this.input.hasFocus()&&this.activate(),this.dir=this.input.getLangDir(),this._hacks(),this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this),J=a(this,"activate","open","_onFocused"),z=a(this,"deactivate","_onBlurred"),I=a(this,"isActive","isOpen","_onEnterKeyed"),H=a(this,"isActive","isOpen","_onTabKeyed"),G=a(this,"isActive","_onEscKeyed"),C=a(this,"isActive","open","_onUpKeyed"),B=a(this,"isActive","open","_onDownKeyed"),E=a(this,"isActive","isOpen","_onLeftKeyed"),F=a(this,"isActive","isOpen","_onRightKeyed"),t=a(this,"_openIfActive","_onQueryChanged"),D=a(this,"_openIfActive","_onWhitespaceChanged"),this.input.bind().onSync("focused",J,this).onSync("blurred",z,this).onSync("enterKeyed",I,this).onSync("tabKeyed",H,this).onSync("escKeyed",G,this).onSync("upKeyed",C,this).onSync("downKeyed",B,this).onSync("leftKeyed",E,this).onSync("rightKeyed",F,this).onSync("queryChanged",t,this).onSync("whitespaceChanged",D,this).onSync("langDirChanged",this._onLangDirChanged,this)
}function a(e){var h=[].slice.call(arguments,1);
return function(){var n=[].slice.call(arguments);
p.each(h,function(o){return e[o].apply(e,n)
})
}
}return p.mixin(c.prototype,{_hacks:function(){var h,e;
h=this.input.$input||x("<div>"),e=this.menu.$node||x("<div>"),h.on("blur.tt",function(n){var z,u,A;
z=document.activeElement,u=e.is(z),A=e.has(z).length>0,p.isMsie()&&(u||A)&&(n.preventDefault(),n.stopImmediatePropagation(),p.defer(function(){h.focus()
}))
}),e.on("mousedown.tt",function(n){n.preventDefault()
})
},_onSelectableClicked:function(h,n){this.select(n)
},_onDatasetCleared:function(){this._updateHint()
},_onDatasetRendered:function(o,r,s,h){this._updateHint(),this.eventBus.trigger("render",s,h,r)
},_onAsyncRequested:function(h,o,r){this.eventBus.trigger("asyncrequest",r,o)
},_onAsyncCanceled:function(h,o,r){this.eventBus.trigger("asynccancel",r,o)
},_onAsyncReceived:function(h,o,r){this.eventBus.trigger("asyncreceive",r,o)
},_onFocused:function(){this._minLengthMet()&&this.menu.update(this.input.getQuery())
},_onBlurred:function(){this.input.hasQueryChangedSinceLastFocus()&&this.eventBus.trigger("change",this.input.getQuery())
},_onEnterKeyed:function(h,o){var r;
(r=this.menu.getActiveSelectable())&&this.select(r)&&o.preventDefault()
},_onTabKeyed:function(h,o){var r;
(r=this.menu.getActiveSelectable())?this.select(r)&&o.preventDefault():(r=this.menu.getTopSelectable())&&this.autocomplete(r)&&o.preventDefault()
},_onEscKeyed:function(){this.close()
},_onUpKeyed:function(){this.moveCursor(-1)
},_onDownKeyed:function(){this.moveCursor(1)
},_onLeftKeyed:function(){"rtl"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())
},_onRightKeyed:function(){"ltr"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())
},_onQueryChanged:function(h,n){this._minLengthMet(n)?this.menu.update(n):this.menu.empty()
},_onWhitespaceChanged:function(){this._updateHint()
},_onLangDirChanged:function(h,n){this.dir!==n&&(this.dir=n,this.menu.setLanguageDirection(n))
},_openIfActive:function(){this.isActive()&&this.open()
},_minLengthMet:function(e){return e=p.isString(e)?e:this.input.getQuery()||"",e.length>=this.minLength
},_updateHint:function(){var z,C,o,B,A,h,e;
z=this.menu.getTopSelectable(),C=this.menu.getSelectableData(z),o=this.input.getInputValue(),!C||p.isBlankString(o)||this.input.hasOverflow()?this.input.clearHint():(B=f.normalizeQuery(o),A=p.escapeRegExChars(B),h=new RegExp("^(?:"+A+")(.+$)","i"),e=h.exec(C.val),e&&this.input.setHint(o+e[1]))
},isEnabled:function(){return this.enabled
},enable:function(){this.enabled=!0
},disable:function(){this.enabled=!1
},isActive:function(){return this.active
},activate:function(){return this.isActive()?!0:!this.isEnabled()||this.eventBus.before("active")?!1:(this.active=!0,this.eventBus.trigger("active"),!0)
},deactivate:function(){return this.isActive()?this.eventBus.before("idle")?!1:(this.active=!1,this.close(),this.eventBus.trigger("idle"),!0):!0
},isOpen:function(){return this.menu.isOpen()
},open:function(){return this.isOpen()||this.eventBus.before("open")||(this.menu.open(),this._updateHint(),this.eventBus.trigger("open")),this.isOpen()
},close:function(){return this.isOpen()&&!this.eventBus.before("close")&&(this.menu.close(),this.input.clearHint(),this.input.resetInputValue(),this.eventBus.trigger("close")),!this.isOpen()
},setVal:function(e){this.input.setQuery(p.toStr(e))
},getVal:function(){return this.input.getQuery()
},select:function(h){var n=this.menu.getSelectableData(h);
return n&&!this.eventBus.before("select",n.obj)?(this.input.setQuery(n.val,!0),this.eventBus.trigger("select",n.obj),this.close(),!0):!1
},autocomplete:function(o){var r,s,h;
return r=this.input.getQuery(),s=this.menu.getSelectableData(o),h=s&&r!==s.val,h&&!this.eventBus.before("autocomplete",s.obj)?(this.input.setQuery(s.val),this.eventBus.trigger("autocomplete",s.obj),!0):!1
},moveCursor:function(o){var A,B,h,z,u;
return A=this.input.getQuery(),B=this.menu.selectableRelativeToCursor(o),h=this.menu.getSelectableData(B),z=h?h.obj:null,u=this._minLengthMet()&&this.menu.update(A),u||this.eventBus.before("cursorchange",z)?!1:(this.menu.setCursor(B),h?this.input.setInputValue(h.val):(this.input.resetInputValue(),this._updateHint()),this.eventBus.trigger("cursorchange",z),!0)
},destroy:function(){this.input.destroy(),this.menu.destroy()
}}),c
}();
!function(){function a(r,s){r.each(function(){var B,u=x(this);
(B=u.data(n.typeahead))&&s(B,u)
})
}function A(r,s){return r.clone().addClass(s.classes.hint).removeData().css(s.css.hint).css(h(r)).prop("readonly",!0).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1})
}function z(r,s){r.data(n.attrs,{dir:r.attr("dir"),autocomplete:r.attr("autocomplete"),spellcheck:r.attr("spellcheck"),style:r.attr("style")}),r.addClass(s.classes.input).attr({autocomplete:"off",spellcheck:!1});
try{!r.attr("dir")&&r.attr("dir","auto")
}catch(u){}return r
}function h(r){return{backgroundAttachment:r.css("background-attachment"),backgroundClip:r.css("background-clip"),backgroundColor:r.css("background-color"),backgroundImage:r.css("background-image"),backgroundOrigin:r.css("background-origin"),backgroundPosition:r.css("background-position"),backgroundRepeat:r.css("background-repeat"),backgroundSize:r.css("background-size")}
}function o(s){var u,r;
u=s.data(n.www),r=s.parent().filter(u.selectors.wrapper),p.each(s.data(n.attrs),function(C,B){p.isUndefined(C)?s.removeAttr(B):s.attr(B,C)
}),s.removeData(n.typeahead).removeData(n.www).removeData(n.attr).removeClass(u.classes.input),r.length&&(s.detach().insertAfter(r),r.remove())
}function t(B){var s,u;
return s=p.isJQuery(B)||p.isElement(B),u=s?x(B).first():[],u.length?u:null
}var c,n,e;
c=x.fn.typeahead,n={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"},e={initialize:function(u,s){function B(){var D,G,E,H,M,L,I,K,F,J,r;
p.each(s,function(N){N.highlight=!!u.highlight
}),D=x(this),G=x(C.html.wrapper),E=t(u.hint),H=t(u.menu),M=u.hint!==!1&&!E,L=u.menu!==!1&&!H,M&&(E=A(D,C)),L&&(H=x(C.html.menu).css(C.css.menu)),E&&E.val(""),D=z(D,C),(M||L)&&(G.css(C.css.wrapper),D.css(M?C.css.input:C.css.inputWithNoHint),D.wrap(G).parent().prepend(M?E:null).append(L?H:null)),r=L?q:v,I=new j({el:D}),K=new f({hint:E,input:D},C),F=new r({node:H,datasets:s},C),J=new l({input:K,menu:F,eventBus:I,minLength:u.minLength},C),D.data(n.www,C),D.data(n.typeahead,J)
}var C;
return s=p.isArray(s)?s:[].slice.call(arguments,1),u=u||{},C=g(u.classNames),this.each(B)
},isEnabled:function(){var r;
return a(this.first(),function(s){r=s.isEnabled()
}),r
},enable:function(){return a(this,function(r){r.enable()
}),this
},disable:function(){return a(this,function(r){r.disable()
}),this
},isActive:function(){var r;
return a(this.first(),function(s){r=s.isActive()
}),r
},activate:function(){return a(this,function(r){r.activate()
}),this
},deactivate:function(){return a(this,function(r){r.deactivate()
}),this
},isOpen:function(){var r;
return a(this.first(),function(s){r=s.isOpen()
}),r
},open:function(){return a(this,function(r){r.open()
}),this
},close:function(){return a(this,function(r){r.close()
}),this
},select:function(s){var u=!1,r=x(s);
return a(this.first(),function(B){u=B.select(r)
}),u
},autocomplete:function(s){var u=!1,r=x(s);
return a(this.first(),function(B){u=B.autocomplete(r)
}),u
},moveCursor:function(r){var s=!1;
return a(this.first(),function(u){s=u.moveCursor(r)
}),s
},val:function(r){var s;
return arguments.length?(a(this,function(u){u.setVal(r)
}),this):(a(this.first(),function(u){s=u.getVal()
}),s)
},destroy:function(){return a(this,function(r,s){o(s),r.destroy()
}),this
}},x.fn.typeahead=function(r){return e[r]?e[r].apply(this,[].slice.call(arguments,1)):e.initialize.apply(this,arguments)
},x.fn.typeahead.noConflict=function(){return x.fn.typeahead=c,this
}
}()
});
!function(e,c){"object"==typeof exports&&"object"==typeof module?module.exports=c():"function"==typeof define&&define.amd?define([],c):"object"==typeof exports?exports.Handlebars=c():e.Handlebars=c()
}(this,function(){return function(f){function e(b){if(g[b]){return g[b].exports
}var a=g[b]={exports:{},id:b,loaded:!1};
return f[b].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports
}var g={};
return e.m=f,e.c=g,e.p="",e(0)
}([function(L,K,J){function I(){var b=u();
return b.compile=function(a,e){return B.compile(a,e,b)
},b.precompile=function(a,e){return B.precompile(a,e,b)
},b.AST=D["default"],b.Compiler=B.Compiler,b.JavaScriptCompiler=z["default"],b.Parser=C.parser,b.parse=C.parse,b
}var H=J(1)["default"];
K.__esModule=!0;
var G=J(2),F=H(G),E=J(35),D=H(E),C=J(36),B=J(41),A=J(42),z=H(A),y=J(39),x=H(y),w=J(34),v=H(w),u=F["default"].create,t=I();
t.create=I,v["default"](t),t.Visitor=x["default"],t["default"]=t,K["default"]=t,L.exports=K["default"]
},function(e,c){c["default"]=function(b){return b&&b.__esModule?b:{"default":b}
},c.__esModule=!0
},function(L,K,J){function I(){var b=new E.HandlebarsEnvironment;
return y.extend(b,E),b.SafeString=C["default"],b.Exception=A["default"],b.Utils=y,b.escapeExpression=y.escapeExpression,b.VM=w,b.template=function(a){return w.template(a,b)
},b
}var H=J(3)["default"],G=J(1)["default"];
K.__esModule=!0;
var F=J(4),E=H(F),D=J(21),C=G(D),B=J(6),A=G(B),z=J(5),y=H(z),x=J(22),w=H(x),v=J(34),u=G(v),t=I();
t.create=I,u["default"](t),t["default"]=t,K["default"]=t,L.exports=K["default"]
},function(e,c){c["default"]=function(g){if(g&&g.__esModule){return g
}var f={};
if(null!=g){for(var h in g){Object.prototype.hasOwnProperty.call(g,h)&&(f[h]=g[h])
}}return f["default"]=g,f
},c.__esModule=!0
},function(H,G,F){function E(f,e,g){this.helpers=f||{},this.partials=e||{},this.decorators=g||{},z.registerDefaultHelpers(this),y.registerDefaultDecorators(this)
}var D=F(1)["default"];
G.__esModule=!0,G.HandlebarsEnvironment=E;
var C=F(5),B=F(6),A=D(B),z=F(10),y=F(18),x=F(20),w=D(x),v="4.0.10";
G.VERSION=v;
var u=7;
G.COMPILER_REVISION=u;
var t={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};
G.REVISION_CHANGES=t;
var s="[object Object]";
E.prototype={constructor:E,logger:w["default"],log:w["default"].log,registerHelper:function(e,c){if(C.toString.call(e)===s){if(c){throw new A["default"]("Arg not supported with multiple helpers")
}C.extend(this.helpers,e)
}else{this.helpers[e]=c
}},unregisterHelper:function(b){delete this.helpers[b]
},registerPartial:function(e,c){if(C.toString.call(e)===s){C.extend(this.partials,e)
}else{if("undefined"==typeof c){throw new A["default"]('Attempting to register a partial called "'+e+'" as undefined')
}this.partials[e]=c
}},unregisterPartial:function(b){delete this.partials[b]
},registerDecorator:function(e,c){if(C.toString.call(e)===s){if(c){throw new A["default"]("Arg not supported with multiple decorators")
}C.extend(this.decorators,e)
}else{this.decorators[e]=c
}},unregisterDecorator:function(b){delete this.decorators[b]
}};
var r=w["default"].log;
G.log=r,G.createFrame=C.createFrame,G.logger=w["default"]
},function(F,E){function D(b){return v[b]
}function C(f){for(var e=1;
e<arguments.length;
e++){for(var g in arguments[e]){Object.prototype.hasOwnProperty.call(arguments[e],g)&&(f[g]=arguments[e][g])
}}return f
}function B(f,e){for(var h=0,g=f.length;
h<g;
h++){if(f[h]===e){return h
}}return -1
}function A(b){if("string"!=typeof b){if(b&&b.toHTML){return b.toHTML()
}if(null==b){return""
}if(!b){return b+""
}b=""+b
}return t.test(b)?b.replace(u,D):b
}function z(b){return !b&&0!==b||!(!q(b)||0!==b.length)
}function y(e){var c=C({},e);
return c._parent=e,c
}function x(e,c){return e.path=c,e
}function w(e,c){return(e?e+".":"")+c
}E.__esModule=!0,E.extend=C,E.indexOf=B,E.escapeExpression=A,E.isEmpty=z,E.createFrame=y,E.blockParams=x,E.appendContextPath=w;
var v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},u=/[&<>"'`=]/g,t=/[&<>"'`=]/,s=Object.prototype.toString;
E.toString=s;
var r=function(b){return"function"==typeof b
};
r(/x/)&&(E.isFunction=r=function(b){return"function"==typeof b&&"[object Function]"===s.call(b)
}),E.isFunction=r;
var q=Array.isArray||function(b){return !(!b||"object"!=typeof b)&&"[object Array]"===s.call(b)
};
E.isArray=q
},function(h,g,o){function n(f,e){var u=e&&e.loc,t=void 0,s=void 0;
u&&(t=u.start.line,s=u.start.column,f+=" - "+t+":"+s);
for(var r=Error.prototype.constructor.call(this,f),q=0;
q<j.length;
q++){this[j[q]]=r[j[q]]
}Error.captureStackTrace&&Error.captureStackTrace(this,n);
try{u&&(this.lineNumber=t,l?Object.defineProperty(this,"column",{value:s,enumerable:!0}):this.column=s)
}catch(p){}}var l=o(7)["default"];
g.__esModule=!0;
var j=["description","fileName","lineNumber","message","name","number","stack"];
n.prototype=new Error,g["default"]=n,h.exports=g["default"]
},function(f,e,g){f.exports={"default":g(8),__esModule:!0}
},function(f,e,h){var g=h(9);
f.exports=function(l,j,n){return g.setDesc(l,j,n)
}
},function(f,e){var g=Object;
f.exports={create:g.create,getProto:g.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:g.getOwnPropertyDescriptor,setDesc:g.defineProperty,setDescs:g.defineProperties,getKeys:g.keys,getNames:g.getOwnPropertyNames,getSymbols:g.getOwnPropertySymbols,each:[].forEach}
},function(L,K,J){function I(b){F["default"](b),D["default"](b),B["default"](b),z["default"](b),x["default"](b),v["default"](b),t["default"](b)
}var H=J(1)["default"];
K.__esModule=!0,K.registerDefaultHelpers=I;
var G=J(11),F=H(G),E=J(12),D=H(E),C=J(13),B=H(C),A=J(14),z=H(A),y=J(15),x=H(y),w=J(16),v=H(w),u=J(17),t=H(u)
},function(f,e,h){e.__esModule=!0;
var g=h(5);
e["default"]=function(b){b.registerHelper("blockHelperMissing",function(a,o){var n=o.inverse,l=o.fn;
if(a===!0){return l(this)
}if(a===!1||null==a){return n(this)
}if(g.isArray(a)){return a.length>0?(o.ids&&(o.ids=[o.name]),b.helpers.each(a,o)):n(this)
}if(o.data&&o.ids){var j=g.createFrame(o.data);
j.contextPath=g.appendContextPath(o.data.contextPath,o.name),o={data:j}
}return l(a,o)
})
},f.exports=e["default"]
},function(j,h,q){var p=q(1)["default"];
h.__esModule=!0;
var o=q(5),n=q(6),l=p(n);
h["default"]=function(b){b.registerHelper("each",function(A,z){function y(a,C,B){t&&(t.key=a,t.index=C,t.first=0===C,t.last=!!B,s&&(t.contextPath=s+a)),u+=x(A[a],{data:t,blockParams:o.blockParams([A[a],a],[s+a,null])})
}if(!z){throw new l["default"]("Must pass iterator to #each")
}var x=z.fn,w=z.inverse,v=0,u="",t=void 0,s=void 0;
if(z.data&&z.ids&&(s=o.appendContextPath(z.data.contextPath,z.ids[0])+"."),o.isFunction(A)&&(A=A.call(this)),z.data&&(t=o.createFrame(z.data)),A&&"object"==typeof A){if(o.isArray(A)){for(var r=A.length;
v<r;
v++){v in A&&y(v,v,v===A.length-1)
}}else{var g=void 0;
for(var e in A){A.hasOwnProperty(e)&&(void 0!==g&&y(g,v-1),g=e,v++)
}void 0!==g&&y(g,v-1,!0)
}}return 0===v&&(u=w(this)),u
})
},j.exports=h["default"]
},function(h,g,o){var n=o(1)["default"];
g.__esModule=!0;
var l=o(6),j=n(l);
g["default"]=function(b){b.registerHelper("helperMissing",function(){if(1!==arguments.length){throw new j["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')
}})
},h.exports=g["default"]
},function(f,e,h){e.__esModule=!0;
var g=h(5);
e["default"]=function(b){b.registerHelper("if",function(j,c){return g.isFunction(j)&&(j=j.call(this)),!c.hash.includeZero&&!j||g.isEmpty(j)?c.inverse(this):c.fn(this)
}),b.registerHelper("unless",function(a,j){return b.helpers["if"].call(this,a,{fn:j.inverse,inverse:j.fn,hash:j.hash})
})
},f.exports=e["default"]
},function(e,c){c.__esModule=!0,c["default"]=function(b){b.registerHelper("log",function(){for(var a=[void 0],h=arguments[arguments.length-1],g=0;
g<arguments.length-1;
g++){a.push(arguments[g])
}var f=1;
null!=h.hash.level?f=h.hash.level:h.data&&null!=h.data.level&&(f=h.data.level),a[0]=f,b.log.apply(b,a)
})
},e.exports=c["default"]
},function(e,c){c.__esModule=!0,c["default"]=function(b){b.registerHelper("lookup",function(g,f){return g&&g[f]
})
},e.exports=c["default"]
},function(f,e,h){e.__esModule=!0;
var g=h(5);
e["default"]=function(b){b.registerHelper("with",function(l,j){g.isFunction(l)&&(l=l.call(this));
var o=j.fn;
if(g.isEmpty(l)){return j.inverse(this)
}var n=j.data;
return j.data&&j.ids&&(n=g.createFrame(j.data),n.contextPath=g.appendContextPath(j.data.contextPath,j.ids[0])),o(l,{data:n,blockParams:g.blockParams([l],[n&&n.contextPath])})
})
},f.exports=e["default"]
},function(j,h,q){function p(b){l["default"](b)
}var o=q(1)["default"];
h.__esModule=!0,h.registerDefaultDecorators=p;
var n=q(19),l=o(n)
},function(f,e,h){e.__esModule=!0;
var g=h(5);
e["default"]=function(b){b.registerDecorator("inline",function(l,j,p,o){var n=l;
return j.partials||(j.partials={},n=function(r,q){var c=p.partials;
p.partials=g.extend({},c,j.partials);
var a=l(r,q);
return p.partials=c,a
}),j.partials[o.args[0]]=o.fn,n
})
},f.exports=e["default"]
},function(g,f,l){f.__esModule=!0;
var j=l(5),h={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var c=j.indexOf(h.methodMap,e.toLowerCase());
e=c>=0?c:parseInt(e,10)
}return e
},log:function(n){if(n=h.lookupLevel(n),"undefined"!=typeof console&&h.lookupLevel(h.level)<=n){var e=h.methodMap[n];
console[e]||(e="log");
for(var q=arguments.length,p=Array(q>1?q-1:0),o=1;
o<q;
o++){p[o-1]=arguments[o]
}console[e].apply(console,p)
}}};
f["default"]=h,g.exports=f["default"]
},function(f,e){function g(b){this.string=b
}e.__esModule=!0,g.prototype.toString=g.prototype.toHTML=function(){return""+this.string
},e["default"]=g,f.exports=e["default"]
},function(L,K,J){function I(g){var f=g&&g[0]||1,l=t.COMPILER_REVISION;
if(f!==l){if(f<l){var j=t.REVISION_CHANGES[l],h=t.REVISION_CHANGES[f];
throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+j+") or downgrade your runtime to an older version ("+h+").")
}throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+g[1]+").")
}}function H(g,f){function l(r,q,p){p.hash&&(q=w.extend({},q,p.hash),p.ids&&(p.ids[0]=!0)),r=f.VM.resolvePartial.call(this,r,q,p);
var o=f.VM.invokePartial.call(this,r,q,p);
if(null==o&&f.compile&&(p.partials[p.name]=f.compile(r,g.compilerOptions,f),o=p.partials[p.name](q,p)),null!=o){if(p.indent){for(var n=o.split("\n"),b=0,a=n.length;
b<a&&(n[b]||b+1!==a);
b++){n[b]=p.indent+n[b]
}o=n.join("\n")
}return o
}throw new u["default"]("The partial "+p.name+" could not be compiled when running in runtime-only mode")
}function j(a){function q(c){return""+g.main(h,c,h.helpers,h.partials,o,e,n)
}var p=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=p.data;
j._setup(p),!p.partial&&g.useData&&(o=C(a,o));
var n=void 0,e=g.useBlockParams?[]:void 0;
return g.useDepths&&(n=p.depths?a!=p.depths[0]?[a].concat(p.depths):p.depths:[a]),(q=B(g.main,q,h,p.depths||[],o,e))(a,p)
}if(!f){throw new u["default"]("No environment passed to template")
}if(!g||!g.main){throw new u["default"]("Unknown template object: "+typeof g)
}g.main.decorator=g.main_d,f.VM.checkRevision(g.compiler);
var h={strict:function(e,c){if(!(c in e)){throw new u["default"]('"'+c+'" not defined in '+e)
}return e[c]
},lookup:function(n,e){for(var p=n.length,o=0;
o<p;
o++){if(n[o]&&null!=n[o][e]){return n[o][e]
}}},lambda:function(e,c){return"function"==typeof e?e.call(c):e
},escapeExpression:w.escapeExpression,invokePartial:l,fn:function(a){var e=g[a];
return e.decorator=g[a+"_d"],e
},programs:[],program:function(o,n,M,s,r){var q=this.programs[o],p=this.fn(o);
return n||r||s||M?q=G(this,o,p,n,M,s,r):q||(q=this.programs[o]=G(this,o,p)),q
},data:function(e,c){for(;
e&&c--;
){e=e._parent
}return e
},merge:function(n,e){var o=n||e;
return n&&e&&n!==e&&(o=w.extend({},e,n)),o
},nullContext:A({}),noop:f.VM.noop,compilerInfo:g.compiler};
return j.isTop=!0,j._setup=function(a){a.partial?(h.helpers=a.helpers,h.partials=a.partials,h.decorators=a.decorators):(h.helpers=h.merge(a.helpers,f.helpers),g.usePartial&&(h.partials=h.merge(a.partials,f.partials)),(g.usePartial||g.useDecorators)&&(h.decorators=h.merge(a.decorators,f.decorators)))
},j._child=function(a,o,n,e){if(g.useBlockParams&&!n){throw new u["default"]("must pass block params")
}if(g.useDepths&&!e){throw new u["default"]("must pass parent depths")
}return G(h,a,g[a],o,0,n,e)
},j
}function G(l,j,s,r,q,p,o){function n(a){var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],c=o;
return !o||a==o[0]||a===l.nullContext&&null===o[0]||(c=[a].concat(o)),s(l,a,l.helpers,l.partials,f.data||r,p&&[f.blockParams].concat(p),c)
}return n=B(s,n,l,o,r,p),n.program=j,n.depth=o?o.length:0,n.blockParams=q||0,n
}function F(f,e,g){return f?f.call||g.name||(g.name=f,f=g.partials[f]):f="@partial-block"===g.name?g.data["partial-block"]:g.partials[g.name],f
}function E(g,f,l){var j=l.data&&l.data["partial-block"];
l.partial=!0,l.ids&&(l.data.contextPath=l.ids[0]||l.data.contextPath);
var h=void 0;
if(l.fn&&l.fn!==D&&!function(){l.data=t.createFrame(l.data);
var b=l.fn;
h=l.data["partial-block"]=function(a){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
return e.data=t.createFrame(e.data),e.data["partial-block"]=j,b(a,e)
},b.partials&&(l.partials=w.extend({},l.partials,b.partials))
}(),void 0===g&&h&&(g=h),void 0===g){throw new u["default"]("The partial "+l.name+" could not be found")
}if(g instanceof Function){return g(f,l)
}}function D(){return""
}function C(e,c){return c&&"root" in c||(c=c?t.createFrame(c):{},c.root=e),c
}function B(j,h,q,p,o,n){if(j.decorator){var l={};
h=j.decorator(h,l,q,p&&p[0],o,n,p),w.extend(h,l)
}return h
}var A=J(23)["default"],z=J(3)["default"],y=J(1)["default"];
K.__esModule=!0,K.checkRevision=I,K.template=H,K.wrapProgram=G,K.resolvePartial=F,K.invokePartial=E,K.noop=D;
var x=J(5),w=z(x),v=J(6),u=y(v),t=J(4)
},function(f,e,g){f.exports={"default":g(24),__esModule:!0}
},function(f,e,g){g(25),f.exports=g(30).Object.seal
},function(f,e,h){var g=h(26);
h(27)("seal",function(b){return function(a){return b&&g(a)?b(a):a
}
})
},function(e,c){e.exports=function(b){return"object"==typeof b?null!==b:"function"==typeof b
}
},function(h,g,o){var n=o(28),l=o(30),j=o(33);
h.exports=function(f,e){var q=(l.Object||{})[f]||Object[f],p={};
p[f]=e(q),n(n.S+n.F*j(function(){q(1)
}),"Object",p)
}
},function(l,j,s){var r=s(29),q=s(30),p=s(31),o="prototype",n=function(B,A,z){var y,x,w,v=B&n.F,u=B&n.G,t=B&n.S,h=B&n.P,g=B&n.B,f=B&n.W,e=u?q:q[A]||(q[A]={}),C=u?r:t?r[A]:(r[A]||{})[o];
u&&(z=A);
for(y in z){x=!v&&C&&y in C,x&&y in e||(w=x?C[y]:z[y],e[y]=u&&"function"!=typeof C[y]?z[y]:g&&x?p(w,r):f&&C[y]==w?function(D){var c=function(a){return this instanceof D?new D(a):D(a)
};
return c[o]=D[o],c
}(w):h&&"function"==typeof w?p(Function.call,w):w,h&&((e[o]||(e[o]={}))[y]=w))
}};
n.F=1,n.G=2,n.S=4,n.P=8,n.B=16,n.W=32,l.exports=n
},function(f,e){var g=f.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();
"number"==typeof __g&&(__g=g)
},function(f,e){var g=f.exports={version:"1.2.6"};
"number"==typeof __e&&(__e=g)
},function(f,e,h){var g=h(32);
f.exports=function(l,j,n){if(g(l),void 0===j){return l
}switch(n){case 1:return function(a){return l.call(j,a)
};
case 2:return function(b,a){return l.call(j,b,a)
};
case 3:return function(o,b,a){return l.call(j,o,b,a)
}
}return function(){return l.apply(j,arguments)
}
}
},function(e,c){e.exports=function(b){if("function"!=typeof b){throw TypeError(b+" is not a function!")
}return b
}
},function(e,c){e.exports=function(g){try{return !!g()
}catch(f){return !0
}}
},function(e,c){(function(a){c.__esModule=!0,c["default"]=function(g){var f="undefined"!=typeof a?a:window,h=f.Handlebars;
g.noConflict=function(){return f.Handlebars===g&&(f.Handlebars=h),g
}
},e.exports=c["default"]
}).call(c,function(){return this
}())
},function(f,e){e.__esModule=!0;
var g={helpers:{helperExpression:function(b){return"SubExpression"===b.type||("MustacheStatement"===b.type||"BlockStatement"===b.type)&&!!(b.params&&b.params.length||b.hash)
},scopedId:function(b){return/^\.|this\b/.test(b.original)
},simpleId:function(b){return 1===b.parts.length&&!g.helpers.scopedId(b)&&!b.depth
}}};
e["default"]=g,f.exports=e["default"]
},function(B,A,z){function y(f,e){if("Program"===f.type){return f
}u["default"].yy=o,o.locInfo=function(b){return new o.SourceLocation(e&&e.srcName,b)
};
var g=new s["default"](e);
return g.accept(u["default"].parse(f))
}var x=z(1)["default"],w=z(3)["default"];
A.__esModule=!0,A.parse=y;
var v=z(37),u=x(v),t=z(38),s=x(t),r=z(40),q=w(r),p=z(5);
A.parser=u["default"];
var o={};
p.extend(o,q)
},function(f,e){e.__esModule=!0;
var g=function(){function j(){this.yy={}
}var h={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(w,v,u,t,s,r,q){var p=r.length-1;
switch(s){case 1:return r[p-1];
case 2:this.$=t.prepareProgram(r[p]);
break;
case 3:this.$=r[p];
break;
case 4:this.$=r[p];
break;
case 5:this.$=r[p];
break;
case 6:this.$=r[p];
break;
case 7:this.$=r[p];
break;
case 8:this.$=r[p];
break;
case 9:this.$={type:"CommentStatement",value:t.stripComment(r[p]),strip:t.stripFlags(r[p],r[p]),loc:t.locInfo(this._$)};
break;
case 10:this.$={type:"ContentStatement",original:r[p],value:r[p],loc:t.locInfo(this._$)};
break;
case 11:this.$=t.prepareRawBlock(r[p-2],r[p-1],r[p],this._$);
break;
case 12:this.$={path:r[p-3],params:r[p-2],hash:r[p-1]};
break;
case 13:this.$=t.prepareBlock(r[p-3],r[p-2],r[p-1],r[p],!1,this._$);
break;
case 14:this.$=t.prepareBlock(r[p-3],r[p-2],r[p-1],r[p],!0,this._$);
break;
case 15:this.$={open:r[p-5],path:r[p-4],params:r[p-3],hash:r[p-2],blockParams:r[p-1],strip:t.stripFlags(r[p-5],r[p])};
break;
case 16:this.$={path:r[p-4],params:r[p-3],hash:r[p-2],blockParams:r[p-1],strip:t.stripFlags(r[p-5],r[p])};
break;
case 17:this.$={path:r[p-4],params:r[p-3],hash:r[p-2],blockParams:r[p-1],strip:t.stripFlags(r[p-5],r[p])};
break;
case 18:this.$={strip:t.stripFlags(r[p-1],r[p-1]),program:r[p]};
break;
case 19:var o=t.prepareBlock(r[p-2],r[p-1],r[p],r[p],!1,this._$),n=t.prepareProgram([o],r[p-1].loc);
n.chained=!0,this.$={strip:r[p-2].strip,program:n,chain:!0};
break;
case 20:this.$=r[p];
break;
case 21:this.$={path:r[p-1],strip:t.stripFlags(r[p-2],r[p])};
break;
case 22:this.$=t.prepareMustache(r[p-3],r[p-2],r[p-1],r[p-4],t.stripFlags(r[p-4],r[p]),this._$);
break;
case 23:this.$=t.prepareMustache(r[p-3],r[p-2],r[p-1],r[p-4],t.stripFlags(r[p-4],r[p]),this._$);
break;
case 24:this.$={type:"PartialStatement",name:r[p-3],params:r[p-2],hash:r[p-1],indent:"",strip:t.stripFlags(r[p-4],r[p]),loc:t.locInfo(this._$)};
break;
case 25:this.$=t.preparePartialBlock(r[p-2],r[p-1],r[p],this._$);
break;
case 26:this.$={path:r[p-3],params:r[p-2],hash:r[p-1],strip:t.stripFlags(r[p-4],r[p])};
break;
case 27:this.$=r[p];
break;
case 28:this.$=r[p];
break;
case 29:this.$={type:"SubExpression",path:r[p-3],params:r[p-2],hash:r[p-1],loc:t.locInfo(this._$)};
break;
case 30:this.$={type:"Hash",pairs:r[p],loc:t.locInfo(this._$)};
break;
case 31:this.$={type:"HashPair",key:t.id(r[p-2]),value:r[p],loc:t.locInfo(this._$)};
break;
case 32:this.$=t.id(r[p-1]);
break;
case 33:this.$=r[p];
break;
case 34:this.$=r[p];
break;
case 35:this.$={type:"StringLiteral",value:r[p],original:r[p],loc:t.locInfo(this._$)};
break;
case 36:this.$={type:"NumberLiteral",value:Number(r[p]),original:Number(r[p]),loc:t.locInfo(this._$)};
break;
case 37:this.$={type:"BooleanLiteral",value:"true"===r[p],original:"true"===r[p],loc:t.locInfo(this._$)};
break;
case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:t.locInfo(this._$)};
break;
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:t.locInfo(this._$)};
break;
case 40:this.$=r[p];
break;
case 41:this.$=r[p];
break;
case 42:this.$=t.preparePath(!0,r[p],this._$);
break;
case 43:this.$=t.preparePath(!1,r[p],this._$);
break;
case 44:r[p-2].push({part:t.id(r[p]),original:r[p],separator:r[p-1]}),this.$=r[p-2];
break;
case 45:this.$=[{part:t.id(r[p]),original:r[p]}];
break;
case 46:this.$=[];
break;
case 47:r[p-1].push(r[p]);
break;
case 48:this.$=[r[p]];
break;
case 49:r[p-1].push(r[p]);
break;
case 50:this.$=[];
break;
case 51:r[p-1].push(r[p]);
break;
case 58:this.$=[];
break;
case 59:r[p-1].push(r[p]);
break;
case 64:this.$=[];
break;
case 65:r[p-1].push(r[p]);
break;
case 70:this.$=[];
break;
case 71:r[p-1].push(r[p]);
break;
case 78:this.$=[];
break;
case 79:r[p-1].push(r[p]);
break;
case 82:this.$=[];
break;
case 83:r[p-1].push(r[p]);
break;
case 86:this.$=[];
break;
case 87:r[p-1].push(r[p]);
break;
case 90:this.$=[];
break;
case 91:r[p-1].push(r[p]);
break;
case 94:this.$=[];
break;
case 95:r[p-1].push(r[p]);
break;
case 98:this.$=[r[p]];
break;
case 99:r[p-1].push(r[p]);
break;
case 100:this.$=[r[p]];
break;
case 101:r[p-1].push(r[p])
}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function(n,c){throw new Error(n)
},parse:function(V){function U(){var b;
return b=T.lexer.lex()||1,"number"!=typeof b&&(b=T.symbols_[b]||b),b
}var T=this,S=[0],R=[null],Q=[],P=this.table,O="",N=0,M=0,L=0;
this.lexer.setInput(V),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});
var K=this.lexer.yylloc;
Q.push(K);
var J=this.lexer.options&&this.lexer.options.ranges;
"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);
for(var I,H,G,F,E,D,C,B,A,z={};
;
){if(G=S[S.length-1],this.defaultActions[G]?F=this.defaultActions[G]:(null!==I&&"undefined"!=typeof I||(I=U()),F=P[G]&&P[G][I]),"undefined"==typeof F||!F.length||!F[0]){var y="";
if(!L){A=[];
for(D in P[G]){this.terminals_[D]&&D>2&&A.push("'"+this.terminals_[D]+"'")
}y=this.lexer.showPosition?"Parse error on line "+(N+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[I]||I)+"'":"Parse error on line "+(N+1)+": Unexpected "+(1==I?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(y,{text:this.lexer.match,token:this.terminals_[I]||I,line:this.lexer.yylineno,loc:K,expected:A})
}}if(F[0] instanceof Array&&F.length>1){throw new Error("Parse Error: multiple actions possible at state: "+G+", token: "+I)
}switch(F[0]){case 1:S.push(I),R.push(this.lexer.yytext),Q.push(this.lexer.yylloc),S.push(F[1]),I=null,H?(I=H,H=null):(M=this.lexer.yyleng,O=this.lexer.yytext,N=this.lexer.yylineno,K=this.lexer.yylloc,L>0&&L--);
break;
case 2:if(C=this.productions_[F[1]][1],z.$=R[R.length-C],z._$={first_line:Q[Q.length-(C||1)].first_line,last_line:Q[Q.length-1].last_line,first_column:Q[Q.length-(C||1)].first_column,last_column:Q[Q.length-1].last_column},J&&(z._$.range=[Q[Q.length-(C||1)].range[0],Q[Q.length-1].range[1]]),E=this.performAction.call(z,O,M,N,this.yy,F[1],R,Q),"undefined"!=typeof E){return E
}C&&(S=S.slice(0,-1*C*2),R=R.slice(0,-1*C),Q=Q.slice(0,-1*C)),S.push(this.productions_[F[1]][0]),R.push(z.$),Q.push(z._$),B=P[S[S.length-2]][S[S.length-1]],S.push(B);
break;
case 3:return !0
}}return !0
}},l=function(){var b={EOF:1,parseError:function(n,c){if(!this.yy.parser){throw new Error(n)
}this.yy.parser.parseError(n,c)
},setInput:function(c){return this._input=c,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this
},input:function(){var n=this._input[0];
this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;
var c=n.match(/(?:\r\n?|\n).*/g);
return c?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n
},unput:function(o){var n=o.length,r=o.split(/(?:\r\n?|\n)/g);
this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n-1),this.offset-=n;
var q=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);
var p=this.yylloc.range;
return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===q.length?this.yylloc.first_column:0)+q[q.length-r.length].length-r[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-n]),this
},more:function(){return this._more=!0,this
},less:function(c){this.unput(this.match.slice(c))
},pastInput:function(){var c=this.matched.substr(0,this.matched.length-this.match.length);
return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var c=this.match;
return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var n=this.pastInput(),c=new Array(n.length+1).join("-");
return n+this.upcomingInput()+"\n"+c+"^"
},next:function(){if(this.done){return this.EOF
}this._input||(this.done=!0);
var o,n,t,s,r;
this._more||(this.yytext="",this.match="");
for(var q=this._currentRules(),p=0;
p<q.length&&(t=this._input.match(this.rules[q[p]]),!t||n&&!(t[0].length>n[0].length)||(n=t,s=p,this.options.flex));
p++){}return n?(r=n[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],o=this.performAction.call(this,this.yy,this,q[s],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o?o:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
},lex:function(){var c=this.next();
return"undefined"!=typeof c?c:this.lex()
},begin:function(c){this.conditionStack.push(c)
},popState:function(){return this.conditionStack.pop()
},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function(c){this.begin(c)
}};
return b.options={},b.performAction=function(o,n,r,q){function p(s,t){return n.yytext=n.yytext.substr(s,n.yyleng-t)
}switch(r){case 0:if("\\\\"===n.yytext.slice(-2)?(p(0,1),this.begin("mu")):"\\"===n.yytext.slice(-1)?(p(0,1),this.begin("emu")):this.begin("mu"),n.yytext){return 15
}break;
case 1:return 15;
case 2:return this.popState(),15;
case 3:return this.begin("raw"),15;
case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(n.yytext=n.yytext.substr(5,n.yyleng-9),"END_RAW_BLOCK");
case 5:return 15;
case 6:return this.popState(),14;
case 7:return 65;
case 8:return 68;
case 9:return 19;
case 10:return this.popState(),this.begin("raw"),23;
case 11:return 55;
case 12:return 60;
case 13:return 29;
case 14:return 47;
case 15:return this.popState(),44;
case 16:return this.popState(),44;
case 17:return 34;
case 18:return 39;
case 19:return 51;
case 20:return 48;
case 21:this.unput(n.yytext),this.popState(),this.begin("com");
break;
case 22:return this.popState(),14;
case 23:return 48;
case 24:return 73;
case 25:return 72;
case 26:return 72;
case 27:return 87;
case 28:break;
case 29:return this.popState(),54;
case 30:return this.popState(),33;
case 31:return n.yytext=p(1,2).replace(/\\"/g,'"'),80;
case 32:return n.yytext=p(1,2).replace(/\\'/g,"'"),80;
case 33:return 85;
case 34:return 82;
case 35:return 82;
case 36:return 83;
case 37:return 84;
case 38:return 81;
case 39:return 75;
case 40:return 77;
case 41:return 72;
case 42:return n.yytext=n.yytext.replace(/\\([\\\]])/g,"$1"),72;
case 43:return"INVALID";
case 44:return 5
}},b.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],b.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},b
}();
return h.lexer=l,j.prototype=h,h.Parser=j,new j
}();
e["default"]=g,f.exports=e["default"]
},function(w,v,u){function t(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this.options=b
}function s(g,f,x){void 0===f&&(f=g.length);
var j=g[f-1],h=g[f-2];
return j?"ContentStatement"===j.type?(h||!x?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(j.original):void 0:x
}function r(g,f,x){void 0===f&&(f=-1);
var j=g[f+1],h=g[f+2];
return j?"ContentStatement"===j.type?(h||!x?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(j.original):void 0:x
}function q(g,f,x){var j=g[null==f?0:f+1];
if(j&&"ContentStatement"===j.type&&(x||!j.rightStripped)){var h=j.value;
j.value=j.value.replace(x?/^\s+/:/^[ \t]*\r?\n?/,""),j.rightStripped=j.value!==h
}}function p(g,f,x){var j=g[null==f?g.length-1:f-1];
if(j&&"ContentStatement"===j.type&&(x||!j.leftStripped)){var h=j.value;
return j.value=j.value.replace(x?/\s+$/:/[ \t]+$/,""),j.leftStripped=j.value!==h,j.leftStripped
}}var o=u(1)["default"];
v.__esModule=!0;
var n=u(39),l=o(n);
t.prototype=new l["default"],t.prototype.Program=function(F){var E=!this.options.ignoreStandalone,D=!this.isRootSeen;
this.isRootSeen=!0;
for(var C=F.body,B=0,A=C.length;
B<A;
B++){var z=C[B],y=this.accept(z);
if(y){var x=s(C,B,D),h=r(C,B,D),g=y.openStandalone&&x,f=y.closeStandalone&&h,e=y.inlineStandalone&&x&&h;
y.close&&q(C,B,!0),y.open&&p(C,B,!0),E&&e&&(q(C,B),p(C,B)&&"PartialStatement"===z.type&&(z.indent=/([ \t]+$)/.exec(C[B-1].original)[1])),E&&g&&(q((z.program||z.inverse).body),p(C,B)),E&&f&&(q(C,B),p((z.inverse||z.program).body))
}}return F
},t.prototype.BlockStatement=t.prototype.DecoratorBlock=t.prototype.PartialBlockStatement=function(f){this.accept(f.program),this.accept(f.inverse);
var e=f.program||f.inverse,z=f.program&&f.inverse,y=z,x=z;
if(z&&z.chained){for(y=z.body[0].program;
x.chained;
){x=x.body[x.body.length-1].program
}}var h={open:f.openStrip.open,close:f.closeStrip.close,openStandalone:r(e.body),closeStandalone:s((y||e).body)};
if(f.openStrip.close&&q(e.body,null,!0),z){var g=f.inverseStrip;
g.open&&p(e.body,null,!0),g.close&&q(y.body,null,!0),f.closeStrip.open&&p(x.body,null,!0),!this.options.ignoreStandalone&&s(e.body)&&r(y.body)&&(p(e.body),q(y.body))
}else{f.closeStrip.open&&p(e.body,null,!0)
}return h
},t.prototype.Decorator=t.prototype.MustacheStatement=function(b){return b.strip
},t.prototype.PartialStatement=t.prototype.CommentStatement=function(e){var c=e.strip||{};
return{inlineStandalone:!0,open:c.open,close:c.close}
},v["default"]=t,w.exports=v["default"]
},function(v,u,t){function s(){this.parents=[]
}function r(b){this.acceptRequired(b,"path"),this.acceptArray(b.params),this.acceptKey(b,"hash")
}function q(b){r.call(this,b),this.acceptKey(b,"program"),this.acceptKey(b,"inverse")
}function p(b){this.acceptRequired(b,"name"),this.acceptArray(b.params),this.acceptKey(b,"hash")
}var o=t(1)["default"];
u.__esModule=!0;
var n=t(6),l=o(n);
s.prototype={constructor:s,mutating:!1,acceptKey:function(f,e){var g=this.accept(f[e]);
if(this.mutating){if(g&&!s.prototype[g.type]){throw new l["default"]('Unexpected node type "'+g.type+'" found when accepting '+e+" on "+f.type)
}f[e]=g
}},acceptRequired:function(e,c){if(this.acceptKey(e,c),!e[c]){throw new l["default"](e.type+" requires "+c)
}},acceptArray:function(f){for(var e=0,g=f.length;
e<g;
e++){this.acceptKey(f,e),f[e]||(f.splice(e,1),e--,g--)
}},accept:function(e){if(e){if(!this[e.type]){throw new l["default"]("Unknown type: "+e.type,e)
}this.current&&this.parents.unshift(this.current),this.current=e;
var c=this[e.type](e);
return this.current=this.parents.shift(),!this.mutating||c?c:c!==!1?e:void 0
}},Program:function(b){this.acceptArray(b.body)
},MustacheStatement:r,Decorator:r,BlockStatement:q,DecoratorBlock:q,PartialStatement:p,PartialBlockStatement:function(b){p.call(this,b),this.acceptKey(b,"program")
},ContentStatement:function(){},CommentStatement:function(){},SubExpression:r,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(b){this.acceptArray(b.pairs)
},HashPair:function(b){this.acceptRequired(b,"value")
}},u["default"]=s,v.exports=u["default"]
},function(H,G,F){function E(f,e){if(e=e.path?e.path.original:e,f.path.original!==e){var g={loc:f.path.loc};
throw new r["default"](f.path.original+" doesn't match "+e,g)
}}function D(e,c){this.source=e,this.start={line:c.first_line,column:c.first_column},this.end={line:c.last_line,column:c.last_column}
}function C(b){return/^\[.*\]$/.test(b)?b.substr(1,b.length-2):b
}function B(e,c){return{open:"~"===e.charAt(2),close:"~"===c.charAt(c.length-3)}
}function A(b){return b.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")
}function z(N,M,L){L=this.locInfo(L);
for(var K=N?"@":"",J=[],I=0,q="",p=0,o=M.length;
p<o;
p++){var n=M[p].part,l=M[p].original!==n;
if(K+=(M[p].separator||"")+n,l||".."!==n&&"."!==n&&"this"!==n){J.push(n)
}else{if(J.length>0){throw new r["default"]("Invalid path: "+K,{loc:L})
}".."===n&&(I++,q+="../")
}}return{type:"PathExpression",data:N,depth:I,parts:J,original:K,loc:L}
}function y(K,J,I,q,p,o){var n=q.charAt(3)||q.charAt(2),l="{"!==n&&"&"!==n,j=/\*/.test(q);
return{type:j?"Decorator":"MustacheStatement",path:K,params:J,hash:I,escaped:l,strip:p,loc:this.locInfo(o)}
}function x(h,g,n,l){E(h,n),l=this.locInfo(l);
var j={type:"Program",body:g,strip:{},loc:l};
return{type:"BlockStatement",path:h.path,params:h.params,hash:h.hash,program:j,openStrip:{},inverseStrip:{},closeStrip:{},loc:l}
}function w(L,K,J,I,q,p){I&&I.path&&E(L,I);
var o=/\*/.test(L.open);
K.blockParams=L.blockParams;
var n=void 0,l=void 0;
if(J){if(o){throw new r["default"]("Unexpected inverse block on decorator",J)
}J.chain&&(J.program.body[0].closeStrip=I.strip),l=J.strip,n=J.program
}return q&&(q=n,n=K,K=q),{type:o?"DecoratorBlock":"BlockStatement",path:L.path,params:L.params,hash:L.hash,program:K,inverse:n,openStrip:L.strip,inverseStrip:l,closeStrip:I&&I.strip,loc:this.locInfo(p)}
}function v(f,e){if(!e&&f.length){var h=f[0].loc,g=f[f.length-1].loc;
h&&g&&(e={source:h.source,start:{line:h.start.line,column:h.start.column},end:{line:g.end.line,column:g.end.column}})
}return{type:"Program",body:f,strip:{},loc:e}
}function u(g,f,j,h){return E(g,j),{type:"PartialBlockStatement",name:g.path,params:g.params,hash:g.hash,program:f,openStrip:g.strip,closeStrip:j&&j.strip,loc:this.locInfo(h)}
}var t=F(1)["default"];
G.__esModule=!0,G.SourceLocation=D,G.id=C,G.stripFlags=B,G.stripComment=A,G.preparePath=z,G.prepareMustache=y,G.prepareRawBlock=x,G.prepareBlock=w,G.prepareProgram=v,G.preparePartialBlock=u;
var s=F(6),r=t(s)
},function(D,C,B){function A(){}function z(g,f,l){if(null==g||"string"!=typeof g&&"Program"!==g.type){throw new t["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+g)
}f=f||{},"data" in f||(f.data=!0),f.compat&&(f.useDepths=!0);
var j=l.parse(g,f),h=(new l.Compiler).compile(j,f);
return(new l.JavaScriptCompiler).compile(h,f)
}function y(h,g,o){function n(){var c=o.parse(h,g),b=(new o.Compiler).compile(c,g),a=(new o.JavaScriptCompiler).compile(b,g,void 0,!0);
return o.template(a)
}function l(e,c){return j||(j=n()),j.call(this,e,c)
}if(void 0===g&&(g={}),null==h||"string"!=typeof h&&"Program"!==h.type){throw new t["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+h)
}g=s.extend({},g),"data" in g||(g.data=!0),g.compat&&(g.useDepths=!0);
var j=void 0;
return l._setup=function(b){return j||(j=n()),j._setup(b)
},l._child=function(E,f,G,F){return j||(j=n()),j._child(E,f,G,F)
},l
}function x(f,e){if(f===e){return !0
}if(s.isArray(f)&&s.isArray(e)&&f.length===e.length){for(var g=0;
g<f.length;
g++){if(!x(f[g],e[g])){return !1
}}return !0
}}function w(e){if(!e.path.parts){var c=e.path;
e.path={type:"PathExpression",data:!1,depth:0,parts:[c.original+""],original:c.original+"",loc:c.loc}
}}var v=B(1)["default"];
C.__esModule=!0,C.Compiler=A,C.precompile=z,C.compile=y;
var u=B(6),t=v(u),s=B(5),r=B(35),q=v(r),p=[].slice;
A.prototype={compiler:A,equals:function(g){var f=this.opcodes.length;
if(g.opcodes.length!==f){return !1
}for(var l=0;
l<f;
l++){var j=this.opcodes[l],h=g.opcodes[l];
if(j.opcode!==h.opcode||!x(j.args,h.args)){return !1
}}f=this.children.length;
for(var l=0;
l<f;
l++){if(!this.children[l].equals(g.children[l])){return !1
}}return !0
},guid:0,compile:function(f,e){this.sourceNode=[],this.opcodes=[],this.children=[],this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds,e.blockParams=e.blockParams||[];
var h=e.knownHelpers;
if(e.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},h){for(var g in h){g in h&&(this.options.knownHelpers[g]=h[g])
}}return this.accept(f)
},compileProgram:function(f){var e=new this.compiler,h=e.compile(f,this.options),g=this.guid++;
return this.usePartial=this.usePartial||h.usePartial,this.children[g]=h,this.useDepths=this.useDepths||h.useDepths,g
},accept:function(e){if(!this[e.type]){throw new t["default"]("Unknown type: "+e.type,e)
}this.sourceNode.unshift(e);
var c=this[e.type](e);
return this.sourceNode.shift(),c
},Program:function(f){this.options.blockParams.unshift(f.blockParams);
for(var e=f.body,h=e.length,g=0;
g<h;
g++){this.accept(e[g])
}return this.options.blockParams.shift(),this.isSimple=1===h,this.blockParams=f.blockParams?f.blockParams.length:0,this
},BlockStatement:function(f){w(f);
var e=f.program,h=f.inverse;
e=e&&this.compileProgram(e),h=h&&this.compileProgram(h);
var g=this.classifySexpr(f);
"helper"===g?this.helperSexpr(f,e,h):"simple"===g?(this.simpleSexpr(f),this.opcode("pushProgram",e),this.opcode("pushProgram",h),this.opcode("emptyHash"),this.opcode("blockValue",f.path.original)):(this.ambiguousSexpr(f,e,h),this.opcode("pushProgram",e),this.opcode("pushProgram",h),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")
},DecoratorBlock:function(f){var e=f.program&&this.compileProgram(f.program),h=this.setupFullMustacheParams(f,e,void 0),g=f.path;
this.useDecorators=!0,this.opcode("registerDecorator",h.length,g.original)
},PartialStatement:function(h){this.usePartial=!0;
var g=h.program;
g&&(g=this.compileProgram(h.program));
var o=h.params;
if(o.length>1){throw new t["default"]("Unsupported number of partial arguments: "+o.length,h)
}o.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):o.push({type:"PathExpression",parts:[],depth:0}));
var n=h.name.original,l="SubExpression"===h.name.type;
l&&this.accept(h.name),this.setupFullMustacheParams(h,g,void 0,!0);
var j=h.indent||"";
this.options.preventIndent&&j&&(this.opcode("appendContent",j),j=""),this.opcode("invokePartial",l,n,j),this.opcode("append")
},PartialBlockStatement:function(b){this.PartialStatement(b)
},MustacheStatement:function(b){this.SubExpression(b),b.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")
},Decorator:function(b){this.DecoratorBlock(b)
},ContentStatement:function(b){b.value&&this.opcode("appendContent",b.value)
},CommentStatement:function(){},SubExpression:function(e){w(e);
var c=this.classifySexpr(e);
"simple"===c?this.simpleSexpr(e):"helper"===c?this.helperSexpr(e):this.ambiguousSexpr(e)
},ambiguousSexpr:function(h,g,o){var n=h.path,l=n.parts[0],j=null!=g||null!=o;
this.opcode("getContext",n.depth),this.opcode("pushProgram",g),this.opcode("pushProgram",o),n.strict=!0,this.accept(n),this.opcode("invokeAmbiguous",l,j)
},simpleSexpr:function(e){var c=e.path;
c.strict=!0,this.accept(c),this.opcode("resolvePossibleLambda")
},helperSexpr:function(h,g,o){var n=this.setupFullMustacheParams(h,g,o),l=h.path,j=l.parts[0];
if(this.options.knownHelpers[j]){this.opcode("invokeKnownHelper",n.length,j)
}else{if(this.options.knownHelpersOnly){throw new t["default"]("You specified knownHelpersOnly, but used the unknown helper "+j,h)
}l.strict=!0,l.falsy=!0,this.accept(l),this.opcode("invokeHelper",n.length,l.original,q["default"].helpers.simpleId(l))
}},PathExpression:function(f){this.addDepth(f.depth),this.opcode("getContext",f.depth);
var e=f.parts[0],h=q["default"].helpers.scopedId(f),g=!f.depth&&!h&&this.blockParamIndex(e);
g?this.opcode("lookupBlockParam",g,f.parts):e?f.data?(this.options.data=!0,this.opcode("lookupData",f.depth,f.parts,f.strict)):this.opcode("lookupOnContext",f.parts,f.falsy,f.strict,h):this.opcode("pushContext")
},StringLiteral:function(b){this.opcode("pushString",b.value)
},NumberLiteral:function(b){this.opcode("pushLiteral",b.value)
},BooleanLiteral:function(b){this.opcode("pushLiteral",b.value)
},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")
},NullLiteral:function(){this.opcode("pushLiteral","null")
},Hash:function(f){var e=f.pairs,h=0,g=e.length;
for(this.opcode("pushHash");
h<g;
h++){this.pushParam(e[h].value)
}for(;
h--;
){this.opcode("assignToHash",e[h].key)
}this.opcode("popHash")
},opcode:function(b){this.opcodes.push({opcode:b,args:p.call(arguments,1),loc:this.sourceNode[0].loc})
},addDepth:function(b){b&&(this.useDepths=!0)
},classifySexpr:function(j){var h=q["default"].helpers.simpleId(j.path),F=h&&!!this.blockParamIndex(j.path.parts[0]),E=!F&&q["default"].helpers.helperExpression(j),o=!F&&(E||h);
if(o&&!E){var n=j.path.parts[0],l=this.options;
l.knownHelpers[n]?E=!0:l.knownHelpersOnly&&(o=!1)
}return E?"helper":o?"ambiguous":"simple"
},pushParams:function(f){for(var e=0,g=f.length;
e<g;
e++){this.pushParam(f[e])
}},pushParam:function(f){var e=null!=f.value?f.value:f.original||"";
if(this.stringParams){e.replace&&(e=e.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),f.depth&&this.addDepth(f.depth),this.opcode("getContext",f.depth||0),this.opcode("pushStringParam",e,f.type),"SubExpression"===f.type&&this.accept(f)
}else{if(this.trackIds){var h=void 0;
if(!f.parts||q["default"].helpers.scopedId(f)||f.depth||(h=this.blockParamIndex(f.parts[0])),h){var g=f.parts.slice(1).join(".");
this.opcode("pushId","BlockParam",h,g)
}else{e=f.original||e,e.replace&&(e=e.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",f.type,e)
}}this.accept(f)
}},setupFullMustacheParams:function(g,f,l,j){var h=g.params;
return this.pushParams(h),this.opcode("pushProgram",f),this.opcode("pushProgram",l),g.hash?this.accept(g.hash):this.opcode("emptyHash",j),h
},blockParamIndex:function(g){for(var f=0,l=this.options.blockParams.length;
f<l;
f++){var j=this.options.blockParams[f],h=j&&s.indexOf(j,g);
if(j&&h>=0){return[f,h]
}}}}
},function(z,y,x){function w(b){this.value=b
}function v(){}function u(j,h,D,C){var B=h.popStack(),A=0,l=D.length;
for(j&&l--;
A<l;
A++){B=h.nameLookup(B,D[A],C)
}return j?[h.aliasable("container.strict"),"(",B,", ",h.quotedString(D[A]),")"]:B
}var t=x(1)["default"];
y.__esModule=!0;
var s=x(4),r=x(6),q=t(r),p=x(5),o=x(43),n=t(o);
v.prototype={nameLookup:function(e,c){return v.isValidJavaScriptVariableName(c)?[e,".",c]:[e,"[",JSON.stringify(c),"]"]
},depthedLookup:function(b){return[this.aliasable("container.lookup"),'(depths, "',b,'")']
},compilerInfo:function(){var e=s.COMPILER_REVISION,c=s.REVISION_CHANGES[e];
return[e,c]
},appendToBuffer:function(f,e,g){return p.isArray(f)||(f=[f]),f=this.source.wrap(f,e),this.environment.isSimple?["return ",f,";"]:g?["buffer += ",f,";"]:(f.appendToBuffer=!0,f)
},initializeBuffer:function(){return this.quotedString("")
},compile:function(M,L,K,J){this.environment=M,this.options=L,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!J,this.name=this.environment.name,this.isChild=!!K,this.context=K||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(M,L),this.useDepths=this.useDepths||M.useDepths||M.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||M.useBlockParams;
var I=M.opcodes,H=void 0,G=void 0,F=void 0,E=void 0;
for(F=0,E=I.length;
F<E;
F++){H=I[F],this.source.currentLocation=H.loc,G=G||H.loc,this[H.opcode].apply(this,H.args)
}if(this.source.currentLocation=G,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new q["default"]("Compile completed with content left on stack")
}this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend("var decorators = container.decorators;\n"),this.decorators.push("return fn;"),J?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));
var D=this.createFunctionContext(J);
if(this.isChild){return D
}var C={compiler:this.compilerInfo(),main:D};
this.decorators&&(C.main_d=this.decorators,C.useDecorators=!0);
var B=this.context,A=B.programs,j=B.decorators;
for(F=0,E=A.length;
F<E;
F++){A[F]&&(C[F]=A[F],j[F]&&(C[F+"_d"]=j[F],C.useDecorators=!0))
}return this.environment.usePartial&&(C.usePartial=!0),this.options.data&&(C.useData=!0),this.useDepths&&(C.useDepths=!0),this.useBlockParams&&(C.useBlockParams=!0),this.options.compat&&(C.compat=!0),J?C.compilerOptions=this.options:(C.compiler=JSON.stringify(C.compiler),this.source.currentLocation={start:{line:1,column:0}},C=this.objectLiteral(C),L.srcName?(C=C.toStringWithSourceMap({file:L.destName}),C.map=C.map&&C.map.toString()):C=C.toString()),C
},preamble:function(){this.lastContext=0,this.source=new n["default"](this.options.srcName),this.decorators=new n["default"](this.options.srcName)
},createFunctionContext:function(l){var j="",F=this.stackVars.concat(this.registers.list);
F.length>0&&(j+=", "+F.join(", "));
var E=0;
for(var D in this.aliases){var C=this.aliases[D];
this.aliases.hasOwnProperty(D)&&C.children&&C.referenceCount>1&&(j+=", alias"+ ++E+"="+D,C.children[0]="alias"+E)
}var B=["container","depth0","helpers","partials","data"];
(this.useBlockParams||this.useDepths)&&B.push("blockParams"),this.useDepths&&B.push("depths");
var A=this.mergeSource(j);
return l?(B.push(A),Function.apply(this,B)):this.source.wrap(["function(",B.join(","),") {\n  ",A,"}"])
},mergeSource:function(j){var h=this.environment.isSimple,D=!this.forceBuffer,C=void 0,B=void 0,A=void 0,l=void 0;
return this.source.each(function(b){b.appendToBuffer?(A?b.prepend("  + "):A=b,l=b):(A&&(B?A.prepend("buffer += "):C=!0,l.add(";"),A=l=void 0),B=!0,h||(D=!1))
}),D?A?(A.prepend("return "),l.add(";")):B||this.source.push('return "";'):(j+=", buffer = "+(C?"":this.initializeBuffer()),A?(A.prepend("return buffer + "),l.add(";")):this.source.push("return buffer;")),j&&this.source.prepend("var "+j.substring(2)+(C?"":";\n")),this.source.merge()
},blockValue:function(f){var e=this.aliasable("helpers.blockHelperMissing"),h=[this.contextName(0)];
this.setupHelperArgs(f,0,h);
var g=this.popStack();
h.splice(1,0,g),this.push(this.source.functionCall(e,"call",h))
},ambiguousBlockValue:function(){var f=this.aliasable("helpers.blockHelperMissing"),e=[this.contextName(0)];
this.setupHelperArgs("",0,e,!0),this.flushInline();
var g=this.topStack();
e.splice(1,0,g),this.pushSource(["if (!",this.lastHelper,") { ",g," = ",this.source.functionCall(f,"call",e),"}"])
},appendContent:function(b){this.pendingContent?b=this.pendingContent+b:this.pendingLocation=this.source.currentLocation,this.pendingContent=b
},append:function(){if(this.isInline()){this.replaceStack(function(c){return[" != null ? ",c,' : ""']
}),this.pushSource(this.appendToBuffer(this.popStack()))
}else{var b=this.popStack();
this.pushSource(["if (",b," != null) { ",this.appendToBuffer(b,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])
}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))
},getContext:function(b){this.lastContext=b
},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))
},lookupOnContext:function(g,f,l,j){var h=0;
j||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(g[h++])),this.resolvePath("context",g,h,f,l)
},lookupBlockParam:function(e,c){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",c,1)
},lookupData:function(f,e,g){f?this.pushStackLiteral("container.data(data, "+f+")"):this.pushStackLiteral("data"),this.resolvePath("data",e,0,!0,g)
},resolvePath:function(j,f,D,C,B){var A=this;
if(this.options.strict||this.options.assumeObjects){return void this.push(u(this.options.strict&&B,this,f,j))
}for(var l=f.length;
D<l;
D++){this.replaceStack(function(b){var a=A.nameLookup(b,f[D],j);
return C?[" && ",a]:[" != null ? ",a," : ",b]
})
}},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])
},pushStringParam:function(e,c){this.pushContext(),this.pushString(c),"SubExpression"!==c&&("string"==typeof e?this.pushString(e):this.pushStackLiteral(e))
},emptyHash:function(b){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(b?"undefined":"{}")
},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}
},popHash:function(){var b=this.hash;
this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(b.ids)),this.stringParams&&(this.push(this.objectLiteral(b.contexts)),this.push(this.objectLiteral(b.types))),this.push(this.objectLiteral(b.values))
},pushString:function(b){this.pushStackLiteral(this.quotedString(b))
},pushLiteral:function(b){this.pushStackLiteral(b)
},pushProgram:function(b){null!=b?this.pushStackLiteral(this.programExpression(b)):this.pushStackLiteral(null)
},registerDecorator:function(f,e){var h=this.nameLookup("decorators",e,"decorator"),g=this.setupHelperArgs(e,f);
this.decorators.push(["fn = ",this.decorators.functionCall(h,"",["fn","props","container",g])," || fn;"])
},invokeHelper:function(j,h,D){var C=this.popStack(),B=this.setupHelper(j,h),A=D?[B.name," || "]:"",l=["("].concat(A,C);
this.options.strict||l.push(" || ",this.aliasable("helpers.helperMissing")),l.push(")"),this.push(this.source.functionCall(l,"call",B.callParams))
},invokeKnownHelper:function(f,e){var g=this.setupHelper(f,e);
this.push(this.source.functionCall(g.name,"call",g.callParams))
},invokeAmbiguous:function(h,g){this.useRegister("helper");
var B=this.popStack();
this.emptyHash();
var A=this.setupHelper(0,h,g),l=this.lastHelper=this.nameLookup("helpers",h,"helper"),j=["(","(helper = ",l," || ",B,")"];
this.options.strict||(j[0]="(helper = ",j.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))),this.push(["(",j,A.paramsInit?["),(",A.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",A.callParams)," : helper))"])
},invokePartial:function(g,f,l){var j=[],h=this.setupParams(f,1,j);
g&&(f=this.popStack(),delete h.name),l&&(h.indent=JSON.stringify(l)),h.helpers="helpers",h.partials="partials",h.decorators="container.decorators",g?j.unshift(f):j.unshift(this.nameLookup("partials",f,"partial")),this.options.compat&&(h.depths="depths"),h=this.objectLiteral(h),j.push(h),this.push(this.source.functionCall("container.invokePartial","",j))
},assignToHash:function(h){var g=this.popStack(),B=void 0,A=void 0,l=void 0;
this.trackIds&&(l=this.popStack()),this.stringParams&&(A=this.popStack(),B=this.popStack());
var j=this.hash;
B&&(j.contexts[h]=B),A&&(j.types[h]=A),l&&(j.ids[h]=l),j.values[h]=g
},pushId:function(f,e,g){"BlockParam"===f?this.pushStackLiteral("blockParams["+e[0]+"].path["+e[1]+"]"+(g?" + "+JSON.stringify("."+g):"")):"PathExpression"===f?this.pushString(e):"SubExpression"===f?this.pushStackLiteral("true"):this.pushStackLiteral("null")
},compiler:v,compileChildren:function(G,F){for(var E=G.children,D=void 0,C=void 0,B=0,A=E.length;
B<A;
B++){D=E[B],C=new this.compiler;
var l=this.matchExistingProgram(D);
if(null==l){this.context.programs.push("");
var j=this.context.programs.length;
D.index=j,D.name="program"+j,this.context.programs[j]=C.compile(D,F,this.context,!this.precompile),this.context.decorators[j]=C.decorators,this.context.environments[j]=D,this.useDepths=this.useDepths||C.useDepths,this.useBlockParams=this.useBlockParams||C.useBlockParams,D.useDepths=this.useDepths,D.useBlockParams=this.useBlockParams
}else{D.index=l.index,D.name="program"+l.index,this.useDepths=this.useDepths||l.useDepths,this.useBlockParams=this.useBlockParams||l.useBlockParams
}}},matchExistingProgram:function(f){for(var e=0,h=this.context.environments.length;
e<h;
e++){var g=this.context.environments[e];
if(g&&g.equals(f)){return g
}}},programExpression:function(f){var e=this.environment.children[f],g=[e.index,"data",e.blockParams];
return(this.useBlockParams||this.useDepths)&&g.push("blockParams"),this.useDepths&&g.push("depths"),"container.program("+g.join(", ")+")"
},useRegister:function(b){this.registers[b]||(this.registers[b]=!0,this.registers.list.push(b))
},push:function(b){return b instanceof w||(b=this.source.wrap(b)),this.inlineStack.push(b),b
},pushStackLiteral:function(b){this.push(new w(b))
},pushSource:function(b){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),b&&this.source.push(b)
},replaceStack:function(l){var j=["("],F=void 0,E=void 0,D=void 0;
if(!this.isInline()){throw new q["default"]("replaceStack on non-inline")
}var C=this.popStack(!0);
if(C instanceof w){F=[C.value],j=["(",F],D=!0
}else{E=!0;
var B=this.incrStack();
j=["((",this.push(B)," = ",C,")"],F=this.topStack()
}var A=l.call(this,F);
D||this.popStack(),E&&this.stackSlot--,this.push(j.concat(A,")"))
},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var h=this.inlineStack;
this.inlineStack=[];
for(var g=0,A=h.length;
g<A;
g++){var l=h[g];
if(l instanceof w){this.compileStack.push(l)
}else{var j=this.incrStack();
this.pushSource([j," = ",l,";"]),this.compileStack.push(j)
}}},isInline:function(){return this.inlineStack.length
},popStack:function(f){var e=this.isInline(),g=(e?this.inlineStack:this.compileStack).pop();
if(!f&&g instanceof w){return g.value
}if(!e){if(!this.stackSlot){throw new q["default"]("Invalid stack pop")
}this.stackSlot--
}return g
},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,c=e[e.length-1];
return c instanceof w?c.value:c
},contextName:function(b){return this.useDepths&&b?"depths["+b+"]":"depth"+b
},quotedString:function(b){return this.source.quotedString(b)
},objectLiteral:function(b){return this.source.objectLiteral(b)
},aliasable:function(e){var c=this.aliases[e];
return c?(c.referenceCount++,c):(c=this.aliases[e]=this.source.wrap(e),c.aliasable=!0,c.referenceCount=1,c)
},setupHelper:function(j,h,D){var C=[],B=this.setupHelperArgs(h,j,C,D),A=this.nameLookup("helpers",h,"helper"),l=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");
return{params:C,paramsInit:B,name:A,callParams:[l].concat(C)}
},setupParams:function(L,K,J){var I={},H=[],G=[],F=[],E=!J,D=void 0;
E&&(J=[]),I.name=this.quotedString(L),I.hash=this.popStack(),this.trackIds&&(I.hashIds=this.popStack()),this.stringParams&&(I.hashTypes=this.popStack(),I.hashContexts=this.popStack());
var C=this.popStack(),B=this.popStack();
(B||C)&&(I.fn=B||"container.noop",I.inverse=C||"container.noop");
for(var A=K;
A--;
){D=this.popStack(),J[A]=D,this.trackIds&&(F[A]=this.popStack()),this.stringParams&&(G[A]=this.popStack(),H[A]=this.popStack())
}return E&&(I.args=this.source.generateArray(J)),this.trackIds&&(I.ids=this.source.generateArray(F)),this.stringParams&&(I.types=this.source.generateArray(G),I.contexts=this.source.generateArray(H)),this.options.data&&(I.data="data"),this.useBlockParams&&(I.blockParams="blockParams"),I
},setupHelperArgs:function(g,f,l,j){var h=this.setupParams(g,f,l);
return h=this.objectLiteral(h),j?(this.useRegister("options"),l.push("options"),["options=",h]):l?(l.push(h),""):h
}},function(){for(var f="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=v.RESERVED_WORDS={},h=0,g=f.length;
h<g;
h++){e[f[h]]=!0
}}(),v.isValidJavaScriptVariableName=function(b){return !v.RESERVED_WORDS[b]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b)
},y["default"]=v,z.exports=y["default"]
},function(l,j,s){function r(h,f,w){if(p.isArray(h)){for(var v=[],u=0,t=h.length;
u<t;
u++){v.push(f.wrap(h[u],w))
}return v
}return"boolean"==typeof h||"number"==typeof h?h+"":h
}function q(b){this.srcFile=b,this.source=[]
}j.__esModule=!0;
var p=s(5),o=void 0;
try{}catch(n){}o||(o=function(f,e,h,g){this.src="",g&&this.add(g)
},o.prototype={add:function(b){p.isArray(b)&&(b=b.join("")),this.src+=b
},prepend:function(b){p.isArray(b)&&(b=b.join("")),this.src=b+this.src
},toStringWithSourceMap:function(){return{code:this.toString()}
},toString:function(){return this.src
}}),q.prototype={isEmpty:function(){return !this.source.length
},prepend:function(e,c){this.source.unshift(this.wrap(e,c))
},push:function(e,c){this.source.push(this.wrap(e,c))
},merge:function(){var b=this.empty();
return this.each(function(a){b.add(["  ",a,"\n"])
}),b
},each:function(f){for(var e=0,g=this.source.length;
e<g;
e++){f(this.source[e])
}},empty:function(){var b=this.currentLocation||{start:{}};
return new o(b.start.line,b.start.column,this.srcFile)
},wrap:function(e){var c=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];
return e instanceof o?e:(e=r(e,this,c),new o(c.start.line,c.start.column,this.srcFile,e))
},functionCall:function(f,e,g){return g=this.generateList(g),this.wrap([f,e?"."+e+"(":"(",g,")"])
},quotedString:function(b){return'"'+(b+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},objectLiteral:function(h){var g=[];
for(var v in h){if(h.hasOwnProperty(v)){var u=r(h[v],this);
"undefined"!==u&&g.push([this.quotedString(v),":",u])
}}var t=this.generateList(g);
return t.prepend("{"),t.add("}"),t
},generateList:function(g){for(var f=this.empty(),t=0,h=g.length;
t<h;
t++){t&&f.add(","),f.add(r(g[t],this))
}return f
},generateArray:function(e){var c=this.generateList(e);
return c.prepend("["),c.add("]"),c
}},j["default"]=q,l.exports=j["default"]
}])
});
var d=new Date();
var dateText="";
var dayValue=d.getDay();
if(dayValue==0){dateText+="Sun."
}else{if(dayValue==1){dateText+="Mon."
}else{if(dayValue==2){dateText+="Tues."
}else{if(dayValue==3){dateText+="Wed."
}else{if(dayValue==4){dateText+="Thur."
}else{if(dayValue==5){dateText+="Fri."
}else{if(dayValue==6){dateText+="Sat."
}}}}}}}var monthValue=d.getMonth();
dateText+=" ";
if(monthValue==0){dateText+="Jan."
}if(monthValue==1){dateText+="Feb."
}if(monthValue==2){dateText+="Mar."
}if(monthValue==3){dateText+="Apr."
}if(monthValue==4){dateText+="May"
}if(monthValue==5){dateText+="Jun."
}if(monthValue==6){dateText+="Jul."
}if(monthValue==7){dateText+="Aug."
}if(monthValue==8){dateText+="Sept."
}if(monthValue==9){dateText+="Oct."
}if(monthValue==10){dateText+="Nov."
}if(monthValue==11){dateText+="Dec."
}if(d.getYear()<2000){dateText+=" "+d.getDate()+", "+(1900+d.getYear())
}else{dateText+=" "+d.getDate()+", "+(d.getYear())
}var minuteValue=d.getMinutes();
if(minuteValue<10){minuteValue="0"+minuteValue
}var hourValue=d.getHours();
var greeting;
var timeText;
if(hourValue<12){greeting="Good morning!";
timeText=" at "+hourValue+":"+minuteValue+" AM"
}else{if(hourValue==12){greeting="Good afternoon!";
timeText=" at "+hourValue+":"+minuteValue+" PM"
}else{if(hourValue<17){greeting="Good afternoon!";
timeText=" at "+(hourValue-12)+":"+minuteValue+" PM"
}else{greeting="Good evening!";
timeText=" at "+(hourValue-12)+":"+minuteValue+" PM"
}}}var MONTH_NAMES=new Array("January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
function LZ(a){return(a<0||a>9?"":"0")+a
}function isDate(c,b){var a=getDateFromFormat(c,b);
if(a==0){return false
}return true
}function compareDates(f,g,c,e){var b=getDateFromFormat(f,g);
var a=getDateFromFormat(c,e);
if(b==0||a==0){return -1
}else{if(b>a){return 1
}}return 0
}function formatDate(G,D){D=D+"";
var n="";
var v=0;
var F="";
var f="";
var l=G.getYear()+"";
var g=G.getMonth()+1;
var E=G.getDate();
var o=G.getHours();
var x=G.getMinutes();
var q=G.getSeconds();
var t,u,b,r,I,e,C,B,z,p,L,o,J,j,a,A;
var w=new Object();
if(l.length<4){l=""+(l-0+1900)
}w.y=""+l;
w.yyyy=l;
w.yy=l.substring(2,4);
w.M=g;
w.MM=LZ(g);
w.MMM=MONTH_NAMES[g-1];
w.d=E;
w.dd=LZ(E);
w.H=o;
w.HH=LZ(o);
if(o==0){w.h=12
}else{if(o>12){w.h=o-12
}else{w.h=o
}}w.hh=LZ(w.h);
if(o>11){w.K=o-12
}else{w.K=o
}w.k=o+1;
w.KK=LZ(w.K);
w.kk=LZ(w.k);
if(o>11){w.a="PM"
}else{w.a="AM"
}w.m=x;
w.mm=LZ(x);
w.s=q;
w.ss=LZ(q);
while(v<D.length){F=D.charAt(v);
f="";
while((D.charAt(v)==F)&&(v<D.length)){f+=D.charAt(v++)
}if(w[f]!=null){n=n+w[f]
}else{n=n+f
}}return n
}function _isInteger(c){var b="1234567890";
for(var a=0;
a<c.length;
a++){if(b.indexOf(c.charAt(a))==-1){return false
}}return true
}function _getInt(g,e,f,c){for(var a=c;
a>=f;
a--){var b=g.substring(e,e+a);
if(b.length<f){return null
}if(_isInteger(b)){return b
}}return null
}function getDateFromFormat(A,r){A=A+"";
r=r+"";
var z=0;
var o=0;
var t="";
var g="";
var w="";
var j,h;
var b=new Date();
var l=b.getYear();
var v=b.getMonth()+1;
var u=b.getDate();
var e=b.getHours();
var s=b.getMinutes();
var p=b.getSeconds();
var n="";
while(o<r.length){t=r.charAt(o);
g="";
while((r.charAt(o)==t)&&(o<r.length)){g+=r.charAt(o++)
}if(g=="yyyy"||g=="yy"||g=="y"){if(g=="yyyy"){j=4;
h=4
}if(g=="yy"){j=2;
h=2
}if(g=="y"){j=2;
h=4
}l=_getInt(A,z,j,h);
if(l==null){return 0
}z+=l.length;
if(l.length==2){if(l>70){l=1900+(l-0)
}else{l=2000+(l-0)
}}}else{if(g=="MMM"){v=0;
for(var q=0;
q<MONTH_NAMES.length;
q++){var f=MONTH_NAMES[q];
if(A.substring(z,z+f.length).toLowerCase()==f.toLowerCase()){v=q+1;
if(v>12){v-=12
}z+=f.length;
break
}}if((v<1)||(v>12)){return 0
}}else{if(g=="MM"||g=="M"){v=_getInt(A,z,g.length,2);
if(v==null||(v<1)||(v>12)){return 0
}z+=v.length
}else{if(g=="dd"||g=="d"){u=_getInt(A,z,g.length,2);
if(u==null||(u<1)||(u>31)){return 0
}z+=u.length
}else{if(g=="hh"||g=="h"){e=_getInt(A,z,g.length,2);
if(e==null||(e<1)||(e>12)){return 0
}z+=e.length
}else{if(g=="HH"||g=="H"){e=_getInt(A,z,g.length,2);
if(e==null||(e<0)||(e>23)){return 0
}z+=e.length
}else{if(g=="KK"||g=="K"){e=_getInt(A,z,g.length,2);
if(e==null||(e<0)||(e>11)){return 0
}z+=e.length
}else{if(g=="kk"||g=="k"){e=_getInt(A,z,g.length,2);
if(e==null||(e<1)||(e>24)){return 0
}z+=e.length;
e--
}else{if(g=="mm"||g=="m"){s=_getInt(A,z,g.length,2);
if(s==null||(s<0)||(s>59)){return 0
}z+=s.length
}else{if(g=="ss"||g=="s"){p=_getInt(A,z,g.length,2);
if(p==null||(p<0)||(p>59)){return 0
}z+=p.length
}else{if(g=="a"){if(A.substring(z,z+2).toLowerCase()=="am"){n="AM"
}else{if(A.substring(z,z+2).toLowerCase()=="pm"){n="PM"
}else{return 0
}}z+=2
}else{if(A.substring(z,z+g.length)!=g){return 0
}else{z+=g.length
}}}}}}}}}}}}}if(z!=A.length){return 0
}if(v==2){if(((l%4==0)&&(l%100!=0))||(l%400==0)){if(u>29){return false
}}else{if(u>28){return false
}}}if((v==4)||(v==6)||(v==9)||(v==11)){if(u>30){return false
}}if(e<12&&n=="PM"){e+=12
}else{if(e>11&&n=="AM"){e-=12
}}var a=new Date(l,v-1,u,e,s,p);
return a.getTime()
}(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):b.moment=a()
}(this,function(){var bX;
function bH(){return bX.apply(null,arguments)
}function aI(eI){bX=eI
}function S(eI){return eI instanceof Array||Object.prototype.toString.call(eI)==="[object Array]"
}function d7(eI){return eI instanceof Date||Object.prototype.toString.call(eI)==="[object Date]"
}function bh(eI,eL){var eK=[],eJ;
for(eJ=0;
eJ<eI.length;
++eJ){eK.push(eL(eI[eJ],eJ))
}return eK
}function c4(eJ,eI){return Object.prototype.hasOwnProperty.call(eJ,eI)
}function eC(eJ,eI){for(var eK in eI){if(c4(eI,eK)){eJ[eK]=eI[eK]
}}if(c4(eI,"toString")){eJ.toString=eI.toString
}if(c4(eI,"valueOf")){eJ.valueOf=eI.valueOf
}return eJ
}function dV(eK,eL,eI,eJ){return ab(eK,eL,eI,eJ,true).utc()
}function cd(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null}
}function a3(eI){if(eI._pf==null){eI._pf=cd()
}return eI._pf
}var c7;
if(Array.prototype.some){c7=Array.prototype.some
}else{c7=function(eJ){var eL=Object(this);
var eI=eL.length>>>0;
for(var eK=0;
eK<eI;
eK++){if(eK in eL&&eJ.call(this,eL[eK],eK,eL)){return true
}}return false
}
}function ar(eI){if(eI._isValid==null){var eJ=a3(eI);
var eK=c7.call(eJ.parsedDateParts,function(eL){return eL!=null
});
eI._isValid=!isNaN(eI._d.getTime())&&eJ.overflow<0&&!eJ.empty&&!eJ.invalidMonth&&!eJ.invalidWeekday&&!eJ.nullInput&&!eJ.invalidFormat&&!eJ.userInvalidated&&(!eJ.meridiem||(eJ.meridiem&&eK));
if(eI._strict){eI._isValid=eI._isValid&&eJ.charsLeftOver===0&&eJ.unusedTokens.length===0&&eJ.bigHour===undefined
}}return eI._isValid
}function cs(eJ){var eI=dV(NaN);
if(eJ!=null){eC(a3(eI),eJ)
}else{a3(eI).userInvalidated=true
}return eI
}function G(eI){return eI===void 0
}var cD=bH.momentProperties=[];
function s(eM,eL){var eI,eK,eJ;
if(!G(eL._isAMomentObject)){eM._isAMomentObject=eL._isAMomentObject
}if(!G(eL._i)){eM._i=eL._i
}if(!G(eL._f)){eM._f=eL._f
}if(!G(eL._l)){eM._l=eL._l
}if(!G(eL._strict)){eM._strict=eL._strict
}if(!G(eL._tzm)){eM._tzm=eL._tzm
}if(!G(eL._isUTC)){eM._isUTC=eL._isUTC
}if(!G(eL._offset)){eM._offset=eL._offset
}if(!G(eL._pf)){eM._pf=a3(eL)
}if(!G(eL._locale)){eM._locale=eL._locale
}if(cD.length>0){for(eI in cD){eK=cD[eI];
eJ=eL[eK];
if(!G(eJ)){eM[eK]=eJ
}}}return eM
}var cZ=false;
function d4(eI){s(this,eI);
this._d=new Date(eI._d!=null?eI._d.getTime():NaN);
if(cZ===false){cZ=true;
bH.updateOffset(this);
cZ=false
}}function bY(eI){return eI instanceof d4||(eI!=null&&eI._isAMomentObject!=null)
}function c1(eI){if(eI<0){return Math.ceil(eI)
}else{return Math.floor(eI)
}}function cA(eI){var eK=+eI,eJ=0;
if(eK!==0&&isFinite(eK)){eJ=c1(eK)
}return eJ
}function bN(eN,eM,eJ){var eI=Math.min(eN.length,eM.length),eK=Math.abs(eN.length-eM.length),eO=0,eL;
for(eL=0;
eL<eI;
eL++){if((eJ&&eN[eL]!==eM[eL])||(!eJ&&cA(eN[eL])!==cA(eM[eL]))){eO++
}}return eO+eK
}function cW(eI){if(bH.suppressDeprecationWarnings===false&&(typeof console!=="undefined")&&console.warn){console.warn("Deprecation warning: "+eI)
}}function dS(eJ,eI){var eK=true;
return eC(function(){if(bH.deprecationHandler!=null){bH.deprecationHandler(null,eJ)
}if(eK){cW(eJ+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error()).stack);
eK=false
}return eI.apply(this,arguments)
},eI)
}var Y={};
function ev(eI,eJ){if(bH.deprecationHandler!=null){bH.deprecationHandler(eI,eJ)
}if(!Y[eI]){cW(eJ);
Y[eI]=true
}}bH.suppressDeprecationWarnings=false;
bH.deprecationHandler=null;
function aW(eI){return eI instanceof Function||Object.prototype.toString.call(eI)==="[object Function]"
}function x(eI){return Object.prototype.toString.call(eI)==="[object Object]"
}function dt(eI){var eK,eJ;
for(eJ in eI){eK=eI[eJ];
if(aW(eK)){this[eJ]=eK
}else{this["_"+eJ]=eK
}}this._config=eI;
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+(/\d{1,2}/).source)
}function dK(eK,eI){var eJ=eC({},eK),eL;
for(eL in eI){if(c4(eI,eL)){if(x(eK[eL])&&x(eI[eL])){eJ[eL]={};
eC(eJ[eL],eK[eL]);
eC(eJ[eL],eI[eL])
}else{if(eI[eL]!=null){eJ[eL]=eI[eL]
}else{delete eJ[eL]
}}}}return eJ
}function cn(eI){if(eI!=null){this.set(eI)
}}var bK;
if(Object.keys){bK=Object.keys
}else{bK=function(eK){var eJ,eI=[];
for(eJ in eK){if(c4(eK,eJ)){eI.push(eJ)
}}return eI
}
}var br={};
var cJ;
function c6(eI){return eI?eI.toLowerCase().replace("_","-"):eI
}function cI(eN){var eL=0,eJ,eM,eI,eK;
while(eL<eN.length){eK=c6(eN[eL]).split("-");
eJ=eK.length;
eM=c6(eN[eL+1]);
eM=eM?eM.split("-"):null;
while(eJ>0){eI=aw(eK.slice(0,eJ).join("-"));
if(eI){return eI
}if(eM&&eM.length>=eJ&&bN(eK,eM,true)>=eJ-1){break
}eJ--
}eL++
}return null
}function aw(eI){var eK=null;
if(!br[eI]&&(typeof module!=="undefined")&&module&&module.exports){try{eK=cJ._abbr;
require("./locale/"+eI);
cu(eK)
}catch(eJ){}}return br[eI]
}function cu(eJ,eI){var eK;
if(eJ){if(G(eI)){eK=u(eJ)
}else{eK=cm(eJ,eI)
}if(eK){cJ=eK
}}return cJ._abbr
}function cm(eJ,eI){if(eI!==null){eI.abbr=eJ;
if(br[eJ]!=null){ev("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale");
eI=dK(br[eJ]._config,eI)
}else{if(eI.parentLocale!=null){if(br[eI.parentLocale]!=null){eI=dK(br[eI.parentLocale]._config,eI)
}else{ev("parentLocaleUndefined","specified parentLocale is not defined yet")
}}}br[eJ]=new cn(eI);
cu(eJ);
return br[eJ]
}else{delete br[eJ];
return null
}}function dY(eK,eJ){if(eJ!=null){var eI;
if(br[eK]!=null){eJ=dK(br[eK]._config,eJ)
}eI=new cn(eJ);
eI.parentLocale=br[eK];
br[eK]=eI;
cu(eK)
}else{if(br[eK]!=null){if(br[eK].parentLocale!=null){br[eK]=br[eK].parentLocale
}else{if(br[eK]!=null){delete br[eK]
}}}}return br[eK]
}function u(eJ){var eI;
if(eJ&&eJ._locale&&eJ._locale._abbr){eJ=eJ._locale._abbr
}if(!eJ){return cJ
}if(!S(eJ)){eI=aw(eJ);
if(eI){return eI
}eJ=[eJ]
}return cI(eJ)
}function U(){return bK(br)
}var cx={};
function b1(eK,eI){var eJ=eK.toLowerCase();
cx[eJ]=cx[eJ+"s"]=cx[eI]=eK
}function cz(eI){return typeof eI==="string"?cx[eI]||cx[eI.toLowerCase()]:undefined
}function dr(eK){var eJ={},eI,eL;
for(eL in eK){if(c4(eK,eL)){eI=cz(eL);
if(eI){eJ[eI]=eK[eL]
}}}return eJ
}function dO(eI,eJ){return function(eK){if(eK!=null){d8(this,eI,eK);
bH.updateOffset(this,eJ);
return this
}else{return en(this,eI)
}}
}function en(eJ,eI){return eJ.isValid()?eJ._d["get"+(eJ._isUTC?"UTC":"")+eI]():NaN
}function d8(eJ,eI,eK){if(eJ.isValid()){eJ._d["set"+(eJ._isUTC?"UTC":"")+eI](eK)
}}function ed(eI,eK){var eJ;
if(typeof eI==="object"){for(eJ in eI){this.set(eJ,eI[eJ])
}}else{eI=cz(eI);
if(aW(this[eI])){return this[eI](eK)
}}return this
}function ca(eN,eM,eJ){var eL=""+Math.abs(eN),eK=eM-eL.length,eI=eN>=0;
return(eI?(eJ?"+":""):"-")+Math.pow(10,Math.max(0,eK)).toString().substr(1)+eL
}var bF=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var bE=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var bD={};
var a1={};
function ci(eJ,eK,eI,eM){var eL=eM;
if(typeof eM==="string"){eL=function(){return this[eM]()
}
}if(eJ){a1[eJ]=eL
}if(eK){a1[eK[0]]=function(){return ca(eL.apply(this,arguments),eK[1],eK[2])
}
}if(eI){a1[eI]=function(){return this.localeData().ordinal(eL.apply(this,arguments),eJ)
}
}}function at(eI){if(eI.match(/\[[\s\S]/)){return eI.replace(/^\[|\]$/g,"")
}return eI.replace(/\\/g,"")
}function bq(eK){var eL=eK.match(bF),eI,eJ;
for(eI=0,eJ=eL.length;
eI<eJ;
eI++){if(a1[eL[eI]]){eL[eI]=a1[eL[eI]]
}else{eL[eI]=at(eL[eI])
}}return function(eO){var eM="",eN;
for(eN=0;
eN<eJ;
eN++){eM+=eL[eN] instanceof Function?eL[eN].call(eO,eK):eL[eN]
}return eM
}
}function ae(eI,eJ){if(!eI.isValid()){return eI.localeData().invalidDate()
}eJ=bv(eJ,eI.localeData());
bD[eJ]=bD[eJ]||bq(eJ);
return bD[eJ](eI)
}function bv(eL,eI){var eJ=5;
function eK(eM){return eI.longDateFormat(eM)||eM
}bE.lastIndex=0;
while(eJ>=0&&bE.test(eL)){eL=eL.replace(bE,eK);
bE.lastIndex=0;
eJ-=1
}return eL
}var aE=/\d/;
var aD=/\d\d/;
var aC=/\d{3}/;
var aB=/\d{4}/;
var aA=/[+-]?\d{6}/;
var aq=/\d\d?/;
var b7=/\d\d\d\d?/;
var dQ=/\d\d\d\d\d\d?/;
var ap=/\d{1,3}/;
var ao=/\d{1,4}/;
var an=/[+-]?\d{1,6}/;
var t=/\d+/;
var C=/[+-]?\d+/;
var bx=/Z|[+-]\d\d:?\d\d/gi;
var cp=/Z|[+-]\d\d(?::?\d\d)?/gi;
var ew=/[+-]?\d+(\.\d{1,3})?/;
var aY=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
var aS={};
function a6(eI,eJ,eK){aS[eI]=aW(eJ)?eJ:function(eM,eL){return(eM&&eK)?eK:eJ
}
}function bu(eJ,eI){if(!c4(aS,eJ)){return new RegExp(c2(eJ))
}return aS[eJ](eI._strict,eI._locale)
}function c2(eI){return b2(eI.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(eJ,eN,eM,eL,eK){return eN||eM||eL||eK
}))
}function b2(eI){return eI.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}var j={};
function bI(eJ,eL){var eI,eK=eL;
if(typeof eJ==="string"){eJ=[eJ]
}if(typeof eL==="number"){eK=function(eM,eN){eN[eL]=cA(eM)
}
}for(eI=0;
eI<eJ.length;
eI++){j[eJ[eI]]=eK
}}function W(eI,eJ){bI(eI,function(eK,eN,eL,eM){eL._w=eL._w||{};
eJ(eK,eL._w,eL,eM)
})
}function w(eK,eI,eJ){if(eI!=null&&c4(j,eK)){j[eK](eI,eJ._a,eJ,eK)
}}var ex=0;
var n=1;
var d6=2;
var ek=3;
var dp=4;
var ah=5;
var by=6;
var b3=7;
var l=8;
var cB;
if(Array.prototype.indexOf){cB=Array.prototype.indexOf
}else{cB=function(eJ){var eI;
for(eI=0;
eI<this.length;
++eI){if(this[eI]===eJ){return eI
}}return -1
}
}function bw(eI,eJ){return new Date(Date.UTC(eI,eJ+1,0)).getUTCDate()
}ci("M",["MM",2],"Mo",function(){return this.month()+1
});
ci("MMM",0,0,function(eI){return this.localeData().monthsShort(this,eI)
});
ci("MMMM",0,0,function(eI){return this.localeData().months(this,eI)
});
b1("month","M");
a6("M",aq);
a6("MM",aq,aD);
a6("MMM",function(eJ,eI){return eI.monthsShortRegex(eJ)
});
a6("MMMM",function(eJ,eI){return eI.monthsRegex(eJ)
});
bI(["M","MM"],function(eI,eJ){eJ[n]=cA(eI)-1
});
bI(["MMM","MMMM"],function(eI,eM,eJ,eK){var eL=eJ._locale.monthsParse(eI,eK,eJ._strict);
if(eL!=null){eM[n]=eL
}else{a3(eJ).invalidMonth=eI
}});
var bR=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
var O="January_February_March_April_May_June_July_August_September_October_November_December".split("_");
function aQ(eI,eJ){return S(this._months)?this._months[eI.month()]:this._months[bR.test(eJ)?"format":"standalone"][eI.month()]
}var dE="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function a2(eI,eJ){return S(this._monthsShort)?this._monthsShort[eI.month()]:this._monthsShort[bR.test(eJ)?"format":"standalone"][eI.month()]
}function a5(eJ,eO,eI){var eL,eM,eN,eK=eJ.toLocaleLowerCase();
if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[];
for(eL=0;
eL<12;
++eL){eN=dV([2000,eL]);
this._shortMonthsParse[eL]=this.monthsShort(eN,"").toLocaleLowerCase();
this._longMonthsParse[eL]=this.months(eN,"").toLocaleLowerCase()
}}if(eI){if(eO==="MMM"){eM=cB.call(this._shortMonthsParse,eK);
return eM!==-1?eM:null
}else{eM=cB.call(this._longMonthsParse,eK);
return eM!==-1?eM:null
}}else{if(eO==="MMM"){eM=cB.call(this._shortMonthsParse,eK);
if(eM!==-1){return eM
}eM=cB.call(this._longMonthsParse,eK);
return eM!==-1?eM:null
}else{eM=cB.call(this._longMonthsParse,eK);
if(eM!==-1){return eM
}eM=cB.call(this._shortMonthsParse,eK);
return eM!==-1?eM:null
}}}function cV(eJ,eN,eI){var eK,eM,eL;
if(this._monthsParseExact){return a5.call(this,eJ,eN,eI)
}if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[]
}for(eK=0;
eK<12;
eK++){eM=dV([2000,eK]);
if(eI&&!this._longMonthsParse[eK]){this._longMonthsParse[eK]=new RegExp("^"+this.months(eM,"").replace(".","")+"$","i");
this._shortMonthsParse[eK]=new RegExp("^"+this.monthsShort(eM,"").replace(".","")+"$","i")
}if(!eI&&!this._monthsParse[eK]){eL="^"+this.months(eM,"")+"|^"+this.monthsShort(eM,"");
this._monthsParse[eK]=new RegExp(eL.replace(".",""),"i")
}if(eI&&eN==="MMMM"&&this._longMonthsParse[eK].test(eJ)){return eK
}else{if(eI&&eN==="MMM"&&this._shortMonthsParse[eK].test(eJ)){return eK
}else{if(!eI&&this._monthsParse[eK].test(eJ)){return eK
}}}}}function aL(eI,eJ){var eK;
if(!eI.isValid()){return eI
}if(typeof eJ==="string"){if(/^\d+$/.test(eJ)){eJ=cA(eJ)
}else{eJ=eI.localeData().monthsParse(eJ);
if(typeof eJ!=="number"){return eI
}}}eK=Math.min(eI.date(),bw(eI.year(),eJ));
eI._d["set"+(eI._isUTC?"UTC":"")+"Month"](eJ,eK);
return eI
}function ej(eI){if(eI!=null){aL(this,eI);
bH.updateOffset(this,true);
return this
}else{return en(this,"Month")
}}function bB(){return bw(this.year(),this.month())
}var c0=aY;
function c3(eI){if(this._monthsParseExact){if(!c4(this,"_monthsRegex")){c5.call(this)
}if(eI){return this._monthsShortStrictRegex
}else{return this._monthsShortRegex
}}else{return this._monthsShortStrictRegex&&eI?this._monthsShortStrictRegex:this._monthsShortRegex
}}var ea=aY;
function cK(eI){if(this._monthsParseExact){if(!c4(this,"_monthsRegex")){c5.call(this)
}if(eI){return this._monthsStrictRegex
}else{return this._monthsRegex
}}else{return this._monthsStrictRegex&&eI?this._monthsStrictRegex:this._monthsRegex
}}function c5(){function eN(eP,eO){return eO.length-eP.length
}var eM=[],eI=[],eL=[],eJ,eK;
for(eJ=0;
eJ<12;
eJ++){eK=dV([2000,eJ]);
eM.push(this.monthsShort(eK,""));
eI.push(this.months(eK,""));
eL.push(this.months(eK,""));
eL.push(this.monthsShort(eK,""))
}eM.sort(eN);
eI.sort(eN);
eL.sort(eN);
for(eJ=0;
eJ<12;
eJ++){eM[eJ]=b2(eM[eJ]);
eI[eJ]=b2(eI[eJ]);
eL[eJ]=b2(eL[eJ])
}this._monthsRegex=new RegExp("^("+eL.join("|")+")","i");
this._monthsShortRegex=this._monthsRegex;
this._monthsStrictRegex=new RegExp("^("+eI.join("|")+")","i");
this._monthsShortStrictRegex=new RegExp("^("+eM.join("|")+")","i")
}function cy(eI){var eK;
var eJ=eI._a;
if(eJ&&a3(eI).overflow===-2){eK=eJ[n]<0||eJ[n]>11?n:eJ[d6]<1||eJ[d6]>bw(eJ[ex],eJ[n])?d6:eJ[ek]<0||eJ[ek]>24||(eJ[ek]===24&&(eJ[dp]!==0||eJ[ah]!==0||eJ[by]!==0))?ek:eJ[dp]<0||eJ[dp]>59?dp:eJ[ah]<0||eJ[ah]>59?ah:eJ[by]<0||eJ[by]>999?by:-1;
if(a3(eI)._overflowDayOfYear&&(eK<ex||eK>d6)){eK=d6
}if(a3(eI)._overflowWeeks&&eK===-1){eK=b3
}if(a3(eI)._overflowWeekday&&eK===-1){eK=l
}a3(eI).overflow=eK
}return eI
}var o=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
var aJ=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
var cq=/Z|[+-]\d\d(?::?\d\d)?/;
var cC=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]];
var cc=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]];
var bJ=/^\/?Date\((\-?\d+)/i;
function D(eJ){var eN,eL,eP=eJ._i,eO=o.exec(eP)||aJ.exec(eP),eQ,eI,eM,eK;
if(eO){a3(eJ).iso=true;
for(eN=0,eL=cC.length;
eN<eL;
eN++){if(cC[eN][1].exec(eO[1])){eI=cC[eN][0];
eQ=cC[eN][2]!==false;
break
}}if(eI==null){eJ._isValid=false;
return
}if(eO[3]){for(eN=0,eL=cc.length;
eN<eL;
eN++){if(cc[eN][1].exec(eO[3])){eM=(eO[2]||" ")+cc[eN][0];
break
}}if(eM==null){eJ._isValid=false;
return
}}if(!eQ&&eM!=null){eJ._isValid=false;
return
}if(eO[4]){if(cq.exec(eO[4])){eK="Z"
}else{eJ._isValid=false;
return
}}eJ._f=eI+(eM||"")+(eK||"");
bL(eJ)
}else{eJ._isValid=false
}}function a4(eJ){var eI=bJ.exec(eJ._i);
if(eI!==null){eJ._d=new Date(+eI[1]);
return
}D(eJ);
if(eJ._isValid===false){delete eJ._isValid;
bH.createFromInputFallback(eJ)
}}bH.createFromInputFallback=dS("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(eI){eI._d=new Date(eI._i+(eI._useUTC?" UTC":""))
});
function dL(eP,eI,eN,eM,eO,eL,eK){var eJ=new Date(eP,eI,eN,eM,eO,eL,eK);
if(eP<100&&eP>=0&&isFinite(eJ.getFullYear())){eJ.setFullYear(eP)
}return eJ
}function dc(eJ){var eI=new Date(Date.UTC.apply(null,arguments));
if(eJ<100&&eJ>=0&&isFinite(eI.getUTCFullYear())){eI.setUTCFullYear(eJ)
}return eI
}ci("Y",0,0,function(){var eI=this.year();
return eI<=9999?""+eI:"+"+eI
});
ci(0,["YY",2],0,function(){return this.year()%100
});
ci(0,["YYYY",4],0,"year");
ci(0,["YYYYY",5],0,"year");
ci(0,["YYYYYY",6,true],0,"year");
b1("year","y");
a6("Y",C);
a6("YY",aq,aD);
a6("YYYY",ao,aB);
a6("YYYYY",an,aA);
a6("YYYYYY",an,aA);
bI(["YYYYY","YYYYYY"],ex);
bI("YYYY",function(eI,eJ){eJ[ex]=eI.length===2?bH.parseTwoDigitYear(eI):cA(eI)
});
bI("YY",function(eI,eJ){eJ[ex]=bH.parseTwoDigitYear(eI)
});
bI("Y",function(eI,eJ){eJ[ex]=parseInt(eI,10)
});
function dm(eI){return dD(eI)?366:365
}function dD(eI){return(eI%4===0&&eI%100!==0)||eI%400===0
}bH.parseTwoDigitYear=function(eI){return cA(eI)+(cA(eI)>68?1900:2000)
};
var cr=dO("FullYear",true);
function cF(){return dD(this.year())
}function bb(eJ,eM,eL){var eI=7+eM-eL,eK=(7+dc(eJ,0,eI).getUTCDay()-eM)%7;
return -eK+eI-1
}function bt(eL,eJ,eK,eR,eP){var eQ=(7+eK-eR)%7,eI=bb(eL,eR,eP),eN=1+7*(eJ-1)+eQ+eI,eO,eM;
if(eN<=0){eO=eL-1;
eM=dm(eO)+eN
}else{if(eN>dm(eL)){eO=eL+1;
eM=eN-dm(eL)
}else{eO=eL;
eM=eN
}}return{year:eO,dayOfYear:eM}
}function d5(eM,eO,eN){var eK=bb(eM.year(),eO,eN),eL=Math.floor((eM.dayOfYear()-eK-1)/7)+1,eI,eJ;
if(eL<1){eJ=eM.year()-1;
eI=eL+F(eJ,eO,eN)
}else{if(eL>F(eM.year(),eO,eN)){eI=eL-F(eM.year(),eO,eN);
eJ=eM.year()+1
}else{eJ=eM.year();
eI=eL
}}return{week:eI,year:eJ}
}function F(eJ,eM,eK){var eI=bb(eJ,eM,eK),eL=bb(eJ+1,eM,eK);
return(dm(eJ)-eI+eL)/7
}function dM(eJ,eI,eK){if(eJ!=null){return eJ
}if(eI!=null){return eI
}return eK
}function aR(eJ){var eI=new Date(bH.now());
if(eJ._useUTC){return[eI.getUTCFullYear(),eI.getUTCMonth(),eI.getUTCDate()]
}return[eI.getFullYear(),eI.getMonth(),eI.getDate()]
}function g(eM){var eN,eL,eK=[],eJ,eI;
if(eM._d){return
}eJ=aR(eM);
if(eM._w&&eM._a[d6]==null&&eM._a[n]==null){cN(eM)
}if(eM._dayOfYear){eI=dM(eM._a[ex],eJ[ex]);
if(eM._dayOfYear>dm(eI)){a3(eM)._overflowDayOfYear=true
}eL=dc(eI,0,eM._dayOfYear);
eM._a[n]=eL.getUTCMonth();
eM._a[d6]=eL.getUTCDate()
}for(eN=0;
eN<3&&eM._a[eN]==null;
++eN){eM._a[eN]=eK[eN]=eJ[eN]
}for(;
eN<7;
eN++){eM._a[eN]=eK[eN]=(eM._a[eN]==null)?(eN===2?1:0):eM._a[eN]
}if(eM._a[ek]===24&&eM._a[dp]===0&&eM._a[ah]===0&&eM._a[by]===0){eM._nextDay=true;
eM._a[ek]=0
}eM._d=(eM._useUTC?dc:dL).apply(null,eK);
if(eM._tzm!=null){eM._d.setUTCMinutes(eM._d.getUTCMinutes()-eM._tzm)
}if(eM._nextDay){eM._a[ek]=24
}}function cN(eK){var eN,eI,eJ,eL,eQ,eO,eP,eM;
eN=eK._w;
if(eN.GG!=null||eN.W!=null||eN.E!=null){eQ=1;
eO=4;
eI=dM(eN.GG,eK._a[ex],d5(dI(),1,4).year);
eJ=dM(eN.W,1);
eL=dM(eN.E,1);
if(eL<1||eL>7){eM=true
}}else{eQ=eK._locale._week.dow;
eO=eK._locale._week.doy;
eI=dM(eN.gg,eK._a[ex],d5(dI(),eQ,eO).year);
eJ=dM(eN.w,1);
if(eN.d!=null){eL=eN.d;
if(eL<0||eL>6){eM=true
}}else{if(eN.e!=null){eL=eN.e+eQ;
if(eN.e<0||eN.e>6){eM=true
}}else{eL=eQ
}}}if(eJ<1||eJ>F(eI,eQ,eO)){a3(eK)._overflowWeeks=true
}else{if(eM!=null){a3(eK)._overflowWeekday=true
}else{eP=bt(eI,eJ,eL,eQ,eO);
eK._a[ex]=eP.year;
eK._dayOfYear=eP.dayOfYear
}}}bH.ISO_8601=function(){};
function bL(eK){if(eK._f===bH.ISO_8601){D(eK);
return
}eK._a=[];
a3(eK).empty=true;
var eN=""+eK._i,eM,eJ,eQ,eL,eP,eI=eN.length,eO=0;
eQ=bv(eK._f,eK._locale).match(bF)||[];
for(eM=0;
eM<eQ.length;
eM++){eL=eQ[eM];
eJ=(eN.match(bu(eL,eK))||[])[0];
if(eJ){eP=eN.substr(0,eN.indexOf(eJ));
if(eP.length>0){a3(eK).unusedInput.push(eP)
}eN=eN.slice(eN.indexOf(eJ)+eJ.length);
eO+=eJ.length
}if(a1[eL]){if(eJ){a3(eK).empty=false
}else{a3(eK).unusedTokens.push(eL)
}w(eL,eJ,eK)
}else{if(eK._strict&&!eJ){a3(eK).unusedTokens.push(eL)
}}}a3(eK).charsLeftOver=eI-eO;
if(eN.length>0){a3(eK).unusedInput.push(eN)
}if(a3(eK).bigHour===true&&eK._a[ek]<=12&&eK._a[ek]>0){a3(eK).bigHour=undefined
}a3(eK).parsedDateParts=eK._a.slice(0);
a3(eK).meridiem=eK._meridiem;
eK._a[ek]=dT(eK._locale,eK._a[ek],eK._meridiem);
g(eK);
cy(eK)
}function dT(eI,eK,eL){var eJ;
if(eL==null){return eK
}if(eI.meridiemHour!=null){return eI.meridiemHour(eK,eL)
}else{if(eI.isPM!=null){eJ=eI.isPM(eL);
if(eJ&&eK<12){eK+=12
}if(!eJ&&eK===12){eK=0
}return eK
}else{return eK
}}}function dk(eI){var eM,eK,eL,eJ,eN;
if(eI._f.length===0){a3(eI).invalidFormat=true;
eI._d=new Date(NaN);
return
}for(eJ=0;
eJ<eI._f.length;
eJ++){eN=0;
eM=s({},eI);
if(eI._useUTC!=null){eM._useUTC=eI._useUTC
}eM._f=eI._f[eJ];
bL(eM);
if(!ar(eM)){continue
}eN+=a3(eM).charsLeftOver;
eN+=a3(eM).unusedTokens.length*10;
a3(eM).score=eN;
if(eL==null||eN<eL){eL=eN;
eK=eM
}}eC(eI,eK||eM)
}function aT(eI){if(eI._d){return
}var eJ=dr(eI._i);
eI._a=bh([eJ.year,eJ.month,eJ.day||eJ.date,eJ.hour,eJ.minute,eJ.second,eJ.millisecond],function(eK){return eK&&parseInt(eK,10)
});
g(eI)
}function al(eI){var eJ=new d4(cy(bl(eI)));
if(eJ._nextDay){eJ.add(1,"d");
eJ._nextDay=undefined
}return eJ
}function bl(eJ){var eI=eJ._i,eK=eJ._f;
eJ._locale=eJ._locale||u(eJ._l);
if(eI===null||(eK===undefined&&eI==="")){return cs({nullInput:true})
}if(typeof eI==="string"){eJ._i=eI=eJ._locale.preparse(eI)
}if(bY(eI)){return new d4(cy(eI))
}else{if(S(eK)){dk(eJ)
}else{if(eK){bL(eJ)
}else{if(d7(eI)){eJ._d=eI
}else{cg(eJ)
}}}}if(!ar(eJ)){eJ._d=null
}return eJ
}function cg(eJ){var eI=eJ._i;
if(eI===undefined){eJ._d=new Date(bH.now())
}else{if(d7(eI)){eJ._d=new Date(eI.valueOf())
}else{if(typeof eI==="string"){a4(eJ)
}else{if(S(eI)){eJ._a=bh(eI.slice(0),function(eK){return parseInt(eK,10)
});
g(eJ)
}else{if(typeof(eI)==="object"){aT(eJ)
}else{if(typeof(eI)==="number"){eJ._d=new Date(eI)
}else{bH.createFromInputFallback(eJ)
}}}}}}}function ab(eL,eM,eI,eK,eJ){var eN={};
if(typeof(eI)==="boolean"){eK=eI;
eI=undefined
}eN._isAMomentObject=true;
eN._useUTC=eN._isUTC=eJ;
eN._l=eI;
eN._i=eL;
eN._f=eM;
eN._strict=eK;
return al(eN)
}function dI(eK,eL,eI,eJ){return ab(eK,eL,eI,eJ,false)
}var cv=dS("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var eI=dI.apply(null,arguments);
if(this.isValid()&&eI.isValid()){return eI<this?this:eI
}else{return cs()
}});
var d1=dS("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var eI=dI.apply(null,arguments);
if(this.isValid()&&eI.isValid()){return eI>this?this:eI
}else{return cs()
}});
function eD(eK,eL){var eJ,eI;
if(eL.length===1&&S(eL[0])){eL=eL[0]
}if(!eL.length){return dI()
}eJ=eL[0];
for(eI=1;
eI<eL.length;
++eI){if(!eL[eI].isValid()||eL[eI][eK](eJ)){eJ=eL[eI]
}}return eJ
}function r(){var eI=[].slice.call(arguments,0);
return eD("isBefore",eI)
}function bf(){var eI=[].slice.call(arguments,0);
return eD("isAfter",eI)
}var cj=function(){return Date.now?Date.now():+(new Date())
};
function du(eN){var eP=dr(eN),eO=eP.year||0,eJ=eP.quarter||0,eK=eP.month||0,eI=eP.week||0,eS=eP.day||0,eQ=eP.hour||0,eM=eP.minute||0,eR=eP.second||0,eL=eP.millisecond||0;
this._milliseconds=+eL+eR*1000+eM*60000+eQ*1000*60*60;
this._days=+eS+eI*7;
this._months=+eK+eJ*3+eO*12;
this._data={};
this._locale=u();
this._bubble()
}function ad(eI){return eI instanceof du
}function bo(eI,eJ){ci(eI,0,0,function(){var eL=this.utcOffset();
var eK="+";
if(eL<0){eL=-eL;
eK="-"
}return eK+ca(~~(eL/60),2)+eJ+ca(~~(eL)%60,2)
})
}bo("Z",":");
bo("ZZ","");
a6("Z",cp);
a6("ZZ",cp);
bI(["Z","ZZ"],function(eI,eK,eJ){eJ._useUTC=true;
eJ._tzm=q(cp,eI)
});
var eg=/([\+\-]|\d\d)/gi;
function q(eN,eJ){var eL=((eJ||"").match(eN)||[]);
var eI=eL[eL.length-1]||[];
var eM=(eI+"").match(eg)||["-",0,0];
var eK=+(eM[1]*60)+cA(eM[2]);
return eM[0]==="+"?eK:-eK
}function ax(eI,eJ){var eK,eL;
if(eJ._isUTC){eK=eJ.clone();
eL=(bY(eI)||d7(eI)?eI.valueOf():dI(eI).valueOf())-eK.valueOf();
eK._d.setTime(eK._d.valueOf()+eL);
bH.updateOffset(eK,false);
return eK
}else{return dI(eI).local()
}}function aG(eI){return -Math.round(eI._d.getTimezoneOffset()/15)*15
}bH.updateOffset=function(){};
function dd(eI,eL){var eK=this._offset||0,eJ;
if(!this.isValid()){return eI!=null?this:NaN
}if(eI!=null){if(typeof eI==="string"){eI=q(cp,eI)
}else{if(Math.abs(eI)<16){eI=eI*60
}}if(!this._isUTC&&eL){eJ=aG(this)
}this._offset=eI;
this._isUTC=true;
if(eJ!=null){this.add(eJ,"m")
}if(eK!==eI){if(!eL||this._changeInProgress){b(this,dR(eI-eK,"m"),1,false)
}else{if(!this._changeInProgress){this._changeInProgress=true;
bH.updateOffset(this,true);
this._changeInProgress=null
}}}return this
}else{return this._isUTC?eK:aG(this)
}}function c8(eI,eJ){if(eI!=null){if(typeof eI!=="string"){eI=-eI
}this.utcOffset(eI,eJ);
return this
}else{return -this.utcOffset()
}}function aP(eI){return this.utcOffset(0,eI)
}function da(eI){if(this._isUTC){this.utcOffset(0,eI);
this._isUTC=false;
if(eI){this.subtract(aG(this),"m")
}}return this
}function bV(){if(this._tzm){this.utcOffset(this._tzm)
}else{if(typeof this._i==="string"){this.utcOffset(q(bx,this._i))
}}return this
}function av(eI){if(!this.isValid()){return false
}eI=eI?dI(eI).utcOffset():0;
return(this.utcOffset()-eI)%60===0
}function aF(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset())
}function e(){if(!G(this._isDSTShifted)){return this._isDSTShifted
}var eJ={};
s(eJ,this);
eJ=bl(eJ);
if(eJ._a){var eI=eJ._isUTC?dV(eJ._a):dI(eJ._a);
this._isDSTShifted=this.isValid()&&bN(eJ._a,eI.toArray())>0
}else{this._isDSTShifted=false
}return this._isDSTShifted
}function de(){return this.isValid()?!this._isUTC:false
}function bG(){return this.isValid()?this._isUTC:false
}function dj(){return this.isValid()?this._isUTC&&this._offset===0:false
}var X=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
var ch=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
function dR(eK,eN){var eO=eK,eM=null,eJ,eL,eI;
if(ad(eK)){eO={ms:eK._milliseconds,d:eK._days,M:eK._months}
}else{if(typeof eK==="number"){eO={};
if(eN){eO[eN]=eK
}else{eO.milliseconds=eK
}}else{if(!!(eM=X.exec(eK))){eJ=(eM[1]==="-")?-1:1;
eO={y:0,d:cA(eM[d6])*eJ,h:cA(eM[ek])*eJ,m:cA(eM[dp])*eJ,s:cA(eM[ah])*eJ,ms:cA(eM[by])*eJ}
}else{if(!!(eM=ch.exec(eK))){eJ=(eM[1]==="-")?-1:1;
eO={y:ez(eM[2],eJ),M:ez(eM[3],eJ),w:ez(eM[4],eJ),d:ez(eM[5],eJ),h:ez(eM[6],eJ),m:ez(eM[7],eJ),s:ez(eM[8],eJ)}
}else{if(eO==null){eO={}
}else{if(typeof eO==="object"&&("from" in eO||"to" in eO)){eI=bC(dI(eO.from),dI(eO.to));
eO={};
eO.ms=eI.milliseconds;
eO.M=eI.months
}}}}}}eL=new du(eO);
if(ad(eK)&&c4(eK,"_locale")){eL._locale=eK._locale
}return eL
}dR.fn=du.prototype;
function ez(eK,eI){var eJ=eK&&parseFloat(eK.replace(",","."));
return(isNaN(eJ)?0:eJ)*eI
}function dh(eK,eI){var eJ={milliseconds:0,months:0};
eJ.months=eI.month()-eK.month()+(eI.year()-eK.year())*12;
if(eK.clone().add(eJ.months,"M").isAfter(eI)){--eJ.months
}eJ.milliseconds=+eI-+(eK.clone().add(eJ.months,"M"));
return eJ
}function bC(eK,eI){var eJ;
if(!(eK.isValid()&&eI.isValid())){return{milliseconds:0,months:0}
}eI=ax(eI,eK);
if(eK.isBefore(eI)){eJ=dh(eK,eI)
}else{eJ=dh(eI,eK);
eJ.milliseconds=-eJ.milliseconds;
eJ.months=-eJ.months
}return eJ
}function dW(eI){if(eI<0){return Math.round(-1*eI)*-1
}else{return Math.round(eI)
}}function aU(eJ,eI){return function(eN,eM){var eL,eK;
if(eM!==null&&!isNaN(+eM)){ev(eI,"moment()."+eI+"(period, number) is deprecated. Please use moment()."+eI+"(number, period).");
eK=eN;
eN=eM;
eM=eK
}eN=typeof eN==="string"?+eN:eN;
eL=dR(eN,eM);
b(this,eL,eJ);
return this
}
}function b(eK,eN,eM,eL){var eJ=eN._milliseconds,eO=dW(eN._days),eI=dW(eN._months);
if(!eK.isValid()){return
}eL=eL==null?true:eL;
if(eJ){eK._d.setTime(eK._d.valueOf()+eJ*eM)
}if(eO){d8(eK,"Date",en(eK,"Date")+eO*eM)
}if(eI){aL(eK,en(eK,"Month")+eI*eM)
}if(eL){bH.updateOffset(eK,eO||eI)
}}var b4=aU(1,"add");
var aN=aU(-1,"subtract");
function b0(eO,eI){var eL=eO||dI(),eK=ax(eL,this).startOf("day"),eN=this.diff(eK,"days",true),eM=eN<-6?"sameElse":eN<-1?"lastWeek":eN<0?"lastDay":eN<1?"sameDay":eN<2?"nextDay":eN<7?"nextWeek":"sameElse";
var eJ=eI&&(aW(eI[eM])?eI[eM]():eI[eM]);
return this.format(eJ||this.localeData().calendar(eM,this,dI(eL)))
}function c9(){return new d4(this)
}function co(eJ,eI){var eK=bY(eJ)?eJ:dI(eJ);
if(!(this.isValid()&&eK.isValid())){return false
}eI=cz(!G(eI)?eI:"millisecond");
if(eI==="millisecond"){return this.valueOf()>eK.valueOf()
}else{return eK.valueOf()<this.clone().startOf(eI).valueOf()
}}function et(eJ,eI){var eK=bY(eJ)?eJ:dI(eJ);
if(!(this.isValid()&&eK.isValid())){return false
}eI=cz(!G(eI)?eI:"millisecond");
if(eI==="millisecond"){return this.valueOf()<eK.valueOf()
}else{return this.clone().endOf(eI).valueOf()<eK.valueOf()
}}function d3(eL,eK,eI,eJ){eJ=eJ||"()";
return(eJ[0]==="("?this.isAfter(eL,eI):!this.isBefore(eL,eI))&&(eJ[1]===")"?this.isBefore(eK,eI):!this.isAfter(eK,eI))
}function ct(eJ,eI){var eL=bY(eJ)?eJ:dI(eJ),eK;
if(!(this.isValid()&&eL.isValid())){return false
}eI=cz(eI||"millisecond");
if(eI==="millisecond"){return this.valueOf()===eL.valueOf()
}else{eK=eL.valueOf();
return this.clone().startOf(eI).valueOf()<=eK&&eK<=this.clone().endOf(eI).valueOf()
}}function em(eJ,eI){return this.isSame(eJ,eI)||this.isAfter(eJ,eI)
}function er(eJ,eI){return this.isSame(eJ,eI)||this.isBefore(eJ,eI)
}function J(eL,eK,eI){var eN,eM,eO,eJ;
if(!this.isValid()){return NaN
}eN=ax(eL,this);
if(!eN.isValid()){return NaN
}eM=(eN.utcOffset()-this.utcOffset())*60000;
eK=cz(eK);
if(eK==="year"||eK==="month"||eK==="quarter"){eJ=dZ(this,eN);
if(eK==="quarter"){eJ=eJ/3
}else{if(eK==="year"){eJ=eJ/12
}}}else{eO=this-eN;
eJ=eK==="second"?eO/1000:eK==="minute"?eO/60000:eK==="hour"?eO/3600000:eK==="day"?(eO-eM)/86400000:eK==="week"?(eO-eM)/604800000:eO
}return eI?eJ:c1(eJ)
}function dZ(eJ,eI){var eN=((eI.year()-eJ.year())*12)+(eI.month()-eJ.month()),eK=eJ.clone().add(eN,"months"),eL,eM;
if(eI-eK<0){eL=eJ.clone().add(eN-1,"months");
eM=(eI-eK)/(eK-eL)
}else{eL=eJ.clone().add(eN+1,"months");
eM=(eI-eK)/(eL-eK)
}return -(eN+eM)||0
}bH.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
bH.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";
function dF(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}function ck(){var eI=this.clone().utc();
if(0<eI.year()&&eI.year()<=9999){if(aW(Date.prototype.toISOString)){return this.toDate().toISOString()
}else{return ae(eI,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}}else{return ae(eI,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}}function cR(eJ){if(!eJ){eJ=this.isUtc()?bH.defaultFormatUtc:bH.defaultFormat
}var eI=ae(this,eJ);
return this.localeData().postformat(eI)
}function dw(eJ,eI){if(this.isValid()&&((bY(eJ)&&eJ.isValid())||dI(eJ).isValid())){return dR({to:this,from:eJ}).locale(this.locale()).humanize(!eI)
}else{return this.localeData().invalidDate()
}}function ds(eI){return this.from(dI(),eI)
}function ag(eJ,eI){if(this.isValid()&&((bY(eJ)&&eJ.isValid())||dI(eJ).isValid())){return dR({from:this,to:eJ}).locale(this.locale()).humanize(!eI)
}else{return this.localeData().invalidDate()
}}function aH(eI){return this.to(dI(),eI)
}function eG(eJ){var eI;
if(eJ===undefined){return this._locale._abbr
}else{eI=u(eJ);
if(eI!=null){this._locale=eI
}return this
}}var A=dS("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(eI){if(eI===undefined){return this.localeData()
}else{return this.locale(eI)
}});
function dx(){return this._locale
}function bU(eI){eI=cz(eI);
switch(eI){case"year":this.month(0);
case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":case"date":this.hours(0);
case"hour":this.minutes(0);
case"minute":this.seconds(0);
case"second":this.milliseconds(0)
}if(eI==="week"){this.weekday(0)
}if(eI==="isoWeek"){this.isoWeekday(1)
}if(eI==="quarter"){this.month(Math.floor(this.month()/3)*3)
}return this
}function d9(eI){eI=cz(eI);
if(eI===undefined||eI==="millisecond"){return this
}if(eI==="date"){eI="day"
}return this.startOf(eI).add(1,(eI==="isoWeek"?"week":eI)).subtract(1,"ms")
}function ai(){return this._d.valueOf()-((this._offset||0)*60000)
}function bs(){return Math.floor(this.valueOf()/1000)
}function cM(){return this._offset?new Date(this.valueOf()):this._d
}function dq(){var eI=this;
return[eI.year(),eI.month(),eI.date(),eI.hour(),eI.minute(),eI.second(),eI.millisecond()]
}function dy(){var eI=this;
return{years:eI.year(),months:eI.month(),date:eI.date(),hours:eI.hours(),minutes:eI.minutes(),seconds:eI.seconds(),milliseconds:eI.milliseconds()}
}function cS(){return this.isValid()?this.toISOString():null
}function eb(){return ar(this)
}function dl(){return eC({},a3(this))
}function cl(){return a3(this).overflow
}function eu(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}
}ci(0,["gg",2],0,function(){return this.weekYear()%100
});
ci(0,["GG",2],0,function(){return this.isoWeekYear()%100
});
function V(eJ,eI){ci(0,[eJ,eJ.length],0,eI)
}V("gggg","weekYear");
V("ggggg","weekYear");
V("GGGG","isoWeekYear");
V("GGGGG","isoWeekYear");
b1("weekYear","gg");
b1("isoWeekYear","GG");
a6("G",C);
a6("g",C);
a6("GG",aq,aD);
a6("gg",aq,aD);
a6("GGGG",ao,aB);
a6("gggg",ao,aB);
a6("GGGGG",an,aA);
a6("ggggg",an,aA);
W(["gggg","ggggg","GGGG","GGGGG"],function(eI,eL,eJ,eK){eL[eK.substr(0,2)]=cA(eI)
});
W(["gg","GG"],function(eI,eL,eJ,eK){eL[eK]=bH.parseTwoDigitYear(eI)
});
function bk(eI){return ce.call(this,eI,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
}function dC(eI){return ce.call(this,eI,this.isoWeek(),this.isoWeekday(),1,4)
}function cU(){return F(this.year(),1,4)
}function H(){var eI=this.localeData()._week;
return F(this.year(),eI.dow,eI.doy)
}function ce(eI,eJ,eL,eN,eM){var eK;
if(eI==null){return d5(this,eN,eM).year
}else{eK=F(eI,eN,eM);
if(eJ>eK){eJ=eK
}return aX.call(this,eI,eJ,eL,eN,eM)
}}function aX(eK,eJ,eM,eO,eN){var eL=bt(eK,eJ,eM,eO,eN),eI=dc(eL.year,0,eL.dayOfYear);
this.year(eI.getUTCFullYear());
this.month(eI.getUTCMonth());
this.date(eI.getUTCDate());
return this
}ci("Q",0,"Qo","quarter");
b1("quarter","Q");
a6("Q",aE);
bI("Q",function(eI,eJ){eJ[n]=(cA(eI)-1)*3
});
function bP(eI){return eI==null?Math.ceil((this.month()+1)/3):this.month((eI-1)*3+this.month()%3)
}ci("w",["ww",2],"wo","week");
ci("W",["WW",2],"Wo","isoWeek");
b1("week","w");
b1("isoWeek","W");
a6("w",aq);
a6("ww",aq,aD);
a6("W",aq);
a6("WW",aq,aD);
W(["w","ww","W","WW"],function(eI,eL,eJ,eK){eL[eK.substr(0,1)]=cA(eI)
});
function bi(eI){return d5(eI,this._week.dow,this._week.doy).week
}var bQ={dow:0,doy:6};
function af(){return this._week.dow
}function cT(){return this._week.doy
}function I(eI){var eJ=this.localeData().week(this);
return eI==null?eJ:this.add((eI-eJ)*7,"d")
}function z(eI){var eJ=d5(this,1,4).week;
return eI==null?eJ:this.add((eI-eJ)*7,"d")
}ci("D",["DD",2],"Do","date");
b1("date","D");
a6("D",aq);
a6("DD",aq,aD);
a6("Do",function(eJ,eI){return eJ?eI._ordinalParse:eI._ordinalParseLenient
});
bI(["D","DD"],d6);
bI("Do",function(eI,eJ){eJ[d6]=cA(eI.match(aq)[0],10)
});
var b9=dO("Date",true);
ci("d",0,"do","day");
ci("dd",0,0,function(eI){return this.localeData().weekdaysMin(this,eI)
});
ci("ddd",0,0,function(eI){return this.localeData().weekdaysShort(this,eI)
});
ci("dddd",0,0,function(eI){return this.localeData().weekdays(this,eI)
});
ci("e",0,0,"weekday");
ci("E",0,0,"isoWeekday");
b1("day","d");
b1("weekday","e");
b1("isoWeekday","E");
a6("d",aq);
a6("e",aq);
a6("E",aq);
a6("dd",function(eJ,eI){return eI.weekdaysMinRegex(eJ)
});
a6("ddd",function(eJ,eI){return eI.weekdaysShortRegex(eJ)
});
a6("dddd",function(eJ,eI){return eI.weekdaysRegex(eJ)
});
W(["dd","ddd","dddd"],function(eI,eL,eJ,eK){var eM=eJ._locale.weekdaysParse(eI,eK,eJ._strict);
if(eM!=null){eL.d=eM
}else{a3(eJ).invalidWeekday=eI
}});
W(["d","e","E"],function(eI,eL,eJ,eK){eL[eK]=cA(eI)
});
function ba(eJ,eI){if(typeof eJ!=="string"){return eJ
}if(!isNaN(eJ)){return parseInt(eJ,10)
}eJ=eI.weekdaysParse(eJ);
if(typeof eJ==="number"){return eJ
}return null
}var Q="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
function au(eI,eJ){return S(this._weekdays)?this._weekdays[eI.day()]:this._weekdays[this._weekdays.isFormat.test(eJ)?"format":"standalone"][eI.day()]
}var p="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
function M(eI){return this._weekdaysShort[eI.day()]
}var bm="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
function eh(eI){return this._weekdaysMin[eI.day()]
}function bO(eN,eO,eI){var eK,eL,eM,eJ=eN.toLocaleLowerCase();
if(!this._weekdaysParse){this._weekdaysParse=[];
this._shortWeekdaysParse=[];
this._minWeekdaysParse=[];
for(eK=0;
eK<7;
++eK){eM=dV([2000,1]).day(eK);
this._minWeekdaysParse[eK]=this.weekdaysMin(eM,"").toLocaleLowerCase();
this._shortWeekdaysParse[eK]=this.weekdaysShort(eM,"").toLocaleLowerCase();
this._weekdaysParse[eK]=this.weekdays(eM,"").toLocaleLowerCase()
}}if(eI){if(eO==="dddd"){eL=cB.call(this._weekdaysParse,eJ);
return eL!==-1?eL:null
}else{if(eO==="ddd"){eL=cB.call(this._shortWeekdaysParse,eJ);
return eL!==-1?eL:null
}else{eL=cB.call(this._minWeekdaysParse,eJ);
return eL!==-1?eL:null
}}}else{if(eO==="dddd"){eL=cB.call(this._weekdaysParse,eJ);
if(eL!==-1){return eL
}eL=cB.call(this._shortWeekdaysParse,eJ);
if(eL!==-1){return eL
}eL=cB.call(this._minWeekdaysParse,eJ);
return eL!==-1?eL:null
}else{if(eO==="ddd"){eL=cB.call(this._shortWeekdaysParse,eJ);
if(eL!==-1){return eL
}eL=cB.call(this._weekdaysParse,eJ);
if(eL!==-1){return eL
}eL=cB.call(this._minWeekdaysParse,eJ);
return eL!==-1?eL:null
}else{eL=cB.call(this._minWeekdaysParse,eJ);
if(eL!==-1){return eL
}eL=cB.call(this._weekdaysParse,eJ);
if(eL!==-1){return eL
}eL=cB.call(this._shortWeekdaysParse,eJ);
return eL!==-1?eL:null
}}}}function bA(eM,eN,eI){var eJ,eL,eK;
if(this._weekdaysParseExact){return bO.call(this,eM,eN,eI)
}if(!this._weekdaysParse){this._weekdaysParse=[];
this._minWeekdaysParse=[];
this._shortWeekdaysParse=[];
this._fullWeekdaysParse=[]
}for(eJ=0;
eJ<7;
eJ++){eL=dV([2000,1]).day(eJ);
if(eI&&!this._fullWeekdaysParse[eJ]){this._fullWeekdaysParse[eJ]=new RegExp("^"+this.weekdays(eL,"").replace(".",".?")+"$","i");
this._shortWeekdaysParse[eJ]=new RegExp("^"+this.weekdaysShort(eL,"").replace(".",".?")+"$","i");
this._minWeekdaysParse[eJ]=new RegExp("^"+this.weekdaysMin(eL,"").replace(".",".?")+"$","i")
}if(!this._weekdaysParse[eJ]){eK="^"+this.weekdays(eL,"")+"|^"+this.weekdaysShort(eL,"")+"|^"+this.weekdaysMin(eL,"");
this._weekdaysParse[eJ]=new RegExp(eK.replace(".",""),"i")
}if(eI&&eN==="dddd"&&this._fullWeekdaysParse[eJ].test(eM)){return eJ
}else{if(eI&&eN==="ddd"&&this._shortWeekdaysParse[eJ].test(eM)){return eJ
}else{if(eI&&eN==="dd"&&this._minWeekdaysParse[eJ].test(eM)){return eJ
}else{if(!eI&&this._weekdaysParse[eJ].test(eM)){return eJ
}}}}}}function dX(eJ){if(!this.isValid()){return eJ!=null?this:NaN
}var eI=this._isUTC?this._d.getUTCDay():this._d.getDay();
if(eJ!=null){eJ=ba(eJ,this.localeData());
return this.add(eJ-eI,"d")
}else{return eI
}}function ac(eI){if(!this.isValid()){return eI!=null?this:NaN
}var eJ=(this.day()+7-this.localeData()._week.dow)%7;
return eI==null?eJ:this.add(eI-eJ,"d")
}function cf(eI){if(!this.isValid()){return eI!=null?this:NaN
}return eI==null?this.day()||7:this.day(this.day()%7?eI:eI-7)
}var Z=aY;
function eA(eI){if(this._weekdaysParseExact){if(!c4(this,"_weekdaysRegex")){B.call(this)
}if(eI){return this._weekdaysStrictRegex
}else{return this._weekdaysRegex
}}else{return this._weekdaysStrictRegex&&eI?this._weekdaysStrictRegex:this._weekdaysRegex
}}var y=aY;
function az(eI){if(this._weekdaysParseExact){if(!c4(this,"_weekdaysRegex")){B.call(this)
}if(eI){return this._weekdaysShortStrictRegex
}else{return this._weekdaysShortRegex
}}else{return this._weekdaysShortStrictRegex&&eI?this._weekdaysShortStrictRegex:this._weekdaysShortRegex
}}var dz=aY;
function E(eI){if(this._weekdaysParseExact){if(!c4(this,"_weekdaysRegex")){B.call(this)
}if(eI){return this._weekdaysMinStrictRegex
}else{return this._weekdaysMinRegex
}}else{return this._weekdaysMinStrictRegex&&eI?this._weekdaysMinStrictRegex:this._weekdaysMinRegex
}}function B(){function eL(eT,eS){return eS.length-eT.length
}var eN=[],eO=[],eR=[],eI=[],eM,eK,eJ,eP,eQ;
for(eM=0;
eM<7;
eM++){eK=dV([2000,1]).day(eM);
eJ=this.weekdaysMin(eK,"");
eP=this.weekdaysShort(eK,"");
eQ=this.weekdays(eK,"");
eN.push(eJ);
eO.push(eP);
eR.push(eQ);
eI.push(eJ);
eI.push(eP);
eI.push(eQ)
}eN.sort(eL);
eO.sort(eL);
eR.sort(eL);
eI.sort(eL);
for(eM=0;
eM<7;
eM++){eO[eM]=b2(eO[eM]);
eR[eM]=b2(eR[eM]);
eI[eM]=b2(eI[eM])
}this._weekdaysRegex=new RegExp("^("+eI.join("|")+")","i");
this._weekdaysShortRegex=this._weekdaysRegex;
this._weekdaysMinRegex=this._weekdaysRegex;
this._weekdaysStrictRegex=new RegExp("^("+eR.join("|")+")","i");
this._weekdaysShortStrictRegex=new RegExp("^("+eO.join("|")+")","i");
this._weekdaysMinStrictRegex=new RegExp("^("+eN.join("|")+")","i")
}ci("DDD",["DDDD",3],"DDDo","dayOfYear");
b1("dayOfYear","DDD");
a6("DDD",ap);
a6("DDDD",aC);
bI(["DDD","DDDD"],function(eI,eK,eJ){eJ._dayOfYear=cA(eI)
});
function a8(eI){var eJ=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/86400000)+1;
return eI==null?eJ:this.add((eI-eJ),"d")
}function dg(){return this.hours()%12||12
}function N(){return this.hours()||24
}ci("H",["HH",2],0,"hour");
ci("h",["hh",2],0,dg);
ci("k",["kk",2],0,N);
ci("hmm",0,0,function(){return""+dg.apply(this)+ca(this.minutes(),2)
});
ci("hmmss",0,0,function(){return""+dg.apply(this)+ca(this.minutes(),2)+ca(this.seconds(),2)
});
ci("Hmm",0,0,function(){return""+this.hours()+ca(this.minutes(),2)
});
ci("Hmmss",0,0,function(){return""+this.hours()+ca(this.minutes(),2)+ca(this.seconds(),2)
});
function d0(eI,eJ){ci(eI,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),eJ)
})
}d0("a",true);
d0("A",false);
b1("hour","h");
function P(eJ,eI){return eI._meridiemParse
}a6("a",P);
a6("A",P);
a6("H",aq);
a6("h",aq);
a6("HH",aq,aD);
a6("hh",aq,aD);
a6("hmm",b7);
a6("hmmss",dQ);
a6("Hmm",b7);
a6("Hmmss",dQ);
bI(["H","HH"],ek);
bI(["a","A"],function(eI,eK,eJ){eJ._isPm=eJ._locale.isPM(eI);
eJ._meridiem=eI
});
bI(["h","hh"],function(eI,eK,eJ){eK[ek]=cA(eI);
a3(eJ).bigHour=true
});
bI("hmm",function(eI,eL,eJ){var eK=eI.length-2;
eL[ek]=cA(eI.substr(0,eK));
eL[dp]=cA(eI.substr(eK));
a3(eJ).bigHour=true
});
bI("hmmss",function(eI,eM,eJ){var eL=eI.length-4;
var eK=eI.length-2;
eM[ek]=cA(eI.substr(0,eL));
eM[dp]=cA(eI.substr(eL,2));
eM[ah]=cA(eI.substr(eK));
a3(eJ).bigHour=true
});
bI("Hmm",function(eI,eL,eJ){var eK=eI.length-2;
eL[ek]=cA(eI.substr(0,eK));
eL[dp]=cA(eI.substr(eK))
});
bI("Hmmss",function(eI,eM,eJ){var eL=eI.length-4;
var eK=eI.length-2;
eM[ek]=cA(eI.substr(0,eL));
eM[dp]=cA(eI.substr(eL,2));
eM[ah]=cA(eI.substr(eK))
});
function bZ(eI){return((eI+"").toLowerCase().charAt(0)==="p")
}var bS=/[ap]\.?m?\.?/i;
function aK(eI,eJ,eK){if(eI>11){return eK?"pm":"PM"
}else{return eK?"am":"AM"
}}var cb=dO("Hours",true);
ci("m",["mm",2],0,"minute");
b1("minute","m");
a6("m",aq);
a6("mm",aq,aD);
bI(["m","mm"],dp);
var es=dO("Minutes",false);
ci("s",["ss",2],0,"second");
b1("second","s");
a6("s",aq);
a6("ss",aq,aD);
bI(["s","ss"],ah);
var bp=dO("Seconds",false);
ci("S",0,0,function(){return ~~(this.millisecond()/100)
});
ci(0,["SS",2],0,function(){return ~~(this.millisecond()/10)
});
ci(0,["SSS",3],0,"millisecond");
ci(0,["SSSS",4],0,function(){return this.millisecond()*10
});
ci(0,["SSSSS",5],0,function(){return this.millisecond()*100
});
ci(0,["SSSSSS",6],0,function(){return this.millisecond()*1000
});
ci(0,["SSSSSSS",7],0,function(){return this.millisecond()*10000
});
ci(0,["SSSSSSSS",8],0,function(){return this.millisecond()*100000
});
ci(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1000000
});
b1("millisecond","ms");
a6("S",ap,aE);
a6("SS",ap,aD);
a6("SSS",ap,aC);
var bd;
for(bd="SSSS";
bd.length<=9;
bd+="S"){a6(bd,t)
}function cP(eI,eJ){eJ[by]=cA(("0."+eI)*1000)
}for(bd="S";
bd.length<=9;
bd+="S"){bI(bd,cP)
}var bM=dO("Milliseconds",false);
ci("z",0,0,"zoneAbbr");
ci("zz",0,0,"zoneName");
function eo(){return this._isUTC?"UTC":""
}function dU(){return this._isUTC?"Coordinated Universal Time":""
}var cY=d4.prototype;
cY.add=b4;
cY.calendar=b0;
cY.clone=c9;
cY.diff=J;
cY.endOf=d9;
cY.format=cR;
cY.from=dw;
cY.fromNow=ds;
cY.to=ag;
cY.toNow=aH;
cY.get=ed;
cY.invalidAt=cl;
cY.isAfter=co;
cY.isBefore=et;
cY.isBetween=d3;
cY.isSame=ct;
cY.isSameOrAfter=em;
cY.isSameOrBefore=er;
cY.isValid=eb;
cY.lang=A;
cY.locale=eG;
cY.localeData=dx;
cY.max=d1;
cY.min=cv;
cY.parsingFlags=dl;
cY.set=ed;
cY.startOf=bU;
cY.subtract=aN;
cY.toArray=dq;
cY.toObject=dy;
cY.toDate=cM;
cY.toISOString=ck;
cY.toJSON=cS;
cY.toString=dF;
cY.unix=bs;
cY.valueOf=ai;
cY.creationData=eu;
cY.year=cr;
cY.isLeapYear=cF;
cY.weekYear=bk;
cY.isoWeekYear=dC;
cY.quarter=cY.quarters=bP;
cY.month=ej;
cY.daysInMonth=bB;
cY.week=cY.weeks=I;
cY.isoWeek=cY.isoWeeks=z;
cY.weeksInYear=H;
cY.isoWeeksInYear=cU;
cY.date=b9;
cY.day=cY.days=dX;
cY.weekday=ac;
cY.isoWeekday=cf;
cY.dayOfYear=a8;
cY.hour=cY.hours=cb;
cY.minute=cY.minutes=es;
cY.second=cY.seconds=bp;
cY.millisecond=cY.milliseconds=bM;
cY.utcOffset=dd;
cY.utc=aP;
cY.local=da;
cY.parseZone=bV;
cY.hasAlignedHourOffset=av;
cY.isDST=aF;
cY.isDSTShifted=e;
cY.isLocal=de;
cY.isUtcOffset=bG;
cY.isUtc=dj;
cY.isUTC=dj;
cY.zoneAbbr=eo;
cY.zoneName=dU;
cY.dates=dS("dates accessor is deprecated. Use date instead.",b9);
cY.months=dS("months accessor is deprecated. Use month instead",ej);
cY.years=dS("years accessor is deprecated. Use year instead",cr);
cY.zone=dS("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",c8);
var a=cY;
function aa(eI){return dI(eI*1000)
}function cH(){return dI.apply(null,arguments).parseZone()
}var b6={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};
function T(eK,eL,eJ){var eI=this._calendar[eK];
return aW(eI)?eI.call(eL,eJ):eI
}var dA={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};
function cw(eI){var eJ=this._longDateFormat[eI],eK=this._longDateFormat[eI.toUpperCase()];
if(eJ||!eK){return eJ
}this._longDateFormat[eI]=eK.replace(/MMMM|MM|DD|dddd/g,function(eL){return eL.slice(1)
});
return this._longDateFormat[eI]
}var am="Invalid date";
function d2(){return this._invalidDate
}var bT="%d";
var bn=/\d{1,2}/;
function ef(eI){return this._ordinal.replace("%d",eI)
}function df(eI){return eI
}var ee={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};
function b8(eL,eK,eJ,eM){var eI=this._relativeTime[eJ];
return(aW(eI))?eI(eL,eK,eJ,eM):eI.replace(/%d/i,eL)
}function dB(eK,eI){var eJ=this._relativeTime[eK>0?"future":"past"];
return aW(eJ)?eJ(eI):eJ.replace(/%s/i,eI)
}var cQ=cn.prototype;
cQ._calendar=b6;
cQ.calendar=T;
cQ._longDateFormat=dA;
cQ.longDateFormat=cw;
cQ._invalidDate=am;
cQ.invalidDate=d2;
cQ._ordinal=bT;
cQ.ordinal=ef;
cQ._ordinalParse=bn;
cQ.preparse=df;
cQ.postformat=df;
cQ._relativeTime=ee;
cQ.relativeTime=b8;
cQ.pastFuture=dB;
cQ.set=dt;
cQ.months=aQ;
cQ._months=O;
cQ.monthsShort=a2;
cQ._monthsShort=dE;
cQ.monthsParse=cV;
cQ._monthsRegex=ea;
cQ.monthsRegex=cK;
cQ._monthsShortRegex=c0;
cQ.monthsShortRegex=c3;
cQ.week=bi;
cQ._week=bQ;
cQ.firstDayOfYear=cT;
cQ.firstDayOfWeek=af;
cQ.weekdays=au;
cQ._weekdays=Q;
cQ.weekdaysMin=eh;
cQ._weekdaysMin=bm;
cQ.weekdaysShort=M;
cQ._weekdaysShort=p;
cQ.weekdaysParse=bA;
cQ._weekdaysRegex=Z;
cQ.weekdaysRegex=eA;
cQ._weekdaysShortRegex=y;
cQ.weekdaysShortRegex=az;
cQ._weekdaysMinRegex=dz;
cQ.weekdaysMinRegex=E;
cQ.isPM=bZ;
cQ._meridiemParse=bS;
cQ.meridiem=aK;
function a0(eM,eJ,eL,eN){var eI=u();
var eK=dV().set(eN,eJ);
return eI[eL](eK,eM)
}function aO(eM,eJ,eL){if(typeof eM==="number"){eJ=eM;
eM=undefined
}eM=eM||"";
if(eJ!=null){return a0(eM,eJ,eL,"month")
}var eK;
var eI=[];
for(eK=0;
eK<12;
eK++){eI[eK]=a0(eM,eK,eL,"month")
}return eI
}function eB(eN,eP,eL,eO){if(typeof eN==="boolean"){if(typeof eP==="number"){eL=eP;
eP=undefined
}eP=eP||""
}else{eP=eN;
eL=eP;
eN=false;
if(typeof eP==="number"){eL=eP;
eP=undefined
}eP=eP||""
}var eI=u(),eJ=eN?eI._week.dow:0;
if(eL!=null){return a0(eP,(eL+eJ)%7,eO,"day")
}var eM;
var eK=[];
for(eM=0;
eM<7;
eM++){eK[eM]=a0(eP,(eM+eJ)%7,eO,"day")
}return eK
}function eH(eJ,eI){return aO(eJ,eI,"months")
}function b5(eJ,eI){return aO(eJ,eI,"monthsShort")
}function aV(eJ,eK,eI){return eB(eJ,eK,eI,"weekdays")
}function ey(eJ,eK,eI){return eB(eJ,eK,eI,"weekdaysShort")
}function L(eJ,eK,eI){return eB(eJ,eK,eI,"weekdaysMin")
}cu("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(eK){var eI=eK%10,eJ=(cA(eK%100/10)===1)?"th":(eI===1)?"st":(eI===2)?"nd":(eI===3)?"rd":"th";
return eK+eJ
}});
bH.lang=dS("moment.lang is deprecated. Use moment.locale instead.",cu);
bH.langData=dS("moment.langData is deprecated. Use moment.localeData instead.",u);
var ec=Math.abs;
function aj(){var eI=this._data;
this._milliseconds=ec(this._milliseconds);
this._days=ec(this._days);
this._months=ec(this._months);
eI.milliseconds=ec(eI.milliseconds);
eI.seconds=ec(eI.seconds);
eI.minutes=ec(eI.minutes);
eI.hours=ec(eI.hours);
eI.months=ec(eI.months);
eI.years=ec(eI.years);
return this
}function bg(eM,eJ,eK,eL){var eI=dR(eJ,eK);
eM._milliseconds+=eL*eI._milliseconds;
eM._days+=eL*eI._days;
eM._months+=eL*eI._months;
return eM._bubble()
}function bj(eI,eJ){return bg(this,eI,eJ,1)
}function di(eI,eJ){return bg(this,eI,eJ,-1)
}function ei(eI){if(eI<0){return Math.floor(eI)
}else{return Math.ceil(eI)
}}function cE(){var eK=this._milliseconds;
var eQ=this._days;
var eI=this._months;
var eM=this._data;
var eP,eL,eO,eN,eJ;
if(!((eK>=0&&eQ>=0&&eI>=0)||(eK<=0&&eQ<=0&&eI<=0))){eK+=ei(eE(eI)+eQ)*86400000;
eQ=0;
eI=0
}eM.milliseconds=eK%1000;
eP=c1(eK/1000);
eM.seconds=eP%60;
eL=c1(eP/60);
eM.minutes=eL%60;
eO=c1(eL/60);
eM.hours=eO%24;
eQ+=c1(eO/24);
eJ=c1(h(eQ));
eI+=eJ;
eQ-=ei(eE(eJ));
eN=c1(eI/12);
eI%=12;
eM.days=eQ;
eM.months=eI;
eM.years=eN;
return this
}function h(eI){return eI*4800/146097
}function eE(eI){return eI*146097/4800
}function el(eJ){var eL;
var eI;
var eK=this._milliseconds;
eJ=cz(eJ);
if(eJ==="month"||eJ==="year"){eL=this._days+eK/86400000;
eI=this._months+h(eL);
return eJ==="month"?eI:eI/12
}else{eL=this._days+Math.round(eE(this._months));
switch(eJ){case"week":return eL/7+eK/604800000;
case"day":return eL+eK/86400000;
case"hour":return eL*24+eK/3600000;
case"minute":return eL*1440+eK/60000;
case"second":return eL*86400+eK/1000;
case"millisecond":return Math.floor(eL*86400000)+eK;
default:throw new Error("Unknown unit "+eJ)
}}}function cG(){return(this._milliseconds+this._days*86400000+(this._months%12)*2592000000+cA(this._months/12)*31536000000)
}function dJ(eI){return function(){return this.as(eI)
}
}var eF=dJ("ms");
var K=dJ("s");
var db=dJ("m");
var v=dJ("h");
var dN=dJ("d");
var dv=dJ("w");
var dH=dJ("M");
var bc=dJ("y");
function be(eI){eI=cz(eI);
return this[eI+"s"]()
}function bW(eI){return function(){return this._data[eI]
}
}var f=bW("milliseconds");
var a9=bW("seconds");
var ay=bW("minutes");
var R=bW("hours");
var a7=bW("days");
var eq=bW("months");
var bz=bW("years");
function dP(){return c1(this.days()/7)
}var cL=Math.round;
var dn={s:45,m:45,h:22,d:26,M:11};
function ak(eJ,eL,eK,eM,eI){return eI.relativeTime(eL||1,!!eK,eJ,eM)
}function cX(eM,eJ,eQ){var eK=dR(eM).abs();
var eR=cL(eK.as("s"));
var eL=cL(eK.as("m"));
var eP=cL(eK.as("h"));
var eS=cL(eK.as("d"));
var eI=cL(eK.as("M"));
var eN=cL(eK.as("y"));
var eO=eR<dn.s&&["s",eR]||eL<=1&&["m"]||eL<dn.m&&["mm",eL]||eP<=1&&["h"]||eP<dn.h&&["hh",eP]||eS<=1&&["d"]||eS<dn.d&&["dd",eS]||eI<=1&&["M"]||eI<dn.M&&["MM",eI]||eN<=1&&["y"]||["yy",eN];
eO[2]=eJ;
eO[3]=+eM>0;
eO[4]=eQ;
return ak.apply(null,eO)
}function aZ(eI,eJ){if(dn[eI]===undefined){return false
}if(eJ===undefined){return dn[eI]
}dn[eI]=eJ;
return true
}function c(eK){var eI=this.localeData();
var eJ=cX(this,!eK,eI);
if(eK){eJ=eI.pastFuture(+this,eJ)
}return eI.postformat(eJ)
}var aM=Math.abs;
function ep(){var eS=aM(this._milliseconds)/1000;
var eT=aM(this._days);
var eK=aM(this._months);
var eM,eR,eO;
eM=c1(eS/60);
eR=c1(eM/60);
eS%=60;
eM%=60;
eO=c1(eK/12);
eK%=12;
var eJ=eO;
var eP=eK;
var eI=eT;
var eN=eR;
var eL=eM;
var eU=eS;
var eQ=this.asSeconds();
if(!eQ){return"P0D"
}return(eQ<0?"-":"")+"P"+(eJ?eJ+"Y":"")+(eP?eP+"M":"")+(eI?eI+"D":"")+((eN||eL||eU)?"T":"")+(eN?eN+"H":"")+(eL?eL+"M":"")+(eU?eU+"S":"")
}var dG=du.prototype;
dG.abs=aj;
dG.add=bj;
dG.subtract=di;
dG.as=el;
dG.asMilliseconds=eF;
dG.asSeconds=K;
dG.asMinutes=db;
dG.asHours=v;
dG.asDays=dN;
dG.asWeeks=dv;
dG.asMonths=dH;
dG.asYears=bc;
dG.valueOf=cG;
dG._bubble=cE;
dG.get=be;
dG.milliseconds=f;
dG.seconds=a9;
dG.minutes=ay;
dG.hours=R;
dG.days=a7;
dG.weeks=dP;
dG.months=eq;
dG.years=bz;
dG.humanize=c;
dG.toISOString=ep;
dG.toString=ep;
dG.toJSON=ep;
dG.locale=eG;
dG.localeData=dx;
dG.toIsoString=dS("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ep);
dG.lang=A;
ci("X",0,0,"unix");
ci("x",0,0,"valueOf");
a6("x",C);
a6("X",ew);
bI("X",function(eI,eK,eJ){eJ._d=new Date(parseFloat(eI,10)*1000)
});
bI("x",function(eI,eK,eJ){eJ._d=new Date(cA(eI))
});
bH.version="2.13.0";
aI(dI);
bH.fn=a;
bH.min=r;
bH.max=bf;
bH.now=cj;
bH.utc=dV;
bH.unix=aa;
bH.months=eH;
bH.isDate=d7;
bH.locale=cu;
bH.invalid=cs;
bH.duration=dR;
bH.isMoment=bY;
bH.weekdays=aV;
bH.parseZone=cH;
bH.localeData=u;
bH.isDuration=ad;
bH.monthsShort=b5;
bH.weekdaysMin=L;
bH.defineLocale=cm;
bH.updateLocale=dY;
bH.locales=U;
bH.weekdaysShort=ey;
bH.normalizeUnits=cz;
bH.relativeTimeThreshold=aZ;
bH.prototype=a;
var cO=bH;
return cO
}));
(function(a,b){if(typeof define==="function"&&define.amd){define(["moment","jquery"],function(g,f){if(!f.fn){f.fn={}
}return(a.daterangepicker=b(g,f))
})
}else{if(typeof module==="object"&&module.exports){var e=(typeof window!="undefined")?window.jQuery:undefined;
if(!e){e=require("jquery");
if(!e.fn){e.fn={}
}}var c=(typeof window!="undefined"&&typeof window.moment!="undefined")?window.moment:require("moment");
module.exports=b(c,e)
}else{a.daterangepicker=b(a.moment,a.jQuery)
}}}(this,function(c,b){var a=function(o,t,l){this.parentEl="body";
this.element=b(o);
this.startDate=c().startOf("day");
this.endDate=c().endOf("day");
this.minDate=false;
this.maxDate=false;
this.dateLimit=false;
this.autoApply=false;
this.singleDatePicker=false;
this.showDropdowns=false;
this.showWeekNumbers=false;
this.showISOWeekNumbers=false;
this.showCustomRangeLabel=true;
this.timePicker=false;
this.timePicker24Hour=false;
this.timePickerIncrement=1;
this.timePickerSeconds=false;
this.linkedCalendars=true;
this.autoUpdateInput=true;
this.alwaysShowCalendars=false;
this.ranges={};
this.opens="right";
if(this.element.hasClass("pull-right")){this.opens="left"
}this.drops="down";
if(this.element.hasClass("dropup")){this.drops="up"
}this.buttonClasses="btn btn-sm";
this.applyClass="btn-success";
this.cancelClass="btn-default";
this.locale={direction:"ltr",format:c.localeData().longDateFormat("L"),separator:" - ",applyLabel:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:c.weekdaysMin(),monthNames:c.monthsShort(),firstDay:c.localeData().firstDayOfWeek()};
this.callback=function(){};
this.isShowing=false;
this.leftCalendar={};
this.rightCalendar={};
if(typeof t!=="object"||t===null){t={}
}t=b.extend(this.element.data(),t);
if(typeof t.template!=="string"&&!(t.template instanceof b)){t.template='<div class="daterangepicker dropdown-menu"><div class="calendar left"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_start" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="calendar right"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_end" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled" type="button"></button> <button class="cancelBtn" type="button"></button></div></div></div>'
}this.parentEl=(t.parentEl&&b(t.parentEl).length)?b(t.parentEl):b(this.parentEl);
this.container=b(t.template).appendTo(this.parentEl);
if(typeof t.locale==="object"){if(typeof t.locale.direction==="string"){this.locale.direction=t.locale.direction
}if(typeof t.locale.format==="string"){this.locale.format=t.locale.format
}if(typeof t.locale.separator==="string"){this.locale.separator=t.locale.separator
}if(typeof t.locale.daysOfWeek==="object"){this.locale.daysOfWeek=t.locale.daysOfWeek.slice()
}if(typeof t.locale.monthNames==="object"){this.locale.monthNames=t.locale.monthNames.slice()
}if(typeof t.locale.firstDay==="number"){this.locale.firstDay=t.locale.firstDay
}if(typeof t.locale.applyLabel==="string"){this.locale.applyLabel=t.locale.applyLabel
}if(typeof t.locale.cancelLabel==="string"){this.locale.cancelLabel=t.locale.cancelLabel
}if(typeof t.locale.weekLabel==="string"){this.locale.weekLabel=t.locale.weekLabel
}if(typeof t.locale.customRangeLabel==="string"){var j=document.createElement("textarea");
j.innerHTML=t.locale.customRangeLabel;
var g=j.value;
this.locale.customRangeLabel=g
}}this.container.addClass(this.locale.direction);
if(typeof t.startDate==="string"){this.startDate=c(t.startDate,this.locale.format)
}if(typeof t.endDate==="string"){this.endDate=c(t.endDate,this.locale.format)
}if(typeof t.minDate==="string"){this.minDate=c(t.minDate,this.locale.format)
}if(typeof t.maxDate==="string"){this.maxDate=c(t.maxDate,this.locale.format)
}if(typeof t.startDate==="object"){this.startDate=c(t.startDate)
}if(typeof t.endDate==="object"){this.endDate=c(t.endDate)
}if(typeof t.minDate==="object"){this.minDate=c(t.minDate)
}if(typeof t.maxDate==="object"){this.maxDate=c(t.maxDate)
}if(this.minDate&&this.startDate.isBefore(this.minDate)){this.startDate=this.minDate.clone()
}if(this.maxDate&&this.endDate.isAfter(this.maxDate)){this.endDate=this.maxDate.clone()
}if(typeof t.applyClass==="string"){this.applyClass=t.applyClass
}if(typeof t.cancelClass==="string"){this.cancelClass=t.cancelClass
}if(typeof t.dateLimit==="object"){this.dateLimit=t.dateLimit
}if(typeof t.opens==="string"){this.opens=t.opens
}if(typeof t.drops==="string"){this.drops=t.drops
}if(typeof t.showWeekNumbers==="boolean"){this.showWeekNumbers=t.showWeekNumbers
}if(typeof t.showISOWeekNumbers==="boolean"){this.showISOWeekNumbers=t.showISOWeekNumbers
}if(typeof t.buttonClasses==="string"){this.buttonClasses=t.buttonClasses
}if(typeof t.buttonClasses==="object"){this.buttonClasses=t.buttonClasses.join(" ")
}if(typeof t.showDropdowns==="boolean"){this.showDropdowns=t.showDropdowns
}if(typeof t.showCustomRangeLabel==="boolean"){this.showCustomRangeLabel=t.showCustomRangeLabel
}if(typeof t.singleDatePicker==="boolean"){this.singleDatePicker=t.singleDatePicker;
if(this.singleDatePicker){this.endDate=this.startDate.clone()
}}if(typeof t.timePicker==="boolean"){this.timePicker=t.timePicker
}if(typeof t.timePickerSeconds==="boolean"){this.timePickerSeconds=t.timePickerSeconds
}if(typeof t.timePickerIncrement==="number"){this.timePickerIncrement=t.timePickerIncrement
}if(typeof t.timePicker24Hour==="boolean"){this.timePicker24Hour=t.timePicker24Hour
}if(typeof t.autoApply==="boolean"){this.autoApply=t.autoApply
}if(typeof t.autoUpdateInput==="boolean"){this.autoUpdateInput=t.autoUpdateInput
}if(typeof t.linkedCalendars==="boolean"){this.linkedCalendars=t.linkedCalendars
}if(typeof t.isInvalidDate==="function"){this.isInvalidDate=t.isInvalidDate
}if(typeof t.isCustomDate==="function"){this.isCustomDate=t.isCustomDate
}if(typeof t.alwaysShowCalendars==="boolean"){this.alwaysShowCalendars=t.alwaysShowCalendars
}if(this.locale.firstDay!=0){var q=this.locale.firstDay;
while(q>0){this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
q--
}}var f,n,p;
if(typeof t.startDate==="undefined"&&typeof t.endDate==="undefined"){if(b(this.element).is("input[type=text]")){var h=b(this.element).val(),s=h.split(this.locale.separator);
f=n=null;
if(s.length==2){f=c(s[0],this.locale.format);
n=c(s[1],this.locale.format)
}else{if(this.singleDatePicker&&h!==""){f=c(h,this.locale.format);
n=c(h,this.locale.format)
}}if(f!==null&&n!==null){this.setStartDate(f);
this.setEndDate(n)
}}}if(typeof t.ranges==="object"){for(p in t.ranges){if(typeof t.ranges[p][0]==="string"){f=c(t.ranges[p][0],this.locale.format)
}else{f=c(t.ranges[p][0])
}if(typeof t.ranges[p][1]==="string"){n=c(t.ranges[p][1],this.locale.format)
}else{n=c(t.ranges[p][1])
}if(this.minDate&&f.isBefore(this.minDate)){f=this.minDate.clone()
}var e=this.maxDate;
if(this.dateLimit&&e&&f.clone().add(this.dateLimit).isAfter(e)){e=f.clone().add(this.dateLimit)
}if(e&&n.isAfter(e)){n=e.clone()
}if((this.minDate&&n.isBefore(this.minDate,this.timepicker?"minute":"day"))||(e&&f.isAfter(e,this.timepicker?"minute":"day"))){continue
}var j=document.createElement("textarea");
j.innerHTML=p;
var g=j.value;
this.ranges[g]=[f,n]
}var r="<ul>";
for(p in this.ranges){r+='<li data-range-key="'+p+'">'+p+"</li>"
}if(this.showCustomRangeLabel){r+='<li data-range-key="'+this.locale.customRangeLabel+'">'+this.locale.customRangeLabel+"</li>"
}r+="</ul>";
this.container.find(".ranges").prepend(r)
}if(typeof l==="function"){this.callback=l
}if(!this.timePicker){this.startDate=this.startDate.startOf("day");
this.endDate=this.endDate.endOf("day");
this.container.find(".calendar-time").hide()
}if(this.timePicker&&this.autoApply){this.autoApply=false
}if(this.autoApply&&typeof t.ranges!=="object"){this.container.find(".ranges").hide()
}else{if(this.autoApply){this.container.find(".applyBtn, .cancelBtn").addClass("hide")
}}if(this.singleDatePicker){this.container.addClass("single");
this.container.find(".calendar.left").addClass("single");
this.container.find(".calendar.left").show();
this.container.find(".calendar.right").hide();
this.container.find(".daterangepicker_input input, .daterangepicker_input > i").hide();
if(this.timePicker){this.container.find(".ranges ul").hide()
}else{this.container.find(".ranges").hide()
}}if((typeof t.ranges==="undefined"&&!this.singleDatePicker)||this.alwaysShowCalendars){this.container.addClass("show-calendar")
}this.container.addClass("opens"+this.opens);
if(typeof t.ranges!=="undefined"&&this.opens=="right"){this.container.find(".ranges").prependTo(this.container.find(".calendar.left").parent())
}this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses);
if(this.applyClass.length){this.container.find(".applyBtn").addClass(this.applyClass)
}if(this.cancelClass.length){this.container.find(".cancelBtn").addClass(this.cancelClass)
}this.container.find(".applyBtn").html(this.locale.applyLabel);
this.container.find(".cancelBtn").html(this.locale.cancelLabel);
this.container.find(".calendar").on("click.daterangepicker",".prev",b.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",b.proxy(this.clickNext,this)).on("mousedown.daterangepicker","td.available",b.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",b.proxy(this.hoverDate,this)).on("mouseleave.daterangepicker","td.available",b.proxy(this.updateFormInputs,this)).on("change.daterangepicker","select.yearselect",b.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.monthselect",b.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",b.proxy(this.timeChanged,this)).on("click.daterangepicker",".daterangepicker_input input",b.proxy(this.showCalendars,this)).on("focus.daterangepicker",".daterangepicker_input input",b.proxy(this.formInputsFocused,this)).on("blur.daterangepicker",".daterangepicker_input input",b.proxy(this.formInputsBlurred,this)).on("change.daterangepicker",".daterangepicker_input input",b.proxy(this.formInputsChanged,this));
this.container.find(".ranges").on("click.daterangepicker","button.applyBtn",b.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",b.proxy(this.clickCancel,this)).on("click.daterangepicker","li",b.proxy(this.clickRange,this)).on("mouseenter.daterangepicker","li",b.proxy(this.hoverRange,this)).on("mouseleave.daterangepicker","li",b.proxy(this.updateFormInputs,this));
if(this.element.is("input")||this.element.is("button")){this.element.on({"click.daterangepicker":b.proxy(this.show,this),"focus.daterangepicker":b.proxy(this.show,this),"keyup.daterangepicker":b.proxy(this.elementChanged,this),"keydown.daterangepicker":b.proxy(this.keydown,this)})
}else{this.element.on("click.daterangepicker",b.proxy(this.toggle,this))
}if(this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput){this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format));
this.element.trigger("change")
}else{if(this.element.is("input")&&this.autoUpdateInput){this.element.val(this.startDate.format(this.locale.format));
this.element.trigger("change")
}}};
a.prototype={constructor:a,setStartDate:function(e){if(typeof e==="string"){this.startDate=c(e,this.locale.format)
}if(typeof e==="object"){this.startDate=c(e)
}if(!this.timePicker){this.startDate=this.startDate.startOf("day")
}if(this.timePicker&&this.timePickerIncrement){this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)
}if(this.minDate&&this.startDate.isBefore(this.minDate)){this.startDate=this.minDate.clone();
if(this.timePicker&&this.timePickerIncrement){this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)
}}if(this.maxDate&&this.startDate.isAfter(this.maxDate)){this.startDate=this.maxDate.clone();
if(this.timePicker&&this.timePickerIncrement){this.startDate.minute(Math.floor(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)
}}if(!this.isShowing){this.updateElement()
}this.updateMonthsInView()
},setEndDate:function(e){if(typeof e==="string"){this.endDate=c(e,this.locale.format)
}if(typeof e==="object"){this.endDate=c(e)
}if(!this.timePicker){this.endDate=this.endDate.endOf("day")
}if(this.timePicker&&this.timePickerIncrement){this.endDate.minute(Math.round(this.endDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)
}if(this.endDate.isBefore(this.startDate)){this.endDate=this.startDate.clone()
}if(this.maxDate&&this.endDate.isAfter(this.maxDate)){this.endDate=this.maxDate.clone()
}if(this.dateLimit&&this.startDate.clone().add(this.dateLimit).isBefore(this.endDate)){this.endDate=this.startDate.clone().add(this.dateLimit)
}this.previousRightTime=this.endDate.clone();
if(!this.isShowing){this.updateElement()
}this.updateMonthsInView()
},isInvalidDate:function(){return false
},isCustomDate:function(){return false
},updateView:function(){if(this.timePicker){this.renderTimePicker("left");
this.renderTimePicker("right");
if(!this.endDate){this.container.find(".right .calendar-time select").attr("disabled","disabled").addClass("disabled")
}else{this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled")
}}if(this.endDate){this.container.find('input[name="daterangepicker_end"]').removeClass("active");
this.container.find('input[name="daterangepicker_start"]').addClass("active")
}else{this.container.find('input[name="daterangepicker_end"]').addClass("active");
this.container.find('input[name="daterangepicker_start"]').removeClass("active")
}this.updateMonthsInView();
this.updateCalendars();
this.updateFormInputs()
},updateMonthsInView:function(){if(this.endDate){if(!this.singleDatePicker&&this.leftCalendar.month&&this.rightCalendar.month&&(this.startDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.startDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))&&(this.endDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.endDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))){return
}this.leftCalendar.month=this.startDate.clone().date(2);
if(!this.linkedCalendars&&(this.endDate.month()!=this.startDate.month()||this.endDate.year()!=this.startDate.year())){this.rightCalendar.month=this.endDate.clone().date(2)
}else{this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month")
}}else{if(this.leftCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&this.rightCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")){this.leftCalendar.month=this.startDate.clone().date(2);
this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month")
}}if(this.maxDate&&this.linkedCalendars&&!this.singleDatePicker&&this.rightCalendar.month>this.maxDate){this.rightCalendar.month=this.maxDate.clone().date(2);
this.leftCalendar.month=this.maxDate.clone().date(2).subtract(1,"month")
}},updateCalendars:function(){if(this.timePicker){var e,h,g;
if(this.endDate){e=parseInt(this.container.find(".left .hourselect").val(),10);
h=parseInt(this.container.find(".left .minuteselect").val(),10);
g=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;
if(!this.timePicker24Hour){var f=this.container.find(".left .ampmselect").val();
if(f==="PM"&&e<12){e+=12
}if(f==="AM"&&e===12){e=0
}}}else{e=parseInt(this.container.find(".right .hourselect").val(),10);
h=parseInt(this.container.find(".right .minuteselect").val(),10);
g=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;
if(!this.timePicker24Hour){var f=this.container.find(".right .ampmselect").val();
if(f==="PM"&&e<12){e+=12
}if(f==="AM"&&e===12){e=0
}}}this.leftCalendar.month.hour(e).minute(h).second(g);
this.rightCalendar.month.hour(e).minute(h).second(g)
}this.renderCalendar("left");
this.renderCalendar("right");
this.container.find(".ranges li").removeClass("active");
if(this.endDate==null){return
}this.calculateChosenLabel()
},renderCalendar:function(A){var R=A=="left"?this.leftCalendar:this.rightCalendar;
var f=R.month.month();
var g=R.month.year();
var D=R.month.hour();
var q=R.month.minute();
var G=R.month.second();
var j=c([g,f]).daysInMonth();
var B=c([g,f,1]);
var N=c([g,f,j]);
var J=c(B).subtract(1,"month").month();
var v=c(B).subtract(1,"month").year();
var z=c([v,J]).daysInMonth();
var t=B.day();
var R=[];
R.firstDay=B;
R.lastDay=N;
for(var T=0;
T<6;
T++){R[T]=[]
}var V=z-t+this.locale.firstDay+1;
if(V>z){V-=7
}if(t==this.locale.firstDay){V=z-6
}var p=c([v,J,V,12,q,G]);
var n,w;
for(var T=0,n=0,w=0;
T<42;
T++,n++,p=c(p).add(24,"hour")){if(T>0&&n%7===0){n=0;
w++
}R[w][n]=p.clone().hour(D).minute(q).second(G);
p.hour(12);
if(this.minDate&&R[w][n].format("YYYY-MM-DD")==this.minDate.format("YYYY-MM-DD")&&R[w][n].isBefore(this.minDate)&&A=="left"){R[w][n]=this.minDate.clone()
}if(this.maxDate&&R[w][n].format("YYYY-MM-DD")==this.maxDate.format("YYYY-MM-DD")&&R[w][n].isAfter(this.maxDate)&&A=="right"){R[w][n]=this.maxDate.clone()
}}if(A=="left"){this.leftCalendar.calendar=R
}else{this.rightCalendar.calendar=R
}var h=A=="left"?this.minDate:this.startDate;
var s=this.maxDate;
var H=A=="left"?this.startDate:this.endDate;
var K=this.locale.direction=="ltr"?{left:"chevron-left",right:"chevron-right"}:{left:"chevron-right",right:"chevron-left"};
var I='<table class="table-condensed">';
I+="<thead>";
I+="<tr>";
if(this.showWeekNumbers||this.showISOWeekNumbers){I+="<th></th>"
}if((!h||h.isBefore(R.firstDay))&&(!this.linkedCalendars||A=="left")){I+='<th class="prev available"><i class="fa fa-'+K.left+" glyphicon glyphicon-"+K.left+'"></i></th>'
}else{I+="<th></th>"
}var O=this.locale.monthNames[R[1][1].month()]+R[1][1].format(" YYYY");
if(this.showDropdowns){var F=R[1][1].month();
var u=R[1][1].year();
var E=(s&&s.year())||(u+5);
var x=(h&&h.year())||(u-50);
var M=u==x;
var Q=u==E;
var r='<select class="monthselect">';
for(var S=0;
S<12;
S++){if((!M||S>=h.month())&&(!Q||S<=s.month())){r+="<option value='"+S+"'"+(S===F?" selected='selected'":"")+">"+this.locale.monthNames[S]+"</option>"
}else{r+="<option value='"+S+"'"+(S===F?" selected='selected'":"")+" disabled='disabled'>"+this.locale.monthNames[S]+"</option>"
}}r+="</select>";
var e='<select class="yearselect">';
for(var P=x;
P<=E;
P++){e+='<option value="'+P+'"'+(P===u?' selected="selected"':"")+">"+P+"</option>"
}e+="</select>";
O=r+e
}I+='<th colspan="5" class="month">'+O+"</th>";
if((!s||s.isAfter(R.lastDay))&&(!this.linkedCalendars||A=="right"||this.singleDatePicker)){I+='<th class="next available"><i class="fa fa-'+K.right+" glyphicon glyphicon-"+K.right+'"></i></th>'
}else{I+="<th></th>"
}I+="</tr>";
I+="<tr>";
if(this.showWeekNumbers||this.showISOWeekNumbers){I+='<th class="week">'+this.locale.weekLabel+"</th>"
}b.each(this.locale.daysOfWeek,function(W,y){I+="<th>"+y+"</th>"
});
I+="</tr>";
I+="</thead>";
I+="<tbody>";
if(this.endDate==null&&this.dateLimit){var U=this.startDate.clone().add(this.dateLimit).endOf("day");
if(!s||U.isBefore(s)){s=U
}}for(var w=0;
w<6;
w++){I+="<tr>";
if(this.showWeekNumbers){I+='<td class="week">'+R[w][0].week()+"</td>"
}else{if(this.showISOWeekNumbers){I+='<td class="week">'+R[w][0].isoWeek()+"</td>"
}}for(var n=0;
n<7;
n++){var l=[];
if(R[w][n].isSame(new Date(),"day")){l.push("today")
}if(R[w][n].isoWeekday()>5){l.push("weekend")
}if(R[w][n].month()!=R[1][1].month()){l.push("off")
}if(this.minDate&&R[w][n].isBefore(this.minDate,"day")){l.push("off","disabled")
}if(s&&R[w][n].isAfter(s,"day")){l.push("off","disabled")
}if(this.isInvalidDate(R[w][n])){l.push("off","disabled")
}if(R[w][n].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")){l.push("active","start-date")
}if(this.endDate!=null&&R[w][n].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")){l.push("active","end-date")
}if(this.endDate!=null&&R[w][n]>this.startDate&&R[w][n]<this.endDate){l.push("in-range")
}var C=this.isCustomDate(R[w][n]);
if(C!==false){if(typeof C==="string"){l.push(C)
}else{Array.prototype.push.apply(l,C)
}}var o="",L=false;
for(var T=0;
T<l.length;
T++){o+=l[T]+" ";
if(l[T]=="disabled"){L=true
}}if(!L){o+="available"
}I+='<td class="'+o.replace(/^\s+|\s+$/g,"")+'" data-title="r'+w+"c"+n+'">'+R[w][n].date()+"</td>"
}I+="</tr>"
}I+="</tbody>";
I+="</table>";
this.container.find(".calendar."+A+" .calendar-table").html(I)
},renderTimePicker:function(u){if(u=="right"&&!this.endDate){return
}var t,r,q,f=this.maxDate;
if(this.dateLimit&&(!this.maxDate||this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate))){f=this.startDate.clone().add(this.dateLimit)
}if(u=="left"){r=this.startDate.clone();
q=this.minDate
}else{if(u=="right"){r=this.endDate.clone();
q=this.startDate;
var w=this.container.find(".calendar.right .calendar-time div");
if(w.html()!=""){r.hour(w.find(".hourselect option:selected").val()||r.hour());
r.minute(w.find(".minuteselect option:selected").val()||r.minute());
r.second(w.find(".secondselect option:selected").val()||r.second());
if(!this.timePicker24Hour){var v=w.find(".ampmselect option:selected").val();
if(v==="PM"&&r.hour()<12){r.hour(r.hour()+12)
}if(v==="AM"&&r.hour()===12){r.hour(0)
}}}if(r.isBefore(this.startDate)){r=this.startDate.clone()
}if(f&&r.isAfter(f)){r=f.clone()
}}}t='<select class="hourselect">';
var g=this.timePicker24Hour?0:1;
var o=this.timePicker24Hour?23:12;
for(var s=g;
s<=o;
s++){var h=s;
if(!this.timePicker24Hour){h=r.hour()>=12?(s==12?12:s+12):(s==12?0:s)
}var l=r.clone().hour(h);
var p=false;
if(q&&l.minute(59).isBefore(q)){p=true
}if(f&&l.minute(0).isAfter(f)){p=true
}if(h==r.hour()&&!p){t+='<option value="'+s+'" selected="selected">'+s+"</option>"
}else{if(p){t+='<option value="'+s+'" disabled="disabled" class="disabled">'+s+"</option>"
}else{t+='<option value="'+s+'">'+s+"</option>"
}}}t+="</select> ";
t+=': <select class="minuteselect">';
for(var s=0;
s<60;
s+=this.timePickerIncrement){var e=s<10?"0"+s:s;
var l=r.clone().minute(s);
var p=false;
if(q&&l.second(59).isBefore(q)){p=true
}if(f&&l.second(0).isAfter(f)){p=true
}if(r.minute()==s&&!p){t+='<option value="'+s+'" selected="selected">'+e+"</option>"
}else{if(p){t+='<option value="'+s+'" disabled="disabled" class="disabled">'+e+"</option>"
}else{t+='<option value="'+s+'">'+e+"</option>"
}}}t+="</select> ";
if(this.timePickerSeconds){t+=': <select class="secondselect">';
for(var s=0;
s<60;
s++){var e=s<10?"0"+s:s;
var l=r.clone().second(s);
var p=false;
if(q&&l.isBefore(q)){p=true
}if(f&&l.isAfter(f)){p=true
}if(r.second()==s&&!p){t+='<option value="'+s+'" selected="selected">'+e+"</option>"
}else{if(p){t+='<option value="'+s+'" disabled="disabled" class="disabled">'+e+"</option>"
}else{t+='<option value="'+s+'">'+e+"</option>"
}}}t+="</select> "
}if(!this.timePicker24Hour){t+='<select class="ampmselect">';
var j="";
var n="";
if(q&&r.clone().hour(12).minute(0).second(0).isBefore(q)){j=' disabled="disabled" class="disabled"'
}if(f&&r.clone().hour(0).minute(0).second(0).isAfter(f)){n=' disabled="disabled" class="disabled"'
}if(r.hour()>=12){t+='<option value="AM"'+j+'>AM</option><option value="PM" selected="selected"'+n+">PM</option>"
}else{t+='<option value="AM" selected="selected"'+j+'>AM</option><option value="PM"'+n+">PM</option>"
}t+="</select>"
}this.container.find(".calendar."+u+" .calendar-time div").html(t)
},updateFormInputs:function(){if(this.container.find("input[name=daterangepicker_start]").is(":focus")||this.container.find("input[name=daterangepicker_end]").is(":focus")){return
}this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format));
if(this.endDate){this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format))
}if(this.singleDatePicker||(this.endDate&&(this.startDate.isBefore(this.endDate)||this.startDate.isSame(this.endDate)))){this.container.find("button.applyBtn").removeAttr("disabled")
}else{this.container.find("button.applyBtn").attr("disabled","disabled")
}},move:function(){var e={top:0,left:0},g;
var f=b(window).width();
if(!this.parentEl.is("body")){e={top:this.parentEl.offset().top-this.parentEl.scrollTop(),left:this.parentEl.offset().left-this.parentEl.scrollLeft()};
f=this.parentEl[0].clientWidth+this.parentEl.offset().left
}if(this.drops=="up"){g=this.element.offset().top-this.container.outerHeight()-e.top
}else{g=this.element.offset().top+this.element.outerHeight()-e.top
}this.container[this.drops=="up"?"addClass":"removeClass"]("dropup");
if(this.opens=="left"){this.container.css({top:g,right:f-this.element.offset().left-this.element.outerWidth(),left:"auto"});
if(this.container.offset().left<0){this.container.css({right:"auto",left:9})
}}else{if(this.opens=="center"){this.container.css({top:g,left:this.element.offset().left-e.left+this.element.outerWidth()/2-this.container.outerWidth()/2,right:"auto"});
if(this.container.offset().left<0){this.container.css({right:"auto",left:9})
}}else{this.container.css({top:g,left:this.element.offset().left-e.left,right:"auto"});
if(this.container.offset().left+this.container.outerWidth()>b(window).width()){this.container.css({left:"auto",right:0})
}}}},show:function(f){if(this.isShowing){return
}this._outsideClickProxy=b.proxy(function(g){this.outsideClick(g)
},this);
b(document).on("mousedown.daterangepicker",this._outsideClickProxy).on("touchend.daterangepicker",this._outsideClickProxy).on("click.daterangepicker","[data-toggle=dropdown]",this._outsideClickProxy).on("focusin.daterangepicker",this._outsideClickProxy);
b(window).on("resize.daterangepicker",b.proxy(function(g){this.move(g)
},this));
this.oldStartDate=this.startDate.clone();
this.oldEndDate=this.endDate.clone();
this.previousRightTime=this.endDate.clone();
this.updateView();
this.container.show();
this.move();
this.element.trigger("show.daterangepicker",this);
this.isShowing=true
},hide:function(f){if(!this.isShowing){return
}if(!this.endDate){this.startDate=this.oldStartDate.clone();
this.endDate=this.oldEndDate.clone()
}if(!this.startDate.isSame(this.oldStartDate)||!this.endDate.isSame(this.oldEndDate)){this.callback(this.startDate,this.endDate,this.chosenLabel)
}this.updateElement();
b(document).off(".daterangepicker");
b(window).off(".daterangepicker");
this.container.hide();
this.element.trigger("hide.daterangepicker",this);
this.isShowing=false
},toggle:function(f){if(this.isShowing){this.hide()
}else{this.show()
}},outsideClick:function(g){var f=b(g.target);
if(g.type=="focusin"||f.closest(this.element).length||f.closest(this.container).length||f.closest(".calendar-table").length){return
}this.hide();
this.element.trigger("outsideClick.daterangepicker",this)
},showCalendars:function(){this.container.addClass("show-calendar");
this.move();
this.element.trigger("showCalendar.daterangepicker",this)
},hideCalendars:function(){this.container.removeClass("show-calendar");
this.element.trigger("hideCalendar.daterangepicker",this)
},hoverRange:function(h){if(this.container.find("input[name=daterangepicker_start]").is(":focus")||this.container.find("input[name=daterangepicker_end]").is(":focus")){return
}var f=h.target.getAttribute("data-range-key");
if(f==this.locale.customRangeLabel){this.updateView()
}else{var g=this.ranges[f];
this.container.find("input[name=daterangepicker_start]").val(g[0].format(this.locale.format));
this.container.find("input[name=daterangepicker_end]").val(g[1].format(this.locale.format))
}},clickRange:function(h){var f=h.target.getAttribute("data-range-key");
this.chosenLabel=f;
if(f==this.locale.customRangeLabel){this.showCalendars()
}else{var g=this.ranges[f];
this.startDate=g[0];
this.endDate=g[1];
if(!this.timePicker){this.startDate.startOf("day");
this.endDate.endOf("day")
}if(!this.alwaysShowCalendars){this.hideCalendars()
}this.clickApply()
}},clickPrev:function(g){var f=b(g.target).parents(".calendar");
if(f.hasClass("left")){this.leftCalendar.month.subtract(1,"month");
if(this.linkedCalendars){this.rightCalendar.month.subtract(1,"month")
}}else{this.rightCalendar.month.subtract(1,"month")
}this.updateCalendars()
},clickNext:function(g){var f=b(g.target).parents(".calendar");
if(f.hasClass("left")){this.leftCalendar.month.add(1,"month")
}else{this.rightCalendar.month.add(1,"month");
if(this.linkedCalendars){this.leftCalendar.month.add(1,"month")
}}this.updateCalendars()
},hoverDate:function(n){if(!b(n.target).hasClass("available")){return
}var p=b(n.target).attr("data-title");
var q=p.substr(1,1);
var h=p.substr(3,1);
var f=b(n.target).parents(".calendar");
var j=f.hasClass("left")?this.leftCalendar.calendar[q][h]:this.rightCalendar.calendar[q][h];
if(this.endDate&&!this.container.find("input[name=daterangepicker_start]").is(":focus")){this.container.find("input[name=daterangepicker_start]").val(j.format(this.locale.format))
}else{if(!this.endDate&&!this.container.find("input[name=daterangepicker_end]").is(":focus")){this.container.find("input[name=daterangepicker_end]").val(j.format(this.locale.format))
}}var l=this.leftCalendar;
var o=this.rightCalendar;
var g=this.startDate;
if(!this.endDate){this.container.find(".calendar tbody td").each(function(r,s){if(b(s).hasClass("week")){return
}var w=b(s).attr("data-title");
var v=w.substr(1,1);
var e=w.substr(3,1);
var u=b(s).parents(".calendar");
var t=u.hasClass("left")?l.calendar[v][e]:o.calendar[v][e];
if((t.isAfter(g)&&t.isBefore(j))||t.isSame(j,"day")){b(s).addClass("in-range")
}else{b(s).removeClass("in-range")
}})
}},clickDate:function(o){if(!b(o.target).hasClass("available")){return
}var q=b(o.target).attr("data-title");
var r=q.substr(1,1);
var h=q.substr(3,1);
var f=b(o.target).parents(".calendar");
var j=f.hasClass("left")?this.leftCalendar.calendar[r][h]:this.rightCalendar.calendar[r][h];
if(this.endDate||j.isBefore(this.startDate,"day")){if(this.timePicker){var n=parseInt(this.container.find(".left .hourselect").val(),10);
if(!this.timePicker24Hour){var p=this.container.find(".left .ampmselect").val();
if(p==="PM"&&n<12){n+=12
}if(p==="AM"&&n===12){n=0
}}var l=parseInt(this.container.find(".left .minuteselect").val(),10);
var g=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;
j=j.clone().hour(n).minute(l).second(g)
}this.endDate=null;
this.setStartDate(j.clone())
}else{if(!this.endDate&&j.isBefore(this.startDate)){this.setEndDate(this.startDate.clone())
}else{if(this.timePicker){var n=parseInt(this.container.find(".right .hourselect").val(),10);
if(!this.timePicker24Hour){var p=this.container.find(".right .ampmselect").val();
if(p==="PM"&&n<12){n+=12
}if(p==="AM"&&n===12){n=0
}}var l=parseInt(this.container.find(".right .minuteselect").val(),10);
var g=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;
j=j.clone().hour(n).minute(l).second(g)
}this.setEndDate(j.clone());
if(this.autoApply){this.calculateChosenLabel();
this.clickApply()
}}}if(this.singleDatePicker){this.setEndDate(this.startDate);
if(!this.timePicker){this.clickApply()
}}this.updateView();
o.stopPropagation()
},calculateChosenLabel:function(){var e=true;
var g=0;
for(var f in this.ranges){if(this.timePicker){if(this.startDate.isSame(this.ranges[f][0])&&this.endDate.isSame(this.ranges[f][1])){e=false;
this.chosenLabel=this.container.find(".ranges li:eq("+g+")").addClass("active").html();
break
}}else{if(this.startDate.format("YYYY-MM-DD")==this.ranges[f][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[f][1].format("YYYY-MM-DD")){e=false;
this.chosenLabel=this.container.find(".ranges li:eq("+g+")").addClass("active").html();
break
}}g++
}if(e){if(this.showCustomRangeLabel){this.chosenLabel=this.container.find(".ranges li:last").addClass("active").html()
}else{this.chosenLabel=null
}this.showCalendars()
}},clickApply:function(f){this.hide();
this.element.trigger("apply.daterangepicker",this)
},clickCancel:function(f){this.startDate=this.oldStartDate;
this.endDate=this.oldEndDate;
this.hide();
this.element.trigger("cancel.daterangepicker",this)
},monthOrYearChanged:function(j){var n=b(j.target).closest(".calendar").hasClass("left"),l=n?"left":"right",h=this.container.find(".calendar."+l);
var g=parseInt(h.find(".monthselect").val(),10);
var f=h.find(".yearselect").val();
if(!n){if(f<this.startDate.year()||(f==this.startDate.year()&&g<this.startDate.month())){g=this.startDate.month();
f=this.startDate.year()
}}if(this.minDate){if(f<this.minDate.year()||(f==this.minDate.year()&&g<this.minDate.month())){g=this.minDate.month();
f=this.minDate.year()
}}if(this.maxDate){if(f>this.maxDate.year()||(f==this.maxDate.year()&&g>this.maxDate.month())){g=this.maxDate.month();
f=this.maxDate.year()
}}if(n){this.leftCalendar.month.month(g).year(f);
if(this.linkedCalendars){this.rightCalendar.month=this.leftCalendar.month.clone().add(1,"month")
}}else{this.rightCalendar.month.month(g).year(f);
if(this.linkedCalendars){this.leftCalendar.month=this.rightCalendar.month.clone().subtract(1,"month")
}}this.updateCalendars()
},timeChanged:function(o){var f=b(o.target).closest(".calendar"),q=f.hasClass("left");
var n=parseInt(f.find(".hourselect").val(),10);
var j=parseInt(f.find(".minuteselect").val(),10);
var h=this.timePickerSeconds?parseInt(f.find(".secondselect").val(),10):0;
if(!this.timePicker24Hour){var p=f.find(".ampmselect").val();
if(p==="PM"&&n<12){n+=12
}if(p==="AM"&&n===12){n=0
}}if(q){var g=this.startDate.clone();
g.hour(n);
g.minute(j);
g.second(h);
this.setStartDate(g);
if(this.singleDatePicker){this.endDate=this.startDate.clone()
}else{if(this.endDate&&this.endDate.format("YYYY-MM-DD")==g.format("YYYY-MM-DD")&&this.endDate.isBefore(g)){this.setEndDate(g.clone())
}}}else{if(this.endDate){var l=this.endDate.clone();
l.hour(n);
l.minute(j);
l.second(h);
this.setEndDate(l)
}}this.updateCalendars();
this.updateFormInputs();
this.renderTimePicker("left");
this.renderTimePicker("right")
},formInputsChanged:function(h){var g=b(h.target).closest(".calendar").hasClass("right");
var j=c(this.container.find('input[name="daterangepicker_start"]').val(),this.locale.format);
var f=c(this.container.find('input[name="daterangepicker_end"]').val(),this.locale.format);
if(j.isValid()&&f.isValid()){if(g&&f.isBefore(j)){j=f.clone()
}this.setStartDate(j);
this.setEndDate(f);
if(g){this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format))
}else{this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format))
}}this.updateView()
},formInputsFocused:function(g){this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass("active");
b(g.target).addClass("active");
var f=b(g.target).closest(".calendar").hasClass("right");
if(f){this.endDate=null;
this.setStartDate(this.startDate.clone());
this.updateView()
}},formInputsBlurred:function(g){if(!this.endDate){var h=this.container.find('input[name="daterangepicker_end"]').val();
var f=c(h,this.locale.format);
if(f.isValid()){this.setEndDate(f);
this.updateView()
}}},elementChanged:function(){if(!this.element.is("input")){return
}if(!this.element.val().length){return
}if(this.element.val().length<this.locale.format.length){return
}var f=this.element.val().split(this.locale.separator),g=null,e=null;
if(f.length===2){g=c(f[0],this.locale.format);
e=c(f[1],this.locale.format)
}if(this.singleDatePicker||g===null||e===null){g=c(this.element.val(),this.locale.format);
e=g
}if(!g.isValid()||!e.isValid()){return
}this.setStartDate(g);
this.setEndDate(e);
this.updateView()
},keydown:function(f){if((f.keyCode===9)||(f.keyCode===13)){this.hide()
}},updateElement:function(){if(this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput){this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format));
this.element.trigger("change")
}else{if(this.element.is("input")&&this.autoUpdateInput){this.element.val(this.startDate.format(this.locale.format));
this.element.trigger("change")
}}},remove:function(){this.container.remove();
this.element.off(".daterangepicker");
this.element.removeData()
}};
b.fn.daterangepicker=function(e,f){this.each(function(){var g=b(this);
if(g.data("daterangepicker")){g.data("daterangepicker").remove()
}g.data("daterangepicker",new a(g,e,f))
});
return this
};
return a
}));
/*! selectize.js - v0.12.4 | https://github.com/selectize/selectize.js | Apache License (v2) */
;
!function(e,c){"function"==typeof define&&define.amd?define("sifter",c):"object"==typeof exports?module.exports=c():e.Sifter=c()
}(this,function(){var t=function(e,c){this.items=e,this.settings=c||{diacritics:!0}
};
t.prototype.tokenize=function(f){if(f=p(String(f||"").toLowerCase()),!f||!f.length){return[]
}var e,x,w,v,u=[],h=f.split(/ +/);
for(e=0,x=h.length;
e<x;
e++){if(w=o(h[e]),this.settings.diacritics){for(v in l){l.hasOwnProperty(v)&&(w=w.replace(new RegExp(v,"g"),l[v]))
}}u.push({string:h[e],regex:new RegExp(w,"i")})
}return u
},t.prototype.iterator=function(f,e){var g;
g=n(f)?Array.prototype.forEach||function(u){for(var h=0,v=this.length;
h<v;
h++){u(this[h],h,this)
}}:function(h){for(var c in this){this.hasOwnProperty(c)&&h(this[c],c,this)
}},g.apply(f,[e])
},t.prototype.getScoreFunction=function(C,B){var A,z,y,x,w;
A=this,C=A.prepareSearch(C,B),y=C.tokens,z=C.options.fields,x=y.length,w=C.options.nesting;
var v=function(f,e){var h,g;
return f?(f=String(f||""),g=f.search(e.regex),g===-1?0:(h=e.string.length/f.length,0===g&&(h+=0.5),h)):0
},u=function(){var b=z.length;
return b?1===b?function(e,c){return v(q(c,z[0],w),e)
}:function(a,D){for(var h=0,e=0;
h<b;
h++){e+=v(q(D,z[h],w),a)
}return e/b
}:function(){return 0
}
}();
return x?1===x?function(b){return u(y[0],b)
}:"and"===C.options.conjunction?function(f){for(var e,h=0,g=0;
h<x;
h++){if(e=u(y[h],f),e<=0){return 0
}g+=e
}return g/x
}:function(f){for(var e=0,g=0;
e<x;
e++){g+=u(y[e],f)
}return g/x
}:function(){return 0
}
},t.prototype.getSortFunction=function(F,E){var D,C,B,A,z,y,x,w,v,u,b;
if(B=this,F=B.prepareSearch(F,E),b=!F.query&&E.sort_empty||E.sort,v=function(e,c){return"$score"===e?c.score:q(B.items[c.id],e,E.nesting)
},z=[],b){for(D=0,C=b.length;
D<C;
D++){(F.query||"$score"!==b[D].field)&&z.push(b[D])
}}if(F.query){for(u=!0,D=0,C=z.length;
D<C;
D++){if("$score"===z[D].field){u=!1;
break
}}u&&z.unshift({field:"$score",direction:"desc"})
}else{for(D=0,C=z.length;
D<C;
D++){if("$score"===z[D].field){z.splice(D,1);
break
}}}for(w=[],D=0,C=z.length;
D<C;
D++){w.push("desc"===z[D].direction?-1:1)
}return y=z.length,y?1===y?(A=z[0].field,x=w[0],function(e,f){return x*s(v(A,e),v(A,f))
}):function(g,I){var H,G,h;
for(H=0;
H<y;
H++){if(h=z[H].field,G=w[H]*s(v(h,g),v(h,I))){return G
}}return 0
}:null
},t.prototype.prepareSearch=function(g,c){if("object"==typeof g){return g
}c=r({},c);
var v=c.fields,u=c.sort,h=c.sort_empty;
return v&&!n(v)&&(c.fields=[v]),u&&!n(u)&&(c.sort=[u]),h&&!n(h)&&(c.sort_empty=[h]),{options:c,query:String(g||"").toLowerCase(),tokens:this.tokenize(g),total:0,items:[]}
},t.prototype.search=function(u,h){var z,y,x,w,v=this;
return y=this.prepareSearch(u,h),h=y.options,u=y.query,w=h.score||v.getScoreFunction(y),u.length?v.iterator(v.items,function(b,c){z=w(b),(h.filter===!1||z>0)&&y.items.push({score:z,id:c})
}):v.iterator(v.items,function(e,c){y.items.push({score:1,id:c})
}),x=v.getSortFunction(y,h),x&&y.items.sort(x),y.total=y.items.length,"number"==typeof h.limit&&(y.items=y.items.slice(0,h.limit)),y
};
var s=function(e,c){return"number"==typeof e&&"number"==typeof c?e>c?1:e<c?-1:0:(e=j(String(e||"")),c=j(String(c||"")),e>c?1:c>e?-1:0)
},r=function(h,g){var x,w,v,u;
for(x=1,w=arguments.length;
x<w;
x++){if(u=arguments[x]){for(v in u){u.hasOwnProperty(v)&&(h[v]=u[v])
}}}return h
},q=function(f,e,h){if(f&&e){if(!h){return f[e]
}for(var g=e.split(".");
g.length&&(f=f[g.shift()]);
){}return f
}},p=function(b){return(b+"").replace(/^\s+|\s+$|/g,"")
},o=function(b){return(b+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")
},n=Array.isArray||"undefined"!=typeof $&&$.isArray||function(b){return"[object Array]"===Object.prototype.toString.call(b)
},l={a:"[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",b:"[b␢βΒB฿𐌁ᛒ]",c:"[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",d:"[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",e:"[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",f:"[fƑƒḞḟ]",g:"[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",h:"[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",i:"[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",j:"[jȷĴĵɈɉʝɟʲ]",k:"[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",l:"[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",n:"[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",o:"[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",p:"[pṔṕṖṗⱣᵽƤƥᵱ]",q:"[qꝖꝗʠɊɋꝘꝙq̃]",r:"[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",s:"[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",t:"[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",u:"[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",v:"[vṼṽṾṿƲʋꝞꝟⱱʋ]",w:"[wẂẃẀẁŴŵẄẅẆẇẈẉ]",x:"[xẌẍẊẋχ]",y:"[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",z:"[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"},j=function(){var u,h,z,y,x="",w={};
for(z in l){if(l.hasOwnProperty(z)){for(y=l[z].substring(2,l[z].length-1),x+=y,u=0,h=y.length;
u<h;
u++){w[y.charAt(u)]=z
}}}var v=new RegExp("["+x+"]","g");
return function(b){return b.replace(v,function(c){return w[c]
}).toLowerCase()
}
}();
return t
}),function(e,c){"function"==typeof define&&define.amd?define("microplugin",c):"object"==typeof exports?module.exports=c():e.MicroPlugin=c()
}(this,function(){var e={};
e.mixin=function(b){b.plugins={},b.prototype.initializePlugins=function(h){var p,o,n,l=this,j=[];
if(l.plugins={names:[],settings:{},requested:{},loaded:{}},c.isArray(h)){for(p=0,o=h.length;
p<o;
p++){"string"==typeof h[p]?j.push(h[p]):(l.plugins.settings[h[p].name]=h[p].options,j.push(h[p].name))
}}else{if(h){for(n in h){h.hasOwnProperty(n)&&(l.plugins.settings[n]=h[n],j.push(n))
}}}for(;
j.length;
){l.require(j.shift())
}},b.prototype.loadPlugin=function(a){var h=this,g=h.plugins,f=b.plugins[a];
if(!b.plugins.hasOwnProperty(a)){throw new Error('Unable to find "'+a+'" plugin')
}g.requested[a]=!0,g.loaded[a]=f.fn.apply(h,[h.plugins.settings[a]||{}]),g.names.push(a)
},b.prototype.require=function(g){var f=this,h=f.plugins;
if(!f.plugins.loaded.hasOwnProperty(g)){if(h.requested[g]){throw new Error('Plugin has circular dependency ("'+g+'")')
}f.loadPlugin(g)
}return h.loaded[g]
},b.define=function(a,f){b.plugins[a]={name:a,fn:f}
}
};
var c={isArray:Array.isArray||function(b){return"[object Array]"===Object.prototype.toString.call(b)
}};
return e
}),function(e,c){"function"==typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],c):"object"==typeof exports?module.exports=c(require("jquery"),require("sifter"),require("microplugin")):e.Selectize=c(e.jQuery,e.Sifter,e.MicroPlugin)
}(this,function(aA,az,ay){var ax=function(f,e){if("string"!=typeof e||e.length){var h="string"==typeof e?new RegExp(e,"i"):e,g=function(l){var c=0;
if(3===l.nodeType){var s=l.data.search(h);
if(s>=0&&l.data.length>0){var r=l.data.match(h),q=document.createElement("span");
q.className="highlight";
var p=l.splitText(s),o=(p.splitText(r[0].length),p.cloneNode(!0));
q.appendChild(o),p.parentNode.replaceChild(q,p),c=1
}}else{if(1===l.nodeType&&l.childNodes&&!/(script|style)/i.test(l.tagName)){for(var n=0;
n<l.childNodes.length;
++n){n+=g(l.childNodes[n])
}}}return c
};
return f.each(function(){g(this)
})
}};
aA.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;
var b=this.parentNode;
b.replaceChild(this.firstChild,this),b.normalize()
}).end()
};
var aw=function(){};
aw.prototype={on:function(e,c){this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(c)
},off:function(f,e){var g=arguments.length;
return 0===g?delete this._events:1===g?delete this._events[f]:(this._events=this._events||{},void (f in this._events!=!1&&this._events[f].splice(this._events[f].indexOf(e),1)))
},trigger:function(e){if(this._events=this._events||{},e in this._events!=!1){for(var c=0;
c<this._events[e].length;
c++){this._events[e][c].apply(this,Array.prototype.slice.call(arguments,1))
}}}},aw.mixin=function(f){for(var e=["on","off","trigger"],g=0;
g<e.length;
g++){f.prototype[e[g]]=aw.prototype[e[g]]
}};
var av=/Mac/.test(navigator.userAgent),au=65,at=13,ar=27,aq=37,ap=38,ao=80,an=39,am=40,al=78,ak=8,aj=46,ai=16,ah=av?91:17,ag=av?18:17,af=9,ae=1,ad=2,ac=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,ab=function(b){return"undefined"!=typeof b
},aa=function(b){return"undefined"==typeof b||null===b?null:"boolean"==typeof b?b?"1":"0":b+""
},Z=function(b){return(b+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")
},Y={};
Y.before=function(f,e,h){var g=f[e];
f[e]=function(){return h.apply(f,arguments),g.apply(f,arguments)
}
},Y.after=function(f,e,h){var g=f[e];
f[e]=function(){var a=g.apply(f,arguments);
return h.apply(f,arguments),a
}
};
var X=function(e){var c=!1;
return function(){c||(c=!0,e.apply(this,arguments))
}
},W=function(f,e){var g;
return function(){var b=this,a=arguments;
window.clearTimeout(g),g=window.setTimeout(function(){f.apply(b,a)
},e)
}
},V=function(h,g,o){var n,l=h.trigger,j={};
h.trigger=function(){var a=arguments[0];
return g.indexOf(a)===-1?l.apply(h,arguments):void (j[a]=arguments)
},o.apply(h,[]),h.trigger=l;
for(n in j){j.hasOwnProperty(n)&&l.apply(h,j[n])
}},U=function(f,e,h,g){f.on(e,h,function(a){for(var j=a.target;
j&&j.parentNode!==f[0];
){j=j.parentNode
}return a.currentTarget=j,g.apply(this,[a])
})
},T=function(f){var e={};
if("selectionStart" in f){e.start=f.selectionStart,e.length=f.selectionEnd-e.start
}else{if(document.selection){f.focus();
var h=document.selection.createRange(),g=document.selection.createRange().text.length;
h.moveStart("character",-f.value.length),e.start=h.text.length-g,e.length=g
}}return e
},S=function(h,g,o){var n,l,j={};
if(o){for(n=0,l=o.length;
n<l;
n++){j[o[n]]=h.css(o[n])
}}else{j=h.css()
}g.css(j)
},R=function(a,h){if(!a){return 0
}var g=aA("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(a).appendTo("body");
S(h,g,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);
var f=g.width();
return g.remove(),f
},Q=function(f){var e=null,g=function(u,t){var s,r,q,p,o,n,b,a;
u=u||window.event||{},t=t||{},u.metaKey||u.altKey||(t.force||f.data("grow")!==!1)&&(s=f.val(),u.type&&"keydown"===u.type.toLowerCase()&&(r=u.keyCode,q=r>=97&&r<=122||r>=65&&r<=90||r>=48&&r<=57||32===r,r===aj||r===ak?(a=T(f[0]),a.length?s=s.substring(0,a.start)+s.substring(a.start+a.length):r===ak&&a.start?s=s.substring(0,a.start-1)+s.substring(a.start+1):r===aj&&"undefined"!=typeof a.start&&(s=s.substring(0,a.start)+s.substring(a.start+1))):q&&(n=u.shiftKey,b=String.fromCharCode(u.keyCode),b=n?b.toUpperCase():b.toLowerCase(),s+=b)),p=f.attr("placeholder"),!s&&p&&(s=p),o=R(s,f)+4,o!==e&&(e=o,f.width(o),f.triggerHandler("resize")))
};
f.on("keydown keyup update blur",g),g()
},P=function(e){var c=document.createElement("div");
return c.appendChild(e.cloneNode(!0)),c.innerHTML
},O=function(f,e){e||(e={});
var g="Selectize";
console.error(g+": "+f),e.explanation&&(console.group&&console.group(),console.error(e.explanation),console.group&&console.groupEnd())
},N=function(r,q){var p,o,n,l,b=this;
l=r[0],l.selectize=b;
var a=window.getComputedStyle&&window.getComputedStyle(l,null);
if(n=a?a.getPropertyValue("direction"):l.currentStyle&&l.currentStyle.direction,n=n||r.parents("[dir]:first").attr("dir")||"",aA.extend(b,{order:0,settings:q,$input:r,tabIndex:r.attr("tabindex")||"",tagType:"select"===l.tagName.toLowerCase()?ae:ad,rtl:/rtl/i.test(n),eventNS:".selectize"+ ++N.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:r.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===q.loadThrottle?b.onSearchChange:W(b.onSearchChange,q.loadThrottle)}),b.sifter=new az(this.options,{diacritics:q.diacritics}),b.settings.options){for(p=0,o=b.settings.options.length;
p<o;
p++){b.registerOption(b.settings.options[p])
}delete b.settings.options
}if(b.settings.optgroups){for(p=0,o=b.settings.optgroups.length;
p<o;
p++){b.registerOptionGroup(b.settings.optgroups[p])
}delete b.settings.optgroups
}b.settings.mode=b.settings.mode||(1===b.settings.maxItems?"single":"multi"),"boolean"!=typeof b.settings.hideSelected&&(b.settings.hideSelected="multi"===b.settings.mode),b.initializePlugins(b.settings.plugins),b.setupCallbacks(),b.setupTemplates(),b.setup()
};
return aw.mixin(N),"undefined"!=typeof ay?ay.mixin(N):O("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'}),aA.extend(N.prototype,{setup:function(){var F,E,D,C,B,A,z,y,x,v,t=this,s=t.settings,r=t.eventNS,f=aA(window),a=aA(document),H=t.$input;
if(z=t.settings.mode,y=H.attr("class")||"",F=aA("<div>").addClass(s.wrapperClass).addClass(y).addClass(z),E=aA("<div>").addClass(s.inputClass).addClass("items").appendTo(F),D=aA('<input type="text" autocomplete="off" />').appendTo(E).attr("tabindex",H.is(":disabled")?"-1":t.tabIndex),A=aA(s.dropdownParent||F),C=aA("<div>").addClass(s.dropdownClass).addClass(z).hide().appendTo(A),B=aA("<div>").addClass(s.dropdownContentClass).appendTo(C),(v=H.attr("id"))&&(D.attr("id",v+"-selectized"),aA("label[for='"+v+"']").attr("for",v+"-selectized")),t.settings.copyClassesToDropdown&&C.addClass(y),F.css({width:H[0].style.width}),t.plugins.names.length&&(x="plugin-"+t.plugins.names.join(" plugin-"),F.addClass(x),C.addClass(x)),(null===s.maxItems||s.maxItems>1)&&t.tagType===ae&&H.attr("multiple","multiple"),t.settings.placeholder&&D.attr("placeholder",s.placeholder),!t.settings.splitOn&&t.settings.delimiter){var G=t.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");
t.settings.splitOn=new RegExp("\\s*"+G+"+\\s*")
}H.attr("autocorrect")&&D.attr("autocorrect",H.attr("autocorrect")),H.attr("autocapitalize")&&D.attr("autocapitalize",H.attr("autocapitalize")),t.$wrapper=F,t.$control=E,t.$control_input=D,t.$dropdown=C,t.$dropdown_content=B,C.on("mouseenter","[data-selectable]",function(){return t.onOptionHover.apply(t,arguments)
}),C.on("mousedown click","[data-selectable]",function(){return t.onOptionSelect.apply(t,arguments)
}),U(E,"mousedown","*:not(input)",function(){return t.onItemSelect.apply(t,arguments)
}),Q(D),E.on({mousedown:function(){return t.onMouseDown.apply(t,arguments)
},click:function(){return t.onClick.apply(t,arguments)
}}),D.on({mousedown:function(b){b.stopPropagation()
},keydown:function(){return t.onKeyDown.apply(t,arguments)
},keyup:function(){return t.onKeyUp.apply(t,arguments)
},keypress:function(){return t.onKeyPress.apply(t,arguments)
},resize:function(){t.positionDropdown.apply(t,[])
},blur:function(){return t.onBlur.apply(t,arguments)
},focus:function(){return t.ignoreBlur=!1,t.onFocus.apply(t,arguments)
},paste:function(){return t.onPaste.apply(t,arguments)
}}),a.on("keydown"+r,function(b){t.isCmdDown=b[av?"metaKey":"ctrlKey"],t.isCtrlDown=b[av?"altKey":"ctrlKey"],t.isShiftDown=b.shiftKey
}),a.on("keyup"+r,function(b){b.keyCode===ag&&(t.isCtrlDown=!1),b.keyCode===ai&&(t.isShiftDown=!1),b.keyCode===ah&&(t.isCmdDown=!1)
}),a.on("mousedown"+r,function(b){if(t.isFocused){if(b.target===t.$dropdown[0]||b.target.parentNode===t.$dropdown[0]){return !1
}t.$control.has(b.target).length||b.target===t.$control[0]||t.blur(b.target)
}}),f.on(["scroll"+r,"resize"+r].join(" "),function(){t.isOpen&&t.positionDropdown.apply(t,arguments)
}),f.on("mousemove"+r,function(){t.ignoreHover=!1
}),this.revertSettings={$children:H.children().detach(),tabindex:H.attr("tabindex")},H.attr("tabindex",-1).hide().after(t.$wrapper),aA.isArray(s.items)&&(t.setValue(s.items),delete s.items),ac&&H.on("invalid"+r,function(b){b.preventDefault(),t.isInvalid=!0,t.refreshState()
}),t.updateOriginalInput(),t.refreshItems(),t.refreshState(),t.updatePlaceholder(),t.isSetup=!0,H.is(":disabled")&&t.disable(),t.on("change",this.onChange),H.data("selectize",t),H.addClass("selectized"),t.trigger("initialize"),s.preload===!0&&t.onSearchChange("")
},setupTemplates:function(){var a=this,h=a.settings.labelField,g=a.settings.optgroupLabelField,f={optgroup:function(b){return'<div class="optgroup">'+b.html+"</div>"
},optgroup_header:function(e,c){return'<div class="optgroup-header">'+c(e[g])+"</div>"
},option:function(e,c){return'<div class="option">'+c(e[h])+"</div>"
},item:function(e,c){return'<div class="item">'+c(e[h])+"</div>"
},option_create:function(e,c){return'<div class="create">Add <strong>'+c(e.input)+"</strong>&hellip;</div>"
}};
a.settings.render=aA.extend({},f,a.settings.render)
},setupCallbacks:function(){var f,e,g={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};
for(f in g){g.hasOwnProperty(f)&&(e=this.settings[g[f]],e&&this.on(f,e))
}},onClick:function(e){var c=this;
c.isFocused||(c.focus(),e.preventDefault())
},onMouseDown:function(a){var f=this,e=a.isDefaultPrevented();
aA(a.target);
if(f.isFocused){if(a.target!==f.$control_input[0]){return"single"===f.settings.mode?f.isOpen?f.close():f.open():e||f.setActiveItem(null),!1
}}else{e||window.setTimeout(function(){f.focus()
},0)
}},onChange:function(){this.$input.trigger("change")
},onPaste:function(a){var e=this;
return e.isFull()||e.isInputHidden||e.isLocked?void a.preventDefault():void (e.settings.splitOn&&setTimeout(function(){var c=e.$control_input.val();
if(c.match(e.settings.splitOn)){for(var j=aA.trim(c).split(e.settings.splitOn),h=0,g=j.length;
h<g;
h++){e.createItem(j[h])
}}},0))
},onKeyPress:function(e){if(this.isLocked){return e&&e.preventDefault()
}var c=String.fromCharCode(e.keyCode||e.which);
return this.settings.create&&"multi"===this.settings.mode&&c===this.settings.delimiter?(this.createItem(),e.preventDefault(),!1):void 0
},onKeyDown:function(f){var e=(f.target===this.$control_input[0],this);
if(e.isLocked){return void (f.keyCode!==af&&f.preventDefault())
}switch(f.keyCode){case au:if(e.isCmdDown){return void e.selectAll()
}break;
case ar:return void (e.isOpen&&(f.preventDefault(),f.stopPropagation(),e.close()));
case al:if(!f.ctrlKey||f.altKey){break
}case am:if(!e.isOpen&&e.hasOptions){e.open()
}else{if(e.$activeOption){e.ignoreHover=!0;
var h=e.getAdjacentOption(e.$activeOption,1);
h.length&&e.setActiveOption(h,!0,!0)
}}return void f.preventDefault();
case ao:if(!f.ctrlKey||f.altKey){break
}case ap:if(e.$activeOption){e.ignoreHover=!0;
var g=e.getAdjacentOption(e.$activeOption,-1);
g.length&&e.setActiveOption(g,!0,!0)
}return void f.preventDefault();
case at:return void (e.isOpen&&e.$activeOption&&(e.onOptionSelect({currentTarget:e.$activeOption}),f.preventDefault()));
case aq:return void e.advanceSelection(-1,f);
case an:return void e.advanceSelection(1,f);
case af:return e.settings.selectOnTab&&e.isOpen&&e.$activeOption&&(e.onOptionSelect({currentTarget:e.$activeOption}),e.isFull()||f.preventDefault()),void (e.settings.create&&e.createItem()&&f.preventDefault());
case ak:case aj:return void e.deleteSelection(f)
}return !e.isFull()&&!e.isInputHidden||(av?f.metaKey:f.ctrlKey)?void 0:void f.preventDefault()
},onKeyUp:function(f){var e=this;
if(e.isLocked){return f&&f.preventDefault()
}var g=e.$control_input.val()||"";
e.lastValue!==g&&(e.lastValue=g,e.onSearchChange(g),e.refreshOptions(),e.trigger("type",g))
},onSearchChange:function(f){var e=this,g=e.settings.load;
g&&(e.loadedSearches.hasOwnProperty(f)||(e.loadedSearches[f]=!0,e.load(function(a){g.apply(e,[f,a])
})))
},onFocus:function(f){var e=this,g=e.isFocused;
return e.isDisabled?(e.blur(),f&&f.preventDefault(),!1):void (e.ignoreFocus||(e.isFocused=!0,"focus"===e.settings.preload&&e.onSearchChange(""),g||e.trigger("focus"),e.$activeItems.length||(e.showInput(),e.setActiveItem(null),e.refreshOptions(!!e.settings.openOnFocus)),e.refreshState()))
},onBlur:function(f,e){var h=this;
if(h.isFocused&&(h.isFocused=!1,!h.ignoreFocus)){if(!h.ignoreBlur&&document.activeElement===h.$dropdown_content[0]){return h.ignoreBlur=!0,void h.onFocus(f)
}var g=function(){h.close(),h.setTextboxValue(""),h.setActiveItem(null),h.setActiveOption(null),h.setCaret(h.items.length),h.refreshState(),e&&e.focus&&e.focus(),h.ignoreFocus=!1,h.trigger("blur")
};
h.ignoreFocus=!0,h.settings.create&&h.settings.createOnBlur?h.createItem(null,!1,g):g()
}},onOptionHover:function(b){this.ignoreHover||this.setActiveOption(b.currentTarget,!1)
},onOptionSelect:function(a){var h,g,f=this;
a.preventDefault&&(a.preventDefault(),a.stopPropagation()),g=aA(a.currentTarget),g.hasClass("create")?f.createItem(null,function(){f.settings.closeAfterSelect&&f.close()
}):(h=g.attr("data-value"),"undefined"!=typeof h&&(f.lastQuery=null,f.setTextboxValue(""),f.addItem(h),f.settings.closeAfterSelect?f.close():!f.settings.hideSelected&&a.type&&/mouse/.test(a.type)&&f.setActiveOption(f.getOption(h))))
},onItemSelect:function(e){var c=this;
c.isLocked||"multi"===c.settings.mode&&(e.preventDefault(),c.setActiveItem(e.currentTarget,e))
},load:function(f){var e=this,g=e.$wrapper.addClass(e.settings.loadingClass);
e.loading++,f.apply(e,[function(b){e.loading=Math.max(e.loading-1,0),b&&b.length&&(e.addOption(b),e.refreshOptions(e.isFocused&&!e.isInputHidden)),e.loading||g.removeClass(e.settings.loadingClass),e.trigger("load",b)
}])
},setTextboxValue:function(f){var e=this.$control_input,g=e.val()!==f;
g&&(e.val(f).triggerHandler("update"),this.lastValue=f)
},getValue:function(){return this.tagType===ae&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)
},setValue:function(f,e){var g=e?[]:["change"];
V(this,g,function(){this.clear(e),this.addItems(f,e)
})
},setActiveItem:function(w,v){var u,t,s,r,q,p,o,n,a=this;
if("single"!==a.settings.mode){if(w=aA(w),!w.length){return aA(a.$activeItems).removeClass("active"),a.$activeItems=[],void (a.isFocused&&a.showInput())
}if(u=v&&v.type.toLowerCase(),"mousedown"===u&&a.isShiftDown&&a.$activeItems.length){for(n=a.$control.children(".active:last"),r=Array.prototype.indexOf.apply(a.$control[0].childNodes,[n[0]]),q=Array.prototype.indexOf.apply(a.$control[0].childNodes,[w[0]]),r>q&&(o=r,r=q,q=o),t=r;
t<=q;
t++){p=a.$control[0].childNodes[t],a.$activeItems.indexOf(p)===-1&&(aA(p).addClass("active"),a.$activeItems.push(p))
}v.preventDefault()
}else{"mousedown"===u&&a.isCtrlDown||"keydown"===u&&this.isShiftDown?w.hasClass("active")?(s=a.$activeItems.indexOf(w[0]),a.$activeItems.splice(s,1),w.removeClass("active")):a.$activeItems.push(w.addClass("active")[0]):(aA(a.$activeItems).removeClass("active"),a.$activeItems=[w.addClass("active")[0]])
}a.hideInput(),this.isFocused||a.focus()
}},setActiveOption:function(t,s,r){var q,p,o,n,l,a=this;
a.$activeOption&&a.$activeOption.removeClass("active"),a.$activeOption=null,t=aA(t),t.length&&(a.$activeOption=t.addClass("active"),!s&&ab(s)||(q=a.$dropdown_content.height(),p=a.$activeOption.outerHeight(!0),s=a.$dropdown_content.scrollTop()||0,o=a.$activeOption.offset().top-a.$dropdown_content.offset().top+s,n=o,l=o-q+p,o+p>q+s?a.$dropdown_content.stop().animate({scrollTop:l},r?a.settings.scrollDuration:0):o<s&&a.$dropdown_content.stop().animate({scrollTop:n},r?a.settings.scrollDuration:0)))
},selectAll:function(){var b=this;
"single"!==b.settings.mode&&(b.$activeItems=Array.prototype.slice.apply(b.$control.children(":not(input)").addClass("active")),b.$activeItems.length&&(b.hideInput(),b.close()),b.focus())
},hideInput:function(){var b=this;
b.setTextboxValue(""),b.$control_input.css({opacity:0,position:"absolute",left:b.rtl?10000:-10000}),b.isInputHidden=!0
},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1
},focus:function(){var b=this;
b.isDisabled||(b.ignoreFocus=!0,b.$control_input[0].focus(),window.setTimeout(function(){b.ignoreFocus=!1,b.onFocus()
},0))
},blur:function(b){this.$control_input[0].blur(),this.onBlur(null,b)
},getScoreFunction:function(b){return this.sifter.getScoreFunction(b,this.getSearchOptions())
},getSearchOptions:function(){var e=this.settings,c=e.sortField;
return"string"==typeof c&&(c=[{field:c}]),{fields:e.searchField,conjunction:e.searchConjunction,sort:c}
},search:function(a){var q,p,o,n=this,l=n.settings,j=this.getSearchOptions();
if(l.score&&(o=n.settings.score.apply(this,[a]),"function"!=typeof o)){throw new Error('Selectize "score" setting must be a function that returns a function')
}if(a!==n.lastQuery?(n.lastQuery=a,p=n.sifter.search(a,aA.extend(j,{score:o})),n.currentResults=p):p=aA.extend(!0,{},n.currentResults),l.hideSelected){for(q=p.items.length-1;
q>=0;
q--){n.items.indexOf(aa(p.items[q].id))!==-1&&p.items.splice(q,1)
}}return p
},refreshOptions:function(aG){var aF,aE,aD,aC,aB,M,L,K,J,I,H,G,F,E,D,C;
"undefined"==typeof aG&&(aG=!0);
var B=this,A=aA.trim(B.$control_input.val()),z=B.search(A),y=B.$dropdown_content,a=B.$activeOption&&aa(B.$activeOption.attr("data-value"));
for(aC=z.items.length,"number"==typeof B.settings.maxOptions&&(aC=Math.min(aC,B.settings.maxOptions)),aB={},M=[],aF=0;
aF<aC;
aF++){for(L=B.options[z.items[aF].id],K=B.render("option",L),J=L[B.settings.optgroupField]||"",I=aA.isArray(J)?J:[J],aE=0,aD=I&&I.length;
aE<aD;
aE++){J=I[aE],B.optgroups.hasOwnProperty(J)||(J=""),aB.hasOwnProperty(J)||(aB[J]=document.createDocumentFragment(),M.push(J)),aB[J].appendChild(K)
}}for(this.settings.lockOptgroupOrder&&M.sort(function(f,e){var h=B.optgroups[f].$order||0,g=B.optgroups[e].$order||0;
return h-g
}),H=document.createDocumentFragment(),aF=0,aC=M.length;
aF<aC;
aF++){J=M[aF],B.optgroups.hasOwnProperty(J)&&aB[J].childNodes.length?(G=document.createDocumentFragment(),G.appendChild(B.render("optgroup_header",B.optgroups[J])),G.appendChild(aB[J]),H.appendChild(B.render("optgroup",aA.extend({},B.optgroups[J],{html:P(G),dom:G})))):H.appendChild(aB[J])
}if(y.html(H),B.settings.highlight&&z.query.length&&z.tokens.length){for(y.removeHighlight(),aF=0,aC=z.tokens.length;
aF<aC;
aF++){ax(y,z.tokens[aF].regex)
}}if(!B.settings.hideSelected){for(aF=0,aC=B.items.length;
aF<aC;
aF++){B.getOption(B.items[aF]).addClass("selected")
}}F=B.canCreate(A),F&&(y.prepend(B.render("option_create",{input:A})),C=aA(y[0].childNodes[0])),B.hasOptions=z.items.length>0||F,B.hasOptions?(z.items.length>0?(D=a&&B.getOption(a),D&&D.length?E=D:"single"===B.settings.mode&&B.items.length&&(E=B.getOption(B.items[0])),E&&E.length||(E=C&&!B.settings.addPrecedence?B.getAdjacentOption(C,1):y.find("[data-selectable]:first"))):E=C,B.setActiveOption(E),aG&&!B.isOpen&&B.open()):(B.setActiveOption(null),aG&&B.isOpen&&B.close())
},addOption:function(a){var l,j,h,g=this;
if(aA.isArray(a)){for(l=0,j=a.length;
l<j;
l++){g.addOption(a[l])
}}else{(h=g.registerOption(a))&&(g.userOptions[h]=!0,g.lastQuery=null,g.trigger("option_add",h,a))
}},registerOption:function(e){var c=aa(e[this.settings.valueField]);
return"undefined"!=typeof c&&null!==c&&!this.options.hasOwnProperty(c)&&(e.$order=e.$order||++this.order,this.options[c]=e,c)
},registerOptionGroup:function(e){var c=aa(e[this.settings.optgroupValueField]);
return !!c&&(e.$order=e.$order||++this.order,this.optgroups[c]=e,c)
},addOptionGroup:function(e,c){c[this.settings.optgroupValueField]=e,(e=this.registerOptionGroup(c))&&this.trigger("optgroup_add",e,c)
},removeOptionGroup:function(b){this.optgroups.hasOwnProperty(b)&&(delete this.optgroups[b],this.renderCache={},this.trigger("optgroup_remove",b))
},clearOptionGroups:function(){this.optgroups={},this.renderCache={},this.trigger("optgroup_clear")
},updateOption:function(u,t){var s,r,q,p,o,n,l,a=this;
if(u=aa(u),q=aa(t[a.settings.valueField]),null!==u&&a.options.hasOwnProperty(u)){if("string"!=typeof q){throw new Error("Value must be set in option data")
}l=a.options[u].$order,q!==u&&(delete a.options[u],p=a.items.indexOf(u),p!==-1&&a.items.splice(p,1,q)),t.$order=t.$order||l,a.options[q]=t,o=a.renderCache.item,n=a.renderCache.option,o&&(delete o[u],delete o[q]),n&&(delete n[u],delete n[q]),a.items.indexOf(q)!==-1&&(s=a.getItem(u),r=aA(a.render("item",t)),s.hasClass("active")&&r.addClass("active"),s.replaceWith(r)),a.lastQuery=null,a.isOpen&&a.refreshOptions(!1)
}},removeOption:function(g,f){var l=this;
g=aa(g);
var j=l.renderCache.item,h=l.renderCache.option;
j&&delete j[g],h&&delete h[g],delete l.userOptions[g],delete l.options[g],l.lastQuery=null,l.trigger("option_remove",g),l.removeItem(g,f)
},clearOptions:function(){var b=this;
b.loadedSearches={},b.userOptions={},b.renderCache={},b.options=b.sifter.items={},b.lastQuery=null,b.trigger("option_clear"),b.clear()
},getOption:function(b){return this.getElementWithValue(b,this.$dropdown_content.find("[data-selectable]"))
},getAdjacentOption:function(a,h){var g=this.$dropdown.find("[data-selectable]"),f=g.index(a)+h;
return f>=0&&f<g.length?g.eq(f):aA()
},getElementWithValue:function(a,h){if(a=aa(a),"undefined"!=typeof a&&null!==a){for(var g=0,f=h.length;
g<f;
g++){if(h[g].getAttribute("data-value")===a){return aA(h[g])
}}}return aA()
},getItem:function(b){return this.getElementWithValue(b,this.$control.children())
},addItems:function(a,l){for(var j=aA.isArray(a)?a:[a],h=0,g=j.length;
h<g;
h++){this.isPending=h<g-1,this.addItem(j[h],l)
}},addItem:function(a,f){var e=f?[]:["change"];
V(this,e,function(){var q,p,o,n,l,c=this,b=c.settings.mode;
return a=aa(a),c.items.indexOf(a)!==-1?void ("single"===b&&c.close()):void (c.options.hasOwnProperty(a)&&("single"===b&&c.clear(f),"multi"===b&&c.isFull()||(q=aA(c.render("item",c.options[a])),l=c.isFull(),c.items.splice(c.caretPos,0,a),c.insertAtCaret(q),(!c.isPending||!l&&c.isFull())&&c.refreshState(),c.isSetup&&(o=c.$dropdown_content.find("[data-selectable]"),c.isPending||(p=c.getOption(a),n=c.getAdjacentOption(p,1).attr("data-value"),c.refreshOptions(c.isFocused&&"single"!==b),n&&c.setActiveOption(c.getOption(n))),!o.length||c.isFull()?c.close():c.positionDropdown(),c.updatePlaceholder(),c.trigger("item_add",a,q),c.updateOriginalInput({silent:f})))))
})
},removeItem:function(a,o){var n,l,j,h=this;
n=a instanceof aA?a:h.getItem(a),a=aa(n.attr("data-value")),l=h.items.indexOf(a),l!==-1&&(n.remove(),n.hasClass("active")&&(j=h.$activeItems.indexOf(n[0]),h.$activeItems.splice(j,1)),h.items.splice(l,1),h.lastQuery=null,!h.settings.persist&&h.userOptions.hasOwnProperty(a)&&h.removeOption(a,o),l<h.caretPos&&h.setCaret(h.caretPos-1),h.refreshState(),h.updatePlaceholder(),h.updateOriginalInput({silent:o}),h.positionDropdown(),h.trigger("item_remove",a,n))
},createItem:function(a,r){var q=this,p=q.caretPos;
a=a||aA.trim(q.$control_input.val()||"");
var o=arguments[arguments.length-1];
if("function"!=typeof o&&(o=function(){}),"boolean"!=typeof r&&(r=!0),!q.canCreate(a)){return o(),!1
}q.lock();
var n="function"==typeof q.settings.create?this.settings.create:function(e){var c={};
return c[q.settings.labelField]=e,c[q.settings.valueField]=e,c
},l=X(function(e){if(q.unlock(),!e||"object"!=typeof e){return o()
}var c=aa(e[q.settings.valueField]);
return"string"!=typeof c?o():(q.setTextboxValue(""),q.addOption(e),q.setCaret(p),q.addItem(c),q.refreshOptions(r&&"single"!==q.settings.mode),void o(e))
}),j=n.apply(this,[a,l]);
return"undefined"!=typeof j&&l(j),!0
},refreshItems:function(){this.lastQuery=null,this.isSetup&&this.addItem(this.items),this.refreshState(),this.updateOriginalInput()
},refreshState:function(){this.refreshValidityState(),this.refreshClasses()
},refreshValidityState:function(){if(!this.isRequired){return !1
}var b=!this.items.length;
this.isInvalid=b,this.$control_input.prop("required",b),this.$input.prop("required",!b)
},refreshClasses:function(){var a=this,f=a.isFull(),e=a.isLocked;
a.$wrapper.toggleClass("rtl",a.rtl),a.$control.toggleClass("focus",a.isFocused).toggleClass("disabled",a.isDisabled).toggleClass("required",a.isRequired).toggleClass("invalid",a.isInvalid).toggleClass("locked",e).toggleClass("full",f).toggleClass("not-full",!f).toggleClass("input-active",a.isFocused&&!a.isInputHidden).toggleClass("dropdown-active",a.isOpen).toggleClass("has-options",!aA.isEmptyObject(a.options)).toggleClass("has-items",a.items.length>0),a.$control_input.data("grow",!f&&!e)
},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems
},updateOriginalInput:function(h){var g,o,n,l,j=this;
if(h=h||{},j.tagType===ae){for(n=[],g=0,o=j.items.length;
g<o;
g++){l=j.options[j.items[g]][j.settings.labelField]||"",n.push('<option value="'+Z(j.items[g])+'" selected="selected">'+Z(l)+"</option>")
}n.length||this.$input.attr("multiple")||n.push('<option value="" selected="selected"></option>'),j.$input.html(n.join(""))
}else{j.$input.val(j.getValue()),j.$input.attr("value",j.$input.val())
}j.isSetup&&(h.silent||j.trigger("change",j.$input.val()))
},updatePlaceholder:function(){if(this.settings.placeholder){var b=this.$control_input;
this.items.length?b.removeAttr("placeholder"):b.attr("placeholder",this.settings.placeholder),b.triggerHandler("update",{force:!0})
}},open:function(){var b=this;
b.isLocked||b.isOpen||"multi"===b.settings.mode&&b.isFull()||(b.focus(),b.isOpen=!0,b.refreshState(),b.$dropdown.css({visibility:"hidden",display:"block"}),b.positionDropdown(),b.$dropdown.css({visibility:"visible"}),b.trigger("dropdown_open",b.$dropdown))
},close:function(){var e=this,c=e.isOpen;
"single"===e.settings.mode&&e.items.length&&(e.hideInput(),e.$control_input.blur()),e.isOpen=!1,e.$dropdown.hide(),e.setActiveOption(null),e.refreshState(),c&&e.trigger("dropdown_close",e.$dropdown)
},positionDropdown:function(){var e=this.$control,c="body"===this.settings.dropdownParent?e.offset():e.position();
c.top+=e.outerHeight(!0),this.$dropdown.css({width:e.outerWidth(),top:c.top,left:c.left})
},clear:function(e){var c=this;
c.items.length&&(c.$control.children(":not(input)").remove(),c.items=[],c.lastQuery=null,c.setCaret(0),c.setActiveItem(null),c.updatePlaceholder(),c.updateOriginalInput({silent:e}),c.refreshState(),c.showInput(),c.trigger("clear"))
},insertAtCaret:function(a){var e=Math.min(this.caretPos,this.items.length);
0===e?this.$control.prepend(a):aA(this.$control[0].childNodes[e]).before(a),this.setCaret(e+1)
},deleteSelection:function(w){var v,u,t,s,r,q,p,o,n,a=this;
if(t=w&&w.keyCode===ak?-1:1,s=T(a.$control_input[0]),a.$activeOption&&!a.settings.hideSelected&&(p=a.getAdjacentOption(a.$activeOption,-1).attr("data-value")),r=[],a.$activeItems.length){for(n=a.$control.children(".active:"+(t>0?"last":"first")),q=a.$control.children(":not(input)").index(n),t>0&&q++,v=0,u=a.$activeItems.length;
v<u;
v++){r.push(aA(a.$activeItems[v]).attr("data-value"))
}w&&(w.preventDefault(),w.stopPropagation())
}else{(a.isFocused||"single"===a.settings.mode)&&a.items.length&&(t<0&&0===s.start&&0===s.length?r.push(a.items[a.caretPos-1]):t>0&&s.start===a.$control_input.val().length&&r.push(a.items[a.caretPos]))
}if(!r.length||"function"==typeof a.settings.onDelete&&a.settings.onDelete.apply(a,[r])===!1){return !1
}for("undefined"!=typeof q&&a.setCaret(q);
r.length;
){a.removeItem(r.pop())
}return a.showInput(),a.positionDropdown(),a.refreshOptions(!0),p&&(o=a.getOption(p),o.length&&a.setActiveOption(o)),!0
},advanceSelection:function(t,s){var r,q,p,o,n,l,j=this;
0!==t&&(j.rtl&&(t*=-1),r=t>0?"last":"first",q=T(j.$control_input[0]),j.isFocused&&!j.isInputHidden?(o=j.$control_input.val().length,n=t<0?0===q.start&&0===q.length:q.start===o,n&&!o&&j.advanceCaret(t,s)):(l=j.$control.children(".active:"+r),l.length&&(p=j.$control.children(":not(input)").index(l),j.setActiveItem(null),j.setCaret(t>0?p+1:p))))
},advanceCaret:function(g,f){var l,j,h=this;
0!==g&&(l=g>0?"next":"prev",h.isShiftDown?(j=h.$control_input[l](),j.length&&(h.hideInput(),h.setActiveItem(j),f&&f.preventDefault())):h.setCaret(h.caretPos+g))
},setCaret:function(a){var o=this;
if(a="single"===o.settings.mode?o.items.length:Math.max(0,Math.min(o.items.length,a)),!o.isPending){var n,l,j,h;
for(j=o.$control.children(":not(input)"),n=0,l=j.length;
n<l;
n++){h=aA(j[n]).detach(),n<a?o.$control_input.before(h):o.$control.append(h)
}}o.caretPos=a
},lock:function(){this.close(),this.isLocked=!0,this.refreshState()
},unlock:function(){this.isLocked=!1,this.refreshState()
},disable:function(){var b=this;
b.$input.prop("disabled",!0),b.$control_input.prop("disabled",!0).prop("tabindex",-1),b.isDisabled=!0,b.lock()
},enable:function(){var b=this;
b.$input.prop("disabled",!1),b.$control_input.prop("disabled",!1).prop("tabindex",b.tabIndex),b.isDisabled=!1,b.unlock()
},destroy:function(){var a=this,f=a.eventNS,e=a.revertSettings;
a.trigger("destroy"),a.off(),a.$wrapper.remove(),a.$dropdown.remove(),a.$input.html("").append(e.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:e.tabindex}).show(),a.$control_input.removeData("grow"),a.$input.removeData("selectize"),aA(window).off(f),aA(document).off(f),aA(document.body).off(f),delete a.$input[0].selectize
},render:function(a,q){var p,o,n="",l=!1,j=this;
return"option"!==a&&"item"!==a||(p=aa(q[j.settings.valueField]),l=!!p),l&&(ab(j.renderCache[a])||(j.renderCache[a]={}),j.renderCache[a].hasOwnProperty(p))?j.renderCache[a][p]:(n=aA(j.settings.render[a].apply(this,[q,Z])),"option"===a||"option_create"===a?n.attr("data-selectable",""):"optgroup"===a&&(o=q[j.settings.optgroupValueField]||"",n.attr("data-group",o)),"option"!==a&&"item"!==a||n.attr("data-value",p||""),l&&(j.renderCache[a][p]=n[0]),n[0])
},clearCache:function(e){var c=this;
"undefined"==typeof e?c.renderCache={}:delete c.renderCache[e]
},canCreate:function(f){var e=this;
if(!e.settings.create){return !1
}var g=e.settings.createFilter;
return f.length&&("function"!=typeof g||g.apply(e,[f]))&&("string"!=typeof g||new RegExp(g).test(f))&&(!(g instanceof RegExp)||g.test(f))
}}),N.count=0,N.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1000,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},aA.fn.selectize=function(w){var v=aA.fn.selectize.defaults,u=aA.extend({},v,w),t=u.dataAttr,s=u.labelField,r=u.valueField,q=u.optgroupField,p=u.optgroupLabelField,o=u.optgroupValueField,n=function(f,B){var A,z,y,x,g=f.attr(t);
if(g){for(B.options=JSON.parse(g),A=0,z=B.options.length;
A<z;
A++){B.items.push(B.options[A][r])
}}else{var e=aA.trim(f.val()||"");
if(!u.allowEmptyOption&&!e.length){return
}for(y=e.split(u.delimiter),A=0,z=y.length;
A<z;
A++){x={},x[s]=y[A],x[r]=y[A],B.options.push(x)
}B.items=y
}},a=function(B,A){var z,y,x,j,h=A.options,g={},f=function(l){var c=t&&l.attr(t);
return"string"==typeof c&&c.length?JSON.parse(c):null
},e=function(c,F){c=aA(c);
var E=aa(c.val());
if(E||u.allowEmptyOption){if(g.hasOwnProperty(E)){if(F){var D=g[E][q];
D?aA.isArray(D)?D.push(F):g[E][q]=[D,F]:g[E][q]=F
}}else{var l=f(c)||{};
l[s]=l[s]||c.text(),l[r]=l[r]||E,l[q]=l[q]||F,g[E]=l,h.push(l),c.is(":selected")&&A.items.push(E)
}}},C=function(c){var G,F,E,D,l;
for(c=aA(c),E=c.attr("label"),E&&(D=f(c)||{},D[p]=E,D[o]=E,A.optgroups.push(D)),l=aA("option",c),G=0,F=l.length;
G<F;
G++){e(l[G],E)
}};
for(A.maxItems=B.attr("multiple")?null:1,j=B.children(),z=0,y=j.length;
z<y;
z++){x=j[z].tagName.toLowerCase(),"optgroup"===x?C(j[z]):"option"===x&&e(j[z])
}};
return this.each(function(){if(!this.selectize){var x,l=aA(this),j=this.tagName.toLowerCase(),c=l.attr("placeholder")||l.attr("data-placeholder");
c||u.allowEmptyOption||(c=l.children('option[value=""]').text());
var b={placeholder:c,options:[],optgroups:[],items:[]};
"select"===j?a(l,b):n(l,b),x=new N(l,aA.extend(!0,{},v,b,w))
}})
},aA.fn.selectize.defaults=N.defaults,aA.fn.selectize.support={validity:ac},N.define("drag_drop",function(a){if(!aA.fn.sortable){throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".')
}if("multi"===this.settings.mode){var e=this;
e.lock=function(){var b=e.lock;
return function(){var c=e.$control.data("sortable");
return c&&c.disable(),b.apply(e,arguments)
}
}(),e.unlock=function(){var b=e.unlock;
return function(){var c=e.$control.data("sortable");
return c&&c.enable(),b.apply(e,arguments)
}
}(),e.setup=function(){var c=e.setup;
return function(){c.apply(this,arguments);
var b=e.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:e.isLocked,start:function(g,f){f.placeholder.css("width",f.helper.css("width")),b.css({overflow:"visible"})
},stop:function(){b.css({overflow:"hidden"});
var f=e.$activeItems?e.$activeItems.slice():null,g=[];
b.children("[data-value]").each(function(){g.push(aA(this).attr("data-value"))
}),e.setValue(g),e.setActiveItem(f)
}})
}
}()
}}),N.define("dropdown_header",function(a){var e=this;
a=aA.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(b){return'<div class="'+b.headerClass+'"><div class="'+b.titleRowClass+'"><span class="'+b.labelClass+'">'+b.title+'</span><a href="javascript:void(0)" class="'+b.closeClass+'">&times;</a></div></div>'
}},a),e.setup=function(){var b=e.setup;
return function(){b.apply(e,arguments),e.$dropdown_header=aA(a.html(a)),e.$dropdown.prepend(e.$dropdown_header)
}
}()
}),N.define("optgroup_columns",function(a){var h=this;
a=aA.extend({equalizeWidth:!0,equalizeHeight:!0},a),this.getAdjacentOption=function(j,o){var n=j.closest("[data-group]").find("[data-selectable]"),l=n.index(j)+o;
return l>=0&&l<n.length?n.eq(l):aA()
},this.onKeyDown=function(){var b=h.onKeyDown;
return function(c){var o,n,l,j;
return !this.isOpen||c.keyCode!==aq&&c.keyCode!==an?b.apply(this,arguments):(h.ignoreHover=!0,j=this.$activeOption.closest("[data-group]"),o=j.find("[data-selectable]").index(this.$activeOption),j=c.keyCode===aq?j.prev("[data-group]"):j.next("[data-group]"),l=j.find("[data-selectable]"),n=l.eq(Math.min(l.length-1,o)),void (n.length&&this.setActiveOption(n)))
}
}();
var g=function(){var j,e=g.width,l=document;
return"undefined"==typeof e&&(j=l.createElement("div"),j.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',j=j.firstChild,l.body.appendChild(j),e=g.width=j.offsetWidth-j.clientWidth,l.body.removeChild(j)),e
},f=function(){var q,p,o,n,l,c,b;
if(b=aA("[data-group]",h.$dropdown_content),p=b.length,p&&h.$dropdown_content.width()){if(a.equalizeHeight){for(o=0,q=0;
q<p;
q++){o=Math.max(o,b.eq(q).height())
}b.css({height:o})
}a.equalizeWidth&&(c=h.$dropdown_content.innerWidth()-g(),n=Math.round(c/p),b.css({width:n}),p>1&&(l=c-n*(p-1),b.eq(p-1).css({width:l})))
}};
(a.equalizeHeight||a.equalizeWidth)&&(Y.after(this,"positionDropdown",f),Y.after(this,"refreshOptions",f))
}),N.define("remove_button",function(a){a=aA.extend({label:"&times;",title:"Remove",className:"remove",append:!0},a);
var f=function(g,n){n.className="remove-single";
var l=g,j='<a href="javascript:void(0)" class="'+n.className+'" tabindex="-1" title="'+Z(n.title)+'">'+n.label+"</a>",h=function(o,c){return o+c
};
g.setup=function(){var b=l.setup;
return function(){if(n.append){var o=aA(l.$input.context).attr("id"),c=(aA("#"+o),l.settings.render.item);
l.settings.render.item=function(p){return h(c.apply(g,arguments),j)
}
}b.apply(g,arguments),g.$control.on("click","."+n.className,function(p){p.preventDefault(),l.isLocked||l.clear()
})
}
}()
},e=function(g,n){var l=g,j='<a href="javascript:void(0)" class="'+n.className+'" tabindex="-1" title="'+Z(n.title)+'">'+n.label+"</a>",h=function(p,o){var q=p.search(/(<\/[^>]+>\s*)$/);
return p.substring(0,q)+o+p.substring(q)
};
g.setup=function(){var b=l.setup;
return function(){if(n.append){var c=l.settings.render.item;
l.settings.render.item=function(o){return h(c.apply(g,arguments),j)
}
}b.apply(g,arguments),g.$control.on("click","."+n.className,function(o){if(o.preventDefault(),!l.isLocked){var p=aA(o.currentTarget).parent();
l.setActiveItem(p),l.deleteSelection()&&l.setCaret(l.items.length)
}})
}
}()
};
return"single"===this.settings.mode?void f(this,a):void e(this,a)
}),N.define("restore_on_backspace",function(e){var c=this;
e.text=e.text||function(b){return b[this.settings.labelField]
},this.onKeyDown=function(){var a=c.onKeyDown;
return function(f){var h,g;
return f.keyCode===ak&&""===this.$control_input.val()&&!this.$activeItems.length&&(h=this.caretPos-1,h>=0&&h<this.items.length)?(g=this.options[this.items[h]],this.deleteSelection(f)&&(this.setTextboxValue(e.text.apply(this,[g])),this.refreshOptions(!0)),void f.preventDefault()):a.apply(this,arguments)
}
}()
}),N
});
(function(e){var b=e.event,a,c;
a=b.special.debouncedresize={setup:function(){e(this).on("resize",a.handler)
},teardown:function(){e(this).off("resize",a.handler)
},handler:function(l,f){var j=this,h=arguments,g=function(){l.type="debouncedresize";
b.dispatch.apply(j,h)
};
if(c){clearTimeout(c)
}f?g():c=setTimeout(g,a.threshold)
},threshold:150}
})($CQ);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
;
window.matchMedia=window.matchMedia||(function(f,g){var c,a=f.documentElement,b=a.firstElementChild||a.firstChild,e=f.createElement("body"),h=f.createElement("div");
h.id="mq-test-1";
h.style.cssText="position:absolute;top:-100em";
e.style.background="none";
e.appendChild(h);
return function(j){h.innerHTML='&shy;<style media="'+j+'"> #mq-test-1 { width: 42px; }</style>';
a.insertBefore(e,b);
c=h.offsetWidth===42;
a.removeChild(e);
return{matches:c,media:j}
}
}(document));
(function(b,a){a.picturefill=function(c){var e;
if(c===e){c=b("body")
}b("div[data-picture]",c).each(function(){var g=this;
var h=[];
b("div[data-media]",g).each(function(){var l=b(this).attr("data-media");
if(!l||(a.matchMedia&&a.matchMedia(l).matches)){h.push(this)
}});
var f=b("img",g).first();
if(h.length){if(f.size()===0){var j=b(g);
f=b("<img />").attr("alt",j.attr("data-alt")).appendTo(j)
}f.attr("src",h.pop().getAttribute("data-src"))
}else{f.remove()
}})
};
b(function(){a.picturefill()
});
b(a).on("debouncedresize",function(){a.picturefill()
})
}($CQ,this));
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)
}(function(a){var b=window.Slick||{};
(b=function(){var c=0;
return function(e,g){var f,h=this;
h.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(e),appendDots:a(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3000,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(l,j){return a('<button type="button" />').text(j+1)
},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:0.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1000},h.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(h,h.initials),h.activeBreakpoint=null,h.animType=null,h.animProp=null,h.breakpoints=[],h.breakpointSettings=[],h.cssTransitions=!1,h.focussed=!1,h.interrupted=!1,h.hidden="hidden",h.paused=!0,h.positionProp=null,h.respondTo=null,h.rowCount=1,h.shouldClick=!0,h.$slider=a(e),h.$slidesCache=null,h.transformType=null,h.transitionType=null,h.visibilityChange="visibilitychange",h.windowWidth=0,h.windowTimer=null,f=a(e).data("slick")||{},h.options=a.extend({},h.defaults,g,f),h.currentSlide=h.options.initialSlide,h.originalSettings=h.options,void 0!==document.mozHidden?(h.hidden="mozHidden",h.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(h.hidden="webkitHidden",h.visibilityChange="webkitvisibilitychange"),h.autoPlay=a.proxy(h.autoPlay,h),h.autoPlayClear=a.proxy(h.autoPlayClear,h),h.autoPlayIterator=a.proxy(h.autoPlayIterator,h),h.changeSlide=a.proxy(h.changeSlide,h),h.clickHandler=a.proxy(h.clickHandler,h),h.selectHandler=a.proxy(h.selectHandler,h),h.setPosition=a.proxy(h.setPosition,h),h.swipeHandler=a.proxy(h.swipeHandler,h),h.dragHandler=a.proxy(h.dragHandler,h),h.keyHandler=a.proxy(h.keyHandler,h),h.instanceUid=c++,h.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,h.registerBreakpoints(),h.init(!0)
}
}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})
},b.prototype.addSlide=b.prototype.slickAdd=function(g,c,h){var f=this;
if("boolean"==typeof c){h=c,c=null
}else{if(c<0||c>=f.slideCount){return !1
}}f.unload(),"number"==typeof c?0===c&&0===f.$slides.length?a(g).appendTo(f.$slideTrack):h?a(g).insertBefore(f.$slides.eq(c)):a(g).insertAfter(f.$slides.eq(c)):!0===h?a(g).prependTo(f.$slideTrack):a(g).appendTo(f.$slideTrack),f.$slides=f.$slideTrack.children(this.options.slide),f.$slideTrack.children(this.options.slide).detach(),f.$slideTrack.append(f.$slides),f.$slides.each(function(l,j){a(j).attr("data-slick-index",l)
}),f.$slidesCache=f.$slides,f.reinit()
},b.prototype.animateHeight=function(){var c=this;
if(1===c.options.slidesToShow&&!0===c.options.adaptiveHeight&&!1===c.options.vertical){var f=c.$slides.eq(c.currentSlide).outerHeight(!0);
c.$list.animate({height:f},c.options.speed)
}},b.prototype.animateSlide=function(g,c){var h={},f=this;
f.animateHeight(),!0===f.options.rtl&&!1===f.options.vertical&&(g=-g),!1===f.transformsEnabled?!1===f.options.vertical?f.$slideTrack.animate({left:g},f.options.speed,f.options.easing,c):f.$slideTrack.animate({top:g},f.options.speed,f.options.easing,c):!1===f.cssTransitions?(!0===f.options.rtl&&(f.currentLeft=-f.currentLeft),a({animStart:f.currentLeft}).animate({animStart:g},{duration:f.options.speed,easing:f.options.easing,step:function(e){e=Math.ceil(e),!1===f.options.vertical?(h[f.animType]="translate("+e+"px, 0px)",f.$slideTrack.css(h)):(h[f.animType]="translate(0px,"+e+"px)",f.$slideTrack.css(h))
},complete:function(){c&&c.call()
}})):(f.applyTransition(),g=Math.ceil(g),!1===f.options.vertical?h[f.animType]="translate3d("+g+"px, 0px, 0px)":h[f.animType]="translate3d(0px,"+g+"px, 0px)",f.$slideTrack.css(h),c&&setTimeout(function(){f.disableTransition(),c.call()
},f.options.speed))
},b.prototype.getNavTarget=function(){var f=this,c=f.options.asNavFor;
return c&&null!==c&&(c=a(c).not(f.$slider)),c
},b.prototype.asNavFor=function(f){var c=this.getNavTarget();
null!==c&&"object"==typeof c&&c.each(function(){var e=a(this).slick("getSlick");
e.unslicked||e.slideHandler(f,!0)
})
},b.prototype.applyTransition=function(f){var g=this,c={};
!1===g.options.fade?c[g.transitionType]=g.transformType+" "+g.options.speed+"ms "+g.options.cssEase:c[g.transitionType]="opacity "+g.options.speed+"ms "+g.options.cssEase,!1===g.options.fade?g.$slideTrack.css(c):g.$slides.eq(f).css(c)
},b.prototype.autoPlay=function(){var c=this;
c.autoPlayClear(),c.slideCount>c.options.slidesToShow&&(c.autoPlayTimer=setInterval(c.autoPlayIterator,c.options.autoplaySpeed))
},b.prototype.autoPlayClear=function(){var c=this;
c.autoPlayTimer&&clearInterval(c.autoPlayTimer)
},b.prototype.autoPlayIterator=function(){var c=this,f=c.currentSlide+c.options.slidesToScroll;
c.paused||c.interrupted||c.focussed||(!1===c.options.infinite&&(1===c.direction&&c.currentSlide+1===c.slideCount-1?c.direction=0:0===c.direction&&(f=c.currentSlide-c.options.slidesToScroll,c.currentSlide-1==0&&(c.direction=1))),c.slideHandler(f))
},b.prototype.buildArrows=function(){var c=this;
!0===c.options.arrows&&(c.$prevArrow=a(c.options.prevArrow).addClass("slick-arrow"),c.$nextArrow=a(c.options.nextArrow).addClass("slick-arrow"),c.slideCount>c.options.slidesToShow?(c.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),c.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.prependTo(c.options.appendArrows),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.appendTo(c.options.appendArrows),!0!==c.options.infinite&&c.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):c.$prevArrow.add(c.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))
},b.prototype.buildDots=function(){var f,c,g=this;
if(!0===g.options.dots){for(g.$slider.addClass("slick-dotted"),c=a("<ul />").addClass(g.options.dotsClass),f=0;
f<=g.getDotCount();
f+=1){c.append(a("<li />").append(g.options.customPaging.call(this,g,f)))
}g.$dots=c.appendTo(g.options.appendDots),g.$dots.find("li").first().addClass("slick-active")
}},b.prototype.buildOut=function(){var c=this;
c.$slides=c.$slider.children(c.options.slide+":not(.slick-cloned)").addClass("slick-slide"),c.slideCount=c.$slides.length,c.$slides.each(function(g,f){a(f).attr("data-slick-index",g).data("originalStyling",a(f).attr("style")||"")
}),c.$slider.addClass("slick-slider"),c.$slideTrack=0===c.slideCount?a('<div class="slick-track"/>').appendTo(c.$slider):c.$slides.wrapAll('<div class="slick-track"/>').parent(),c.$list=c.$slideTrack.wrap('<div class="slick-list"/>').parent(),c.$slideTrack.css("opacity",0),!0!==c.options.centerMode&&!0!==c.options.swipeToSlide||(c.options.slidesToScroll=1),a("img[data-lazy]",c.$slider).not("[src]").addClass("slick-loading"),c.setupInfinite(),c.buildArrows(),c.buildDots(),c.updateDots(),c.setSlideClasses("number"==typeof c.currentSlide?c.currentSlide:0),!0===c.options.draggable&&c.$list.addClass("draggable")
},b.prototype.buildRows=function(){var p,q,x,g,y,h,f,j=this;
if(g=document.createDocumentFragment(),h=j.$slider.children(),j.options.rows>1){for(f=j.options.slidesPerRow*j.options.rows,y=Math.ceil(h.length/f),p=0;
p<y;
p++){var u=document.createElement("div");
for(q=0;
q<j.options.rows;
q++){var w=document.createElement("div");
for(x=0;
x<j.options.slidesPerRow;
x++){var v=p*f+(q*j.options.slidesPerRow+x);
h.get(v)&&w.appendChild(h.get(v))
}u.appendChild(w)
}g.appendChild(u)
}j.$slider.empty().append(g),j.$slider.children().children().children().css({width:100/j.options.slidesPerRow+"%",display:"inline-block"})
}},b.prototype.checkResponsive=function(j,u){var f,v,g,c=this,h=!1,p=c.$slider.width(),q=window.innerWidth||a(window).width();
if("window"===c.respondTo?g=q:"slider"===c.respondTo?g=p:"min"===c.respondTo&&(g=Math.min(q,p)),c.options.responsive&&c.options.responsive.length&&null!==c.options.responsive){v=null;
for(f in c.breakpoints){c.breakpoints.hasOwnProperty(f)&&(!1===c.originalSettings.mobileFirst?g<c.breakpoints[f]&&(v=c.breakpoints[f]):g>c.breakpoints[f]&&(v=c.breakpoints[f]))
}null!==v?null!==c.activeBreakpoint?(v!==c.activeBreakpoint||u)&&(c.activeBreakpoint=v,"unslick"===c.breakpointSettings[v]?c.unslick(v):(c.options=a.extend({},c.originalSettings,c.breakpointSettings[v]),!0===j&&(c.currentSlide=c.options.initialSlide),c.refresh(j)),h=v):(c.activeBreakpoint=v,"unslick"===c.breakpointSettings[v]?c.unslick(v):(c.options=a.extend({},c.originalSettings,c.breakpointSettings[v]),!0===j&&(c.currentSlide=c.options.initialSlide),c.refresh(j)),h=v):null!==c.activeBreakpoint&&(c.activeBreakpoint=null,c.options=c.originalSettings,!0===j&&(c.currentSlide=c.options.initialSlide),c.refresh(j),h=v),j||!1===h||c.$slider.trigger("breakpoint",[c,h])
}},b.prototype.changeSlide=function(j,f){var q,g,u,h=this,c=a(j.currentTarget);
switch(c.is("a")&&j.preventDefault(),c.is("li")||(c=c.closest("li")),u=h.slideCount%h.options.slidesToScroll!=0,q=u?0:(h.slideCount-h.currentSlide)%h.options.slidesToScroll,j.data.message){case"previous":g=0===q?h.options.slidesToScroll:h.options.slidesToShow-q,h.slideCount>h.options.slidesToShow&&h.slideHandler(h.currentSlide-g,!1,f);
break;
case"next":g=0===q?h.options.slidesToScroll:q,h.slideCount>h.options.slidesToShow&&h.slideHandler(h.currentSlide+g,!1,f);
break;
case"index":var p=0===j.data.index?0:j.data.index||c.index()*h.options.slidesToScroll;
h.slideHandler(h.checkNavigable(p),!1,f),c.children().trigger("focus");
break;
default:return
}},b.prototype.checkNavigable=function(f){var g,c;
if(g=this.getNavigableIndexes(),c=0,f>g[g.length-1]){f=g[g.length-1]
}else{for(var h in g){if(f<g[h]){f=c;
break
}c=g[h]
}}return f
},b.prototype.cleanUpEvents=function(){var c=this;
c.options.dots&&null!==c.$dots&&(a("li",c.$dots).off("click.slick",c.changeSlide).off("mouseenter.slick",a.proxy(c.interrupt,c,!0)).off("mouseleave.slick",a.proxy(c.interrupt,c,!1)),!0===c.options.accessibility&&c.$dots.off("keydown.slick",c.keyHandler)),c.$slider.off("focus.slick blur.slick"),!0===c.options.arrows&&c.slideCount>c.options.slidesToShow&&(c.$prevArrow&&c.$prevArrow.off("click.slick",c.changeSlide),c.$nextArrow&&c.$nextArrow.off("click.slick",c.changeSlide),!0===c.options.accessibility&&(c.$prevArrow&&c.$prevArrow.off("keydown.slick",c.keyHandler),c.$nextArrow&&c.$nextArrow.off("keydown.slick",c.keyHandler))),c.$list.off("touchstart.slick mousedown.slick",c.swipeHandler),c.$list.off("touchmove.slick mousemove.slick",c.swipeHandler),c.$list.off("touchend.slick mouseup.slick",c.swipeHandler),c.$list.off("touchcancel.slick mouseleave.slick",c.swipeHandler),c.$list.off("click.slick",c.clickHandler),a(document).off(c.visibilityChange,c.visibility),c.cleanUpSlideEvents(),!0===c.options.accessibility&&c.$list.off("keydown.slick",c.keyHandler),!0===c.options.focusOnSelect&&a(c.$slideTrack).children().off("click.slick",c.selectHandler),a(window).off("orientationchange.slick.slick-"+c.instanceUid,c.orientationChange),a(window).off("resize.slick.slick-"+c.instanceUid,c.resize),a("[draggable!=true]",c.$slideTrack).off("dragstart",c.preventDefault),a(window).off("load.slick.slick-"+c.instanceUid,c.setPosition)
},b.prototype.cleanUpSlideEvents=function(){var c=this;
c.$list.off("mouseenter.slick",a.proxy(c.interrupt,c,!0)),c.$list.off("mouseleave.slick",a.proxy(c.interrupt,c,!1))
},b.prototype.cleanUpRows=function(){var c,f=this;
f.options.rows>1&&((c=f.$slides.children().children()).removeAttr("style"),f.$slider.empty().append(c))
},b.prototype.clickHandler=function(c){!1===this.shouldClick&&(c.stopImmediatePropagation(),c.stopPropagation(),c.preventDefault())
},b.prototype.destroy=function(f){var c=this;
c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))
}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,f||c.$slider.trigger("destroy",[c])
},b.prototype.disableTransition=function(f){var g=this,c={};
c[g.transitionType]="",!1===g.options.fade?g.$slideTrack.css(c):g.$slides.eq(f).css(c)
},b.prototype.fadeSlide=function(f,g){var c=this;
!1===c.cssTransitions?(c.$slides.eq(f).css({zIndex:c.options.zIndex}),c.$slides.eq(f).animate({opacity:1},c.options.speed,c.options.easing,g)):(c.applyTransition(f),c.$slides.eq(f).css({opacity:1,zIndex:c.options.zIndex}),g&&setTimeout(function(){c.disableTransition(f),g.call()
},c.options.speed))
},b.prototype.fadeSlideOut=function(c){var f=this;
!1===f.cssTransitions?f.$slides.eq(c).animate({opacity:0,zIndex:f.options.zIndex-2},f.options.speed,f.options.easing):(f.applyTransition(c),f.$slides.eq(c).css({opacity:0,zIndex:f.options.zIndex-2}))
},b.prototype.filterSlides=b.prototype.slickFilter=function(c){var f=this;
null!==c&&(f.$slidesCache=f.$slides,f.unload(),f.$slideTrack.children(this.options.slide).detach(),f.$slidesCache.filter(c).appendTo(f.$slideTrack),f.reinit())
},b.prototype.focusHandler=function(){var c=this;
c.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(e){e.stopImmediatePropagation();
var f=a(this);
setTimeout(function(){c.options.pauseOnFocus&&(c.focussed=f.is(":focus"),c.autoPlay())
},0)
})
},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){return this.currentSlide
},b.prototype.getDotCount=function(){var f=this,g=0,c=0,h=0;
if(!0===f.options.infinite){if(f.slideCount<=f.options.slidesToShow){++h
}else{for(;
g<f.slideCount;
){++h,g=c+f.options.slidesToScroll,c+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}}}else{if(!0===f.options.centerMode){h=f.slideCount
}else{if(f.options.asNavFor){for(;
g<f.slideCount;
){++h,g=c+f.options.slidesToScroll,c+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}}else{h=1+Math.ceil((f.slideCount-f.options.slidesToShow)/f.options.slidesToScroll)
}}}return h-1
},b.prototype.getLeft=function(f){var j,c,l,g,p=this,h=0;
return p.slideOffset=0,c=p.$slides.first().outerHeight(!0),!0===p.options.infinite?(p.slideCount>p.options.slidesToShow&&(p.slideOffset=p.slideWidth*p.options.slidesToShow*-1,g=-1,!0===p.options.vertical&&!0===p.options.centerMode&&(2===p.options.slidesToShow?g=-1.5:1===p.options.slidesToShow&&(g=-2)),h=c*p.options.slidesToShow*g),p.slideCount%p.options.slidesToScroll!=0&&f+p.options.slidesToScroll>p.slideCount&&p.slideCount>p.options.slidesToShow&&(f>p.slideCount?(p.slideOffset=(p.options.slidesToShow-(f-p.slideCount))*p.slideWidth*-1,h=(p.options.slidesToShow-(f-p.slideCount))*c*-1):(p.slideOffset=p.slideCount%p.options.slidesToScroll*p.slideWidth*-1,h=p.slideCount%p.options.slidesToScroll*c*-1))):f+p.options.slidesToShow>p.slideCount&&(p.slideOffset=(f+p.options.slidesToShow-p.slideCount)*p.slideWidth,h=(f+p.options.slidesToShow-p.slideCount)*c),p.slideCount<=p.options.slidesToShow&&(p.slideOffset=0,h=0),!0===p.options.centerMode&&p.slideCount<=p.options.slidesToShow?p.slideOffset=p.slideWidth*Math.floor(p.options.slidesToShow)/2-p.slideWidth*p.slideCount/2:!0===p.options.centerMode&&!0===p.options.infinite?p.slideOffset+=p.slideWidth*Math.floor(p.options.slidesToShow/2)-p.slideWidth:!0===p.options.centerMode&&(p.slideOffset=0,p.slideOffset+=p.slideWidth*Math.floor(p.options.slidesToShow/2)),j=!1===p.options.vertical?f*p.slideWidth*-1+p.slideOffset:f*c*-1+h,!0===p.options.variableWidth&&(l=p.slideCount<=p.options.slidesToShow||!1===p.options.infinite?p.$slideTrack.children(".slick-slide").eq(f):p.$slideTrack.children(".slick-slide").eq(f+p.options.slidesToShow),j=!0===p.options.rtl?l[0]?-1*(p.$slideTrack.width()-l[0].offsetLeft-l.width()):0:l[0]?-1*l[0].offsetLeft:0,!0===p.options.centerMode&&(l=p.slideCount<=p.options.slidesToShow||!1===p.options.infinite?p.$slideTrack.children(".slick-slide").eq(f):p.$slideTrack.children(".slick-slide").eq(f+p.options.slidesToShow+1),j=!0===p.options.rtl?l[0]?-1*(p.$slideTrack.width()-l[0].offsetLeft-l.width()):0:l[0]?-1*l[0].offsetLeft:0,j+=(p.$list.width()-l.outerWidth())/2)),j
},b.prototype.getOption=b.prototype.slickGetOption=function(c){return this.options[c]
},b.prototype.getNavigableIndexes=function(){var f,h=this,c=0,j=0,g=[];
for(!1===h.options.infinite?f=h.slideCount:(c=-1*h.options.slidesToScroll,j=-1*h.options.slidesToScroll,f=2*h.slideCount);
c<f;
){g.push(c),c=j+h.options.slidesToScroll,j+=h.options.slidesToScroll<=h.options.slidesToShow?h.options.slidesToScroll:h.options.slidesToShow
}return g
},b.prototype.getSlick=function(){return this
},b.prototype.getSlideCount=function(){var f,c,g=this;
return c=!0===g.options.centerMode?g.slideWidth*Math.floor(g.options.slidesToShow/2):0,!0===g.options.swipeToSlide?(g.$slideTrack.find(".slick-slide").each(function(e,h){if(h.offsetLeft-c+a(h).outerWidth()/2>-1*g.swipeLeft){return f=h,!1
}}),Math.abs(a(f).attr("data-slick-index")-g.currentSlide)||1):g.options.slidesToScroll
},b.prototype.goTo=b.prototype.slickGoTo=function(c,f){this.changeSlide({data:{message:"index",index:parseInt(c)}},f)
},b.prototype.init=function(f){var c=this;
a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),f&&c.$slider.trigger("init",[c]),!0===c.options.accessibility&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())
},b.prototype.initADA=function(){var g=this,c=Math.ceil(g.slideCount/g.options.slidesToShow),h=g.getNavigableIndexes().filter(function(e){return e>=0&&e<g.slideCount
});
g.$slides.add(g.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==g.$dots&&(g.$slides.not(g.$slideTrack.find(".slick-cloned")).each(function(e){var l=h.indexOf(e);
a(this).attr({role:"tabpanel",id:"slick-slide"+g.instanceUid+e,tabindex:-1}),-1!==l&&a(this).attr({"aria-describedby":"slick-slide-control"+g.instanceUid+l})
}),g.$dots.attr("role","tablist").find("li").each(function(e){var l=h[e];
a(this).attr({role:"presentation"}),a(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+g.instanceUid+e,"aria-controls":"slick-slide"+g.instanceUid+l,"aria-label":e+1+" of "+c,"aria-selected":null,tabindex:"-1"})
}).eq(g.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());
for(var f=g.currentSlide,j=f+g.options.slidesToShow;
f<j;
f++){g.$slides.eq(f).attr("tabindex",0)
}g.activateADA()
},b.prototype.initArrowEvents=function(){var c=this;
!0===c.options.arrows&&c.slideCount>c.options.slidesToShow&&(c.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},c.changeSlide),c.$nextArrow.off("click.slick").on("click.slick",{message:"next"},c.changeSlide),!0===c.options.accessibility&&(c.$prevArrow.on("keydown.slick",c.keyHandler),c.$nextArrow.on("keydown.slick",c.keyHandler)))
},b.prototype.initDotEvents=function(){var c=this;
!0===c.options.dots&&(a("li",c.$dots).on("click.slick",{message:"index"},c.changeSlide),!0===c.options.accessibility&&c.$dots.on("keydown.slick",c.keyHandler)),!0===c.options.dots&&!0===c.options.pauseOnDotsHover&&a("li",c.$dots).on("mouseenter.slick",a.proxy(c.interrupt,c,!0)).on("mouseleave.slick",a.proxy(c.interrupt,c,!1))
},b.prototype.initSlideEvents=function(){var c=this;
c.options.pauseOnHover&&(c.$list.on("mouseenter.slick",a.proxy(c.interrupt,c,!0)),c.$list.on("mouseleave.slick",a.proxy(c.interrupt,c,!1)))
},b.prototype.initializeEvents=function(){var c=this;
c.initArrowEvents(),c.initDotEvents(),c.initSlideEvents(),c.$list.on("touchstart.slick mousedown.slick",{action:"start"},c.swipeHandler),c.$list.on("touchmove.slick mousemove.slick",{action:"move"},c.swipeHandler),c.$list.on("touchend.slick mouseup.slick",{action:"end"},c.swipeHandler),c.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},c.swipeHandler),c.$list.on("click.slick",c.clickHandler),a(document).on(c.visibilityChange,a.proxy(c.visibility,c)),!0===c.options.accessibility&&c.$list.on("keydown.slick",c.keyHandler),!0===c.options.focusOnSelect&&a(c.$slideTrack).children().on("click.slick",c.selectHandler),a(window).on("orientationchange.slick.slick-"+c.instanceUid,a.proxy(c.orientationChange,c)),a(window).on("resize.slick.slick-"+c.instanceUid,a.proxy(c.resize,c)),a("[draggable!=true]",c.$slideTrack).on("dragstart",c.preventDefault),a(window).on("load.slick.slick-"+c.instanceUid,c.setPosition),a(c.setPosition)
},b.prototype.initUI=function(){var c=this;
!0===c.options.arrows&&c.slideCount>c.options.slidesToShow&&(c.$prevArrow.show(),c.$nextArrow.show()),!0===c.options.dots&&c.slideCount>c.options.slidesToShow&&c.$dots.show()
},b.prototype.keyHandler=function(c){var f=this;
c.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===c.keyCode&&!0===f.options.accessibility?f.changeSlide({data:{message:!0===f.options.rtl?"next":"previous"}}):39===c.keyCode&&!0===f.options.accessibility&&f.changeSlide({data:{message:!0===f.options.rtl?"previous":"next"}}))
},b.prototype.lazyLoad=function(){function j(l){a("img[data-lazy]",l).each(function(){var y=a(this),n=a(this).attr("data-lazy"),z=a(this).attr("data-srcset"),w=a(this).attr("data-sizes")||g.$slider.attr("data-sizes"),x=document.createElement("img");
x.onload=function(){y.animate({opacity:0},100,function(){z&&(y.attr("srcset",z),w&&y.attr("sizes",w)),y.attr("src",n).animate({opacity:1},200,function(){y.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
}),g.$slider.trigger("lazyLoaded",[g,y,n])
})
},x.onerror=function(){y.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),g.$slider.trigger("lazyLoadError",[g,y,n])
},x.src=n
})
}var u,f,v,g=this;
if(!0===g.options.centerMode?!0===g.options.infinite?v=(f=g.currentSlide+(g.options.slidesToShow/2+1))+g.options.slidesToShow+2:(f=Math.max(0,g.currentSlide-(g.options.slidesToShow/2+1)),v=g.options.slidesToShow/2+1+2+g.currentSlide):(f=g.options.infinite?g.options.slidesToShow+g.currentSlide:g.currentSlide,v=Math.ceil(f+g.options.slidesToShow),!0===g.options.fade&&(f>0&&f--,v<=g.slideCount&&v++)),u=g.$slider.find(".slick-slide").slice(f,v),"anticipated"===g.options.lazyLoad){for(var c=f-1,h=v,p=g.$slider.find(".slick-slide"),q=0;
q<g.options.slidesToScroll;
q++){c<0&&(c=g.slideCount-1),u=(u=u.add(p.eq(c))).add(p.eq(h)),c--,h++
}}j(u),g.slideCount<=g.options.slidesToShow?j(g.$slider.find(".slick-slide")):g.currentSlide>=g.slideCount-g.options.slidesToShow?j(g.$slider.find(".slick-cloned").slice(0,g.options.slidesToShow)):0===g.currentSlide&&j(g.$slider.find(".slick-cloned").slice(-1*g.options.slidesToShow))
},b.prototype.loadSlider=function(){var c=this;
c.setPosition(),c.$slideTrack.css({opacity:1}),c.$slider.removeClass("slick-loading"),c.initUI(),"progressive"===c.options.lazyLoad&&c.progressiveLazyLoad()
},b.prototype.next=b.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})
},b.prototype.orientationChange=function(){var c=this;
c.checkResponsive(),c.setPosition()
},b.prototype.pause=b.prototype.slickPause=function(){var c=this;
c.autoPlayClear(),c.paused=!0
},b.prototype.play=b.prototype.slickPlay=function(){var c=this;
c.autoPlay(),c.options.autoplay=!0,c.paused=!1,c.focussed=!1,c.interrupted=!1
},b.prototype.postSlide=function(f){var c=this;
c.unslicked||(c.$slider.trigger("afterChange",[c,f]),c.animating=!1,c.slideCount>c.options.slidesToShow&&c.setPosition(),c.swipeLeft=null,c.options.autoplay&&c.autoPlay(),!0===c.options.accessibility&&(c.initADA(),c.options.focusOnChange&&a(c.$slides.get(c.currentSlide)).attr("tabindex",0).focus()))
},b.prototype.prev=b.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})
},b.prototype.preventDefault=function(c){c.preventDefault()
},b.prototype.progressiveLazyLoad=function(j){j=j||1;
var f,q,g,u,h,c=this,p=a("img[data-lazy]",c.$slider);
p.length?(f=p.first(),q=f.attr("data-lazy"),g=f.attr("data-srcset"),u=f.attr("data-sizes")||c.$slider.attr("data-sizes"),(h=document.createElement("img")).onload=function(){g&&(f.attr("srcset",g),u&&f.attr("sizes",u)),f.attr("src",q).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===c.options.adaptiveHeight&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,f,q]),c.progressiveLazyLoad()
},h.onerror=function(){j<3?setTimeout(function(){c.progressiveLazyLoad(j+1)
},500):(f.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,f,q]),c.progressiveLazyLoad())
},h.src=q):c.$slider.trigger("allImagesLoaded",[c])
},b.prototype.refresh=function(g){var c,h,f=this;
h=f.slideCount-f.options.slidesToShow,!f.options.infinite&&f.currentSlide>h&&(f.currentSlide=h),f.slideCount<=f.options.slidesToShow&&(f.currentSlide=0),c=f.currentSlide,f.destroy(!0),a.extend(f,f.initials,{currentSlide:c}),f.init(),g||f.changeSlide({data:{message:"index",index:c}},!1)
},b.prototype.registerBreakpoints=function(){var g,c,h,f=this,j=f.options.responsive||null;
if("array"===a.type(j)&&j.length){f.respondTo=f.options.respondTo||"window";
for(g in j){if(h=f.breakpoints.length-1,j.hasOwnProperty(g)){for(c=j[g].breakpoint;
h>=0;
){f.breakpoints[h]&&f.breakpoints[h]===c&&f.breakpoints.splice(h,1),h--
}f.breakpoints.push(c),f.breakpointSettings[c]=j[g].settings
}}f.breakpoints.sort(function(l,n){return f.options.mobileFirst?l-n:n-l
})
}},b.prototype.reinit=function(){var c=this;
c.$slides=c.$slideTrack.children(c.options.slide).addClass("slick-slide"),c.slideCount=c.$slides.length,c.currentSlide>=c.slideCount&&0!==c.currentSlide&&(c.currentSlide=c.currentSlide-c.options.slidesToScroll),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),c.registerBreakpoints(),c.setProps(),c.setupInfinite(),c.buildArrows(),c.updateArrows(),c.initArrowEvents(),c.buildDots(),c.updateDots(),c.initDotEvents(),c.cleanUpSlideEvents(),c.initSlideEvents(),c.checkResponsive(!1,!0),!0===c.options.focusOnSelect&&a(c.$slideTrack).children().on("click.slick",c.selectHandler),c.setSlideClasses("number"==typeof c.currentSlide?c.currentSlide:0),c.setPosition(),c.focusHandler(),c.paused=!c.options.autoplay,c.autoPlay(),c.$slider.trigger("reInit",[c])
},b.prototype.resize=function(){var c=this;
a(window).width()!==c.windowWidth&&(clearTimeout(c.windowDelay),c.windowDelay=window.setTimeout(function(){c.windowWidth=a(window).width(),c.checkResponsive(),c.unslicked||c.setPosition()
},50))
},b.prototype.removeSlide=b.prototype.slickRemove=function(f,g,c){var h=this;
if(f="boolean"==typeof f?!0===(g=f)?0:h.slideCount-1:!0===g?--f:f,h.slideCount<1||f<0||f>h.slideCount-1){return !1
}h.unload(),!0===c?h.$slideTrack.children().remove():h.$slideTrack.children(this.options.slide).eq(f).remove(),h.$slides=h.$slideTrack.children(this.options.slide),h.$slideTrack.children(this.options.slide).detach(),h.$slideTrack.append(h.$slides),h.$slidesCache=h.$slides,h.reinit()
},b.prototype.setCSS=function(f){var h,c,j=this,g={};
!0===j.options.rtl&&(f=-f),h="left"==j.positionProp?Math.ceil(f)+"px":"0px",c="top"==j.positionProp?Math.ceil(f)+"px":"0px",g[j.positionProp]=f,!1===j.transformsEnabled?j.$slideTrack.css(g):(g={},!1===j.cssTransitions?(g[j.animType]="translate("+h+", "+c+")",j.$slideTrack.css(g)):(g[j.animType]="translate3d("+h+", "+c+", 0px)",j.$slideTrack.css(g)))
},b.prototype.setDimensions=function(){var c=this;
!1===c.options.vertical?!0===c.options.centerMode&&c.$list.css({padding:"0px "+c.options.centerPadding}):(c.$list.height(c.$slides.first().outerHeight(!0)*c.options.slidesToShow),!0===c.options.centerMode&&c.$list.css({padding:c.options.centerPadding+" 0px"})),c.listWidth=c.$list.width(),c.listHeight=c.$list.height(),!1===c.options.vertical&&!1===c.options.variableWidth?(c.slideWidth=Math.ceil(c.listWidth/c.options.slidesToShow),c.$slideTrack.width(Math.ceil(c.slideWidth*c.$slideTrack.children(".slick-slide").length))):!0===c.options.variableWidth?c.$slideTrack.width(5000*c.slideCount):(c.slideWidth=Math.ceil(c.listWidth),c.$slideTrack.height(Math.ceil(c.$slides.first().outerHeight(!0)*c.$slideTrack.children(".slick-slide").length)));
var f=c.$slides.first().outerWidth(!0)-c.$slides.first().width();
!1===c.options.variableWidth&&c.$slideTrack.children(".slick-slide").width(c.slideWidth-f)
},b.prototype.setFade=function(){var f,c=this;
c.$slides.each(function(g,e){f=c.slideWidth*g*-1,!0===c.options.rtl?a(e).css({position:"relative",right:f,top:0,zIndex:c.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:f,top:0,zIndex:c.options.zIndex-2,opacity:0})
}),c.$slides.eq(c.currentSlide).css({zIndex:c.options.zIndex-1,opacity:1})
},b.prototype.setHeight=function(){var c=this;
if(1===c.options.slidesToShow&&!0===c.options.adaptiveHeight&&!1===c.options.vertical){var f=c.$slides.eq(c.currentSlide).outerHeight(!0);
c.$list.css("height",f)
}},b.prototype.setOption=b.prototype.slickSetOption=function(){var j,f,p,g,q,h=this,c=!1;
if("object"===a.type(arguments[0])?(p=arguments[0],c=arguments[1],q="multiple"):"string"===a.type(arguments[0])&&(p=arguments[0],g=arguments[1],c=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?q="responsive":void 0!==arguments[1]&&(q="single")),"single"===q){h.options[p]=g
}else{if("multiple"===q){a.each(p,function(l,n){h.options[l]=n
})
}else{if("responsive"===q){for(f in g){if("array"!==a.type(h.options.responsive)){h.options.responsive=[g[f]]
}else{for(j=h.options.responsive.length-1;
j>=0;
){h.options.responsive[j].breakpoint===g[f].breakpoint&&h.options.responsive.splice(j,1),j--
}h.options.responsive.push(g[f])
}}}}}c&&(h.unload(),h.reinit())
},b.prototype.setPosition=function(){var c=this;
c.setDimensions(),c.setHeight(),!1===c.options.fade?c.setCSS(c.getLeft(c.currentSlide)):c.setFade(),c.$slider.trigger("setPosition",[c])
},b.prototype.setProps=function(){var c=this,f=document.body.style;
c.positionProp=!0===c.options.vertical?"top":"left","top"===c.positionProp?c.$slider.addClass("slick-vertical"):c.$slider.removeClass("slick-vertical"),void 0===f.WebkitTransition&&void 0===f.MozTransition&&void 0===f.msTransition||!0===c.options.useCSS&&(c.cssTransitions=!0),c.options.fade&&("number"==typeof c.options.zIndex?c.options.zIndex<3&&(c.options.zIndex=3):c.options.zIndex=c.defaults.zIndex),void 0!==f.OTransform&&(c.animType="OTransform",c.transformType="-o-transform",c.transitionType="OTransition",void 0===f.perspectiveProperty&&void 0===f.webkitPerspective&&(c.animType=!1)),void 0!==f.MozTransform&&(c.animType="MozTransform",c.transformType="-moz-transform",c.transitionType="MozTransition",void 0===f.perspectiveProperty&&void 0===f.MozPerspective&&(c.animType=!1)),void 0!==f.webkitTransform&&(c.animType="webkitTransform",c.transformType="-webkit-transform",c.transitionType="webkitTransition",void 0===f.perspectiveProperty&&void 0===f.webkitPerspective&&(c.animType=!1)),void 0!==f.msTransform&&(c.animType="msTransform",c.transformType="-ms-transform",c.transitionType="msTransition",void 0===f.msTransform&&(c.animType=!1)),void 0!==f.transform&&!1!==c.animType&&(c.animType="transform",c.transformType="transform",c.transitionType="transition"),c.transformsEnabled=c.options.useTransform&&null!==c.animType&&!1!==c.animType
},b.prototype.setSlideClasses=function(f){var j,c,l,g,p=this;
if(c=p.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),p.$slides.eq(f).addClass("slick-current"),!0===p.options.centerMode){var h=p.options.slidesToShow%2==0?1:0;
j=Math.floor(p.options.slidesToShow/2),!0===p.options.infinite&&(f>=j&&f<=p.slideCount-1-j?p.$slides.slice(f-j+h,f+j+1).addClass("slick-active").attr("aria-hidden","false"):(l=p.options.slidesToShow+f,c.slice(l-j+1+h,l+j+2).addClass("slick-active").attr("aria-hidden","false")),0===f?c.eq(c.length-1-p.options.slidesToShow).addClass("slick-center"):f===p.slideCount-1&&c.eq(p.options.slidesToShow).addClass("slick-center")),p.$slides.eq(f).addClass("slick-center")
}else{f>=0&&f<=p.slideCount-p.options.slidesToShow?p.$slides.slice(f,f+p.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):c.length<=p.options.slidesToShow?c.addClass("slick-active").attr("aria-hidden","false"):(g=p.slideCount%p.options.slidesToShow,l=!0===p.options.infinite?p.options.slidesToShow+f:f,p.options.slidesToShow==p.options.slidesToScroll&&p.slideCount-f<p.options.slidesToShow?c.slice(l-(p.options.slidesToShow-g),l+g).addClass("slick-active").attr("aria-hidden","false"):c.slice(l,l+p.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"))
}"ondemand"!==p.options.lazyLoad&&"anticipated"!==p.options.lazyLoad||p.lazyLoad()
},b.prototype.setupInfinite=function(){var g,c,h,f=this;
if(!0===f.options.fade&&(f.options.centerMode=!1),!0===f.options.infinite&&!1===f.options.fade&&(c=null,f.slideCount>f.options.slidesToShow)){for(h=!0===f.options.centerMode?f.options.slidesToShow+1:f.options.slidesToShow,g=f.slideCount;
g>f.slideCount-h;
g-=1){c=g-1,a(f.$slides[c]).clone(!0).attr("id","").attr("data-slick-index",c-f.slideCount).prependTo(f.$slideTrack).addClass("slick-cloned")
}for(g=0;
g<h+f.slideCount;
g+=1){c=g,a(f.$slides[c]).clone(!0).attr("id","").attr("data-slick-index",c+f.slideCount).appendTo(f.$slideTrack).addClass("slick-cloned")
}f.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")
})
}},b.prototype.interrupt=function(c){var f=this;
c||f.autoPlay(),f.interrupted=c
},b.prototype.selectHandler=function(g){var c=this,h=a(g.target).is(".slick-slide")?a(g.target):a(g.target).parents(".slick-slide"),f=parseInt(h.attr("data-slick-index"));
f||(f=0),c.slideCount<=c.options.slidesToShow?c.slideHandler(f,!1,!0):c.slideHandler(f)
},b.prototype.slideHandler=function(j,p,v){var f,w,g,c,h,q=null,u=this;
if(p=p||!1,!(!0===u.animating&&!0===u.options.waitForAnimate||!0===u.options.fade&&u.currentSlide===j)){if(!1===p&&u.asNavFor(j),f=j,q=u.getLeft(f),c=u.getLeft(u.currentSlide),u.currentLeft=null===u.swipeLeft?c:u.swipeLeft,!1===u.options.infinite&&!1===u.options.centerMode&&(j<0||j>u.getDotCount()*u.options.slidesToScroll)){!1===u.options.fade&&(f=u.currentSlide,!0!==v?u.animateSlide(c,function(){u.postSlide(f)
}):u.postSlide(f))
}else{if(!1===u.options.infinite&&!0===u.options.centerMode&&(j<0||j>u.slideCount-u.options.slidesToScroll)){!1===u.options.fade&&(f=u.currentSlide,!0!==v?u.animateSlide(c,function(){u.postSlide(f)
}):u.postSlide(f))
}else{if(u.options.autoplay&&clearInterval(u.autoPlayTimer),w=f<0?u.slideCount%u.options.slidesToScroll!=0?u.slideCount-u.slideCount%u.options.slidesToScroll:u.slideCount+f:f>=u.slideCount?u.slideCount%u.options.slidesToScroll!=0?0:f-u.slideCount:f,u.animating=!0,u.$slider.trigger("beforeChange",[u,u.currentSlide,w]),g=u.currentSlide,u.currentSlide=w,u.setSlideClasses(u.currentSlide),u.options.asNavFor&&(h=(h=u.getNavTarget()).slick("getSlick")).slideCount<=h.options.slidesToShow&&h.setSlideClasses(u.currentSlide),u.updateDots(),u.updateArrows(),!0===u.options.fade){return !0!==v?(u.fadeSlideOut(g),u.fadeSlide(w,function(){u.postSlide(w)
})):u.postSlide(w),void u.animateHeight()
}!0!==v?u.animateSlide(q,function(){u.postSlide(w)
}):u.postSlide(w)
}}}},b.prototype.startLoad=function(){var c=this;
!0===c.options.arrows&&c.slideCount>c.options.slidesToShow&&(c.$prevArrow.hide(),c.$nextArrow.hide()),!0===c.options.dots&&c.slideCount>c.options.slidesToShow&&c.$dots.hide(),c.$slider.addClass("slick-loading")
},b.prototype.swipeDirection=function(){var f,h,c,j,g=this;
return f=g.touchObject.startX-g.touchObject.curX,h=g.touchObject.startY-g.touchObject.curY,c=Math.atan2(h,f),(j=Math.round(180*c/Math.PI))<0&&(j=360-Math.abs(j)),j<=45&&j>=0?!1===g.options.rtl?"left":"right":j<=360&&j>=315?!1===g.options.rtl?"left":"right":j>=135&&j<=225?!1===g.options.rtl?"right":"left":!0===g.options.verticalSwiping?j>=35&&j<=135?"down":"up":"vertical"
},b.prototype.swipeEnd=function(f){var g,c,h=this;
if(h.dragging=!1,h.swiping=!1,h.scrolling){return h.scrolling=!1,!1
}if(h.interrupted=!1,h.shouldClick=!(h.touchObject.swipeLength>10),void 0===h.touchObject.curX){return !1
}if(!0===h.touchObject.edgeHit&&h.$slider.trigger("edge",[h,h.swipeDirection()]),h.touchObject.swipeLength>=h.touchObject.minSwipe){switch(c=h.swipeDirection()){case"left":case"down":g=h.options.swipeToSlide?h.checkNavigable(h.currentSlide+h.getSlideCount()):h.currentSlide+h.getSlideCount(),h.currentDirection=0;
break;
case"right":case"up":g=h.options.swipeToSlide?h.checkNavigable(h.currentSlide-h.getSlideCount()):h.currentSlide-h.getSlideCount(),h.currentDirection=1
}"vertical"!=c&&(h.slideHandler(g),h.touchObject={},h.$slider.trigger("swipe",[h,c]))
}else{h.touchObject.startX!==h.touchObject.curX&&(h.slideHandler(h.currentSlide),h.touchObject={})
}},b.prototype.swipeHandler=function(c){var f=this;
if(!(!1===f.options.swipe||"ontouchend" in document&&!1===f.options.swipe||!1===f.options.draggable&&-1!==c.type.indexOf("mouse"))){switch(f.touchObject.fingerCount=c.originalEvent&&void 0!==c.originalEvent.touches?c.originalEvent.touches.length:1,f.touchObject.minSwipe=f.listWidth/f.options.touchThreshold,!0===f.options.verticalSwiping&&(f.touchObject.minSwipe=f.listHeight/f.options.touchThreshold),c.data.action){case"start":f.swipeStart(c);
break;
case"move":f.swipeMove(c);
break;
case"end":f.swipeEnd(c)
}}},b.prototype.swipeMove=function(g){var p,f,q,h,u,j,c=this;
return u=void 0!==g.originalEvent?g.originalEvent.touches:null,!(!c.dragging||c.scrolling||u&&1!==u.length)&&(p=c.getLeft(c.currentSlide),c.touchObject.curX=void 0!==u?u[0].pageX:g.clientX,c.touchObject.curY=void 0!==u?u[0].pageY:g.clientY,c.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(c.touchObject.curX-c.touchObject.startX,2))),j=Math.round(Math.sqrt(Math.pow(c.touchObject.curY-c.touchObject.startY,2))),!c.options.verticalSwiping&&!c.swiping&&j>4?(c.scrolling=!0,!1):(!0===c.options.verticalSwiping&&(c.touchObject.swipeLength=j),f=c.swipeDirection(),void 0!==g.originalEvent&&c.touchObject.swipeLength>4&&(c.swiping=!0,g.preventDefault()),h=(!1===c.options.rtl?1:-1)*(c.touchObject.curX>c.touchObject.startX?1:-1),!0===c.options.verticalSwiping&&(h=c.touchObject.curY>c.touchObject.startY?1:-1),q=c.touchObject.swipeLength,c.touchObject.edgeHit=!1,!1===c.options.infinite&&(0===c.currentSlide&&"right"===f||c.currentSlide>=c.getDotCount()&&"left"===f)&&(q=c.touchObject.swipeLength*c.options.edgeFriction,c.touchObject.edgeHit=!0),!1===c.options.vertical?c.swipeLeft=p+q*h:c.swipeLeft=p+q*(c.$list.height()/c.listWidth)*h,!0===c.options.verticalSwiping&&(c.swipeLeft=p+q*h),!0!==c.options.fade&&!1!==c.options.touchMove&&(!0===c.animating?(c.swipeLeft=null,!1):void c.setCSS(c.swipeLeft))))
},b.prototype.swipeStart=function(f){var g,c=this;
if(c.interrupted=!0,1!==c.touchObject.fingerCount||c.slideCount<=c.options.slidesToShow){return c.touchObject={},!1
}void 0!==f.originalEvent&&void 0!==f.originalEvent.touches&&(g=f.originalEvent.touches[0]),c.touchObject.startX=c.touchObject.curX=void 0!==g?g.pageX:f.clientX,c.touchObject.startY=c.touchObject.curY=void 0!==g?g.pageY:f.clientY,c.dragging=!0
},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var c=this;
null!==c.$slidesCache&&(c.unload(),c.$slideTrack.children(this.options.slide).detach(),c.$slidesCache.appendTo(c.$slideTrack),c.reinit())
},b.prototype.unload=function(){var c=this;
a(".slick-cloned",c.$slider).remove(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove(),c.$nextArrow&&c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove(),c.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")
},b.prototype.unslick=function(c){var f=this;
f.$slider.trigger("unslick",[f,c]),f.destroy()
},b.prototype.updateArrows=function(){var c=this;
Math.floor(c.options.slidesToShow/2),!0===c.options.arrows&&c.slideCount>c.options.slidesToShow&&!c.options.infinite&&(c.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),c.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===c.currentSlide?(c.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),c.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):c.currentSlide>=c.slideCount-c.options.slidesToShow&&!1===c.options.centerMode?(c.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),c.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):c.currentSlide>=c.slideCount-1&&!0===c.options.centerMode&&(c.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),c.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))
},b.prototype.updateDots=function(){var c=this;
null!==c.$dots&&(c.$dots.find("li").removeClass("slick-active").end(),c.$dots.find("li").eq(Math.floor(c.currentSlide/c.options.slidesToScroll)).addClass("slick-active"))
},b.prototype.visibility=function(){var c=this;
c.options.autoplay&&(document[c.hidden]?c.interrupted=!0:c.interrupted=!1)
},a.fn.slick=function(){var e,c,h=this,f=arguments[0],j=Array.prototype.slice.call(arguments,1),g=h.length;
for(e=0;
e<g;
e++){if("object"==typeof f||void 0===f?h[e].slick=new b(h[e],f):c=h[e].slick[f].apply(h[e].slick,j),void 0!==c){return c
}}return h
}
});
function getUserProfileServiceURL(){var a=window.location.pathname;
if(a&&((a.lastIndexOf("/us/en/secure",0)===0)||(a.lastIndexOf("/content/ddpa/us/en/secure",0)===0))){return"/etc/ddpa/paths/secure/userProfileData.json"
}else{return"/etc/ddpa/paths/userProfileData.json"
}}function getI18nValue(b,a){if(typeof Granite!=undefined&&typeof Granite.I18n!=undefined){return Granite.I18n.get(b)
}return a
}var ajaxParams_default={url:null,requestType:"GET",dataType:"json",data:{},beforeSendCallbackFunction:null,successCallbackFunction:null,completeCallbackFunction:null,errorCallBackFunction:null,className:""};
var ajaxCall=function(b){let url=b.url;
let requestType=b.requestType;
let dataType=b.dataType;
let contentType=b.contentType;
let data=b.data;
let className=b.className;
let beforeSendCallbackFunction=b.beforeSendCallbackFunction;
let successCallbackFunction=b.successCallbackFunction;
let completeCallbackFunction=b.completeCallbackFunction;
let errorCallBackFunction=b.errorCallBackFunction;
var a=null;
$.ajax({url:url,crossDomain:true,type:requestType,contentType:contentType?contentType:"application/json",dataType:dataType,data:data?data:"",beforeSend:function(e,c){if(typeof beforeSendCallbackFunction==="function"){beforeSendCallbackFunction()
}},success:function(e,f,c){if(typeof successCallbackFunction==="function"){successCallbackFunction(e,className)
}},error:function(c,f,e){if(typeof errorCallBackFunction==="function"){errorCallBackFunction(e)
}},complete:function(c,e){if(typeof completeCallbackFunction==="function"){completeCallbackFunction()
}}})
};
function localStorageisValid(){if(localStorage&&typeof localStorage=="object"){return true
}else{return false
}}var openWithPost=function(b,f,e){$("#"+f+"").remove();
var c=document.createElement("form");
c.action=b;
c.method="POST";
c.target="_blank";
c.contenttype="application/json; charset=UTF-8";
if(e){var a=document.createElement("input");
a.type="hidden";
a.name="dentistResult";
a.value=JSON.stringify(e);
c.appendChild(a)
}c.style.display="none";
document.body.appendChild(c);
c.submit()
};
var docCookies={getItem:function(a){if(!a){return null
}return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null
},setItem:function(e,h,c,b,a,f){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e)){return false
}var g="";
if(c){switch(c.constructor){case Number:g=c===Infinity?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+c;
break;
case String:g="; expires="+c;
break;
case Date:g="; expires="+c.toUTCString();
break
}}document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(h)+g+(a?"; domain="+a:"")+(b?"; path="+b:"")+(f?"; secure":"");
return true
},removeItem:function(c,b,a){if(!this.hasItem(c)){return false
}document.cookie=encodeURIComponent(c)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(a?"; domain="+a:"")+(b?"; path="+b:"");
return true
},hasItem:function(a){if(!a||/^(?:expires|max\-age|path|domain|secure)$/i.test(a)){return false
}return(new RegExp("(?:^|;\\s*)"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)
},keys:function(){var a=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/);
for(var c=a.length,b=0;
b<c;
b++){a[b]=decodeURIComponent(a[b])
}return a
}};
var substringMatcher=function(a){return function b(f,c){var e;
e=[];
let stringPattern=new RegExp("^"+f,"i");
$.each(a,function(g,h){if(stringPattern.test(h)){e.push(h)
}});
c(e)
}
};
function isValidZipCode(a){var b=new RegExp("^[0-9]{5}$");
return b.test(a)
}function isObject(a){return typeof a=="object"?true:false
}function isString(a){return typeof a=="string"?true:false
}function isNumber(a){return typeof a=="number"?true:false
}function isBoolean(a){return typeof a=="boolean"?true:false
}function textNotEmpty(a){return(a&&a.length>0)?true:false
}function windowSize(){return $(window).width()
}$(function(){$(".columnctrl .row").each(function(){if($(this).hasClass("no-border")){$(this).removeClass("no-border").parent().addClass("no-border")
}})
});
var costEstPrivateErrorMsg=getI18nValue("costEstPrivateErrorMsg","Dentist not in network");
var memberCompanyState,subscriberProdCode,dentistProdCode,costEstPhaseIIIPlan,selectedDentistCEIII;
$(function(){let loginInvalid=$("#loginErrorStatus").data("invalid");
let loginAccountLocked=$("#loginErrorStatus").data("locked");
let loginAccountLockedWarning=$("#loginErrorStatus").data("locked-warning");
if(loginAccountLocked){$(".account-locked").addClass("visible");
$(".account-warning, .login-invalid").remove()
}else{if(loginAccountLockedWarning){$(".account-warning").addClass("visible");
$(".account-locked, .login-invalid").remove()
}else{if(loginInvalid){$(".login-invalid").addClass("visible");
$(".account-warning, .account-locked").remove()
}else{$(".account-warning, .account-locked").remove()
}}}let userInfoParams=$.extend({},ajaxParams_default);
userInfoParams.url=getUserProfileServiceURL();
userInfoParams.successCallbackFunction=updatePostLogin;
userInfoParams.errorCallBackFunction=profileAjaxFailed;
ajaxCall(userInfoParams);
$(".sign-out").on("click",function(){if(localStorageisValid()){localStorage.clear()
}let logoutParams=$.extend({},ajaxParams_default);
logoutParams.requestType="POST";
logoutParams.url=$(this).data("logout-aem").length>0?$(this).data("logout-aem")+"?tm="+getTimeInMilliSecs():"";
logoutParams.successCallbackFunction=logoutSuccess;
logoutParams.errorCallBackFunction=logoutFailure;
ajaxCall(logoutParams)
});
$(".username, .password").keyup(function(a){if(a.which==13){$(".login-btn").trigger("click")
}});
$(".login-btn").on("click",function(){$("#loginform .form-error").removeClass("visible");
let usernameLength=$("#loginform .username").val().length;
let passwordLength=$("#loginform .password").val().length;
if(usernameLength==0){$("#loginform .username-invalid").addClass("visible")
}if(passwordLength==0){$("#loginform .password-invalid").addClass("visible")
}if(usernameLength>0&&passwordLength>0){$("#loginform").submit()
}});
ddpa.rfpPage=$(".proposalform").length>0?true:false;
ddpa.inquiryPage=$(".inquiryform").length>0?true:false;
if(ddpa.rfpPage||ddpa.inquiryPage){$(".user-login-details .dropdown-toggle .caret.ddpa-caret-up").css("bottom","14px");
$(".user-login-details .dropdown-toggle").on("click",function(){$(this).parent().find(".dropdown-menu").toggle();
$(this).find("span").toggle()
})
}});
function updatePostLogin(b,a){updateProfileData(b,a);
if($(".subscriber-overview").length>0||$(".subscriber-links").length>0){updateUserState(b,a)
}}function updateProfileData(c,b){subscriberProdCode=c.productCode;
let userIsLoggedIn=false,fullname="",firstName="",userClass;
if(typeof c!="undefined"&&c&&typeof c=="object"){if(c&&c.authorizableId&&c.authorizableId!="anonymous"){userIsLoggedIn=true;
fullname=c.givenName+" "+c.familyName;
firstName=(c.givenName).toLowerCase();
memberCompanyState=c.state;
if(firstName.indexOf(" ")!=-1){var a=firstName.indexOf(" ");
firstName=firstName.substring(0,a)
}if(c.userClass&&c.userClass!=""){userClass=c.userClass
}}}if(userIsLoggedIn){subscriberProdCode=c.productCode;
modifyLoginComponent(userClass);
if(firstName!=null&&firstName.length>0){$(".welcome-user .user-name").text(firstName)
}else{fullname=fullname.toLowerCase();
$(".welcome-user .user-name").text(fullname)
}$(".mobile-nav-content .mob-user-logged-out").hide();
$(".signin-link-component").addClass("user-logged");
updateLoginDetails(fullname);
if(dentistProdCode){dentistProdCode=dentistProdCode.split(",").map(Number);
if(subscriberProdCode==="25"||subscriberProdCode==="26"){$(".cePrivateErrorMsg").html("")
}else{if((dentistProdCode===[1]||dentistProdCode===[20]||dentistProdCode===[1,20]||dentistProdCode===[20,1])&&(subscriberProdCode==="25"||subscriberProdCode==="26")){$(".cePrivateErrorMsg").html("")
}else{if(dentistProdCode.indexOf(parseInt(subscriberProdCode))==-1){$(".cePrivateErrorMsg").html(costEstPrivateErrorMsg)
}else{$(".cePrivateErrorMsg").html("")
}}}}}else{$(".user-not-logged-in").show();
$(".login-component .create-account").show();
$(".plans-wrapper").show();
$(".mobile-nav-content .mob-user-logged-in").hide()
}getStateListJson();
let memberLocatorParams=$.extend({},ajaxParams_default);
memberLocatorParams.url=textNotEmpty(stateListJsonPath)?stateListJsonPath:"/content/ddpa/us/en/data/plandata/_jcr_content.plans.json";
memberLocatorParams.successCallbackFunction=getPlanDataJsonResult;
ajaxCall(memberLocatorParams)
}function getPlanDataJsonResult(c,b){planDataResult=c;
for(var a=0;
a<c.stateDetails.length;
a++){if(c.stateDetails[a].stateAbbreviation===memberCompanyState){console.log("plan state abbrv ::: "+c.stateDetails[a].stateAbbreviation);
console.log("useCostEstPhaseIII :::: "+c.stateDetails[a].useCostEstPhaseIII);
costEstPhaseIIIPlan=c.stateDetails[a].useCostEstPhaseIII;
if(costEstPhaseIIIPlan==="true"){selectedDentistCEIII=true
}}}console.log("costEstPhaseIIIPlan::: "+costEstPhaseIIIPlan)
}function modifyLoginComponent(b){var a=userClassWithDDPA(b);
if(a){enableLoginComponentUserLinks(a);
$(".header ."+a).show()
}else{enableLoginComponentUserLinks(b);
$(".header ."+b).show()
}$(".login-component .create-account").hide();
$(".plans-wrapper").hide()
}function enableLoginComponentUserLinks(a){if(a&&$(".login-component ."+a)&&$(".login-component ."+a).length===0){$(".login-component ."+a).hide();
$(".login-component ").hide()
}else{$(".user-logged-in").show();
$(".user-logged-in ."+a).show();
$(".user-logged-in .sign-out-link").show()
}}function userClassWithDDPA(a){if("subscriber"===a){return"ddpaSubscriber"
}else{if("provider"===a){return"ddpaProvider"
}}return
}function profileAjaxFailed(){}function updateLoginDetails(a){$(".user-login-details .login-user-name").text(a);
$(".mobile-nav-content .my-account span.user-name").text(a);
$(".user-login-details").show()
}function logoutFailure(){}function logoutSuccess(b,a){var c=$(".sign-out").data("logout-url");
if(c!=null&&c.length>0){window.open(c,"_self")
}}function getTimeInMilliSecs(){var a=new Date();
var b=a.getTime();
return b
}var planDataResult;
var costEstLocLabel=getI18nValue("costEstLocLabel","Location:");
var costEstOffcLabel=getI18nValue("costEstOffcLabel","Office:");
var costEstSelPartLabel=getI18nValue("costEstSelPartLabel","Participates in:");
var costEstSelInNetLabel=getI18nValue("costEstSelInNetLabel","In-Network");
var costEstSelOutNetLabel=getI18nValue("costEstSelOutNetLabel","Out-of-Network");
var costEstInNetMobLabel=getI18nValue("costEstInNetMobLabel","In-Network:");
var costEstOutNetMobLabel=getI18nValue("costEstOutNetMobLabel","Out-of-Network:");
var costEstSelTotLabel=getI18nValue("costEstSelTotLabel","Total");
var dentistSearchSuccessEmail=getI18nValue("dentistSearchSuccessEmail","Success Message");
var dentistSearchFailedEmail=getI18nValue("dentistSearchFailedEmail","Failed Message");
var costEstViewMore=getI18nValue("costEstViewMore","View More");
var costEstViewLess=getI18nValue("costEstViewLess","View Less");
var costEstYourResponsibilityLabel=getI18nValue("costEstYourResponsibilityLabel","Your Responsibility");
var costEstDeductibleAppliedLabel=getI18nValue("costEstDeductibleAppliedLabel","Deductible Applied");
var costEstMaximumRemainingLabel=getI18nValue("costEstMaximumRemainingLabel","Maximum Remaining");
var costEstDisclaimerHeader=getI18nValue("costEstDisclaimerHeader","NOT A GUARANTEE OF BENEFIT");
var costEstPhaseIIIPlan=false;
var selectedDentistCEIII=false;
let ddpa={dentistSearchAjaxInProgress:false};
var stateListJsonPath="";
$(document).ready(function(){if($("#stateListPath").length>0&&$("#stateListPath").val().length>0){stateListJsonPath=$("#stateListPath").val()
}var e=$(".herobanner").closest(".col-lg-12").width();
$(".herobanner").css({width:e+30,"margin-left":"-15px"});
$(window).resize(function(){e=$(".herobanner").closest(".col-lg-12").width();
if($(".mobile-nav-content-wrapper").css("display")=="none"||typeof($(".mobile-nav-content-wrapper").css("display"))=="undefined"){$(".overlay").hide()
}else{$(".overlay").show()
}$(".herobanner").css({width:e+30,"margin-left":"-15px"});
if($(window).width()<990){$(".secondary-navlogo").show()
}if($(window).width()>767){$(".nav-list, .category-tabs, .ce-compared-table-body").show();
$(".toggle-nav").addClass("glyphicon-menu-up").removeClass("glyphicon-menu-down");
$(".mobile-nav-content-wrapper").slideUp();
if($(".category-arrow").hasClass("glyphicon-triangle-top")){$(".category-arrow").addClass("glyphicon-triangle-bottom").removeClass("glyphicon-triangle-top")
}if(window.matchMedia("(min-width: 991px)").matches&&$(".secondary-navbar").length){if($(window).scrollTop()>$(".secondary-navbar").offset().top){$(".secondary-navlogo").show()
}else{$(".secondary-navlogo").hide()
}}}else{$(".toggle-nav").addClass("glyphicon-menu-down").removeClass("glyphicon-menu-up");
$(".secondary-navlogo").show();
$(".category-tabs").hide();
if($(".category-arrow").hasClass("glyphicon-triangle-top")){$(".category-arrow").addClass("glyphicon-triangle-bottom").removeClass("glyphicon-triangle-top")
}}});
$(".toggle-search").click(function(){$(this).find("span").toggleClass("glyphicon-remove");
$(".mobile-nav-content-wrapper").slideUp();
$(".mobile-search-bar").slideToggle()
});
$(".toggle-hamburger").click(function(){$(".mobile-search-bar").slideUp();
$(".mobile-nav-content-wrapper").slideToggle("fast",hideOverlay)
});
$(".overlay").click(function(){$(".toggle-hamburger").trigger("click")
});
$(".move-down").click(function(){});
let getSelectedMenu=localStorage.getItem("userSelectedMenu")?localStorage.getItem("userSelectedMenu"):"";
showSubmenu(getSelectedMenu);
if(!getSelectedMenu||getSelectedMenu===""){$(".find-dental-dropdown-content p.description, .mobile-finddentallink").hide();
$(".find-dental-dropdown-content p.description.selected-homepage, .mobile-finddentallink.selected-homepage").show()
}$(".audience-list li a").on("click",function(h){h.preventDefault();
let attributVal=$(this).attr("target-list");
let parentListItem=$(this).closest(".audience-list >li");
localStorage.setItem("userSelectedMenu",parentListItem.children("a").attr("target-list"));
if(parentListItem.children("a[target-list='"+attributVal+"']").attr("href")){location.href=parentListItem.children("a[target-list='"+attributVal+"']").attr("href")
}parentListItem.children("a[target-list='"+attributVal+"']").add($(".audience-list li")).hide();
$("."+attributVal).fadeIn();
$("."+attributVal+" li").add(parentListItem).show()
});
var c=$(".current-nav-page a").attr("target-list");
$(".find-dental-dropdown-content p.description, .mobile-content-list li.mobile-finddentallink").hide();
if(c){$(".find-dental-dropdown-content p.description."+c).show();
$(".mobile-content-list li.current-nav-page, .mobile-content-list li."+c+" a").show()
}else{$(".find-dental-dropdown-content p.description, .mobile-finddentallink").hide();
$(".find-dental-dropdown-content p.description.selected-homepage, .mobile-finddentallink.selected-homepage").show()
}$(".selected-audience-list li a").on("click",function(){let attributVal=$(this).attr("target-list");
let parentListItem=$(this).closest(".audience-list >li").find("a");
let parentElement=$(this).closest(".selected-audience-list").hasClass("selected-expanded");
if(parentElement){$(".header-member-company-default").hide();
$(".header-member-company-variation").show()
}else{$(".header-member-company-variation").hide();
$(".header-member-company-default").show()
}$(".selected-audience-list").hide();
$("."+attributVal).fadeIn();
parentListItem.show();
$("."+getSelectedMenu+"-submenu, .selected-audience-mobilemenu ul:first-child").show()
});
let searchResultsPageURL=$("#search-results-page").val();
let searchTerm="";
$(".btn-search").on("click",function(){searchTerm=$(".search-query").val();
executeSearchQuery(searchResultsPageURL,searchTerm)
});
$(".search-query").on("keypress",function(h){if(h.which==13||h.which==9){searchTerm=$(this).val();
executeSearchQuery(searchResultsPageURL,searchTerm)
}});
$(".mobile-btn-search").on("click",function(){searchTerm=$(".mobile-search-query").val();
executeSearchQuery(searchResultsPageURL,searchTerm)
});
$(".mobile-search-query").on("keypress",function(h){if(h.which==13||h.which==9){searchTerm=$(this).val();
executeSearchQuery(searchResultsPageURL,searchTerm)
}});
let modifiedText="";
$(".small-article-col .small-article-info .small-article-title a").each(function(){if($(this).text().length>58){modifiedText=$(this).text().substring(0,58)+"...";
$(this).text(modifiedText)
}});
categorySelectorMobile();
let treatementListParams=$.extend({},ajaxParams_default);
treatementListParams.url=$(".treatment-list").attr("data-url")?$(".treatment-list").attr("data-url"):"/";
treatementListParams.successCallbackFunction=renderSelectDropdown;
treatementListParams.errorCallBackFunction=rendererrorSelectDropdown;
treatementListParams.className="treatment-list";
ajaxCall(treatementListParams);
suggestedUpdateForm();
DrawCaptcha();
costestimatorSubmitEntryform();
expandCostEstimatorInfo();
var a="",b="",f=[],g="";
if(localStorage&&typeof localStorage=="object"){a=localStorage.getItem("cePublicReq");
b=JSON.parse(localStorage.getItem("cePrivateResponse"));
if(a&&a.length>0&&a.indexOf("##")!=-1){f=a.split("##");
if(f[0].length>0&&f[0]!="empty"){g="treatment="+f[0];
$(".get-cetreatment-category").html(f[0])
}if(f[1].length>0&&f[1]!="empty"){g=g+"&zipCode="+f[1];
$(".get-cezipcode").html(f[1])
}if(f[2].length>0&&f[2]!="empty"){g=g+"&dentistLastName="+f[2]
}if((f[3])&&(f[3]!="empty")){g=g+"&ceType="+f[3]
}if($("#ceComparedPublicResultsList").html()){let dentistcePublicParams=$.extend({},ajaxParams_default);
dentistcePublicParams.url="/etc/ddpa/paths/publicCostEst.json?"+g;
dentistcePublicParams.successCallbackFunction=loadCePublicSearchResults;
ajaxCall(dentistcePublicParams)
}}else{if(b){if($("#ceComparedResultsList").html()){loadCePublicSearchResults(b)
}}}}$("#videoCtnr").on("click",function(){$("#videoPopUp").modal("show")
});
$(document).on("click",".video-img-hold",function(){$(this).parents(".video").find(".modal").modal("show")
});
$(".category-scroll-tab").on("click",function(){let targetTabContent=$(this).attr("href");
let scrollTabPos;
if(windowSize()>990){scrollTabPos=$(targetTabContent).offset().top-100
}else{if(windowSize()>767&&windowSize()<991){scrollTabPos=$(targetTabContent).offset().top-80
}else{scrollTabPos=$(targetTabContent).offset().top-380
}}$("html, body").animate({scrollTop:scrollTabPos},1500)
})
});
var fixNavbar=function(a){let scrollNavTop=$(window).scrollTop();
if(scrollNavTop>a){$(".move-down").hide();
$(".secondary-navbar").addClass("sticky-navbar");
if(windowSize()>990){$(".secondary-navlogo").show()
}}else{if(windowSize()>990){$(".secondary-navlogo").hide();
$(".mobile-search-bar").hide();
$(".toggle-search").find("span").removeClass("glyphicon-remove")
}else{$(".secondary-navlogo").show()
}$(".secondary-navbar").removeClass("sticky-navbar")
}};
function getPlanDataJsonResult(c,b){planDataResult=c;
for(var a=0;
a<c.stateDetails.length;
a++){if(c.stateDetails[a].stateAbbreviation===memberCompanyState){console.log("plan state abbrv ::: "+c.stateDetails[a].stateAbbreviation);
console.log("useCostEstPhaseIII :::: "+c.stateDetails[a].useCostEstPhaseIII);
costEstPhaseIIIPlan=c.stateDetails[a].useCostEstPhaseIII;
if(costEstPhaseIIIPlan==="true"){selectedDentistCEIII=true
}}}console.log("costEstPhaseIIIPlan::: "+costEstPhaseIIIPlan)
}var fixDentistMap=function(a){if(($(window).scrollTop()>a)&&($(window).scrollTop()<$(".search-results").height())){$(".search-results-map").addClass("map-fixed").removeClass("map-placebottom")
}else{if($(window).scrollTop()>$(".search-results-map").height()){$(".search-results-map").removeClass("map-fixed").addClass("map-placebottom")
}else{$(".search-results-map").removeClass("map-fixed").removeClass("map-placebottom")
}}};
var showSubmenu=function(a){let selectedMenu=a;
let href=document.location.href;
let lastPathSegment=href.substr(href.lastIndexOf("/")+1);
$(".selected-audience-menu ul, .selected-audience-mobilemenu ul").hide();
if((selectedMenu==="")||(location.href===location.origin+"/")||(lastPathSegment==="homepage.html")){$(".selected-audience-list, .links-list").hide();
$(".audience-list > li, .signin-link-component, .header-member-company-default").show();
$(".find-dental-dropdown-content p.description, .mobile-finddentallink").hide();
$(".find-dental-dropdown-content p.description bold selected-homepage, .mobile-finddentallink.selected-homepage").show();
if($(".header-member-company-variation").hasClass("selected-homepage-general")){$(".header-member-company-variation").hide();
$(".header-member-company-default").show()
}else{$(".header-member-company-default").hide();
$(".header-member-company-variation").show()
}}else{$(".audience-list > li").hide();
$("."+selectedMenu+"-submenu, .links-list").show();
$("."+selectedMenu).closest("li").show().addClass("current-nav-page");
$("."+selectedMenu).closest("li").children("a").hide();
if($(".current-nav-page > a").data("signin")){if(!$(".signin-link-component").hasClass("user-logged")){$(".signin-link-component").show()
}else{$(".signin-link-component").hide()
}}else{$(".signin-link-component").hide()
}if($(".current-nav-page > ul").hasClass("selected-expanded")||!$(".current-nav-page").is(":visible")){$(".header-member-company-default").hide();
$(".header-member-company-variation").show()
}else{$(".header-member-company-default").show();
$(".header-member-company-variation").hide()
}}$(document).on("click",".logo a, .secondary-navlogo a",function(){localStorage.removeItem("userSelectedMenu")
})
};
var errorEmailDentistList=function(){$("#sendMailPopUp").hide();
$(".email-success-popup .success-mail-text").html(dentistSearchFailedEmail);
$(".email-success-popup").show();
$(".success-mail-btn, .close").on("click",function(){$(".modal").modal("hide");
$(this).closest(".modal").hide()
})
};
var successEmailDentistList=function(a){if(a){$("#sendMailPopUp").hide();
$(".email-success-popup .success-mail-text").html('<span class="success-icon"></span><label>'+dentistSearchSuccessEmail+"</label>");
$(".email-success-popup").show();
$(".success-mail-btn, .close").on("click",function(){$(".modal").modal("hide");
$(this).closest(".modal").hide()
})
}else{errorEmailDentistList()
}};
var loadCePublicSearchResults=function(a){console.log("CE DATA in loadCePublicSearchResults :::: "+JSON.stringify(a));
$(".ce-compared-results-list").empty();
if(a.ERROR){console.log("NO SOAP RESPONSE")
}else{if(a.estimates){console.log("Processsing CE III results");
if(a.estimates.Errors.Error.ErrorCode!="00"){console.log("Processing CE III error message");
$(".ce-compared-results-list").html('<span class="form-error-msg">'+a.estimates.Errors.Error.ErrorMessage+"</span>")
}else{$(".get-cetreatment-category").html(localStorage.getItem("ceTreatmentCategory"));
$(".get-cezipcode").html(localStorage.getItem("ceLocation"));
renderCESearchResults(a)
}}else{if(a.length){$("h2.ce-compared-head").html($("h2.ce-compared-head").data("compared-title"));
$(".get-cetreatment-category").html(a[0].categoriesList.category.categoryCode);
$(".get-cezipcode").html(localStorage.getItem("ceLocation"));
$.each(a,function(c,b){renderCESearchResults(b)
})
}else{if(a.error){$(".ce-compared-results-list").html('<span class="form-error-msg">'+a.error+"</span>")
}else{$("h2.ce-compared-head").html($("h2.ce-compared-head").data("estimated-title"));
$(".get-cetreatment-category").is(":empty")?$(".get-cetreatment-category").html(a.categoriesList.category.categoryCode):"";
$(".get-cezipcode").html(localStorage.getItem("ceLocation"));
renderCESearchResults(a)
}}}}};
var renderCESearchResults=function(b){console.log("CE DATA in redenderCESearchResults :::: "+JSON.stringify(b));
dentistProdCode=localStorage.getItem("dentistProdCode");
var c=b.selectedDentist?b.selectedDentist:"";
if(b.estimates){var a=b.estimates;
$(".ce-compared-head-desc").html(localStorage.getItem("ceTreatmentCategoryDescription"))
}else{var e=b.categoriesList?b.categoriesList.category.products.product:b.category.products.product;
$(".ce-compared-head-desc").html(b.categoriesList?b.categoriesList.category.categoryDescription:b.category.categoryDescription)
}let ceComparedResultsListTemplate;
if(a){console.log("RENDER CE III RESULTS");
if($("#ceComparedResultsList").html()){ceComparedResultsListSource=$("#ceComparedResultsList").html();
let ceComparedResultsListTemplate=Handlebars.compile(ceComparedResultsListSource);
selectedDentistCEIII={selectedDentistName:c.dentistName,selectedDentistDesingnation:c.dentistDesig,selectedDentistAddress:c.dentistAddress,selectedDentistState:c.dentistState,selectedDentistOfficeName:c.officeName,selectedDentistParticipates:c.dentistParticipates,ceOOPCost:parseFloat(a.OOPCost).toFixed(2),ceOOPMessage:a.OOPMessage,ceDeductibleApplied:parseFloat(a.Deductible).toFixed(2),ceMaximumRemaining:parseFloat(a.RemainingMaximum).toFixed(2),ceSelectedLocationLabel:costEstLocLabel,ceSelectedOfficeLabel:costEstOffcLabel,ceSelectedParticipatesLabel:costEstSelPartLabel,ceYourResponsibilityLabel:costEstYourResponsibilityLabel,ceDeductibleAppliedLabel:costEstDeductibleAppliedLabel,ceMaximumRemainingLabel:costEstMaximumRemainingLabel,ceDisclaimerHeader:costEstDisclaimerHeader,ceDisclaimer:a.Disclaimer};
console.log("selectedDentistCEIII ::: "+JSON.stringify(selectedDentistCEIII));
let ceComparedResultsListRowHtml=ceComparedResultsListTemplate(selectedDentistCEIII);
$(".ce-compared-results-list").append(ceComparedResultsListRowHtml)
}}else{if(e.length){if($("#ceComparedResultsList").html()){ceComparedResultsListSource=$("#ceComparedResultsList").html();
let ceComparedResultsListTemplate=Handlebars.compile(ceComparedResultsListSource);
let ceComparedDentistProcedureInfo=[];
if(e[0].procedures.procedure.length){$.each(e[0].procedures.procedure,function(g,f){if(e[0].productCode==="00"){ceComparedDentistProcedureInfoItem={procedureDescription:f.procedureDescription,inNetworkProcedureLowcost:((e[1].procedures.procedure[g].procedureLowCost&&e[1].procedures.procedure[g].procedureLowCost!=e[1].procedures.procedure[g].procedureHighCost)?"<span>$</span>"+Number(e[1].procedures.procedure[g].procedureLowCost).toLocaleString("en")+" - ":""),inNetworkProcedureHighcost:Number(e[1].procedures.procedure[g].procedureHighCost).toLocaleString("en"),outNetworkProcedureLowcost:((e[0].procedures.procedure[g].procedureLowCost&&e[0].procedures.procedure[g].procedureLowCost!=e[0].procedures.procedure[g].procedureHighCost)?"<span>$</span>"+Number(e[0].procedures.procedure[g].procedureLowCost).toLocaleString("en")+" - ":""),outNetworkProcedureHighcost:Number(e[0].procedures.procedure[g].procedureHighCost).toLocaleString("en"),inNetworkTotalLowcost:((e[1].totalLowCost&&e[1].totalLowCost!=e[1].totalHighCost)?"<span>$</span>"+Number(e[1].totalLowCost).toLocaleString("en")+" - ":""),inNetworkTotalHighcost:Number(e[1].totalHighCost).toLocaleString("en"),outNetworkTotalLowcost:((e[0].totalLowCost&&e[0].totalLowCost!=e[0].totalHighCost)?"<span>$</span>"+Number(e[0].totalLowCost).toLocaleString("en")+" - ":""),outNetworkTotalHighcost:Number(e[0].totalHighCost).toLocaleString("en"),ceSelectedInNetworkMobileLabel:costEstInNetMobLabel,ceSelectedOutNetworkMobileLabel:costEstOutNetMobLabel}
}else{ceComparedDentistProcedureInfoItem={procedureDescription:f.procedureDescription,inNetworkProcedureLowcost:((e[0].procedures.procedure[g].procedureLowCost&&e[0].procedures.procedure[g].procedureLowCost!=e[0].procedures.procedure[g].procedureHighCost)?"<span>$</span>"+Number(e[0].procedures.procedure[g].procedureLowCost).toLocaleString("en")+" - ":""),inNetworkProcedureHighcost:Number(e[0].procedures.procedure[g].procedureHighCost).toLocaleString("en"),outNetworkProcedureLowcost:((e[1].procedures.procedure[g].procedureLowCost&&e[1].procedures.procedure[g].procedureLowCost!=e[1].procedures.procedure[g].procedureHighCost)?"<span>$</span>"+Number(e[1].procedures.procedure[g].procedureLowCost).toLocaleString("en")+" - ":""),outNetworkProcedureHighcost:Number(e[1].procedures.procedure[g].procedureHighCost).toLocaleString("en"),inNetworkTotalLowcost:((e[0].totalLowCost&&e[0].totalLowCost!=e[0].totalHighCost)?"<span>$</span>"+Number(e[0].totalLowCost).toLocaleString("en")+" - ":""),inNetworkTotalHighcost:Number(e[0].totalHighCost).toLocaleString("en"),outNetworkTotalLowcost:((e[1].totalLowCost&&e[1].totalLowCost!=e[1].totalHighCost)?"<span>$</span>"+Number(e[1].totalLowCost).toLocaleString("en")+" - ":""),outNetworkTotalHighcost:Number(e[1].totalHighCost).toLocaleString("en"),ceSelectedInNetworkMobileLabel:costEstInNetMobLabel,ceSelectedOutNetworkMobileLabel:costEstOutNetMobLabel}
}ceComparedDentistProcedureInfo.push(ceComparedDentistProcedureInfoItem)
})
}else{if(e[0].productCode==="00"){ceComparedDentistProcedureInfo=[{procedureDescription:e[0].procedures.procedure.procedureDescription,inNetworkProcedureLowcost:((e[1].procedures.procedure.procedureLowCost&&e[1].procedures.procedure.procedureLowCost!=e[1].procedures.procedure.procedureHighCost)?"<span>$</span>"+Number(e[1].procedures.procedure.procedureLowCost).toLocaleString("en")+" - ":""),inNetworkProcedureHighcost:Number(e[1].procedures.procedure.procedureHighCost).toLocaleString("en"),outNetworkProcedureLowcost:((e[0].procedures.procedure.procedureLowCost&&e[0].procedures.procedure.procedureLowCost!=e[0].procedures.procedure.procedureHighCost)?"<span>$</span>"+Number(e[0].procedures.procedure.procedureLowCost).toLocaleString("en")+" - ":""),outNetworkProcedureHighcost:Number(e[0].procedures.procedure.procedureHighCost).toLocaleString("en"),inNetworkTotalLowcost:((e[1].totalLowCost&&e[1].totalLowCost!=e[1].totalHighCost)?"<span>$</span>"+Number(e[1].totalLowCost).toLocaleString("en")+" - ":""),inNetworkTotalHighcost:Number(e[1].totalHighCost).toLocaleString("en"),outNetworkTotalLowcost:((e[0].totalLowCost&&e[0].totalLowCost!=e[0].totalHighCost)?"<span>$</span>"+Number(e[0].totalLowCost).toLocaleString("en")+" - ":""),outNetworkTotalHighcost:Number(e[0].totalHighCost).toLocaleString("en"),ceSelectedInNetworkMobileLabel:costEstInNetMobLabel,ceSelectedOutNetworkMobileLabel:costEstOutNetMobLabel}]
}else{ceComparedDentistProcedureInfo=[{procedureDescription:e[0].procedures.procedure.procedureDescription,inNetworkProcedureLowcost:((e[0].procedures.procedure.procedureLowCost&&e[0].procedures.procedure.procedureLowCost!=e[0].procedures.procedure.procedureHighCost)?"<span>$</span>"+Number(e[0].procedures.procedure.procedureLowCost).toLocaleString("en")+" - ":""),inNetworkProcedureHighcost:Number(e[0].procedures.procedure.procedureHighCost).toLocaleString("en"),outNetworkProcedureLowcost:((e[1].procedures.procedure.procedureLowCost&&e[1].procedures.procedure.procedureLowCost!=e[1].procedures.procedure.procedureHighCost)?"<span>$</span>"+Number(e[1].procedures.procedure.procedureLowCost).toLocaleString("en")+" - ":""),outNetworkProcedureHighcost:Number(e[1].procedures.procedure.procedureHighCost).toLocaleString("en"),inNetworkTotalLowcost:((e[0].totalLowCost&&e[0].totalLowCost!=e[0].totalHighCost)?"<span>$</span>"+Number(e[0].totalLowCost).toLocaleString("en")+" - ":""),inNetworkTotalHighcost:Number(e[0].totalHighCost).toLocaleString("en"),outNetworkTotalLowcost:((e[1].totalLowCost&&e[1].totalLowCost!=e[1].totalHighCost)?"<span>$</span>"+Number(e[1].totalLowCost).toLocaleString("en")+" - ":""),outNetworkTotalHighcost:Number(e[1].totalHighCost).toLocaleString("en"),ceSelectedInNetworkMobileLabel:costEstInNetMobLabel,ceSelectedOutNetworkMobileLabel:costEstOutNetMobLabel}]
}}let ceSelectedDentistInfo={selectedDentistName:c.dentistName,selectedDentistDesingnation:c.dentistDesig,selectedDentistAddress:c.dentistAddress,selectedDentistState:c.dentistState,selectedDentistOfficeName:c.officeName,selectedDentistParticipates:c.dentistParticipates,selectedDentistProcedureLength:e[0].procedures.procedure.length,ceComparedDentistProcedureInfo:ceComparedDentistProcedureInfo,inNetworkTotalLowcost:ceComparedDentistProcedureInfo[0].inNetworkTotalLowcost,inNetworkTotalHighcost:ceComparedDentistProcedureInfo[0].inNetworkTotalHighcost,outNetworkTotalLowcost:ceComparedDentistProcedureInfo[0].outNetworkTotalLowcost,outNetworkTotalHighcost:ceComparedDentistProcedureInfo[0].outNetworkTotalHighcost,ceSelectedLocationLabel:costEstLocLabel,ceSelectedOfficeLabel:costEstOffcLabel,ceSelectedParticipatesLabel:costEstSelPartLabel,ceSelectedInNetworkLabel:costEstSelInNetLabel,ceSelectedOutNetworkLabel:costEstSelOutNetLabel,ceSelectedInNetworkMobileLabel:costEstInNetMobLabel,ceSelectedOutNetworkMobileLabel:costEstOutNetMobLabel,ceSelectedTotalLabel:costEstSelTotLabel,ceSelectedViewMoreLabel:costEstViewMore};
let ceComparedResultsListRowHtml=ceComparedResultsListTemplate(ceSelectedDentistInfo);
$(".ce-compared-results-list").append(ceComparedResultsListRowHtml)
}}else{if($("#ceComparedPublicResultsList").html()){ceComparedResultsListSource=$("#ceComparedPublicResultsList").html();
let ceComparedResultsListTemplate=Handlebars.compile(ceComparedResultsListSource);
let cePublicResultsData,cePublicResultsDetailData=[];
if(e.procedures.procedure.length){$.each(e.procedures.procedure,function(g,f){let cePublicResultsItem={cePublicProdDescription:f.procedureDescription,cePublicProdLowCost:(f.procedureLowCost?"<span>$</span>"+Number(f.procedureLowCost).toLocaleString("en")+" - ":""),cePublicProdHighCost:Number(f.procedureHighCost).toLocaleString("en"),ceSelectedInNetworkMobileLabel:costEstInNetMobLabel,ceSelectedOutNetworkMobileLabel:costEstOutNetMobLabel};
cePublicResultsDetailData.push(cePublicResultsItem)
})
}else{cePublicResultsDetailData=[{cePublicProdDescription:e.procedures.procedure.procedureDescription,cePublicProdLowCost:(e.procedures.procedure.procedureLowCost?"<span>$</span>"+Number(e.procedures.procedure.procedureLowCost).toLocaleString("en")+" - ":""),cePublicProdHighCost:Number(e.procedures.procedure.procedureHighCost).toLocaleString("en"),ceSelectedInNetworkMobileLabel:costEstInNetMobLabel,ceSelectedOutNetworkMobileLabel:costEstOutNetMobLabel}]
}cePublicResultsData={cePublicResultsDetailData:cePublicResultsDetailData,cePublicResultTotalLowCost:(e.totalLowCost?"<span>$</span>"+Number(e.totalLowCost).toLocaleString("en")+" - ":""),cePublicResultTotalHighCost:Number(e.totalHighCost).toLocaleString("en"),ceSelectedInNetworkLabel:costEstSelInNetLabel,ceSelectedOutNetworkLabel:costEstSelOutNetLabel,ceSelectedInNetworkMobileLabel:costEstInNetMobLabel,ceSelectedOutNetworkMobileLabel:costEstOutNetMobLabel,ceSelectedTotalLabel:costEstSelTotLabel,ceSelectedViewMoreLabel:costEstViewMore};
let ceComparedResultsListRowHtml=ceComparedResultsListTemplate(cePublicResultsData);
$(".ce-compared-results-list").append(ceComparedResultsListRowHtml)
}}}};
var validateEmail=function(a){var b=/\s*\w+@[^\.]+\.[^\.]+(\.[^\.])*\s*/;
if(!b.test(a)){return false
}return true
};
var DrawCaptcha=function(){var j=Math.ceil(Math.random()*10)+"";
var h=Math.ceil(Math.random()*10)+"";
var r=Math.ceil(Math.random()*10)+"";
var q=Math.ceil(Math.random()*10)+"";
var p=Math.ceil(Math.random()*10)+"";
var o=Math.ceil(Math.random()*10)+"";
var n=Math.ceil(Math.random()*10)+"";
var l=j+" "+h+"  "+r+" "+q+" "+p+" "+o+" "+n;
$(".captcha-text").html(l)
};
var removeSpaces=function(a){return a.split(" ").join("")
};
var categorySelectorMobile=function(){$(".category-selected-tab-mobile").on("click",function(){toggleCategoryTabMobile()
});
$(".category-tabs li").on("click",function(){$(".category-title-selected").html($(this).children("a").text());
toggleCategoryTabMobile()
})
};
function executeSearchQuery(b,a){window.open(b+"/?s="+a,"_self")
}function toggleCategoryTabMobile(){if($(window).width()<767){$(".nav-tabs").toggle();
$(".category-arrow").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top")
}}function renderSelectDropdown(b,a){ajaxResponse=b?b:""
}function rendererrorSelectDropdown(){ajaxResponse=""
}var costestimatorSubmitEntryform=function(){$(".glyphicon-remove").on("click",function(){$(this).closest("div").find("input").val().length?$(this).closest("div").find("input").val(""):"";
$(this).closest("div").find("input").removeClass("activeField")
});
$("#ceZipCode, #dentistLastName").keyup(function(a){if(a.which==13){$(".costestimator-submit").trigger("click")
}});
$(".costestimator-submit").on("click",function(){if(($("#treatmentCategory").val()&&$("#treatmentCategory").val().length>0)&&$("#ceZipCode").val().length===5&&!isNaN($("#ceZipCode").val())){var j=$("body").height();
var h=$("#dentistLastName").val()?$("#dentistLastName").val():"";
$(".ce-component-errormsg").hide();
var l=$("#treatmentCategory").val().length>0?$("#treatmentCategory").val().split("|"):"empty";
var c=l[0];
var g=l[1];
var f=$("#ceZipCode").val().length>0?$("#ceZipCode").val():"empty";
var b=h.length>0?h:"empty";
var a=$("#ceType").val()?$("#ceType").val():"empty";
var e=c+"##"+f+"##"+b+"##"+a;
localStorage.setItem("ceLocation",$("#ceZipCode").val().length>0?$("#ceZipCode").val():"");
localStorage.setItem("ceTreatmentCategory",c);
localStorage.setItem("ceTreatmentCategoryDescription",g);
if(localStorage&&typeof localStorage=="object"){localStorage.setItem("cePublicReq",e)
}if((h.length>0)&&(h!="")&&(h.trim()!=="")){let dentistPrivateCEObj={zipCode:$("#ceZipCode").val(),lastName:h};
let dentistPrivateCEParams=$.extend({},ajaxParams_default);
let memberLocatorParams=$.extend({},ajaxParams_default);
memberLocatorParams.url=textNotEmpty(stateListJsonPath)?stateListJsonPath:"/content/ddpa/us/en/data/plandata/_jcr_content.plans.json";
memberLocatorParams.successCallbackFunction=getPlanDataJsonResult;
ajaxCall(memberLocatorParams);
if(costEstPhaseIIIPlan==="true"){dentistPrivateCEParams.url="/etc/ddpa/paths/secure/memberCompanyProviderCostEst.json?zipCode="+$("#ceZipCode").val()+"&lastName="+h
}else{dentistPrivateCEParams.url="/etc/ddpa/paths/secure/providerCostEst.json?zipCode="+$("#ceZipCode").val()+"&lastName="+h
}dentistPrivateCEParams.successCallbackFunction=dentistPrivateCESuccess;
dentistPrivateCEParams.errorCallBackFunction=dentistPrivateCEError;
ajaxCall(dentistPrivateCEParams);
limitAddDentistCompare(3);
ceDentistCompareBtn(j)
}else{if(docCookies.getItem("acceptTermsnCond")!=="Agree"){$(".overlay-background").css("height",j).show();
$("html, body").animate({scrollTop:100},"slow");
$(".termsncond-container").show();
$("html").addClass("non-scrollable");
ceRedirectToResults($(".agree-terms").data("cepublicurl"))
}else{location.href=$(".agree-terms").data("cepublicurl")
}}$(".close, .disagree-btn").on("click",function(){$(".termsncond-container").animate({scrollTop:$(".termsncond-container .modal-content").offset().top});
$(".termsncond-container, .overlay-background, .ce-dentist-compare-container").hide();
$("html").removeClass("non-scrollable")
})
}else{$(".ce-component-errormsg").show();
return false
}})
};
var dentistPrivateCESuccess=function(b){var f=$("body").height();
$(".overlay-background").css("height",f).show();
$("html, body").animate({scrollTop:100},"slow");
$(".ce-dentist-compare-list").empty();
$(".ce-dentist-compare-container").show();
$("html").addClass("non-scrollable");
$(".ce-popup-lname-input").html("'"+$("#dentistLastName").val()+"'");
var e=$("#ceDentistCompareList").html();
var a=Handlebars.compile(e);
if(!($.isEmptyObject(b))&&b.providers){if(b.providers.provider.length){$(".ce-total-dentistresults").html(b.providers.provider.length);
$.each(b.providers.provider,function(h,g){let dentistCEPrivateRow=renderDentistCompareList(h,g);
var j=a(dentistCEPrivateRow);
$(".ce-dentist-compare-list").append(j)
})
}else{$(".ce-total-dentistresults").html("1");
let dentistCEPrivateRow=renderDentistCompareList(0,b.providers.provider);
var c=a(dentistCEPrivateRow);
$(".ce-dentist-compare-list").append(c)
}$(".ce-dentist-compare-container .ce-dentist-compare-btn").show();
$(".ce-dentist-compare-container .ce-results-error").hide();
estimatePrivateDentistResults()
}else{$(".ce-total-dentistresults").html("0");
$(".ce-dentist-compare-container .ce-dentist-compare-btn").hide();
$(".ce-dentist-compare-container .ce-results-error").show()
}};
var renderDentistCompareList=function(b,a){let prodDescription="";
let prodCode="";
if(a.products.product.length){prodDescription=a.products.product[0].productDescription+", "+a.products.product[1].productDescription;
prodCode=a.products.product[0].productCode+", "+a.products.product[1].productCode
}else{prodDescription=a.products.product.productDescription;
prodCode=a.products.product.productCode
}if(costEstPhaseIIIPlan==="true"){let dentistCEPrivateRow={providerLicense:a.prvdrLicense,providerType:a.prvdrType,providerBusId:a.prvdrBusId,providerCity:a.prvdrCity,providerZipCode:a.prvdrZip,providerState:a.prvdrState,providerSrvcOffTableId:a.prvdrSrvcOffTableId,providerAddress:a.prvdrAddress1,providerOfficeName:a.prvdrOfficeName,providerOffNum:a.prvdrSrvcOffNumber,listNum:b+1,dentistFirstName:a.prvdrFirstName,dentistLastName:a.prvdrLastName,specialityCode:a.specialties.specialty.specialtyCode,specialityDescription:a.specialties.specialty.specialtyDescription,productDescription:prodDescription,providerProdCode:prodCode,providerSrvcOffId:a.prvdrSrvcOffNumber};
return dentistCEPrivateRow
}else{let dentistCEPrivateRow={providerLicense:a.prvdrLicense,providerType:a.prvdrType,providerBusId:a.prvdrBusId,providerCity:a.prvdrCity,providerZipCode:a.prvdrZip,providerState:a.prvdrState,providerSrvcOffTableId:a.prvdrSrvcOffTableId,providerAddress:a.prvdrAddress1,providerOfficeName:a.prvdrOfficeName,providerOffNum:a.prvdrSrvcOffNumber,listNum:b+1,dentistFirstName:a.prvdrFirstName,dentistLastName:a.prvdrLastName,specialityCode:a.specialties.specialty.specialtyCode,specialityDescription:a.specialties.specialty.specialtyDescription,productDescription:prodDescription,providerProdCode:prodCode};
return dentistCEPrivateRow
}};
var estimatePrivateDentistResults=function(){$(document).on("click",".ce-compare-dentistname",function(b){let dentistEstInfoObj={},dentistNamePostData=[];
let thisdentistrow=$(this).closest(".ce-dentist-compare-row");
var a=$("#treatmentCategory").val().length>0?$("#treatmentCategory").val().split("|"):"empty";
let getCategoryCode=a[0];
if(costEstPhaseIIIPlan==="true"){dentistEstInfoObj.MemberCompanyID=memberCompanyState;
dentistEstInfoObj.license=thisdentistrow.find(".dentistlicense").val();
dentistEstInfoObj.prvdrType=thisdentistrow.find(".dentisttype").val();
dentistEstInfoObj.speciality=thisdentistrow.find(".ce-compare-dentist-desig").children("input").val();
dentistEstInfoObj.officeName=thisdentistrow.find(".dentistofficename").text();
dentistEstInfoObj.busId=thisdentistrow.find(".dentistbusid").val();
dentistEstInfoObj.zipCode=thisdentistrow.find(".dentistzipcode").val();
dentistEstInfoObj.prvdrState=thisdentistrow.find(".dentiststate").val();
dentistEstInfoObj.prvdrSrvcOffTableId=thisdentistrow.find(".dentistsrvcofftableid").val();
dentistEstInfoObj.prvdrAddress=thisdentistrow.find(".dentistaddress").val();
dentistEstInfoObj.officeNumber=thisdentistrow.find(".dentistofficenumber").val();
dentistEstInfoObj.categoryCode=getCategoryCode;
dentistEstInfoObj.productCode=thisdentistrow.find(".dentistproductCode").val();
dentistEstInfoObj.prvdrSrvcOffId=thisdentistrow.find(".dentistsrvoffid").val()
}else{dentistEstInfoObj.license=thisdentistrow.find(".dentistlicense").val();
dentistEstInfoObj.prvdrType=thisdentistrow.find(".dentisttype").val();
dentistEstInfoObj.speciality=thisdentistrow.find(".ce-compare-dentist-desig").children("input").val();
dentistEstInfoObj.officeName=thisdentistrow.find(".dentistofficename").text();
dentistEstInfoObj.busId=thisdentistrow.find(".dentistbusid").val();
dentistEstInfoObj.zipCode=thisdentistrow.find(".dentistzipcode").val();
dentistEstInfoObj.prvdrState=thisdentistrow.find(".dentiststate").val();
dentistEstInfoObj.prvdrSrvcOffTableId=thisdentistrow.find(".dentistsrvcofftableid").val();
dentistEstInfoObj.prvdrAddress=thisdentistrow.find(".dentistaddress").val();
dentistEstInfoObj.officeNumber=thisdentistrow.find(".dentistofficenumber").val();
dentistEstInfoObj.categoryCode=getCategoryCode;
dentistEstInfoObj.productCode=thisdentistrow.find(".dentistproductCode").val()
}dentistNamePostData.push(dentistEstInfoObj);
let dentistNamePostDataObj={costEst:dentistNamePostData};
let dentistInfo={selectedDentist:{dentistName:thisdentistrow.find(".ce-compare-dentistname").html(),zipCode:thisdentistrow.find(".dentistzipcode").val(),dentistDesig:thisdentistrow.find(".ce-compare-dentist-desig").text(),officeName:thisdentistrow.find(".dentistofficename").text(),dentistAddress:thisdentistrow.find(".ce-compare-dentiststreet").text(),dentistState:thisdentistrow.find(".ce-compare-dentiststate").text(),dentistParticipates:thisdentistrow.find(".ce-compare-participates").text()}};
localStorage.setItem("cePrivateResponse",JSON.stringify(dentistInfo));
localStorage.setItem("dentistProdCode",thisdentistrow.find(".dentistproductCode").val());
let dentistPrivateCEParams=$.extend({},ajaxParams_default);
if(costEstPhaseIIIPlan==="true"){dentistPrivateCEParams.url="/etc/ddpa/paths/secure/memberCompanyPrivateCostEst.json"
}else{dentistPrivateCEParams.url="/etc/ddpa/paths/secure/privateCostEst.json"
}dentistPrivateCEParams.requestType="POST";
dentistPrivateCEParams.data=JSON.stringify(dentistNamePostDataObj);
dentistPrivateCEParams.successCallbackFunction=dentistPrivateEstSuccess;
ajaxCall(dentistPrivateCEParams)
})
};
var dentistPrivateEstSuccess=function(b){var a=b[0];
a=$.extend(a,JSON.parse(localStorage.getItem("cePrivateResponse")));
a=JSON.stringify(a);
if(localStorage&&typeof localStorage=="object"){localStorage.removeItem("cePublicReq");
localStorage.setItem("cePrivateResponse",a);
if(docCookies.getItem("acceptTermsnCond")!=="Agree"){$(".ce-dentist-compare-container").hide();
$(".termsncond-container").show();
$("html").addClass("non-scrollable");
$("html, body").animate({scrollTop:100},"slow");
ceRedirectToResults($(".agree-terms").data("ceprivateurl"))
}else{$(".termsncond-container").hide();
location.href=$(".agree-terms").data("ceprivateurl")
}}};
var dentistPrivateCEError=function(a){var c=$("body").height();
$(".overlay-background").css("height",c).show();
$("html, body").animate({scrollTop:100},"slow");
$(".ce-dentist-compare-list").empty();
$(".ce-dentist-compare-container").show();
$("html").addClass("non-scrollable");
$(".ce-popup-lname-input").html("'"+$("#dentistLastName").val()+"'");
var b=$("#ceDentistCompareList").html();
$(".ce-total-dentistresults").html("0");
$(".ce-dentist-compare-container .ce-dentist-compare-btn").hide();
$(".ce-dentist-compare-container .ce-results-error").show()
};
var ceRedirectToResults=function(a){$(".agree-terms").on("click",function(b){b.stopImmediatePropagation();
b.preventDefault();
docCookies.setItem("acceptTermsnCond","Agree");
location.href=a
})
};
var ceDentistCompareBtn=function(a){$(".ce-dentist-compare-btn .submit-btn").on("click",function(c){c.stopImmediatePropagation();
c.preventDefault();
if($('.ce-dentist-compare-list input[type="checkbox"]:checked').length===0){alert("Please select atleast one dentist to compare")
}else{$(".ce-dentist-compare-container").hide();
$("html").addClass("non-scrollable");
$("html, body").animate({scrollTop:100},"slow");
var f=[],b=[];
$.each($('.ce-dentist-compare-list input[type="checkbox"]:checked'),function(g,e){let dentistEstInfoObj={};
let thisdentistrow=$(this).closest(".ce-dentist-compare-row");
let getCategoryCode=$("#treatmentCategory").val().length>0?$("#treatmentCategory").val():"";
if(costEstPhaseIIIPlan==="true"){dentistEstInfoObj.MemberCompanyID=memberCompanyState;
dentistEstInfoObj.prvdrSrvcOffId=thisdentistrow.find(".dentistsrvcoffid").val()
}dentistEstInfoObj.license=thisdentistrow.find(".dentistlicense").val();
dentistEstInfoObj.prvdrType=thisdentistrow.find(".dentisttype").val();
dentistEstInfoObj.speciality=thisdentistrow.find(".ce-compare-dentist-desig").children("input").val();
dentistEstInfoObj.officeName=thisdentistrow.find(".dentistofficename").text();
dentistEstInfoObj.busId=thisdentistrow.find(".dentistbusid").val();
dentistEstInfoObj.zipCode=thisdentistrow.find(".dentistzipcode").val();
dentistEstInfoObj.prvdrState=thisdentistrow.find(".dentiststate").val();
dentistEstInfoObj.prvdrSrvcOffTableId=thisdentistrow.find(".dentistsrvcofftableid").val();
dentistEstInfoObj.prvdrAddress=thisdentistrow.find(".dentistaddress").val();
dentistEstInfoObj.officeNumber=thisdentistrow.find(".dentistofficenumber").val();
dentistEstInfoObj.categoryCode=getCategoryCode;
f.push(dentistEstInfoObj);
let dentistInfo={selectedDentist:{dentistName:thisdentistrow.find(".ce-compare-dentistname").html(),zipCode:thisdentistrow.find(".dentistzipcode").val(),dentistDesig:thisdentistrow.find(".ce-compare-dentist-desig").text(),officeName:thisdentistrow.find(".dentistofficename").text(),dentistAddress:thisdentistrow.find(".ce-compare-dentiststreet").text(),dentistState:thisdentistrow.find(".ce-compare-dentiststate").text(),dentistParticipates:thisdentistrow.find(".ce-compare-participates").text()}};
b.push(dentistInfo)
});
localStorage.setItem("cePrivateResponse",JSON.stringify(b));
let dentistComparePostDataObj={costEst:f};
let dentistPrivateCompareParams=$.extend({},ajaxParams_default);
if(costEstPhaseIIIPlan==="true"){dentistPrivateCompareParams.url="/etc/ddpa/paths/secure/memberCompanyPrivateCostEst.json"
}else{dentistPrivateCompareParams.url="/etc/ddpa/paths/secure/privateCostEst.json"
}dentistPrivateCompareParams.requestType="POST";
dentistPrivateCompareParams.data=JSON.stringify(dentistComparePostDataObj);
dentistPrivateCompareParams.successCallbackFunction=dentistPrivateCompareSuccess;
ajaxCall(dentistPrivateCompareParams)
}});
$(".termsncond-container .close, .disagree-btn").on("click",function(){$(".termsncond-container, .overlay-background").hide();
$("html").removeClass("non-scrollable");
$(".termsncond-container .modal-content").animate({scrollTop:0},100)
})
};
var dentistPrivateCompareSuccess=function(c){localStorage.removeItem("cePublicReq");
if(JSON.parse(localStorage.getItem("cePrivateResponse")).length){let getSelectedDentistsList=JSON.parse(localStorage.getItem("cePrivateResponse"));
var a={},b=[];
$.each(getSelectedDentistsList,function(f,e){a=$.extend(e,c[f]);
b.push(a)
});
let cePrivateStorageValue=JSON.stringify(b);
localStorage.setItem("cePrivateResponse",cePrivateStorageValue)
}else{localStorage.setItem("cePrivateResponse",c)
}if(docCookies.getItem("acceptTermsnCond")!=="Agree"){$(".ce-dentist-compare-container").hide();
$(".termsncond-container").show();
$("html").addClass("non-scrollable");
$("html, body").animate({scrollTop:100},"slow");
ceRedirectToResults($(".agree-terms").data("ceprivatecompareurl"))
}else{$(".termsncond-container").hide();
location.href=$(".agree-terms").data("ceprivatecompareurl")
}};
var expandCostEstimatorInfo=function(){$(document).on("click",".ce-results-viewmore",function(a){a.preventDefault();
let viewMore=$(this);
let viewMoreTable=viewMore.closest(".ce-compared-table");
viewMoreTable.find(".ce-compared-table-body").toggle("1000",function(){viewMoreTable.toggleClass("ce-compared-expandinfo");
viewMore.html()=="View Less"?viewMore.html(costEstViewMore):viewMore.html(costEstViewLess);
viewMore.html()=="View Less"?viewMore.attr("title",costEstViewMore):viewMore.attr("title",costEstViewLess)
})
})
};
var limitAddDentistCompare=function(a){$(document).on("change",'.ce-dentist-compare-list input[type="checkbox"]',function(){if($('.ce-dentist-compare-list input[type="checkbox"]:checked').length>a){$(this).prop("checked","")
}})
};
var textfieldActiveColor=function(){};
var hideOverlay=function(){if($(".overlay").css("display")=="none"){$(".overlay").show();
$("body").css("position","fixed")
}else{$(".overlay").hide();
$("body").css("position","")
}};
window.onload=function(c){var a=75,b=0;
if($(".secondary-navbar").length>0){a=$(".secondary-navbar").offset().top
}if($(".search-results-map").length>0){b=$(".search-results-map").offset().top
}fixNavbar(a);
$(window).scroll(function(){fixNavbar(a);
fixDentistMap(b)
})
};
$(document).ready(function(){if(getCookie("show_cookie_message")!="yes"){$("#cookie_box").show()
}$(".cookie_box_close").click(function(){$("#cookie_box").hide();
setCookie("show_cookie_message","yes");
return false
})
});
function setCookie(c,a){var b=new Date();
b.setDate(b.getDate()+(365*25));
document.cookie=c+"="+escape(a)+"; expires="+b.toUTCString()+"; path=/"
}function getCookie(a){if(document.cookie.length>0){cookie_start=document.cookie.indexOf(a+"=");
if(cookie_start!=-1){cookie_start=cookie_start+a.length+1;
cookie_end=document.cookie.indexOf(";",cookie_start);
if(cookie_end==-1){cookie_end=document.cookie.length
}return unescape(document.cookie.substring(cookie_start,cookie_end))
}}return""
}$(document).ready(function(){var b=false;
var a=""
});
function claimFormDropdownLocator(b,a){let states=[];
let jsonRes=b;
let statesAbbr=[];
if(jsonRes&&jsonRes.stateDetails.length>0&&typeof jsonRes=="object"){$.each(jsonRes.stateDetails,function(c,e){states.push(e.stateName);
statesAbbr.push(e.stateAbbreviation)
})
}if($(".claimDownloadInput").length>0){$(".claimDownloadInput").each(function(){var c=$(this);
$(this).typeahead({hint:true,highlight:true,minLength:1},{name:"states",source:substringMatcher(states)}).on("keyup",function(h){var g=h.keyCode||h.which;
var f=$(this).parent().find(".tt-dataset-states .tt-suggestion").length;
if(f==1){if(g==13||g==9){$(this).parent().find(".tt-dataset-states .tt-suggestion").first().addClass("tt-cursor").click();
$(this).typeahead("close")
}}});
$(this).bind("typeahead:select",function(f,e){$.each(jsonRes.stateDetails,function(h,j){if(e==j.stateName){var g=j.stateAbbreviation;
let claimsDownloadParams=$.extend({},ajaxParams_default);
claimsDownloadParams.url="/etc/ddpa/paths/claimsForms.json?selectedState="+g;
claimsDownloadParams.successCallbackFunction=getClaimsDownloadForm;
claimsDownloadParams.errorCallBackFunction=claimsDownloadFail;
claimsDownloadParams.dataType="text";
ajaxCall(claimsDownloadParams);
$(".validatestate").addClass("hide")
}})
})
})
}$(".download-claims-btn").on("click",function(){validateClaimState=false;
$.each(jsonRes.stateDetails,function(c,e){if($("#claimsDownloadInput").val()==e.stateName){validateClaimState=true;
$(".validatestate").addClass("hide");
if($("#claimsDownloadInput").val().length>0&&claimsRedirectionURL.length>0){window.open(claimsRedirectionURL,"_blank")
}}});
if(!validateClaimState){$(".validatestate").removeClass("hide");
$(".validateavailablestate").addClass("hide")
}})
}function getClaimsDownloadForm(a){if(a.length>0){claimsRedirectionURL=a;
$(".validateavailablestate").addClass("hide")
}else{claimsRedirectionURL="";
$(".validateavailablestate").removeClass("hide");
$(".validatestate").addClass("hide")
}}function claimsDownloadFail(){}var bneQueryString="";
var claimsQueryString="";
var claimsNumber=getI18nValue("claimsNumber","Claim Number");
var claimsDateOfService=getI18nValue("claimsDateOfService","Date of Service");
var claimsStatus=getI18nValue("claimsStatus","Status");
var claimsDatePaid=getI18nValue("claimsDatePaid","Date Paid");
var claimsAmountSubmitted=getI18nValue("claimsAmountSubmitted","Amount Submitted");
var claimsAmountPaid=getI18nValue("claimsAmountPaid","Amount Paid");
var claimsView=getI18nValue("claimsView","View");
var claimsGroupName=getI18nValue("claimsGroupName","Group Name");
var claimsGroupFirstName=getI18nValue("claimsGroupFirstName","First Name");
var claimsGroupLastName=getI18nValue("claimsGroupLastName","Last Name");
var benefitsGroupName=getI18nValue("benefitsGroupName","Group Name");
var benefitsGroupFirstName=getI18nValue("benefitsGroupFirstName","First Name");
var benefitsGroupLastName=getI18nValue("benefitsGroupLastName","Last Name");
$(function(){$("#bne-false").prop("checked",true);
$("#claims-false").prop("checked",true);
var a=moment().subtract(3,"month").format("MM/DD/YYYY");
var c=moment().format("MM/DD/YYYY");
var j=moment().subtract(18,"month").format("MM/DD/YYYY");
j=j+".";
$(".date-range-info").append(j);
$('input[name="daterange"]').daterangepicker({startDate:a,endDate:c,minDate:j,maxDate:c});
$('input[name="birthdate"]').daterangepicker({singleDatePicker:true,locale:{format:"MM/DD/YYYY",cancelLabel:"Clear"},autoUpdateInput:false});
$('input[name="birthdate"]').on("apply.daterangepicker",function(o,n){$(this).val(n.startDate.format("MM/DD/YYYY"))
});
$('input[name="birthdate"]').on("cancel.daterangepicker",function(o,n){$(this).val("")
});
$('input[name="daterange"]').on("apply.daterangepicker",function(o,n){$(this).val(n.startDate.format("MM/DD/YYYY")+" - "+n.endDate.format("MM/DD/YYYY"))
});
$('input[name="daterange"]').on("cancel.daterangepicker",function(o,n){});
$('input[type="radio"].bneCheck').click(function(){if($('input[name="bneCheck"]:checked').val()=="true"){$(".show-extra").removeClass("hide");
$(".required-bnestatement").removeClass("hide")
}else{$(".show-extra").addClass("hide");
$(".dependentfirstname").val("");
$(".dependentlastname").val("");
$(".dependentdob").val("");
$(".required-bnestatement").addClass("hide")
}});
$('input[type="radio"].claimCheck').click(function(){if($('input[name="claimCheck"]:checked').val()=="true"){$(".show-extra-claim").removeClass("hide");
$(".required-claimstatement").removeClass("hide")
}else{$(".show-extra-claim").addClass("hide");
$(".claimdependentfirstname").val("");
$(".claimdependentdob").val("");
$(".required-claimstatement").addClass("hide")
}});
$(".print-bne-result").on("click",function(){var n=$(this).data("printpage");
if(n.length>0){window.open(n,"_self")
}});
$(".print-claims-result").on("click",function(){var n=$(this).data("printpage");
if(n.length>0){window.open(n,"_self")
}});
$(document).on("click",".retrieve-benefits-button",function(o){o.preventDefault();
var n=false;
if($('input[name="bneCheck"]:checked').val()=="true"){n=validatebne()
}if(!n){var p="";
let dependentFlag=$('input[type="radio"].dependent-flag:checked').val()&&$('input[type="radio"].dependent-flag:checked').val().length>0?$('input[type="radio"].dependent-flag:checked').val()+"##":"empty##";
let dependentFirstName=$(".dependentfirstname").val()&&$(".dependentfirstname").val().length>0?$(".dependentfirstname").val()+"##":"empty##";
let dependentLastName=$(".dependentlastname").val()&&$(".dependentlastname").val().length>0?$(".dependentlastname").val()+"##":"empty##";
let dependentDateOfBirth=$(".dependentdob").val()&&$(".dependentdob").val().length>0?$(".dependentdob").val():"empty";
p=dependentFlag+dependentFirstName+dependentLastName+dependentDateOfBirth;
localStorage.setItem("bneDashboardParams",p);
window.open(bneURL,"_self")
}});
$(document).on("click",".retrieve-claims-btn",function(p){p.preventDefault();
var n=false;
if($('input[name="claimCheck"]:checked').val()=="true"){n=validateClaims()
}if(!n){var o="";
let dependentFlag=$('input[type="radio"].claimCheck:checked').val()&&$('input[type="radio"].claimCheck:checked').val().length>0?$('input[type="radio"].claimCheck:checked').val()+"##":"empty##";
let dependentFirstName=$(".claimdependentfirstname").val()&&$(".claimdependentfirstname").val().length>0?$(".claimdependentfirstname").val()+"##":"empty##";
let dependentDateOfBirth=$(".claimdependentdob").val()&&$(".claimdependentdob").val().length>0?$(".claimdependentdob").val()+"##":"empty##";
let dateOfInquiry=$('input[name="daterange"]').val();
let index=dateOfInquiry.indexOf("-");
let beginDateOfInquiry=dateOfInquiry.substr(0,index).trim()+"##";
let endDateOfInquiry=dateOfInquiry.substr(index+1).trim();
let claimNumber="empty";
o=dependentFlag+dependentFirstName+dependentDateOfBirth+beginDateOfInquiry+endDateOfInquiry;
localStorage.setItem("claimsDashboardParams",o);
localStorage.setItem("claimnumber",claimNumber);
console.log("In function for clicking .retrieve-claims-btn. subscriberkey = "+localStorage.getItem("subscriberkey"));
if($(".claims-print-container ").length>0&&localStorageisValid()&&localStorage.getItem("claimnumber")!=null){console.log("Have a claim #");
let claimsParams=$.extend({},ajaxParams_default);
claimsParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=HTML&claimNumber="+localStorage.getItem("claimnumber")+"&subscriberKey="+localStorage.getItem("subscriberkey")+b;
claimsParams.successCallbackFunction=loadClaimsData;
claimsParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(claimsParams)
}else{if(localStorage.getItem("subscriberkey")!=null){console.log("Have a subscriberkey "+localStorage.getItem("subscriberkey"));
console.log("Here's rest of query "+localStorage.getItem("claimsQueryString"));
let claimsParams=$.extend({},ajaxParams_default);
claimsParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=HTML&subscriberKey="+localStorage.getItem("subscriberkey")+localStorage.getItem("claimsQueryString");
claimsParams.successCallbackFunction=loadClaimsData;
claimsParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(claimsParams)
}}window.open(claimsURL,"_self")
}});
$(document).on("click",".claims-activity-container .claim-details .view-claim",function(){var n="";
let dependentFlag="false##";
let dependentFirstName="empty##";
let dependentDateOfBirth="empty##";
let dateOfInquiry=$('input[name="daterange"]').val();
let index=dateOfInquiry.indexOf("-");
let beginDateOfInquiry=dateOfInquiry.substr(0,index).trim()+"##";
let endDateOfInquiry=dateOfInquiry.substr(index+1).trim();
let claimNumber=$(this).data("claimnumber");
n=dependentFlag+dependentFirstName+dependentDateOfBirth+beginDateOfInquiry+endDateOfInquiry;
localStorage.setItem("claimsDashboardParams",n);
localStorage.setItem("claimnumber",claimNumber)
});
$(document).on("click",".claims-activity-container .claim-details .view-group-claims",function(){var n="";
let dependentFlag="false##";
let dependentFirstName="empty##";
let dependentDateOfBirth="empty##";
let dateOfInquiry=$('input[name="daterange"]').val();
let index=dateOfInquiry.indexOf("-");
let beginDateOfInquiry=dateOfInquiry.substr(0,index).trim()+"##";
let endDateOfInquiry=dateOfInquiry.substr(index+1).trim();
let claimNumber="empty";
let subscriberKey=$(this).data("subscriberkey");
n=dependentFlag+dependentFirstName+dependentDateOfBirth+beginDateOfInquiry+endDateOfInquiry;
localStorage.setItem("claimsDashboardParams",n);
localStorage.setItem("claimnumber",claimNumber)
});
var l="",e=[],h="";
if($(".bne-container").length>0||$(".bne-print-container").length>0){if(localStorageisValid()){l=localStorage.getItem("bneDashboardParams");
if(l&&l.length>0&&l.indexOf("##")!=-1){e=l.split("##");
if(e[0].length>0&&e[0]!="empty"){h="&dependentFlag="+e[0]
}if(e[1].length>0&&e[1]!="empty"){h=h+"&dependentFirstName="+e[1]
}if(e[2].length>0&&e[2]!="empty"){h=h+"&dependentLastName="+e[2]
}if(e[3].length>0&&e[3]!="empty"){h=h+"&dependentDateOfBirth="+e[3]
}}}let bneClaimParams=$.extend({},ajaxParams_default);
if(localStorage.getItem("subscriberbenefitskey")!=null){console.log("have benefits subscriberkey :: "+localStorage.getItem("subscriberbenefitskey"));
bneClaimParams.url="/etc/ddpa/paths/secure/benefits.json?responseTypeIndicator=HTML&subscriberKey="+localStorage.getItem("subscriberbenefitskey")+h
}else{bneClaimParams.url="/etc/ddpa/paths/secure/benefits.json?responseTypeIndicator=HTML"+h
}bneClaimParams.successCallbackFunction=loadBNEdata;
bneClaimParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(bneClaimParams)
}bneQueryString=h;
var g="",f=[],b="";
if($(".my-claims").length>0||$(".claims-print-container ").length>0){if(localStorageisValid()){g=localStorage.getItem("claimsDashboardParams");
if(g&&g.length>0&&g.indexOf("##")!=-1){f=g.split("##");
if(f[0].length>0&&f[0]!="empty"){b="&dependentFlag="+f[0]
}if(f[1].length>0&&f[1]!="empty"){b=b+"&dependentFirstName="+f[1]
}if(f[2].length>0&&f[2]!="empty"){b=b+"&dependentDateOfBirth="+f[2]
}if(f[3].length>0&&f[3]!="empty"){b=b+"&beginDateOfInquiry="+f[3]
}if(f[4].length>0&&f[4]!="empty"){b=b+"&endDateOfInquiry="+f[4]
}}if(localStorage.getItem("subscriberkey")!=null&&localStorage.getItem("subscriberkey").length>0){b=b+"&subscriberKey="+localStorage.getItem("subscriberkey")
}}claimsQueryString=b;
let claimsParams=$.extend({},ajaxParams_default);
claimsParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=XML"+b;
claimsParams.successCallbackFunction=loadClaimsData;
if($(".claims-print-container ").length>0&&localStorageisValid()&&localStorage.getItem("claimnumber")!=null){if(localStorage.getItem("subscriberkey")!=null&&!b.includes("subscriberKey")){claimsParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=HTML&claimNumber="+localStorage.getItem("claimnumber")+"&subscriberKey="+localStorage.getItem("subscriberkey")+b
}else{claimsParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=HTML&claimNumber="+localStorage.getItem("claimnumber")+b
}claimsParams.successCallbackFunction=updateClaimData
}claimsParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(claimsParams)
}if($(".benefits-overview").length>0){let bneOverviewParams=$.extend({},ajaxParams_default);
bneOverviewParams.url="/etc/ddpa/paths/secure/benefits.json?responseTypeIndicator=XML";
bneOverviewParams.successCallbackFunction=loadBNEOverviewData;
bneOverviewParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(bneOverviewParams)
}if($(".claims-activity-container").length>0){let claimsActivityParams=$.extend({},ajaxParams_default);
claimsActivityParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=XML&beginDateOfInquiry="+a+"&endDateOfInquiry="+c;
claimsActivityParams.successCallbackFunction=loadClaimsActivityData;
claimsActivityParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(claimsActivityParams)
}$(document).on("click",".claims-container .claim-details .view-claim",function(){var n=$(this).data("claimnumber");
htmlAjaxCall(n)
});
$(document).on("click",".claims-container .claim-details .view-group-claims",function(){var n=$(this).data("subscriberkey");
console.log("In click function");
htmlAjaxCallGroupClaimsUpdate(n)
});
$(document).on("click",".claims-activity-container .claim-details .view-group-claims",function(){var n=$(this).data("subscriberkey");
console.log("In click function");
htmlAjaxCallGroupClaims(n)
});
$(document).on("click",".bne-overview-container .bne-details .view-group-bne",function(){var n=$(this).data("subscriberkey");
console.log("In click function");
htmlAjaxCallGroupBenefits(n)
});
$(".claim-response-details").hide()
});
function htmlAjaxCall(a){let claimDetailParams=$.extend({},ajaxParams_default);
if(localStorageisValid()&&localStorage.getItem("subscriberkey")!=null&&localStorage.getItem("subscriberkey")!="empty"&&!claimsQueryString.includes("subscriberKey")){var b=localStorage.getItem("subscriberkey");
claimDetailParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=HTML&claimNumber="+a+"&subscriberKey="+b+claimsQueryString
}else{claimDetailParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=HTML&claimNumber="+a+claimsQueryString
}claimDetailParams.successCallbackFunction=updateClaimData;
claimDetailParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(claimDetailParams);
if(localStorageisValid()){localStorage.setItem("claimnumber",a)
}}function htmlAjaxCallClaim(a){let claimDetailParams=$.extend({},ajaxParams_default);
claimDetailParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=XML&claimNumber="+a+claimsQueryString;
claimDetailParams.successCallbackFunction=loadClaimsActivityData();
claimDetailParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(claimDetailParams);
if(localStorageisValid()){localStorage.setItem("claimnumber",a)
}}function htmlAjaxCallGroupClaimsUpdate(a){console.log("In click htmlAjaxCallGroupClaimsUpdate call for group claims with subscriberkey = "+a);
let claimDetailParams=$.extend({},ajaxParams_default);
claimDetailParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=HTML&subscriberKey="+a+claimsQueryString;
claimDetailParams.successCallbackFunction=updateClaimData;
claimDetailParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(claimDetailParams);
if(localStorageisValid()){localStorage.setItem("subscribekey",a)
}}function htmlAjaxCallGroupClaims(a){console.log("In click htmlAjaxCallGroupClaims call for group claims with subscriberkey = "+a+" and claimsQueryString = "+claimsQueryString);
let claimDetailParams=$.extend({},ajaxParams_default);
claimDetailParams.url="/etc/ddpa/paths/secure/claims.json?responseTypeIndicator=XML&subscriberKey="+a+claimsQueryString;
claimDetailParams.successCallbackFunction=loadClaimsActivityData;
claimDetailParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(claimDetailParams);
if(localStorageisValid()){localStorage.setItem("subscriberkey",a)
}}function htmlAjaxCallGroupBenefits(a){console.log("In click htmlAjaxCallGroupBenefits call for group benefits with subscriberkey = "+a+" and bneQueryString = "+bneQueryString);
let bneDetailParams=$.extend({},ajaxParams_default);
bneDetailParams.url="/etc/ddpa/paths/secure/benefits.json?responseTypeIndicator=XML&subscriberKey="+a+bneQueryString;
bneDetailParams.successCallbackFunction=loadBNEOverviewData;
bneDetailParams.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(bneDetailParams);
if(localStorageisValid()){localStorage.setItem("subscriberbenefitskey",a)
}}function loadBNEdata(c,a){var e=c;
if(isObject(e)){$(".bne-loading-circle").hide();
$(".bne-title").removeClass("hide");
let errorCode=e.BNEResult.errorCode;
let bneHTMLObj="";
if(errorCode=="0"){bneHTMLObj=e.BNEResult.htmlResult
}else{$(".print-bne-result").hide();
bneHTMLObj="<p class='validRed'>"+bneServiceErrorText+"</p>";
var b="Benefits Detail Error: "+errorCode+"-"+e.BNEResult.errorMessage+"-"+e.BNEResult.supplementalMessage
}let bneHTML=$("<div/>").html(bneHTMLObj).html();
$(".bne-container").append(bneHTML).show();
$(".bne-print-container").append(bneHTML)
}}function loadBNEOverviewData(e,c){let bneJson=e;
let errorCode=bneJson.BNEResult.errorCode;
$(".dashbne-loading-circle").hide();
if(errorCode=="0"){$('[id^="groupBNEDetailElement"]').remove();
if(isObject(bneJson.BNEResult)&&isObject(bneJson.BNEResult.groupList)&&bneJson.BNEResult.groupList.length>0){console.log("In benefits group list");
var g=bneJson.BNEResult.groupList;
$.each(g,function(j,l){var h="<p><div id='groupBNEDetailElement"+j+"' class='bne-details'><p class='bold'><a id='bneId"+j+"' href='javascript:void(0);' class='green-link view-group-bne' data-subscriberkey='"+l.subscriberKey+"'>"+l.subscriberGroupName+"</a></p><p>"+l.subscriberFirstName+"</p><p>"+l.subscriberLastName+"</p></div>";
$(".bne-overview-container").append(h)
});
$(".bne-overview-container .benefits-group-message").removeClass("hide");
$(".bne-overview-container .benefits-group-heading").removeClass("hide")
}else{if(isObject(bneJson.BNEResult)&&isObject(bneJson.BNEResult.eligibilityBenefitInformation)&&isObject(bneJson.BNEResult.eligibilityBenefitInformation.benefitInformation)){console.log("In benefits eligibility list");
$(".bne-overview-container .benefits-group-message").hide();
$(".bne-overview-container .benefits-group-heading").hide();
var b=bneJson.BNEResult.eligibilityBenefitInformation.benefitInformation;
if(isObject(b.benefitClass)&&b.benefitClass.length>0){console.log("have benefit information");
$.each(b.benefitClass,function(h,j){console.log("looping through benefits");
if(j.benClassCode=="35"){console.log("found code 35");
loadProgressBarValues(j);
return false
}})
}}}}else{var a="<p class='validRed'>"+bneDashboardServiceErrorText+"</p>";
var f="Benefits Dashboard Error: "+errorCode+"-"+bneJson.BNEResult.errorMessage+"-"+bneJson.BNEResult.supplementalMessage;
$(".bne-overview-container").append(a)
}}function loadProgressBarValues(j){var a="",e="",q=false,l=false,b="",o="",g=false,h=false;
if(isObject(j.maximumDeductible)&&isObject(j.balances)){if(isString(j.maximumDeductible.familyAnnualDeductible)&&isString(j.balances.familyAnnualRemainingDeductible)){l=true;
q=true;
a=j.maximumDeductible.familyAnnualDeductible;
e=j.balances.familyAnnualRemainingDeductible
}else{if(isString(j.maximumDeductible.individualAnnualDeductible)&&isString(j.balances.individualAnnualRemainingDeductible)){l=true;
q=false;
a=j.maximumDeductible.individualAnnualDeductible;
e=j.balances.individualAnnualRemainingDeductible
}}if(isString(j.maximumDeductible.familyAnnualMaximum)&&isString(j.balances.familyAnnualRemainingMaximum)){h=true;
g=true;
b=j.maximumDeductible.familyAnnualMaximum;
o=j.balances.familyAnnualRemainingMaximum
}else{if(isString(j.maximumDeductible.individualAnnualMaximum)&&isString(j.balances.individualAnnualRemainingMaximum)){h=true;
g=false;
b=j.maximumDeductible.individualAnnualMaximum;
o=j.balances.individualAnnualRemainingMaximum
}}}if(l){if(q){$(".deduct-title").append(" - Family")
}else{$(".deduct-title").append(" - Individual")
}$(".ded-max-amount").text(a);
$(".ded-bal-amount").text(e);
a=a.replace(/\$|\,/g,"");
e=e.replace(/\$|\,/g,"");
var n=(100*(a-e)/a).toFixed();
var f=(100-n).toFixed();
$(".deductable-bar-spent").data("percentage",n);
$(".deductable-bar-left").data("percentage",f);
$(".benefits-overview .annual-deduction").removeClass("hide")
}if(h){if(g){$(".pocket-title").append(" - Family")
}else{$(".pocket-title").append(" - Individual")
}$(".out-max-amount").text(b);
$(".out-bal-amount").text(o);
b=b.replace(/\$|\,/g,"");
o=o.replace(/\$|\,/g,"");
var c=(100*(b-o)/b).toFixed();
var p=(100-c).toFixed();
$(".outofpacket-spent").data("percentage",c);
$(".outofpacket-left").data("percentage",p);
$(".benefits-overview .out-of-pocket").removeClass("hide")
}$(".progress-indicator").each(function(){var s=$(this).find(".amount-spent").data("percentage");
var r=$(this).find(".amount-left").data("percentage");
$(this).find(".amount-spent").css("width",s+"%");
$(this).find(".amount-left").css("width",r+"%")
})
}function loadClaimsData(b,g){console.log("In loadClaimsData");
console.log(b);
var h=b;
let errorCode=h.ClaimStatusResult.errorCode;
$(".claims-loading-circle").hide();
$(".claims-detail-title").removeClass("hide");
if(errorCode=="0"){if(isObject(h)&&isObject(h.ClaimStatusResult.groupList)&&textNotEmpty(h.ClaimStatusResult.groupList)){console.log("In group list");
var c=h.ClaimStatusResult.groupList;
$.each(c,function(n,o){var p="<div class='claim-details'><div><p class='claims-groups-heading bold col-xs-6 hidden-sm hidden-md hidden-lg'>"+claimsGroupName+"</p><p class='bold col-xs-6'><a id='claimId"+n+"' href='javascript:void(0);' class='green-link view-group-claims' data-subscriberkey='"+o.subscriberKey+"'>"+o.subscriberGroupName+"</a></p></div><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsGroupFirstName+"</p><p class='col-xs-6'>"+o.subscriberFirstName+"</p></div><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsGroupLastName+"</p><p class='col-xs-6'>"+o.groupLastName+"</p></div>";
$(".claims-container").append(p)
});
$(".claims-container .claims-groups-heading").removeClass("hide");
$(".claims-container .group-message").removeClass("hide");
$(".claims-container .claims-heading").hide()
}else{if(isObject(h)&&isObject(h.ClaimStatusResult.claimList)&&textNotEmpty(h.ClaimStatusResult.claimList)){console.log("multiple - loadClaimsData");
var l=h.ClaimStatusResult.claimList;
$.each(l,function(n,o){var p="<div class='claim-details'><div><p class='claim-heading bold col-xs-6 hidden-sm hidden-md hidden-lg'>"+claimsNumber+"</p><p class='bold col-xs-6'>"+o.claimNumber+"</p></div><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsDateOfService+"</p><p class='col-xs-6'>"+moment(o.firstDateOfService).format("ll")+"</p></div><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsStatus+"</p><p class='col-xs-6'>"+o.claimStatus+"</p></div><div><p class='claim-heading bold col-xs-6 hidden-sm hidden-md hidden-lg'>"+claimsDatePaid+"</p><p class='col-xs-6'>"+moment(o.datePaid).format("ll")+"</p></div><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsAmountSubmitted+"</p><p class='col-xs-6'>"+o.amountSubmitted+"</p></div><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsAmountPaid+"</p><p class='col-xs-6'>"+o.amountPaid+"</p></div><div><p class='col-xs-6 viewclaimlink'><a id='claimId"+n+"' href='javascript:void(0);' class='green-link view-claim' data-claimnumber='"+o.claimNumber+"'>"+claimsView+"</a></p></div>";
$(".claims-container").append(p)
});
$(".claims-container .claims-heading").removeClass("hide");
$(".claims-container .claims-heading").show();
$(".claims-container .group-message").hide();
$(".claims-container .claims-groups-heading").hide()
}else{if(isObject(h)&&isObject(h.ClaimStatusResult.claimInformation.subscriberInformation.patientInformation.claim)){console.log("single claim - loadClaimsData");
var e=1;
var f=h.ClaimStatusResult.claimInformation.subscriberInformation.patientInformation.claim;
if(isNumber(f.claimNumber)||isString(f.claimNumber)){var a="<div class='claim-details'><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsNumber+"</p><p class='bold col-xs-6'>"+f.claimNumber+"</p></div><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsDateOfService+"</p><p class='col-xs-6'>"+moment(f.firstDOS).format("ll")+"</p></div><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsStatus+"</p><p class='col-xs-6'>"+f.claimStatus+"</p></div><div><p class='claim-heading col-xs-6 bold hidden-sm hidden-md hidden-lg'>"+claimsDatePaid+"</p><p class='col-xs-6'>"+moment(f.datePaid).format("ll")+"</p></div><div><p class='claim-heading bold col-xs-6 hidden-sm hidden-md hidden-lg'>"+claimsAmountSubmitted+"</p><p class='col-xs-6'>"+f.amountSubmitted+"</p></div><div><p class='claim-heading bold col-xs-6 hidden-sm hidden-md hidden-lg'>"+claimsAmountPaid+"</p><p class='col-xs-6'>"+f.amountPaid+"</p></div><div><p class='col-xs-6 viewclaimlink'><a id='claimId"+e+"' href='javascript:void(0);' class='green-link view-claim' data-claimnumber='"+f.claimNumber+"'>"+claimsView+"</a></p></div>";
$(".claims-container").append(a);
$(".claims-container .claims-heading").removeClass("hide");
$(".claims-container .claims-heading").show();
$(".claims-container .group-message").hide();
$(".claims-container .claims-groups-heading").hide()
}else{if(isString(h.ClaimStatusResult.claimInformation.messageText)){$(".claims-heading").hide();
$(".claims-groups-heading").hide();
$(".group-message").hide();
var a="<p class='validRed'>"+h.ClaimStatusResult.claimInformation.messageText+"</p>";
$(".claims-container").append(a)
}}}}}if(localStorageisValid()&&localStorage.getItem("claimnumber")!=null&&localStorage.getItem("claimnumber")!="empty"){htmlAjaxCall(localStorage.getItem("claimnumber"))
}}else{$(".claims-heading").hide();
$(".claims-groups-heading").hide();
$(".group-message").hide();
var a="<p class='validRed'>"+claimsServiceErrorText+"</p>";
var j="Claims Detail Error (Table): "+errorCode+"-"+h.ClaimStatusResult.errorMessage+"-"+h.ClaimStatusResult.supplementalMessage;
$(".claims-container").append(a)
}}function loadClaimsActivityData(c,h){var j=c;
let errorCode=j.ClaimStatusResult.errorCode;
$(".dashclaims-loading-circle").hide();
if(errorCode=="0"){$('[id^="groupDetailElement"]').remove();
if(isObject(j)&&isObject(j.ClaimStatusResult.groupList)&&j.ClaimStatusResult.groupList.length>0){console.log("In group list");
var e=j.ClaimStatusResult.groupList;
$.each(e,function(n,o){var p="<p><div id='groupDetailElement"+n+"' class='claim-details'><p class='bold'><a id='claimId"+n+"' href='javascript:void(0);' class='green-link view-group-claims' data-subscriberkey='"+o.subscriberKey+"'>"+o.subscriberGroupName+"</a></p><p>"+o.subscriberFirstName+"</p><p>"+o.subscriberLastName+"</p></div>";
$(".claims-activity-container").append(p)
});
$(".claims-activity-container .group-message").removeClass("hide");
$(".claims-activity-container .claims-groups-heading").removeClass("hide");
$(".claims-activity-container .claims-heading").hide()
}else{if(isObject(j)&&isObject(j.ClaimStatusResult.claimList)&&j.ClaimStatusResult.claimList.length>0){console.log("multiple - loadClaimsActivityData");
var l=j.ClaimStatusResult.claimList;
$.each(l,function(n,o){var p="<div class='claim-details'><p class='bold'>"+o.claimNumber+"</p><p>"+moment(o.firstDateOfService).format("ll")+"</p><p>"+o.claimStatus+"</p><p><a id='claimId"+n+"' href='"+claimsURL+"' class='green-link view-claim' data-claimnumber='"+o.claimNumber+"'>"+claimsView+"</a></p></div>";
$(".claims-activity-container").append(p)
});
$(".claims-activity-container .claims-heading").removeClass("hide");
$(".claims-activity-container .claims-heading").show();
$(".claims-activity-container .group-message").hide();
$(".claims-activity-container .claims-groups-heading").hide();
document.getElementById("claims-daterange").style.display="block";
loadClaimsData(c,h)
}else{if(isObject(j)&&isObject(j.ClaimStatusResult.claimInformation.subscriberInformation.patientInformation.claim)){console.log("single claim - loadClaimsActivityData");
var f=1;
var g=j.ClaimStatusResult.claimInformation.subscriberInformation.patientInformation.claim;
if(isNumber(g.claimNumber)||isString(g.claimNumber)){var a="<div class='claim-details'><p class='bold'>"+g.claimNumber+"</p><p>"+moment(g.firstDOS).format("ll")+"</p><p>"+g.claimStatus+"</p><p><a id='claimId"+f+"' href='"+claimsURL+"' class='green-link view-claim' data-claimnumber='"+g.claimNumber+"'>"+claimsView+"</a></p></div>";
$(".claims-activity-container").append(a);
$(".claims-activity-container .claims-heading").removeClass("hide");
$(".claims-activity-container .claims-heading").show();
$(".claims-activity-container .group-message").hide();
$(".claims-activity-container .claims-groups-heading").hide();
document.getElementById("claims-daterange").style.display="block";
loadClaimsData(c,h)
}else{if(isString(j.ClaimStatusResult.claimInformation.messageText)){$(".claims-heading").removeClass("hide");
$(".claims-groups-heading").hide();
$(".group-message").hide();
var a="<p class='validRed'>"+j.ClaimStatusResult.claimInformation.messageText+"</p>";
$(".claims-activity-container").append(a)
}}}}}}else{$(".claims-heading").hide();
$(".claims-groups-heading").hide();
var a="<p class='validRed'>"+claimsDashboardServiceErrorText+"</p>";
var b="Claims Dashboard Error: "+errorCode+"-"+j.ClaimStatusResult.errorMessage+"-"+j.ClaimStatusResult.supplementalMessage;
console.log(b);
$(".claims-activity-container").append(a)
}if($(".claim-details").length<0){$(".claims-heading").hide();
$(".claims-groups-heading").hide()
}}function updateClaimData(c,b){console.log("In updateClaimData ");
if(c&&isObject(c)&&isObject(c.ClaimStatusResult)){$(".claim-response-details .print-claims-result").siblings().remove();
let errorCode=c.ClaimStatusResult.errorCode;
let claimHTMLObj="";
if(errorCode=="0"){console.log("In updateClaimData show result "+claimHTMLObj);
claimHTMLObj=c.ClaimStatusResult.htmlResult
}else{$(".print-claims-result").hide();
claimHTMLObj="<p class='validRed'>"+claimsServiceErrorText+"</p>";
var a="Claims Detail Error (HTML): "+errorCode+"-"+c.ClaimStatusResult.errorMessage+"-"+c.ClaimStatusResult.supplementalMessage;
console.log(a)
}let claimHTML=$("<div/>").html(claimHTMLObj).html();
console.log*("");
$(".claim-response-details").append(claimHTML).show();
$(".claims-print-container").append(claimHTML)
}}function validateClaims(){var a=false;
if($(".claimdependentfirstname").val().length<=0){$(".validation_section").removeClass("hide");
$(".validdependentname").removeClass("hide");
$(".dependent-fname").addClass("validRed");
a=true
}else{$(".validation_section").addClass("hide");
$(".validdependentname").addClass("hide");
$(".dependent-fname").removeClass("validRed")
}if($(".claimsbirthdate").val().length<=0){$(".validation_section").removeClass("hide");
$(".validdateofbirth").removeClass("hide");
$(".dependent-bdate").addClass("validRed");
a=true
}else{$(".validation_section").addClass("hide");
$(".validdateofbirth").addClass("hide");
$(".dependent-bdate").removeClass("validRed")
}return a
}function validatebne(){var a=false;
if($(".dependentfirstname").val().length<=0){$(".validation_bnesection").removeClass("hide");
$(".validbnedependentname").removeClass("hide");
$(".valid-bnefirstname").addClass("validRed");
a=true
}else{$(".validation_bnesection").addClass("hide");
$(".validbnedependentname").addClass("hide");
$(".valid-bnefirstname").removeClass("validRed")
}if($(".dependentlastname").is(":visible")&&$(".dependentlastname").val().length<=0){$(".validation_bnesection").removeClass("hide");
$(".validbnedependentname").removeClass("hide");
$(".valid-bnelastname").addClass("validRed");
a=true
}else{$(".validation_bnesection").addClass("hide");
$(".validbnedependentname").addClass("hide");
$(".valid-bnelastname").removeClass("validRed")
}if($(".bnebirthdate").val().length<=0){$(".validation_bnesection").removeClass("hide");
$(".validdatebneofbirth").removeClass("hide");
$(".valid-bnebirthdate").addClass("validRed");
a=true
}else{$(".validation_bnesection").addClass("hide");
$(".validdatebneofbirth").addClass("hide");
$(".valid-bnebirthdate").removeClass("validRed")
}return a
}var subscriberOverviewContMsg=getI18nValue("subscriberOverviewContMsg","NO RESULTS FOUND");
var subscriberOverviewPlanWith=getI18nValue("subscriberOverviewPlanWith","Plan with:");
var subscriberOverviewAddress=getI18nValue("subscriberOverviewAddress","Address:");
var subscriberOverviewCall=getI18nValue("subscriberOverviewCall","Call:");
var overviewClaimAddressLabel=getI18nValue("overviewClaimAddressLabel","Claim Address:");
var overviewFaxLabel=getI18nValue("overviewFaxLabel","Fax:");
let stateToPopulate="";
function generateSubscriberLinks(c,e){var a,f;
var b=c;
if(b&&typeof b=="object"&&b.subscriberLinkDetails.length>0){$.each(b.subscriberLinkDetails,function(g,j){if(j.stateId==e){a=j.links;
if(a.length>0&&typeof a=="object"){$.each(a,function(l,n){let titlelink="";
let subscriberLink="";
if(n.title.length>0){titlelink=n.title
}else{if(n.url.length>0){titlelink=n.url
}}if(titlelink.length>0){if(n.url.length>0){subscriberLink="<a target='_blank' href='"+n.url+"' class='green-link underline'>"+titlelink+"</a>"
}else{subscriberLink="<p class='txt-green'>"+titlelink+"</p>"
}}f="<div class='subscriber-link'>"+subscriberLink+"<p>"+n.description+"</p></div>";
$(".subscriber-link-container").append(f)
})
}else{let userLinksParms=$.extend({},ajaxParams_default);
var h=$(".user-links-planJson").val();
userLinksParms.url=h;
userLinksParms.successCallbackFunction=userLinksResults;
userLinksParms.errorCallBackFunction=rendererrorSelectDropdown;
ajaxCall(userLinksParms)
}}})
}}function userLinksResults(e,f){var c=e;
for(var b=0;
b<e.stateDetails.length;
b++){var a=$(".user-links-state").val();
if(e.stateDetails[b].stateAbbreviation==a){$(".subscriber-link-container").empty();
userLinkDiv="<div class='subscriber-link'><a target='_blank' href='"+e.stateDetails[b].webSiteUrl+"' class='green-link underline'>Delta Dental of "+e.stateDetails[b].stateName+"</a></div>";
$(".subscriber-link-container").append(userLinkDiv)
}}}function generateSubscriberOverview(g,j){var c,e,a,l,h,n,f;
var b=g;
if(b&&typeof b=="object"&&b.stateDetails.length>0){$.each(b.stateDetails,function(o,p){if(p.stateAbbreviation==j){c=p.planName;
e=(p.officeContactStreet?(p.officeContactStreet+"<br/>"):"")+(p.officeContactCity?((p.officeContactStateAbbreviation?(p.officeContactCity+", "):"")):" ")+p.officeContactStateAbbreviation+"&nbsp;&nbsp;"+p.officeContactZip;
a=p.outOfStateNumber;
h=p.webSiteUrl?p.webSiteUrl:"javascript:void(0)";
n="";
if(isString(p.claimContactStreet)){n=p.claimContactStreet
}if(isString(p.claimContactStreet2)&&p.claimContactStreet2.trim().length){n=n+", "+p.claimContactStreet2
}if(isString(p.claimContactCity)&&p.claimContactCity.trim().length){n=n+", "+p.claimContactCity
}if((isString(p.claimContactZip)&&p.claimContactZip.trim().length)||(isNumber(p.claimContactZip)&&(p.claimContactZip).length>0)){n=n+", "+p.claimContactZip
}if(n.charAt(0)==","){n=n.substring(1)
}if(isString(p.customerServiceFax)||isNumber(p.customerServiceFax)){f=p.customerServiceFax
}if(c.length>0){if(typeof f=="string"&&f.length>0){l="<div class='subcriber-details'><div class='detail-row'><p class='plan-label  '>"+subscriberOverviewPlanWith+"</p><p class='plan-title'> <a class='txt-green' href='"+h+"'>"+c+"</a></p></div><div class='detail-row'><p class='address-label'>"+subscriberOverviewAddress+"</p><p class='address-info txt-green'>"+e+"</p></div><div class='detail-row'><p class='address-label'>"+overviewClaimAddressLabel+"</p><p class='address-info txt-green'>"+n+"</p></div><div class='detail-row'><p class='call-label'>"+subscriberOverviewCall+"</p><p class='call-info txt-green'><a href='tel:+1"+a+"'>"+a+"</a></p></div><div class='detail-row'><p class='address-label'>"+overviewFaxLabel+"</p><p class='address-info txt-green'>"+f+"</p></div></div>";
$(".subscriber-overview-container").append(l)
}else{l="<div class='subcriber-details'><div class='detail-row'><p class='plan-label  '>"+subscriberOverviewPlanWith+"</p><p class='plan-title'> <a class='txt-green' href='"+h+"'>"+c+"</a></p></div><div class='detail-row'><p class='address-label'>"+subscriberOverviewAddress+"</p><p class='address-info txt-green'>"+e+"</p></div><div class='detail-row'><p class='address-label'>"+overviewClaimAddressLabel+"</p><p class='address-info txt-green'>"+n+"</p></div><div class='detail-row'><p class='call-label'>"+subscriberOverviewCall+"</p><p class='call-info txt-green'><a href='tel:+1"+a+"'>"+a+"</a></p></div></div>";
$(".subscriber-overview-container").append(l)
}$(".welcome-user .welcome-plan").attr("href",h);
$(".welcome-user .welcome-plan").text(c);
if(p.displayLastNameBNE==="false"){$(".benefits-overview .bne-state-lastnamehide").remove()
}}else{$(".subscriber-overview-container").append(subscriberOverviewContMsg)
}}})
}}function updateUserState(c,e){if(c&&c.state.length>0){stateToPopulate=c.state
}if($(".user-links-json").length>0&&$(".user-links-json").val().length>0){var a=$(".user-links-json").val();
let subscriberLinksParams=$.extend({},ajaxParams_default);
subscriberLinksParams.url=a;
subscriberLinksParams.successCallbackFunction=generateSubscriberLinks;
subscriberLinksParams.errorCallBackFunction=rendererrorSelectDropdown;
subscriberLinksParams.className=stateToPopulate;
ajaxCall(subscriberLinksParams)
}if($(".user-overview-json").length>0&&$(".user-overview-json").val().length>0){var b=$(".user-overview-json").val();
let subscriberOverviewParams=$.extend({},ajaxParams_default);
subscriberOverviewParams.url=b;
subscriberOverviewParams.successCallbackFunction=generateSubscriberOverview;
subscriberOverviewParams.errorCallBackFunction=rendererrorSelectDropdown;
subscriberOverviewParams.className=stateToPopulate;
ajaxCall(subscriberOverviewParams)
}}var dentistSearchAcceptPatients=getI18nValue("dentistSearchAcceptPatients","accepting new patients");
var dentistSearchNotAcceptPatients=getI18nValue("dentistSearchNotAcceptPatients","not accepting new patients");
var dentistSearchFacilityId=getI18nValue("dentistSearchFacilityId","Facility ID :");
var dentistSearchByReferralOnly=getI18nValue("dentistSearchByReferralOnly","By referral only");
var dentistSearchValueTrue=getI18nValue("dentistSearchValueTrue","true");
var dentistSearchValueFalse=getI18nValue("dentistSearchValueFalse","false");
var designationDescriptions=[];
var designations=["General Dentist","Oral Surgeon","Endodontist","Orthodontist","Pediatric Dentist","Periodontist","Prosthodontist","Oral Pathologist","Public Health","Full Time Faculty","Oral Maxillofacial Radiologist"];
$(function(){designationDescriptions[0]=$("#general-dentist").data("description");
designationDescriptions[1]=$("#oral-surgeon").data("description");
designationDescriptions[2]=$("#endodontist").data("description");
designationDescriptions[3]=$("#orthodontist").data("description");
designationDescriptions[4]=$("#pediatric-dentist").data("description");
designationDescriptions[5]=$("#periodontist").data("description");
designationDescriptions[6]=$("#prosthodontist").data("description");
designationDescriptions[7]=$("#oral-pathologist").data("description");
designationDescriptions[8]=$("#public-health").data("description");
designationDescriptions[9]=$("#full-time-faculty").data("description");
designationDescriptions[10]=$("#oral-maxillofacial-radiologist").data("description")
});
function getDesignationDescription(a){let indexOfDesgn=$.inArray(a,designations);
let designationDesc="";
if(indexOfDesgn!=-1){designationDesc=designationDescriptions[indexOfDesgn]
}return designationDesc
}function removeDuplicates(a){let filteredArray=[];
a.filter(function(b,c){if($.inArray(b,filteredArray)==-1){filteredArray.push(b)
}});
return filteredArray.join(", ")
}function getAcceptsText(a){return(a.prvdrAccptsPatsInd=="Y"||a.soAccptsPatsInd=="Y")?dentistSearchAcceptPatients:dentistSearchNotAcceptPatients
}function getAcceptsValue(a){return(a.prvdrAccptsPatsInd=="Y"||a.soAccptsPatsInd=="Y")?dentistSearchValueTrue:dentistSearchValueFalse
}function getDentistFacilityContact(a){var b="";
if(isString(a.specialties)&&a.specialties=="General Dentist"&&(isString(a.facilityID)||isNumber(a.facilityID))){b=""+a.facilityID
}else{if(isString(a.specialties)&&a.specialties!="General Dentist"){b=dentistSearchByReferralOnly
}}return b
}function getDentistReferalText(a){var b="";
if(isString(a.specialties)&&a.specialties=="General Dentist"&&(isString(a.facilityID)||isNumber(a.facilityID))){b="<span class='facility-id'> ("+dentistSearchFacilityId+a.facilityID+")</span>"
}else{if(isString(a.specialties)&&a.specialties!="General Dentist"){b="<span class='facility-id'> ("+dentistSearchFacilityId+dentistSearchByReferralOnly+")</span>"
}}return b
}function getDentistCity(){let city="";
if($("#dentistSearchCityInput").val()&&$("#dentistSearchCityInput").val().length>0){city=$("#dentistSearchCityInput").val()
}return city
}function getDentistAddress(){return textNotEmpty($("#dentistSearchAddresss").val())?$("#dentistSearchAddresss").val():""
}function getDentistState(){let state="";
if($("#dentistSearchStateInput").val()&&$("#dentistSearchStateInput").val().length>0){state=$("#dentistSearchStateInput").val()
}return state
}function formatPhoneNumber(a){let formattedNumber=""+a;
if(formattedNumber.length==10){formattedNumber="("+formattedNumber.substring(0,3)+") "+formattedNumber.substring(3,6)+"-"+formattedNumber.substring(6,10)
}return formattedNumber
}function formatZipCode(a){let formattedZip=""+a;
formattedZip=formattedZip.length>5?formattedZip.substring(0,5):formattedZip;
return formattedZip
}function getDentistsZipCode(){let zipcode="";
if($("input.zipcode").val()&&$("input.zipcode").val().length>0){zipcode=$("input.zipcode").val()
}return zipcode
}function getDentistsParticipation(){return textNotEmpty($(".participation-list").val())?$(".participation-list").val():""
}function getDentistsSpeciality(){let speciality="";
if($(".speciality-list").val()&&$(".speciality-list").val().length>0&&$(".speciality-list").val()!="Any"&&$(".speciality-dropdown-wrapper").is(":visible")){speciality=$(".speciality-list").val()
}return speciality
}function getDentistsLastName(){let lastname="";
if($(".last-name").val()&&$(".last-name").val().length>0){lastname=$(".last-name").val()
}return lastname
}function getDentistsPractise(){let practise="";
if($(".business-name").val()&&$(".business-name").val().length>0){practise=$(".business-name").val()
}return practise
}function getDentistsLang(){let language="";
if($(".language-dropdown").val()&&$(".language-dropdown").val().length>0&&$(".language-dropdown").val()!="Any"&&$(".language-filters").is(":visible")){language=$(".language-dropdown").val()
}if($(".language-dropdown-mobile").val()&&$(".language-dropdown-mobile").val().length>0&&$(".language-dropdown-mobile").val()!="Any"&&$(".language-filters-mobile").is(":visible")){language=$(".language-dropdown-mobile").val()
}return language
}function getDentistsDist(){let distance="";
if($(".distance-dropdown").val()&&$(".distance-dropdown").val().length>0&&$(".distance-filter").is(":visible")){distance=$(".distance-dropdown").val()
}if($(".distance-dropdown-mobile").val()&&$(".distance-dropdown-mobile").val().length>0&&$(".distance-filter-mobile").is(":visible")){distance=$(".distance-dropdown-mobile").val()
}return distance
}function getDentistsOfficeTimes(){let officeTimes="";
if(textNotEmpty($(".extended-hours-dropdown").val())&&$(".extended-hours-filters").is(":visible")&&$(".extended-hours-dropdown").val()!="All"){officeTimes=$(".extended-hours-dropdown").val()
}if(textNotEmpty($(".extended-hours-dropdown-mobile").val())&&$(".extended-hours-filters-mobile").is(":visible")&&$(".extended-hours-filters-mobile").val()!="All"){officeTimes=$(".extended-hours-dropdown-mobile").val()
}return officeTimes
}function getDentistsSortType(){let sortType="";
if($(".sort-by-dropdown").val()&&$(".sort-by-dropdown").val().length>0&&$(".sort-by-filter").is(":visible")){sortType=$(".sort-by-dropdown").val()
}if($(".sort-by-dropdown-mobile").val()&&$(".sort-by-dropdown-mobile").val().length>0&&$(".sort-by-filter-mobile").is(":visible")){sortType=$(".sort-by-dropdown-mobile").val()
}return sortType
}function getDentistsSortTypeText(){let sortTypeText="";
if($(".sort-by-dropdown").val()&&$(".sort-by-dropdown").val().length>0&&$(".sort-by-filter").is(":visible")){sortTypeText=$(".sort-by-dropdown option:selected").text()
}if($(".sort-by-dropdown-mobile").val()&&$(".sort-by-dropdown-mobile").val().length>0&&$(".sort-by-filter-mobile").is(":visible")){sortTypeText=$(".sort-by-dropdown-mobile option:selected").text()
}return sortTypeText
}function getDentistsSpecialityText(){let specialityText="";
if($(".speciality-list").val()&&$(".speciality-list").val().length>0&&$(".speciality-dropdown-wrapper").is(":visible")){specialityText=$(".speciality-list option:selected").text()
}return specialityText
}function getDentistsAcceptsNewPatients(){let acceptsNewPatients="";
if(textNotEmpty($(".new-patients-dropdown ").val())&&$(".new-patients-dropdown ").val()!="All"&&$(".new-patients-filters").is(":visible")){acceptsNewPatients=$(".new-patients-dropdown ").val()
}else{if(textNotEmpty($(".new-patients-dropdown-mobile").val())&&$(".new-patients-dropdown-mobile").val()!="All"&&$(".new-patients-filters-mobile").is(":visible")){acceptsNewPatients=$(".new-patients-dropdown-mobile").val()
}}return acceptsNewPatients
}function getDentistsRecordsToReturn(){let numberOfRecordsToReturn=50;
if($(".results-dropdown").val()&&$(".results-dropdown").val().length>0&&$(".results-filter").is(":visible")){numberOfRecordsToReturn=$(".results-dropdown").val()
}else{if($(".results-dropdown-mobile").val()&&$(".results-dropdown-mobile").val().length>0&&$(".results-filter-mobile").is(":visible")){numberOfRecordsToReturn=$(".results-dropdown-mobile").val()
}}return parseInt(numberOfRecordsToReturn)
}function getDentistsLanguages(a){let languages="English";
if(textNotEmpty(getDentistsLang())){languages=""
}if(isString(a.officeLanguages)){languages=a.officeLanguages
}else{if(isObject(a.officeLanguages)&&textNotEmpty(a.officeLanguages)){languages=a.officeLanguages.join(",")
}}if(isString(a.prvdrLanguages)){languages=languages+","+a.prvdrLanguages
}else{if(isObject(a.prvdrLanguages)&&textNotEmpty(a.prvdrLanguages)){languages=languages+","+a.prvdrLanguages.join(",")
}}if(languages.charAt(0)==","){languages=languages.substring(1)
}if(textNotEmpty(languages)&&languages.indexOf(",")>0){return removeDuplicates(languages.split(","))
}else{return languages
}}function getTotalDentistsSelected(){return $(".dentist-result .add-to-list input[type='checkbox']:checked").length
}function getHttpLink(a){return a.toLowerCase().indexOf("http")==0?a:"http://"+a
}$(function(){try{ddpa.geocoder=new google.maps.Geocoder()
}catch(a){}ddpa.findDentistPage=$("#findDentistAddress").length>0?true:false;
ddpa.dsrPage=$("#dentistSearchAddresss").length>0?true:false;
$("#share-location").click();
$(".dentist-search-container .search-dentists").on("click",function(){let locationStatus=$("input[name='sharelocation']:checked").val();
if(locationStatus=="true"&&!$("#findDentistSubmitBtn").hasClass("access-denied")){try{if(navigator.geolocation){navigator.geolocation.getCurrentPosition(showPosition,handleError)
}}catch(c){}}else{if(locationStatus=="true"&&$("#findDentistSubmitBtn").hasClass("access-denied")){$("#browserSettings").modal("show")
}else{if(locationStatus=="false"){let addressEntered=$("#findDentistAddress").val();
if(textNotEmpty(addressEntered)){if($(".address-fields").data("latitude")==undefined||$(".address-fields").data("longitude")==undefined){var b=new RegExp("^[0-9]*$");
if(addressEntered==null||b.test(addressEntered)==false){console.log("empty address or not zip");
ddpa.geocoder.geocode({address:addressEntered,componentRestrictions:{country:"US"}},function(f,e){if(e==google.maps.GeocoderStatus.OK){$(".address-fields").data("latitude",f[0].geometry.location.lat().toFixed(3));
$(".address-fields").data("longitude",f[0].geometry.location.lng().toFixed(3));
updateLocalStorage(false)
}else{$("#search-location .dentist-search-error").show()
}})
}else{console.log("entered zip only");
ddpa.geocoder.geocode({componentRestrictions:{country:"US",postalCode:addressEntered}},function(f,e){if(e==google.maps.GeocoderStatus.OK){$(".address-fields").data("latitude",f[0].geometry.location.lat().toFixed(3));
$(".address-fields").data("longitude",f[0].geometry.location.lng().toFixed(3));
updateLocalStorage(false)
}else{$("#search-location .dentist-search-error").show()
}})
}}else{updateLocalStorage(false)
}}else{$("#search-location .dentist-search-error").show()
}}}}});
$("input.share-location-radio").on("change",function(){var b=$("input[name='sharelocation']:checked").val();
if(b=="true"){$(".address-fields").hide();
$("#search-location .dentist-search-error").hide()
}else{$("#findDentistAddress").val("");
$(".address-fields").show()
}});
if(ddpa.findDentistPage||ddpa.dsrPage){initAutocomplete()
}$("#findDentistAddress").focus(function(){geolocate()
});
$("#findDentistAddress").on("keyup",function(c){if(textNotEmpty($(this).val())){var b=c.keyCode||c.which;
if(b==13){$(".dentist-search-container .search-dentists").click()
}}})
});
function showPosition(a){$(".dentist-search-container .search-dentists").removeClass("access-not-shared");
$(".address-fields").data("latitude",a.coords.latitude);
$(".address-fields").data("longitude",a.coords.longitude);
let street="";
var b=new google.maps.LatLng(a.coords.latitude,a.coords.longitude);
ddpa.geocoder.geocode({latLng:b},function(e,c){if(c==google.maps.GeocoderStatus.OK){if(e[0].formatted_address&&e[0].formatted_address.length>0){street=e[0].formatted_address;
$(".address-fields").data("street",street);
updateLocalStorage(true)
}}else{console.log("Geocoder failed: "+c)
}})
}function handleError(a){$("#browserSettings").modal("show");
$("#findDentistSubmitBtn").addClass("access-denied").removeClass("access-not-shared")
}function updateLocalStorage(a){$("#search-location .dentist-search-error").hide();
let speciality=textNotEmpty($(".speciality-list").val())?$(".speciality-list").val():"empty";
let participates=textNotEmpty($(".participation-list").val())?$(".participation-list").val():"empty";
let latitude=$(".address-fields").data("latitude")==undefined?"empty":$(".address-fields").data("latitude");
let longitude=$(".address-fields").data("longitude")==undefined?"empty":$(".address-fields").data("longitude");
let dentistLastName=textNotEmpty($("#last-name").val())?$("#last-name").val():"empty";
let address="";
if(a){address=$(".address-fields").data("street")==undefined?"empty":$(".address-fields").data("street")
}else{address=textNotEmpty($("#findDentistAddress").val())?$("#findDentistAddress").val():"empty"
}let localStorageValue=speciality+"##"+participates+"##"+latitude+"##"+longitude+"##"+address+"##"+dentistLastName;
if(localStorageisValid()){localStorage.setItem("findDentist",localStorageValue)
}window.open($("#findDentistSubmitBtn").data("redirect"),"_self")
}function initAutocomplete(){if(ddpa.dsrPage){autocomplete=new google.maps.places.Autocomplete((document.getElementById("dentistSearchAddresss")),{types:["geocode"]})
}if(ddpa.findDentistPage){autocomplete=new google.maps.places.Autocomplete((document.getElementById("findDentistAddress")),{types:["geocode"]})
}autocomplete.addListener("place_changed",fillInAddress)
}function fillInAddress(){var a=autocomplete.getPlace();
if(isObject(a.geometry)){console.log(a.geometry.location.lat()+"--@--"+a.geometry.location.lng());
$(".address-fields").data("latitude",a.geometry.location.lat());
$(".address-fields").data("longitude",a.geometry.location.lng());
if(ddpa.dsrPage){$(".dentist-search-results").data("latitude",a.geometry.location.lat());
$(".dentist-search-results").data("longitude",a.geometry.location.lng());
validateTheMandateFields()
}}}function geolocate(){if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(b){var a={lat:b.coords.latitude,lng:b.coords.longitude};
var c=new google.maps.Circle({center:a,radius:b.coords.accuracy});
autocomplete.setBounds(c.getBounds())
})
}}var suggestDirectoryEmailSuccessMsg=getI18nValue("suggestDirectoryEmailSuccessMsg","Your email has successfully been sent.");
var suggestDirectoryEmailFailedMsg=getI18nValue("suggestDirectoryEmailFailedMsg","Mail cannot be sent");
$(function(){$(".send-email").on("click",function(){$(".form-email-error,.form-captcha-error").hide();
var b=$(".email-captcha-text").html();
var c=$(".email-captcha-input").val();
var e=$("#formEmailId").val();
b=removeSpaces(b);
if(c.length>0&&e.length>0&&b==c&&validateEmail(e)){let addtoListResultsObj=getAddtoListResults();
let sendDentistResultParams=$.extend({},ajaxParams_default);
sendDentistResultParams.url=$(".mail-dentistslist").attr("data-url")?$(".mail-dentistslist").attr("data-url"):"/";
sendDentistResultParams.data=JSON.stringify(addtoListResultsObj);
sendDentistResultParams.requestType="POST";
sendDentistResultParams.dataType="json";
sendDentistResultParams.successCallbackFunction=successEmailDentistList;
sendDentistResultParams.errorCallBackFunction=errorEmailDentistList;
ajaxCall(sendDentistResultParams)
}else{if(!validateEmail(e)){$("#sendMailPopUp .form-email-error").show()
}if(b!=c){$("#sendMailPopUp .form-captcha-error").show()
}}});
$("#sendMailPopUp").on("hidden.bs.modal",function(){$("#sendMailPopUp .form-email-error").hide();
$("#sendMailPopUp .form-captcha-error").hide()
});
$("#moreOptionsPopup").on("hidden.bs.modal",function(){$("body").addClass("modal-open")
});
$(".mail-dentistslist").on("click",function(){if($(".dentist-result.result-visible").length>0&&getTotalDentistsSelected()>0){$(".to-email-address").val("");
$(".email-captcha-input").val("");
$("#sendMailPopUp").modal("show");
$("#moreOptionsPopup").modal("hide")
}else{$("#noSelectionPopUp").modal("show")
}});
var a=$("body").height();
$(".mobile-sub-filters .more-options").on("click",function(){$(".more-options-mobile").show();
$(".overlay-background").css("height",a).show()
});
$(".mobile-sub-filters .refine-search").on("click",function(){$(".refine-options").show();
$(".overlay-background").css("height",a).show()
});
$(".close-refine-options a,.close-more-options a,.close-mail-modal a").on("click",function(){$(".refine-options").hide();
$(".more-options-mobile").hide();
$(".send-mail-container").hide();
$(".overlay-background").hide()
});
$(".check-all-results").on("change",function(){let allResultsCheckBox=$(this);
let checkBoxStatus=allResultsCheckBox.is(":checked");
$(".dentist-result").each(function(){if($(this).find(".add-to-list input[type='checkbox']").is(":checked")!=checkBoxStatus){$(this).find(".add-to-list input[type='checkbox']").click()
}})
});
$(document).on("click","input[type='checkbox'][name='add-to-list']",function(){$(".selected-list-count .selected-count").text(getTotalDentistsSelected());
$("#dentistSearchMobileMoreMenuLink .selected-count").text(getTotalDentistsSelected())
})
});
var checkCaptchaAndSubmit=function(a){var a=$("#"+a+"");
var c=removeSpaces(a.find(".captcha-text").html());
var b=removeSpaces(a.find(".captcha-input").val());
if(b&&b.length>0&&b==c){a.find(".form-captcha-error").hide();
return true
}else{a.find(".form-captcha-error").show();
return false
}};
var submitsugestedUpdate=function(){$(document).on("click",".suggested-updateform-submit",function(f){f.stopImmediatePropagation();
var a=$(this).closest("form");
var g=a.attr("id");
var b=checkCaptchaAndSubmit(g);
var c={};
if(b){c={firstName:a.find(".populate-dentist-fname").text(),lastName:a.find(".populate-dentist-lname").text(),address:a.find(".populate-dentist-address").text(),city:a.find(".populate-dentist-city").text(),info:a.find(".reasonValueSelection").val(),addComments:a.find("#additionalComment").val(),subscriberName:a.find("#subscriberName").val(),subscriberEmail:a.find("#subscriberEmailId").val(),stateCode:a.find(".populate-dentist-address").data("stateCode")};
let suggestedUpdateParams=$.extend({},ajaxParams_default);
suggestedUpdateParams.url=$(this).data("url")?$(this).data("url"):"/";
suggestedUpdateParams.data=JSON.stringify(c);
suggestedUpdateParams.requestType="POST";
suggestedUpdateParams.successCallbackFunction=successSuggestedEmail;
suggestedUpdateParams.errorCallBackFunction=errorSuggestedEmail;
ajaxCall(suggestedUpdateParams)
}else{return false
}})
};
var successSuggestedEmail=function(a){$("#feedbackPopup").modal("hide");
if(a){$(".email-success-popup .success-mail-text").html('<span class="success-icon"></span><label>'+suggestDirectoryEmailSuccessMsg+"</label>");
$(".email-success-popup").modal("show");
$(".success-mail-btn, .close").on("click",function(){$(".modal").modal("hide");
$(this).closest(".modal").hide()
})
}else{errorEmailDentistList()
}};
var errorSuggestedEmail=function(){$("#feedbackPopup").hide();
$(".email-success-popup .success-mail-text").html(suggestDirectoryEmailFailedMsg);
$(".email-success-popup").show();
$(".success-mail-btn, .close").on("click",function(){$(".modal").modal("hide");
$(this).closest(".modal").hide()
})
};
var suggestedUpdateForm=function(){$(document).on("click",".suggest-update",function(){let populateDentistFName=$(this).closest(".dentist-result").find(".dentist-title .first-name").html();
let populateDentistLName=$(this).closest(".dentist-result").find(".dentist-title .last-name").html();
let populateDentistAddress=$(this).closest(".dentist-result").find(".dentist-details .dentist-location .dentist-adress-street").html();
let populateDentistAddressCity=$(this).closest(".dentist-result").find(".dentist-details .dentist-location .dentist-adress-city").html();
let stateCode=$(this).closest(".dentist-result").data("stateCode");
$(".populate-dentist-address").data("stateCode",stateCode);
$(".populate-dentist-fname").html(populateDentistFName);
$(".populate-dentist-lname").html(populateDentistLName);
$(".populate-dentist-address").html(populateDentistAddress);
$(".populate-dentist-city").html(populateDentistAddressCity)
})
};
$(function(){var a,b;
$(document).on("click",".dentist-search-pagination .pagination-list li.page a",function(){$("html, body").animate({scrollTop:$(".dentist-search-results .search-results").offset().top-90});
if(!$(this).parent().hasClass("active")){$(".pagination-list li.page").removeClass("active");
$(this).parent().addClass("active");
a=parseInt($(this).data("startresult"));
b=parseInt($(this).data("endresult"));
$(".dentist-result").addClass("result-hidden").removeClass("result-visible");
for(k=a;
k<=b;
k++){$(".dentist-result"+k).removeClass("result-hidden").addClass("result-visible")
}}if($(".first-page").hasClass("active")){$(".dentist-search-pagination .pagination-list li.previous").addClass("visibility-hidden").removeClass("visibility-visible");
$(".dentist-search-pagination .pagination-list li.next").show()
}else{$(".dentist-search-pagination .pagination-list li.previous").removeClass("visibility-hidden").addClass("visibility-visible")
}if($(".last-page").hasClass("active")){$(".dentist-search-pagination .pagination-list li.next").hide();
$(".dentist-search-pagination .pagination-list li.previous").removeClass("visibility-hidden").addClass("visibility-visible")
}else{$(".dentist-search-pagination .pagination-list li.next").show()
}let pageShown=parseInt($(".pagination-list li.page.active").data("pageno"));
$(".dentist-search-pagination .page-index .current-page").text(pageShown)
});
$(document).on("click",".dentist-search-pagination .pagination-list li.previous a",function(){$("html, body").animate({scrollTop:$(".dentist-search-results").offset().top-50});
if($(".pagination-list li.page.active a").hasClass("change-list-backward")){let newPageStartingIndex,newPageEndingIndex;
let currentPageNo=parseInt($(".pagination-list li.page.active").data("pageno"));
if($(".page-"+(currentPageNo-1)).length>0){newPageStartingIndex=currentPageNo-1;
newPageEndingIndex=currentPageNo+6
}$(".pagination-list .page").hide();
$(".pagination-list .page a").removeClass("change-list-forward change-list-backward");
for(m=newPageStartingIndex;
m<=newPageEndingIndex;
m++){$(".pagination-list .page-"+m).show();
if(m==newPageStartingIndex){$(".pagination-list .page-"+m).find("a").addClass("change-list-backward")
}if(m==newPageEndingIndex){$(".pagination-list .page-"+m).find("a").addClass("change-list-forward")
}}}if(!$(".first-page").hasClass("active")){var c=$(".pagination-list li.active").index();
$(".pagination-list li").eq(c-1).find("a").click()
}});
$(document).on("click",".dentist-search-pagination .pagination-list li.next a",function(){$("html, body").animate({scrollTop:$(".dentist-search-results").offset().top-50});
if($(".pagination-list li.page.active a").hasClass("change-list-forward")){let newPageStartingIndex,newPageEndingIndex;
let currentPageNo=parseInt($(".pagination-list li.page.active").data("pageno"));
if($(".page-"+(currentPageNo+1)).length>0){newPageStartingIndex=currentPageNo-6;
newPageEndingIndex=currentPageNo+1
}$(".pagination-list .page").hide();
$(".pagination-list .page a").removeClass("change-list-forward change-list-backward");
for(m=newPageStartingIndex;
m<=newPageEndingIndex;
m++){$(".pagination-list .page-"+m).show();
if(m==newPageStartingIndex){$(".pagination-list .page-"+m).find("a").addClass("change-list-backward")
}if(m==newPageEndingIndex){$(".pagination-list .page-"+m).find("a").addClass("change-list-forward")
}}}if(!$(".last-page").hasClass("active")){var c=$(".pagination-list li.active").index();
$(".pagination-list li").eq(c+1).find("a").click()
}})
});
function addButtons(){var a="<li class='previous'><a class='txt-green' href='javascript:void(0);''><span class='txt-green glyphicon glyphicon-arrow glyphicon-triangle-left'></span>Previous</a></li>";
var b="<li class='next'><a class='txt-green' href='javascript:void(0);''>Next<span class='txt-green glyphicon glyphicon-arrow glyphicon-triangle-right'></span></a></li>";
if(($(".dentist-search-pagination .pagination-list .next").length==0)&&($(".dentist-search-pagination .pagination-list .previous").length==0)){$(".dentist-search-pagination .pagination-list").append(a);
$(".dentist-search-pagination .pagination-list").append(b)
}}function updatePagination(a){var b=getTotalPages(a);
$(".dentist-search-pagination .page-index .total-pages").text(b);
buildPaginationList(b)
}function updatePaginationList(){$(".dentist-search-pagination .pagination-list li.page").hide();
var a=$(".dentist-search-pagination .pagination-list li.active").index();
$(".dentist-search-pagination .page-index .current-page").text(a)
}function getTotalPages(a){var c=parseInt(a/8);
var b=a%8;
var e=c;
if(b>0){e=c+1
}return e
}function buildPaginationList(b){var e,c,a="";
if(b>1){addButtons();
$(".dentist-search-pagination .pagination-list li.page").remove();
for(i=1;
i<=b;
i++){c="";
if(i==1){c="first-page"
}if(i==b){c="last-page"
}if(i==8){a="change-list-forward"
}e="<li class='page "+c+" page-"+i+"' data-pageno='"+i+"'><a href='javascript:void(0);' class='"+a+"' data-startResult='"+parseInt(i*8-7)+"' data-endResult='"+parseInt(i*8)+"' class='txt-green'>"+i+"</a></li>";
$(".dentist-search-pagination .pagination-list .next").before(e)
}$(".dentist-search-pagination .pagination-list .page-1").addClass("active");
$(".dentist-search-pagination .pagination-list .next").show();
$(".dentist-search-pagination .pagination-list .previous").addClass("visibility-hidden").removeClass("visibility-visible");
if($(".dentist-search-pagination .pagination-list li.page").length>8){for(m=9;
m<=b;
m++){$(".dentist-search-pagination .pagination-list li.page-"+m).hide()
}}$(".dentist-search-pagination .pagination-list").show()
}else{$(".dentist-search-pagination .pagination-list").hide()
}}function updateDropDownOnPageLoad(b,a){$("."+b).val(a);
$("."+b).parent().find(".select-options li").each(function(){if($(this).attr("rel")==a){$("."+b).parent().find(".select-styled").text($(this).text())
}})
}$(function(){$(document).on("click",".print-dentistslist",function(){if($(".dentist-result.result-visible").length>0&&getTotalDentistsSelected()>0){let printResultsObj=getAddtoListResults();
localStorage.setItem("printResultsObj",JSON.stringify(printResultsObj));
let redirectURL=$(this).data("url");
window.open(redirectURL)
}else{$("#noSelectionPopUp").modal("show")
}})
});
function buildParamForLocalStorage(a){let localStorageParam="";
if(typeof a=="string"){localStorageParam=a.length>0?a+"##":"empty##"
}else{if(typeof a=="number"){localStorageParam=a>0?a+"##":"empty##"
}}return localStorageParam
}function getDentistsProductText(){let productText="";
if($(".participation-list").val()&&$(".participation-list").val().length>0){productText=$(".participation-list option:selected").text()
}return productText
}function getDentistsLangText(){let languageText="";
if($(".language-dropdown").val()&&$(".language-dropdown").val().length>0&&$(".language-filters").is(":visible")){languageText=$(".language-dropdown option:selected").text()
}if($(".language-dropdown-mobile").val()&&$(".language-dropdown-mobile").val().length>0&&$(".language-filters-mobile").is(":visible")){languageText=$(".language-dropdown-mobile option:selected").text()
}return languageText
}function getDentistsGender(){let gender="";
if(textNotEmpty($(".gender-dropdown").val())&&$(".gender-dropdown").val()!="All"&&$(".gender-filters").is(":visible")){gender=$(".gender-dropdown").val()
}if(textNotEmpty($(".gender-dropdown-mobile").val())&&$(".gender-dropdown-mobile").val()!="All"&&$(".gender-filters-mobile").is(":visible")){gender=$(".gender-dropdown-mobile").val()
}return gender
}var map;
var markers=[];
var mapCenterLatLng={};
var prevInfoWindow;
var mapResults=function(){map=new google.maps.Map(document.getElementById("searchResultsMap"),{zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:false});
for(var c=0;
c<markers.length;
c++){markers[c].setMap(null)
}markers=[];
var a=new google.maps.LatLng(mapCenterLatLng.latitude,mapCenterLatLng.longitude);
map.panTo(a);
var f=locationCoords.length;
var b=new google.maps.MarkerImage("/etc/clientlibs/ddpa/core/images/location-pin.png",new google.maps.Size(28,38),new google.maps.Point(0,0),new google.maps.Point(28/2,38/2));
for(var e=0;
e<f;
e++){let locationPinDentistInfo=e+1+". "+locationCoords[e][2]+" "+locationCoords[e][3]+"<br />"+locationCoords[e][4]+"<br />"+locationCoords[e][5]+", "+locationCoords[e][6]+" "+locationCoords[e][7];
markers[e]=new google.maps.Marker({position:{lat:locationCoords[e][0],lng:locationCoords[e][1]},map:map,html:locationPinDentistInfo,id:e,icon:b});
google.maps.event.addListener(markers[e],"click",function(){if(prevInfoWindow){prevInfoWindow.close()
}var g=new google.maps.InfoWindow({id:this.id,content:this.html,position:this.getPosition()});
prevInfoWindow=g;
g.open(map)
})
}};
var lastName,fname,genderCode,distance,specialties,prvdrLanguages,addressOne,stateCode,zip,telephoneNumber,dentistObj;
$(document).on("click",".pdf-dentistslist",function(){if($(".dentist-result.result-visible").length>0&&getTotalDentistsSelected()>0){let pdfUrl=$(".pdf-dentistslist").attr("data-url");
let addtoListResultsObj=getAddtoListResults();
openWithPost(pdfUrl,"pdfDentistSearchResults",addtoListResultsObj)
}else{$("#noSelectionPopUp").modal("show")
}});
var getAddtoListResults=function(){let dentists=[];
let filters={};
$(".dentist-result").each(function(){if($(this).find("input").is(":checked")){let dentistObj={};
dentistObj.lastName=$(this).find("span.last-name").text();
dentistObj.firstName=$(this).find("span.first-name").text();
dentistObj.distance=$(this).data("distance");
dentistObj.genderCode=$(this).data("gender");
dentistObj.specialties=$(this).find(".dentist-designation .designation-title").eq(0).text();
dentistObj.prvdrLanguages=$(this).data("prvdrLanguages");
dentistObj.addressOne=$(this).data("address");
dentistObj.stateCode=$(this).data("stateCode");
dentistObj.zip=$(this).data("zip");
dentistObj.telephoneNumber=$(this).find(".phone").text();
dentistObj.handicappedAccessible=$(this).data("handicappedaccessible");
dentistObj.publicTransAvail=$(this).data("publictransavail");
dentistObj.education=$(this).data("education");
dentistObj.participationList=$(this).data("participates");
dentistObj.businessHours=$(this).find(".timing .icon-details").text();
dentistObj.dentistEmail=$(this).find(".dentist-email .info-detail").text();
dentistObj.facilityID=$(this).data("facilityID");
dentistObj.acceptsPatients=$(this).find(".accepts").data("accepts")==="Y"?true:false;
dentistObj.treatsChildren=$(this).data("treatsChildren");
dentistObj.treatsAdults=$(this).data("treatsAdults");
dentistObj.city=$(this).data("city");
dentistObj.officeLanguages=$(this).data("officeLanguages");
dentistObj.businessName=$(this).data("businessName");
dentistObj.acceptsString=$(this).data("acceptsString");
dentistObj.phone=$(this).data("phone");
dentistObj.dentistWebURL=$(this).data("dentistWebURL");
dentists.push(dentistObj)
}});
filters.Product=getDentistsProductText()?getDentistsProductText():"";
filters.Address=$("#dentistSearchAddresss").val();
filters.resultSortedBy=$(".sort-by-dropdown option:selected").text();
filters.Distance=$(".distance-dropdown").val();
filters.NumberOfResults=$(".results-dropdown").val();
filters.Specialty=$(".speciality-list option:selected").text();
filters.Language=$(".language-dropdown").val()?$(".language-dropdown option:selected").text():"";
filters.Gender=$(".gender-dropdown").val()?$(".gender-dropdown option:selected").text():"";
filters.TotalResultsFetched=getTotalDentistsSelected();
filters.receiverEmail=$(".to-email-address").val().length>0?$(".to-email-address").val():"";
let dentistsListObj={dentists:dentists,filters:filters};
return dentistsListObj
};
var dentistAccessible=getI18nValue("dentistAccessible","Accessible");
var dentistScheduleAppointment=getI18nValue("dentistScheduleAppointment","Schedule appointment");
var dentistPublicTransitAccess=getI18nValue("dentistPublicTransitAccess","Public transit Access");
var dentistTreatsDisabledAdults=getI18nValue("dentistTreatsDisabledAdults","Treats disabled adults");
var dentistTreatsDisabledChildren=getI18nValue("dentistTreatsDisabledChildren","Treats disabled children");
var dentistWebsite=getI18nValue("dentistWebsite","Website");
var dentistMilesAway=getI18nValue("dentistMilesAway","miles away");
var dentistSearchOffice=getI18nValue("dentistSearchOffice","Office");
var dentistSearchEmail=getI18nValue("dentistSearchEmail","Email");
var dentistSearchMale=getI18nValue("dentistSearchMale","Male");
var dentistSearchFemale=getI18nValue("dentistSearchFemale","Female");
let dentistSearchListParams=$.extend({},ajaxParams_default);
let defaultStateSelected="";
$(function(){let dentistSearchPage=textNotEmpty($(".dentist-search-results-container"))?true:false;
let defaultDistance=true;
var b="",f={},e=[],c="",a="";
dentistSearchListParams.successCallbackFunction=loadDentistSearchResults;
dentistSearchListParams.errorCallBackFunction=dentistResultsAjaxFail;
dentistSearchListParams.completeCallbackFunction=dentistSearchAjaxCompleted;
if(localStorageisValid()){b=localStorage.getItem("findDentist");
a=localStorage.getItem("locationShared");
if(b&&textNotEmpty(b)&&b.indexOf("##")!=-1){e=b.split("##");
if(textNotEmpty(b)&&b.indexOf("##")!=-1){e=b.split("##");
if(textNotEmpty(e[0])&&e[0]!="empty"){if(e[0]!="Any"){c="&specialtyCode="+e[0]
}$(".speciality-list option[value='"+e[0]+"']").attr("selected","selected")
}if(textNotEmpty(e[1])&&e[1]!="empty"){c=c+"&productCode="+e[1];
$(".participation-list option[value='"+e[1]+"']").attr("selected","selected")
}if(textNotEmpty(e[2])&&e[2]!="empty"){latitude=e[2];
c=c+"&latitude="+e[2];
$(".dentist-search-results").data("latitude",e[2])
}if(textNotEmpty(e[3])&&e[3]!="empty"){longitude=e[3];
c=c+"&longitude="+e[3];
$(".dentist-search-results").data("longitude",e[3])
}if(textNotEmpty(e[4])&&e[4]!="empty"){let dentistAddress=e[4];
$("#dentistSearchAddresss").val(dentistAddress);
$("#dentistSearchAddresss").parent().find(".clearTextbtn").show()
}if(textNotEmpty(e[5])&&e[5]!="empty"){$("#dentistSearchLastNameInput").val(e[5]);
c=c+"&lastName="+e[5];
setTimeout(function(){$("#toggle-filters").click()
},2000)
}localStorage.removeItem("findDentist");
dentistSearchListParams.url="/etc/ddpa/paths/dentistsearch.json?maximumNumberOfRecordsToReturn=50"+c;
setTimeout(function(){$(".dentist-search-results .loading-results").show();
ajaxCall(dentistSearchListParams)
},1000)
}}}if(defaultDistance){$("#dentistSearchDistanceDropdown option[value='15']").attr("selected","selected")
}$(".custom-dropdown").selectize({onChange:function(g){if(dentistSearchPage){validateTheMandateFields()
}}});
$(document).on("click",".dentist-more-info .dentist-other-info-title",function(){$(this).find("span").toggleClass("hidden");
$(this).parent().find(".dentist-other-info").slideToggle()
});
$(document).on("click",".get-map",function(){$(".search-results-map").slideToggle(1500)
});
$(document).on("click",".dentist-location",function(){window.open("http://maps.google.com/maps?saddr='"+$(".dentist-search-results").data("sourcelocation")+"&daddr='"+$(this).parents(".dentist-result").data("address")+"")
});
$(document).on("mouseenter",".dentist-designation .designation-title",function(){$(this).parent().parent().find(".designation-description").show()
});
$(document).on("mouseleave",".dentist-designation .designation-title",function(){$(this).parent().parent().find(".designation-description").hide()
});
if(!$("input.dentist-search-input").val()){$("input.dentist-search-input").parent().find(".clearTextbtn").hide()
}$("#toggle-filters").on("click",function(){$(this).toggleClass("closed");
$(this).find("span.view-more-filters,span.view-less-filters").toggle();
$(this).find("span.caret").toggleClass("ddpa-caret-down  ddpa-caret-up");
$(".refine-filters").slideToggle("slow")
});
$(".clearTextbtn").on("click",function(){$(this).parent().find("input.dentist-search-input").val("").removeClass("activeField");
$(this).hide();
if(dentistSearchZipCodeInputEmpty()&&dentistSearchAddressInputsEmpty()){(".dentist-error").hide()
}});
$("input.dentist-search-input").focus(function(){if(textNotEmpty($(this).val())){$(this).parent().find(".clearTextbtn").show()
}});
$("input#dentistSearchStateInput").focus(function(){if($(this).val()){$(this).parent().parent().find(".clearTextbtn").show()
}});
$("input.dentist-search-input").on("keyup",function(g){if(textNotEmpty($(this).val())){$(this).addClass("activeField");
$(this).parent().find(".clearTextbtn").show();
if(g.which==13||g.which==9){validateTheMandateFields()
}}else{$(this).parent().find(".clearTextbtn").hide();
$(this).removeClass("activeField");
if(dentistSearchZipCodeInputEmpty()&&dentistSearchAddressInputsEmpty()){$(".dentist-error").hide()
}}});
$("#feedbackPopup").on("hidden.bs.modal",function(){$("#feedbackPopup #subscriberName").val("").removeClass("activeField");
$("#feedbackPopup #subscriberEmailId").val("").removeClass("activeField");
$("#feedbackPopup #captchaInput").val("").removeClass("activeField");
$("#additionalComment").val("");
$(".form-captcha-error").hide();
var g=$(".select-reason-content .select-options li").eq(0).text();
$(".select-reason-content .select-styled").text(g)
});
$(".refine-search-button").on("click",function(){$("#refinePopup").modal("hide");
validateTheMandateFields()
});
$(".find-dentists-button").on("click",function(){validateTheMandateFields()
});
$(".fetch-new-results").on("click",function(){validateTheMandateFields()
})
});
function getDentistSearchResults(){$(".refine-options").hide();
$(".overlay-background").hide();
$(".add-all-to-list-mobile").hide();
$(".check-all-results").prop("checked",false);
$(".selected-list-count .selected-count").text(0);
$("#dentistSearchMobileMoreMenuLink .selected-count").text(0);
$(".dentist-search-results-container .total-results-message").hide();
$(".search-results-map").removeClass("has-results");
$(".add-to-list input[type='checkbox']").prop("checked",false);
if(!ddpa.dentistSearchAjaxInProgress){ddpa.dentistSearchAjaxInProgress=true;
$(".dentist-search-results .search-results").empty();
$(".no-results-found").hide();
$(".dentist-search-results .loading-results").show();
var a="";
let DentistsGender=getDentistsGender();
let DentistsLang=getDentistsLang();
let DentistsDist=getDentistsDist();
let DentistsOfficeTimes=getDentistsOfficeTimes();
let DentistsSortType=getDentistsSortType();
let DentistsAcceptsNewPatients=getDentistsAcceptsNewPatients();
let DentistsRecordsToReturn=getDentistsRecordsToReturn();
let DentistsZipCode=getDentistsZipCode();
let DentistsParticipation=getDentistsParticipation();
let DentistsSpeciality=getDentistsSpeciality();
let DentistsLastName=getDentistsLastName();
let DentistsPractise=getDentistsPractise();
a=textNotEmpty(DentistsGender)?a+"&genderCode="+DentistsGender:a;
a=textNotEmpty(DentistsLang)?a+"&languageCode="+DentistsLang:a;
a=textNotEmpty(DentistsDist)?a+"&maximumDistance="+DentistsDist:a;
a=textNotEmpty(DentistsOfficeTimes)?a+"&officeTimes="+DentistsOfficeTimes:a;
a=textNotEmpty(DentistsSortType)?a+"&sortType="+DentistsSortType:a;
a=textNotEmpty(DentistsAcceptsNewPatients)?a+"&isAcceptingNewPatientsOnly="+DentistsAcceptsNewPatients:a;
a=textNotEmpty(DentistsZipCode)?a+"&zipCode="+DentistsZipCode:a;
a=textNotEmpty(DentistsParticipation)?a+"&productCode="+DentistsParticipation:a;
a=textNotEmpty(DentistsSpeciality)?a+"&specialtyCode="+DentistsSpeciality:a;
a=textNotEmpty(DentistsLastName)?a+"&lastName="+DentistsLastName:a;
a=textNotEmpty(DentistsPractise)?a+"&businessName="+DentistsPractise:a;
a=a+"&latitude="+$(".dentist-search-results").data("latitude");
a=a+"&longitude="+$(".dentist-search-results").data("longitude");
a=a+"&maximumNumberOfRecordsToReturn="+DentistsRecordsToReturn;
dentistSearchListParams.url="/etc/ddpa/paths/dentistsearch.json?"+a.substring(1);
ajaxCall(dentistSearchListParams)
}}function loadDentistSearchResults(b){if(b&&b.listOfLocations&&isObject(b)&&b.listOfLocations.length>0){$(".dentist-search-results .loading-results").hide();
$(".dentist-search-results .search-results").data("total-results",b.listOfLocations.length);
$(".dentist-search-results-container .total-results-message .total-results-count").text(b.listOfLocations.length);
$(".dentist-search-results-container .total-results-message").show();
$(".search-results-map").addClass("has-results");
$(".no-results-found").hide();
$(".search-results").show();
$(".search-results-map").show();
$(".add-all-to-list-mobile").show();
$(".dentist-search-pagination .page-index .current-page").text("1");
var e=$("#searchResultsList").html();
$(".check-all-results").prop("disabled",false);
locationCoords=[];
var a=Handlebars.compile(e);
$.each(b.listOfLocations,function(E,S){var u="";
var h="";
var Q=S.genderCode=="F"?dentistSearchFemale:dentistSearchMale;
var p="";
var l=textNotEmpty($(".schedule-url").val())?$(".schedule-url").val():"";
let latlonValue=[S.latitude,S.longitude,S.firstName,S.lastName,S.addressOne,S.city,S.stateCode,formatZipCode(S.zip)];
locationCoords.push(latlonValue);
if(E==0){mapCenterLatLng.latitude=S.latitude;
mapCenterLatLng.longitude=S.longitude
}if(isBoolean(S.handicappedAccessible)&&S.handicappedAccessible){p="<li class='accessible'><p class='icon no-margin'></p><p class='icon-details no-margin'>"+dentistAccessible+"</p></li>"
}var z="",j=["Delta Dental PPO","Delta Dental Premier","DeltaCare USA","Delta Dental Patient Direct"];
if(textNotEmpty(S.products)){for(i=0;
i<S.products.length;
i++){if($.inArray(S.products[i].productDescription,j)!=-1){z=z+", "+S.products[i].productDescription
}}if(textNotEmpty(z)){z=z.substring(1)
}}else{if($.inArray(S.products.productDescription,j)!=-1){z=S.products.productDescription
}}var t="",y="",A="",w="",s="",v="",O="";
if(S.products.length>0){for(i=0;
i<S.products.length;
i++){if(S.products[i].productDescription=="Delta Dental PPO"){y="<p class='info-detail'><span>"+S.products[i].productDescription+"</span><span class='block accepts-criteria'>"+getAcceptsText(S.products[i])+"</span></p>";
v=v+","+getAcceptsValue(S.products[i])
}if(S.products[i].productDescription=="Delta Dental Premier"){A="<p class='info-detail'><span>"+S.products[i].productDescription+"</span><span class='block accepts-criteria'>"+getAcceptsText(S.products[i])+"</span></p>";
v=v+","+getAcceptsValue(S.products[i])
}if(S.products[i].productDescription=="DeltaCare USA"){w="<p class='info-detail'><span>"+S.products[i].productDescription+"</span>"+getDentistReferalText(S)+"<span class='block accepts-criteria'>"+getAcceptsText(S.products[i])+"</span></p>";
v=v+","+getAcceptsValue(S.products[i]);
O=getDentistFacilityContact(S)
}if(S.products[i].productDescription=="Delta Dental Patient Direct"){s="<p class='info-detail'><span>"+S.products[i].productDescription+"</span><span class='block accepts-criteria'>"+getAcceptsText(S.products[i])+"</span></p>";
v=v+","+getAcceptsValue(S.products[i])
}}v=v.substring(1);
u=y+A+w+s
}else{if($.inArray(S.products.productDescription,j)!=-1){v=getAcceptsValue(S.products)
}if(S.products.productDescription=="DeltaCare USA"){t=getDentistReferalText(S);
O=getDentistFacilityContact(S)
}if($.inArray(S.products.productDescription,j)!=-1){u="<p class='info-detail'><span>"+S.products.productDescription+"</span>"+t+"<span class='block accepts-criteria'>"+getAcceptsText(S.products)+"</span></p>"
}}var N="";
if(textNotEmpty(u)){N="<div class='dentist-participation info-bar'><p class='info-detail'>"+u+"</p></div>"
}let allLanguages=getDentistsLanguages(S);
if(textNotEmpty(allLanguages)){h="<li class='chat'><p class='icon no-margin'></p><p class='icon-details no-margin'>"+allLanguages+"</p></li>"
}var F="";
if(isString(S.providerScheduleUrl)){F="<a target='_blank' href='"+l+$.trim(S.providerScheduleUrl)+"' class='redirect-link white-link schedule-appointment'>"+dentistScheduleAppointment+"</a>"
}var x="";
if(isBoolean(S.publicTransAvail)&&S.publicTransAvail){x="<li class='transit'><p class='icon no-margin'></p><p class='icon-details no-margin'>"+dentistPublicTransitAccess+"</p></li>"
}var K="",r="",M="",n="";
if(isObject(S.education)){if(S.education.length>1){var n="";
$.each(S.education,function(T,U){if(textNotEmpty(U.educationDesc)){n=n+"<span class='uppercase bold'>"+U.educationDesc+"</span><br/>";
K=K+", "+U.educationDesc
}if(textNotEmpty(U.institutionName)){n=n+"<span class='uppercase bold'>"+U.institutionName+"</span><br/>"
}});
K=K.substring(2)
}else{K=isString(S.education.educationDesc)?S.education.educationDesc:"";
M=K;
if(textNotEmpty(K)){n="<span class='uppercase bold'>"+K+"</span><br/>"
}r=isString(S.education.institutionName)?S.education.institutionName:"";
if(textNotEmpty(r)){n=n+"<span class='bold'>"+r+"</span>"
}}}var C="";
if(isString(S.facilityID)){C=S.facilityID
}var L="";
if(isString(S.officeTimes)){L="<li class='timing'><p class='icon no-margin'></p><p class='icon-details no-margin'>"+S.officeTimes+"</p></li>"
}else{if(isObject(S.officeTimes)){L="<li class='timing'><p class='icon no-margin'></p><p class='icon-details no-margin'>"+S.officeTimes.join(", ")+"</p></li>"
}}var R="";
if(isString(S.officeEmail)&&S.officeEmail&&textNotEmpty(S.officeEmail)){R="<div class='dentist-email info-bar col-sm-4'><p class='info-title'>"+dentistSearchEmail+"</p><a href='mailto:"+S.officeEmail+"' class='info-detail no-margin bold'>"+S.officeEmail+"</a></div>"
}var G="";
if(isString(S.businessName)&&S.businessName&&textNotEmpty(S.businessName)){G="<div class='dentist-office info-bar'><p class='info-detail dentist-office'>"+S.businessName+"</p></div>"
}var g="",f="";
if(isString(S.addressOne)&&S.addressOne){if(isString(S.addressTwo&&S.addressTwo)){g="<span class='dentist-adress-street block'>"+S.addressOne+nbsp;
+S.addressTwo+"</span><span class='dentist-adress-city block'>"
}else{g="<span class='dentist-adress-street block'>"+S.addressOne+"</span><span class='dentist-adress-city block'>"
}}if(isString(S.city)&&S.city){g=g+S.city
}if(isString(S.stateCode)&&S.stateCode){g=g+", "+S.stateCode
}if(isNumber(S.zip)&&S.zip){g=g+" "+formatZipCode(S.zip)+"</span>"
}if(isNumber(S.distance)&&(S.distance>=0)){f=" <span class='miles-away'>"+parseFloat(S.distance).toFixed(1)+" "+dentistMilesAway+"</span>"
}var B=false,q=false,D="",P="",o="";
if(isBoolean(S.providerServcDisableAdlt)&&S.providerServcDisableAdlt){B=true
}if(isBoolean(S.providerServcDisableChld)&&S.providerServcDisableChld){q=true
}if(B){P="<span class='adults'>"+dentistTreatsDisabledAdults+"</span>";
if(q){P="<span class='adults'>"+dentistTreatsDisabledAdults+", </span>"
}}if(q){if(B){o="<span class='children pad-left'>"+dentistTreatsDisabledChildren+"</span>"
}else{o="<span class='children'>"+dentistTreatsDisabledChildren+"</span>"
}}if(textNotEmpty(P)||textNotEmpty(o)){D="<li class='treats'><p class='icon no-margin'></p><p class='icon-details no-margin'>"+P+o+"</p></li>"
}if(textNotEmpty(P)&&textNotEmpty(o)){D="<li class='treats'><p class='icon no-margin'></p><p class='icon-details no-margin'>"+P+""+o+"</p></li>"
}var I="",H="";
if(isString(S.urlText)&&textNotEmpty(S.urlText)){H=getHttpLink(S.urlText);
I="<div class='dentist-website info-bar col-sm-4'><p class='info-title'>"+dentistWebsite+"</p><p class='info-detail'><a href='"+getHttpLink(S.urlText)+"' target='_blank'>"+S.urlText+"</a></p></div>"
}var J="";
if(parseInt(E+1)>8){J="result-hidden"
}else{J="result-visible"
}let dentistSearchResultItem={listNum:parseInt(E+1),resultHidden:J,latitude:S.latitude,longitude:S.longitude,firstName:S.firstName,lastName:S.lastName,dentistMiles:f,dentistAddressOne:S.addressOne,dentistAddressTwo:S.addressTwo,dentistAddressFields:g,dentistCity:S.city,dentistZip:formatZipCode(S.zip),dentistState:S.stateCode,dentistNumber:formatPhoneNumber(S.telephoneNumber),dentistUnformatNumber:S.telephoneNumber,dentistDistance:parseFloat(S.distance).toFixed(1),prvdrLanguages:S.prvdrLanguages,specialties:S.specialties,handicappedAccessible:S.handicappedAccessible,publicTransAvail:S.publicTransAvail,dentistGenderCode:S.genderCode,dentistGender:Q,participatesDiv:N,facilityID:O,treatsAdults:B,treatsChildren:q,officeTimesList:L,dentistLangs:h,publicTransAvailAccess:x+p,dentistEducationDesc:M,dentistEducationInst:K+r,dentistEmailSite:R+I,scheduleAppointment:F,dentistOffice:G,dentistBusinessName:S.businessName,dentistTreats:D,designationDescription:getDesignationDescription(S.specialties),totalEdu:n};
let searchResultsListRowHtml=a(dentistSearchResultItem);
$(".search-results").append(searchResultsListRowHtml);
let officeLanguages=isObject(S.officeLanguages)?(S.officeLanguages).join(", "):S.officeLanguages;
let prvdrLanguages=isObject(S.prvdrLanguages)?(S.prvdrLanguages).join(", "):S.prvdrLanguages;
$(".search-results .dentist-result"+parseInt(E+1)).data("latitude",S.latitude);
$(".search-results .dentist-result"+parseInt(E+1)).data("longitude",S.longitude);
$(".search-results .dentist-result"+parseInt(E+1)).data("officeLanguages",allLanguages);
$(".search-results .dentist-result"+parseInt(E+1)).data("prvdrLanguages",allLanguages);
$(".search-results .dentist-result"+parseInt(E+1)).data("zip",formatZipCode(S.zip));
$(".search-results .dentist-result"+parseInt(E+1)).data("stateCode",S.stateCode);
$(".search-results .dentist-result"+parseInt(E+1)).data("distance",parseFloat(S.distance).toFixed(1));
$(".search-results .dentist-result"+parseInt(E+1)).data("city",S.city);
if(isString(S.addressTwo&&S.addressTwo)){$(".search-results .dentist-result"+parseInt(E+1)).data("address",S.addressOne+S.addressTwo)
}else{$(".search-results .dentist-result"+parseInt(E+1)).data("address",S.addressOne)
}$(".search-results .dentist-result"+parseInt(E+1)).data("participates",z);
$(".search-results .dentist-result"+parseInt(E+1)).data("handicappedaccessible",S.handicappedAccessible);
$(".search-results .dentist-result"+parseInt(E+1)).data("publictransavail",S.publicTransAvail);
$(".search-results .dentist-result"+parseInt(E+1)).data("facilityID",O);
$(".search-results .dentist-result"+parseInt(E+1)).data("treatsAdults",B);
$(".search-results .dentist-result"+parseInt(E+1)).data("treatsChildren",q);
$(".search-results .dentist-result"+parseInt(E+1)).data("gender",Q);
$(".search-results .dentist-result"+parseInt(E+1)).data("education",K);
$(".search-results .dentist-result"+parseInt(E+1)).data("businessName",S.businessName);
$(".search-results .dentist-result"+parseInt(E+1)).data("acceptsString",v);
$(".search-results .dentist-result"+parseInt(E+1)).data("phone",formatPhoneNumber(S.telephoneNumber));
$(".search-results .dentist-result"+parseInt(E+1)).data("dentistWebURL",H)
});
$(".dentist-search-pagination").show();
updatePagination(b.listOfLocations.length);
mapResults();
ddpa.dentistSearchAjaxInProgress=false
}else{ddpa.dentistSearchAjaxInProgress=false;
$(".check-all-results").prop("disabled",true);
$(".dentist-search-results-container .total-results-message").hide();
$(".search-results-map").removeClass("has-results");
dentistResultsAjaxFail()
}if(isString(b.originatingLatitude)&&isString(b.originatingLongitude)){let latitude=b.originatingLatitude;
let longitude=b.originatingLongitude;
let currentLatLng=new google.maps.LatLng(latitude,longitude);
let sourcelocation="";
try{let newGeoCoder=new google.maps.Geocoder();
newGeoCoder.geocode({latLng:currentLatLng},function(g,f){if(f==google.maps.GeocoderStatus.OK){if(g[0].formatted_address&&g[0].formatted_address.length>0){sourcelocation=g[0].formatted_address;
$(".dentist-search-results").data("sourcelocation",sourcelocation)
}}else{}})
}catch(c){}}}function validateTheMandateFields(){let Addressvalidation=false;
let address=$("#dentistSearchAddresss").val();
if(textNotEmpty(address)){let mygeocode=new google.maps.Geocoder();
var a=new RegExp("^[0-9]*$");
if(a.test(address)==false){mygeocode.geocode({address:address,componentRestrictions:{country:"US"}},function(c,b){if(b==google.maps.GeocoderStatus.OK){$(".dentist-search-results").data("latitude",c[0].geometry.location.lat().toFixed(3));
$(".dentist-search-results").data("longitude",c[0].geometry.location.lng().toFixed(3));
getDentistSearchResults()
}else{console.log("no geocode results");
dentistResultsAjaxFail()
}})
}else{mygeocode.geocode({componentRestrictions:{country:"US",postalCode:address}},function(c,b){if(b==google.maps.GeocoderStatus.OK){$(".dentist-search-results").data("latitude",c[0].geometry.location.lat().toFixed(3));
$(".dentist-search-results").data("longitude",c[0].geometry.location.lng().toFixed(3));
getDentistSearchResults()
}else{console.log("no geocode results");
dentistResultsAjaxFail()
}})
}}}function dentistSearchZipCodeInputValid(){if(isValidZipCode($("#dentistSearchZipCodeInput").val())){return true
}else{$(".dentist-common-error").show();
return false
}}function dentistSearchZipCodeInputEmpty(){return textNotEmpty($("#dentistSearchZipCodeInput").val())?false:true
}function dentistSearchAddressInputsEmpty(){if(textNotEmpty($("#dentistSearchAddressInput").val())||textNotEmpty($("#dentistSearchCityInput").val())||textNotEmpty($("#dentistSearchStateInput").val())){return false
}else{return true
}}function dentistSearchAddressInputsValid(){if(textNotEmpty($("#dentistSearchCityInput").val())&&textNotEmpty($("#dentistSearchStateInput").val())){return true
}else{if($("#dentistSearchCityInput").val().length==0){$(".dentist-city-error").show()
}else{$(".dentist-city-error").hide()
}if($("#dentistSearchStateInput").val().length==0){$(".dentist-state-error").show()
}else{$(".dentist-state-error").hide()
}return false
}}function updateStatesForDentistSearch(a){let listOfStates=a;
$("#dentistSearchStateInput").typeahead({hint:true,highlight:true,minLength:1},{name:"states",source:substringMatcher(listOfStates)}).on("keyup",function(f){var c=f.keyCode||f.which;
var b=$(this).parent().find(".tt-dataset-states .tt-suggestion").length;
if(b==1){if(c==13||c==9){$(this).parent().find(".tt-dataset-states .tt-suggestion").first().addClass("tt-cursor").click();
$(this).typeahead("close")
}}});
if(textNotEmpty(defaultStateSelected)){$("#dentistSearchStateInput").typeahead("val",defaultStateSelected)
}}function dentistResultsAjaxFail(){$(".dentist-search-results .loading-results").hide();
$(".no-results-found").show();
$(".search-results").empty().hide();
$(".dentist-search-pagination").hide();
$(".search-results-map").hide()
}function dentistSearchAjaxCompleted(){ddpa.dentistSearchAjaxInProgress=false
}$(function(){$(".find-delta-dental-component > a,.toggle-find-dental-modal,.close-find-dental-modal").on("click",function(){$("#header-member-myemployer").val("headerEmployer");
$("#header-member-myown").val("headerMyOwnBenefit");
$(".find-my-doctor").toggle();
$(".find-my-doctor #findDentalHeaderInput").val("");
$(".find-my-doctor .matching-dental .user-selected-state, .find-dental-dropdown-content .selected-plan-name").text("");
$(".find-my-doctor #findDentalHeaderInput").removeClass("activeField");
$("#findDentalHeaderVariationBtn").addClass("inactive-btn")
});
$("input.header-benefit-type").on("click",function(){let benefitType=$("input[name='header-member-benefit-type']:checked").val();
let benefitContainer=$(this).parents(".benefits-container");
$("#findDentalHeaderVariationBtn").addClass("inactive-btn");
if(benefitType=="headerEmployer"){$("#header-member-myemployer-info").show();
$("#header-member-myown-info").hide()
}else{$("#header-member-myemployer-info").hide();
$("#header-member-myown-info").show()
}});
$("#header-member-myemployer-input").keyup(function(a){if(a.keyCode!=13&&a.keyCode!=9){$(this).parent().parent().find(".matching-dental .redirect-link").attr("href","javascript:void(0);").addClass("invalid");
$(".member-company-info-results-container").hide();
if($(this).val().length==0){$(this).parent().parent().find(".selected-plan-name").hide();
$(this).parent().parent().find(".redirect-link").addClass("inactive-btn")
}else{$(this).parent().parent().find(".redirect-link").removeClass("inactive-btn")
}}})
});
function headerMemberLocator(b,a){let states=[];
let jsonRes=b;
if(jsonRes&&jsonRes.stateDetails.length>0&&typeof jsonRes=="object"){$.each(jsonRes.stateDetails,function(c,e){states.push(e.stateName)
})
}headerDualMcJs(b,a,states);
if($(".user-state").length>0){$(".user-state").each(function(){var c=$(this);
$(this).typeahead({hint:true,highlight:true,minLength:1},{name:"states",source:substringMatcher(states)}).on("keyup",function(h){var g=h.keyCode||h.which;
var f=$(this).parent().find(".tt-dataset-states .tt-suggestion").length;
if(f==1){if(g==13||g==9){$(this).parent().find(".tt-dataset-states .tt-suggestion").first().addClass("tt-cursor").click();
$(this).typeahead("close")
}}});
$(this).bind("typeahead:selected",function(h,f){var g=f;
var e=0;
$.each(jsonRes.stateDetails,function(j,l){if(g==l.stateName){c.parent().parent().find(".selected-plan-name").text(l.planName);
c.parent().parent().find(".matching-dental .user-selected-state").text(l.stateName);
if(c.hasClass("redirect-rfp")){let formURLtoRedirectRFP=$(".redirectRfpFormPath").val();
if(l.rfpUrl&&typeof l.rfpUrl=="string"&&l.rfpUrl.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",l.rfpUrl)
}else{c.parent().parent().find(".matching-dental .redirect-link").attr("href",formURLtoRedirectRFP+".html")
}localStorage.setItem("rfpInquiryState",l.stateName)
}else{if(c.hasClass("redirect-mcsite")){if(l.webSiteUrl.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",l.webSiteUrl);
c.parent().parent().find(".redirect-link").removeClass("inactive-btn")
}else{c.parent().parent().find(".matching-dental .redirect-link").attr("href","javascript:void(0);");
c.parent().parent().find(".redirect-link").addClass("inactive-btn")
}}else{if(c.hasClass("redirect-sdp")){if(l.shopForDentalPlansUrl.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",l.shopForDentalPlansUrl);
c.parent().parent().find(".redirect-link").removeClass("inactive-btn")
}else{c.parent().parent().find(".matching-dental .redirect-link").attr("href","javascript:void(0);");
c.parent().parent().find(".redirect-link").addClass("inactive-btn")
}}else{if(c.hasClass("redirect-jon")){if(l.joinOurNetworks.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",l.joinOurNetworks);
c.parent().parent().find(".redirect-link").removeClass("inactive-btn")
}else{c.parent().parent().find(".matching-dental .redirect-link").attr("href","javascript:void(0);");
c.parent().parent().find(".redirect-link").addClass("inactive-btn")
}}else{if(c.hasClass("redirect-copp")){if(l.careerOpportunitiesUrl.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",l.careerOpportunitiesUrl);
c.parent().parent().find(".redirect-link").removeClass("inactive-btn")
}else{c.parent().parent().find(".matching-dental .redirect-link").attr("href","javascript:void(0);");
c.parent().parent().find(".redirect-link").addClass("inactive-btn")
}}else{if(c.hasClass("redirect-inquiryform")){let formURLtoRedirect=$(".redirectInquiryPath").val();
if(typeof l.customerServiceEmail=="string"&&l.customerServiceEmail.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",formURLtoRedirect+".html?showform=yes")
}else{c.parent().parent().find(".matching-dental .redirect-link").attr("href",formURLtoRedirect+".html?showform=no")
}if(localStorageisValid()){localStorage.setItem("inquiryState",l.stateName)
}}else{if(c.hasClass("redirect-mcCommunityBenefits")){if(typeof l.communityBenefitsUrl=="string"&&l.communityBenefitsUrl.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",l.communityBenefitsUrl)
}}else{if(c.hasClass("redirect-mcForSmallBusiness")){if(l.joinOurNetworks.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",l.mcForSmallBusiness);
c.parent().parent().find(".redirect-link").removeClass("inactive-btn")
}else{c.parent().parent().find(".matching-dental .redirect-link").attr("href","javascript:void(0);");
c.parent().parent().find(".redirect-link").addClass("inactive-btn")
}}else{if(c.hasClass("redirect-mcForRetirees")){if(l.joinOurNetworks.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",l.mcForRetirees);
c.parent().parent().find(".redirect-link").removeClass("inactive-btn")
}else{c.parent().parent().find(".matching-dental .redirect-link").attr("href","javascript:void(0);");
c.parent().parent().find(".redirect-link").addClass("inactive-btn")
}}else{if(c.hasClass("redirect-mcForIndividualFamily")){if(l.joinOurNetworks.length>0){c.parent().parent().find(".matching-dental .redirect-link").attr("href",l.mcForIndividualFamily);
c.parent().parent().find(".redirect-link").removeClass("inactive-btn")
}else{c.parent().parent().find(".matching-dental .redirect-link").attr("href","javascript:void(0);");
c.parent().parent().find(".redirect-link").addClass("inactive-btn")
}}}}}}}}}}}c.parent().parent().find(".matching-dental").show();
c.parent().parent().find(".help-text").hide();
c.parent().parent().find(".redirect-link").removeClass("inactive-btn")
}})
})
})
}}function headerDualMcJs(c,b,a){if($(".dual-user-state").length>0){$(".dual-user-state").typeahead({hint:true,highlight:true,minLength:1},{name:"states",source:substringMatcher(a)}).on("keyup",function(h){var g=h.keyCode||h.which;
var f=$(this).parent().find(".tt-dataset-states .tt-suggestion").length;
if(f==1){if(g==13||g==9){$(this).parent().find(".tt-dataset-states .tt-suggestion").first().addClass("tt-cursor").click();
$(this).typeahead("close")
}}});
$(".dual-user-state").bind("typeahead:select",function(f,e){if($.inArray(e,a)!=-1){stateIndex=$.inArray(e,a);
stateObject=c.stateDetails[stateIndex];
console.log("stateObject",stateObject);
$(".find-dental-dropdown-content .selected-plan-name").text(stateObject.planName);
$("#findDentalHeaderVariationBtn").removeClass("inactive-btn");
if($("input[type='radio'][name='header-member-benefit-type']:checked").val()=="headerEmployer"){console.log(" employer"+stateObject.webSiteUrl);
$("#findDentalHeaderVariationBtn").attr("href",checkIfLinkIsValid(stateObject.webSiteUrl))
}else{if($("input[type='radio'][name='header-member-benefit-type']:checked").val()=="headerMyOwnBenefit"){console.log("Own "+stateObject.shopForDentalPlansUrl);
$("#findDentalHeaderVariationBtn").attr("href",checkIfLinkIsValid(stateObject.shopForDentalPlansUrl))
}}}})
}$(".dual-user-state").keyup(function(f){if(f.keyCode!=13&&f.keyCode!=9){$(".find-dental-dropdown-content .selected-plan-name").text("");
$("#findDentalHeaderVariationBtn").attr("href","javascript:void(0);");
$("#findDentalHeaderVariationBtn").addClass("inactive-btn")
}});
let headerOwnPlaceHolder=$("#header-member-input").data("myown-placeholder");
let headerEmployerPlaceHolder=$("#header-member-input").data("employer-placeholder");
$("input[type='radio'][name='header-member-benefit-type'][value='headerEmployer']").click();
$("#header-member-input").attr("placeholder",headerEmployerPlaceHolder);
$("input[type='radio'][name='header-member-benefit-type']").change(function(){$("#findDentalHeaderVariationBtn").attr("href","javascript:void(0);");
$(".find-dental-dropdown-content .selected-plan-name").text("");
$(".dual-user-state").val("");
if($("input[type='radio'][name='header-member-benefit-type']:checked").val()=="headerEmployer"){$("#header-member-input").attr("placeholder",headerEmployerPlaceHolder)
}else{$("#header-member-input").attr("placeholder",headerOwnPlaceHolder)
}})
}$(function(){$(".costestimator").hide();
if($("#stateListPath").length>0&&$("#stateListPath").val().length>0){stateListJsonPath=$("#stateListPath").val()
}$(".benefit-state,.member-info-state").val("");
$(".member-info-state,.user-state").keyup(function(a){if(a.keyCode!=13&&a.keyCode!=9){$(this).parent().parent().find(".matching-dental .redirect-link").attr("href","javascript:void(0);").addClass("invalid inactive-btn");
$(this).parent().parent().find(".matching-dental .submit-btn").attr("href","javascript:void(0);").addClass("invalid inactive-btn");
$(".member-company-info-results-container").hide();
if($(this).val().length==0){$(this).parent().parent().find(".selected-plan-name").text("");
$(this).parent().parent().find(".help-text").show()
}}});
$("#employer-benefit-state,#self-benefit-state").keyup(function(a){if(a.keyCode!=13&&a.keyCode!=9){$(this).parents(".benefits").find(".matching-dental .benefit-page-button").attr("href","javascript:void(0);").addClass("invalid inactive-btn");
if($(this).val().length==0){$(this).parents(".employer-benefits").find(".matching-dental").hide();
$(this).parents(".self-benefits").find(".matching-dental").hide();
$(this).parents(".benefits").find(".redirect-help-text-top").show()
}}});
$("input.employer-benefit").click();
$(".employer-benefits").addClass("checked");
$("input.benefit-type").on("click",function(){$(".benefit-state").typeahead("close");
let benefitType=$("input[name='benefit-type']:checked").val();
$(".benefits-container .matching-dental").hide();
$(".redirect-help-text-top").show();
let benefitContainer=$(this).parents(".benefits-container");
if(benefitType=="employer"){$(".self-benefit-state").val("").removeClass("activeField");
benefitContainer.addClass("employer").removeClass("self");
benefitContainer.find(".self-benefits .benefit-state").attr("disabled","disabled");
benefitContainer.find(".employer-benefits .benefit-state").removeAttr("disabled","disabled");
benefitContainer.find(".self-benefits").removeClass("checked");
benefitContainer.find(".employer-benefits").addClass("checked");
$(".redirect-help-text-top").show()
}else{$(".employer-benefit-state").val("").removeClass("activeField");
benefitContainer.addClass("self").removeClass("employer");
benefitContainer.find(".employer-benefits .benefit-state").attr("disabled","disabled");
benefitContainer.find(".self-benefits .benefit-state").removeAttr("disabled","disabled");
benefitContainer.find(".self-benefits").addClass("checked");
benefitContainer.find(".employer-benefits").removeClass("checked");
$(".redirect-help-text-top").hide()
}})
});
function getStateListJson(){let memberLocatorParams=$.extend({},ajaxParams_default);
memberLocatorParams.url=textNotEmpty(stateListJsonPath)?stateListJsonPath:"/content/ddpa/us/en/data/plandata/_jcr_content.plans.json";
memberLocatorParams.successCallbackFunction=updateMemberLocator;
memberLocatorParams.errorCallBackFunction=memberLocatorAjaxFailed;
ajaxCall(memberLocatorParams)
}function updateMemberLocator(c,b){let results=c;
let newDataArray=[];
let newData=new Object();
if(results&&results.stateDetails.length>0&&typeof results=="object"){$.each(results.stateDetails,function(e,f){if(f.stateAbbreviation==="AP"||f.stateAbbreviation==="PM"||f.stateAbbreviation==="NL"||f.stateAbbreviation==="NO"||f.stateAbbreviation==="FS"||f.stateAbbreviation==="NK"||f.stateAbbreviation==="NS"||f.stateAbbreviation==="CL"||f.stateAbbreviation==="NN"){results.rem
}else{newDataArray.push(f)
}})
}newData={stateDetails:newDataArray};
claimFormDropdownLocator(newData,b);
loadMemberCompanyInfo(newData,b);
headerMemberLocator(newData,b);
let states=[];
let jsonRes=newData;
if(jsonRes&&jsonRes.stateDetails.length>0&&typeof jsonRes=="object"){$.each(jsonRes.stateDetails,function(e,f){states.push(f.stateName);
if((memberCompanyState===f.stateAbbreviation)&&f.displayCostEst==="false"&&$(".cost-estimator-type").val()==="private"){$(".costestimator").remove()
}else{$(".costestimator").show()
}})
}ddpa.employerBenefit=$(".employer-benefit-state");
ddpa.selfBenefit=$(".self-benefit-state");
let stateIndex,stateObject,employerBenefitButton,selfBenefitButton;
employerBenefitButton=ddpa.employerBenefit.parents(".employer-benefits").find(".matching-dental .benefit-page-button");
selfBenefitButton=ddpa.selfBenefit.parents(".self-benefits").find(".matching-dental .benefit-page-button");
if($(".benefit-state").length>0){$(".benefit-state").typeahead({hint:true,highlight:true,minLength:1},{name:"states",source:substringMatcher(states)}).on("keyup",function(h){var g=h.keyCode||h.which;
var f=$(this).parent().find(".tt-dataset-states .tt-suggestion").length;
if(f==1){if(g==13||g==9){$(this).parent().find(".tt-dataset-states .tt-suggestion").first().addClass("tt-cursor").click();
$(this).typeahead("close")
}}});
ddpa.employerBenefit.bind("typeahead:select",function(f,e){if($.inArray(e,states)!=-1){ddpa.employerBenefit.parents(".employer-benefits").find(".matching-dental .user-selected-state").text(e);
stateIndex=$.inArray(e,states);
stateObject=jsonRes.stateDetails[stateIndex];
updateDataOfMemberCompanyLocator(ddpa.employerBenefit,stateObject,employerBenefitButton,"employer")
}});
ddpa.selfBenefit.bind("typeahead:select",function(f,e){if($.inArray(e,states)!=-1){ddpa.selfBenefit.parents(".self-benefits").find(".matching-dental .user-selected-state").text(e);
stateIndex=$.inArray(e,states);
stateObject=jsonRes.stateDetails[stateIndex];
updateDataOfMemberCompanyLocator(ddpa.selfBenefit,stateObject,selfBenefitButton,"self")
}})
}if(localStorageisValid()&&$(".inquiryform").length>0){if(localStorage.getItem("inquiryState")!=null){var a=localStorage.getItem("inquiryState");
$.each(jsonRes.stateDetails,function(f,g){if(g.stateName==a){$(".inquiryform .admin-company span").text(g.planName);
if(typeof g.outOfStateNumber=="string"&&g.outOfStateNumber.length>0){$(".inquiryform .service-phone .service-info").html('<a href="tel:+1'+g.outOfStateNumber.replace(/-/g,"")+'">'+g.outOfStateNumber+"</a>")
}else{$(".inquiryform .service-phone").addClass("no-data")
}if(typeof g.customerServiceFax=="string"&&g.customerServiceFax.length>0){$(".inquiryform .service-fax .service-info").text(g.customerServiceFax)
}else{$(".inquiryform .service-fax").addClass("no-data")
}if(typeof g.customerServiceEmail=="string"&&g.customerServiceEmail.length>0){$(".inquiryform .service-email .service-info").text(g.customerServiceEmail);
$(".inquiryform .service-email .service-info").attr("href","mailto:"+g.customerServiceEmail)
}else{$(".inquiryform .service-email").addClass("no-data")
}var e="";
if(typeof g.claimContactStreet=="string"&&g.claimContactStreet.length>0){e=g.claimContactStreet
}if(typeof g.claimContactStreet2=="string"&&g.claimContactStreet2.length>0){e=e+"<br/>"+g.claimContactStreet2
}if(typeof g.claimContactCity=="string"&&g.claimContactCity.length>0){e=e+"<br/>"+g.claimContactCity
}if(typeof g.claimContactStateAbbreviation=="string"&&g.claimContactStateAbbreviation.length>0){e=e+", "+g.claimContactStateAbbreviation
}if(typeof g.claimContactZip=="string"&&g.claimContactZip.length>0){e=e+" "+g.claimContactZip
}if(e.length>0){$(".inquiryform .service-address .service-info").html(e)
}else{$(".inquiryform .service-address").addClass("no-data")
}}})
}}if(localStorageisValid()&&$(".proposalform").length>0){if(localStorage.getItem("rfpInquiryState")!=null){var a=localStorage.getItem("rfpInquiryState");
$.each(jsonRes.stateDetails,function(f,g){if(g.stateName==a){$(".proposalform .admin-company span").text(g.planName);
if(typeof g.salesContactPhone=="string"&&g.salesContactPhone.length>0){$(".proposalform .service-phone .service-info").html('<a href="tel:+1'+g.salesContactPhone.replace(/-/g,"")+'">'+g.salesContactPhone+"</a>")
}else{$(".proposalform .service-phone").addClass("no-data")
}if(typeof g.customerServiceFax=="string"&&g.customerServiceFax.length>0){$(".proposalform .service-fax .service-info").text(g.customerServiceFax)
}else{$(".proposalform .service-fax").addClass("no-data")
}if(typeof g.salesContactEmail=="string"&&g.salesContactEmail.length>0){$(".proposalform .service-email .service-info").text(g.salesContactEmail);
$(".proposalform .service-email .service-info").attr("href","mailto:"+g.salesContactEmail)
}else{$(".proposalform .service-email").addClass("no-data")
}var e="";
if(typeof g.MailContactStreet=="string"&&g.MailContactStreet.length>0){e=g.MailContactStreet
}if(typeof g.MailContactCity=="string"&&g.MailContactCity.length>0){e=e+"<br/>"+g.MailContactCity
}if(typeof g.MailContactStateAbbreviation=="string"&&g.MailContactStateAbbreviation.length>0){e=e+", "+g.MailContactStateAbbreviation
}if(typeof g.MailContactZip=="string"&&g.MailContactZip.length>0){e=e+" "+g.MailContactZip
}if(e.length>0){$(".proposalform .service-address .service-info").html(e)
}else{$(".proposalform .service-address").addClass("no-data")
}if(typeof g.webSiteUrl=="string"&&g.webSiteUrl.length>0){$(".proposalform .service-website .service-info").text(g.webSiteUrl);
$(".proposalform .service-website .service-info").attr("href",g.webSiteUrl)
}else{$(".proposalform .service-website").addClass("no-data")
}if(typeof g.salesContactName=="string"&&g.salesContactName.length>0){$(".proposalform .service-contact .service-info").text(g.salesContactName)
}else{$(".proposalform .service-contact").addClass("no-data")
}}})
}}}function memberLocatorAjaxFailed(){}function checkIfLinkIsValid(a){var b="";
b=(a&&a.length>0)?a:"javascript:void(0)";
return b
}function updateDataOfMemberCompanyLocator(e,b,c,a){let navigateButton=c,showResult=false;
if(a==="employer"){$(".redirect-help-text-top").hide()
}e.parents(".benefits").find(".matching-dental .selected-plan-name").text(b.planName);
e.parents(".benefits").find(".matching-dental .member-title").text(b.planName);
if(a==="employer"){e.parents(".benefits").find(".matching-dental .member-phone").html("<a href='tel:+1"+b.outOfStateNumber+"'>"+formatPhoneNumber(b.outOfStateNumber.replace(/-/g,""))+"</a>");
e.parents(".benefits").find(".matching-dental .member-link").attr("href",checkIfLinkIsValid(b.webSiteUrl)).text(b.webSiteUrl);
navigateButton.attr("href",checkIfLinkIsValid(b.webSiteUrl))
}else{e.parents(".benefits").find(".matching-dental .member-phone").html("<a href='tel:+1"+b.alternate800Number+"'>"+formatPhoneNumber(b.alternate800Number.replace(/-/g,""))+"</a>");
e.parents(".benefits").find(".matching-dental .member-link").attr("href",checkIfLinkIsValid(b.shopForDentalPlansUrl)).text(b.shopForDentalPlansUrl);
navigateButton.attr("href",checkIfLinkIsValid(b.shopForDentalPlansUrl))
}navigateButton.removeClass("inactive-btn");
e.parents(".benefits").find(".matching-dental").show()
}var memberLocatorStreetAddr=getI18nValue("memberLocatorStreetAddr","STREET ADDRESS");
$(function(){$(".show-member-info").on("click",function(){if(!$(this).hasClass("invalid")&&!$(this).hasClass("inactive-btn")){$(".member-company-info-results-container").show()
}})
});
function loadMemberCompanyInfo(b,a){let states=[],jsonRes=b;
if(jsonRes&&jsonRes.stateDetails.length>0&&typeof jsonRes=="object"){$.each(jsonRes.stateDetails,function(c,e){states.push(e.stateName)
})
}$(".member-info-state").each(function(){var e=$(this),c;
$(this).typeahead({hint:true,highlight:true,minLength:1},{name:"states",source:substringMatcher(states)}).on("keyup",function(h){var g=h.keyCode||h.which;
var f=$(this).parent().find(".tt-dataset-states .tt-suggestion").length;
if(f==1){if(g==13||g==9){$(this).parent().find(".tt-dataset-states .tt-suggestion").first().addClass("tt-cursor").click();
$(this).typeahead("close")
}}});
$(this).bind("typeahead:select",function(j,g){var h=g;
var f=0;
$.each(jsonRes.stateDetails,function(o,q){if(h==q.stateName){f++;
e.parent().parent().find(".selected-plan-name").text(q.planName);
e.parent().parent().find(".user-selected-state").text(h);
e.parent().parent().find(".show-member-info").removeClass("invalid inactive-btn");
e.parent().parent().parent().find(".member-company-info-results").empty();
if(e.hasClass("contact-us")||e.hasClass("plan-info")){var p="";
var n="";
if(q.officeContactStreet.length>0){n=q.officeContactStreet
}if(q.officeContactCity.length>0){n=n+"<br/>"+q.officeContactCity
}if(q.officeContactStateAbbreviation.length>0){n=n+", "+q.officeContactStateAbbreviation
}if(q.officeContactZip.length>0){n=n+" "+q.officeContactZip
}if(n.length>0){p="<div class='street-address'><h2 class='txt-green'>"+memberLocatorStreetAddr+"</h2><div class='street'><div class='location-icon'><img src='/etc/clientlibs/ddpa/core/images/location-icon.png'></div><div class='street-details'><p>"+n+"</p></div></div></div>"
}let phoneNumber="";
if(q.outOfStateNumber&&q.outOfStateNumber.length>0){phoneNumber=q.outOfStateNumber
}let fax="";
if(q.salesContactFax&&q.salesContactFax.length>0){fax="<p class='fax'>"+q.salesContactFax+"  FAX</p>"
}var l=q.MailContactCity?(q.MailContactCity+", "):"";
c="<div class='member-company-info-result'><div class='result-title'><span class='index txt-green'>"+f+".</span><h2 class='txt-green'>"+q.planName+"</h2></div><div class='address'><div class='location-icon'><img src='/etc/clientlibs/ddpa/core/images/location-icon.png'></div><div class='address-details'><p>"+q.MailContactStreet+"</p><p><span class='city'>"+l+"  </span><span class='abbr'> "+q.MailContactStateAbbreviation+"</span><span class='zip'>  "+q.MailContactZip+"</span></p></div></div><div class='contact'><p><span><img src='/etc/clientlibs/ddpa/core/images/phone-icon.png'></span> "+phoneNumber+"</p>"+fax+"</div><div class='website'><p><span><img src='/etc/clientlibs/ddpa/core/images/website.png'></span><a href='"+q.webSiteUrl+"'>"+q.webSiteUrl+"</a></p>"+p+"</div></div>";
e.parent().parent().parent().find(".member-company-info-results").append(c);
e.parent().parent().find(".matching-dental").show();
e.parent().parent().find(".help-text").hide();
return false
}else{if(e.hasClass("claims-info")){let addressDetails="";
if(q.claimContactStreet.length>0){addressDetails="<p>"+q.claimContactStreet+"</p>"
}let street="";
if(q.claimContactStreet2.length>0){street=q.claimContactStreet2+", "
}if(q.claimContactCity.length>0){street=street+q.claimContactCity+", "
}if(q.claimContactStateAbbreviation.length>0){street=street+q.claimContactStateAbbreviation+"  "
}if(q.claimContactZip.length>0){street=street+q.claimContactZip
}addressDetails=addressDetails+"<p>"+street+"</p>";
let stateContact="";
if(q.outOfStateNumber.length>0){stateContact="<p><span><img src='/etc/clientlibs/ddpa/core/images/phone-icon.png'></span>"+q.outOfStateNumber+"</p>"
}c="<div class='member-company-info-result'><div class='result-title'><span class='index txt-green'>"+f+".</span><h2 class='txt-green'>"+q.planName+"</h2></div><div class='address'><div class='location-icon'><img src='/etc/clientlibs/ddpa/core/images/location-icon.png'></div><div class='address-details'>"+addressDetails+"</div></div><div class='contact'>"+stateContact+"</div></div>";
e.parent().parent().parent().find(".member-company-info-results").append(c);
e.parent().parent().find(".matching-dental").show();
e.parent().parent().find(".help-text").hide();
return false
}else{if(e.hasClass("comm-benefits")){let communityTitle="",communityDescription="",communityIcon="",communityLearnMore="";
if(typeof q.communityTitle=="string"&&q.communityTitle.length>0){communityTitle="<h2 class='txt-green'>"+q.communityTitle+"</h2>"
}if(typeof q.communityDescription=="string"&&q.communityDescription.length>0){communityDescription="<p>"+q.communityDescription+"</p>"
}if(typeof q.communityIcon=="string"&&q.communityIcon.length>0){communityIcon="<img alt='"+q.communityTitle+"' title='"+q.communityTitle+"' src='"+q.communityIcon+"'/>"
}if(typeof q.communityLearnMore=="string"&&q.communityLearnMore.length>0){communityLearnMore="<div class='street-details'><p>"+q.communityLearnMore+"</p></div>"
}c="<div class='member-company-info-result'><div class='result-title'>"+communityTitle+"</div><div class='address'><div class='address-details'>"+communityDescription+"</div></div><div class='contact community-icon'>"+communityIcon+"</div><div class='street-address'>"+communityLearnMore+"</div></div>";
e.parent().parent().parent().find(".member-company-info-results").append(c);
e.parent().parent().find(".matching-dental").show();
e.parent().parent().find(".help-text").hide();
return false
}}}}})
})
})
}var dentistSearchFemale=getI18nValue("dentistSearchFemale","Female");
var dentistSearchMale=getI18nValue("dentistSearchMale","Male");
var dentistSearchAcceptPatients=getI18nValue("dentistSearchAcceptPatients","accepting new patients");
var dentistSearchNotAcceptPatients=getI18nValue("dentistSearchNotAcceptPatients","not accepting new patients");
var dentistTreatsDisabledAdults=getI18nValue("dentistTreatsDisabledAdults","Treats disabled adults");
var dentistTreatsDisabledChildren=getI18nValue("dentistTreatsDisabledChildren","Treats disabled children");
var dentistSearchWheelChairAccess=getI18nValue("dentistSearchWheelChairAccess","Wheel Chair Accessible");
var dentistPublicTransitAccess=getI18nValue("dentistPublicTransitAccess","Public Transit Access");
var dentistSearchPrintSpeciality=getI18nValue("dentistSearchPrintSpeciality","Specialty: ");
var dentistSearchPrintMiles=getI18nValue("dentistSearchPrintMiles","miles from your location");
var dentistSearchPrintParticipates=getI18nValue("dentistSearchPrintParticipates","This provider participates in:");
var dentistSearchPrintGender=getI18nValue("dentistSearchPrintGender","Gender:");
var dentistSearchPrintEducation=getI18nValue("dentistSearchPrintEducation","Education:");
var dentistSearchPrintOffcInfo=getI18nValue("dentistSearchPrintOffcInfo","Office Information");
var dentistSearchPrintProviderInfo=getI18nValue("dentistSearchPrintProviderInfo","Provider Information");
$(function(){if(localStorageisValid()&&$(".printview-headinfo").length>0){let dentistsToPrintObj=JSON.parse(localStorage.getItem("printResultsObj"));
let dentistSearchResultsSource=$("#print-results-container").html();
let dentistResultsTemplate=Handlebars.compile(dentistSearchResultsSource);
let dentistToPrintHTML="",dentistToPrint,treatsChildrenText="",treatsAdultsText="",participationList="",acceptsString="",acceptsText="";
$.each(dentistsToPrintObj.dentists,function(b,a){treatsChildrenText="",treatsAdultsText="",wheelChairAccessText="",publicTransit="",participationList="",participationListArray=[],acceptsString="",participationHTML="";
treatsChildrenText=a.treatsChildren==true?dentistTreatsDisabledChildren:"";
treatsAdultsText=a.treatsAdults==true?dentistTreatsDisabledAdults:"";
wheelChairAccessText=a.handicappedAccessible==true?dentistSearchWheelChairAccess:"";
publicTransitText=a.publicTransAvail==true?dentistPublicTransitAccess:"";
participationList=a.participationList;
acceptsString=a.acceptsString;
if(textNotEmpty(participationList)){if(participationList.indexOf(",")!=-1){participationListArray=participationList.split(",");
acceptsStringArray=a.acceptsString.split(",");
$.each(participationListArray,function(e,c){acceptsText=acceptsStringArray[e]=="true"?dentistSearchAcceptPatients:dentistSearchNotAcceptPatients;
participationHTML="<p class='participate-category'>"+c+"</p><p class='participate-info'>"+acceptsText+"</p>"+participationHTML
})
}else{acceptsText=acceptsString=="true"?dentistSearchAcceptPatients:dentistSearchNotAcceptPatients;
participationHTML="<p class='participate-category'>"+participationList+"</p><p class='participate-info'>"+acceptsText+"</p>"
}}dentistToPrint={firstName:a.firstName,lastName:a.lastName,businessName:a.businessName,address:a.addressOne,city:a.city,stateCode:a.stateCode,zip:a.zip,phone:a.phone,specialityText:dentistSearchPrintSpeciality,speciality:a.specialties,distance:a.distance,disanceText:dentistSearchPrintMiles,participationText:dentistSearchPrintParticipates,providerInfoText:dentistSearchPrintProviderInfo,genderText:dentistSearchPrintGender,gender:a.genderCode,educationText:dentistSearchPrintEducation,education:a.education,treatsChildren:treatsChildrenText,treatsAdults:treatsAdultsText,languages:a.prvdrLanguages,officeText:dentistSearchPrintOffcInfo,email:a.dentistEmail,wheelChairAccesible:wheelChairAccessText,publicTransitText:publicTransitText,participationHTML:participationHTML};
dentistToPrintHTML=dentistResultsTemplate(dentistToPrint);
$(".print-dentist-container").append(dentistToPrintHTML)
});
$.each(dentistsToPrintObj.filters,function(a,b){if(a=="Product"){$(".results-content .print-product-code").text(b)
}else{if(a=="Address"){$(".results-content .print-filter-address").text(b)
}else{if(a=="resultSortedBy"){$(".results-content .print-result-sort").text(b)
}else{if(a=="Distance"){$(".results-content .print-distance-value").text(b)
}else{if(a=="Specialty"){$(".results-content .print-speciality-code").text(b)
}else{if(a=="Language"){$(".results-content .print-language-value").text(b)
}else{if(a=="Gender"){$(".results-content .print-gender-value").text(b)
}else{if(a=="TotalResultsFetched"){$(".total-results-fetched").text(b)
}}}}}}}}})
}});
$(function(){$(".carousel_container").slick({slidesToShow:1,slidesToScroll:1,dots:true,arrows:false,autoplay:true,autoplaySpeed:3000});
$(".carousel_container").on("afterChange",function(b,a,e,c){console.log(e+"---"+c);
console.log(typeof e);
$(".carousel-titles_list_item").eq(e).addClass("active").siblings().removeClass("active")
});
$(".carousel-titles_list_item_link").on("click",function(){let thisTitle=$(this);
thisTitle.parent().addClass("active").siblings().removeClass("active");
let thisTitleIndex=$(this).parent().index();
$(".carousel_container").slick("slickGoTo",parseInt(thisTitleIndex))
})
});