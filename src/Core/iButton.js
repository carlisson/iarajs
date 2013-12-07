var iButton = new Class({
	Extends: iElement,
	defaultProperties: {
		class: "iara-button",
		disabled: ""
	},
	initialize: function(tit) {
		this.parent(tit);
		this.tag = "button";
	},
	disable: function() {
		this.properties.disabled = "disabled";
	},
	enable: function() {
		this.properties.disabled = "";
	},
	toPage: function(el) {
		iara.changePage(el);
	}
});

global.iButton = iButton;