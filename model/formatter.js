sap.ui.define([], function() {
    "use strict";

    return {

        setPrice: function(fPrice) {
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

            if (fPrice > 1000) {
                return oResourceBundle.getText("business");
            } else {
                return oResourceBundle.getText("econom");
            }
        }
    };
});