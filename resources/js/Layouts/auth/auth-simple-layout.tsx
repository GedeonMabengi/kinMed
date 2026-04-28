import { Link } from '@inertiajs/react';
import { ArrowUpRight, ShieldCheck, ShoppingBag, Wallet } from 'lucide-react';
import AppLogoIcon from '@/components/app-logo-icon';
import type { AuthLayoutProps } from '@/types';

const highlights = [
    {
        title: 'Stock maitrise',
        description:
            'Surveille les alertes, les produits critiques et les mouvements en un coup d oeil.',
        icon: ShieldCheck,
    },
    {
        title: 'Ventes fluides',
        description:
            'Encaisse vite avec un point de vente concu pour le rythme du comptoir.',
        icon: ShoppingBag,
    },
    {
        title: 'Caisse claire',
        description:
            'Ouvre, alimente et cloture la caisse avec une synthese nette.',
        icon: Wallet,
    },
];

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="min-h-svh bg-neutral-50 p-4 text-neutral-900 md:p-6">
            <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100 shadow-[0_28px_90px_-52px_rgba(0,0,0,0.12)] md:min-h-[calc(100vh-3rem)]">
                <div className="relative flex flex-1 flex-col justify-between bg-white p-6 sm:p-8 lg:p-12">
                    <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_60%)]" />

                    <div className="relative">
                        <div className="flex items-center justify-between gap-4">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-sm">
                                    <AppLogoIcon className="h-7 w-7 fill-current" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.28em] text-neutral-500 uppercase">
                                        KinMed
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-neutral-900">
                                        Gestion Pharmacie
                                    </p>
                                </div>
                            </Link>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50"
                            >
                                <span>Accueil</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="mt-12 max-w-xl">
                            <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-semibold tracking-[0.24em] text-neutral-700">
                                AUTHENTIFICATION
                            </span>
                            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                                {title}
                            </h1>
                            <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-10 w-full max-w-xl">
                        <div className="rounded-[28px] border border-neutral-200 bg-white/95 p-6 shadow-[0_18px_50px_-35px_rgba(0,0,0,0.08)] sm:p-8">
                            {children}
                        </div>
                    </div>

                    <div className="relative mt-8 text-xs leading-6 text-neutral-500">
                        Acces securise a l espace de gestion de la pharmacie, des
                        stocks et de la caisse.
                    </div>
                </div>

                <aside className="relative hidden w-[40%] flex-col justify-between bg-neutral-900 px-8 py-10 text-white lg:flex">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_24%)]" />

                    <div className="relative">
                        <p className="text-xs font-semibold tracking-[0.32em] text-neutral-400 uppercase">
                            Plateforme metier
                        </p>
                        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white">
                            Une interface sobre, rapide et orientee operations.
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-neutral-400">
                            L univers visuel reprend l esprit de l accueil: tons
                            ivoire, contraste net et cartes denses pour inspirer
                            confiance des l entree.
                        </p>
                    </div>

                    <div className="relative mt-10 space-y-4">
                        {highlights.map(
                            ({
                                title: itemTitle,
                                description: itemDescription,
                                icon: Icon,
                            }) => (
                                <div
                                    key={itemTitle}
                                    className="rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-2xl bg-white/10 p-3 text-neutral-300">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {itemTitle}
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-neutral-400">
                                                {itemDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>

                    <div className="relative mt-10 grid grid-cols-2 gap-4">
                        <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                            <p className="text-sm text-neutral-400">Modules</p>
                            <p className="mt-2 text-3xl font-extrabold text-white">
                                4+
                            </p>
                            <p className="mt-2 text-sm text-neutral-400">
                                stocks, ventes, caisse, admin
                            </p>
                        </div>
                        <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                            <p className="text-sm text-neutral-400">Acces</p>
                            <p className="mt-2 text-3xl font-extrabold text-white">
                                Role
                            </p>
                            <p className="mt-2 text-sm text-neutral-400">
                                permissions adaptees par profil
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
