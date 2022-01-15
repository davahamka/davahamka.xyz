import { BsChevronUp } from 'react-icons/bs';

const FloatingButton = () => {
  return (
    <button
      className='fixed  right-4 bottom-4 flex justify-center items-center md:right-8 md:bottom-8 z-10  dark:bg-brand-black  border-2 shadow-lg hover:shadow-sm dark:text-brand-white w-14 h-14 rounded-full'
      onClick={() => window.scrollTo(0, 0)}
    >
      <BsChevronUp className='font-bold' fontSize='1.6em' fontWeight='700' />
    </button>
  );
};

export default FloatingButton;
