import { DrawerProvider } from "@/contexts/DrawerContext";
import DictionaryProvider from "@/contexts/DictionnaryContext";
import { getDictionary } from '@/app/[lang]/dictionaries';

export async function Providers({ children }: { children: React.ReactNode }) {

    const dictionary = await getDictionary('fr');

    return (
        <DictionaryProvider dictionary={dictionary}>
            <DrawerProvider>
                {children}
                <div id="drawer" />
            </DrawerProvider>
        </DictionaryProvider>

    )
}