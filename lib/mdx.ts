import fs, { readFileSync } from "fs"
import path, { join } from "path"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"
import remarkGfm from "remark-gfm"

const blogDirectory = path.join(process.cwd(), "blog")

export function getBlogPostData() {

}

// export function getAllFilesFrontmatter<T extends Content>() {

// }

// export function

export async function getPostBySlug(slug: string) {
    const source = slug
        ? readFileSync(
            join(process.cwd(), 'contents', 'blog', `${slug}.mdx`),
            'utf8'
        )
        : readFileSync(
            join(process.cwd(), 'src', 'contents', `blog.mdx`),
            'utf8'
        );



    const { code, frontmatter } = await bundleMDX({
        source,
    })



    return {
        code,
        frontmatter
    }
}