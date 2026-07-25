import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllPosts, getPostsByCategory } from "../../../../lib/blog/api";
import { categories } from "../../../../content/data/categories";
import { Page, PageHeader, Container } from "../../../../components/layout";
import { ArticleCard } from "../../../../components/blog/ArticleCard";

export async function generateStaticParams() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((post) => post.categoryId)));

  return categories.map((category) => ({
    category,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = categories[categoryId];

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} | Infalex Knowledge Hub`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  const category = categories[categoryId];

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(categoryId);

  return (
    <Page>
      <PageHeader 
        title={category.name} 
        description={category.description} 
      />
      
      <Container className="py-16 md:py-24">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-foreground-muted">
            No articles found in this category.
          </div>
        )}
      </Container>
    </Page>
  );
}
