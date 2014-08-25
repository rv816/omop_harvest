define(["module"],function(e){var t,i,n,o,s,r=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],a=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,l=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,c="undefined"!=typeof location&&location.href,h=c&&location.protocol&&location.protocol.replace(/\:/,""),u=c&&location.hostname,d=c&&(location.port||void 0),p={},f=e.config&&e.config()||{};return t={version:"2.0.12",strip:function(e){if(e){e=e.replace(a,"");var t=e.match(l);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:f.createXhr||function(){var e,t,i;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){i=r[t];try{e=new ActiveXObject(i)}catch(n){}if(e){r=[i];break}}return e},parseName:function(e){var t,i,n,o=!1,s=e.indexOf("."),r=0===e.indexOf("./")||0===e.indexOf("../");return-1!==s&&(!r||s>1)?(t=e.substring(0,s),i=e.substring(s+1,e.length)):t=e,n=i||t,s=n.indexOf("!"),-1!==s&&(o="strip"===n.substring(s+1),n=n.substring(0,s),i?i=n:t=n),{moduleName:t,ext:i,strip:o}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,i,n,o){var s,r,a,l=t.xdRegExp.exec(e);return l?(s=l[2],r=l[3],r=r.split(":"),a=r[1],r=r[0],!(s&&s!==i||r&&r.toLowerCase()!==n.toLowerCase()||(a||r)&&a!==o)):!0},finishLoad:function(e,i,n,o){n=i?t.strip(n):n,f.isBuild&&(p[e]=n),o(n)},load:function(e,i,n,o){if(o&&o.isBuild&&!o.inlineText)return n(),void 0;f.isBuild=o&&o.isBuild;var s=t.parseName(e),r=s.moduleName+(s.ext?"."+s.ext:""),a=i.toUrl(r),l=f.useXhr||t.useXhr;return 0===a.indexOf("empty:")?(n(),void 0):(!c||l(a,h,u,d)?t.get(a,function(i){t.finishLoad(e,s.strip,i,n)},function(e){n.error&&n.error(e)}):i([r],function(e){t.finishLoad(s.moduleName+"."+s.ext,s.strip,e,n)}),void 0)},write:function(e,i,n){if(p.hasOwnProperty(i)){var o=t.jsEscape(p[i]);n.asModule(e+"!"+i,"define(function () { return '"+o+"';});\n")}},writeFile:function(e,i,n,o,s){var r=t.parseName(i),a=r.ext?"."+r.ext:"",l=r.moduleName+a,c=n.toUrl(r.moduleName+a)+".js";t.load(l,n,function(){var i=function(e){return o(c,e)};i.asModule=function(e,t){return o.asModule(e,c,t)},t.write(e,l,i,s)},s)}},"node"===f.env||!f.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]?(i=require.nodeRequire("fs"),t.get=function(e,t,n){try{var o=i.readFileSync(e,"utf8");0===o.indexOf("﻿")&&(o=o.substring(1)),t(o)}catch(s){n&&n(s)}}):"xhr"===f.env||!f.env&&t.createXhr()?t.get=function(e,i,n,o){var s,r=t.createXhr();if(r.open("GET",e,!0),o)for(s in o)o.hasOwnProperty(s)&&r.setRequestHeader(s.toLowerCase(),o[s]);f.onXhr&&f.onXhr(r,e),r.onreadystatechange=function(){var t,o;4===r.readyState&&(t=r.status||0,t>399&&600>t?(o=new Error(e+" HTTP status: "+t),o.xhr=r,n&&n(o)):i(r.responseText),f.onXhrComplete&&f.onXhrComplete(r,e))},r.send(null)}:"rhino"===f.env||!f.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?t.get=function(e,t){var i,n,o="utf-8",s=new java.io.File(e),r=java.lang.System.getProperty("line.separator"),a=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),o)),l="";try{for(i=new java.lang.StringBuffer,n=a.readLine(),n&&n.length()&&65279===n.charAt(0)&&(n=n.substring(1)),null!==n&&i.append(n);null!==(n=a.readLine());)i.append(r),i.append(n);l=String(i.toString())}finally{a.close()}t(l)}:("xpconnect"===f.env||!f.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(n=Components.classes,o=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in n,t.get=function(e,t){var i,r,a,l={};s&&(e=e.replace(/\//g,"\\")),a=new FileUtils.File(e);try{i=n["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream),i.init(a,1,0,!1),r=n["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream),r.init(i,"utf-8",i.available(),o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),r.readString(i.available(),l),r.close(),i.close(),t(l.value)}catch(c){throw new Error((a&&a.path||"")+": "+c)}}),t});
//@ sourceMappingURL=text.js.map