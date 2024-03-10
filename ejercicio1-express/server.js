const express = require('express');
const app = express();

app.post('message', (req, res) =>{
    const message = req.body.message;
    console.log(message);
    res.send('Ok');
});

app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});
