# Proyecto CMC Blinds — CMC Ops Demo V1

Boceto funcional para **CMC Blinds & Designs** (Boca Raton, FL): automatizar el flujo de fábrica (portal → órdenes → producción → labels → instalación) e integrar **QuickBooks Online**.

## Demo pública

Cuando GitHub Pages esté activo:

**https://grupodiforma.github.io/proyecto-cmc-blinds/**

Local:

```bash
cd demo
python -m http.server 8766
```

→ http://127.0.0.1:8766/

## Datos DEMO incluidos

- Clientes finales (residencial / comercial / proyectos)
- Distribuidores B2B con saldo y portal
- Estimados y Sales Orders
- Work Orders con deducciones de corte
- Labels, agenda y técnicos de campo
- Sync simulado a QuickBooks

> Banner visible: *DEMO — Información ficticia para presentación*.

## Branding

Basado en [cmcblinds.com](https://cmcblinds.com/).

## Estructura

- `demo/` — fuente del boceto
- `docs/` — misma app (GitHub Pages)
- `research/` — informe comparativo y transcripción de llamada

Apoyo técnico de implementación: **Edwin Laverde**.
