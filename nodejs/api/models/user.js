const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    tyoe: String,
    trim: true,
    required: true,
  },

  password: {
    type: String,
    trim: true,
    required: true,
  },
});

UserSchema.pre('save', function (next) {
  this.password = bcrypt.hasSync(this.password, saltRounds);

  next();
});

module.exports = monggose.model('User', UserSchema);
