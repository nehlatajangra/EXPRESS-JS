const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/images', express.static(__dirname + 'images'));


// app.get('/', (req, res) => {
//     res.sendFile('index.html',{root:'.'});
// });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));