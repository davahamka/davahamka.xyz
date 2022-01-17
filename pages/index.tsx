import { getTechStacks } from 'lib/graphcms';
import { getFeatured } from 'lib/mdx';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import FeaturedProject from '~/components/pages/home/featured-project';
import Seo from '~/components/seo';
import { TechStacksObj } from '~/types/graphcms';
import Hero from '../components/pages/home/hero';
import TechStack from '../components/pages/home/tech-stack';

export const getStaticProps = async () => {
  const dataTechStacks = await getTechStacks();
  const dataFeatured = await getFeatured('project');

  return {
    props: {
      dataTechStacks,
      dataFeatured,
    },
    revalidate: 60,
  };
};

const Home = ({
  dataTechStacks,
  dataFeatured,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo />
      <Hero />
      <FeaturedProject dataFeatured={dataFeatured} />
      <TechStack dataTechStacks={dataTechStacks} />
    </>
  );
};

export default Home;
