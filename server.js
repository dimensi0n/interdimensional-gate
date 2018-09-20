const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const port = 3000;

io.on('connect', socket => {
    socket.emit('test', {
        message: 't'
    });
});

nextApp.prepare().then(() => {
    app.get('*', (req, res) => nextHandler(req, res));

    server.listen(port, err => {
        if(err) throw err;

        console.log(`> Ready on http://localhost:${port}`);
    });
});
