module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'main.css': 'main.less'
                }
            },
            production:{
                options:{
                    compress: true,
                },
                files:{
                    'main.min.css': 'main.less'
                }
            }
        },
        sass:{
            dist:{
                options:{
                    style: 'compressed',
                },
                files:{
                    'main.css': 'main.scss'
                }
            }
        },
        concurrent:{
            target: ['helloWorld', 'less', 'sass']
        }
    })

    grunt.registerTask('helloWorld', function(){
        const done = this.async();
        setTimeout(function(){
            console.log('Hello World!');
            done();
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent']);
}