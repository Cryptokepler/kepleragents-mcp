# Seguridad por diseño

KeplerAgents se diseñó para que el uso de agentes de IA respete los límites de cada organización.

- **Solo lectura por defecto.** Las herramientas responden consultas y no ejecutan cambios operativos. La única acción disponible, responder por WhatsApp, exige un borrador previo y la aprobación de una persona antes de enviarse.
- **Nunca mueve dinero.** Ninguna herramienta crea pagos, mueve fondos ni cambia saldos.
- **Una identidad, una organización.** Cada consulta se mantiene dentro de la organización autorizada.
- **Sin credenciales en manos del agente.** El agente nunca recibe datos de acceso ni credenciales.
- **Acceso controlado.** Los permisos los decide KeplerAgents según la organización y el producto habilitado.
- **Trazabilidad.** Cada llamada queda registrada para facilitar la revisión operativa.
- **Procedencia antes que apariencia.** Que un mensaje diga “pagué” no significa que se pagó: preservamos la procedencia.

El acceso puede retirarse en cualquier momento desde la configuración de la conexión correspondiente.

## Reportar un problema de seguridad

Envía los detalles de forma privada a [info@kepleragents.com](mailto:info@kepleragents.com). No publiques credenciales, tokens, datos personales ni información de clientes en issues públicos.
