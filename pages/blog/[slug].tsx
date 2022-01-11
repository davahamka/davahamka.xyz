import dayjs from 'dayjs';
import { getPostBySlug, getPostSlugs } from 'lib/mdx';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import BodyBlog from '~/components/pages/blog/body-blog';
import HeaderBlog from '~/components/pages/blog/header-blog';
import TableOfContent from '~/components/pages/blog/table-of-content';
import { CodeFrontmatterResult } from '~/types/frontmatter';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getPostSlugs('blog');

  const paths = res.map((item) => ({
    params: { slug: item.replace('.mdx', '') },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const result: CodeFrontmatterResult = await getPostBySlug(
    'blog',
    params?.slug as string
  );

  result.frontmatter.publishedAt = dayjs(result.frontmatter.publishedAt).format(
    'MMMM DD, YY'
  );

  return {
    props: {
      code: result.code,
      frontmatter: result.frontmatter,
    },
  };
};

const BlogPost = ({
  code,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section className='min h-[100vh] pt-[90px] xl:w-[68rem] mx-auto'>
      <HeaderBlog frontmatter={frontmatter} />
      <div>
        <BodyBlog />
        <TableOfContent />
      </div>
    </section>
  );
};

export default BlogPost;
