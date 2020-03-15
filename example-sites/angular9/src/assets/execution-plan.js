(function () {
	window.evolv.runtime.then(function (runtime) {
		runtime.setAudience({
			device: 'desktop'
		});

		runtime.stagePlans('1', function(builder) {
			builder.clickEventTrigger('click-link', '.module.hero', function() { return /.*/.test(location.href) });

			builder.alwaysExecute('1', function() {
				console.log('Stage 1 Always-Execute');
			});

			builder.exclude(4);

			builder.experiment({ candidateId: '1:1' }, function(experiment) {
				experiment.page({ id: 1 }, function() { return /dashboard$/.test(location.href); }, function(plan) {
					plan.inlineStyle('a', 'text-transform', 'uppercase');
				});
			});

			builder.experiment({ candidateId: '2:2' }, function(experiment) {
				experiment.page({ id: 1 }, function(context) { return /products$/.test(location.href); }, function(plan) {
					plan.style('mat-card dt', 'text-transform', 'uppercase', true);
				});

				experiment.page({ id: 2 }, function(context) { return /detail/.test(location.href); }, function(plan) {
					plan.style('h2', 'color', 'green', true);
				});

				experiment.page({ id: 3 }, function(context) { return /heroes$/.test(location.href); }, function(plan) {
				  plan.inlineStyle('h2', 'text-transform', 'uppercase', true);
				});
			});

			builder.experiment({ candidateId: '3:3' }, function(experiment) {
				experiment.page({ id: 3 }, function(context) { return /dashboard$/.test(location.href); }, function(plan) {
					plan.inlineStyle('input', 'background-color', 'gray', true);
				});
			});
		});
	});
})();
