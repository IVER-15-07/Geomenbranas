# Frontend React organizado

Esta base ya quedó preparada para trabajar con **componentes reutilizables** y una estructura escalable.

## Estructura recomendada

```txt
src/
	components/
		common/      # Componentes de uso frecuente (headers, cards, etc.)
		ui/          # Componentes de UI base (Button, Input, Modal, etc.)
	constants/     # Datos estáticos compartidos
	hooks/         # Custom hooks reutilizables
	layouts/       # Estructuras de página
	pages/         # Pantallas/rutas
	services/      # Lógica de API o capa de datos
	utils/         # Helpers puros
	App.jsx
	main.jsx
```

## Reglas rápidas para mantener orden

- Si se usa en varias pantallas, va a `components/`.
- Si tiene estado/lógica reutilizable, va a `hooks/`.
- Si se conecta con backend o datos, va a `services/`.
- Si es helper puro (formato, clases, validaciones), va a `utils/`.
- `pages/` solo compone componentes y hooks; evita lógica pesada ahí.

## Scripts

- `npm run dev` inicia desarrollo
- `npm run build` compila producción
- `npm run lint` revisa calidad de código
