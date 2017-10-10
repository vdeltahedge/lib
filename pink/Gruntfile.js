module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
			build: ['build']
		},

		copy: {
			build: {
				files: [{
					expand: true,
					src: [
						'fonts/**/*.{woff, woff2}',
						'img/**',
						'js/**',
						'*.html',
						'*.css'
					],
					dest: 'build'
				}]
			},
			html: {
				files: [{
					expand: true,
					src: ['*.html'],
					dest: 'build'
				}]
			}
		},

		less: {
			style: {
				files: {
					'build/css/style.css': ['less/style.less']
				}
			}
		},

		watch: {
			html: {
				files: ['*.html'],
				tasks: ['copy:html']
			},
			style: {
				files: ['less/**/*.less'],
				tasks: ['less','postcss', 'csso']
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: ['build/*.html', 'build/css/*.css']
				},
				options: {
					watchTask: true,
					server: './build'
					
				}
			}
		},

		csso: {
			style: {
				options: {
					report: 'gzip'
				},
				files: {
					'build/css/style.min.css': ['build/css/style.css']
				}
			}
		},

		imagemin: {
			images: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					src: ['build/img/**/*.{png, jpg, gif}']
				}]
			}
		},

		postcss: {
			options: {
				processors: [
					require('css-mqpacker')({sort: true}),
					require('autoprefixer')({browsers:
					[
						'last 1 version',
						'last 2 Chrome versions',
						'last 2 Firefox versions',
						'last 2 Opera versions',
						'last 2 Edge versions'
					]})
				]
			},
			src: 'build/css/*.css'
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-css-mqpacker');
	

	grunt.registerTask('default', ['browserSync', 'watch']);
	grunt.registerTask('build', ['clean', 'copy', 'less', 'postcss', 'csso', 'imagemin']);

};