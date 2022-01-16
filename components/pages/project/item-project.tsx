import Image from 'next/image';
import { useMemo } from 'react';
import { AdditionalResult, BaseFrontmatter } from '~/types/frontmatter';
import TagProject from './tag-project';

type ItemProjectProps = {
  data: {
    stack: string;
    thumbnail: string;
  } & BaseFrontmatter &
    AdditionalResult;
};

const ItemProject = ({ data }: ItemProjectProps) => {
  const stacks = useMemo(() => data.stack.split(','), []);

  return (
    <div className='min-h-[340px] pb-2 cursor-pointer flex flex-col h-full rounded-lg border dark:border-[#383838] border-[#525252]'>
      <div className='relative flex items-end  w-full xl:h-[60%] rounded-t'>
        <Image
          src={`/assets/project/${data.thumbnail}`}
          alt={data.title}
          width='540px'
          height='202px'
          layout='intrinsic'
          className='rounded-t-lg h-full w-full z-[-1] top-0'
        />
        <div className='flex flex-wrap z-[2] absolute p-2'>
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
