interface SponseItem {
  time: number
  way: string
  sum: number
  desc?: string
}

export interface Sponser {
  name: string
  url?: string
  avatar?: string
  sponses: SponseItem[]
}

export default [] as Sponser[]