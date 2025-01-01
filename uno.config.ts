import {theme} from 'unocss/preset-wind'
import {presetWind, transformerDirectives, defineConfig} from 'unocss'
import {presetRadixColors} from 'unocss-preset-radix-colors'

type DefaultFontFamily = Record<'sans' | 'serif' | 'mono', string>
const systemFonts = theme.fontFamily as DefaultFontFamily
const fontFamily = {
  'system-sans': systemFonts.sans,
  'system-serif': systemFonts.serif,
  'system-mono': systemFonts.mono,
  sans: ["'Inter Variable'", "'Inter Fallback'", systemFonts.sans].join(', '),
  serif: ["'Source Serif 4 Variable'", "'Source Serif 4 Fallback'", systemFonts.serif].join(', '),
  mono: ["'Commit Mono'", "'Commit Mono Fallback'", systemFonts.mono].join(', '),
}

export default defineConfig({
  theme: {
    fontFamily,
  },
  transformers: [transformerDirectives()],
  presets: [
    presetWind({dark: 'class'}),
    presetRadixColors({
      prefix: '',
      lightSelector: '.light',
      darkSelector: '.dark',
      colors: ['gray'],
    }),
  ],
})
