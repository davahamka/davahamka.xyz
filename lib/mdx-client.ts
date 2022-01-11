import { AdditionalResult, BaseFrontmatter, ContentType, ResultFrontmatter } from "~/types/frontmatter";

export const sortByDate = (data: (BaseFrontmatter & AdditionalResult)[], type: ContentType): ResultFrontmatter<typeof type>[] => {
    return data.sort(
        (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}