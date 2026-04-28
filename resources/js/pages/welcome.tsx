import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import {
    Activity,
    ArrowRight,
    Boxes,
    Clock,
    Menu,
    ShieldCheck,
    Users,
    Wallet,
    X,
} from 'lucide-react';
import { dashboard, login, register } from '@/routes';
import type { SharedData } from '@/types';

const modules = [
    {
        title: 'Stock médicamenteux',
        description:
            'Suivi précis des entrées, sorties et ajustements. Alertes automatiques sur les seuils critiques.',
        icon: Boxes,
        number: '01',
    },
    {
        title: 'Alertes péremption',
        description:
            'Visualisation claire des produits à expiration proche et déjà périmés pour éviter les pertes.',
        icon: Clock,
        number: '02',
    },
    {
        title: 'Ventes & caisse',
        description:
            'Encaissement fluide au comptoir, gestion des ouvertures, fermetures et soldes journaliers.',
        icon: Wallet,
        number: '03',
    },
    {
        title: 'Équipes & rôles',
        description:
            'Invitation des collaborateurs avec des permissions adaptées : pharmacien, vendeur, gestionnaire.',
        icon: Users,
        number: '04',
    },
] as const;

const features = [
    {
        title: 'Multi-organisation',
        description:
            'Chaque pharmacie dispose de son propre espace isolé. Les données ne se mélangent jamais.',
    },
    {
        title: 'Collaboration sécurisée',
        description:
            "L'administrateur invite son équipe et attribue des rôles clairs à chaque membre.",
    },
    {
        title: 'Abonnement local',
        description:
            'Activation et paiement simplifiés via CinetPay. Pas de friction, pas de complexité.',
    },
];

