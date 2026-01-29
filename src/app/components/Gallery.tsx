import { ReactNode } from "react";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface GalleryProps {
  children?: ReactNode;
  className?: string; // To allow overriding padding etc
}

export default function Gallery({ children, className = "" }: GalleryProps) {
  return (
    <section
      className={`bg-black text-white relative ${children ? "" : "py-24"} ${className}`}
    >
      {!children && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
                A Visual Journey Through Our Work
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Experience our creativity and impact through a curated
                collection of images.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      )}

      <div className="relative w-full">
        {/* Image Grid Background */}
        <div
          className={`
          grid grid-cols-1 lg:grid-cols-3 gap-6 
          ${
            children
              ? "absolute inset-0 w-full h-full opacity-30 px-4"
              : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto lg:h-[600px]"
          }
        `}
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-6 h-full">
            <ScrollAnimation delay={0.1} className="h-[55%]">
              <div className="w-full h-full overflow-hidden rounded-2xl group relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <ImageWithFallback
                  src="/assets/img/beach.jpg"
                  alt="Gallery 1"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                />
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-2 gap-6 h-[45%]">
              <ScrollAnimation delay={0.2} className="h-full">
                <div className="w-full h-full overflow-hidden rounded-2xl group relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <ImageWithFallback
                    src="/assets/img/bridge.jpg"
                    alt="Gallery 2"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.3} className="h-full">
                <div className="w-full h-full overflow-hidden rounded-2xl group relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <ImageWithFallback
                    src="/assets/img/city.jpg"
                    alt="Gallery 3"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Column 2 - Tall Image */}
          <ScrollAnimation delay={0.2} className="h-full hidden lg:block">
            <div className="w-full h-full overflow-hidden rounded-2xl group relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <ImageWithFallback
                src="/assets/img/high.png"
                alt="Gallery 4"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-2xl"
              />
            </div>
          </ScrollAnimation>
          {/* Mobile view for tall image so it doesn't take 600px height alone */}
          <ScrollAnimation delay={0.2} className="h-64 lg:hidden">
            <div className="w-full h-full overflow-hidden rounded-2xl group relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <ImageWithFallback
                src="/assets/img/high.png"
                alt="Gallery 4"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-2xl"
              />
            </div>
          </ScrollAnimation>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 h-full">
            <ScrollAnimation delay={0.3} className="h-[45%]">
              <div className="w-full h-full overflow-hidden rounded-2xl group relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <ImageWithFallback
                  src="/assets/img/bridge.jpg"
                  alt="Gallery 5"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4} className="h-[55%]">
              <div className="w-full h-full overflow-hidden rounded-2xl group relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <ImageWithFallback
                  src="/assets/img/city.jpg"
                  alt="Gallery 6"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {children && (
          <>
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
           
          </>
        )}

        {children && (
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
