import Link from "next/link";

const HeroSection = () => {
  return (
    <header className="text-center bg-gray-100 py-14 h-screen flex flex-col justify-center">
      <h1 className="font-bold text-5xl">
        Welcome to <span className="text-blue-500 underline">TailwindCSS</span>
      </h1>
      <h2 className="font-normal text-2xl text-gray-500 italic my-8">
        Let's learn how you can use TailwindCSS to create beautiful pages like
        this one in minutes.
      </h2>
      <div className="p-5">
        <Link href="#cards">
          <a className="font-bold text-white uppercase bg-blue-500 rounded p-4">
            Get Started
          </a>
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;
