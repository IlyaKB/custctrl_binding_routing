sap.ui.define([
	"my/customcontrol/binding/and/routing/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("my.customcontrol.binding.and.routing.controller.Product", {
		
		onInit: function() {
			
			this.getRouter().getRoute("Product").attachPatternMatched(this._viewMatched, this);
			
			// Model for all records
			var oModelProducts = new JSONModel();
			oModelProducts.loadData("./model/products.json");
			this.getView().setModel(oModelProducts, "products");
			
			// Model for only one record
			var oModelProduct = new JSONModel({ ProductID: 0, ProductName: "loading..." });
			this.getView().setModel(oModelProduct, "product");
		},
		
		_viewMatched: function(oEvent) {
			var id = oEvent.getParameter("arguments").productId;

			if (! this.getView().getModel("products").getData().Products) return;

			this.getView().getModel("products").getData().Products.forEach(function (oModelProduct) {
				if (id == oModelProduct.ProductID) {
					this.getView().setModel(new JSONModel(oModelProduct), "product");
					return false;
				}
			}.bind(this));
		}
	});
});