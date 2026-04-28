export default function Footer() {
  return (
      <footer className="w-full py-4 px-8 bg-[#ecfdf5]/50 border-t border-[#d1fae5] backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          <div className="flex items-center gap-2 mb-2">
          <span className="text-[12px] font-bold text-[#064e3b]">
            Amivent Digital Portal
          </span>
            <span className="text-[#a7f3d0]">|</span>
            <span className="text-[10px] text-[#065f46]/60">
            © 2026 Amivent
          </span>
          </div>

          <div className="flex gap-6">
            {["Privacy Policy", "Institutional Access", "Support"].map((link) => (
                <a
                    key={link}
                    href="#"
                    className="text-[10px] font-bold text-[#065f46]/70 hover:text-[#059669] transition-colors"
                >
                  {link}
                </a>
            ))}
          </div>
        </div>
      </footer>
  )
}