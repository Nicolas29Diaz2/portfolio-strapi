# 3D Portfolio CMS

A Strapi backend for managing the 3D portfolio content modules: projects, skills, about, and products.

## 🚀 Quick Start / Setup

```bash
git clone <repo-url>
cd portfolio-strapi
npm install
npm run data:import
```

> **Warning:** You MUST run `npm run data:import` to seed the preloaded data and content into the CMS before starting the server.

```bash
npm run develop
```

## 📂 Content Structure (Content Types)

| Type | Name | Purpose |
| --- | --- | --- |
| Collection Type | `projects` | Stores portfolio items and 3D project entries. |
| Collection Type | `skills` | Stores skill records and expertise details. |
| Single Type | `about` | Stores the About Me section content. |
| Collection Type | `products` | Stores product-related content and listings. |

## 🛠️ Available Scripts

- `npm run develop` — Start Strapi in development mode with auto-reload.
- `npm run start` — Start Strapi in production-like mode.
- `npm run build` — Build the Strapi admin panel.
- `npm run data:export` — Export CMS data to the local `backup` directory.
- `npm run data:import` — Import the seeded data and content into the CMS.

## 🔒 Development Notes (Database & Storage)

- Local development uses SQLite stored at `.tmp/data.db`.
- Uploaded media and assets are stored in `public/uploads/`.
- For external connections, copy the API key from the API Tokens configuration and use a `Read Only` token.
