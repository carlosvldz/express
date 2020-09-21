const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        name: "Carlos",
        lastname: "Sánchez",
        username: "carlosvldz",
        gender: "M",
        country: "Mexico"
    })
});

const server = app.listen(3000, function(){
    console.log(`Listening on http://localhost:${server.address().port}`);
});