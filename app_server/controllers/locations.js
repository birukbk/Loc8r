/* GET home page */
module.exports.homelist = function(req, res){
  res.render('location-list', {
   title: 'Loc8r - find place to work with wifi',
   pageHeader:{
   	title: 'Loc8er',
   	strapline: 'Find places to work with wifi near you!'
   } 
});
};

/* GET location info page */
module.exports.locationInfo = function(req, res){
  res.render('location-info', { title: 'Location Info' });
};

/* GET Add review page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add Review' });
};
