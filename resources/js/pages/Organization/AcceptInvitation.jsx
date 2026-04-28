import { Head, Link, useForm } from '@inertiajs/react';

export default function AcceptInvitation({ invitation }) {
    const form = useForm({
        name: '',
        password: '',
        password_confirmation: '',
    });

    return (
        <div className="min-h-screen bg-neutral-50 px-4 py-10">
            <Head title="Rejoindre une organisation" />

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-[2rem] border border-[neutral-200] bg-[white] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
                    <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-semibold tracking-[0.25em] text-neutral-700 uppercase">
                        Invitation
                    </span>
                    <h1 className="mt-4 text-4xl font-black tracking-tight text-black">
                        Rejoignez {invitation.organization.name}
                    </h1>
                    <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                        Votre acces a deja ete prepare. Finalisez simplement
                        votre compte pour retrouver votre role, vos permissions
                        et votre espace de travail.
                    </p>

                    <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-5">
                            <dt className="text-sm text-neutral-500">
                                Organisation
                            </dt>
                            <dd className="mt-2 text-lg font-bold text-black">
                                {invitation.organization.name}
                            </dd>
                        </div>
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-5">
                            <dt className="text-sm text-neutral-500">Role</dt>
                            <dd className="mt-2 text-lg font-bold text-black">
                                {invitation.role}
                            </dd>
                        </div>
                        <div className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-5 sm:col-span-2">
                            <dt className="text-sm text-neutral-500">
                                Adresse invitee
                            </dt>
                            <dd className="mt-2 text-lg font-bold text-black">
                                {invitation.email}
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className="rounded-[2rem] border border-[neutral-200] bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-black">
                            Creer le compte collaborateur
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-[neutral-600]">
                            Le compte sera relie a cette organisation des la
                            validation.
                        </p>
                    </div>

                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            form.post(
                                `/organization/invitations/${invitation.token}/accept`,
                            );
                        }}
                        className="mt-8 space-y-5"
                    >
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-neutral-800">
                                Nom complet
                            </label>
                            <input
                                type="text"
                                value={form.data.name}
                                onChange={(event) =>
                                    form.setData('name', event.target.value)
                                }
                                className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-black transition outline-none focus:border-black"
                                placeholder="Nom du collaborateur"
                            />
                            {form.errors.name ? (
                                <p className="text-sm text-neutral-600">
                                    {form.errors.name}
                                </p>
                            ) : null}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-neutral-800">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                value={form.data.password}
                                onChange={(event) =>
                                    form.setData('password', event.target.value)
                                }
                                className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-black transition outline-none focus:border-black"
                                placeholder="Mot de passe"
                            />
                            {form.errors.password ? (
                                <p className="text-sm text-neutral-600">
                                    {form.errors.password}
                                </p>
                            ) : null}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-neutral-800">
                                Confirmation du mot de passe
                            </label>
                            <input
                                type="password"
                                value={form.data.password_confirmation}
                                onChange={(event) =>
                                    form.setData(
                                        'password_confirmation',
                                        event.target.value,
                                    )
                                }
                                className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-black transition outline-none focus:border-black"
                                placeholder="Confirmez le mot de passe"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={form.processing}
                            className="flex h-12 w-full items-center justify-center rounded-2xl bg-black text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            Finaliser et acceder a l&apos;application
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-neutral-500">
                        Vous avez deja un compte ?{' '}
                        <Link
                            href="/login"
                            className="font-semibold text-neutral-700"
                        >
                            Se connecter
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
