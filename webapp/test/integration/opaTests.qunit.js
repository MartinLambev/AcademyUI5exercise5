/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"home/kpmg/Exercise5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});