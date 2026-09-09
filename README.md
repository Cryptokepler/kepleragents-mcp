# Servidor MCP (Model Context Protocol) de KeplerAgents

KeplerAgents conecta ChatGPT y Claude con la operación autorizada de tu negocio para responder preguntas útiles de forma clara, con acceso de solo lectura y trazabilidad.

## Preguntas que puedes hacer

- ¿Cuánto vendimos ayer o durante un período?
- ¿Cómo han evolucionado las ventas durante el año?
- ¿Está lista la operación de WhatsApp?
- ¿Qué grupos de WhatsApp están sincronizados?
- ¿Cuál es la posición actual de tesorería?
- ¿Qué información falta para preparar un producto?

KeplerAgents está pensado para equipos que operan negocios de remesas, casas de cambio y atención por WhatsApp, entre otros casos de operación comercial.

## Compatible con los agentes que ya usas

Funciona con ChatGPT y Claude. Inicia sesión, autoriza el acceso que corresponda a tu organización y formula tu pregunta en lenguaje natural.

- [Herramientas disponibles](TOOLS.md)
- [Cómo conectar](CONNECT.md)
- [Principios de seguridad](SECURITY.md)
- [Casos de uso](USE-CASES.md)

Para conocer KeplerAgents, visita [kepleragents.com](https://kepleragents.com), escríbenos por [WhatsApp al +52 442 463 7790](https://wa.me/524424637790) o envía un correo a [info@kepleragents.com](mailto:info@kepleragents.com).

## Validación del descriptor público

El descriptor de registro se valida localmente, sin publicar ni usar credenciales; el mismo control se ejecuta en cada pull request:

```sh
node scripts/validate-public-assets.mjs
```

Desarrollado bajo un protocolo propio de seguridad y verificación.
