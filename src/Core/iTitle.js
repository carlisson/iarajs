var iTitle = new Class({
	Extends: iParagraph,
	level: 2,
	defaultProperties: {
		class: "iara-title"
	},
	initialize: function(st) {
		this.parent(st);
		this.tag = "h2";
	},
	show: function() {
		if (this.level != 2) {
			this.tag = "h" + this.level;
		}
		return this.parent();
	}
});

global.iTitle = iTitle;