FROM oven/bun
WORKDIR /app


COPY ./package.json ./package.json
COPY ./bun.lock ./bun.lock

COPY . .

RUN bun install
RUN bun run build

EXPOSE 5173

CMD ["bun", "run", "preview", "--host", "0.0.0.0", "--port", "5173"]