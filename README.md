# Angular4Students

## Demo
Unter dem Link https://christophhu.github.io/angular-4-students/ kann die Anwendung aufgerufen werden.

## Initialisierung
```bash
# erstellen der Angular-Anwendung
ng new angular-4-students
cd angular-4-students
```

### TailwindCSS
```bash
# TailwindCSS hinzufügen
npm install -D tailwindcss postcss@latest autoprefixer@latest
npx tailwindcss init
```

In der `tailwind.config.js` ist der Content aufzunehmen, um die CSS-Klassen in allen Pfade/Dateien zu überprüfen:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,css,scss,sass,less,styl}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Zusätzlich muss in der globalen Style-Datei `/src/style.sass` folgendes hinzugefügt werden:
```sass
@import 'tailwindcss/base'
@import 'tailwindcss/components'
@import 'tailwindcss/utilities'
```

Dies kann auch alles unter https://tailwindcss.com/docs/installation nachgelesen werden.

### Angular Material
```bash
ng add @angular/material
```

### Start der Anwendung
```bash
npm i
npm run start
ng serve
```