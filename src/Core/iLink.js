var iLink = new Class({
	Extends: iElement,
	defaultProperties: {
		class: "iara-link",
		title: "",
		href: "",
		target: ""
	},
	initialize: function(nam, hre, des) {
		this.parent(nam);
		this.tag = "a";
		this.properties.href = hre || "";
		this.properties.title = des || "";
	}
});

global.iLink = iLink;