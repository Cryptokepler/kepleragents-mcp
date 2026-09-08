# Seguridad por diseño

KeplerAgents se diseñó para que el uso de agentes de IA respete los límites de cada organización.

- **Solo lectura.** Las herramientas descritas aquí responden consultas y no ejecutan cambios operativos.
- **Una identidad, una organización.** Cada consulta se mantiene dentro de la organización autorizada.
- **Sin credenciales en manos del agente.** El agente nunca recibe datos de acceso ni credenciales.
- **Acceso controlado.** Los permisos los decide KeplerAgents según la organización y el producto habilitado.
- **Trazabilidad.** Cada llamada queda registrada para facilitar la revisión operativa.
- **Procedencia antes que apariencia.** Que un mensaje diga “pagué” no significa que se pagó: preservamos la procedencia.

El acceso puede retirarse en cualquier momento desde la configuración de la conexión correspondiente.
