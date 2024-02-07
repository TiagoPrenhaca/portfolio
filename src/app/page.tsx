import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

export default function Main() {
  return (
    <main className="bg-backgrounds-main">
      <section className="px-20 py-12 text-white min-h-screen flex flex-col justify-center">
        <Image
          src="/hero-illustration.svg"
          alt="Illustration"
          width={1014}
          height={1080}
          className="absolute max-h-screen right-0"
        />
        <header className="mb-auto z-10">
          <div className="flex items-center z-10">
            <p className="text-5xl font-semibold uppercase text-white">
              Tiago <span className="text-white/80">Prenhaca</span>
            </p>
            <div className="flex items-center gap-10 ml-auto">
              <p className="flex items-center gap-1 text-4xl cursor-pointer transition-colors hover:text-white/80">
                EN
                <ChevronDown size={38} />
              </p>
              <Menu
                size={38}
                className="cursor-pointer transition-colors hover:text-white/80"
              />
            </div>
          </div>
        </header>
        <div className="mb-20 mt-10">
          <h1 className="text-white text-6xl leading-[70px] font-monos">
            Hi! <br />
            I'm <b>Tiago</b>, <br /> a software engineer
          </h1>
        </div>
        <div className="mb-auto">
          <button className="bg-purple-base text-white font-semibold text-4xl uppercase px-8 py-5 rounded-2xl transition-colors hover:bg-purple-hover">
            I develop cool stuff
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className="text-white/50 font-light">scroll</p>
          <Image
            src="/arrow-down.svg"
            width={20}
            height={20}
            alt="Arrow poiting down"
            className="animate-bounce"
          />
        </div>
      </section>
    </main>
  );
}
