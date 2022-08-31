FROM node:16

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

RUN pnpm install --frozen-lockfile
RUN pnpm generate

COPY . .

RUN pnpm build

CMD ["pnpm", "run", "start"]