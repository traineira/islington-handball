var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Team Model
 * ==========
 */

var Team = new keystone.List('Team');

Team.add({
	name: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
});

Team.relationship({path: 'players', ref: 'Player', refPath: 'team' });

Team.register();
