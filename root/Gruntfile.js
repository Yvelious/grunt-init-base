'use strict';


module.exports = function(grunt) {

    // Tasks
    grunt.initConfig({

        less: {
            main: {
                files: {
                    "css/main.css":"css/less/main.less"
                }
            },
            
        },

        watch: {
            main: {
                files: 'css/less/**/*.less',
                tasks: ['less', 'concat'],
                options: {
                    nospawn: true
                }
            }
        },


        // shell: {
        // multiple: {
        //     command: [
        //         'bower install'
        //         // 'mkdir assets',
        //         // 'mv bower_components/* assets',
        //         // 'rm -rf bower_components'
              
        //         ].join('&&')
        //     }
        // }



        // concat js files together

        concat: {
            dist: {
                src: [
                    'assets/bootstrap/js/*.js',
                ],
                dest: 'js/lib/bootstrap.js'
            }
        },

        // minify js files with uglify.js

        uglify: {
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'js/lib/bootstrap.min.js'
            }
        },

        jshint: {
            src: [
                'Gruntfile.js',
                'lib/**/*.js'
              
            ],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        }




    });

    // Load plugins installed via npm install;
    
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');


    // Default update tasl
    grunt.registerTask('default', ['less']);
    grunt.registerTask('bower',['shell']);
};


