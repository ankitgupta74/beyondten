import {
  useState,
  useEffect,
  useRef
} from "react";
import { Star } from "lucide-react";
import { CLIENT_REVIEWS } from "../../data/clientReviewData";

export default function ClientReviews() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // SCROLL DETECTION
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-10% 0px -10% 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative px-6 py-24 bg-gray-50/50 text-gray-900 overflow-hidden"
    >
      <div className="max-w-lg mx-auto w-full relative z-10">
        {/* Section Header (Fades in first) */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ease-[0.34,1.1,0.64,1] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            People who launched with us.
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Don't just take our word for it.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Review 1 */}
          {CLIENT_REVIEWS.map((review, index) => {
            const isBlue = review.accent === "blue";

            return (
              <div
                key={review.id}
                className={`relative group bg-white rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]
                  ${
                    isBlue
                      ? "hover:shadow-[0_12px_40px_-4px_rgba(59,130,246,0.08)]"
                      : "hover:shadow-[0_12px_40px_-4px_rgba(168,85,247,0.08)]"
                  }
                  hover:-translate-y-1 transition-all duration-1000 
                  ${index === 0 ? "delay-150" : "delay-300"} 
                  ease-[0.34,1.1,0.64,1] overflow-hidden
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
              >
                {/* Quote watermark */}
                <div
                  className={`absolute top-2 right-6 text-[10rem] leading-none font-serif ${isBlue ? "text-gray-100 group-hover:text-blue-50/60" : "text-gray-50 group-hover:text-purple-50/60"} group-hover:scale-110 transition-all duration-1000 ease-out`}
                >
                  "
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {review.headline}
                  </h4>

                  <p className="text-gray-500 text-lg font-medium mb-8">
                    "{review.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg
                        ${
                          isBlue
                            ? "bg-linear-to-br from-blue-100 to-blue-50 text-blue-600"
                            : "bg-linear-to-br from-purple-100 to-purple-50 text-purple-600"
                        }
                      `}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {review.author}
                      </div>
                      <div className="text-sm text-gray-400">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
