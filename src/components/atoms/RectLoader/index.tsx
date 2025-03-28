import ContentLoader from 'react-content-loader'
import type { IContentLoaderProps } from 'react-content-loader'

interface RectLoaderProps extends IContentLoaderProps {
  width: number
  height: number
}

/**
 * レクトローダー
 */
const RectLoader = ({ width, height, ...rest }: RectLoaderProps) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor="#f3e3e3"
    foregroundColor="#f8e8e8"
    {...rest}
  >
    <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
  </ContentLoader>
)

export default RectLoader