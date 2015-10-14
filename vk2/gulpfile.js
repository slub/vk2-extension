var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');
var minifyCss = require('gulp-minify-css');

/**
 * Minifies the css 
 */
gulp.task('minify-css', function() {
	return gulp.src('Resources/Public/css/*.css')
		.pipe(minifyCss({compatibility: 'ie8'}))
	    .pipe(gulp.dest('Resources/Public/'));
});

/**
 * Build of library with google closure compiler - simple optimization
 */
gulp.task('js-compile-simple', function() {
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

/**
 * Build of library with google closure compiler - advanced optimization (debug)
 */
gulp.task('js-compile-advanced-debug', function() {
	return gulp.src(['Resources/Public/vk2-require.js', 'Resources/Public/src/**/*.js', 'Resources/Public/lib/closure-library/closure/goog/**/*.js'])
    	.pipe(closureCompiler({
    		compilerPath: 'node_modules/closure-compiler/node_modules/google-closure-compiler/compiler.jar',
    		fileName: 'Resources/Public/vk2-min-debug.js',
    		compilerFlags: {
    			closure_entry_point: 'vk2.require',
    			formatting: [
    			     'pretty_print',
    			],    			
    			compilation_level: 'ADVANCED_OPTIMIZATIONS',
    			only_closure_dependencies: true,
			    generate_exports: true,
    			define: [
    			    'goog.DEBUG=false'
    			],
    			externs: [
					'Build/externs/proj4.js',
					'Build/externs/ol-externs.js',
					'Build/externs/jquery.js',
					'Build/externs/general.js',
					'Build/externs/vk2x.js'
    			],
    			output_wrapper: '(function(){%output%}).call(window);',
    			warning_level: 'VERBOSE'
    		}
    	}))
    	.pipe(gulp.dest('Resources/Public')
    );
});

/**
 * Build of library with google closure compiler - advanced optimization 
 */
gulp.task('js-compile-advanced', function() {
	return gulp.src(['Resources/Public/vk2-require.js', 'Resources/Public/src/**/*.js', 'Resources/Public/lib/closure-library/closure/goog/**/*.js'])
    	.pipe(closureCompiler({
    		compilerPath: 'node_modules/closure-compiler/node_modules/google-closure-compiler/compiler.jar',
    		fileName: 'Resources/Public/vk2-min.js',
    		compilerFlags: {
    			closure_entry_point: 'vk2.require',
    			compilation_level: 'ADVANCED_OPTIMIZATIONS',
    			only_closure_dependencies: true,
			    generate_exports: true,
    			define: [
    			    'goog.DEBUG=false'
    			],
    			externs: [
					'Build/externs/proj4.js',
					'Build/externs/ol-externs.js',
					'Build/externs/jquery.js',
					'Build/externs/general.js',
					'Build/externs/vk2x.js'
    			],
    			output_wrapper: '(function(){%output%}).call(window);',
    			warning_level: 'VERBOSE'
    		}
    	}))
    	.pipe(gulp.dest('Resources/Public')
    );
});

gulp.task('default', ['minify-css', 'js-compile-simple', 'js-compile-advanced-debug', 'js-compile-advanced']);