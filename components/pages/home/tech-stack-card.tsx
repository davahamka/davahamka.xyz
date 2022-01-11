import Image from 'next/image';

export type CardProps = {
  img?: string;
  label?: string;
};

const TechStackCard = ({ label, img }: CardProps) => {
  return (
    <div className='h-[100px] border cursor-pointer hover:scale-105 duration-150 transition border-[#DFDFDF] dark:border-[#404040] rounded-lg p-2'>
      <div className='flex flex-row items-center h-full px-4 space-x-2'>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <Image src={img} width='54' height='54' alt={label} />
        </div>
        <div className='sm:w-1/2 hidden lg:flex'>{label}</div>
      </div>
    </div>
  );
};

export default TechStackCard;
