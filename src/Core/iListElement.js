var iListElement = new Class({
	Extends: iElement,
	defaultProperties: {
		class: "iara-list-element"
	},
	initialize: function(v) {
		this.parent(v);
		this.tag = "li";
	},
	setAlterClass: function(alterClass) {
		this.properties.class = alterClass || this.defaultProperties.class;
	}
});

global.iListElement = iListElement;