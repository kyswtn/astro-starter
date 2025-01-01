import path from 'node:path'
import fs from 'node:fs/promises'
import {ImageResponse} from '@vercel/og'

export const getOGImage = async (Template: () => Promise<React.ReactElement>) => {
  const inter = await fs.readFile(path.resolve('./og-assets/InterDisplay-400-Regular.ttf'))
  const interBold = await fs.readFile(path.resolve('./og-assets/InterDisplay-700-Regular.ttf'))
  const sourceSerif = await fs.readFile(path.resolve('./og-assets/SourceSerif4-400-Regular.ttf'))
  const commitMono = await fs.readFile(path.resolve('./og-assets/CommitMono-400-Regular.ttf'))

  return new ImageResponse(await Template(), {
    width: 1200,
    height: 630,
    emoji: 'fluent',
    fonts: [
      {
        name: 'Inter',
        weight: 400,
        data: inter,
      },
      {
        name: 'Inter',
        weight: 700,
        data: interBold,
      },
      {
        name: 'Source Serif 4',
        data: sourceSerif,
      },
      {
        name: 'Commit Mono',
        data: commitMono,
      },
    ],
  })
}
