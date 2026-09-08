# Herramientas disponibles

Este catálogo describe las herramientas disponibles para una organización autorizada. Cada una está diseñada para consultas de solo lectura y para responder preguntas operativas sin exponer datos personales.

## `get_whatsapp_readiness`

**Pregunta que responde:** ¿Está lista mi operación de WhatsApp?

**Qué devuelve:** el estado general de conexión, la disponibilidad de lectura y alertas operativas acotadas.

**Límites:** solo lectura; no muestra mensajes, participantes ni teléfonos; disponible únicamente para la organización autorizada.

## `list_whatsapp_groups`

**Pregunta que responde:** ¿Qué grupos de WhatsApp están sincronizados?

**Qué devuelve:** el listado operativo de grupos sincronizados, su disponibilidad y el estado de actualización.

**Límites:** solo lectura; no muestra conversaciones, participantes ni teléfonos; disponible únicamente para la organización autorizada.

## `get_sales_summary`

**Pregunta que responde:** ¿Cuánto vendimos en un período?

**Qué devuelve:** un resumen de ventas del período consultado, incluidos sus totales y el número de operaciones; cuando corresponde, permite consultar un día cerrado.

**Límites:** solo lectura; no presenta datos personales ni transacciones individuales; disponible únicamente para la organización autorizada.

## `get_monthly_sales_breakdown`

**Pregunta que responde:** ¿Cómo evolucionaron las ventas durante un año?

**Qué devuelve:** un desglose mensual con volumen procesado, pagos, operaciones y ticket promedio.

**Límites:** solo lectura; no presenta transacciones individuales ni datos personales; disponible únicamente para la organización autorizada.

## `search_transactions`

**Pregunta que responde:** ¿Qué transacciones autorizadas cumplen una condición?

**Qué devuelve:** resultados acotados de una búsqueda de transacciones, con su estado y referencias operativas.

**Límites:** solo lectura; la consulta está limitada y autorizada; no expone datos personales; disponible únicamente para la organización autorizada.

## `get_treasury_snapshot`

**Pregunta que responde:** ¿Cuál es la posición actual de tesorería?

**Qué devuelve:** una vista actual de las posiciones de tesorería por cuenta o activo y su disponibilidad.

**Límites:** solo lectura; no permite movimientos ni cambios de saldo; disponible únicamente para la organización autorizada.

## `prepare_catalog_product`

**Pregunta que responde:** ¿Qué falta para preparar la ficha de este producto?

**Qué devuelve:** una propuesta organizada de producto, la información pendiente de confirmación humana y observaciones para completar la ficha.

**Límites:** no crea, edita ni publica productos; no acepta imágenes; requiere confirmación humana antes de cualquier uso posterior.
