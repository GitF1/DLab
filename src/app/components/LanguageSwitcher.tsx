import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Check, ChevronDown , Globe} from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    console.log('Changing language to:', lng);
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-800/50"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden sm:flex items-center gap-1">
          {currentLanguage?.flag} {currentLanguage?.name}
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {isOpen && (
        <>
          {/* Overlay to close dropdown */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 top-full mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-lg min-w-[160px] z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-slate-800 transition-colors first:rounded-t-lg last:rounded-b-lg"
              >
                <span className="flex items-center gap-2 text-slate-300">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
                {i18n.language === lang.code && (
                  <Check className="h-4 w-4 text-cyan-400" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
