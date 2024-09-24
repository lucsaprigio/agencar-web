'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Signin() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="relative flex flex-col items-center justify-center h-screen bg-[url('/background-signin.jpg')] bg-cover after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-slate-800 after:opacity-75">
            <section className="w-full h-full grid grid-cols-2 px-24 py-16 z-50">
                <div className="relative rounded-l-lg shadow-lg bg-[url('/background.jpg')] bg-cover bg-no-repeat after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-slate-800 after:opacity-75 after:rounded-l-lg">
                    <div className="flex flex-col items-center justify-center space-y-14 px-10 py-16">
                        <span className="text-gray-50 z-50 text-4xl font-bold">Agencar</span>
                        <span className="text-gray-50 z-50 text-2xl font-bold text-center">Faça login para começar a agendar suas aulas!</span>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-gray-200 p-20 space-y-6 rounded-r-lg shadow-lg">
                    <span className="font-bold text-2xl">Bem-vindo</span>
                    <span className="text-1xl">Faça seu login para continuar</span>
                    <div className="w-full">
                        <label htmlFor="email">Email</label>
                        <Input type="email" id="email" className="border-zinc-900 shadow-md" placeholder="Digite seu email" />
                    </div>
                    <div className="relative w-full">
                        <label htmlFor="email">Senha</label>
                        <Input type={`${!showPassword ? "password" : "text"}`} className="border-zinc-900 shadow-md" placeholder="Digite sua senha" />
                        <button className="absolute right-2 bottom-[5px]" onClick={() => setShowPassword(!showPassword)}>
                            {
                                !!showPassword ? (
                                    <Eye />
                                ) : (
                                    <EyeOff />
                                )
                            }
                        </button>
                    </div>
                    <div>
                        <Link className="text-md underline" href="#">Esqueci minha senha</Link>
                    </div>
                    <Button variant="outline" className="bg-slate-400 hover:bg-slate-900 hover:text-gray-200 w-full">
                        Entrar
                    </Button>
                </div>
            </section>
        </main>
    )
}