const plans = [
    {
        name: 'Starter',
        price: '$29',
        period: '/ mois',
        features: [
            '1 point de vente',
            'Gestion stock & caisse',
            "Jusqu'à 5 collaborateurs",
        ],
        highlighted: false,
    },
    {
        name: 'Business',
        price: '$79',
        period: '/ mois',
        features: [
            'Multi-caisses',
            'Rapports avancés',
            "Jusqu'à 20 collaborateurs",
        ],
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: '$149',
        period: '/ mois',
        features: [
            'Collaborateurs illimités',
            'Support prioritaire',
            'Configuration sur mesure',
        ],
        highlighted: false,
    },
];

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="KinMed" />

            <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
                {/* Subtle grid background */}
                <div className="pointer-events-none fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:64px_64px]" />
                </div>

                <div className="relative z-10">
                    {/* Navigation */}
                    <header className="mx-auto max-w-7xl px-6 pt-8 pb-6 sm:px-8 lg:px-12">
                        <nav className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="text-xl font-bold tracking-tight"
                            >
                                KinMed
                            </Link>

                            <div className="hidden items-center gap-10 md:flex">
                                <a
                                    href="#modules"
                                    className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 transition hover:text-black"
                                >
                                    Modules
                                </a>
                                <a
                                    href="#architecture"
                                    className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 transition hover:text-black"
                                >
                                    Architecture
                                </a>
                                <a
                                    href="#tarifs"
                                    className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 transition hover:text-black"
                                >
                                    Tarifs
                                </a>
                            </div>

                            <div className="hidden items-center gap-3 md:flex">
                                {auth.user ? (
                                    <Link
                                        href={dashboard()}
                                        className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={login()}
                                            className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 transition hover:border-black hover:text-black"
                                        >
                                            Connexion
                                        </Link>
                                        {canRegister && (
                                            <Link
                                                href={register()}
                                                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800"
                                            >
                                                Essayer
                                            </Link>
                                        )}
                                    </>
                                )}
                            </div>

                            <button
                                type="button"
                                className="flex h-10 w-10 items-center justify-center md:hidden"
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </button>
                        </nav>

                        {isMobileMenuOpen && (
                            <div className="mt-6 space-y-4 border-t border-neutral-100 pt-6 md:hidden">
                                <a
                                    href="#modules"
                                    className="block text-sm font-medium text-neutral-600"
                                    onClick={() =>
                                        setIsMobileMenuOpen(false)
                                    }
                                >
                                    Modules
                                </a>
                                <a
                                    href="#architecture"
                                    className="block text-sm font-medium text-neutral-600"
                                    onClick={() =>
                                        setIsMobileMenuOpen(false)
                                    }
                                >
                                    Architecture
                                </a>
                                <a
                                    href="#tarifs"
                                    className="block text-sm font-medium text-neutral-600"
                                    onClick={() =>
                                        setIsMobileMenuOpen(false)
                                    }
                                >
                                    Tarifs
                                </a>
                                <div className="flex flex-col gap-2 pt-4">
                                    {auth.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={login()}
                                                className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700"
                                            >
                                                Connexion
                                            </Link>
                                            {canRegister && (
                                                <Link
                                                    href={register()}
                                                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
                                                >
                                                    Essayer
                                                </Link>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </header>

                    <main>
                        {/* Hero */}
                        <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24 lg:px-12 lg:pt-36 lg:pb-32">
                            <div className="max-w-4xl">
                                <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                                    Gestion de pharmacie
                                </p>
                                <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                                    La précision de votre stock,{' '}
                                    <span className="text-neutral-300">
                                        la sérénité de votre métier.
                                    </span>
                                </h1>
                                <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-500">
                                    KinMed centralise la gestion des
                                    médicaments, les alertes de péremption, les
                                    ventes et la caisse dans un outil simple,
                                    sécurisé et pensé pour les pharmacies.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-4">
                                    {auth.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                                        >
                                            Accéder au tableau de bord
                                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={register()}
                                                className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                                            >
                                                Créer mon espace
                                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                            </Link>
                                            <Link
                                                href={login()}
                                                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-black hover:text-black"
                                            >
                                                Se connecter
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Creative abstract blocks */}
                            <div className="mt-20 grid grid-cols-2 gap-px bg-neutral-200 sm:grid-cols-4">
                                {[
                                    { label: 'Stock', value: '100%' },
                                    { label: 'Rôles', value: '4+' },
                                    { label: 'Data', value: 'Isolé' },
                                    { label: 'Paiement', value: 'Local' },
                                ].map((item, i) => (
                                    <div
                                        key={item.label}
                                        className={`group flex flex-col justify-between bg-white p-6 transition hover:bg-black sm:aspect-square sm:p-8 ${i === 1 || i === 2 ? 'bg-neutral-50' : 'bg-white'}`}
                                    >
                                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 transition group-hover:text-neutral-500">
                                            {item.label}
                                        </span>
                                        <span className="mt-4 text-3xl font-light text-black transition group-hover:text-white sm:text-4xl">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Divider */}
                        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                            <div className="h-px w-full bg-neutral-100" />
                        </div>

                        {/* Modules */}
                        <section
                            id="modules"
                            className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                                        01 / Modules
                                    </p>
                                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                        Tout ce qu&apos;il faut pour{' '}
                                        <br className="hidden sm:block" />
                                        gérer une pharmacie moderne.
                                    </h2>
                                </div>
                                <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
                                    De la réception des médicaments à la vente
                                    au comptoir, chaque étape est couverte et
                                    simplifiée.
                                </p>
                            </div>

                            <div className="mt-16 grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
                                {modules.map((mod) => (
                                    <div
                                        key={mod.number}
                                        className="group bg-white p-8 transition hover:bg-black"
                                    >
                                        <div className="flex items-center justify-between">
                                            <mod.icon className="h-6 w-6 stroke-[1.5] text-neutral-900 transition group-hover:text-white" />
                                            <span className="text-xs font-medium text-neutral-300 transition group-hover:text-neutral-500">
                                                {mod.number}
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-semibold tracking-tight transition group-hover:text-white">
                                            {mod.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-neutral-500 transition group-hover:text-neutral-300">
                                            {mod.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Divider */}
                        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                            <div className="h-px w-full bg-neutral-100" />
                        </div>

                        {/* Architecture */}
                        <section
                            id="architecture"
                            className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12"
                        >
                            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                                        02 / Architecture
                                    </p>
                                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                        Une plateforme isolée, <br />
                                        sécurisée et évolutive.
                                    </h2>
                                    <div className="mt-10 space-y-8">
                                        {features.map((feat, i) => (
                                            <div
                                                key={i}
                                                className="flex gap-6"
                                            >
                                                <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-neutral-200 text-xs font-medium text-neutral-400">
                                                    {String(i + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-semibold">
                                                        {feat.title}
                                                    </h3>
                                                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                                                        {feat.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Abstract visual */}
                                <div className="relative aspect-square border border-neutral-200 bg-neutral-50">
                                    <div className="absolute inset-8 border border-neutral-200 bg-white">
                                        <div className="absolute top-8 left-8 h-16 w-16 bg-black" />
                                        <div className="absolute right-8 bottom-8 h-24 w-24 border border-black" />
                                        <div className="absolute top-1/2 left-1/2 h-px w-32 -translate-x-1/2 -translate-y-1/2 bg-neutral-200" />
                                        <div className="absolute top-1/2 left-1/2 h-32 w-px -translate-x-1/2 -translate-y-1/2 bg-neutral-200" />
                                    </div>
                                    <div className="absolute -right-4 -bottom-4 select-none text-[8rem] font-bold leading-none text-neutral-100">
                                        K
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Divider */}
                        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                            <div className="h-px w-full bg-neutral-100" />
                        </div>

                        {/* Pricing */}
                        <section
                            id="tarifs"
                            className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12"
                        >
                            <div className="text-center">
                                <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                                    03 / Tarifs
                                </p>
                                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Choisissez ce qui correspond{' '}
                                    <br className="hidden sm:block" />
                                    à la taille de votre pharmacie.
                                </h2>
                            </div>

                            <div className="mt-16 grid gap-6 lg:grid-cols-3">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.name}
                                        className={`relative flex flex-col border p-8 transition ${
                                            plan.highlighted
                                                ? 'border-black bg-black text-white'
                                                : 'border-neutral-200 bg-white text-black hover:border-neutral-400'
                                        }`}
                                    >
                                        <div className="flex items-baseline justify-between">
                                            <h3 className="text-sm font-semibold uppercase tracking-wider">
                                                {plan.name}
                                            </h3>
                                            {plan.highlighted && (
                                                <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                                                    Recommandé
                                                </span>
                                            )}
                                        </div>
                                        <div className="mt-6 flex items-baseline gap-1">
                                            <span className="text-4xl font-bold tracking-tight">
                                                {plan.price}
                                            </span>
                                            <span
                                                className={`text-sm ${
                                                    plan.highlighted
                                                        ? 'text-neutral-400'
                                                        : 'text-neutral-500'
                                                }`}
                                            >
                                                {plan.period}
                                            </span>
                                        </div>
                                        <div className="mt-8 space-y-3">
                                            {plan.features.map((f) => (
                                                <div
                                                    key={f}
                                                    className="flex items-center gap-3 text-sm"
                                                >
                                                    <div
                                                        className={`h-1.5 w-1.5 rounded-full ${
                                                            plan.highlighted
                                                                ? 'bg-white'
                                                                : 'bg-black'
                                                        }`}
                                                    />
                                                    <span
                                                        className={
                                                            plan.highlighted
                                                                ? 'text-neutral-300'
                                                                : 'text-neutral-600'
                                                        }
                                                    >
                                                        {f}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-auto pt-10">
                                            <Link
                                                href={register()}
                                                className={`flex w-full items-center justify-center py-3 text-xs font-semibold uppercase tracking-wider transition ${
                                                    plan.highlighted
                                                        ? 'bg-white text-black hover:bg-neutral-200'
                                                        : 'border border-neutral-200 text-black hover:border-black hover:bg-black hover:text-white'
                                                }`}
                                            >
                                                Commencer
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA */}
                        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 sm:pb-28 lg:px-12">
                            <div className="relative overflow-hidden bg-black px-8 py-16 text-white sm:px-12 sm:py-24 lg:px-16 lg:py-32">
                                <div className="relative z-10 max-w-3xl">
                                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                                        Passage à l&apos;action
                                    </p>
                                    <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                        Prêt à structurer <br />
                                        votre pharmacie ?
                                    </h2>
                                    <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-400">
                                        Rejoignez les pharmaciens qui utilisent
                                        KinMed pour gagner du temps, réduire les
                                        pertes et sécuriser leurs opérations.
                                    </p>
                                    <div className="mt-10 flex flex-wrap gap-4">
                                        {auth.user ? (
                                            <Link
                                                href={dashboard()}
                                                className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                                            >
                                                Ouvrir le dashboard
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href={register()}
                                                    className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                                                >
                                                    Créer mon espace
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                                <Link
                                                    href={login()}
                                                    className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                                                >
                                                    Se connecter
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Decorative grid */}
                                <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 opacity-5">
                                    <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="mx-auto max-w-7xl border-t border-neutral-100 px-6 py-8 sm:px-8 lg:px-12">
                            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                                <p className="text-sm font-semibold tracking-tight">
                                    KinMed
                                </p>
                                <p className="text-xs text-neutral-400">
                                    © {new Date().getFullYear()} KinMed. Tous
                                    droits réservés.
                                </p>
                            </div>
                        </footer>
                    </main>
                </div>
            </div>
        </>
    );
}
