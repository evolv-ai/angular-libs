(function () {
	window.evolv.runtime.then(function (runtime) {
		runtime.setAudience({
			device: 'desktop'
		});

		runtime.stagePlans('1', function(builder) {
			builder.clickEventTrigger('click-link', 'button', function() { return /.*/.test(location.href) });
			builder.clickEventTrigger('click-link2', 'button', function() { return /.*/.test(location.href) });
			builder.clickEventTrigger('add-product', 'mat-card', function() { return /.*/.test(location.href) });

			builder.alwaysExecute('1', function() {
				console.log('Stage 1 Always-Execute');
			});

			builder.exclude(4);

			builder.experiment({ candidateId: '1:1' }, function(experiment) {
				experiment.page({ id: 1 }, function() { return /$/.test(location.href); }, function(plan) {
					plan.inlineStyle('button', 'text-transform', 'uppercase');
				});
			});

			builder.experiment({ candidateId: '2:2' }, function(experiment) {
				experiment.page({ id: 1 }, function(context) { return /products$/.test(location.href); }, function(plan) {
					plan.style('mat-card dt', 'text-transform', 'uppercase', true);
				});

				experiment.page({ id: 2 }, function(context) { return /checkout$/.test(location.href); }, function(plan) {
					plan.style('h6', 'color', 'red', true);
				});

				experiment.page({ id: 3 }, function(context) { return /funnel$/.test(location.href); }, function(plan) {
					plan.inlineStyle('button', 'background-color', 'red', true);
				});
			});

			builder.experiment({ candidateId: '3:3' }, function(experiment) {
				experiment.page({ id: 3 }, function(context) { return /funnel$/.test(location.href); }, function(plan) {
					plan.inlineStyle('input', 'background-color', 'gray', true);
				});
			});
		});
	});
})();
