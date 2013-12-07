var iBlockQuote = new Class({
	Extends: iParagraph,
	defaultProperties: {
		class: "iara-blockquote"
	},
	initialize: function(st) {
		this.parent(st);
		this.tag = "blockquote";
	}
});

global.iBlockQuote = iBlockQuote;