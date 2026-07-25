import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Explore free AI-powered developer tools and utilities built by Infalex.',
};

export default function ToolsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Tools</h1>
      <p>AI tools will appear here soon.</p>
    </main>
  );
}