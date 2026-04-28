import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Connexion" />

            <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
                {/* Subtle grid background */}
                <div className="pointer-events-none fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:64px_64px]" />
                </div>

                <div className="relative z-10 flex min-h-screen">
                    {/* Left: Form */}
                    <div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-16 lg:px-24">
                        <Link
                            href="/"
                            className="mb-16 text-xl font-bold tracking-tight"
                        >
                            KinMed
                        </Link>

                        <div className="max-w-sm">
                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                                Connexion
                            </p>
                            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                                Bienvenue.
                            </h1>
                            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                                Accedez a votre espace de gestion pharmacie.
                            </p>

                            <form
                                onSubmit={submit}
                                className="mt-12 space-y-8"
                            >
                                {status ? (
                                    <div className="border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700">
                                        {status}
                                    </div>
                                ) : null}

                                <div className="space-y-6">
                                    <div>
                                        <Label
                                            htmlFor="email"
                                            className="text-xs font-semibold uppercase tracking-wider text-neutral-500"
                                        >
                                            Adresse email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            onChange={(event) =>
                                                setData(
                                                    'email',
                                                    event.target.value,
                                                )
                                            }
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="nom@pharmacie.com"
                                            className="mt-2 h-12 border-0 border-b border-neutral-200 bg-transparent px-0 text-base placeholder:text-neutral-300 focus:border-black focus:ring-0 focus-visible:ring-0 rounded-none"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <Label
                                                htmlFor="password"
                                                className="text-xs font-semibold uppercase tracking-wider text-neutral-500"
                                            >
                                                Mot de passe
                                            </Label>
                                            {canResetPassword ? (
                                                <Link
                                                    href="/forgot-password"
                                                    className="text-xs text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition hover:text-black"
                                                    tabIndex={5}
                                                >
                                                    Oublie ?
                                                </Link>
                                            ) : null}
                                        </div>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                value={data.password}
                                                onChange={(event) =>
                                                    setData(
                                                        'password',
                                                        event.target.value,
                                                    )
                                                }
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                placeholder="Votre mot de passe"
                                                className="mt-2 h-12 border-0 border-b border-neutral-200 bg-transparent pr-10 px-0 text-base placeholder:text-neutral-300 focus:border-black focus:ring-0 focus-visible:ring-0 rounded-none"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((v) => !v)}
                                                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-neutral-400 transition hover:text-black"
                                                tabIndex={-1}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                        <InputError
                                            message={errors.password}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        checked={data.remember}
                                        onCheckedChange={(checked) =>
                                            setData(
                                                'remember',
                                                checked === true,
                                            )
                                        }
                                        tabIndex={3}
                                        className="border-neutral-300 data-[state=checked]:bg-black data-[state=checked]:border-black data-[state=checked]:text-white"
                                    />
                                    <Label
                                        htmlFor="remember"
                                        className="text-sm font-medium text-neutral-600"
                                    >
                                        Garder ma session active
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="group mt-2 inline-flex h-12 w-full items-center justify-center gap-2 bg-black px-6 text-sm font-semibold text-white transition hover:bg-neutral-800 rounded-none"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing ? (
                                        <Spinner />
                                    ) : (
                                        <>
                                            Se connecter
                                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                        </>
                                    )}
                                </Button>

                                {canRegister ? (
                                    <p className="text-center text-sm text-neutral-500">
                                        Pas encore de compte ?{' '}
                                        <Link
                                            href="/register"
                                            tabIndex={5}
                                            className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-current"
                                        >
                                            Creer un compte
                                        </Link>
                                    </p>
                                ) : null}
                            </form>
                        </div>
                    </div>

                    {/* Right: Abstract visual */}
                    <div className="relative hidden lg:block lg:w-1/2 bg-neutral-50">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative h-[28rem] w-[28rem]">
                                <div className="absolute inset-0 border border-neutral-200" />
                                <div className="absolute top-8 left-8 h-32 w-32 bg-black" />
                                <div className="absolute right-8 bottom-8 h-48 w-48 border border-black" />
                                <div className="absolute top-1/2 left-1/2 h-px w-48 -translate-x-1/2 -translate-y-1/2 bg-neutral-200" />
                                <div className="absolute top-1/2 left-1/2 h-48 w-px -translate-x-1/2 -translate-y-1/2 bg-neutral-200" />
                                <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 bg-black" />
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-8 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                            Gestion de pharmacie
                        </div>

                        <div className="absolute -bottom-4 right-8 select-none text-[14rem] font-bold leading-none text-neutral-100">
                            K
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
