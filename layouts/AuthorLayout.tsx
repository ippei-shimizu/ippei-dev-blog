import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from 'next/link'
import { zennArticles } from '@/data/output/zenn'
import { qiitaArticles } from '@/data/output/qiita'
import { noteArticles } from '@/data/output/note'
import { speakerDecks } from '@/data/output/speaker-deck'
import { onesiteArticles } from '@/data/output/onesite'
import { productionAchievements } from '@/data/output/production_achievements'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, origin, email, twitter, github, zenn } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-2">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{origin}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="zenn" href={zenn} />
            </div>
          </div>
          <div className="mt-14">
            <div className="mb-5">
              {/* Zenn */}
              <h3 className="pt-4 pb-2 text-xl leading-8 font-bold tracking-tight">Zenn</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {zennArticles.map((item) => (
                  <Link
                    key={item.position}
                    href={item.url}
                    target="_blank"
                    className="rounded border border-gray-600"
                  >
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={200}
                      height={100}
                      className="h-auto w-full rounded"
                    />
                    <div className="p-2">
                      <p className="text-sm font-bold break-all">{item.title}</p>
                      <span className="text-xs text-gray-300">{item.publishedAt}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Qiita */}
            <div className="mb-5">
              <h3 className="pt-4 pb-2 text-xl leading-8 font-bold tracking-tight">Qiita</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {qiitaArticles.map((item) => (
                  <Link
                    key={item.position}
                    href={item.url}
                    target="_blank"
                    className="rounded border border-gray-600"
                  >
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={200}
                      height={100}
                      className="h-auto w-full rounded"
                    />
                    <div className="p-2">
                      <p className="text-sm font-bold break-all">{item.title}</p>
                      <span className="text-xs text-gray-300">{item.publishedAt}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* note */}
            <div className="mb-5">
              <h3 className="pt-4 pb-2 text-xl leading-8 font-bold tracking-tight">note</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {noteArticles.map((item) => (
                  <Link
                    key={item.position}
                    href={item.url}
                    target="_blank"
                    className="rounded border border-gray-600"
                  >
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={200}
                      height={100}
                      className="h-auto w-full rounded"
                    />
                    <div className="p-2">
                      <p className="text-sm font-bold break-all">{item.title}</p>
                      <span className="text-xs text-gray-300">{item.publishedAt}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* speaker deck */}
            <div className="mb-5">
              <h3 className="pt-4 pb-2 text-xl leading-8 font-bold tracking-tight">Speaker Deck</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {speakerDecks.map((item) => (
                  <Link
                    key={item.position}
                    href={item.url}
                    target="_blank"
                    className="rounded border border-gray-600"
                  >
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={200}
                      height={100}
                      className="h-auto w-full rounded"
                    />
                    <div className="p-2">
                      <p className="text-sm font-bold break-all">{item.title}</p>
                      <span className="text-xs text-gray-300">{item.publishedAt}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* onesite */}
            <div className="mb-5">
              <h3 className="pt-4 pb-2 text-xl leading-8 font-bold tracking-tight">OneSite</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {onesiteArticles.map((item) => (
                  <Link
                    key={item.position}
                    href={item.url}
                    target="_blank"
                    className="rounded border border-gray-600"
                  >
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={200}
                      height={100}
                      className="h-auto w-full rounded"
                    />
                    <div className="p-2">
                      <p className="text-sm font-bold break-all">{item.title}</p>
                      <span className="text-xs text-gray-300">{item.publishedAt}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* productionAchievements */}
            <div className="mb-5">
              <h3 className="pt-4 pb-2 text-xl leading-8 font-bold tracking-tight">制作実績</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {productionAchievements.map((item) => (
                  <Link
                    key={item.position}
                    href={item.url}
                    target="_blank"
                    className="rounded border border-gray-600"
                  >
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={200}
                      height={100}
                      className="h-auto w-full rounded"
                    />
                    <div className="p-2">
                      <p className="text-sm font-bold break-all">{item.title}</p>
                      <span className="text-xs text-gray-300">{item.publishedAt}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
