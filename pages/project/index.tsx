import clsx from 'clsx';
import { getAllPost } from 'lib/mdx';
import { sortByDate } from 'lib/mdx-client';
import { InferGetStaticPropsType } from 'next';
import ListProject from '~/components/pages/project/list-project';
import Seo from '~/components/seo';
import useLoaded from '~/hooks/use-loaded';
import { AdditionalResult, BaseFrontmatter } from '~/types/frontmatter';

export async function getStaticProps() {
  //  get files from blog directory
  const dataProject = await getAllPost('project');

  // sort to ASC
  const sortedProject = sortByDate(dataProject, 'project');

  return {
    props: {
      sortedProject,
    },
  };
}

const Project = ({
  sortedProject,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const loaded = useLoaded();

  return (
    <>
      <Seo title='Project' />
      <section className={clsx(loaded && 'fade-in-start')}>
        <div className='min-h-[100vh] pt-[80px] xl:w-[68rem] mx-auto'>
          <div className='mt-16'>
            <h1 className='text-4xl font-bold py-2' data-fade='1'>
              Project
            </h1>
            <p data-fade='2'>Search project by stack</p>
            <ListProject
              sortedProject={
                sortedProject as ({
                  stack: string;
                } & BaseFrontmatter &
                  AdditionalResult)[]
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
