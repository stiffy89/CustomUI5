sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.peopleserviceapp.controller.Main", {
            onInit: function () {
                var appId = this.getOwnerComponent().getManifestEntry('/sap.app/id');
                var appPath = appId.replaceAll('.', '/');
                var appModulePath = jQuery.sap.getModulePath(appPath);
                
                let sUrl = appModulePath + "/Products";

                console.log(sUrl)

                var that = this;
                $.ajax({
                    url: "/Products",
                    method: "GET",
                    async: false,
                    success: function(result, xhr, data) {
                        console.log(result);
                        console.log(xhr);
                        console.log(data);
                    },
                    error: function(result, status, xhr) {
                        console.log(result);
                        console.log(status);
                        console.log(xhr);
                    }
                })

                $.ajax({
                    url: "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet?$format=json",
                    method: "GET",
                    async: false,
                    success: function(result, xhr, data) {
                        console.log(result);
                        console.log(xhr);
                        console.log(data);
                    },
                    error: function(result, status, xhr) {
                        console.log(result);
                        console.log(status);
                        console.log(xhr);
                    }
                })

                $.ajax({
                    url: "/odata/v4/peopleservice/PeopleSet",
                    method: "GET",
                    async: false,
                    success: function(result, xhr, data) {
                        console.log(result);
                        console.log(xhr);
                        console.log(data);
                    },
                    error: function(result, status, xhr) {
                        console.log(result);
                        console.log(status);
                        console.log(xhr);
                    }
                })

                $.ajax({
                    url: "/People?$format=json",
                    method: "GET",
                    async: false,
                    success: function(result, xhr, data) {
                        console.log(result);
                        console.log(xhr);
                        console.log(data);
                    },
                    error: function(result, status, xhr) {
                        console.log(result);
                        console.log(status);
                        console.log(xhr);
                    }
                })
            }
        });
    });
