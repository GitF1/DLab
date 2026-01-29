import { Rocket, Building, Globe, Lightbulb } from "lucide-react";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function ForWho() {
  const targetAudience = [
    {
      icon: Rocket,
      title: "Startup AI/Blockchain",
      description:
        "Đang tìm môi trường thử nghiệm, phát triển sản phẩm và tiếp cận thị trường",
      color: "from-cyan-500 to-blue-500",
      benefits: ["Môi trường sandbox", "Chi phí thấp", "Hỗ trợ pháp lý"],
    },
    {
      icon: Building,
      title: "Công ty công nghệ",
      description: "Muốn R&D tại Việt Nam với chi phí tối ưu và chất lượng cao",
      color: "from-blue-500 to-purple-500",
      benefits: ["Nguồn nhân lực", "Hạ tầng hiện đại", "Chính sách ưu đãi"],
    },
    {
      icon: Globe,
      title: "Team quốc tế",
      description:
        "Cần base tại Đông Nam Á để phát triển và mở rộng thị trường khu vực",
      color: "from-purple-500 to-pink-500",
      benefits: ["Vị trí chiến lược", "Visa support", "Cộng đồng expat"],
    },
    {
      icon: Lightbulb,
      title: "Doanh nghiệp",
      description:
        "Muốn pilot giải pháp AI trong khuôn khổ sandbox và chuyển đổi số",
      color: "from-pink-500 to-rose-500",
      benefits: ["Tư vấn chuyên môn", "PoC support", "Kết nối đối tác"],
    },
  ];

  return (
    <section
      id="who"
      className="py-32 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium">Đối tượng mục tiêu</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                DAB-Lab
              </span>{" "}
              dành cho ai?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi phục vụ các đối tượng từ startup đến doanh nghiệp lớn,
              từ team local đến quốc tế
            </p>
          </div>
        </ScrollAnimation>

        {/* Target Audience Cards */}
        <div className="mb-20">
          <ScrollStack
            useWindowScroll
            className="overflow-visible"
            
          >
            {targetAudience.map((target, index) => {
              const Icon = target.icon;
              return (
                <ScrollStackItem
                  key={index}
                  itemClassName="h-auto p-0 my-6 shadow-none bg-transparent rounded-none"
                >
                  <div className="group relative h-full">
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${target.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>

                    {/* Card */}
                    <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${target.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl mb-4 text-white font-semibold">
                        {target.title}
                      </h3>
                      <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        {target.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-2">
                        {target.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className={`w-1.5 h-1.5 bg-gradient-to-r ${target.color} rounded-full`}
                            ></div>
                            <span className="text-sm text-slate-400">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>

        {/* Visual Section with Blockchain Image */}
        <ScrollAnimation delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1627253781598-63b98c51da42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvJTIwbW9kZXJufGVufDF8fHx8MTc2OTY0OTY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Blockchain Technology"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-2xl text-white font-semibold mb-2">
                    Công nghệ tiên tiến
                  </h4>
                  <p className="text-slate-200">
                    Blockchain, AI, và các công nghệ đột phá khác
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl mb-6 text-white">
                Tham gia{" "}
                <span className="text-cyan-400">hệ sinh thái đổi mới</span>
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                DAB-Lab không chỉ là một không gian làm việc, mà là một hệ sinh
                thái hoàn chỉnh với đầy đủ các yếu tố cần thiết để bạn phát
                triển và thành công.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl text-white mb-2 font-semibold">
                      Đăng ký và đánh giá
                    </h4>
                    <p className="text-slate-300">
                      Gửi thông tin dự án, chúng tôi sẽ đánh giá và phản hồi
                      nhanh chóng
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl text-white mb-2 font-semibold">
                      Onboarding và setup
                    </h4>
                    <p className="text-slate-300">
                      Hỗ trợ setup lab, giấy tờ pháp lý và kết nối với các bên
                      liên quan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl text-white mb-2 font-semibold">
                      Phát triển và scale
                    </h4>
                    <p className="text-slate-300">
                      Tận dụng hệ sinh thái để phát triển sản phẩm và mở rộng
                      thị trường
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
