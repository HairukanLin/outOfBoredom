# outOfBoredom

Personal music player site. Lives at [outofboredom.de](https://outofboredom.de).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and deploy

The site is hosted on GitHub Pages, served from the `docs/` folder on the `main` branch.

**1. Build**

```bash
npm run build
```

This outputs the static site into `docs/`.

**2. Commit and push**

```bash
git add docs/
git commit -m "deploy"
git push
```

GitHub Pages picks up the new `docs/` automatically. The site updates within ~60 seconds.

## Adding new music

1. Add the album folder under `public/music/<AlbumName>/` with files named `1.mp3`, `2.mp3`, ... in track order.
2. Add the album to `AlbumName` and `AlbumId` enums in `src/types/MusicPlayerConfig.ts`.
3. Add the track array and a `case` in `OfflineMusicAlbumService` in `src/services/MusicAlbumService.ts`.
4. Build and deploy.
