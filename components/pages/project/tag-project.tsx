type TagProjectProps = {
  label: string;
};

const TagProject = ({ label }: TagProjectProps) => {
  return (
    <div className='text-xs text-brand-white bg-brand-black/40 px-3 py-1 rounded-xl mx-1 my-1'>
      {label}
    </div>
  );
};

export default TagProject;
