import { companies } from "../data/information";
import { useEffect, useRef, useState } from "react";

export function Companies() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const scrollSpeed = 1; // Velocidad de desplazamiento
    const scrollDelay = 20;

    const autoScroll = () => {
      if (!isHovered && scrollElement) {
        scrollElement.scrollLeft += scrollSpeed;
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, scrollDelay);

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center items-center">
      <div className="container flex flex-col items-center gap-8">
        <div className="grid gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-2xl md:text-3xl">
            Compañías a las que he aportado valor
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
            He tenido el privilegio de trabajar con estas increíbles empresas y aportarles valor.
          </p>
        </div>
        <div
          className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          ref={scrollRef}
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', width: '98.8vw' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex pt-6 gap-6 px-4 md:gap-8 md:px-6 h-48 w-full">
            {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative py-4 px-8 h-32 w-64 overflow-hidden rounded-lg bg-muted transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg group-hover:rounded-lg flex justify-center items-center">
                  <img
                    src={company.imageUrl}
                    alt={`${company.name} Logo`}
                    className="object-contain h-full max-w-full"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/80 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h4 className="text-lg font-semibold">{company.name}</h4>
                    <p className="text-sm text-muted-foreground">{company.title}</p>
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
