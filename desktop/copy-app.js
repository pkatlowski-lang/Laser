// Kopiuje najnowszą wersję edytora (źródło prawdy: ../edytor.html) do app/edytor.html,
// żeby pakiet Electron zawsze zawierał aktualny edytor bez ręcznej synchronizacji.
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'edytor.html');
const dest = path.join(__dirname, 'app', 'edytor.html');

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log(`Skopiowano ${src} -> ${dest}`);
