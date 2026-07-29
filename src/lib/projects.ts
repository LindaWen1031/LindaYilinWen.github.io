import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

const byOrder = (a: Project, b: Project) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);

/** Every published project, in display order. Drafts are excluded from builds. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return all.sort(byOrder);
}

/** The projects to show on the home page. */
export async function getFeaturedProjects(): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.data.featured);
}

/** The previous/next project relative to `slug`, for end-of-page navigation. */
export async function getNeighbours(slug: string) {
  const all = await getProjects();
  const i = all.findIndex((p) => p.id === slug);
  return {
    prev: i > 0 ? all[i - 1] : undefined,
    next: i >= 0 && i < all.length - 1 ? all[i + 1] : undefined,
  };
}
