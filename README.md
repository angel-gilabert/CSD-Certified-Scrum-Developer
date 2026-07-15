# CSD - Certified Scrum Developer

Proyecto de formación en Certified Scrum Developer con ejercicios en JavaScript y HTML.

## Contenido

- **FizzBuzz**: Implementación del problema clásico con tests
- **Calculadora**: Aplicación web interactiva

## Instalación

```bash
npm install
```

## Pruebas

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar solo tests de FizzBuzz
```bash
npm run test:fizzbuzz
```

## Ejecutar la Calculadora

Sirve la aplicación en un servidor local:

```bash
npm run serve
```

Se abrirá automáticamente en `http://localhost:8000/calculadora.html`

### Alternativas para servir

**Con Python 3:**
```bash
python -m http.server 8000
```

**Con Node.js directamente:**
```bash
npx http-server -p 8000
```

**Con Live Server (VS Code):**
1. Instala la extensión "Live Server"
2. Haz clic derecho en `calculadora.html`
3. Selecciona "Open with Live Server"

## Estructura del Proyecto

```
.
├── fizzbuzz.js              # Implementación de FizzBuzz
├── fizzbuzz.test.js         # Tests para FizzBuzz
├── calculadora.html         # Interfaz de la calculadora
├── calculadora.js           # Lógica de la calculadora
├── package.json             # Configuración del proyecto
├── .gitignore              # Archivos a ignorar en Git
└── README.md               # Este archivo
```

## FizzBuzz - Reglas

- Números que no son múltiplos de 3 ni 5: devuelve el número
- Múltiplos de 3: devuelve "Fizz"
- Múltiplos de 5: devuelve "Buzz"
- Múltiplos de 15: devuelve "FizzBuzz"

## Calculadora - Funcionalidades

- ✅ Operaciones básicas (+, -, ×, ÷)
- ✅ Porcentajes (%)
- ✅ Números decimales
- ✅ Cambio de signo (±)
- ✅ Borrar último dígito (⌫)
- ✅ Limpiar todo (C)
- ✅ Interfaz oscura moderna
