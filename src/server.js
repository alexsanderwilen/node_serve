// // // const express = require('express');
// // // const crypto = require('crypto');
// // // const app = express();
// // // const PORT = 3000;

// // // const emailPixel = [];
// // // let qtdePixels = 0; // Altere para 'let' para permitir modificação

// // // app.get('/', (req, res) => {
// // //   const today = new Date();

// // //   const ano = today.getFullYear();
// // //   const mes = today.getMonth() + 1;
// // //   const dia = today.getDate();

// // //   const horas = today.getHours();
// // //   const minutos = today.getMinutes();
// // //   const segundos = today.getSeconds();
// // //   const milissegundos = today.getMilliseconds();
// // //   const microssegundos = milissegundos * 1000;
// // //   const nanossegundos = microssegundos * milissegundos;
// // //   const picossegundos = nanossegundos * milissegundos;
// // //   const femtossegundos = picossegundos * milissegundos;
// // //   const attossegundos = femtossegundos * milissegundos;
// // //   const zeptossegundos = attossegundos * milissegundos;
// // //   const yoctossegundos = zeptossegundos * milissegundos;
// // //   const planck = yoctossegundos * milissegundos;
// // //   const data = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}.${milissegundos}.${microssegundos}.${nanossegundos}.${picossegundos}.${femtossegundos}.${attossegundos}.${zeptossegundos}.${yoctossegundos}.${planck}`;
// // //   const hash = crypto.createHash('sha256').update(data).digest('hex');

// // //   const nome = 'FRG';
// // //   qtdePixels = qtdePixels + 1;
// // //   const nomeCompleto = `${nome} ${qtdePixels}`; // Use uma variável separada para o nome completo
// // //   emailPixel.push({ hash, nome: nomeCompleto }); // Corrija para 'nomeCompleto'
// // //   res.send(`${hash}`);
// // // });

// // // // app.get('/:hash', (req, res) => {
// // // //   const hashParam = req.params.hash;

// // // //   const emailPixelEncontrado = emailPixel.find(emailPixel => emailPixel.hash === hashParam);

// // // //   if (emailPixelEncontrado) {
// // // //     res.send(`Pixel Encontrado: ${emailPixelEncontrado.nome}`); // Corrija para 'emailPixelEncontrado.nome'
// // // //   } else {
// // // //     res.status(404).send('Pixel não encontrada');
// // // //   }
// // // // });

// // // app.get('/track-pixel', async (req, res) => {
// // //   const canvas = createCanvas(1, 1); // Crie um canvas de 1x1 pixel
// // //   const ctx = canvas.getContext('2d');


// // //   const today = new Date();

// // //   const ano = today.getFullYear();
// // //   const mes = today.getMonth() + 1;
// // //   const dia = today.getDate();

// // //   const horas = today.getHours();
// // //   const minutos = today.getMinutes();
// // //   const segundos = today.getSeconds();
// // //   const milissegundos = today.getMilliseconds();
// // //   const microssegundos = milissegundos * 1000;
// // //   const nanossegundos = microssegundos * milissegundos;
// // //   const picossegundos = nanossegundos * milissegundos;
// // //   const femtossegundos = picossegundos * milissegundos;
// // //   const attossegundos = femtossegundos * milissegundos;
// // //   const zeptossegundos = attossegundos * milissegundos;
// // //   const yoctossegundos = zeptossegundos * milissegundos;
// // //   const planck = yoctossegundos * milissegundos;
// // //   const data = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}.${milissegundos}.${microssegundos}.${nanossegundos}.${picossegundos}.${femtossegundos}.${attossegundos}.${zeptossegundos}.${yoctossegundos}.${planck}`;
// // //   const hash = crypto.createHash('sha256').update(data).digest('hex');

// // //   const nome = 'FRG';
// // //   qtdePixels = qtdePixels + 1;
// // //   const nomeCompleto = `${nome} ${qtdePixels}`;
// // //   emailPixel.push({ hash, nome: nomeCompleto });
  
// // //   ctx.fillStyle = '#FF0000'; // Vermelho
// // //   ctx.fillRect(0, 0, 1, 1); // Preencha todo o canvas

// // //   // Envie a imagem como resposta
// // //   res.set('Content-Type', 'image/png');
// // //   //res.send(canvas.toBuffer(hash));
// // //   res.send(canvas.toBuffer(hash, 'base64'));
// // // });

// // // app.listen(PORT, () => {
// // //   console.log(`API está hospedada corretamente na porta ${PORT}`);
// // // });

// // const express = require('express');
// // const crypto = require('crypto');
// // const { createCanvas } = require('canvas'); 
// // const app = express();
// // const PORT = 3000;

// // const emailPixel = [];
// // let qtdePixels = 0;
// // let pixelAberto = 0;

// // app.get('/track-pixel', async (req, res) => {
// //   const today = new Date();
// //   const data = today.toISOString();
// //   const hash = crypto.createHash('sha256').update(data).digest('hex');
// //   console.log(hash);
// //   const nome = 'FRG';
// //   qtdePixels += 1; // Incrementa a quantidade de pixels
// //   const nomeCompleto = `${nome} ${qtdePixels}`;
  
// //   emailPixel.push({ hash, nome: nomeCompleto });  

