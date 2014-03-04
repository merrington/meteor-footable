Package.describe({
	summary: "FooTable - Awesome Responsive Tables, see http://fooplugins.com/plugins/footable-jquery/"
});

Package.on_use(function (api) {
	api.use('jquery');

	// CSS
	api.add_files('lib/css/footable.core.min.css', 'client');

	// JavaScript
	api.add_files('lib/dist/footable.all.min.js', 'client');

	// CSS to set the paths absolutely
	api.add_files('footable-override.css', 'client');

	// Initialize the plugin
	api.add_files('load.js');
});
