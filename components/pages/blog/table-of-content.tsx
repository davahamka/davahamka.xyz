import clsx from 'clsx';
import { useRouter } from 'next/router';

import { ToCHeadingProps } from '~/types/mdx';

type TableOfContentProps = {
  tableContent?: ToCHeadingProps[];
};

const TableOfContent = ({ tableContent }: TableOfContentProps) => {
  const router = useRouter();

  return (
    <aside className='hidden lg:block relative overflow-y-auto '>
      <div className=' overflow-auto'>
        <div
          className='text-sm mb-2 flex items-center space-x-2 cursor-pointer'
          onClick={() => router.push('/blog')}
        >
          <a className='-mt-1'>←</a>
          <a>Blog</a>
        </div>
        <h3 className='font-bold text-lg'>Table of Content</h3>
        <div className='mt-2 ml-2'>
          {tableContent?.map((item) => (
            <p key={item.text}>
              <a
                href={`#${item.id}`}
                className={clsx(
                  { 'ml-4': item.level === 3 },
                  'mt-2 text-sm cursor-pointer',
                  'dark:text-[#494949] dark:hover:text-white'
                )}
              >
                {item.text}
              </a>
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TableOfContent;
