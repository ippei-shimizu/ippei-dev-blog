import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Ippei.dev'

  // 日本語フォントをファイルシステムから読み込み
  const fontPath = join(process.cwd(), 'public', 'fonts', 'NotoSansJP-Bold.woff')
  const fontData = await readFile(fontPath)

  // 背景画像をファイルシステムから読み込み
  const bgImagePath = join(process.cwd(), 'public', 'static', 'images', 'ogp-bg.png')
  const bgImageBuffer = await readFile(bgImagePath)
  const bgImageBase64 = `data:image/png;base64,${bgImageBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* 背景画像 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgImageBase64}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* タイトルテキスト */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 60px',
            maxWidth: '90%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: title.length > 30 ? 48 : 56,
              fontWeight: 700,
              color: '#ffffff',
              textAlign: 'left',
              lineHeight: 1.4,
              margin: 0,
              fontFamily: 'Noto Sans JP',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
