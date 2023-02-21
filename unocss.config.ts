import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-brand-primary text-white cursor-pointer hover:bg-brand-primary disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-brand-primary'],
    ['flex-c', 'flex items-center justify-center'],
    ['cp', 'cursor-pointer'],
    ['alink', 'border-b border-b-dashed border-b-transparent hover:border-b-brand-primary  transition duration-300 cp hover:text-brand-primary'],
  ],
  theme: {
    colors: {
      brand: {
        primary: '#5b86e5', // used like bg-brand-primary
        light: '#80eec0', // used like bg-brand-light
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
