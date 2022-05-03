'use strict';

/* eslint-disable quotes, quote-props */
module.exports = {
	"plugins": "./rules/no-at-import-css.js",
	"rules": {
		// MediaWiki will only support import in LESS files
		"at-rule-disallowed-list": "import"
	},
	"overrides": [ {
		"files": [ "**/*.less" ],
		"customSyntax": "postcss-less",
		"rules": {
			// MediaWiki will only support @import in LESS files
			"at-rule-disallowed-list": null,
			// LESS imports can go anywhere
			"no-invalid-position-at-import-rule": null,
			// Don't allow CSS imports
			"wikimedia/no-at-import-css": true
		}
	} ]
};
