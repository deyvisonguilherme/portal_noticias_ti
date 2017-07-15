module.exports = function (app) {
    const pool = require('../../config/dbConnection');

    app.get('/noticias', function (req, res) 
    {
        pool.query('select * from noticias', function(err, result)
        {
            if(err)
                return console.log('error running query', err);

            res.render('noticias/noticias', { noticias : result.rows});
        });
    });
};