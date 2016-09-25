sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("my.customcontrol.binding.and.routing.controller.BaseController", {
		
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Home", {}, true /*no history*/);
			}
		},
		
		onPressNavHome: function(oEvent) {
			this.getRouter().navTo("Home", {});
			this.byId("header_togbut_home").setPressed(true);
		},
		
		onPressNavCustCtrl3: function(oEvent) {
			this.getRouter().navTo("CustCtrl3", {});
			this.byId("header_togbut_custctrl3").setPressed(true);
		},
		
		getModel: function(sName) {
			return this.getView().getModel(sName);
		},

		setModel: function(oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},
		
		onClickBtnList: function (oEvent) {
			console.log("run BaseController.onClickBtnList(oEvent) { TODO }!"); // TODO: BaseController.onClickBtnList
		},
		
		onClickBtnCalendar: function (oEvent) {
			console.log("run BaseController.onClickBtnCalendar(oEvent) { TODO }!"); // TODO: BaseController.onClickBtnCalendar
		}
	});

});
