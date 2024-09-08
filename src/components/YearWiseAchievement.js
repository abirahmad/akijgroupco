import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CircularTimeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);
  const getRandomAosAnimation = () => {
    const animations = [
      "fade-up",
      "fade-in",
      "zoom-in",
      "zoom-out",
      "fade-down",
    ];
    return animations[Math.floor(Math.random() * animations.length)];
  };
  return (
    <>
    <div className="mx-auto p-4 sm:p-8 bg-gradient-to-r from-blue-200 via-white to-blue-200">
  <section className="relative h-full w-full">
    <div className="absolute inset-0 opacity-25" />
    <div className="relative container mx-auto text-white">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-black mt-5">
        Road to Success
      </h1>
      <div className="relative flex items-center justify-center p-3 sm:p-5 mt-8">
        <div className="relative">
          <img
            src="/road21.png"
            alt="Road"
            className="w-full max-w-[400px] sm:max-w-[800px] h-auto"
          />

          {/* Year 2022 */}
          <div className="absolute bottom-0 left-[-12%] transform -translate-x-1/2 animate-pulse lg:left-[-8%] sm:left-[0] sm:bottom-[-10%]">
            <div className="flex items-center">
              <div className="w-1/2" />
              <div className="w-1/2">
                <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-2 sm:p-3 rounded-lg shadow-xl">
                  <div className="mb-1 sm:mb-2">
                    <i className="fas fa-comments text-lg sm:text-2xl" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold">2022</h4>
                  <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Year 2023 */}
          <div className="absolute bottom-[35%] left-[10%] transform -translate-x-1/2 animate-pulse lg:bottom-[30%] sm:bottom-[25%]">
            <div className="flex items-center">
              <div className="w-1/2" />
              <div className="w-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-2 sm:p-3 rounded-lg shadow-xl">
                  <div className="mb-1 sm:mb-2">
                    <i className="fas fa-comments text-lg sm:text-2xl" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold">2023</h4>
                  <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Year 2026 */}
          <div className="absolute bottom-[77%] left-[30%] transform -translate-x-1/2 animate-pulse lg:bottom-[70%] sm:bottom-[65%]">
            <div className="flex items-center">
              <div className="w-1/2" />
              <div className="w-1/2">
                <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-2 sm:p-3 rounded-lg shadow-xl">
                  <div className="mb-1 sm:mb-2">
                    <i className="fas fa-comments text-lg sm:text-2xl" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold">2026</h4>
                  <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Year 2029 */}
          <div className="absolute bottom-[94%] left-[75%] transform -translate-x-1/2 animate-pulse lg:bottom-[85%] sm:bottom-[80%]">
            <div className="flex items-center">
              <div className="w-1/2" />
              <div className="w-1/2">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-2 sm:p-3 rounded-lg shadow-xl">
                  <div className="mb-1 sm:mb-2">
                    <i className="fas fa-comments text-lg sm:text-2xl" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold">2029</h4>
                  <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Year 2024 */}
          <div className="absolute bottom-[-5%] left-[30%] transform -translate-x-1/2 animate-pulse lg:bottom-[-3%] sm:bottom-[-8%]">
            <div className="flex items-center">
              <div className="w-1/2" />
              <div className="w-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 sm:p-3 rounded-lg shadow-xl">
                  <div className="mb-1 sm:mb-2">
                    <i className="fas fa-comments text-lg sm:text-2xl" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold">2024</h4>
                  <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Year 2025 */}
          <div className="absolute bottom-[0%] left-[65%] transform -translate-x-1/2 animate-pulse lg:bottom-[5%] sm:bottom-[2%]">
            <div className="flex items-center">
              <div className="w-1/2" />
              <div className="w-1/2">
                <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white p-2 sm:p-3 rounded-lg shadow-xl">
                  <div className="mb-1 sm:mb-2">
                    <i className="fas fa-comments text-lg sm:text-2xl" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold">2025</h4>
                  <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Year 2025 */}
          <div className="absolute bottom-[35%] left-[75%] transform -translate-x-1/2 animate-pulse lg:bottom-[30%] sm:bottom-[25%]">
            <div className="flex items-center">
              <div className="w-1/2" />
              <div className="w-1/2">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-2 sm:p-3 rounded-lg shadow-xl">
                  <div className="mb-1 sm:mb-2">
                    <i className="fas fa-comments text-lg sm:text-2xl" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold">2025</h4>
                  <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</div>

    </>
  );
};

export default CircularTimeline;
