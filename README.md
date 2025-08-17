# Mario Trevizo Website

A modern and professional website for **Mario Trevizo - Concrete Specialist**, built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [TypeScript](https://www.typescriptlang.org/).  
The site showcases expertise in concrete solutions with an elegant and responsive design, optimized for performance and user experience.

---

## - Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/DavidNinoGalvis/mario-trevizo-website.git
cd mario-trevizo-website
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.  
The app will automatically update as you edit the files.

---

## - Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Maps**: [React Leaflet](https://react-leaflet.js.org/)

---

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages
│   └── page.tsx          # Main page
├── components/           # Reusable UI components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Testimonials/     # Testimonials carousel + cards
│   ├── ServiceArea.tsx   # Interactive map with Leaflet
│   └── Footer.tsx        # Footer with contact info
├── public/               # Static assets (images, icons, etc.)
├── styles/               # Global styles
└── README.md             # Project documentation
```

---

## - Features

- **Responsive design** across all devices
- **Smooth animations** using Framer Motion
- **Interactive map** highlighting Colorado-only service area
- **Testimonials carousel** to showcase client feedback
- **Optimized performance** with Next.js and Vercel
- **Modern branding** using Montserrat font for typography

---

## - Geographic Limitation

> ⚠️ Currently, services are **limited to the state of Colorado (USA)**.  
> The interactive map in the website highlights major cities served: Denver, Boulder, Colorado Springs, and Fort Collins.

---

## - Learn More

If you’re new to the stack, here are some useful resources:

- [Next.js Documentation](https://nextjs.org/docs) – learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – utility-first styling
- [Framer Motion](https://www.framer.com/motion/) – animation library for React
- [React Leaflet](https://react-leaflet.js.org/) – maps for React apps

---

## - Deploy on Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com).  
Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
