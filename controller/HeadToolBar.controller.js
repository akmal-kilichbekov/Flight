sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/Popover',
    'sap/m/Button',
    "sap/m/MessageToast",
], function(Controller, Popover, Button, MessageToast) {
    "use strict";
    return Controller.extend("rroot.controller.HeadToolBar", {
        onHomePress: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("login");
        },

        onSelectTab: function(event) {
            var label = this.byId('labelId');
            var tab = event.getParameter('item');

            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sMsg = oBundle.getText("notWorking");
            // show message
            MessageToast.show(sMsg);
        },

        onUserNamePress: function(oEvent) {
            var that = this;
            var oPopover = new Popover({
                showHeader: false,
                placement: sap.m.PlacementType.Bottom,
                content: [
                    new Button({
                        text: 'Profile',
                        type: sap.m.ButtonType.Transparent
                    }),
                    new Button({
                        text: 'Logout',
                        type: sap.m.ButtonType.Transparent,
                        press: function(oEvent) {
                            var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                            oRouter.navTo("login");
                        }
                    })
                ]
            }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

            oPopover.openBy(oEvent.getSource());
        },
    });
});