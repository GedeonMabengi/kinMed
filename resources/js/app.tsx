import { createInertiaApp, router } from '@inertiajs/react';
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'KinMed';
const pages = {
    ...import.meta.glob('./pages/**/*.tsx'),
    ...import.meta.glob('./pages/**/*.jsx'),
} as Record<string, () => Promise<{ default: never }>>;

function NavigationLoader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => setLoading(true);
        const finish = () => setLoading(false);
        const error = () => setLoading(false);

        const removeStart = router.on('start', start);
        const removeFinish = router.on('finish', finish);
        const removeError = router.on('error', error);

        return () => {
            removeStart();
            removeFinish();
            removeError();
        };
    }, []);

    return (
        <>
            {children}
            {loading && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white text-black">
                    <div className="text-center">
                        <p className="text-2xl font-bold tracking-tight">
                            {appName}
                        </p>
                        <div className="mt-4 h-px w-24 bg-neutral-200 mx-auto overflow-hidden">
                            <div className="h-full w-1/2 bg-black animate-[slide_1s_ease-in-out_infinite]" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        const page =
            pages[`./pages/${name}.tsx`] ?? pages[`./pages/${name}.jsx`];

        if (!page) {
            throw new Error(`Page Inertia introuvable: ${name}`);
        }

        const module = await page();

        return module.default;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <NavigationLoader>
                    <App {...props} />
                </NavigationLoader>
            </StrictMode>,
        );
    },
    progress: {
        color: '#0f172a',
    },
});

initializeTheme();
