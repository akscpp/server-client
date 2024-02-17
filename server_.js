const express = require('express');
const { createCanvas, loadImage } = require('canvas');

const app = express();
const port = 3001;

app.use(express.static('public')); 

app.use(express.json());

app.post('/id-card', (req, res) => {
  const { name, mobile } = req.body;

  const canvas = createCanvas(400, 200);
  const context = canvas.getContext('2d');

  loadImage('./public/jpg/awwzo_icon.jpg').then((image) => {
    context.drawImage(image, 0, 0, 400, 200);
    context.font = '20px Arial';
    context.fillStyle = 'white';
    context.fillText(`Name: ${name}`, 50, 50);
    context.fillText(`Mobile: ${mobile}`, 50, 100);

    const buffer = canvas.toBuffer('image/jpeg');
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Content-Disposition', 'attachment; filename=Awwzo_ID.jpg');
    res.end(buffer);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
