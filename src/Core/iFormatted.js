var iFormatted = new Class({
	Extends: iParagraph,
	defaultProperties: {
		class: "iara-formated"
	},
	initialize: function(st) {
		this.parent(st);
		this.tag = "pre";
	},
	add: function(st) {
		this._add("\n" + st);
	}
});

global.iFormatted = iFormatted;