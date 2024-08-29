import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-400 to-cyan-600">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="ml-2 text-3xl font-bold text-white dark:text-black">Mimily</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-xs hover:underline underline-offset-4 text-white">
            Home
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="mt-4">
              Welcome to Mimily! By using our services, you agree to the following terms and conditions...
            </p>
            <h2 className="mt-6 text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using the Mimily website, you agree to comply with and be bound by these Terms of Service...
            </p>
            {/* Add more sections as needed */}
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10">
        <p className="text-xs text-white">© 2024 Mimily. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="/privacy">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
