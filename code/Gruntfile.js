
module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var options = {
        // Project settings
        paths: {
            // Configurable paths
            app: 'src',
            build: 'build',
            dist: 'dist'
        }
    };

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);


    grunt.registerTask('build', [
        'jshint',
        'less',
        'copy'
    ]);

    grunt.registerTask('rebuild',['clean', 'build']);
};
