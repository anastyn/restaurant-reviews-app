/*
 Run this with one of these options:
  "grunt" alone creates a new, completed img directory
  "grunt clean" removes the img directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [
              {
                name: "large",
                suffix: "2x",
                width: 800,
                quality: 50,
              }
            ]
          },
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'img_src/',
            dest: 'img/'
          }]
        }
      },
  
      /* Clear out the img directory if it exists */
      clean: {
        dev: {
          src: ['img'],
        },
      },
  
      /* Generate the img directory if it is missing */
      mkdir: {
        dev: {
          options: {
            create: ['img']
          },
        },
      },
  
      /* Copy the "fixed" images that don't go through processing into the img/directory */
      copy: {
        dev: {
          files: [{
            expand: true,
            src: 'img_src/fixed/*.{gif,jpg,png}',
            dest: 'img/'
          }]
        },
      },
    });
    
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
  
  };
  