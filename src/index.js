const express = require('express');
const app = express();

// Settings
app.set('port', process.env.port || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/case'));
app.use(require('./routes/brand'));
app.use(require('./routes/car'));
app.use(require('./routes/system'));

// Starting Server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});