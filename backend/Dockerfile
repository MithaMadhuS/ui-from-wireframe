# FROM node:20

# WORKDIR /app

# COPY package*.json ./

# RUN npm ci

# COPY . .

# EXPOSE 4000

# CMD ["node", "server.js"]
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm config set strict-ssl false
RUN npm ci

# RUN echo "=== DOTENV AFTER npm ci ===" && \
#     ls -la /app/node_modules/dotenv && \
#     cat /app/node_modules/dotenv/package.json

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]