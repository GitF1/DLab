import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Sparkles, Rocket, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import TextType from "./ui/TextType";
import SplitText from "@/components/SplitText";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1750365919971-7dd273e7b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMG5ldHdvcmslMjBkaWdpdGFsfGVufDF8fHx8MTc2OTY0OTY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <ShinyText
              text="Sắp ra mắt tại Đà Nẵng"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={200}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="font-medium"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
          >
            <SplitText
              className="text-center"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            >
              <span className="text-white font-bold text-4xl md:text-7xl lg:text-8xl">
                DAB-Lab
              </span>
              <div className="text-blue-400/80  font-bold text-4xl md:text-7xl lg:text-8xl">
                AI &amp; Blockchain
              </div>
              <span className="text-white font-bold text-4xl md:text-7xl lg:text-8xl">
                Innovation Hub
              </span>
            </SplitText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            <TextType
              text={[
                "Không gian nghiên cứu và phát triển đặt tại Trung tâm Phần mềm Đà Nẵng",
                "Hub công nghệ năng động nhất miền Trung Việt Nam",
              ]}
              typingSpeed={65}
              pauseDuration={2900}
              showCursor
              cursorCharacter="▎"
              variableSpeedEnabled
              deletingSpeed={35}
              variableSpeedMin={75}
              variableSpeedMax={170}
              cursorBlinkDuration={1.3}
              textColors={["text-cyan-400"]}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="#contact">
              <button className="group bg-gradient-to-r cursor-pointer from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-[80px] hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-3 text-lg font-semibold">
                Tham gia DAB-Lab
                <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </a>
            <a href="#about">
              <button className="border-2 border-cyan-500/50 text-cyan-400 px-10 py-5 rounded-xl hover:bg-cyan-500/10 transition-all text-lg font-semibold">
                Tìm hiểu thêm
              </button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                <CountUp
                  from={0}
                  to={40}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                -
                <CountUp
                  from={10}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                %
              </div>
              <div className="text-sm text-slate-400">Chi phí thấp hơn</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                #1
              </div>
              <div className="text-sm text-slate-400">Hub miền Trung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                Sandbox
              </div>
              <div className="text-sm text-slate-400">Chính sách đặc thù</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-slate-400">Môi trường Lab</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span className="text-sm">Khám phá</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
