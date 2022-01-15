import dayjs from 'dayjs';
import { getPostBySlug, getPostSlugs } from 'lib/mdx';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { useEffect, useMemo, useState } from 'react';
import BodyBlog from '~/components/pages/blog/body-blog';
import HeaderBlog from '~/components/pages/blog/header-blog';
import TableOfContent from '~/components/pages/blog/table-of-content';
import { CodeFrontmatterResult } from '~/types/frontmatter';
import useMdxComponent from '~/hooks/use-mdx-component';
import { ToCHeadingProps } from '~/types/mdx';
import useScrollSpy from '~/hooks/use-scrollspy';
import Seo from '~/components/seo';
import FloatingButton from '~/components/button/floating-button';
import useLoaded from '~/hooks/use-loaded';
import clsx from 'clsx';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getPostSlugs('blog');

  const paths = res.map((item) => ({
    params: { slug: item.replace('.mdx', '') },
  }));

  return {
    paths: paths,
    fallback: false,
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
  const loaded = useLoaded();
  const [tableContent, setTableContent] = useState<ToCHeadingProps[]>();
  const activeSession = useScrollSpy();
  const Component = useMdxComponent(code);

  useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: ToCHeadingProps[] = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setTableContent(headingArr);
  }, [frontmatter.slug]);

  return (
    <>
      <Seo title={frontmatter.title} />
      <FloatingButton />
      <section
        className={clsx(
          loaded && 'fade-in-start',
          'min-h-[100vh]  pt-[90px] xl:w-[68rem] mx-auto'
        )}
      >
        <HeaderBlog frontmatter={frontmatter} />
        <div data-fade='2' className='flex w-full space-x-8 mt-8 px-8 xl:px-0'>
          <article className='mdx prose dark:prose-invert lg:w-[75%]'>
            <Component />
          </article>
          <TableOfContent tableContent={tableContent} />
        </div>
      </section>
    </>
  );
};

export default BlogPost;
