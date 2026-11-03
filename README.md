# StockFlow

StockFlow is a responsive inventory-management portfolio demo built with React, TypeScript, and Vite. It demonstrates everyday small-business workflows for product catalogs, stock movements, suppliers, categories, and inventory reporting.

> **Demo notice:** Data is stored in the current browser using LocalStorage. This project does not include a production backend, authentication, authorization, cloud backup, or multi-user synchronization. Do not use it as a production system for critical inventory records.

## Features

- Dashboard metrics calculated from current products and movements.
- Product create, edit, delete, search, and category/stock filters.
- Category creation and dependency-safe deletion.
- Supplier creation, search, and dependency-safe deletion.
- Stock-in and stock-out transactions with positive-quantity validation.
- Stock-out protection against negative inventory.
- Movement history retains product name and SKU snapshots.
- Inventory valuation, retail value, potential margin, and low-stock reports.
- CSV export for inventory and low-stock reports.
- Responsive desktop, tablet, and mobile layout.
- Seed data and reset-demo-data action.

## Technology

- React + TypeScript
- Vite
- React Router dependency included for future route expansion
- Tailwind CSS is not used in this build; styling is implemented in a small maintainable CSS layer.
- Lucide React icons
- Recharts
- React Hook Form and Zod dependencies included for future form schema expansion; current forms use native browser controls and explicit validation.
- LocalStorage persistence

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Verify and build

```bash
npm run typecheck
npm run build
npm run preview
```

## Data model

- `Product`: identity, SKU, category, supplier, cost/selling price, stock, minimum stock, unit, and creation date.
- `Category`: stable ID and unique display name.
- `Supplier`: company and contact information.
- `Movement`: immutable transaction snapshot containing product name/SKU, type, quantity, previous/new stock, reference, date, notes, and optional supplier.
- `Store`: collection of products, categories, suppliers, and movements.

## Business rules

- Inventory value = sum of `stock × costPrice`.
- Low stock = `stock <= minStock`; out of stock = `stock === 0`.
- Stock in increases available stock by the entered quantity.
- Stock out decreases available stock and is rejected if it would make stock negative.
- SKU values must be unique, case-insensitively.
- Product cost, selling price, stock, and minimum stock cannot be negative.
- A category cannot be deleted while assigned to a product; a supplier cannot be deleted while assigned to a product.

## Project structure

```text
src/
  App.tsx              Main application shell and feature views
  main.tsx             React entry point
  styles.css           Responsive visual system
  data/seed.ts         Consistent demo dataset
  lib/store.ts         LocalStorage and inventory business rules
  types/index.ts       Shared TypeScript models
```

## Demo usage

1. Open Products and add or edit a product.
2. Use Stock In to receive inventory and Stock Out to dispatch it.
3. Check Dashboard for updated KPIs and low-stock alerts.
4. Review Movements for the transaction audit trail.
5. Open Reports to export CSV files.
6. Use Reset demo data in the sidebar to restore the original seed dataset.

## Known limitations

- LocalStorage is browser/device-specific and can be cleared by the user.
- There is no backend, login, permissions, server-side validation, or concurrent-user support.
- The current demo supports one currency (USD) and a single workspace.
- Category and supplier editing, date-range report filtering, pagination, and automated test suites are not implemented in this first complete demo build.
- The visual movement chart summarizes the last seven days of recorded transactions; it is not a forecast.
- Native confirmation dialogs are used for destructive actions.

## Production considerations

Before real deployment for business operations, add a secure API and database, authentication/authorization, audit logging, server-side transaction validation, automated unit/integration tests, backups, and deployment monitoring. Review all business rules with the intended operator workflow.
