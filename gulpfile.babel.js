import dtsGenerator from 'dts-generator';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { Server as KarmaServer } from 'karma';
import * as packageJson from './package.json';
import path from 'path';
import * as tslint from 'tslint';

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
      entryPoint: JSON.stringify('main'),
      out: './docs/scripts',
      name: packageJson.description,
      excludeExternals: false,
      ignoreCompilerErrors: true
    })));

gulp.task('test:unit', (done) => runKarma(true, done));

gulp.task('dts-generator', () => dtsGenerator({
      name: 'seed3',
      baseDir: './src/scripts',
      files: ['main.ts'],
      main: 'seed3/main',
      out: 'dist/seed3.d.ts',
      prefix: "seed3",
      moduleResolution: 2
  }));
