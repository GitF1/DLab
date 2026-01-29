import { Network } from "lucide-react";
import Hero from "@/app/components/Hero";
import AboutDAB from "@/app/components/AboutDAB";
import WhyChoose from "@/app/components/WhyChoose";
import ForWho from "@/app/components/ForWho";
import Contact from "@/app/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen ">
      {/* Navigation - Fixed Header */}
      <nav className="fixed top-0 left-0 right-0  backdrop-blur-xl z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-pulse"></div>
                <Network className="w-7 h-7 text-white relative z-10" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  DAB-Lab
                </span>
                <div className="text-xs text-cyan-400/70">
                  Da Nang AI & Blockchain Lab
                </div>
              </div>
            </div>
            <div className="hidden md:flex gap-8">
              <a
                href="#about"
                className="text-slate-300 hover:text-cyan-400 transition-colors font-extrabold"
              >
                Giới thiệu
              </a>
              <a
                href="#why"
                className="text-slate-300 hover:text-cyan-400 transition-colors  font-extrabold"
              >
                Lợi thế
              </a>
              <a
                href="#who"
                className="text-slate-300 hover:text-cyan-400 transition-colors  font-extrabold"
              >
                Dành cho ai
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-cyan-400 transition-colors font-extrabold"
              >
                Liên hệ
              </a>
            </div>
            <a href="#contact">
              <button className="btn-dab-navy px-6 py-3 rounded-3xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-medium">
                Tham gia ngay
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About DAB-Lab Section */}
      <AboutDAB />

      {/* Why Choose DAB-Lab Section */}
      <WhyChoose />

      {/* For Who Section */}
      <ForWho />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-slate-900 text-white py-16 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Network className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">DAB-Lab</div>
                  <div className="text-xs text-cyan-400/70">
                    Da Nang AI & Blockchain Lab
                  </div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Xây dựng tương lai AI & Blockchain tại Đà Nẵng
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">
                Liên kết nhanh
              </h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#about" className="hover:text-cyan-400 transition">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#why" className="hover:text-cyan-400 transition">
                    Lợi thế
                  </a>
                </li>
                <li>
                  <a href="#who" className="hover:text-cyan-400 transition">
                    Dành cho ai
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-cyan-400 transition">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Địa chỉ</h4>
              <p className="text-slate-400 leading-relaxed">
                Trung tâm Phần mềm Đà Nẵng
                <br />
                Đà Nẵng, Việt Nam
                <br />
                <span className="text-cyan-400">Hub công nghệ miền Trung</span>
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="text-center">
              <p className="text-slate-400 mb-2">
                &copy; 2026 DAB-Lab. Cùng xây dựng tương lai AI tại Đà Nẵng.
              </p>
              <p className="text-xs text-slate-500">
                Da Nang AI & Blockchain Lab - Innovation Hub in Central Vietnam
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
