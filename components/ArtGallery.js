import React from 'react'
import Image from 'next/image'
import { art } from '../public/images'

export default function ArtGallery() {
  const Peice = ({ src, label }) => {
    const adjustSrcSize = () => {
      if (src.height < 1000 && src.width < 1000) {
        return {
          height: src.height * 3,
          width: src.width * 3,
        }
      }
      if (src.width > 2500) {
        return {
          height: src.height * 5,
          width: src.width * 3,
        }
      } else {
        return {
          height: src.height,
          width: src.width,
        }
      }
    }

    const { height, width } = adjustSrcSize()

    return (
      <div className='art-gallery_image-container'>
        <Image
          className='art-gallery_image'
          src={src}
          objectFit='contain'
          layout='intrinsic'
          width={height}
          height={width}
          loading='eager'
        />
        <div
          className={src.width > 2500 ? 'art-gallery_caption-wide' : 'art-gallery_caption'}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </div>
    )
  }

  const allArt = art.map(({ src, label }) =>
    React.Children.toArray(<Peice src={src} label={label} />)
  )

  return (
    <div className='art-gallery_root'>
      <h1 className='art-gallery_heading'>Paintings</h1>
      {allArt}
    </div>
  )
}
