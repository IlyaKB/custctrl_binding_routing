/**
 * Создаём кастомный контрол на чистом html без использования каких-либо других контролов.
 * Назначаем обработчики событий на определенные DOM-элементы.
 */
sap.ui.define(['jquery.sap.global',
               'sap/ui/core/Control'],
	function(jQuery, Control) {
	"use strict";

	var ctrl = Control.extend("my.customcontrol.binding.and.routing.control.SBCustCtrl1", {
		metadata : {
			properties : {
	            text: {type: "string"},
	            btnText: {type: "string"}
			},
			events: {
				"btnGGGPress": {},
				"btnGGGOver": {},
				"btnGGGOut": {}, // Если к примеру не указать здесь btnMMMOut, то движок не создаст дефолтную функцию prototype.fireBtnMMMOut() и ниже будет ошибка 
			}
		}
	});
	ctrl.prototype.onAfterRendering = function() {
		this.$().find('div.js-button')
			.on("click", jQuery.proxy(this._myonclick, this))
			.on("mouseover", jQuery.proxy(this._myonmouseover, this))
			.on("mouseout", jQuery.proxy(this._myonmouseout, this));
	};
	ctrl.prototype.onBeforeRendering = function() {
		this.offMethods();
	};
	ctrl.prototype.exit = function() {
		this.offMethods();
	};
	ctrl.prototype.offMethods = function() {
		this.$().find('div.js-button')
		.off("click", this._myonclick)
		.off("click", this._myonmouseover)
		.off("click", this._myonmouseout);
	};
	ctrl.prototype._myonclick = function(oEvent) {
		console.log("ctrl.prototype._myonclick!");
		this.fireBtnGGGPress();
	};
	ctrl.prototype._myonmouseover = function(oEvent) {
		console.log("ctrl.prototype._myonmouseover!");
		this.fireBtnGGGOver();
	};
	ctrl.prototype._myonmouseout = function(oEvent) {
		console.log("ctrl.prototype._myonmouseout!");
		this.fireBtnGGGOut();
	};
	return ctrl;
});