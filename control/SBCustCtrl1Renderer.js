/**
 * Этот файл движок автоматически находит, т.к. в названии присутствует %Renderer.js
 */
sap.ui.define(//['jquery.sap.global'],
	function() {//jQuery) {
        "use strict";
        var SBCustCtrl1Renderer = {};
        SBCustCtrl1Renderer.render = function(oRm, oControl) {
        	oRm.addClass("todo-my-class");
        	oRm.write('<div style="padding: 10px; border: 1px dotted gray"'); // TODO: css
            oRm.writeClasses();
            oRm.writeControlData(oControl);
            oRm.write(">");
        	oRm.write(
        	'	<div style="text-align: center; margin: 3px;">'+ // TODO: css
        	'		<span>');
        	oRm.writeEscaped(oControl.getText() || "[no data]");
			oRm.write(
			'		</span>'+
        	'	</div>'+
        	'	<div style="text-align: center">'+ // TODO: css
        	'		<div class="js-button" style="margin-top: 3px; padding: 3px; border-radius: 5px; border: 1px solid black; text-align: center; font-weight: bold; background-color: #eee; width: 120px;">'); // TODO: css
			oRm.writeEscaped(oControl.getBtnText() || "[no data]");
			oRm.write(
        	'		</div>'+
        	'	</div>'+
        	'</div>');
        }
        return SBCustCtrl1Renderer;
    }, true
);