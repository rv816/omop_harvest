define(["jquery","underscore","marionette","../core","../paginator","../numbers","../tables"],function(e,t,i,n,o,s,r){var a=i.ItemView.extend({tagName:"span",className:"result-count",template:"count",ui:{count:".count",label:".count-label"},modelEvents:{"change:objectcount":"renderCount"},onRender:function(){void 0!==this.model.objectCount?this.renderCount(this.model,this.model.objectCount):this.renderCount(this.model,"")},renderCount:function(e,t){s.renderCount(this.ui.count,t),this.ui.label.text("records")}}),l=i.Layout.extend({className:"results-workflow",template:"workflows/results",ui:{toggleFiltersButton:"[data-toggle=context-panel]",toggleFiltersIcon:"[data-toggle=context-panel] i",toggleFiltersText:"[data-toggle=context-panel] span",navbar:".results-workflow-navbar",resultsContainer:".results-container",navbarButtons:".results-workflow-navbar button",loadingOverlay:".loading-overlay"},events:{"click [data-toggle=columns-dialog]":"showColumnsDialog","click [data-toggle=exporter-dialog]":"showExporterDialog","click [data-toggle=query-dialog]":"showQueryDialog","click [data-toggle=context-panel]":"toggleContextPanel"},regions:{count:".count-region",table:".table-region",paginator:".paginator-region"},initialize:function(){if(this.data={},!(this.data.view=this.options.view))throw new Error("view model required");if(!(this.data.results=this.options.results))throw new Error("results collection required");this.listenTo(this.data.results,"request",this.showLoadingOverlay),this.listenTo(this.data.results,"sync",this.hideLoadingOverlay),this.on("router:load",this.onRouterLoad),this.on("router:unload",this.onRouterUnload)},onRouterLoad:function(){this.data.results.trigger("workspace:load"),this.hideContextPanel()},onRouterUnload:function(){this.data.results.trigger("workspace:unload")},showLoadingOverlay:function(){this.isClosed!==!0&&(this.ui.loadingOverlay.show(),this.ui.loadingOverlay.css("z-index","1029"))},hideLoadingOverlay:function(){this.isClosed!==!0&&this.ui.loadingOverlay.hide()},toggleContextPanel:function(){n.panels.context.isPanelClosed()?this.showContextPanel():this.hideContextPanel()},showContextPanel:function(){n.panels.context.openPanel(),this.$el.addClass("panel-open"),this.ui.toggleFiltersButton.tooltip("hide").attr("data-original-title","Hide Filter Panel").tooltip("fixTitle"),this.ui.toggleFiltersIcon.removeClass("icon-collapse-alt"),this.ui.toggleFiltersIcon.addClass("icon-expand-alt"),this.ui.toggleFiltersText.html("Hide Filters")},hideContextPanel:function(){n.panels.context.closePanel({full:!0}),this.$el.removeClass("panel-open"),this.ui.toggleFiltersButton.tooltip("hide").attr("data-original-title","Show Filter Panel").tooltip("fixTitle"),this.ui.toggleFiltersIcon.addClass("icon-collapse-alt"),this.ui.toggleFiltersIcon.removeClass("icon-expand-alt"),this.ui.toggleFiltersText.html("Show Filters")},onRender:function(){this.ui.navbar.css("top",e(".navbar-fixed-top").height()),this.ui.navbar.addClass("navbar-fixed-top"),n.isSupported("2.1.0")||(this.ui.saveQueryToggle.remove(),this.ui.saveQuery.remove()),this.paginator.show(new o.Paginator({model:this.data.results})),this.count.show(new a({model:this.data.results})),this.table.show(new r.Table({view:this.data.view,collection:this.data.results})),this.ui.navbarButtons.tooltip({animation:!1,placement:"bottom"}),this.listenTo(this.data.view.facets,"reset",function(){0!==this.data.view.facets.length||n.config.get("session.defaults.data.preview")||n.notify({header:"No Columns Selected: ",level:"warning",timeout:!1,message:'No data can be displayed. Click the "Change Columns" button on the toolbar to select columns to display.'})})},onClose:function(){e(document).off("scroll",this.onPageScroll)},showExporterDialog:function(){n.dialogs.exporter.open()},showColumnsDialog:function(){n.dialogs.columns.open()},showQueryDialog:function(){n.dialogs.query.open()}});return{ResultCount:a,ResultsWorkflow:l}});
//@ sourceMappingURL=results.js.map