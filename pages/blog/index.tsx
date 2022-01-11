import clsx from 'clsx';
import { getAllPost } from 'lib/mdx';
import { sortByDate } from 'lib/mdx-client';
import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';
import Input from '~/components/form/input';
import ListBlog from '~/components/pages/blog/list-blog';
import Seo from '~/components/seo';
import useLoaded from '~/hooks/use-loaded';

export async function getStaticProps() {
  //  get files from blog directory
  const dataBlog = await getAllPost('blog');

  // sort to ASC
  const sortedBlog = sortByDate(dataBlog, 'blog');

  return {
    props: {
      sortedBlog,
    },
  };
}

const Index = ({
  sortedBlog,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [dataBlog, setDataBlog] = useState(sortedBlog);
  const loaded = useLoaded();

  const handleChange = (value: string) => {
    setDataBlog(
      sortedBlog.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Seo />
      <section className={clsx(loaded && 'fade-in-start')}>
        <div className='min-h-[100vh] pt-[80px] xl:w-[68rem] mx-auto'>
          <div className='mt-16 px-8 xl:px-0 '>
            <h1 className='text-4xl font-bold py-2' data-fade='1'>
              Blog
            </h1>
            <p data-fade='2'>Use the search below to filter by title.</p>
            <div className='mt-4 flex space-x-4' data-fade='3'>
              <Input
                placeholder='Search post..'
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
          </div>
          <ListBlog dataFadeStart='4' dataBlog={dataBlog} />
        </div>
      </section>
    </>
  );
};

export default Index;
