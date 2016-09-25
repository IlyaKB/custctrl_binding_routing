// for debug sap-ui-core and other files use parameter: ?sap-ui-debug=true
sap.ui.define([
	"my/customcontrol/binding/and/routing/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("my.customcontrol.binding.and.routing.controller.CustCtrl3", {
		
		onInit: function() {
			this.getRouter().getRoute("CustCtrl3").attachPatternMatched(this._viewMatched, this);
			
			// Для анимации загрузки
			var oModelView = new JSONModel({busy: true, busyIndicatorDelay : 0}); // for busy
			this.getView().setModel(oModelView);
			setTimeout( function() {
				var data = oModelView.getData();
				data.busy = false;
				this.byId("custctrl_togbut_busy").setPressed(false);
				oModelView.setData(data);
			}.bind(this), 500);
			
			// Для данных в списке
			var oModelProducts = new JSONModel();
			oModelProducts.loadData("./model/products.json");
			this.getView().setModel(oModelProducts, "products");
		},
		
		_viewMatched: function() {
			/*
			//var sb = this.byId("head_segmented_buttons"); // TODO: undefined!!!
			var cSegmentedButtons = window['cSegmentedButtons'];
			if (cSegmentedButtons) {
				//cSegmentedButtons.setSelectedButton( cSegmentedButtons.getItems()[1].getId() ); // не тот ID выдаётся!!! Баг движка!?
			}*/
		},
		
		// Запустить анимацию загрузки
		onPressDoBusy: function() {
			var oModelView = this.getView().getModel();
			var data = oModelView.getData();
			if (data.busy) return;
			data.busy = true;
			oModelView.setData(data);
			setTimeout( function() {
				data.busy = false;
				oModelView.setData(data);
				this.byId("custctrl_togbut_busy").setPressed(false);
			}.bind(this), 1000);
		},
		
		// Переход на подробную инфу о продукте
		onclick3B: function(oEvent) {
			var id = oEvent.getSource().getBindingContext("products").getProperty("ProductID");
			console.log("CustCtrl3-B click item list with ID="+id);
			this.getRouter().navTo("Product", { productId: id });
		}
	});
});