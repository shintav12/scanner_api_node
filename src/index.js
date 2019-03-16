const express = require('express');
const app = express();
// Settings
app.set('port', process.env.port || 3000);

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.use(require('./routes/case'));
app.use(require('./routes/brand'));
app.use(require('./routes/car'));
app.use(require('./routes/system'));
app.use(require('./routes/failure_codes'));
app.use(require('./routes/parameters'));
app.use(require('./routes/options'));

// Starting Server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});