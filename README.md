# Gra „Reflex” - TypeScript

https://wojciechlis.github.io/ReflexGame/

##### Instalacja

Instalacja projektu sprowadza się do zainstalowania niezbędnych zależności za pomocą polecenia `yarn install` lub `npm install`.

##### Praca nad projektem

Za pomocą komendy `yarn start` lub `npm start` uruchom serwer developerski, który będzie dostępny pod adresem [http://localhost:9000](http://localhost:9000).

Plikiem wejściowym będzie plik `src/index.ts`, jednak jeśli preferujesz zwykły JavaScript, wystarczy zmienić nazwę pliku wejściowego na `src/index.js`. Również wszystkie importowane moduły możesz tworzyć w wersji TypeScript lub JavaScript (a nawet korzystać zarówno z jednych, jak i drugich).

Pliki statyczne serwowane są z folderu `dist`, do którego z kolei automatycznie trafia zawartość folderu `src/static`. Oznacza to, że np. plik `src/static/style.css` będzie dostępny pod adresem [http://localhost:9000/style.css](http://localhost:9000/style.css).

Możesz swobodnie modyfikować ustawienia projektu. Prosimy tylko, aby po skopiowaniu repozytorium oraz zainstalowaniu zależności projekt nadal można było uruchamiać poleceniem `yarn start` lub `npm start`.
