import { Mail, Phone, MapPin, Send, Calendar, ArrowRight } from "lucide-react";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full mb-6">
              <Send className="w-4 h-4" />
              <span className="text-sm font-medium">Liên hệ với chúng tôi</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Sẵn sàng build cùng{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                DAB-Lab?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Đăng ký tham quan Lab hoặc đặt lịch trao đổi. Cùng xây dựng tương
              lai AI tại Đà Nẵng.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form - Takes 2 columns */}
          <ScrollAnimation delay={0.2} className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-cyan-500/30 p-8 md:p-12">
              <h3 className="text-3xl mb-8 text-white font-semibold">
                Đăng ký tham gia
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 text-slate-300 font-medium"
                    >
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-cyan-500/30 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-slate-300 font-medium"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-cyan-500/30 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm mb-2 text-slate-300 font-medium"
                    >
                      Công ty/Tổ chức *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-cyan-500/30 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      placeholder="Tên công ty"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm mb-2 text-slate-300 font-medium"
                    >
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border border-cyan-500/30 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      placeholder="+84 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm mb-2 text-slate-300 font-medium"
                  >
                    Loại dự án *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-cyan-500/30 bg-slate-900/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  >
                    <option value="">-- Chọn loại dự án --</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="both">AI & Blockchain</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-slate-300 font-medium"
                  >
                    Mô tả dự án
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-cyan-500/30 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none transition"
                    placeholder="Mô tả ngắn gọn về dự án, mục tiêu và nhu cầu của bạn..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-3 text-lg font-semibold"
                >
                  Gửi đăng ký
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Contact Info - Takes 1 column */}
          <ScrollAnimation delay={0.4} className="lg:col-span-1">
            <div className="space-y-6">
              {/* Contact Information Card */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl mb-6 font-semibold">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Địa chỉ</div>
                      <div className="text-cyan-50 text-sm leading-relaxed">
                        Trung tâm Phần mềm Đà Nẵng
                        <br />
                        Đà Nẵng, Việt Nam
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-cyan-50 text-sm">
                        contact@dablab.vn
                        <br />
                        info@dablab.vn
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Điện thoại</div>
                      <div className="text-cyan-50 text-sm">
                        +84 236 XXX XXXX
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* CTA Banner */}
        <ScrollAnimation delay={0.6}>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            ></div>
            <div className="relative px-8 py-12 md:px-12 md:py-16 text-center">
              <h3 className="text-3xl md:text-4xl mb-4 text-white font-bold">
                Cùng xây dựng tương lai AI tại Đà Nẵng
              </h3>
              <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
                Tham gia DAB-Lab ngay hôm nay và trở thành một phần của cuộc
                cách mạng công nghệ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-cyan-50 transition text-lg font-semibold">
                  Tham gia DAB-Lab
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition text-lg font-semibold">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
