module.exports.config = function (plugin, opts, next) {
    plugin.api({
        path: '/dre',
        method: 'get',
        config:{
            auth: false,
            handler: function (req, reply) {
                reply('heyro');
            }
        }

    });
    next();
};