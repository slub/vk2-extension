var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');
 
gulp.task('default', function() {
	return gulp.src(['Resources/Public/vk2-require.js', 'Resources/Public/src/**/*.js', 'Resources/Public/lib/closure-library/closure/goog/**/*.js'])
    	.pipe(closureCompiler({
    		compilerPath: 'node_modules/closure-compiler/node_modules/google-closure-compiler/compiler.jar',
    		fileName: 'Resources/Public/vk2-simple.js',
    		compilerFlags: {
    			closure_entry_point: 'vk2.require',
    			compilation_level: 'SIMPLE',
    			only_closure_dependencies: true,
    			externs: [
					'Build/externs/proj4.js',
					'Build/externs/ol-externs.js',
					'Build/externs/jquery.js',
					'Build/externs/general.js'
    			],
    			warning_level: 'VERBOSE'
    		}
    	}))
    	.pipe(gulp.dest('Resources/Public')
    );
});