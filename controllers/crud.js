//loading view file
exports.index = function(req, res){
	res.sendfile("views/crud/index.html");
};

//returning all users
exports.new=function (req,res){
    db('crud').find().exec(function (err, models) {
		if ( err )
			console.log("Error in Index of MYSQL:"+err);
        else
            res.json(models );
    });
}

//creating user
exports.create=function (req, res){
	var user=req.body;
	
	db('crud').create(user, function (err, model) {
        if (err)
			console.log("Error in Create of MYSQL:"+err);
        else
			res.redirect('/');
    });
	
};

//returning data of single user
exports.show=function (req,res){
    if (req.params.id != "favicon") {
        db('crud').findOne({ id: req.params.crud }).exec(function (err, model) {
            if ( err )
				console.log("Error in Show of MYSQL"+err);
            else
                res.json(model);
        });
    }
};

//updating user data
exports.update=function (req,res){
	var id=req.params.crud;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;

    db('crud').findOne({ id: id }).exec(function (err, model) {
        model.firstName = firstName;
        model.lastName = lastName;
		console.dir(model);
        model.save(function (err) {
            if (err) 
				console.log("Error in Index of MYSQL"+err);
            else
				res.redirect('/');
        });
    });
};

//deleting user
exports.destroy=function(req, res){
    var id = req.params.crud;
    db('crud').findOne({ id: id }, function (err, model) {
        if (model) {
            db('crud').destroy({ id: id }, function (err) {
                if (err) 	
					console.log("Error in Index of MYSQL"+err);
                else
					res.redirect('/');
            });
        } else {
            res.send('not found');
        }
    });
};
exports.edit=function (req,res){
	res.sendfile("views/test.html");
}