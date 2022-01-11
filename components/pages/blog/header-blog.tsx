type HeaderBlogProps = {
  frontmatter: {
    [key: string]: any;
  };
};

const HeaderBlog = ({ frontmatter }: HeaderBlogProps) => {
  return (
    <div className='flex flex-col space-y-2'>
      <h1 className='text-3xl font-bold'>{frontmatter.title}</h1>
      <p>Written on {frontmatter.publishedAt}.</p>
    </div>
  );
};

export default HeaderBlog;
