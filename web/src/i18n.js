import i18n from 'i18next'
import LocizeBackend from 'i18next-locize-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

// Common translations namespace
export const COMMON_TRANSLATIONS = 'common'

export default i18n
  .use(LocizeBackend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    appendNamespaceToCIMode: true,
    saveMissing: true,

    // common namespace used around the full app
    ns: [COMMON_TRANSLATIONS],
    defaultNS: COMMON_TRANSLATIONS,

    backend: {
      projectId: 'cc9961dc-2df7-4c22-8895-1cff493b2e53',
      apiKey: 'ac95e7b6-9fb8-4bc7-8aa2-43a37e17cc5a',
      referenceLng: 'ru'
    },

    react: {
      wait: true
    }
  })