'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
// var actionNameCreator = require("../../helpers/actionNameCreator");

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      `Welcome to the  ${chalk.red(`react-redux-saga-cli`)}  generator!
      The following commands are supported :
      yo react-redux-saga-cli:test
      `
    ));
  }
});
