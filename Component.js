sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("my.customcontrol.binding.and.routing.Component", {

		metadata : {
			manifest: "json",
    	    version: "1.0",
        	includes: ["css/style.css"]
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
			this.getRouter().initialize();

			// additional initialization can be done here...
			
			/*// Manually case:
			sap.ui.getCore().setModel( // i18n set to Core!
				new sap.ui.model.resource.ResourceModel({ bundleName : "my.customcontrol.binding.and.routing.i18n.i18n" }),
				"i18n"
			);*/
		},
	 	exit: function() {
            UIComponent.prototype.exit && UIComponent.prototype.exit.apply(this, arguments);
        }
	});
});
