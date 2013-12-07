var iara = function (config) {
	return iara.extend(config);
};

iara.extend = function (src) {
	for (var prop in src) {
		if (src.hasOwnProperty(prop)) {
			this[prop] = src[prop];
		}
	}

	return this;
};

global.iara = iara;

/*jshint ignore:start */
iara.extend({
	iaraVersion: '2.0.01',
	iaraSite: 'http://bardo.ws/',
	title: 'An IaraJS HTML5 Application',
	components: [],
	pages: [],
	console: [],
	idCount: 0,
	dom: false,
	setValues: function(vals) {
		for (v in vals) {
			this[v] = vals[v];
		};
	},
	changePage: function(el) {
		alert("I will change the page based on id or object");
	},
	makeId: function() {
		return "iaraElement" + this.idCound++;
	},
	vprint: function(msg, mtype) {
		this.console.push({
			message: msg,
			type: mtype || INFO
		});
	},
	addPage: function(ip) {
		this.pages.push(ip);
	},
	addComponent: function(ic) {
		this.components.push(ic);
	},
	show: function() {
		this.dom = $$('body')[0];
		this.dom.empty();
		var h = new Element('header');
		var h1 = new Element('h1', {html: this.title});
		h.grab(h1);
		this.dom.grab(h);
		
		var sb = new Element('sidebar', {html: "Menu"});
		if (this.components.length > 0) {
			this.components.each(function(item, c) {
				var iel = item.show();
				sb.grab(iel);
			});
		};
		this.dom.grab(sb);
		
		if (this.pages.length > 0) {
			for (var p in this.pages) {
				var iel = this.pages[p].show();
				this.dom.grab(iel);
			};
		};
		f = new Element('footer', {
			html: "Powered by <a title='IaraJS " + this.iaraVersion + "'>IaraJS</a>."
		});
		this.dom.grab(f);
	}
});
/* jshint ignore:end */