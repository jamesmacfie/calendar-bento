(function() {
	'use strict';

	window.CAL.renderEvents = function(eventSources) {
		if (!eventSources) {
			eventSources = window.CAL.eventSources;
		}

		var events = _.groupBy(
				_.pluck(eventSources, 'events').reduce(function(arr, arrs) {
					return arrs.concat(arr);
				}),
				function(event) {
					return new moment(event.startTime).format('MMMM');
				}
			),
			monthSource = $('#month').html(),
			monthTemplate = Handlebars.compile(monthSource),
			context = {
				months: _.keys(events).map(function(monthName) {
					return {
						name: monthName,
						events: events[monthName]
					};
				})
			},
			monthHtml = monthTemplate(context);

		document.getElementById('content').innerHTML = monthHtml;
	};

	$(document).ready(function() {
		window.CAL.renderEvents();
		window.CAL.renderGraphs();
	});
})();
