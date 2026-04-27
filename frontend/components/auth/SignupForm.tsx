'use client'

export default function SignupForm() {
    return (
        <div className="w-full max-w-[320px] mx-auto px-4">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-[#003730] mb-1">Create Account</h2>
                <p className="text-[10px] tracking-widest font-bold text-[#6c7a77] uppercase">
                    Join the Atheneum
                </p>
            </div>

            <form className="space-y-4">
                <div className="space-y-1">
                    <label className="block text-[12px] font-bold text-[#191c1e] px-1">Full Name</label>
                    <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6c7a77] text-[20px]">
              person
            </span>
                        <input type="text" className="w-full pl-11 pr-4 py-3 bg-[#f2f4f7] rounded-xl text-sm" placeholder="John Doe" />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="block text-[12px] font-bold text-[#191c1e] px-1">University Email</label>
                    <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6c7a77] text-[20px]">
              alternate_email
            </span>
                        <input type="email" className="w-full pl-11 pr-4 py-3 bg-[#f2f4f7] rounded-xl text-sm" placeholder="name@amicon.edu" />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="block text-[12px] font-bold text-[#191c1e] px-1">Password</label>
                    <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6c7a77] text-[20px]">
              lock_reset
            </span>
                        <input type="password" className="w-full pl-11 pr-4 py-3 bg-[#f2f4f7] rounded-xl text-sm" placeholder="••••••••" />
                    </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#4FDBC8] to-[#14B8A6] text-white font-bold py-3.5 rounded-xl shadow-md hover:-translate-y-0.5 transition-all text-sm mt-4">
                    Register
                </button>
            </form>
        </div>
    )
}