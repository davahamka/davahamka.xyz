import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { BlogFrontmatter } from "~/types/frontmatter"
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPostBySlug } from 'lib/mdx'

type PosProps = {
    code: any,
    frontmatter: BlogFrontmatter
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     // const posts
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getPostBySlug("hello-world")


    return {
        props: { ...post }
    }
}

function Post({ code, frontmatter }: PosProps) {
    // it's generally a good idea to memoize this function call to
    // avoid re-creating the component every render.
    const Component = React.useMemo(() => getMDXComponent(code), [code])
    return (
        <>

            <header className="pt-64">
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.description}</p>
            </header>
            <main>
                <Component />
            </main>
        </>
    )
}

export default Post