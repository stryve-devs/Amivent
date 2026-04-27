'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoginForm from '@/components/auth/LoginForm'
import SignupForm from '@/components/auth/SignupForm'
import Footer from '@/components/auth/Footer'

export default function AuthPage() {
    // Set to true by default so "Sign In" shows first as requested
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="flex flex-col h-screen w-full bg-[#f7f9fc] overflow-hidden">
            <header className="flex flex-col items-center pt-8 pb-3 relative z-20">
                <div className="bg-[#4FDBC8] p-3 rounded-2xl shadow-sm mb-3">
                    <span className="material-symbols-outlined text-[#003730] text-2xl font-bold">account_balance</span>
                </div>
                <h1 className="text-3xl font-bold text-[#003730] tracking-tight">Amivent</h1>
                <p className="text-[10px] font-bold text-[#6c7a77] uppercase tracking-[0.3em]">Academic Event Portal</p>
            </header>

            <main className="flex-grow flex items-center justify-center p-4 relative">
                <div className="relative w-full max-w-[850px] h-[550px] bg-white rounded-[3rem] shadow-[0px_30px_70px_rgba(0,0,0,0.08)] overflow-hidden flex border border-white">

                    <div className="absolute inset-0 flex z-10">
                        <div className="w-1/2 h-full flex items-center justify-center p-12">
                            <motion.div animate={{ opacity: isLogin ? 0 : 1, scale: isLogin ? 0.9 : 1 }} transition={{ duration: 0.4 }} className="w-full">
                                <SignupForm />
                            </motion.div>
                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center p-12">
                            <motion.div animate={{ opacity: isLogin ? 1 : 0, scale: isLogin ? 1 : 0.9 }} transition={{ duration: 0.4 }} className="w-full">
                                <LoginForm />
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={false}
                        animate={{ x: isLogin ? '0%' : '100%' }}
                        transition={{ type: "spring", stiffness: 180, damping: 22 }}
                        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-br from-[#4FDBC8] to-[#14B8A6] z-30 flex items-center justify-center text-white shadow-2xl"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? 'welcome' : 'hello'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center p-12"
                            >
                                <h2 className="text-4xl font-extrabold mb-4">{isLogin ? 'Welcome Back!' : 'Hello, Friend!'}</h2>
                                <p className="mb-10 text-sm opacity-90">
                                    {isLogin ? 'Login to access your curator tools.' : 'Start your journey with Amivent.'}
                                </p>
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="px-14 py-3.5 border-2 border-white rounded-xl font-bold uppercase text-[10px] hover:bg-white hover:text-[#14B8A6] transition-all"
                                >
                                    {isLogin ? 'Register' : 'Sign In'}
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    )
}