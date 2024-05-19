# Usa uma imagem do docker hub com a versão carbon do Node.js
FROM node:18.04

# Define qual diretório será usado para nossa aplicação dentro do container
WORKDIR /usr/src/

# Copia todos os arquivos que começam com package e tem extensão .json para o diretório definido acima
COPY package*.json ./

# Instala todas as dependências declaradas no package.json
RUN npm install

# Copia todos os arquivos da raiz da nossa aplicação para a pasta deinida no WORKDIR
COPY . .

# Expõe a porta 3000 do container
EXPOSE 8888

# Comando para iniciar o servidor Node.js
CMD [ "node", "src/server.js" ]