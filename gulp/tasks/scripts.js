import webpack from 'webpack';
import webpackStream from 'webpack-stream';

import webpackConfig from '../../webpack.config.babel.js';

export const scripts = (done) => {
  let firstBuildReady = false;

  function webpackDone(error, stats) {
    firstBuildReady = true;

    if (error) {
      return; // emit('error', err) in webpack-stream
    }

    // https://webpack.js.org/api/node/#stats-object
    // https://webpack.js.org/configuration/stats/
    $.plugins.logger[stats.hasErrors() ? 'error' : 'info'](
      stats.toString({
        chunks: false, // Makes the build much quieter
        modules: false,
        colors: true, // Shows colors in the console
      }),
    );
  }

  return $.gulp
    .src(['*.js', '!_*.js'], {
      cwd: `${$.config.path.srcFolder}/base/scripts`,
      sourcemaps: $.isDev,
    })
    .pipe(
      $.plugins.plumber(
        $.plugins.notify.onError({
          title: 'JS',
          message: 'You got an error: <%= error.message %>',
        }),
      ),
    )
    .pipe(webpackStream(webpackConfig, webpack, webpackDone))
    .pipe($.gulp.dest($.config.path.build.scripts))
    .pipe($.plugins.browsersync.stream())
    .on('data', () => {
      if (firstBuildReady) {
        done();
      }
    });
};
