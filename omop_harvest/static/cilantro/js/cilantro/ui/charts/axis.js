define(["underscore","marionette"],function(t,e){var i=e.ItemView.extend({tagName:"select",options:{enumerableOnly:!1},initialize:function(){t.bindAll(this,"render"),this.collection.when(this.render)},render:function(){this.$el.append("<option value=>---</option>");for(var t,e=0;e<this.collection.models.length;e++)t=this.collection.models[e],t.get("searchable")||(!this.options.enumerableOnly||t.get("enumerable"))&&this.$el.append('<option value="'+t.id+'">'+t.get("name")+"</option>");return this.$el},getSelected:function(){return this.collection.get(parseInt(this.$el.val()))}});return{FieldAxis:i}});
//@ sourceMappingURL=axis.js.map