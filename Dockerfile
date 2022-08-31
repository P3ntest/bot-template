FROM node:16-alpine

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

RUN pnpm install --frozen-lockfile --prod --ignore-scripts
RUN pnpm install -D prisma
RUN pnpm generate

COPY . .

RUN pnpm build

CMD ["pnpm", "run", "start"]