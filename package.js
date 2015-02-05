Package.describe({
	summary: 'A node.js driver for mssql, extended to Meteor.'
});

Package.on_use(function(api) {
	api.add_files(['lib/mssql.js'], 'server');
	if (typeof api.export !== 'undefined') { 
		api.export('Mssql', 'server'); 
	}
});

Npm.depends({ 'mssql': '1.3.0' });
