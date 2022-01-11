import Input from '~/components/form/input';

const Project = () => {
  return (
    <section>
      <div className='h-[100vh] pt-[80px] xl:w-[68rem] mx-auto'>
        <div className='mt-16'>
          <h1 className='text-4xl font-bold text-brand-gradient py-2'>
            Project
          </h1>
          <p>Search project by stack</p>
          <div className='mt-4 flex space-x-4'>
            <div>react</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
