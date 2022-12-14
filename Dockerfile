FROM lukechannings/deno:v1.29.1

WORKDIR /app

COPY . .
RUN deno cache main.ts --import-map=import_map.json

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
