/**
 * Создаём кастомный контрол аналогичный Page, в котором есть предустановленные внутренние контролы (_text),
 * и есть контрол (content) в который можно вставлять другие контролы через view-шаблон!
 */
sap.ui.define(['jquery.sap.global',
               'sap/ui/core/Control',
               'sap/m/Text',
              ],
	function(jQuery, Control, Text, Button) {
	"use strict";

	var ctrl3 = Control.extend("my.customcontrol.binding.and.routing.control.SBCustCtrl3", {
		metadata : {
			properties : {
	            text: {type: "string"},
			},
			defaultAggregation : "content",
			aggregations: {
				_text: { type: "sap.m.Text", visibility: "hidden", multiple: false },
				content : {type : "sap.ui.core.Control", multiple : true, singularName : "content"},
			},
			events: {
			}
		},
		
		init: function() {
			this.setAggregation("_text", new Text({
				text: "{i18n>text3Default}"
			}));
		},
		/*setText: function(iText) { // override
			this.setProperty("text", iText, true);
			this.getAggregation("_text").setText(iText);
		},*/
		renderer: function(rm, oControl) {
			rm.addClass("todo-my-class");
			rm.write('<div style="padding: 10px; border: 1px dotted gray"'); // TODO: style.css
			rm.writeClasses();
			rm.writeControlData(oControl);
            rm.write(">");
            rm.write('	<div style="text-align: center; color: red">'); // TODO: style.css
            rm.renderControl(oControl.getAggregation("_text")); //oRm.writeEscaped(oControl.getText() || "[no data]")
            rm.write('	</div>');
            
            // render user child controls
    		rm.write('<section id="' + oControl.getId() + '-cont">');
    		var aContent = oControl.getContent();
    		var l = aContent.length;
    		for (var i = 0; i < l; i++) {
    			rm.renderControl(aContent[i]);
    		}
    		rm.write("</section>");
    		
    		rm.write('</div>');
        }
	});
	
	return ctrl3;
});