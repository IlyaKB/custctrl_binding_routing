sap.ui.define([
	"my/customcontrol/binding/and/routing/controller/BaseController",
], function (BaseController) {
	"use strict";

	return BaseController.extend("my.customcontrol.binding.and.routing.controller.App", {

		onInit: function () {
			/*var cSegmentedButtons = this.byId("head_segmented_buttons");
			window['cSegmentedButtons'] = cSegmentedButtons; // TODO: Нужно в Home.controller.js его получить!*/
			
			this.getRouter().getRoute("Home").attachPatternMatched(this._viewMatchedHome, this);
			this.getRouter().getRoute("CustCtrl3").attachPatternMatched(this._viewMatchedCustCtrl3, this);
			this.getRouter().getRoute("Product").attachPatternMatched(this._viewMatchedProduct, this);
		},
		
		_viewMatchedHome: function() {
			this.byId("header_togbut_home").setPressed(true);
			this.byId("header_togbut_custctrl3").setPressed(false);
			
			this.byId("head_segmented_buttons").setVisible(true);
			this.byId("head_segmented_buttons").setSelectedKey("home");
		},
		
		_viewMatchedCustCtrl3: function() {
			this.byId("header_togbut_home").setPressed(false);
			this.byId("header_togbut_custctrl3").setPressed(true);
			
			this.byId("head_segmented_buttons").setVisible(true);
			this.byId("head_segmented_buttons").setSelectedKey("custctrl3");
		},
		
		_viewMatchedProduct: function() {
			this.byId("header_togbut_home").setPressed(false);
			this.byId("header_togbut_custctrl3").setPressed(false);
			
			this.byId("head_segmented_buttons").setVisible(false);
		},
		
		AppBaseContrlGGG: function() {
			alert("AppBaseContrlGGG");
		}
		
		/*onNavBack: function() {
			window.history.go(-1);
		}*/
	});

});

