sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], function(Controller, JSONModel, formatter) {
    "use strict";
    return Controller.extend("rroot.controller.Application", {
        formatter: formatter,

        onInit: function() {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },

        onPress: function(oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("content");
        },
        onHomePress: function() {
            var iconTabHeader = this.byId('iconTabHeader');
            iconTabHeader.setSelectedKey('invalidKey');

            var label = this.byId('labelId');
            label.setText('Home Screen');
        },

        onSelectTab: function(event) {
            var label = this.byId('labelId');
            var tab = event.getParameter('item');

            label.setText(tab.getText());
        }
    });

});