// //   const r = parseInt(hash.slice(0, 2), 16);
// //   const g = parseInt(hash.slice(2, 4), 16);
// //   const b = parseInt(hash.slice(4, 6), 16);
// //   const pixelColor = `rgb(${r}, ${g}, ${b})`;

// //   const canvas = createCanvas(100, 100);
// //   const ctx = canvas.getContext('2d');

// //   ctx.fillStyle = pixelColor;
// //   ctx.fillRect(0, 0, 100, 100);

// //   res.set('Content-Type', 'image/png');
// //   const buffer = canvas.toBuffer();

// //   const blob = new Blob([buffer], { type: 'image/png' });

// //   const imageUrl = URL.createObjectURL(blob);

// //   console.log('URL da imagem:', imageUrl);

// //   const imgurln = '<img src="${imageUrl}" alt="Minha Imagem"></img>';
// //   res.send(imgurln);
// //   //res.send(buffer);
// // });

// // app.get('/track-pixel/:hash', (req, res) => {
// //   const hashParam = req.params.hash;

// //   const emailPixelEncontrado = emailPixel.find(emailPixel => emailPixel.hash === hashParam);

// //   if (emailPixelEncontrado) {
// //     pixelAberto += 1;
// //     console.log(`${emailPixelEncontrado.nome} aberto ${pixelAberto} vez(es)`);
// //     res.send(`Pixel Encontrado: ${emailPixelEncontrado.nome}`);    
// //   } else {
// //     res.status(404).send('Pixel não encontrada');
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`API está hospedada corretamente na porta ${PORT}`);
// // });
// // server.js

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

// // Rota para o pixel de rastreamento
// app.get('/pixel', async (req, res) => {
//     const canvas = createCanvas(100, 100);
//     const ctx = canvas.getContext('2d');

//     // Preencha o canvas com uma cor (por exemplo, branco)
//     ctx.fillStyle = '#ffffff';
//     ctx.fillRect(0, 0, 100, 100);

//     // Gere um nome único para o arquivo (por exemplo, 'pixel_20240518_175057.png')
//     const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
//     const imageName = `pixel_${timestamp}.png`;

//     // Salve o canvas em um arquivo com o nome gerado
//     const imagePath = path.join(__dirname, imageName);
//     const out = fs.createWriteStream(imagePath);
//     const stream = canvas.createPNGStream();
//     stream.pipe(out);
//     out.on('finish', () => {
//         // Responda com o arquivo gerado
//         res.status(200).sendFile(imagePath);
//     });
// });

app.get('/pixel', async (req, res) => {
  const canvas = createCanvas(100, 100);
  const ctx = canvas.getContext('2d');

  // Preencha o canvas com uma cor (por exemplo, branco)

  ctx.fillStyle = '#00ff00';
  ctx.fillRect(0, 0, 100, 100);

  // Gere um nome único para o arquivo (por exemplo, 'pixel_20240518_175057.png')
  const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
  const imageName = `pixel_${timestamp}.png`;
  const imagePath = path.join(__dirname, 'uploads', imageName);

  // Salve o canvas em um arquivo com o nome gerado na pasta "uploads"
  //const imagePath = path.join(__dirname, 'uploads', nomeImagem);
  const out = fs.createWriteStream(imagePath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () => {
      // Responda com o arquivo gerado
      res.status(200).sendFile(imagePath);
  });
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// const express = require('express');
// const fs = require('fs');
// const multer = require('multer');
// const path = require('path');
// const { createCanvas } = require('canvas');

// const app = express();
// const port = 3000;

// // Rota para o pixel de rastreamento
// app.get('/pixel', async (req, res) => {
//     try {
//         const canvas = createCanvas(100, 100);
//         const ctx = canvas.getContext('2d');

//         // Preencha o canvas com uma cor (por exemplo, branco)
//         ctx.fillStyle = '#ffffff';
//         ctx.fillRect(0, 0, 100, 100);

//         // Gere um nome único para o arquivo (usando UUID)
//         const uniqueName = generateUniqueName();
//         const imageName = `pixel_${uniqueName}.png`;

//         // Salve o canvas em um arquivo com o nome gerado na pasta "uploads"
//         const imagePath = path.join(__dirname, 'uploads', imageName);
//         const out = fs.createWriteStream(imagePath);
//         const stream = canvas.createPNGStream();
//         stream.pipe(out);
//         out.on('finish', () => {
//             // Responda com o arquivo gerado
//             res.status(200).sendFile(imagePath);
//         });
//     } catch (error) {
//         console.error('Erro ao gerar o pixel:', error);
//         res.status(500).send('Erro ao gerar o pixel.');
//     }
// });

// // Rota para obter a imagem pelo nome
// app.get('/imagem/:nome', (req, res) => {
//     const nomeImagem = req.params.nome;
//     const caminhoImagem = path.join(__dirname, 'uploads', nomeImagem);

//     // Verifique se o arquivo existe
//     if (fs.existsSync(caminhoImagem)) {
//         res.sendFile(caminhoImagem);
//     } else {
//         res.status(404).send('Imagem não encontrada');
//     }
// });

// // Função para gerar um UUID
// function generateUniqueName() {
//     // Implemente a lógica para gerar um UUID único
//     // Por exemplo, você pode usar a biblioteca 'uuid' para isso
//     // Exemplo: return uuid.v4();
//     return uuid.v4(); // Substitua pelo UUID real
// }

// // Inicie o servidor
// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// });
