import { defineConfig } from 'astro/config'
import markdoc from '@astrojs/markdoc';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    integrations: [markdoc()],
    adapter: cloudflare({
        prerenderEnvironment: 'node'
    }),
})