FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# 安装所有依赖（包括 devDependencies）用于构建
RUN npm ci

COPY . .

# 构建项目
RUN npm run build

# 清理 devDependencies，只保留生产依赖
RUN npm ci --only=production && npm cache clean --force

EXPOSE 9505

USER node

CMD ["npm", "start"]
