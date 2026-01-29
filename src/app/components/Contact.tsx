import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  
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
    alert(t('contact.form.submitSuccess'));
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
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 text-zinc-300 px-4 py-1.5 rounded-full mb-6">
              <Send className="w-3.5 h-3.5" />
              <span className="text-sm font-medium">{t('contact.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t('contact.description')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Contact Form */}
          <ScrollAnimation delay={0.2} className="lg:col-span-2">
            <div className="relative bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-zinc-700/50 p-6 md:p-10 overflow-hidden shadow-2xl shadow-white/5">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-zinc-800/50 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-zinc-800/50 rounded-full blur-[60px] -ml-10 -mb-10 pointer-events-none"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <h3 className="relative z-10 text-2xl mb-8 text-white font-semibold flex items-center gap-3">
                {t('contact.form.title')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm text-zinc-400 font-medium"
                    >
                      {t('contact.form.name')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/40 transition duration-200"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm text-zinc-400 font-medium"
                    >
                      {t('contact.form.email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/40 transition duration-200"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm text-zinc-400 font-medium"
                    >
                      {t('contact.form.company')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/40 transition duration-200"
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm text-zinc-400 font-medium"
                    >
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/40 transition duration-200"
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3.5 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors duration-200 flex items-center justify-center gap-2 font-semibold text-sm"
                  >
                    {t('contact.form.submit')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation delay={0.4} className="lg:col-span-1">
            <div className="h-full flex flex-col gap-6">
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 p-8 flex-1">
                <h3 className="text-xl mb-6 text-white font-semibold">
                  {t('contact.info.title')}
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">{t('contact.info.address.title')}</div>
                      <div className="text-zinc-400 text-sm leading-relaxed">
                        {t('contact.info.address.text')}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">{t('contact.info.email.title')}</div>
                      <div className="text-zinc-400 text-sm">
                        {t('contact.info.email.text')}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">{t('contact.info.hours.title')}</div>
                      <div className="text-zinc-400 text-sm">
                        {t('contact.info.hours.text')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700/50">
                 <h4 className="text-white font-bold text-lg mb-2">{t('contact.community.title')}</h4>
                 <p className="text-zinc-400 text-sm mb-4">{t('contact.community.description')}</p>
                  <button className="text-sm font-semibold text-white underline underline-offset-4 hover:text-zinc-300">
                   {t('contact.community.cta')}
                 </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
