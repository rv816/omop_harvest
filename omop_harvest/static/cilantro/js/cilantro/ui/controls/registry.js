define(["underscore","loglevel","../../core","./date","./number","./search","./select","./infograph","./null","./text","./vocab"],function(e,t,i,n,s,o,r,a,l,c,h){var u={infograph:a.InfographControl,number:s.NumberControl,date:n.DateControl,search:o.SearchControl,singleSelectionList:r.SingleSelectionList,multiSelectionList:r.MultiSelectionList,nullSelector:l.NullSelector,text:c.TextControl,vocab:h.VocabControl},d={},p=0,f=function(e,i){p++,require([i],function(t){d[e]=t,p--},function(e){t.debug(e),p--})},g=function(e,t){switch(typeof t){case"function":d[e]=t;break;case"string":f(e,t);break;default:throw new Error("control must be a function or AMD module")}};return{get:function(e){return d[e]||u[e]},set:function(t,i){"object"==typeof t?e.each(t,function(e,t){g(t,e)}):g(t,i)},ready:function(){return 0===p},clear:function(){d={}}}});
//@ sourceMappingURL=registry.js.map