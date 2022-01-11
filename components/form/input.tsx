import clsx from 'clsx';

const Input = ({
  className,
  ...restProps
}: React.ComponentPropsWithoutRef<'input'>) => {
  return (
    <input
      className={clsx(
        className,
        'w-full rounded py-2 px-3 outline-[#FF55C9] dark:bg-[#050505] bg-brand-white border border-[#494949]'
      )}
      {...restProps}
    />
  );
};

export default Input;
