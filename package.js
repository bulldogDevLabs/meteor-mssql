

// ---------------------------------------------
// Description

Package.describe({
	name: 'bulldogDevLabs:meteor-mssql',
	version: '1.3.0',
	summary: 'A node.js driver for mssql, extended to Meteor.',
	git: 'https://github.com/bulldogDevLabs/meteor-mssql',
	documentation: 'README.md'
});


// ---------------------------------------------
// Use

Package.onUse(function(api) {
	api.versionsFrom('1.0.3.1');

	api.add_files('lib/mssql.js', 'server');
	if (typeof api.export !== 'undefined') { 
		api.export('mssql', 'server'); 
	}
});


// ---------------------------------------------
// Tests
Package.onTest(function(api) {
	api.use('tinytest');
	api.use('meteor-mssql');

	api.addFiles('meteor-mssql-tests.js');
});


Npm.depends({ 'mssql': '1.3.0' });


