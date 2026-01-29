import { Shield, DollarSign, Heart, Network } from "lucide-react";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import CountUp from "@/components/CountUp";
import ScrollFloat from "@/components/ScrollFloat";

export default function WhyChoose() {
  const advantages = [
    {
      icon: Shield,
      title: "Chính sách Sandbox",
      description:
        "Đà Nẵng đang thí điểm cơ chế đặc thù cho AI, fintech, blockchain",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      icon: DollarSign,
      title: "Chi phí tối ưu",
      description: "Vận hành thấp hơn 40-50% so với TP.HCM và Hà Nội",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
    },
    {
      icon: Heart,
      title: "Chất lượng sống",
      description: "Thành phố đáng sống, thu hút và giữ chân nhân tài tech",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/30",
    },
    {
      icon: Network,
      title: "Hệ sinh thái",
      description:
        "Kết nối trực tiếp với chính quyền, đại học, và cộng đồng startup",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-500/10 to-indigo-500/10",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section id="why" className="py-32 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Lợi thế cạnh tranh</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Tại sao chọn{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                DAB-Lab?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi mang đến những lợi thế độc đáo giúp doanh nghiệp của bạn
              phát triển nhanh chóng và bền vững
            </p>
          </div>
        </ScrollAnimation>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className={`group relative h-full`}>
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${advantage.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  {/* Card */}
                  <div
                    className={`relative h-full bg-gradient-to-br ${advantage.bgColor} backdrop-blur-xl p-8 rounded-3xl border ${advantage.borderColor} hover:border-opacity-60 transition-all duration-300`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl mb-4 text-white font-semibold">
                      {advantage.title}
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Visual Section */}
        <ScrollAnimation delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl mb-6 text-white">
                Đà Nẵng -{" "}
                <span className="text-cyan-400">Hub công nghệ năng động</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl text-white mb-2 font-semibold">
                      Vị trí chiến lược
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      Nằm ở trung tâm miền Trung, kết nối dễ dàng với các thành
                      phố lớn và các nước trong khu vực
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl text-white mb-2 font-semibold">
                      Hạ tầng hiện đại
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      Trung tâm Phần mềm Đà Nẵng với đầy đủ tiện nghi, kết nối
                      internet tốc độ cao
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl text-white mb-2 font-semibold">
                      Nguồn nhân lực chất lượng
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      Đội ngũ kỹ sư trẻ tài năng từ các trường đại học hàng đầu
                      khu vực
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30">
                <ImageWithFallback
                  src="/public/assets/img/bridge.jpg"
                  alt="Da Nang City"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="mt-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  40-50%
                </div>
                <div className="text-slate-300">Giảm chi phí vận hành</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  #1
                </div>
                <div className="text-slate-300">Thành phố đáng sống VN</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                  +
                </div>
                <div className="text-slate-300">Doanh nghiệp công nghệ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-slate-300">Hỗ trợ và Lab access</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
