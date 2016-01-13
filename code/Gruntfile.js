
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            allFiles: [
                'src/index.js',
                'src/client/**/*.js',
                '!src/client/assets/**/*.js',
                'src/server/**/*.js',
                'test/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        wiredep: {
            app: {
                src: ['src/client/index.html']
            }
        },

        jasmine_node: {
            unittest: {
                options: {
                    forceExit: true,
                    match: '.',
                    matchall: false,
                    specFolders: [
                        'test/server'
                    ],
                    extensions: 'js',
                    specNameMatcher: 'spec'
                },
                all: [
                    'src/server/'
                ],
                src: ['src/server/**/*.js']
            }
        }
    });

    //Client and Server dependencies
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('build', [
        'jshint',
        'wiredep'
    ]);

    grunt.registerTask('test', [
        'jasmine_node:unittest'
    ]);
};
