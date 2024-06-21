import { FreeStatSheetForm } from "./free-stat-sheet-form";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="pt-52 text-center px-4">
        <h1 className="font-black text-5xl md:text-8xl font-display md:leading-[4.8rem]">
          YOUR GUIDE TO <br />
          VOLLEYBALL STATS
        </h1>
        <p className="md:text-lg font-body mt-6">
          Learn how to track volleyball stats and improve your game.
        </p>
        <p className="md:text-lg font-body">
          Get your <span className="font-bold">FREE</span> volleyball stat sheet
          below!
        </p>
        <div className="max-w-2xl mx-auto mt-10">
          <FreeStatSheetForm />
        </div>
      </section>
    </main>
  );
}
