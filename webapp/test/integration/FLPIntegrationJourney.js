/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Object",
	"./pages/Worklist"
], function (opaTest) {
	"use strict";

	QUnit.module("FLP Integration");

	opaTest("Should open the share menu and display the share buttons on the worklist page", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyFLPApp({
			intent: "excercise-display"
		});

		// Actions
		When.onTheWorklistPage.iPressOnTheShareButton();

		// Assertions
		Then.onTheWorklistPage.iShouldSeeTheShareTileButton();
	});

	opaTest("Should open the share menu and display the share buttons", function (Given, When, Then) {
		// Actions
		When.onTheWorklistPage.iRememberTableItemAtPosition(1).
			and.iPressTableItemAtPosition(1);
		When.onTheObjectPage.iPressOnTheShareButton();

		// Assertions
		Then.onTheObjectPage.
			and.iShouldSeeTheShareTileButton().
			and.theShareTileButtonShouldContainTheRememberedObjectName();

		// Cleanup
		Then.iLeaveMyFLPApp();
	});
});
