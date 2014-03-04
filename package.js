Package.describe({
	summary: "FooTable - Awesome Responsive Tables, see http://fooplugins.com/plugins/footable-jquery/"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');

	api.imply('jquery', 'client');

	// CSS
	api.add_files('lib/css/footable.core.min.css', 'client');

	// JavaScript
	api.add_files('lib/dist/footable.all.min.js', 'client');

	// fonts
	api.add_files('lib/css/fonts/footable.eot', 'client');
	api.add_files('lib/css/fonts/footable.svg', 'client');
	api.add_files('lib/css/fonts/footable.ttf', 'client');
	api.add_files('lib/css/fonts/footable.woff', 'client');

	// CSS to set the paths absolutely
	api.add_files('footable-override.css', 'client');
});
