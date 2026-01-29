import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { MapPin, Palmtree, Waves, Sun } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Location() {
  const { t } = useTranslation();
  
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">{t('location.title')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('location.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-slate-900">{t('location.features.0.title')}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('location.features.0.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Waves className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-slate-900">{t('location.features.1.title')}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('location.features.1.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sun className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-slate-900">{t('location.features.2.title')}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('location.features.2.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Palmtree className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-slate-900">{t('location.features.3.title')}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('location.features.3.description')}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755795652039-c95221cc55fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYSUyME5hbmclMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3Njk2MTM0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Da Nang Beach"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
          <div className="text-center">
            <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('location.stats.ranking')}
            </div>
            <div className="text-sm text-slate-600">{t('location.stats.rankingLabel')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('location.stats.beaches')}
            </div>
            <div className="text-sm text-slate-600">{t('location.stats.beachesLabel')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('location.stats.population')}
            </div>
            <div className="text-sm text-slate-600">{t('location.stats.populationLabel')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('location.stats.unescoSites')}
            </div>
            <div className="text-sm text-slate-600">{t('location.stats.unescoSitesLabel')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
