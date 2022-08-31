import gulpZip from 'gulp-zip';
import getZipFileName from '../../utils/getZipFileName.js';

// Deleting an archive folder if it exists
const delExistingArchiveFolder = () => {
  $.plugins.del([$.paths.archiveFolder]);
  console.log($.plugins.chalk.bold.yellow('Removed old archive folder.'));
};

export const buildZip = async () => {
  delExistingArchiveFolder();

  return $.gulp
    .src(`${$.config.path.buildFolder}/**/*.*`, {})
    .pipe(
      $.plugins.plumber(
        $.plugins.notify.onError({
          title: 'ZIP',
          message: 'You got an error: <%= error.message %>',
        }),
      ),
    )
    .pipe(gulpZip(getZipFileName()))
    .pipe($.gulp.dest($.paths.archiveFolder));
};
