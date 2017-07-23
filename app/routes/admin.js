module.exports = function (application) {
    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', function (req, res) {
        let noticia = req.body;
 
        const conn = application.config.dbConnection;
        const noticiasModel = new application.app.models.NoticiasDAO(conn);
        
        noticiasModel.salvarNoticia(noticia, function(err, result){
            res.redirect('/noticias');
        });
    });
};