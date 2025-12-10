# New Shipment Mobile App (React Native)

This is a React Native application for creating new shipments.

## Features

- Step-by-step wizard interface
- Shipment details entry
- Destination selection with country flags
- Shipping method selection (Ocean/Air)
- Address management
- Clean, modern UI matching the Figma design

## Installation

```bash
npm install
```

## Running the App

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Web (for testing)
```bash
npm run web
```

## Project Structure

```
mobile-app/
├── App.js              # Main application component
├── package.json        # Dependencies
├── app.json           # Expo configuration
└── README.md          # This file
```

## Design Implementation

This app implements the "New Shipment" mobile screen from the Figma design, featuring:
- Multi-step form with numbered steps
- Radio button selections
- Country flags for destination selection
- Shipping method icons
- Address dropdown
- Primary action button

## Technologies Used

- React Native
- Expo (for easy setup and testing)
- Native components (no external UI libraries)
