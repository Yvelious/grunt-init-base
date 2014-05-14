/*
 * grunt-init-base
 * https://github.com/jetstyle/grunt-init-jambo
 *
 * Copyright (c) 2014 Yvelious
 * Licensed under the MIT license.
 */

'use strict';

exports.description = 'Create base for project.';


// если такой файл существует, предупреждает, а не перезаписывает
// Any existing file or directory matching this wildcard will cause a warning.
    exports.warnOn = '*';

exports.template = function( grunt, init, done ) {

  init.process( {}, [

    init.prompt('name'),
    init.prompt('version')

  ], function(err, props) {


    var files = init.filesToCopy( props );
    init.copyAndProcess( files, props );

    // Добавлять пустые папки
            grunt.file.mkdir('i');
            grunt.file.mkdir('tmp');    

// Generate package.json file, used by npm and grunt. if package.json has don't generate
            init.writePackageJSON('package.json', {
                name: props.name,
                description: props.description,
                version: props.version,
                devDependencies: {
                    "grunt": "*",
                    "grunt-shell":"*",
                    "grunt-contrib-less": "~0.10.0", // less compile
                    "grunt-contrib-uglify": "~0.3.0", // minimize js
                    "grunt-contrib-watch": "*", 
                    "grunt-contrib-jshint": "*",  // see error
                    "grunt-contrib-concat": "*",  // concat
                    "grunt-contrib-compress": "*",
                    "grunt-styletto": "*"
                },
            });  

             

    done();

  });

};
