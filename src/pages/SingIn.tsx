import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Checkbox } from "../components/Checkbox";
import { Logo } from "../Logo";
import { FormEvent, useState } from "react";

export function SignIn() {
    const [isUserSignIn, setIsUserSignIn] = useState(false);

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        setIsUserSignIn(true);
    }

    return (
        <div className="w-screen h-screen bg-slate-900 flex flex-col items-center justify-center">
            <div className="w-[25rem] h-[fit-content] p-4 rounded-[20px] bg-slate-100 flex flex-col items-center justify-center text-gray-800">
                <header className="flex flex-col items-center">
                    <Logo />

                    <Heading size="lg" className="mt-3 text-slate-900 font-black">
                        Day Notes
                    </Heading>

                    <Text size="lg" className="text-gray-400 mt-1">
                        Faça login e comece a usar!
                    </Text>
                </header>

                <form onSubmit={handleSignIn} className="flex flex-col gap-2 items-stretch w-full max-w-sm mt-4">
                    {isUserSignIn && <Text>Login realizado com sucesso!</Text>}
                    <label htmlFor="email" className="flex flex-col gap-3">
                        <Text className="font-semibold">Endereço de e-mail</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Envelope />
                            </TextInput.Icon>
                            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
                        </TextInput.Root>
                    </label>

                    <label htmlFor="password" className="flex flex-col gap-3">
                        <Text className="font-semibold">Sua senha</Text>
                        <TextInput.Root>
                        <TextInput.Icon>
                        <Lock />
                        </TextInput.Icon>

                        <TextInput.Input type="password" id="password" placeholder="********" />
                        </TextInput.Root>
                    </label>

                    <label htmlFor="remember" className="flex items-center gap-2">
                        <Checkbox id="remember"/>
                        <Text size="sm" className="text-gray-400">Lembrar de mim por 30 dias</Text>
                    </label>

                    <Button type="submit" className="mt-4">Entrar na plataforma</Button>
                </form>

                <footer className="flex flex-col items-center gap-2 mt-4">
                    <Text asChild size="sm" className="hover:text-cyan-500">
                        <a href="" className="underline">Esqueceu sua senha?</a>
                    </Text>
                    <Text asChild size="sm" className="hover:text-cyan-500">
                        <a href="" className="underline">Não possui conta? Crie uma agora!</a>
                    </Text>
                </footer>
            </div>    
        </div>
    );
}