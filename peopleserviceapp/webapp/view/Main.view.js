sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/m/Page"
  ], function(View, Page) {
    return View.extend("ns.peopleserviceapp.controller.Main", {
      // define, which controller to use
      getControllerName: function() {
        return "ns.peopleserviceapp.controller.Main";
      },
      // whether the ID of content controls should be prefixed automatically with the view ID
      getAutoPrefixId: function() {
        return true; // default is false
      },
      // create view content and return the root control(s)
      createContent: function() {
        return new sap.m.Page({
            content:[
                new sap.m.Text({
                    text: 'Hello'
                })
            ]
        })
      }
    });
  });