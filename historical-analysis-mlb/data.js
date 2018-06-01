window.Data = (() => {
	return {
		fetch: function (callback) {
			$.get({url:"summary.json", dataType: 'json'})
			.done(callback)
			return this
		}
	}
})()