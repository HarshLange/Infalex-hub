import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { Callout } from "./Callout";

// Tailwind typography classes for markdown tags
const components = {
  h1: (props: any) => <h1 className="mt-12 scroll-m-20 font-heading text-4xl font-bold tracking-tight mb-6 text-foreground" {...props} />,
  h2: (props: any) => <h2 className="mt-16 scroll-m-20 font-heading text-3xl font-semibold tracking-tight text-foreground mb-6" {...props} />,
  h3: (props: any) => <h3 className="mt-12 scroll-m-20 font-heading text-2xl font-semibold tracking-tight text-foreground mb-4" {...props} />,
  h4: (props: any) => <h4 className="mt-8 scroll-m-20 font-heading text-xl font-semibold tracking-tight text-foreground mb-4" {...props} />,
  p: (props: any) => <p className="leading-[1.8] text-foreground-muted [&:not(:first-child)]:mt-7 text-[17px] md:text-[18px]" {...props} />,
  ul: (props: any) => <ul className="my-7 ml-8 list-disc [&>li]:mt-3 text-[17px] md:text-[18px] text-foreground-muted" {...props} />,
  ol: (props: any) => <ol className="my-7 ml-8 list-decimal [&>li]:mt-3 text-[17px] md:text-[18px] text-foreground-muted" {...props} />,
  li: (props: any) => <li className="leading-[1.8]" {...props} />,
  blockquote: (props: any) => <blockquote className="my-8 border-l-4 border-primary pl-6 italic text-foreground bg-surface/30 py-4 pr-6 rounded-r-xl text-lg leading-relaxed" {...props} />,
  img: (props: any) => <img className="rounded-2xl border border-border shadow-lg my-12 w-full object-cover bg-surface" {...props} />,
  hr: (props: any) => <hr className="my-12 border-border-subtle" {...props} />,
  table: (props: any) => (
    <div className="my-8 w-full overflow-x-auto rounded-xl border border-border-subtle bg-surface/20">
      <table className="w-full text-left text-[15px] text-foreground-muted" {...props} />
    </div>
  ),
  tr: (props: any) => <tr className="m-0 border-t border-border-subtle p-0 even:bg-surface/50 transition-colors hover:bg-surface" {...props} />,
  th: (props: any) => <th className="border-b border-border-subtle px-6 py-4 font-semibold text-foreground bg-surface" {...props} />,
  td: (props: any) => <td className="px-6 py-4" {...props} />,
  a: (props: any) => <a className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-all" {...props} />,
  // Rehype-pretty-code outputs a `<figure>` with `data-rehype-pretty-code-figure`
  // and `pre` inside it. We style the figure itself if needed, but mostly style the pre.
  pre: (props: any) => (
    <pre className="mb-8 mt-8 overflow-x-auto rounded-2xl border border-border-subtle bg-[#0d1117] p-6 text-[14px] leading-[1.7] relative font-mono shadow-xl" {...props} />
  ),
  code: (props: any) => (
    <code className="relative rounded-md bg-surface-elevated px-[0.4rem] py-[0.2rem] font-mono text-[14px] text-primary border border-border-subtle" {...props} />
  ),
  Callout: (props: any) => <Callout {...props} />,
};

export function MdxContent({ content }: { content: string }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <MDXRemote 
        source={content} 
        components={components} 
      />
    </div>
  );
}
