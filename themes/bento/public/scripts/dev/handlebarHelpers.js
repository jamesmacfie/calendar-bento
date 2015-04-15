Handlebars.registerHelper('day', function() {
	return new moment(this.startTime).format('ddd');
});

Handlebars.registerHelper('date', function() {
	return new moment(this.startTime).format('d');
});

Handlebars.registerHelper('month', function() {
	return new moment(this.startTime).format('MMMM');
});

Handlebars.registerHelper('group', function() {
	var title = Handlebars.escapeExpression(this.title);

	return new Handlebars.SafeString(
		title.substring(0, title.indexOf(':') -1)
	);
});

Handlebars.registerHelper('time', function() {
	return new moment(this.startTime).format('h:mma');
});

Handlebars.registerHelper('titleName', function() {
	var title = Handlebars.escapeExpression(this.title);

	return new Handlebars.SafeString(
		title.substring(title.indexOf(':') + 1, title.length)
	);
});

(function() {
	function format(name)  {
		var returnText = "";
		for (var i = 0, len = name.length; i < len; i++) {
			var c = name[i];
			if (c === ' ') {
				// Capitalise the next character and ignore the space
				i++;
				try {
					c = name[i].toUpperCase();
				} catch(e) {
					continue;
				}
			}
			returnText += c;
		}
		return returnText;
	}

	Handlebars.registerHelper('formattedName', function() {
		return format(this.name);
	});

	Handlebars.registerHelper('formattedGroup', function() {
		return format(this.group);
	});
})();
