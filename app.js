const app = require('./config/server');
const routNoticias  = require('./app/routes/noticias')(app);
const routHome = require('./app/routes/home')(app);
const routFormularioIncNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(2000, function(){
    console.log('Servidor ON');
});