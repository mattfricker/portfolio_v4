module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlhint: {
		    build: {
		        options: {
		            'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'attr-value-double-quotes': true,
		            //'doctype-first': true,
		            'spec-char-escape': true,
		            'id-unique': true,
		            'head-script-disabled': true,
		            'style-disabled': true
		        },
		        src: ['index.html', 'views/*.html', 'directives/*.html']
		    }
		},
	    jshint: {
      		options: {
        		  'node': true,
				  'esnext': true,
				  'curly': false,
				  'smarttabs': true,
				  'indent': 2,
				  'quotmark': 'single',
				  'globals': {
				    'jQuery': true
				  }
      		},
      		all: ['gruntfile.js', 'scripts/build/**/*.js']
    	},
    	uglify: {
    		build: {
        		files: {
            		'scripts/app.min.js': ['scripts/app.js']
	        	}
	    	}
		},
		cssc: {
		    build: {
		        options: {
		            consolidateViaDeclarations: true,
		            consolidateViaSelectors:    true,
		            consolidateMediaQueries:    true
		        },
		        files: {
		            'styles/stylesheet.css': 'styles/stylesheet.css'
		        }
		    }
		},

		cssmin: {
		    build: {
		        src: 'styles/stylesheet.css',
		        dest: 'styles/stylesheet.min.css'
		    }
		},

		sass: {
		    build: {
		        files: {
		            'styles/stylesheet.css': 'styles/stylesheet.scss'
		        }
		    }
		},
	  	concat: {
		    dist: {
		      src: ['scripts/build/config.js', 'scripts/build/controllers/*.js', 'scripts/build/services/*.js', 'scripts/build/directives/*.js', 'scripts/build/end.js'],
		      dest: 'scripts/app.js'
		    }
  		},
        watch: {
            html: {
                files: ['index.html', 'views/*.html', 'directives/*.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['gruntfile.js','scripts/build/config.js', 'scripts/build/controllers/*.js', 'scripts/build/services/*.js', 'scripts/build/directives/*.js', 'scripts/build/end.js'],
                tasks: ['buildjs','jshint']
            },
            css: {
                files: ['styles/**/*.scss'],
                tasks: ['buildcss']
            }
        },

	});

	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-cssc');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default',   []);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
    grunt.registerTask('buildjs',  ['concat', 'uglify']);
};