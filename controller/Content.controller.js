sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("rroot.controller.Content", {
        onPress: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("application");
        },
        onFilterInvoices: function(oEvent) {
            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("Carrid", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.byId("productsID");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onCreate: function(oEvent) {
            var oModal = this.getView().getModel();
            var data = {
                "Carrid": "TE",
                "Carrname": "Test",
                "Currcode": "USD",
                "Url": "www.google.com"
            };
            oModal.create(
                "/FlightScarrSet",
                data,
                null,
                function(response) {
                    console.log(response);
                },
                function(oError) {
                    console.log(oError);
                }
            );
        },
        onChange: function(oEvent) {
            var oModal = this.getView().getModel("oData");
            var data = {
                "Carrid": "LH",
                "Carrname": "Lufthansa",
                "Currcode": "EUR",
                "Url": "www.tour.com"
            };
            oModal.update(
                "/FlightScarrSet('LH')",
                data,
                null,
                function(response) {
                    console.log(response);
                },
                function(oError) {
                    console.log(oError);
                }
            );
        }
    });
});