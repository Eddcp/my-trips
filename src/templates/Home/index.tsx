import { NextSeo } from 'next-seo'

import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show the places that I've visited in this big world"
        canonical="https://my-trips.edupaivadev.com"
        openGraph={{
          url: 'https://my-trips.edupaivadev.com',
          title: 'My Trips',
          description: `A simple project to show the places that I've visited in this big world`,
          images: [
            {
              url: 'https://my-trips.edupaivadev.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
