import Link from 'next/link';
import FeaturedCard from './featured-card';

const FeaturedProject = () => {
  return (
    <section>
      <div className='px-8 xl:px-0 pt-4 xl:w-[68rem] mx-auto'>
        <div className='flex justify-between items-end'>
          <h2 className='text-3xl md:text-4xl font-bold'>Featured Project</h2>
          <Link href='/project'>Read all post</Link>
        </div>
        <div className='mt-12 grid md:h-[237px] md:grid-cols-12 gap-6'>
          <div className='col-span-4 md:col-span-3'>
            <FeaturedCard />
          </div>
          <div className='col-span-4 md:col-span-6'>
            <FeaturedCard position='center' />
          </div>
          <div className='col-span-4 md:col-span-3'>
            <FeaturedCard position='right' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
