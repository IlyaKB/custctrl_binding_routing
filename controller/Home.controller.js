// for debug sap-ui-core and other files use parameter: ?sap-ui-debug=true
sap.ui.define([
	"my/customcontrol/binding/and/routing/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("my.customcontrol.binding.and.routing.controller.Home", {
		
		onInit: function() {
			
			this.getRouter().getRoute("Home").attachPatternMatched(this._viewMatched, this);
			
			// Create a JSON model from an object literal
			var oModel1 = new sap.ui.model.json.JSONModel({
				data1: "Some text...",
				data2: {
					data2_1: 212121,
					data2_2: "Data2_2"
				}					
			});
			this.getView().setModel(oModel1, "model1");
			
			// Model for data binding aggregation
			var oModelProducts = new JSONModel();
			oModelProducts.loadData("./model/products.json");
			this.getView().setModel(oModelProducts, "products");		
		},
		
		_viewMatched:function(){
			/*
			//var sb = this.byId("head_segmented_buttons"); // TODO: undefined!!!
			var cSegmentedButtons = window['cSegmentedButtons'];
			if (cSegmentedButtons) {
				cSegmentedButtons.setSelectedButton( cSegmentedButtons.getItems()[0].getId() ); // не тот ID выдаётся!!! Баг движка!?
			}*/
		},
		
		onBtnMMPress: function() {
			console.log("div button clicked!");
		},
		onBtnMMOver: function() {
			console.log("div button mouse over detect!");
		},
		/*//DISABLED USER FUNCTION:
		onBtnMMOut: function() {
			console.log("div button mouse out detect!");
		},*/
		onBtnPress2: function() {
			console.log("button2 press!");
		},
		
		onclick3A: function (evt) {
			console.log("CustCtrl3-A click item list, href="+evt.getSource().getHref());
		},
		
		onPressBtnCheckDataBinding: function (evt) {
			var data = this.getView().getModel("model1").getData();
			alert("data.data1="+data.data1);
			//console.debug(data);
			console.log(JSON.stringify(data));
		}
	});
});