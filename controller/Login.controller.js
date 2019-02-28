sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("rroot.controller.Login", {
        onSubmit : function(oEvent){
            var name = this.byId("name");
            var pass = this.byId("password");
            if (name.mProperties.value == "{i18n>login}" && pass.mProperties.value == "{i18n>password}") {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("application");
            }else{
               MessageToast.show("Error password or login. Please try again!");
            }
        }
    });
});
