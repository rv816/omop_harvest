define(["jquery","underscore","marionette","./body","./header","./footer"],function(e,t,i,n,s,o){var r=i.CollectionView.extend({tagName:"table",className:"table table-striped",itemView:n.Body,itemViewOptions:function(e){return t.defaults({collection:e.series},this.options)},collectionEvents:{"change:currentpage":"showCurrentPage"},initialize:function(){this.header=new s.Header(t.defaults({collection:this.collection.indexes},this.options)),this.footer=new o.Footer(t.defaults({collection:this.collection.indexes},this.options)),this.header.render(),this.footer.render(),this.$el.append(this.header.el,this.footer.el),this.listenTo(this.collection,"reset",function(){0===this.collection.objectCount?this.$el.hide():this.$el.show()}),this.listenTo(this,"render",this.resize,this),t.bindAll(this,"resize"),e(window).resize(this.resize)},resize:function(){var t=this;e("tbody").each(function(){var i=e(this);if(i.height()>0){t.children.each(function(t){t.children.each(function(t){var i=e(document).width()/t.children.length;t.children.each(function(e){e.$el.css("width",i),e.$el.css("max-width",i)})})});var n=i.height()+parseInt(i.css("top").replace("px",""));e(document).width()>979?(e("#footer").offset({top:n}),i.css("position","absolute")):(e("#footer").css("position","static"),i.css("position","static"))}})},showCurrentPage:function(e,t){this.children.each(function(e){e.$el.toggle(e.model.id===t)})}});return{Table:r}});
//@ sourceMappingURL=table.js.map