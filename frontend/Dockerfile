FROM node:16-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
# serve the build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
