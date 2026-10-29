/*
	Renders the Schedule table and the Speakers list from SCHEDULE (data/schedule.js).
*/

(function() {

	if (typeof SCHEDULE === 'undefined')
		return;

	function esc(text) {
		return String(text == null ? '' : text)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	function title(text, link) {
		return link
			? '<a href="' + esc(link) + '" class="paper-title">' + esc(text) + '</a>'
			: '<span class="paper-title">' + esc(text) + '</span>';
	}

	function authors(talk) {
		return (talk.authors || []).map(function(name) {
			return name === talk.presenter
				? '<span class="presenter">' + esc(name) + '</span>'
				: esc(name);
		}).join(', ');
	}

	function venue(talk) {
		return (talk.venue ? '<span class="paper-venue">' + esc(talk.venue) + '</span>' : '')
			+ (talk.paper ? '<a href="' + esc(talk.paper) + '" class="paper-link icon fa-file-text-o" title="Read the paper" target="_blank" rel="noopener"><span class="label">Paper</span></a>' : '');
	}

	function projectBadge(talk) {
		return talk.project ? '<span class="paper-badge paper-badge-project">' + esc(talk.project) + '</span>' : '';
	}

	function talkItem(talk) {
		var classes = (talk.invited ? ' paper-invited' : '') + (talk.project ? ' paper-project' : '');

		return '<li' + (classes ? ' class="' + classes.trim() + '"' : '') + '>'
			+ '<span class="paper-time">' + esc(talk.time) + '</span>'
			+ (talk.invited ? '<span class="paper-badge">Invited Speaker</span>' : '')
			+ projectBadge(talk)
			+ title(talk.title, talk.link)
			+ venue(talk)
			+ '<span class="paper-authors">' + authors(talk) + '</span>'
			+ '</li>';
	}

	function breakDetails(slot) {
		if (!slot.location && !slot.note)
			return '&ndash;';
		var location = slot.link
			? '<a href="' + esc(slot.link) + '">' + esc(slot.location) + '</a>'
			: esc(slot.location);
		return (slot.location ? '<span class="break-location">' + location + '</span>' : '')
			+ (slot.note ? '<span class="break-note">' + esc(slot.note) + '</span>' : '');
	}

	function row(slot) {
		var time = '<td class="schedule-time">' + esc(slot.time) + '</td>';

		switch (slot.type) {

			case 'session':
				return '<tr class="schedule-session">' + time
					+ '<td class="schedule-slot">'
					+ '<span class="slot-name">' + esc(slot.title) + '</span>'
					+ (slot.chair ? '<span class="slot-chair">Chair: ' + esc(slot.chair) + '</span>' : '')
					+ '</td>'
					+ '<td class="schedule-description"><ul class="paper-list">'
					+ (slot.talks || []).map(talkItem).join('')
					+ '</ul></td></tr>';

			case 'distinguished':
				return '<tr class="schedule-keynote schedule-distinguished">' + time
					+ '<td class="schedule-slot">'
					+ (slot.photo ? '<img class="speaker-photo" src="' + esc(slot.photo) + '" alt="' + esc(slot.speaker) + '" />' : '')
					+ '<span class="slot-kind">Distinguished Lecture</span>'
					+ '<span class="slot-name">' + esc(slot.speaker) + '</span>'
					+ '</td>'
					+ '<td class="schedule-description">' + title(slot.title, slot.link) + '</td></tr>';

			default:
				return '<tr class="schedule-break">' + time
					+ '<td class="schedule-slot"><span class="slot-name">' + esc(slot.name) + '</span></td>'
					+ '<td class="schedule-description">' + breakDetails(slot) + '</td></tr>';
		}
	}

	function speakerItem(talk, session) {
		return '<li class="speakers-item">'
			+ '<img class="speaker-photo" src="' + esc(talk.photo || 'images/speakers/placeholder.svg') + '" alt="' + esc(talk.presenter) + '" />'
			+ '<span class="speech-time">' + esc(session.title) + ' &middot; ' + esc(talk.time) + '</span>'
			+ projectBadge(talk)
			+ '<h3 class="speech-title">' + esc(talk.title) + venue(talk) + '</h3>'
			+ '<p class="speakers-name">' + authors(talk) + '</p>'
			+ (talk.abstract ? '<p class="speakers-bio">' + esc(talk.abstract) + '</p>' : '')
			+ '</li>';
	}

	// Paper talks only: invited speakers and the distinguished lecture have their own sections,
	// and slots whose presenter is still "TBA" are skipped.
	function speakers() {
		return SCHEDULE.filter(function(slot) {
			return slot.type === 'session';
		}).map(function(session) {
			return (session.talks || []).filter(function(talk) {
				return !talk.invited && talk.presenter && talk.presenter !== 'TBA';
			}).map(function(talk) {
				return speakerItem(talk, session);
			}).join('');
		}).join('');
	}

	var tbody = document.getElementById('schedule-body');
	if (tbody)
		tbody.innerHTML = SCHEDULE.map(row).join('');

	var list = document.getElementById('speakers-list');
	if (list)
		list.innerHTML = speakers();

})();
