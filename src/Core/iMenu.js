var iMenu = new Class({
	Extends: iElement,
	defaultProperties: {
		class: "iara-menu",
		label: ""
	},
	initialize: function(tit) {
		this.parent();
		this.properties.label = tit;
		this.tag = "menu";
		this.content = [];
	},
	add: function(tit, act) {
		var b = new iButton(tit);
		if (act) {
			b.click = act;
		}
		this.content.push(b);
	},
	show: function() {
		this.parent();
		for (var b in this.content) {
			if (this.content[b].show) {
				var bb = this.content[b].show();
				this.dom.grab(bb);
			}
		}
		return this.dom;
	},
	refresh: function() {
		this.content.each(function(item) {
			item.refresh();
		});
	}
});

global.iMenu = iMenu;