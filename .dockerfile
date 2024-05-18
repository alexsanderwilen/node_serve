# Use uma imagem base do Node.js
FROM node:14


# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta em que a API irá rodar (por exemplo, 3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "src/server.js"]
