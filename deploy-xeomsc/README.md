# Wdrożenie edytora na xeomsc-laser.pl (repo XeomscWoodArt)

Gotowe do wykonania, gdy sesja dostanie dostęp do `pkatlowski-lang/XeomscWoodArt`:

1. Skopiować `../edytor.html` (samodzielny, jeden plik) do katalogu głównego repo
   `XeomscWoodArt` — strona GitHub Pages udostępni go pod
   `https://xeomsc-laser.pl/edytor.html`.
2. Zastosować `nav-wycena-online.patch` na `index.html` (dodaje link
   „Wycena Online" do nawigacji desktop i mobile, otwierany w nowej karcie).
   Uwaga: plik `index.html` w tamtym repo ma końcówki linii CRLF — patch je
   zachowuje, nie konwertować.

Kolorystyka edytora jest już dopasowana do strony (slate-950 #020617,
akcent sky #38bdf8/#0284c7, font Poppins).
