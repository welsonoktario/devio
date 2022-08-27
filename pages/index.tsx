import { Ending } from '@components/sections/ending'
import { Home } from '@components/sections/home'
import { HowDoWeWork } from '@components/sections/how-do-we-work'
import { Platforms } from '@components/sections/platforms'
import { Showcase } from '@components/sections/showcase'
import { Services } from 'components/sections/services'
import { WhyUs } from 'components/sections/why-us'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <>
      <Home />
      <Services />
      <Platforms />
      <WhyUs />
      <HowDoWeWork />
      <Showcase />
      <Ending />
    </>
  )
}

export default Index
