type HeaderBlogProps = {
  frontmatter: {
    [key: string]: any;
  };
};

const HeaderBlog = ({ frontmatter }: HeaderBlogProps) => {
  return (
    <>
      <div className='flex flex-col space-y-2 px-8  mt-4 xl:px-0' data-fade='1'>
        <h1 className='text-4xl font-bold'>{frontmatter.title}</h1>
        <p>Dava Hamka - {frontmatter.publishedAt}.</p>
      </div>
    </>
  );
};

export default HeaderBlog;
