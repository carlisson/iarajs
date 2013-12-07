var iImage = new Class({
	Extends: iElement,
	defaultProperties: {
		class: "iara-image",
		width: "",
		height: "",
		src: "",
		alt: ""
	},
	initialize: function(src, nam, width, height) {
		this.parent();
		this.tag = "img";
		this.properties.src = src;
		this.properties.alt = nam || "";
		this.properties.width = width || "";
		this.properties.height = height || "";
	},
	changeSource: function(src) {
		this.properties.src = src;
		if (this.dom) {
			this.dom.setProperty("src",src);
		}
	}
});

global.iImage = iImage;