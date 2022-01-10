import type { NextPage } from 'next'
import FeaturedProject from '~/components/pages/home/featured-project'
import useLoaded from '~/hooks/use-loaded'
import Hero from '../components/pages/home/hero'
import TechStack from '../components/pages/home/tech-stack'

const Home: NextPage = () => {


  return (
    <>
      <Hero />
      <FeaturedProject />
      <TechStack />
    </>
  )
}

export default Home
