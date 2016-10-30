var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Player Model
 * ==========
 */

var Player = new keystone.List('Player');

Player.add({
	name: { type: String, required: true },
	dateOfBirthday: { type: Types.Date},
	position: { type: String, index: true },
	image: { type: Types.CloudinaryImage },
});

Player.register();
