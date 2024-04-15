import type { StarlightUserConfig } from '@astrojs/starlight/types'

const config: Pick<StarlightUserConfig, 'components'> = {
  components: {
    Banner: './src/starlight/components/Banner.astro',
    ContentPanel: './src/starlight/components/ContentPanel.astro',
    Footer: './src/starlight/components/Footer.astro',
    Header: './src/starlight/components/Header.astro',
    MarkdownContent: './src/starlight/components/MarkdownContent.astro',
    PageFrame: './src/starlight/components/PageFrame.astro',
    PageSidebar: './src/starlight/components/PageSidebar.astro',
    Search: './src/starlight/components/Search.astro',
    Sidebar: './src/starlight/components/Sidebar.astro',
    TwoColumnContent: './src/starlight/components/TwoColumnContent.astro',
  },
}

export const components = config.components
