
import { createContext, type ReactElement, useContext, useState } from "react";
import type {THeader} from './types.ts';

interface IContext {
    headerData: THeader[];
    setHeaderData: (header: THeader[]) => void;
}

type TChildren = {
    children: ReactElement;
}

const AppContext = createContext<IContext | undefined>(undefined);

export const AppProvider = ({ children }: TChildren) => {

    const [headerData, setHeaderData] = useState<THeader[]>([
        {
            id: 1,
            title: 'Home',
            link: '',
            active: false
        },
        {
            id: 2,
            title: 'Features',
            link: 'features',
            active: false
        },
        {
            id: 3,
            title: 'FAQ',
            link: 'faq',
            active: false
        },
        {
            id: 4,
            title: 'Purchase',
            link: '',
            active: false
        },
        {
            id: 5,
            title: 'Discord',
            link: '',
            active: false
        },
    ]);

    return (
        <AppContext.Provider
            value = {{
                headerData, setHeaderData
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useGlobalContext must be used as an context');
    }
    return context;
}
