/**
 * Создаём кастомный контрол с использованием других контролов как внутренних,
 * которым можно только назначать свойства, например, текст.
 * В этот кастомный контрол нельзя будет добавлять вложенные контролы в view-шаблоне (multiple: false).
 */
sap.ui.define(['jquery.sap.global',
               'sap/ui/core/Control',
               'sap/m/Text',
               'sap/m/Button'],
	function(jQuery, Control, Text, Button) {
	"use strict";

	var ctrl2 = Control.extend("my.customcontrol.binding.and.routing.control.SBCustCtrl2", {
		metadata : {
			properties : {
	            text: {type: "string"},
	            btnText: {type: "string"}
			},
			aggregations: {
				_text: { type: "sap.m.Text", visibility: "hidden", multiple: false },
				_button: { type: "sap.m.Button", visibility: "hidden", multiple: false },
			},
			events: {
				"btnPress": {}
			}
		},
		
		init: function() {
			this.setAggregation("_text", new Text({
				text: "{i18n>text2Default}"
			}));
			this.setAggregation("_button", new Button({
				text: "{i18n>btnText2Default}",
				press: function(oEvent) {
					console.log("_button.press!");
					this.fireEvent("btnPress", {});
				}.bind(this)
			}));
		},
		setText: function(iText) { // override SAPUI5-method
			this.setProperty("text", iText, true);
			this.getAggregation("_text").setText(iText);
		},
		setBtnText: function(iBtnText) { // override SAPUI5-method
			this.setProperty("text", iBtnText, true);
			this.getAggregation("_button").setText(iBtnText);
		},
		renderer: function(oRm, oControl) {
					oRm.addClass("todo-my-class");
        	oRm.write('<div style="padding: 10px; border: 1px dotted gray"'); // TODO: style.css
            oRm.writeClasses();
            oRm.writeControlData(oControl);
            oRm.write(">");
            oRm.write('	<div style="text-align: center; color: orange">'); // TODO: style.css
            oRm.renderControl(oControl.getAggregation("_text")); //oRm.writeEscaped(oControl.getText() || "[no data]")
            oRm.write('	</div>');
            oRm.write('	<div style="text-align: center">'); // TODO: style.css
            oRm.renderControl(oControl.getAggregation("_button")); //oRm.writeEscaped(oControl.getBtnText() || "[no data]")
            oRm.write('	</div>');
        	oRm.write('</div>');
        }
	});
	
	return ctrl2;
});