module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},

		copy: {
			build: {
				files: [
					{expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'},
				]
			},
			demo: {
				files: [
					{expand: true, cwd: 'dist/', src: ['**'], dest: 'demo/js/'},
				]
			}
		},

		watch: {
			all: {
				files: ['src/*.*'],
				tasks: ['uglify:build','copy:build','copy:demo']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['watch:all']);

};
