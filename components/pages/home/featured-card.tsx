import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AdditionalResult, BaseFrontmatter } from '~/types/frontmatter';

type CardProps = {
  position?: 'left' | 'center' | 'right';
  data: BaseFrontmatter & AdditionalResult;
};

const FeaturedCard = ({ position = 'left', data }: CardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/project')}
      className={clsx(
        'cursor-pointer duration-200 hover:scale-[1.03] h-full rounded-lg  p-[6px] bg-gradient-to-r ',
        { 'from-[#eec1ff] to-[#3A41A4]': position === 'left' },
        { 'from-[#9333EA] to-[#6EE7B7]': position === 'center' },
        { 'from-[#9E7CFF] to-[#FF9AC4]': position === 'right' }
      )}
    >
      <div className='py-4 px-6 bg-[#f5f5f5] dark:bg-brand-black h-full rounded-lg flex flex-col justify-between'>
        <div>{data.description}</div>
        <div className='flex justify-between'>
          <Link href='/project' passHref>
            <a className='font-bold'>Read more</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
