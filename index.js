var path = require('path');
module.exports.config = function (plugin, opts, next) {

    plugin.namespace({name: 'andrew', prefix: 'dre', dir: path.join(__dirname, 'rels')});  //hal stuff
    plugin.api({   //extension of hapi plugin arch
        path: '/dre',
        method: 'get',
        config:{
            auth: false,
            handler: function (req, reply) {
                reply('heyro woild');
            },
            plugins: {
                hal:{
                    api:'dre:hello' //hal namespace ref

                }

            }
        }

    });
    next();
};