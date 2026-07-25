import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Infalex team for support, feature requests, or business inquiries.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
