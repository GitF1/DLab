import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Network, Cpu, Shield, Zap, Brain, Database } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Network,
      title: t('features.items.0.title'),
      description: t('features.items.0.description'),
      color: "blue",
      image: "https://images.unsplash.com/photo-1631864031821-320cf314b3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY5NTg4ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Brain,
      title: t('features.items.1.title'),
      description: t('features.items.1.description'),
      color: "purple",
      image: "https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YXxlbnwxfHx8fDE3Njk1ODgyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Shield,
      title: t('features.items.2.title'),
      description: t('features.items.2.description'),
      color: "green"
    },
    {
      icon: Zap,
      title: t('features.items.3.title'),
      description: t('features.items.3.description'),
      color: "yellow"
    },
    {
      icon: Database,
      title: t('features.items.4.title'),
      description: t('features.items.4.description'),
      color: "red"
    },
    {
      icon: Cpu,
      title: t('features.items.5.title'),
      description: t('features.items.5.description'),
      color: "indigo"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      border: "border-blue-200"
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600",
      border: "border-purple-200"
    },
    green: {
      bg: "bg-green-50",
      icon: "text-green-600",
      border: "border-green-200"
    },
    yellow: {
      bg: "bg-yellow-50",
      icon: "text-yellow-600",
      border: "border-yellow-200"
    },
    red: {
      bg: "bg-red-50",
      icon: "text-red-600",
      border: "border-red-200"
    },
    indigo: {
      bg: "bg-indigo-50",
      icon: "text-indigo-600",
      border: "border-indigo-200"
    }
  };

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">{t('features.title')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-xl mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Featured Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1631864031821-320cf314b3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY5NTg4ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Blockchain Technology"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YXxlbnwxfHx8fDE3Njk1ODgyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Artificial Intelligence"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
