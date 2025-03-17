import siteImg from "../../public/images/ogp.png";

export const SITE_TITLE = 'Dreamer'
export const SITE_DESCRIPTION = '夢や目標を叶えるためのTodoを達成すると星がもらえ、ご褒美をGetできるアプリです'
export const SITE_NAME = 'Dreamer'
export const SITE_URL = 'https://dreamer-six.vercel.app'

const img = siteImg.src
export const SITE_IMAGE_WIDTH = (siteImg.width).toString()
export const SITE_IMAGE_HEIGHT = (siteImg.height).toString()
export const SITE_IMAGE = img.startsWith('https') ? img : `${SITE_URL}${img}`

