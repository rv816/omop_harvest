define(["jquery","./utils"],function(t,e){var i={debug:!1,root:"/",main:"#cilantro-main",session:{defaults:{url:null,credentials:null,ping:3e4,data:{}}},url:null,credentials:null,threshold:null,timeouts:{control:1e4},templates:{},controls:{},concepts:{defaults:{},types:{},instances:{}},fields:{defaults:{form:{controls:["search"]}},types:{choice:{form:{controls:["infograph"]}},number:{form:{chart:!0,controls:["number"]}},date:{form:{chart:!0,controls:["date"]}},time:{form:{chart:!0,controls:["date"]}},datetime:{form:{chart:!0,controls:["date"]}}},instances:{}}},n=function(){this.reset.apply(this,arguments)};return n.prototype.reset=function(){var e=[].slice.call(arguments);this.options=t.extend.apply(null,[!0,{},i].concat(e))},n.prototype.get=function(t,i){return e.getDotProp(this.options,t,i)},n.prototype.set=function(t,i){e.setDotProp(this.options,t,i)},n.prototype.unset=function(t){e.setDotProp(this.options,t,void 0)},{Config:n,defaultOptions:i}});
//@ sourceMappingURL=config.js.map