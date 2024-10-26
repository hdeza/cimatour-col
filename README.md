# Descripción de cada carpeta:
- /assets: Almacena todos los archivos estáticos como imágenes, íconos y fuentes.

- /components:

  - /common: Componentes reutilizables que pueden ser compartidos entre diferentes partes de la aplicación (e.g., botones, modales, etc.).
  - /weather: Componentes específicos para mostrar la predicción del clima, gráficos de temperatura, etc.
  - /itinerary: Componentes relacionados con el itinerario, como tarjetas de actividades, horarios, etc.
  - /hooks: Contendrá todos los hooks personalizados para manejar lógica compartida como llamadas a APIs o gestión de estados locales.

- /layouts: Estructuras de diseño global como la cabecera, pie de página, barras laterales. Esto te permite definir plantillas para reutilizarlas en varias páginas.

- /pages: Las diferentes páginas de la aplicación. Cada página puede tener su propia lógica y diseño, divididas en componentes más pequeños.

- /services: Aquí es donde colocas todas las funciones para interactuar con APIs, por ejemplo, llamadas a un servicio externo para obtener datos climáticos.

- /store: Si usas un estado global como Redux o Zustand, puedes definir tus "slices" o configuraciones aquí. Cada "slice" maneja un conjunto de estados y acciones específicas de un dominio.

- /utils: Funciones auxiliares que puedes necesitar en varias partes del proyecto, como formatear fechas o calcular itinerarios.

# Diseño de interfaces
https://www.figma.com/design/JCCD7Ptu8JoDzRnk6y1zob/interfaces?node-id=0-1&t=DxJ6s6NyK3HpjMOF-1
