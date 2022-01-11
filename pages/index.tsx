import { getTechStacks } from 'lib/graphcms';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import FeaturedProject from '~/components/pages/home/featured-project';
import Seo from '~/components/seo';
import { TechStacksObj } from '~/types/graphcms';
import Hero from '../components/pages/home/hero';
import TechStack from '../components/pages/home/tech-stack';

export const getStaticProps = async () => {
  const dataTechStacks = await getTechStacks();
  return {
    props: {
      dataTechStacks,
    },
  };
};

const Home = ({
  dataTechStacks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo />
      <Hero />
      <FeaturedProject />
      <TechStack dataTechStacks={dataTechStacks} />
    </>
  );
};

export default Home;
