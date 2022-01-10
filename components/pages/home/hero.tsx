/* eslint-disable react/no-unescaped-entities */
import clsx from 'clsx';
import HeroBlurDark from '~/components/svg/hero-blur-dark';
import useLoaded from '~/hooks/use-loaded';
import useWindowSize from '~/hooks/use-window-size';

const Hero = () => {
  const isLoaded = useLoaded();
  const size = useWindowSize();

  console.log(size);

  return (
    <section className={clsx(isLoaded && 'fade-in-start')}>
      <div className='h-[100vh] pt-[40px] xl:w-[68rem] mx-auto'>
        <div className='px-8 xl:px-0 h-full flex flex-col justify-center items-center'>
          <div
            className='relative h-[219px] sm:h-[419px] w-[292px] sm:w-[472px]'
            data-fade='1'
          >
            <div className='absolute sm:w-[472px]'>
              <HeroBlurDark />
            </div>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <div className='bg-[#FECACA] dark:bg-[#050505] w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full'></div>
            </div>
            <div className='absolute top-[64%] left-[62%]'>
              <div className='bg-[#FF00AF] dark:bg-[#590046] w-[52px] h-[52px] rounded-full'></div>
            </div>
          </div>
          <div className='text-center'>
            <p className='mb-2' data-fade='2'>
              Hello there, I'm
            </p>
            <h1
              data-fade='3'
              className='text-4xl lg:text-[4.5rem] py-6 text-transparent mb-4 font-extrabold bg-gradient-to-br bg-clip-text from-[#FF00AF] to-[#FF55C9]'
            >
              @davahamka
            </h1>
          </div>
          <div>
            <p data-fade='4' className='text-center lg:w-[480px] text-lg'>
              An explorer in <i className='cursor-pointer'>web development</i>{' '}
              and <i>React</i>-based ecosystems. Writes about technology,
              software engineering and web development.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
