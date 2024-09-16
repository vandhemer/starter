import 'server-only'
 
const dictionaries = {
  fr: () => import('../dictionaries/fr/common.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: string) => dictionaries[locale]();