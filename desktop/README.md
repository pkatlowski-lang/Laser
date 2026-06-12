# Edytor Laser — wersja desktopowa

Aplikacja Electron, która pakuje `edytor.html` jako program instalowany na
Windows (.exe), macOS (.dmg) i Linux (AppImage).

## Uruchomienie w trybie deweloperskim

```sh
cd desktop
npm install
npm start
```

## Budowanie instalatora

```sh
npm run dist:win     # Windows .exe (NSIS)
npm run dist:mac     # macOS .dmg (wymaga macOS)
npm run dist:linux   # Linux .AppImage
```

Pliki instalacyjne pojawią się w `desktop/release/`.

`npm start` i `npm run dist:*` automatycznie kopiują najnowszą wersję
`../edytor.html` do `app/edytor.html` przed uruchomieniem/zbudowaniem —
nie trzeba synchronizować ręcznie.

## Automatyczne budowanie w GitHub Actions

Workflow `.github/workflows/build-desktop.yml` buduje instalatory dla
wszystkich trzech systemów (Windows, macOS, Linux) i udostępnia je jako
artefakty. Uruchamia się automatycznie po wypchnięciu tagu `desktop-v*`
albo ręcznie z zakładki *Actions* (przycisk *Run workflow*).
