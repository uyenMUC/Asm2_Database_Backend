const {getAllAYear,getTrainees, getInfo, getAll, addNew, getBestAchievement, getResult, getCompany, getSeason} = require('../models/trainee.model');

const getBestAchievementBySSN = function(req, res){
    getBestAchievement(req.params.SSN, (err, data) => {
        res.send({result: data, error: err});
    });
};

const getAllTrainees = function(req, res){
    getAll((err, data) => {
        res.send({result: data, error: err});
    });
};

const getAllTraineesAYear = function(req, res){
    // console.log(req.params.year)
    getAllAYear(req.params.year, (err, data) => {
        res.send({result: data, error: err});
    });
};


const getTraineeByFullname = function(req, res){
    getTrainees(req.params.fullname, function(err,data){
        res.send({result: data, error: err})
    });
};

const getResultBySsnByYear = function(req, res){
    getResult(req.body, function(err,data){
        res.send({result: data, error: err})
    });
};

const getTraineeBySSN = function(req, res){
    getInfo(req.params.SSN, function(err,data){
        res.send({result: data, error: err})
    });
};

const getAllCompany = function(req, res){
    getCompany(function(err,data){
        res.send({result: data, error: err})
    });
};

const getAllSeason = function(req, res){
    getSeason(function(err,data){
        res.send({result: data, error: err})
    });
};

const addANewTrainee = function(req, res){
    addNew(req.body, function(err, data){
        res.send({result: data, error: err})
    });
};



module.exports = {getAllTrainees, getTraineeBySSN, getAllTraineesAYear, getTraineeByFullname, addANewTrainee, getBestAchievementBySSN, getResultBySsnByYear, getAllCompany, getAllSeason}

