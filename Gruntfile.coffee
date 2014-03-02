module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-sass'

  grunt.initConfig
    dirs:
      base:     'static/'
      js:       'static/js/'
      app:      'static/js/App/'
      scss:     'static/scss/'
      jade:     'static/jade/'
      dist:     'static/dist/'
      jst:      'static/templates/'

    sass:
      dist:
        options:
          sourcemap: true
        files:
          '<%= dirs.dist %>app.css': '<%= dirs.scss %>main.scss'

    watch:
      sass:
        files: '<%= dirs.scss %>**/*.scss'
        tasks: 'sass'

  grunt.registerTask 'default', ['sass']
