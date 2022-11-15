const express = require('express')
const app = express()
const hbs = require('hbs')
const cors = require('cors')
const port = 8181

//Especificar el directorio público
app.use(express.static('public'))

hbs.registerPartials(__dirname + '/views/partials', function(err) {})
hbs.registerPartials(__dirname + '/views/control', function(err) {})
app.set("view engine", 'hbs')
app.set('views', __dirname + '/views')



//Verificar si el puerto está siendo escuchado
app.listen(port, () => {
    console.log(`Escando por el puerto ${port}`);
});

//Paginas 

app.get('/home', (req, res) =>{  
    res.render('home', {
        nombre: 'home'
    });
});

app.get('/roles', (req, res) =>{  
    res.render('roles', {
        nombre: 'roles'
    });
});
app.get('/pedidos', (req, res) =>{  
    res.render('pedidos', {
        nombre: 'pedidos'
    });
});

app.get('/empleados', (req, res) =>{  
    res.render('empleados', {
        nombre: 'empleados'
    });
});
