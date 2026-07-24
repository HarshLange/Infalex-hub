import { ProductUseCase } from "../../lib/products/types";
import { Container } from "../layout";

export function UseCaseGrid({ useCases }: { useCases: ProductUseCase[] }) {
  if (!useCases || useCases.length === 0) return null;

  return (
    <section className="py-24 bg-surface/30 border-b border-border">
      <Container>
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight mb-4">
            Built for Real World Scale
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {useCases.map((useCase, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {useCase.title}
                  </h3>
                  <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                    {useCase.description}
                  </p>
                </div>
                
                <div className="w-full lg:w-1/2 aspect-video bg-surface border border-border-subtle rounded-3xl overflow-hidden shadow-2xl relative group">
                  {useCase.image ? (
                    <img 
                      src={useCase.image} 
                      alt={useCase.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-bg flex items-center justify-center">
                      <span className="text-foreground-subtle font-medium">Use Case Preview</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
