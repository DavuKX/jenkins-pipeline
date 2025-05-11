export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#1a1a1a] dark:to-[#2b2b2b] text-center px-6 sm:px-10">
      <main className="space-y-6 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Welcome to My Project
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          This is a simple landing page to demonstrate CI/CD deployment using Jenkins.
        </p>
      </main>

      <footer className="mt-16 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} DevOps Demo Project
      </footer>
    </div>
  );
}
