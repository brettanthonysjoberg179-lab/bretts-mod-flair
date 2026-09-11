# Brett's Mod Flair

Flair management tool — assign, batch update, auto-flair by keyword.

## Features

- Assign user flair and post flair
- Batch update flairs across multiple users
- Auto-flair posts based on keyword matching
- Flair templates and presets

## Installation

1. Go to [Reddit's Developer Platform](https://developers.reddit.com/)
2. Create a new app and upload this package
3. Install on your subreddit

## Development

```bash
npm install
npm run dev
```

## Architecture

```
bretts-mod-flair/
├── devvit.json          # App config, triggers, permissions
├── package.json         # Dependencies (@devvit/* ^0.14.3)
├── server/
│   └── index.js         # Triggers: onAppInstall
└── client/
    └── App.jsx          # React flair management interface
```

## Triggers

| Trigger | Description |
|---------|-------------|
| `onAppInstall` | Fires when app is installed |

## Permissions

- `read` — Read subreddit content
- `submit` — Submit posts and comments
- `modposts` — Moderate posts and comments

## License

MIT
