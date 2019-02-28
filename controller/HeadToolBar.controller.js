sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/Popover',
    'sap/m/Button'
], function (Controller, Popover, Button) {
    "use strict";
    return Controller.extend("rroot.controller.HeadToolBar", {
       onHomePress: function () {
            var iconTabHeader = this.byId('iconTabHeader');
            iconTabHeader.setSelectedKey('invalidKey');

            var label = this.byId('labelId');
            label.setText('Home Screen');
        },

        onSelectTab: function (event) {
            var label = this.byId('labelId');
            var tab = event.getParameter('item');

            label.setText(tab.getText());
        },

        onUserNamePress: function (oEvent) {
           var that = this;
            var oPopover = new Popover({
                showHeader: false,
                placement: sap.m.PlacementType.Bottom,
                content:[
                    new Button({
                        text: 'Profile',
                        type: sap.m.ButtonType.Transparent
                    }),
                    new Button({
                        text: 'Logout',
                        type: sap.m.ButtonType.Transparent,
                        press: function (oEvent) {
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