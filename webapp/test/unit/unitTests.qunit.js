/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"home/kpmg/Exercise5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});