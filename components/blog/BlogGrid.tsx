"use client";
import { BlogPost } from "../../lib/content/types";
import { ArticleCard } from "./ArticleCard";
import { motion, Variants } from "framer-motion";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {posts.map((post) => (
        <motion.div key={post.slug} variants={item} className="h-full">
          <ArticleCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
}
