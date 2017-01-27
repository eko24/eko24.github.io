'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      task: {

        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          './_layouts/default.html',   // .html support...
        ],

        options: {
          onPathBuild : function(err) {
            console.log(JSON.parse(err))
          },
           onPathInjected: function(fileObject) {
          }
        }
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-wiredep');

  // Register tasks
  grunt.registerTask('scripts', ['wiredep:task']);
};
