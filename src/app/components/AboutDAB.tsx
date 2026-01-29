import { Building2, Lightbulb, Shield, Zap } from "lucide-react";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import BlurText from "@/components/BlurText";

export default function AboutDAB() {
  const features = [
    {
      icon: Building2,
      title: "Project-Based",
      description:
        "Các công ty tham gia theo dạng project-based, linh hoạt và hiệu quả",
    },
    {
      icon: Shield,
      title: "Chính sách Sandbox",
      description:
        "Được hưởng chính sách sandbox của thành phố về AI và công nghệ mới",
    },
    {
      icon: Zap,
      title: "Môi trường thử nghiệm",
      description:
        "Môi trường linh hoạt, giảm rào cản pháp lý, tăng tốc innovation",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium">Về DAB-Lab</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Giới thiệu{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                DAB-Lab
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              <span className="text-cyan-400 font-semibold">
                DAB-Lab (Da Nang AI & Blockchain Lab)
              </span>
              <BlurText
                text="Không gian nghiên cứu và phát triển đặt tại Trung tâm Phần mềm Đà Nẵng — hub công nghệ năng động nhất miền Trung Việt Nam."
                delay={100}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => {
                  console.log("Animation completed!");
                }}
                className="text-2xl mb-8"
              />
            </p>
          </div>
        </ScrollAnimation>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollAnimation delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBicmFpbnxlbnwxfHx8fDE3Njk2NDk2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Technology"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl mb-4 text-white">Mô hình hoạt động</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Chúng tôi tạo ra một hệ sinh thái đổi mới sáng tạo, nơi công
                  nghệ blockchain và AI được nghiên cứu, phát triển và triển
                  khai trong môi trường thuận lợi nhất.
                </p>
              </div>

              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-2 text-white font-semibold">
                        {feature.title}
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>

        {/* Tech Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollAnimation delay={0.2} className="h-full">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl mb-3 text-white font-semibold">
                  Artificial Intelligence
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Nghiên cứu và phát triển các giải pháp AI tiên tiến, machine
                  learning, deep learning và natural language processing cho thị
                  trường Việt Nam và khu vực.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4} className="h-full">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-all h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl mb-3 text-white font-semibold">
                  Blockchain Technology
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Xây dựng giải pháp blockchain an toàn, minh bạch và hiệu quả
                  cho doanh nghiệp, smart contracts, DeFi và Web3 applications.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
