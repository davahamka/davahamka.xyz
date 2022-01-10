import fs, { readFileSync } from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';

export function getBlogPostData() {}

/**
 *
 * @param type
 * @param slug
 * @returns
 */
export async function getPostBySlug(type: string = 'blog', slug: string) {
  // get mdx file from contents folder
  const source = slug
    ? readFileSync(join(process.cwd(), 'contents', type, `${slug}.mdx`), 'utf8')
    : readFileSync(
        join(process.cwd(), 'src', 'contents', `${type}.mdx`),
        'utf8'
      );

  // get code and frontmatter from bundleMDX
  const { code, frontmatter } = await bundleMDX({
    source,
  });

  return {
    code,
    frontmatter,
  };
}
