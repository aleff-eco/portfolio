import { companies } from "../data/information";
import { useEffect, useRef } from "react";

export function Companies() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const scrollSpeed = 1; // Velocidad de desplazamiento
    const scrollDelay = 20;

    const autoScroll = () => {
      if (scrollElement) {
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft += scrollSpeed;
        }
      }
    };
    const scrollInterval = setInterval(autoScroll, scrollDelay);
    return () => clearInterval(scrollInterval);
  }, []);


  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center items-center">
      <div className="container flex flex-col items-center gap-8">
        <div className="grid gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-2xl md:text-3xl">Compañias a las que he aportado valor</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
            He tenido el privilegio de trabajar con estas increíbles empresas y aportarles valor.
          </p>
        </div>
        <div
          className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          ref={scrollRef}
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-6 px-4 md:gap-8 md:px-6">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex-shrink-0 group">
                <div className="relative h-24 w-48 overflow-hidden rounded-lg bg-muted transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg sm:h-32 sm:w-64">
                  <img
                    src={company.imageUrl}
                    alt={`${company.name} Logo`}
                    width={256}
                    height={128}
                    className="h-full w-full object-contain object-center"
                    style={{ aspectRatio: "256/128", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/80 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h4 className="text-lg font-semibold">{company.name}</h4>
                    <p className="text-sm text-muted-foreground">{company.jobTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}