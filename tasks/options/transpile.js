function nameFor(path) {
  var result,  match;
  if (match = path.match(/^(?:lib|test|test\/tests)\/(.*?)(?:\.js)?$/)) {
    result = match[1];
  } else {
    result = path;
  }

  return path;
}

module.exports = {
  amd: {
    moduleName: nameFor,
    type: 'amd',
    files: [{
      expand: true,
      cwd: 'lib/',
      src: ['**/*.js'],
      dest: 'tmp/',
      ext: '.amd.js'
    }]
  },

  commonjs: {
    moduleName: nameFor,
    type: 'cjs',
    files: [{
      expand: true,
      cwd: 'lib/',
      src: ['<%= pkg.name %>/**/*.js'],
      dest: 'dist/commonjs/',
      ext: '.js'
    },
    {
      src: ['lib/<%= pkg.name %>.js'],
      dest: 'dist/commonjs/main.js'
    }]
  },

  testsAmd: {
    moduleName: nameFor,
    type: 'amd',
    expand: true,
    src: [
      'test/test-helper.js',
      'test/test-loader.js',
      'test/helpers/*.js',
      'test/tests.js',
      'test/**/*-test.js'
    ],
    dest: 'tmp/tests/amd'
  },

  testsCommonjs: {
    moduleName: nameFor,
    expand: true,
    type: 'cjs',
    src: [
      'test/test-helper.js',
      'test/test-loader.js',
      'test/helpers/*.js',
      'test/tests.js',
      'test/**/*-test.js'
    ],
    dest: 'tmp/tests/cjs'
  }
};
