
const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');


const app = express();
const port = process.env.PORT || 3000;


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
      // Gere um nome único para a imagem (pode ser o próprio nome enviado)
      const uniqueName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Rota para obter a imagem pelo nome
app.get('/pixel/:nome', (req, res) => {
    const nomeImagem = req.params.nome;
    const caminhoImagem = path.join(__dirname, 'uploads', nomeImagem);

    // Verifique se o arquivo existe
    if (fs.existsSync(caminhoImagem)) {
      console.log(`${caminhoImagem} carregado do email`);
        res.sendFile(caminhoImagem);
    } else {
        res.status(404).send('Imagem não encontrada');
    }
});

app.get('/pixel', async (req, res) => {
  const canvas = createCanvas(100, 100);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#00ff00';
  ctx.fillRect(0, 0, 100, 100);

  const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
  const imageName = `pixel_${timestamp}.png`;
  const imagePath = path.join(__dirname, 'uploads', imageName);

  const out = fs.createWriteStream(imagePath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () => {
      // Responda com o arquivo gerado
      res.status(200).sendFile(imagePath);
  });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
