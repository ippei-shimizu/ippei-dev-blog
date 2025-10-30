interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'BUZZ BASE',
    description: `BUZZ BASEは、野球の個人の打撃・投手成績を記録することができる無料のアプリです。自分の成績を記録するだけでなく、友達とグループを作成し「ランキング形式」で個人成績を共有・比較することもできます。`,
    imgSrc: '/static/images/buzz-ogp.png',
    href: 'https://buzzbase.jp/',
  },
]

export default projectsData
