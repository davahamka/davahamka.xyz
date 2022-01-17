import Link from 'next/link';
import { AdditionalResult, BaseFrontmatter } from '~/types/frontmatter';
import FeaturedCard from './featured-card';

type FeaturedProjectProps = {
  dataFeatured: (BaseFrontmatter & AdditionalResult)[];
};

const FeaturedProject = ({ dataFeatured }: FeaturedProjectProps) => {
  return (
    <section>
      <div className='px-8 xl:px-0 pt-4 xl:w-[68rem] mx-auto'>
        <div className='flex justify-between items-end'>
          <h2 className='text-3xl md:text-4xl font-bold'>Featured Project</h2>
        </div>
        <div className='mt-12 grid md:h-[237px] md:grid-cols-12 gap-6'>
          {dataFeatured.map((item, i) => {
            if (i % 2 == 1) {
              return (
                <div key={item.slug} className='col-span-4 md:col-span-6'>
                  <FeaturedCard position='center' data={item} />
                </div>
              );
            }
            return (
              <div key={item.slug} className='col-span-4 md:col-span-3'>
                <FeaturedCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
