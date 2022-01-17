/* eslint-disable react/no-unescaped-entities */
import clsx from 'clsx';
import Image from 'next/image';
import Seo from '~/components/seo';
import useLoaded from '~/hooks/use-loaded';

const About = () => {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo title='About' />

      <section className={clsx(isLoaded && 'fade-in-start')}>
        <div className='px-8 xl:px-0 min-h-[100vh] pt-[80px] xl:w-[68rem] mx-auto'>
          <div className='mt-20'>
            <h2 className='text-3xl font-bold' data-fade='1'>
              About
            </h2>
            <h1
              className='text-4xl font-bold text-brand-gradient -mt-2 py-2'
              data-fade='2'
            >
              Dava Hamka
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row-reverse items-center  mt-6 space-y-12 lg:space-y-0 space-x-4'>
            <div className='w-1/2 flex justify-center text-center mx-2'>
              <Image
                src='/assets/dava-v1.jpg'
                alt=''
                width='300px'
                height='400px'
                className='rounded text-center lg:w-[100%]'
                data-fade='3'
              />
            </div>
            <div
              className='text-lg flex flex-col space-y-4 -mt-10'
              data-fade='3'
            >
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className=''>Hello! my name Dava Mohammad Hamka.</p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className=''>
                  I am studying Informatics Engineering with a speciality in
                  interactive media at Brawijaya University. I'm currently a
                  part of BCC as a staff of frontend depatment.
                </p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className='col-span-11'>
                  Started learning web development when i entered the college
                  within watch a bunch of youtube videos.
                </p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className='max-[490px]'>
                  I’m playing video games with my friends, drooling over game
                  accessories and keyboards, watch anime and love sci-fi genre,
                  and go out to see incredible view of nature.
                </p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className='col-span-11'>Yogyakarta, 🇮🇩</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
