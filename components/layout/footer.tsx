import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Tooltip } from 'react-tippy';
import TooltipContent from '../tooltip/tooltip-content';

const Footer = () => {
  return (
    <footer className='p-4 mt-24 mb-6'>
      <div className='min-w-[180px] sm:min-w-[280px] mx-auto h-[68px] w-fit flex bg-brand-black space-x-8 text-white items-center rounded-2xl px-6 sm:px-16'>
        {linkSocial.map((item) => (
          <Tooltip
            key={item.name}
            title='Welcome to React'
            position='top'
            html={<TooltipContent type={item.name} />}
            className=''
            interactive
          >
            <div
              onClick={() => window.open(item.link, '_blank')}
              className='duration-100 text-4xl hover:text-[#FF55C9] cursor-ne-resize'
            >
              {item.logo}
            </div>
          </Tooltip>
        ))}
      </div>
    </footer>
  );
};

const linkSocial = [
  {
    name: 'github',
    link: 'https://github.com/davahamka',
    logo: <AiFillGithub />,
  },
  {
    name: 'email',
    link: 'mailto:davahamka512@gmail.com',
    logo: <AiOutlineMail />,
  },
  {
    name: 'linkedin',
    link: 'https://github.com/davahamka',
    logo: <AiFillLinkedin />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/dava770',
    logo: <AiOutlineTwitter />,
  },
];

export default Footer;
