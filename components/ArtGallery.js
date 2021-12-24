import React from 'react'
import Image from 'next/image'
import { art } from '../public/images'

export default function ArtGallery() {
  const Peice = ({ src }) => {
    const adjustSrcSize = () => {
      if (src.height < 1000 && src.width < 1000) {
        return {
          height: src.height * 3,
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
        />
      </div>
    )
  }

  const allArt = art.map((src) => React.Children.toArray(<Peice src={src} />))

  return <div className='art-gallery_root'>{allArt}</div>
}
