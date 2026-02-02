import { Rocket, Building, Globe, Lightbulb, MapPin, Users, Briefcase } from "lucide-react";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useTranslation } from 'react-i18next';

export default function ForWho() {
  const { t } = useTranslation();
  
  const targetAudience = [
    {
      title: t('forWho.targetAudience.0.title'),
      description: t('forWho.targetAudience.0.description'),
      color: "from-cyan-500 to-blue-500",
      image: "/assets/img/city.jpg",
      benefits: t('forWho.targetAudience.0.benefits', { returnObjects: true }) as string[],
    },
    {
      title: t('forWho.targetAudience.1.title'),
      description: t('forWho.targetAudience.1.description'),
      color: "from-blue-500 to-purple-500",
      image: "/assets/img/bridge.jpg",
      benefits: t('forWho.targetAudience.1.benefits', { returnObjects: true }) as string[],
    },
    {
      title: t('forWho.targetAudience.2.title'),
      description: t('forWho.targetAudience.2.description'),
      color: "from-purple-500 to-pink-500",
      image: "/assets/img/InternationalTeam.jpeg",
      benefits: t('forWho.targetAudience.2.benefits', { returnObjects: true }) as string[],
    },
    {
      title: t('forWho.targetAudience.3.title'),
      description: t('forWho.targetAudience.3.description'),
      color: "from-pink-500 to-rose-500",
      image: "/assets/img/high.png",
      benefits: t('forWho.targetAudience.3.benefits', { returnObjects: true }) as string[],
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
              <span className="text-sm font-medium">{t('forWho.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                {t('forWho.title')}
              </span>{" "}
              {t('forWho.titleSuffix')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t('forWho.description')}
            </p>
          </div>
        </ScrollAnimation>

        {/* Target Audience Cards */}
        <div className="mb-20">
          <ScrollStack
            useWindowScroll
            className="overflow-visible"
            blurAmount={90}
          >
            {targetAudience.map((target, index) => {
              const isOdd = (index + 1) % 2 === 1;
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
                        className={`flex flex-col lg:flex-row ${isOdd ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-stretch`}
                      >
                        <div className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl border border-cyan-500/20">
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent"></div>
                          <ImageWithFallback
                            src={target.image}
                            alt={target.title}
                            className="w-full h-64 lg:h-full object-cover"
                          />
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col">
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
                  src="assets/img/BL-AI.jpeg"
                  alt="Blockchain Technology"
                  className="w-full h-[500px] object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-2xl text-white font-semibold mb-2">
                    {t('forWho.visualTitle')}
                  </h4>
                  <p className="text-slate-200">
                    {t('forWho.visualDescription')}
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl mb-6 text-white">
                {t('forWho.ecosystemTitle')}{" "}
                <span className="text-cyan-400">{t('forWho.ecosystemTitleHighlight')}</span>
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {t('forWho.ecosystemDescription')}
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-white font-semibold">
                      {t('forWho.ecosystemFeatures.0.title')}
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {t('forWho.ecosystemFeatures.0.description')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-white font-semibold">
                      {t('forWho.ecosystemFeatures.1.title')}
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {t('forWho.ecosystemFeatures.1.description')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2 text-white font-semibold">
                      {t('forWho.ecosystemFeatures.2.title')}
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {t('forWho.ecosystemFeatures.2.description')}
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
