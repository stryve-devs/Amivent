'use client'

import { motion } from 'framer-motion'

type Role = 'student' | 'organizer' | 'admin'

interface RoleSelectorProps {
  selectedRole: Role
  onRoleChange: (role: Role) => void
}

export default function RoleSelector({ selectedRole, onRoleChange }: RoleSelectorProps) {
  const roles: { value: Role; label: string }[] = [
    { value: 'student', label: 'Student' },
    { value: 'organizer', label: 'Organizer' },
    { value: 'admin', label: 'Admin' },
  ]

  return (
      <div className="mb-6 p-1.5 bg-[#f1f5f9] rounded-2xl flex items-center relative isolation-auto">
        {roles.map((role) => (
            <button
                key={role.value}
                type="button"
                onClick={() => onRoleChange(role.value)}
                className={`relative flex-1 py-2.5 z-10 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                    selectedRole === role.value ? 'text-[#14B8A6]' : 'text-slate-500'
                }`}
            >
              <span className="relative z-20">{role.label}</span>
              {selectedRole === role.value && (
                  <motion.div
                      layoutId="activeRoleHighlight"
                      className="absolute inset-0 bg-white rounded-xl shadow-sm z-10 pointer-events-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
              )}
            </button>
        ))}
      </div>
  )
}