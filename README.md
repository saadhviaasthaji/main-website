# Saadhvi Aastha Ji & Aastha Sevabhavi Sanstha Website

Welcome to the official repository for the **Saadhvi Aastha Ji** and **Aastha Sevabhavi Sanstha** web platform. This project serves as a digital home for spiritual discourses, initiatives, bookings, and the philanthropic activities of the Sanstha (including the Roti Bank initiative).

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Carousels**: [Swiper](https://swiperjs.com/)
- **Icons**: `lucide-react` & `react-icons`

---

## 📂 Code Structure & Architecture

The project is structured to keep the main website (Saadhvi Aastha Ji) and the non-profit organization (Aastha Sevabhavi Sanstha) cleanly separated while sharing core UI components.

```text
C:\USERS\RISING\DESKTOP\SAJ\SRC
├── assets/          # Internal JS/CSS assets (if any)
├── components/      # React Components
│   ├── home/        # Components for the main landing page
│   ├── layout/      # Shared layout components (Navbars, Footers, PageWrappers)
│   ├── sanstha/     # Components specific to the Aastha Sevabhavi Sanstha site
│   │   ├── about/   # Sanstha About page sections
│   │   └── home/    # Sanstha landing page sections
│   └── ui/          # Reusable, atomic UI components (Buttons, Modals, Animations)
├── context/         # React Context Providers (e.g., LanguageContext for localization)
├── data/            # Static data configurations (e.g., leadership.js, translations.js)
├── pages/           # High-level page components (Routing targets)
│   └── sanstha/     # Page components for the Sanstha routes
└── index.css        # Global Tailwind and custom CSS styles
```

---

## 🖼️ Public Assets Graph

All static assets, media, and images are strictly managed inside the `public/assets` directory. This ensures they are served optimally and avoids bloating the JavaScript bundle.

```text
C:\USERS\RISING\DESKTOP\SAJ\PUBLIC\ASSETS
├── fonts/           # Custom local fonts
├── pages/           # Page-specific imagery
│   ├── about/       # Images for the main About page
│   ├── background/  # Global background textures (e.g., mandalas)
│   ├── events/      # Event-specific media
│   ├── home/        # Main landing page media
│   │   ├── bio/
│   │   ├── empowering/
│   │   ├── hero/
│   │   ├── quotes/
│   │   └── sanstha/
│   └── sanstha/     # Media specific to the Sanstha section
│       ├── home/
│       │   ├── hero/
│       │   ├── initiative/
│       │   └── org/
│       └── members/ # Leadership and core team portraits
└── shared/
    └── logos/       # Brand logos and favicons
```

---

## ⚙️ Key Features & Developer Notes

### 1. Localization & Translations
The application supports multi-language (English/Hindi) rendering out of the box. 
- **Core File**: `src/data/translations.js`
- **Mechanism**: The `useLanguage` context hook provides the current language state. The `AnimatedText` component maps keys from `translations.js` to render text that animates upon language toggle.

### 2. The Sanstha Split
The application has a "site-within-a-site" architecture.
- **Main Site (`/`)**: Focuses on Saadhvi Aastha Ji's spiritual journey, bookings, and discourses. Uses a lighter aesthetic.
- **Sanstha Site (`/sanstha`)**: Focuses on the philanthropic organization, NGO works, the Roti Bank, and donations. Uses a slightly more robust aesthetic.
- **Navbars/Footers**: There are distinct `Navbar.jsx`/`Footer.jsx` and `SansthaNavbar.jsx`/`SansthaFooter.jsx` to keep navigation contexts separate.

### 3. Performance & Lazy Loading
- Heavy components and secondary pages are loaded asynchronously using React's `lazy` and `Suspense` in `App.jsx`.
- The bundle is fully optimized for production, with unused experimental UI elements purged to keep the codebase lean.

---

## 💻 Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/saadhviaasthaji/main-website.git
cd saj
```

**2. Install dependencies**
```bash
npm install
```

**3. Run the development server**
```bash
npm run dev
```

**4. Build for Production**
```bash
npm run build
```

This will output the optimized static files into the `dist` directory, ready to be deployed.
