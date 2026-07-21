import { 
  HeroSection, 
  EcosystemSection, 
  FeaturedProductSection, 
  KnowledgeHubSection, 
  FreeToolsSection, 
  TrustSection, 
  RoadmapSection,
  NewsletterSection
} from "@/components/marketing/home";

// Server Component for maximum performance
export default function Home() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <FeaturedProductSection />
      <KnowledgeHubSection />
      <FreeToolsSection />
      <TrustSection />
      <RoadmapSection />
      <NewsletterSection />
    </>
  );
}