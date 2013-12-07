var iParagraph = new Class({
	Extends: iElement,
	defaultProperties: {
		class: "iara-paragraph"
	},
	initialize: function (st) {
		this.parent(st);
		this.tag = "p";
		this.styleMode = true;
	},
	add: function (st) {
		this.parent(" " + st);
	},
});

global.iParagraph = iParagraph;