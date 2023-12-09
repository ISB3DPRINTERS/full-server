import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="flex p-2 px-4 text-xl bg-black  text-white font-bold justify-between">
                Main Page
            </div>

            <div className="flex justify-center p-4">
                <div>
                    <div className="w-full" style={{ textAlign: "center" }}>
                        ISB3DPRINTERS Project Main Page
                    </div>
                    <div className="text-sm">
                        <h1 className="text-xl font-bold mt-2">
                            Technologies Used
                        </h1>
                        <span className="font-bold">Next.js:</span> Used for the
                        overall frontend framework, providing features like fast
                        navigation and server-side rendering. <br />
                        <span className="font-bold">Tailwind CSS:</span>
                        Utilized for the application&apos;s styling, offering
                        utility classes that make it easy to build responsive
                        and maintainable UIs. <br />
                        <span className="font-bold">Supabase:</span> Used for
                        the backend, specifically for handling user
                        authentication. <br />
                        <span className="font-bold">TMDB API:</span> Provides
                        the data for popular movies, which is fetched and
                        displayed in the application. <br />
                        <span className="font-bold">React Query:</span> Used for
                        data fetching, caching, and state management for the
                        TMDB API calls.
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-2xl">
                <Link href="/auth" className="hover:text-purple-400">
                    Go to Teachers Console
                </Link>
            </div>
        </div>
    );
}
