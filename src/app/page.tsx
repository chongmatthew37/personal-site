import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <section className="glass-panel p-8 mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-light mb-4">matthew chong</h1>
          <p className="text-gray-600 text-lg mb-6">
            b.s. computer science @ georgia tech
            <br />
            founder • engineer • creator
          </p>
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/1F7zpIlu1oZRtsv7CeYWF1jyPnxHonZuj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              resume
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-chong1/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              linkedin
            </a>
            <a
              href="https://github.com/chongmatthew37"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              github
            </a>
            <a
              href="https://www.youtube.com/@matthwchong"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              youtube
            </a>
            <a
              href="https://x.com/matthwchong"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              twitter/x
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 ml-8 w-48 h-48 rounded-full overflow-hidden relative">
          <Image
            src="https://raw.githubusercontent.com/matthwchong/matthwchong.github.io/main/public/headshot.jpeg"
            alt="Matthew Chong"
            fill
            className="object-cover object-[center_35%]"
            priority
          />
        </div>
      </section>

      <section className="glass-panel p-8 mb-8">
        <h2 className="text-2xl font-light mb-6">about</h2>
        <p className="text-gray-600 leading-relaxed">
          hi! my name is matthew. i am a fourth year computer science student at georgia tech concentrating in information internetworks and people.
          i hope to bridge the connection between business and computer science using programming to build people-centered applications. when i'm not building, i spend my time djing, running, and creating content. 
        </p>
      </section>

      <section className="glass-panel p-8 mb-8">
        <h2 className="text-2xl font-light mb-6">experience</h2>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex-grow">
                <h3 className="text-xl mb-1">software engineering intern @ coinbase</h3>
                <p className="text-base text-gray-500 mb-2">may 2025 - present • san francisco, ca</p>
                <p className="text-gray-600">platform identity access team</p>
              </div>
              <div className="w-16 h-16 flex-shrink-0 relative">
                <Image
                  src="https://raw.githubusercontent.com/matthwchong/matthwchong.github.io/main/public/coinbase.png"
                  alt="Coinbase logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex-grow">
                <h3 className="text-xl mb-1">software engineering intern @ gtri</h3>
                <p className="text-base text-gray-500 mb-2">august 2024 - december 2024 • atlanta, ga</p>
                <p className="text-gray-600">developed full-stack applications for US airforce training exercises</p>
              </div>
              <div className="w-16 h-16 flex-shrink-0 relative">
                <Image
                  src="https://raw.githubusercontent.com/matthwchong/matthwchong.github.io/main/public/gtri.jpg"
                  alt="GTRI logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex-grow">
                <h3 className="text-xl mb-1">software engineering intern @ honeywell</h3>
                <p className="text-base text-gray-500 mb-2">may 2024 - august 2024 • atlanta, ga</p>
                <p className="text-gray-600">cloud infrastructure and devops for large scale consumers</p>
              </div>
              <div className="w-16 h-16 flex-shrink-0 relative">
                <Image
                  src="https://raw.githubusercontent.com/matthwchong/matthwchong.github.io/main/public/honeywell.png"
                  alt="Honeywell logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex-grow">
                <h3 className="text-xl mb-1">technical team lead @ data science at georgia tech</h3>
                <p className="text-base text-gray-500 mb-2">august 2022 - may 2023 • atlanta, ga</p>
                <p className="text-gray-600">led development of hackathon participant portal</p>
              </div>
              <div className="w-16 h-16 flex-shrink-0 relative">
                <Image
                  src="https://raw.githubusercontent.com/matthwchong/matthwchong.github.io/main/public/dsgt.png"
                  alt="DSGT logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-1">software engineering intern @ treborsoft</h3>
            <p className="text-base text-gray-500 mb-2">august 2021 - january 2022 • remote</p>
            <p className="text-gray-600">scalable web and mobile app for personalized consumer scheduling</p>
          </div>
        </div>
      </section>

      <section className="glass-panel p-8 mb-8">
        <h2 className="text-2xl font-light mb-6">projects</h2>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl">dockable</h3>
                  <a
                    href="https://dockable.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    visit →
                  </a>
                </div>
                <p className="text-base text-gray-500 mb-2">founder • startup</p>
                <p className="text-gray-600">dockable provides the integrative contract agent and infrastructure for contracts to be signed and generated anywhere, over $500+ in MRR</p>
              </div>
              <div className="w-16 h-16 flex-shrink-0 relative">
                <Image
                  src="https://raw.githubusercontent.com/matthwchong/matthwchong.github.io/main/public/dockable.png"
                  alt="Dockable logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl">trippin</h3>
              <a
                href="https://matthwchong.github.io/Trippin/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                visit →
              </a>
            </div>
            <p className="text-base text-gray-500 mb-2">developer • hackathon project</p>
            <p className="text-gray-600">developed a Spotify blend-inspired machine learning algorithm to generate personalized trip itineraries by merging travel preferences of invited friends </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl">rb hub</h3>
              <a
                href="https://river-bluff-high-school.firebaseapp.com/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                visit →
              </a>
            </div>
            <p className="text-base text-gray-500 mb-2">high school congressional app challenge submission</p>
            <p className="text-gray-600">built a full-stack application to automate contact tracing and student location for schools in the district</p>
          </div>
        </div>
      </section>

      <section className="glass-panel p-8 mb-8">
        <h2 className="text-2xl font-light mb-6">hobbies</h2>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl">dj</h3>
              <a
                href="https://drive.google.com/file/d/1xSQ-YOxPWzgxePEjNDGVOQNjNTXJb6Ht/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                listen →
              </a>
            </div>
            <p className="text-base text-gray-500 mb-2">house & electronic music</p>
            <p className="text-gray-600">mixing music and performing at local venues and events in atlanta</p>
          </div>
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl mb-1">running</h3>
            <p className="text-base text-gray-500 mb-2">half marathon training</p>
            <p className="text-gray-600">training for my first half marathon, currently running 15-20 miles per week</p>
          </div>
          <div>
            <h3 className="text-xl mb-1">content creation</h3>
            <p className="text-base text-gray-500 mb-2">tech & lifestyle</p>
            <p className="text-gray-600">sharing my journey in tech, productivity tips, and lifestyle content across YouTube and Twitter</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-12">
        2025 © matthew chong
      </footer>
    </main>
  );
}
