define(["jquery","underscore","marionette","./row"],function(e,t,i,n){var s=i.CollectionView.extend({tagName:"tbody",itemView:n.Row,onRender:function(){var t=0;e(".navbar-fixed-top").each(function(){t+=this.clientHeight}),this.$el.css("top",t),this.$el.css("position","absolute")},itemViewOptions:function(e){return t.defaults({collection:e.data},this.options)}});return{Body:s}});
//@ sourceMappingURL=body.js.map