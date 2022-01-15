import { ReadTimeResults } from 'reading-time';

import { ChooseFrontmatter } from '~/types/frontmatter';
import ItemBlog from './item-blog';

type DataBlog = ChooseFrontmatter<'blog'> & {
  slug: string;
  readingTime: ReadTimeResults;
};

type ListBlogProps = {
  dataFadeStart: string;
  dataBlog: DataBlog[];
};

const ListBlog = ({ dataFadeStart, dataBlog }: ListBlogProps) => {
  return (
    <>
      <div className='my-8 px-8 xl:px-0'>
        <h2 className='text-3xl font-bold' data-fade={dataFadeStart}>
          Newest Post
        </h2>
      </div>
      <ul
        className='flex flex-col space-y-6 px-8 xl:px-0 '
        data-fade={(+dataFadeStart + 1).toString()}
      >
        {dataBlog.map((item, i) => (
          <ItemBlog key={item.slug} data={item} />
        ))}
      </ul>
    </>
  );
};

export default ListBlog;
