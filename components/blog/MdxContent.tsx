import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { Callout } from "./Callout";

// Tailwind typography classes for markdown tags
const components = {
  h1: (props: any) => <h1 className="mt-10 scroll-m-20 font-heading text-4xl font-bold tracking-tight mb-4" {...props} />,
  h2: (props: any) => <h2 className="mt-16 scroll-m-20 border-b border-border pb-2 font-heading text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4" {...props} />,
  h3: (props: any) => <h3 className="mt-8 scroll-m-20 font-heading text-2xl font-semibold tracking-tight mb-4" {...props} />,
  h4: (props: any) => <h4 className="mt-8 scroll-m-20 font-heading text-xl font-semibold tracking-tight mb-4" {...props} />,
  p: (props: any) => <p className="leading-7 text-text-muted [&:not(:first-child)]:mt-6 text-[17px]" {...props} />,
  ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-text-muted" {...props} />,
  ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-text-muted" {...props} />,
  li: (props: any) => <li className="leading-7" {...props} />,
  blockquote: (props: any) => <blockquote className="mt-6 border-l-2 border-accent pl-6 italic text-text-muted bg-surface/50 py-2 pr-4 rounded-r-lg" {...props} />,
  img: (props: any) => <img className="rounded-xl border border-border shadow-md my-8 w-full object-cover" {...props} />,
  hr: (props: any) => <hr className="my-10 border-border" {...props} />,
  table: (props: any) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg border border-border2">
      <table className="w-full text-left text-sm text-text-muted" {...props} />
    </div>
  ),
  tr: (props: any) => <tr className="m-0 border-t border-border2 p-0 even:bg-surface/50" {...props} />,
  th: (props: any) => <th className="border-b border-border2 px-4 py-3 font-semibold text-text bg-surface" {...props} />,
  td: (props: any) => <td className="px-4 py-3" {...props} />,
  a: (props: any) => <a className="font-medium text-accent underline underline-offset-4 hover:text-accent2 transition-colors" {...props} />,
  // Rehype-pretty-code outputs a `<figure>` with `data-rehype-pretty-code-figure`
  // and `pre` inside it. We style the figure itself if needed, but mostly style the pre.
  pre: (props: any) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-xl border border-border2 bg-[#0d1117] py-4 text-[13px] leading-relaxed relative font-mono shadow-lg" {...props} />
  ),
  code: (props: any) => (
    <code className="relative rounded bg-surface-hover px-[0.3rem] py-[0.2rem] font-mono text-sm text-accent2 border border-border2" {...props} />
  ),
  Callout: (props: any) => <Callout {...props} />,
};

export function MdxContent({ content }: { content: string }) {
  return (
    <div className="w-full max-w-none">
      <MDXRemote 
        source={content} 
        components={components} 
      />
    </div>
  );
}
