module.exports = function (application) {
    application.get('/noticia', function (req, res) 
    {
        const conn = application.config.dbConnection;
        const noticiasModel = new application.app.models.NoticiasDAO(conn);
        
        noticiasModel.getNoticias(function(err, result)
        {
            if(err)
                return console.log('error running query', err);

            res.render('noticias/noticia', { noticia : result.rows});
        });
    });
};