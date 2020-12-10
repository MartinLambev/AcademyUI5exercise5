sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("home.kpmg.Exercise5.controller.View1", {
		onInit: function () {
			// Create Model Instance of the oData service
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZCRUD_DEMO_MAL_SRV");
			sap.ui.getCore().setModel(oModel, "myModel");
		},
		oDataCall: function (oEvent) {
			var that = this;
			// call oData service's function based on which button is clicked.
			debugger;
			var myModel = sap.ui.getCore().getModel("myModel");
			myModel.setHeaders({
				"X-Requested-With": "X"
			});
			// CREATE******************
			if ('Create' == oEvent.oSource.mProperties.text) {
				var obj = {};
				obj.Id = that.getView().byId("uniqueid").getValue();
				obj.Name = that.getView().byId("nameid").getValue();
				obj.Email = that.getView().byId("emailid").getValue();
				obj.Mobile = that.getView().byId("mobid").getValue();
				myModel.create('/userDataSet', obj, {
					success: function (oData, oResponse) {
						debugger;
						alert('Record Created Successfully...');
					},
					error: function (err, oResponse) {
						debugger;
						alert('Error while creating record - '
							.concat(err.response.statusText));
					}
				});
			}
			// READ******************
			else if ('Read' == oEvent.oSource.mProperties.text) {
				var readurl = "/userDataSet";
				myModel.read(readurl, {
					success: function (oData, oResponse) {
					},
					error: function (err) {
						debugger;
					}
				});
			}
			// UPDATE******************
			if ('Update' == oEvent.oSource.mProperties.text) {
				obj = {};
				obj.Id = that.getView().byId("uniqueid").getValue();
				obj.Name = that.getView().byId("nameid").getValue();
				obj.Email = that.getView().byId("emailid").getValue();
				var updateurl = "/userDataSet(Id='" + that.getView().byId("uniqueid").getValue() + "')";

				myModel.update(updateurl, obj, {
					success: function (oData, oResponse) {
						debugger;
						alert('Record Updated Successfully...');
					},
					error: function (err, oResponse) {
						debugger;
						alert('Error while updating record - '
							.concat(err.response.statusText));
					}
				});
			}
			// DELETE******************
			if ('Delete' == oEvent.oSource.mProperties.text) {
				var delurl = "/userDataSet(Id='" + that.getView().byId("uniqueid").getValue() + "')";
				myModel.remove(delurl, {
					success: function (oData, oResponse) {
						debugger;
						alert('Record Removed Successfully...');
					},
					error: function (err, oResponse) {
						debugger;
						alert('Error while removing record - '
							.concat(err.response.statusText));
					}
				});
			}
		}
	});
});