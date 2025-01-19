import { Language } from 'epic-language'
import { state } from 'epic-state'

export const Data = state({
  language: Language.de,
  setLanguage: (language: Language) => {
    Data.language = language
  },
})
