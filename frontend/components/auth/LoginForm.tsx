'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation' //
import RoleSelector from './RoleSelector'

export default function LoginForm() {
    const router = useRouter() //
    const [role, setRole] = useState<'student' | 'organizer' | 'admin'>('student')

    const handleSignIn = (e: React.FormEvent) => {
        // This prevents the page from refreshing
        e.preventDefault()

        // This forces the redirect to your Amivent dashboard immediately
        router.push('/events')
    }

    return (
        <div className="w-full max-w-[320px] mx-auto px-4">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-[#003730] mb-1">Sign In</h2>
            </div>

            <RoleSelector selectedRole={role} onRoleChange={(r) => setRole(r)} />

            {/* Attach the handler to the form's onSubmit */}
            <form className="space-y-4 mt-6" onSubmit={handleSignIn}>
                <div className="space-y-1">
                    <label className="block text-[12px] font-bold text-[#191c1e] px-1">Email</label>
                    <input
                        type="email"
                        // IMPORTANT: Ensure 'required' is NOT here so you can click with empty fields
                        className="w-full px-4 py-3 bg-[#f2f4f7] rounded-xl text-sm outline-none"
                        placeholder="name@amicon.edu"
                    />
                </div>
                <div className="space-y-1">
                    <label className="block text-[12px] font-bold text-[#191c1e] px-1">Password</label>
                    <input
                        type="password"
                        // IMPORTANT: Ensure 'required' is NOT here
                        className="w-full px-4 py-3 bg-[#f2f4f7] rounded-xl text-sm outline-none"
                        placeholder="••••••••"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4FDBC8] to-[#14B8A6] text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm mt-4 active:scale-95"
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}