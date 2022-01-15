import Image from 'next/image';
import { useMemo } from 'react';
import { AdditionalResult, BaseFrontmatter } from '~/types/frontmatter';
import TagProject from './tag-project';

type ItemProjectProps = {
  data: {
    stack: string;
  } & BaseFrontmatter &
    AdditionalResult;
};

const ItemProject = ({ data }: ItemProjectProps) => {
  const stacks = useMemo(() => data.stack.split(','), []);

  return (
    <div className='min-h-[320px] cursor-pointer flex flex-col h-full rounded-lg border dark:border-[#383838] border-[#525252]'>
      <div className='p-2 flex items-end bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-[60%] rounded-t relative'>
        <Image
          src='/assets/project/web-mockup.png'
          alt='xx'
          layout='fill'
          className='rounded-t'
        />
        <div className='flex flex-wrap z-[2]'>
          {stacks.map((item) => (
            <TagProject key={item} label={item} />
          ))}
        </div>
      </div>
      <div className='px-3 py-1'>
        <p className='text-2xl my-2 font-bold'>{data.title}</p>
        <p className='text-sm'>{data.description}</p>
      </div>
    </div>
  );
};

export default ItemProject;
