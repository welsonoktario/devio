import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
// import { Component } from 'react'

export const SectionContentHalfGraphic = ({
  imageSrc,
  header,
  description,
  reverse,
  children,
}: {
  imageSrc: StaticImageData
  header: string
  description: string
  reverse?: boolean
  children?: ReactNode
}) => {
  // Posisi grafiknya
  const imagePosition = !reverse ? "pl-0 md:pl-16 lg:pl-24 xl:pl-40" :
    "pr-0 md:pr-16 lg:pr-24 xl:pr-40"

  return (
    <div className={'flex py-1 md:py-5 h-auto w-full ' + (reverse && 'flex-row-reverse')}>
      {/* <div className="h-full overflow-hidden bg-transparent md:w-1/2 ml-0 md:ml-20 lg:ml-40"> */}
      <div className={"h-full overflow-hidden bg-transparent md:w-1/2 " + imagePosition}>
        <Image src={imageSrc} alt="image" className='' objectFit='contain' layout="responsive"></Image>
      </div>
      <div className="flex flex-col justify-center py-2 md:w-1/2 px-10 sm:px-16 lg:px-24 xl:px-40">
        <h3 className="pb-2 text-2xl lg:text-3xl xl:text-4xl text-primary">{header ?? 'Header'}</h3>
        <p className="mt-3 text-lg lg:text-xl xl:text-2xl font-light leading-snug text-primary">
          {description ?? 'Description goes here'}
        </p>
        {children ? <span className='mt-3'>{children}</span> : ""}
      </div>
    </div>
  )
}
