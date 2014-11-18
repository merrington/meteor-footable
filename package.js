Package.describe({
	name: "mikeje:footable",
	summary: "FooTable - Awesome Responsive Tables, see http://fooplugins.com/plugins/footable-jquery/",
	version: "0.0.1"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');

	api.imply('jquery');

	api.addFiles([
		'lib/css/footable.core.min.css',
		'lib/dist/footable.all.min.js',
		'lib/css/fonts/footable.eot',
		'lib/css/fonts/footable.svg',
		'lib/css/fonts/footable.ttf',
		'lib/css/fonts/footable.woff'
		], 'client');
});
