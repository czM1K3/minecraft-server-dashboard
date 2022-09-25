# Minecraft Server Dashboard
This is web dashboard for bukkit/spigot/paper server. It requires [servertap](https://github.com/phybros/servertap) plugin to work and some kind of map, for example [dynamp](https://www.spigotmc.org/resources/dynmap%C2%AE.274/) or [bluemap](https://www.spigotmc.org/resources/bluemap.83557/). I would also recommend to use some kind of reverse proxy, such as [nginx](https://www.nginx.com/) and signed certificates, for example from [letsencrypt](https://letsencrypt.org/). At the moment you have to have disabled keyAuth in servertap, so please don't expose it to the internet.

## Example
![Example](.github/assets/image.jpg)

## Requirements
- [Docker](https://www.docker.com/)

## Instalation
(You don't have to use my solution, but it's the easiest)
1. Create following `docker-compose.yml` file
	```yaml
   version: "3"
   services:
     minecraft:
       image: "czm1k3/paper-docker:1.19.2"
       container_name: minecraft
       ports:
        - "25565:25565"
       environment:
        - MEMORY=2048
       volumes:
        - ./data:/data
       tty: true
       stdin_open: true
     dashboard:
       image: ghcr.io/czm1k3/minecraft-server-dashboard
       container_name: dashboard
       links:
        - minecraft
       ports:
        - "8000:8000"
       environment:
        - SERVER_NAME=My Minecraft Server
        - SERVER_ADDRESS=localhost
        - SERVERTAP_ADDRESS=http://minecraft:4567
        - MAP_ADDRESS=http://localhost:8100
	```
1. Start server and wait few minutes to start up
	```bash
	docker-compose up -d --force-recreate
	```
1. Download plugins into folder: `data/plugins/` (you have to download [servertap](https://github.com/phybros/servertap/releases) from releases)
1. Restart server (for plugins to create config files)
	```bash
	docker-compose up -d --force-recreate
	```
1. Edit file `data/plugins/ServerTap/config.yml` and set useKeyAuth to false
1. Restart server (for plugins to create config files)
	```bash
	docker-compose up -d --force-recreate
	```
1. You are done.