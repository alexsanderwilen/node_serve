FROM node:18

# Copia o arquivo package.json e package-lock.json para o diretório atual
COPY package*.json ./

# Instala o Node.js via apt-get
RUN apt-get update -yq && apt-get install -y curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash
RUN apt-get install -yq nodejs


# Define o usuário como "node"
USER node

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do diretório atual para o container
COPY . .

# Expõe a porta 8888
EXPOSE 8888

# Comando para iniciar o servidor Node.js
CMD [ "node", "src/server.js" ]