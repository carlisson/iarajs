var iList = new Class({
	Extends: iElement,
	defaultProperties: {
		class: "iara-list"
	},
	initialize: function(alterClass) {
		this.parent();
		this.tag = "ul";
		this.content = [];
		this.alterClass = alterClass || false;
	},
	add: function(st) {
		this.content.push(new iListElement(st));
	},
	remove: function(id) {
		this.content.splice(id, 1);
	},
	sort: function() {
	},
	show: function() {
		this.parent();
		for (var i = 0; i < this.content.length; i++) {
			var c = (i % 2) ? "" : this.alterClass;
			this.content[i].setAlterClass(c);
			this.content[i].show();
			this.dom.grab(this.content[i].dom);
		}
		return this.dom;		
	},
	refresh: function() {
		for (var i = 0; i < this.content.length; i++) {
			var c = (i % 2) ? "" : this.alterClass;
			this.content[i].setAlterClass(c);
			this.content[i].refresh();
		}
	}
});

global.iList = iList;