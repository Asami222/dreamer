

export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {

  const res = await fetch(resource, init)
  if (!res.ok) {
    const errorRes = await res.json()
    const error = new Error(
      errorRes.message ?? 'APIリクエスト中にエラーが発生しました',
    )

    throw error
  }

  return res.json()
}

export const fetcher2 = async (
  url: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const res = await fetch(url);
  const data = await res.json();
  if (res.status >= 400) return { error: data.message };
  return { data };
}

export const formatDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  //const day = now.getDay();
  //const week = ["日", "月", "火", "水", "木", "金", "土"][day];

  return `${year}年${month}月${date}日`;
}; 

export const imageData1 = [
  '/images/icecream1.webp',
  '/images/macaron1.webp',
  '/images/macaron-red1.webp',
  '/images/macaron-pink1.webp',
  '/images/icecream02.webp',
  '/images/strawberry1.webp',
]

export const imageData2 = [
  '/images/bear01.webp',
  '/images/bear02.webp',
  '/images/flower1.webp',
]

export const imageData3 = [
  '/images/balloon1.webp',
  '/images/rainbow1.webp',
  '/images/shootingstar1.webp',
  '/images/signinImg.webp',
  '/images/signinImg2.webp',
]

export const chooseImage = (image: string[]) => {
  const arrayIndex = Math.floor(Math.random() * image.length);
  return image[arrayIndex];
}