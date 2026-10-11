
"use client";

import { useState } from "react";

const sounds = [
  {
    name: "Thunderstorm",
    category: "Nature",
    description: "Rain, distant thunder and peaceful nights.",
    icon: "⛈️",
    color: "from-indigo-900 to-slate-900",
  },
  {
    name: "Binaural Focus",
    category: "Focus",
    description: "Gentle waves for concentration and clarity.",
    icon: "〰️",
    color: "from-cyan-950 to-blue-950",
  },
  {
    name: "Deep Ocean",
    category: "Nature",
    description: "Submerge your thoughts into blue silence.",
    icon: "🌊",
    color: "from-blue-950 to-teal-900",
  },
  {
    name: "Lo-Fi Vinyl",
    category: "Focus",
    description: "Warm crackles for creative moments.",
    icon: "🎧",
    color: "from-purple-950 to-fuchsia-950",
  },
  {
    name: "Midnight Rain",
    category: "Sleep",
    description: "Soft rainfall to settle your mind.",
    icon: "🌧️",
    color: "from-slate-900 to-indigo-950",
  },
  {
    name: "Cosmic Drift",
    category: "Sleep",
    description: "Float through a galaxy of ambient sound.",
    icon: "✨",
    color: "from-violet-950 to-slate-950",
  },
];

const benefits = [
  {
    number: "01",
    title: "Find your focus",
    description:
      "Create a calmer listening space for reading, studying and creative work.",
  },
  {
    number: "02",
    title: "Unwind naturally",
    description:
      "Explore gentle soundscapes designed to accompany your evening routine.",
  },
  {
    number: "03",
    title: "Your personal ritual",
    description:
      "Shape your own atmosphere with adjustable sound levels and combinations.",
  },
];

