# Recipe Unit Converter

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg"/>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-green.svg"/>
  <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"/>
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
</p>

<p align="center">
  An elegant, modern, and highly accurate tool for all your kitchen measurement conversion needs. Built with React, TypeScript, and Tailwind CSS to provide a seamless, beautiful, and friendly user experience.
</p>

<p align="center">
  <strong><a href="https://doodax.com/tools/recipe-unit-converter/index.html" target="_blank">🚀 LIVE DEMO &raquo;</a></strong>
</p>

---

## 🌟 Overview

Say goodbye to kitchen conversion confusion! The **Recipe Unit Converter** is a free, professional-grade web application designed to provide instant and accurate conversions for grams, ounces, cups, milliliters, and more. 

Whether you're a professional chef adjusting a formula or a home cook tackling a new recipe, this tool helps you perfect your measurements with precision and confidence. The interface features a stunning, animated galaxy background to make your time in the kitchen a little more magical.

## ✨ Key Features

-   **🚀 Instant & Accurate Conversions**: Real-time results for Mass (grams, kg, oz, lbs) and Volume (ml, L, cups, tbsp, tsp).
-   **🌌 Immersive Galaxy UI**: A fully animated, multi-layered cosmic background with twinkling stars and floating nebula effects.
-   **⚖️ Smart Category Logic**: Intelligently handles conversion rules, preventing invalid mass-to-volume swaps without density context.
-   **📱 Fully Responsive**: Optimized for mobile phones, tablets, and desktops.
-   **📚 SEO Optimized**: Includes extensive JSON-LD schema, meta tags, and a comprehensive 3500+ word guide on measurement science.
-   **⚡ High Performance**: Built with Vite and React 18 for blazing-fast load times.
-   **🔒 Privacy Focused**: All calculations happen client-side. No data is ever sent to a server.

## 📂 Project Structure

```
recipe-unit-converter/
├── public/
│   ├── favicon.svg        # Site icon
│   ├── robots.txt         # Crawler instructions
│   └── sitemap.xml        # SEO site map
├── src/
│   ├── components/
│   │   ├── icons/         # SVG Icon components
│   │   ├── Layout.tsx     # Main wrapper with Background, Navbar, Footer
│   │   ├── Modal.tsx      # Reusable modal for info pages
│   │   ├── SeoArticle.tsx # Long-form SEO content component
│   │   └── UnitConverterTool.tsx # Core application logic UI
│   ├── lib/
│   │   ├── ConversionLogic.ts # Pure function math logic
│   │   └── UnitRatios.ts      # Unit definitions and base factors
│   ├── types.ts           # TypeScript interfaces
│   ├── App.tsx            # Main application entry
│   └── index.tsx          # React DOM root
├── index.html             # HTML entry point with SEO meta tags
├── package.json           # Dependencies and scripts
└── README.md              # Documentation
```

## 🛠️ Technology Stack

-   **Core**: React 18, TypeScript
-   **Styling**: Tailwind CSS (with Typography plugin)
-   **Icons**: Custom SVG Components
-   **Build Tool**: Vite

## 🚀 Getting Started

To get a local copy up and running:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/hsinidev/recipe-unit-converter.git
    cd recipe-unit-converter
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Start the development server:**
    ```sh
    npm run dev
    ```

4.  Open `http://localhost:5173` in your browser.

## ✍️ Author

Designed and developed with ❤️ by **HSINI MOHAMED**.

-   **GitHub**: [@hsinidev](https://github.com/hsinidev)
-   **Website**: [doodax.com](https://doodax.com)
-   **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---

&copy; 2023 Recipe Unit Converter. All Rights Reserved.
