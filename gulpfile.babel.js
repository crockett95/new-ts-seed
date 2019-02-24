import gulp from 'gulp';
import path from 'path';
import gulpLoadPlugins from 'gulp-load-plugins';
import * as tslint from 'tslint';
import * as packageJson from './package.json';
import { Server as KarmaServer } from 'karma';

const $ = gulpLoadPlugins();

function lint(files, emitError = true) {
  const program = tslint.Linter.createProgram('./tsconfig.json');
  return gulp.src(files)
    .pipe($.tslint({
      formatter: 'stylish',
      tslint,
      program
    }))
    .pipe($.tslint.report({
      emitError
    }));
}

function runKarma(singleRun, cb = null, configFile = './karma.conf.js') {
  new KarmaServer({
    configFile: path.resolve(__dirname, configFile),
    singleRun: singleRun,
    autoWatch: !singleRun
  }, cb).start()
}

gulp.task('tslint:src', () => lint('./src/scripts/**/*.ts'));

gulp.task('tslint:test', () => lint('./test/**/*.ts'));

gulp.task('typedoc', () => gulp.src(['./src/**/*.ts'])
    .pipe($.typedoc({
      module: 'umd',
      target: 'es2015',
      entryPoint: './main',
      out: './docs/scripts',
      name: packageJson.description,
      excludeExternals: true,
      ignoreCompilerErrors: true
    })));

gulp.task('test:unit', (done) => runKarma(true, done));

gulp.task('dts', () => gulp.src(['./src/**/*.ts'])
  .pipe($.typescript.createProject('./tsconfig.json')())
  .dts.pipe(gulp.dest('./dist')));
