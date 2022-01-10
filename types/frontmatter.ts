export type ContentType = 'blog' | 'project';

export type BlogFrontmatter = {
  title: string;
  description: string;
};

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type ProjectFrontmatter = {
  title: string;
  description: string;
};

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};

export type ChooseFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : ProjectFrontmatter;