export default function Home() {
  const [volumes, setVolumes] = useState([65, 35, 50, 25]);
  const [active, setActive] = useState("All");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const filters = ["All", "Nature", "Focus", "Sleep"];

  const visibleSounds =
    active === "All"
      ? sounds
      : sounds.filter((sound) => sound.category === active);

  function updateVolume(index: number, value: number) {
    setVolumes((previous) =>
      previous.map((volume, i) => (i === index ? value : volume))
    );
  }

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thanks! The signup demo is working.");
    setEmail("");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0c10] text-white selection:bg-[#66fcf1] selection:text-[#0b0c10]">
      <header className="relative z-10 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#home" className="text-lg font-black tracking-[0.16em]">
            SONIA<span className="text-[#66fcf1]">.</span>SANCUARY
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#sounds" className="transition hover:text-[#66fcf1]">
              Sound Library
            </a>
            <a href="#science" className="transition hover:text-[#66fcf1]">
              The Experience
            </a>
            <a href="#membership" className="transition hover:text-[#66fcf1]">
              Membership
            </a>
          </div>

          <a
            href="#sounds"
            className="rounded-full border border-[#66fcf1]/50 px-5 py-2.5 text-sm font-semibold text-[#66fcf1] transition hover:bg-[#66fcf1] hover:text-[#0b0c10]"
          >
            Explore sounds ↗
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:min-h-[650px] md:grid-cols-2 md:py-28"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-700/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="relative z-[1]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#66fcf1]/20 bg-[#66fcf1]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#66fcf1]">
            <span className="h-2 w-2 rounded-full bg-[#66fcf1]" />
            Your space. Your sound.
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Find your
            <br />
            own kind of
            <br />
            <span className="bg-gradient-to-r from-[#66fcf1] via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              silence.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-gray-400 sm:text-lg">
            A personal sanctuary of immersive sound. Slow down, find your
            rhythm, and create an atmosphere that feels like yours.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#sounds"
              className="rounded-full bg-[#66fcf1] px-7 py-4 font-bold text-[#0b0c10] transition hover:scale-105"
            >
              Enter your sanctuary ↗
            </a>
            <a
              href="#science"
              className="rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-white/40"
            >
              Discover the experience
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-bold">01</p>
              <p className="mt-1 text-xs text-gray-500">Find your focus</p>
            </div>
            <div>
              <p className="text-2xl font-bold">∞</p>
              <p className="mt-1 text-xs text-gray-500">Your own atmosphere</p>
            </div>
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="mt-1 text-xs text-gray-500">A moment for you</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-cyan-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#171923] p-3 shadow-2xl shadow-black/40">
            <div className="relative h-[310px] overflow-hidden rounded-[1.5rem] sm:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1100&q=85"
                alt="Premium headphones for an immersive listening experience"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-black/10" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs backdrop-blur-md">
                PERSONAL AUDIO SPACE
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#66fcf1]">
                  Recommended atmosphere
                </p>
                <h2 className="mt-2 text-3xl font-bold">Deep Focus</h2>
                <p className="mt-2 text-sm text-gray-300">
                  Less noise. More room to think.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 p-3">
              <div className="rounded-xl bg-white/5 p-3 text-center">
                <span className="text-xl">🌧️</span>
                <p className="mt-2 text-xs text-gray-300">Rain</p>
              </div>
              <div className="rounded-xl bg-[#66fcf1]/10 p-3 text-center">
                <span className="text-xl">〰️</span>
                <p className="mt-2 text-xs text-[#66fcf1]">Focus</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3 text-center">
                <span className="text-xl">🌊</span>
                <p className="mt-2 text-xs text-gray-300">Ocean</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-[#171923]/95 p-4 shadow-xl backdrop-blur-xl sm:block">
            <p className="text-xs text-gray-400">YOUR MOMENT</p>
            <p className="mt-1 font-semibold">Breathe. Listen. Reset.</p>
          </div>
        </div>
      </section>

      <section id="sounds" className="border-y border-white/10 bg-[#101117]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#66fcf1]">
                The sound library
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Choose your atmosphere.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-gray-400">
                From the sound of distant storms to soft ambient textures,
                explore a space for every mood.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active === filter
                      ? "bg-[#66fcf1] font-semibold text-[#0b0c10]"
                      : "border border-white/10 text-gray-300 hover:border-[#66fcf1]/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleSounds.map((sound, index) => (
              <article
                key={sound.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171923] transition duration-300 hover:-translate-y-1 hover:border-[#66fcf1]/40"
              >
                <div
                  className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${sound.color}`}
                >
                  <div className="absolute h-32 w-32 rounded-full border border-white/10 transition duration-500 group-hover:scale-125" />
                  <div className="absolute h-24 w-24 rounded-full border border-white/10" />
                  <span className="relative text-5xl transition duration-300 group-hover:scale-110">
                    {sound.icon}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-200">
                    {sound.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold">{sound.name}</h3>
                    <span className="text-sm text-[#66fcf1]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-gray-400">
                    {sound.description}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setMessage(
                        `${sound.name} selected. Sound playback is not connected yet.`
                      )
                    }
                    className="mt-5 w-full rounded-xl border border-white/10 py-3 text-sm font-semibold transition hover:border-[#66fcf1]/50 hover:bg-[#66fcf1]/5"
                  >
                    Explore sound ↗
                  </button>
                </div>
              </article>
            ))}
          </div>

          {message && (
            <p
              role="status"
              className="mt-6 rounded-xl border border-[#66fcf1]/20 bg-[#66fcf1]/5 p-4 text-sm text-[#66fcf1]"
            >
              {message}
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#66fcf1]">
            Your personal sound mixer
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            Fine-tune the
            <br />
            feeling.
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-gray-400">
            Every moment feels different. Adjust these sample levels to design
            your own visual sound mix.
          </p>

          <div className="mt-8 space-y-6">
            {[
              { name: "Thunderstorm", icon: "⛈️" },
              { name: "Binaural Focus Waves", icon: "〰️" },
              { name: "Deep Ocean Pressure", icon: "🌊" },
              { name: "Lo-Fi Vinyl Crackle", icon: "🎧" },
            ].map((item, index) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/10 bg-[#14151c] p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <label
                      htmlFor={`volume-${index}`}
                      className="text-sm font-semibold sm:text-base"
                    >
                      {item.name}
                    </label>
                  </div>
                  <span className="text-sm tabular-nums text-[#66fcf1]">
                    {volumes[index]}%
                  </span>
                </div>
                <input
                  id={`volume-${index}`}
                  type="range"
                  min="0"
                  max="100"
                  value={volumes[index]}
                  onChange={(event) =>
                    updateVolume(index, Number(event.target.value))
                  }
                  className="mt-5 w-full cursor-pointer accent-[#66fcf1]"
                  aria-label={`${item.name} sample volume`}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setVolumes([65, 35, 50, 25]);
              setMessage("Your mixer has been reset.");
            }}
            className="mt-5 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-[#66fcf1]/50"
          >
            Reset mixer
          </button>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1f2833] via-[#151824] to-violet-950/40 p-7 sm:p-10">
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Your sound profile
              </span>
              <span className="rounded-full border border-[#66fcf1]/20 px-3 py-1 text-xs text-[#66fcf1]">
                CUSTOM MIX
              </span>
            </div>

            <div className="mt-10 flex h-40 items-center justify-center gap-1.5">
              {Array.from({ length: 35 }, (_, index) => (
                <div
                  key={index}
                  className="w-1.5 rounded-full bg-gradient-to-t from-violet-500 to-[#66fcf1] opacity-80"
                  style={{
                    height: `${15 + ((index * 17 + 23) % 80)}%`,
                  }}
                />
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-2xl font-bold">Your quiet universe.</p>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                A little less outside noise. A little more space for what
                matters to you.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-black/20 p-4">
                  <p className="text-xs text-gray-500">SOUND LAYERS</p>
                  <p className="mt-2 text-2xl font-bold">04</p>
                </div>
                <div className="rounded-xl bg-black/20 p-4">
                  <p className="text-xs text-gray-500">MIX INTENSITY</p>
                  <p className="mt-2 text-2xl font-bold">
                    {Math.round(
                      volumes.reduce((total, value) => total + value, 0) / 4
                    )}
                    %
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="science" className="bg-[#101117]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#66fcf1]">
              Designed around your moment
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Make space for yourself.
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              A thoughtful listening experience for the moments when you want
              to pause, reflect, work or wind down.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-2xl border border-white/10 bg-[#171923] p-7 transition hover:border-[#66fcf1]/30"
              >
                <p className="text-sm font-bold text-[#66fcf1]">
                  / {benefit.number}
                </p>
                <h3 className="mt-7 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#66fcf1]/20 bg-gradient-to-br from-[#1b2430] to-[#171323] p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[90px]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#66fcf1]">
              Your next chapter
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
              Give your mind somewhere to breathe.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
              Explore your own listening ritual and discover a calmer way to
              experience everyday moments.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                required
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#66fcf1]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#66fcf1] px-7 py-4 font-bold text-[#0b0c10] transition hover:scale-105"
              >
                Join the journey ↗
              </button>
            </form>

            <p className="mt-4 text-xs text-gray-500">
              This is a front-end demo. Email addresses are not sent or stored.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-gray-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="font-black tracking-[0.15em] text-white">
            SONIA<span className="text-[#66fcf1]">.</span>SANCUARY
          </a>
          <p>Make room for calm. Make room for you.</p>
          <a href="#home" className="transition hover:text-[#66fcf1]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
