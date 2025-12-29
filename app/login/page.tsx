import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-6 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-md">
                <LoginForm />
            </div>
        </div>
    )
}
