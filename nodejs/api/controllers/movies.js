const movieModel = require('../models/movies');

module.exports = {
  create: function (req, res, next) {
    movieModel.create(
      {
        name: req.body.name,
        releasedOn: req.body.releasedOn,
      },
      function (err, result) {
        if (err) next(err);
        else {
          res.json({
            status: 'success',
            message: 'movie added successfully',
          });
        }
      }
    );
  },

  getById: function (req, res, nex) {
    console.log(req.body);

    movieModel.findById(req.params.movieId, function (err, movieInfo) {
      if (err) next(err);
      else {
        res.json({
          status: 'success',
          message: 'movie found',
          data: {
            movies: movieInfo,
          },
        });
      }
    });
  },

  getAll: function (req, res, next) {
    let MoviesList = [];

    movieModel.find({}, function (err, movies) {
      if (err) next(err);
      else {
        for (let movie of movies) {
          MoviesList.push({
            id: movie._id,
            name: movie.name,
            releasedOn: movie.releasedOn,
          });
        }
      }
    });
  },

  updatebyId: function (req, res, next) {
    movieModel.findByIdAndUpdate(
      req.params.movieId,
      { name: req.body.name },
      function (err, movieInfo) {
        if (err) next(err);
        else {
          res.json({
            status: 'success',
            message: 'movie updates successfully',
          });
        }
      }
    );
  },

  deleteById: function (req, res, nex) {
    movieModel.findByIdAnRemove(req.params.movieId, function (err, movieInfo) {
      if (err) next(err);
      else {
        res.json({
          status: 'success',
          message: 'movie deleted successfully',
        });
      }
    });
  },
};
