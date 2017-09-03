var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'teams';
	locals.data = {
		teams: [],
	};

	view.on('init', function(next) {

		var q = keystone.list('Team').model.find();

		q.exec(function(err, results) {
			results.forEach(function(team) {
				teamPlayers = keystone.list('Player').model.find({
					"team": team['_id']
				});
				teamPlayers.exec(function(err, players) {
					var teamObject = {
						name: team.name,
            image: team.image,
						playersInfo: players
					};
          console.log(teamObject.image);
					locals.data.teams.push(teamObject);
					console.log(locals.data.teams);
				});
			});
			next(err);
		});
	});
	// Load the galleries by sortOrder
	// view.query('teams', keystone.list('Team').model.find().sort('sortOrder'));

	// Render the view
	view.render('teams');

};
