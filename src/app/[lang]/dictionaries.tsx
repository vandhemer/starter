import 'server-only'

const dictionaries = {
  fr: () => import('../dictionaries/fr/common.json').then((module) => module.default),
}

type LocaleType = keyof typeof dictionaries;

export const getDictionary = async (locale: LocaleType) => dictionaries[locale]();