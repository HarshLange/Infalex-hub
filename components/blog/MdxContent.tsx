import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout } from "./Callout";
import { CodeBlock } from "./CodeBlock";
import { ImageLightbox } from "./ImageLightbox";

// Tailwind typography classes for markdown tags tailored for a premium SaaS look
const components = {
  h1: (props: any) => <h1 className="mt-16 scroll-m-20 font-heading text-4xl font-bold tracking-tight mb-8 text-foreground" {...props} />,
  h2: (props: any) => <h2 className="mt-16 scroll-m-20 font-heading text-3xl font-semibold tracking-tight text-foreground mb-6 pb-2 border-b border-border-subtle/50" {...props} />,
  h3: (props: any) => <h3 className="mt-12 scroll-m-20 font-heading text-2xl font-semibold tracking-tight text-foreground mb-4" {...props} />,
  h4: (props: any) => <h4 className="mt-8 scroll-m-20 font-heading text-xl font-medium tracking-tight text-foreground mb-4" {...props} />,
  p: (props: any) => <p className="leading-[1.8] text-foreground-muted [&:not(:first-child)]:mt-7 text-[17px] md:text-[18px] tracking-normal" {...props} />,
  ul: (props: any) => <ul className="my-7 ml-8 list-disc [&>li]:mt-3 text-[17px] md:text-[18px] text-foreground-muted marker:text-primary/70" {...props} />,
  ol: (props: any) => <ol className="my-7 ml-8 list-decimal [&>li]:mt-3 text-[17px] md:text-[18px] text-foreground-muted marker:text-foreground-subtle marker:font-medium" {...props} />,
  li: (props: any) => <li className="leading-[1.8]" {...props} />,
  blockquote: (props: any) => (
    <blockquote 
      className="my-10 border-l-[3px] border-primary/50 pl-6 italic text-foreground bg-surface-elevated/40 py-5 pr-6 rounded-r-2xl text-[19px] leading-relaxed relative overflow-hidden"
      {...props} 
    >
      <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      {props.children}
    </blockquote>
  ),
  img: (props: any) => <ImageLightbox {...props} />,
  hr: (props: any) => <hr className="my-16 border-border-subtle" {...props} />,
  table: (props: any) => (
    <div className="my-10 w-full overflow-x-auto rounded-xl border border-border-subtle bg-surface shadow-sm">
      <table className="w-full text-left text-[15px] text-foreground-muted border-collapse" {...props} />
    </div>
  ),
  tr: (props: any) => <tr className="m-0 border-t border-border-subtle p-0 even:bg-surface-hover transition-colors hover:bg-surface-elevated" {...props} />,
  th: (props: any) => <th className="border-b border-border-subtle px-6 py-4 font-semibold text-foreground bg-surface-elevated text-sm tracking-wider uppercase" {...props} />,
  td: (props: any) => <td className="px-6 py-4 border-t border-border-subtle/50" {...props} />,
  a: (props: any) => (
    <a 
      className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-all duration-200" 
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props} 
    />
  ),
  pre: (props: any) => <CodeBlock {...props} />,
  code: (props: any) => (
    <code className="relative rounded bg-surface-hover/80 px-[0.4rem] py-[0.15rem] font-mono text-[14px] text-foreground border border-border-subtle/40" {...props} />
  ),
  Callout: (props: any) => <Callout {...props} />,
};

export function MdxContent({ content }: { content: string }) {
  return (
    <div className="w-full max-w-3xl mx-auto mdx-content">
      <MDXRemote 
        source={content} 
        components={components} 
      />
    </div>
  );
}
