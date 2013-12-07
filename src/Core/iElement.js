var iElement = new Class({
	tag: "div",
	id: "",
	defaultProperties: {
		class: "iara-element"
	},
	properties: {
		html: ""
	},
	dom: false,
	initialize: function (st) {
		this.properties.html = st || "";
	},
	_add: function (st) {
		this.properties.html += st;
	},
	add: function (st) {
		this._add(st);
	},
	setProperties: function () {
		var p;
		for (p in this.defaultProperties) {
			this.properties[p] = this.properties[p] || this.defaultProperties[p];
		}
		for (p in this.properties) {
			if (p == "id") {
				this.id = this.properties[p];
			} else {
				if (this.defaultProperties[p] === undefined) {
					iara.vprint("Property " + p + " from " + typeof this + " don't used.", INFO);
				}
			}
		}
		if (this.id === "") {
			this.id = iara.makeId();
			this.properties.id = this.id;
		}
	},
	click: function () {},
	mouseEnter: function () {},
	mouseLeave: function () {},
	show: function () {
		this.setProperties();
		this.dom = new Element(this.tag, this.properties);
		this.dom.addEvent("click", this.click);
		this.dom.addEvent("mouseenter", this.mouseEnter);
		this.dom.addEvent("mouseleave", this.mouseLeave);
		return this.dom;
	},
	refresh: function () {
		this.dom.setProperties(this.properties);
	}
});

global.iElement = iElement;