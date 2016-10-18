var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');

// The API that returns the in-email representation.
module.exports = function(req, res) {
  var url = req.query.url.trim();

  // Twitch stream urls are in the format:
  // http://twitch.tv/<channel name>
  var matches = url.match(/\/([a-zA-Z0-9]+)$/);
  if (!matches) {
    res.status(400).send('Invalid URL format');
    return;
  }

  var channel = matches[1];
  var html = '<iframe '+
  		'src="http://player.twitch.tv/?channel='+channel+'" '+
        'height="337" '+
        'width="600" '+
        'frameborder="0" '+
        'scrolling="no" '+
        'allowfullscreen="true"> '+
    '</iframe>';
  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
};
