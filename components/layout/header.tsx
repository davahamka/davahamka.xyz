import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import DarkToggle from '../svg/dark-toggle';
import LightToggle from '../svg/light-toggle';
import { changeThemeColor } from '~/utils/change-theme-color';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  // show indicator header base on path
  const pathNow = router.pathname.split('/')[1];

  return (
    <header className={clsx('fixed w-full backdrop-blur-sm z-20')}>
      <div className='xl:w-[68rem] h-[80px] mx-auto px-8 xl:px-0'>
        <nav className={clsx('flex justify-between items-center h-full py-4 ')}>
          <div>{theme}</div>

          <ul className='hidden sm:flex space-x-12'>
            {links.map((item) => (
              <li
                key={item.label}
                className={clsx(
                  'duration-150 dark:text-[#494949] text-[#525252] ease-out cursor-pointer dark:hover:text-white',
                  { 'dark:text-white text-[#262626]': pathNow === item.value }
                )}
                onClick={() => router.push(item.href)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div>
            <div
              className='cursor-pointer'
              onClick={() => changeThemeColor({ theme, setTheme })}
            >
              {theme === 'light' ? (
                <DarkToggle />
              ) : theme === 'dark' ? (
                <LightToggle />
              ) : (
                'toggle'
              )}
            </div>
          </div>
        </nav>
      </div>

      <hr className='xl:w-[68rem] mx-auto dark:border-[#383838] border-[#525252]' />
    </header>
  );
};

const links = [
  { href: '/', value: '', label: 'Home' },
  { href: '/blog', value: 'blog', label: 'Blog' },
  { href: '/project', value: 'project', label: 'Project' },
  { href: '/about', value: 'about', label: 'About' },
];

export default Header;
