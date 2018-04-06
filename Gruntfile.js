module.exports = function(grunt){
  grunt.initConfig({
    responsive_images: {
      dev: {
        options:{
          engine: 'im',
          sizes: [{
            width: 320,
          },{
            width: 640,
          },{
            width: 1024,
          }]
        },
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'assets/',
          dest: 'img/'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
};
