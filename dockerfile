# Usar la imagen oficial de Node.js como base
FROM node:16 

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install # Copiar el resto del código fuente COPY . .

# Exponer el puerto en el que la app escuchará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]