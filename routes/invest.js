var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/rst_invest');
var Schema = mongoose.Schema;

//메모 모델을 정의합니다.
var Invest = new Schema({
	user_name: String,
	user_phone: String,
	user_invest1: Number,
	user_invest2: Number,
	user_invest3: Number,
	user_invest4: Number,
	user_invest5: Number,
	date: Date
});

var investModel = mongoose.model('Invest', Invest);

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

//모든 메모 목록을 반환합니다.
exports.load = function(req, res) {
	investModel.find({}, function(err, data) {
		console.log(data);

		res.json(data);
	});
};

//메모 쓰기 요청을 처리합니다.
exports.login = function(req, res) {
	var user_name = req.body.user_name;
	var user_phone = req.body.user_phone;

	var login = new loginModel();

	login.user_name = user_name;
	login.user_phone = user_phone;

	login.save(function (err) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};

exports.invest = function(req, res) {
	var user_name = req.body.user_name;
	var user_phone = req.body.user_phone;
	var user_invest1 = req.body.user_invest1;
	var user_invest2 = req.body.user_invest2;
	var user_invest3 = req.body.user_invest3;
	var user_invest4 = req.body.user_invest4;
	var user_invest5 = req.body.user_invest5;

	var date = Date.now();

	var invest = new investModel();

	invest.user_name = user_name;
	invest.user_phone = user_phone;
	invest.user_invest1 = user_invest1;
	invest.user_invest2 = user_invest2;
	invest.user_invest3 = user_invest3;
	invest.user_invest4 = user_invest4;
	invest.user_invest5 = user_invest5;
	invest.date = date;

	invest.save(function (err) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};

//메모 삭제 요청을 처리합니다.
exports.del = function(req, res) {
	var _id = req.body._id;

	investModel.remove({_id: _id}, function(err, result) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};
