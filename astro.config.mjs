import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://sekkolab-ia.vercel.app',
    integrations: [
        tailwind({ applyBaseStyles: false }),
        mdx(),
        sitemap()
    ],
    markdown: {
        shikiConfig: { theme: 'dracula' }
    }
});