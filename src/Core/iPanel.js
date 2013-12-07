var iPanel = new Class({
	Extends: iElement,
	defaultProperties: {
		class: "iara-panel"
	},
	initialize: function(tit) {
		this.parent();
		this.title = new iTitle(tit);
		this.title.level = 3;
		this.content = new iElement();
	},
	add: function(st) {
		this.content.add(st);
	},
	show: function() {
		var dt = this.title.show(),
				dc = this.content.show();

		this.parent();
		this.dom.grab(dt);
		this.dom.grab(dc);
		return this.dom;
	},
	refresh: function() {
		this.title.refresh();
		this.content.refresh();
	}
});

global.iPanel = iPanel;