import type { StarlightUserConfig } from '@astrojs/starlight/types'

// example purpose

const config: Pick<StarlightUserConfig, 'sidebar'> = {
  sidebar: [
    {
      label: 'Styling',
      translations: {
        fr: 'Mise en page',
      },
      items: [
        {
          label: 'Custom props',
          link: 'styling/custom-props',
          translations: {
            fr: 'Custom props',
          },
        },
      ],
    },
  ],
}

export const sidebar = config.sidebar
