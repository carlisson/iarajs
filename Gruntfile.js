module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		concat: {
			dist: {
				src: [
					"src/begin.js",
					"src/iara.js",
					"src/Core/iElement.js",
					"src/Core/iParagraph.js",
					"src/Core/*.js",
					"src/end.js"
				],
				dest: "dist/<%= pkg.name %>.js"
			}
		},
		jsonlint: {
			jshintrc: {
				src: [".jshintrc", "src/.jshintrc", "tests/.jshintrc"]
			},
			package: {
				src: ["package.json"]
			}
		},
		jshint: {
			dist: {
				src: "dist/iara.js",
				options: {
					jshintrc: "src/.jshintrc"
				}
			},
			grunt: {
				src: ["Gruntfile.js", "build/**/*.js"],
				options: {
					jshintrc: ".jshintrc"
				}
			},
			src: {
				src: "src/**/*.js",
				options: {
					jshintrc: "src/.jshintrc"
				}
			},
			tests: {
				src: "tests/**/*.js",
				options: {
					jshintrc: "tests/.jshintrc"
				}
			}
		},
		uglify: {
			options: {
				banner: "/*!\n" +
								" * <%= pkg.name %> v<%= pkg.version %>\n" +
								" */\n"
			},
			dist: {
				files: {
					"dist/<%= pkg.name %>.min.js": ["<%= concat.dist.dest %>"]
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-jsonlint");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("dev", ["jsonlint", "jshint"]);
	grunt.registerTask("build", ["concat", "uglify"]);

	grunt.registerTask("default", ["build", "dev"]);

};