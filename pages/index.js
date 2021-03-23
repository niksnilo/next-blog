import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section
        id="cards"
        className="bg-gray-50 py-14 h-screen flex flex-col justify-center items-center"
      >
        <h3 className="font-bold text-5xl mb-8">Cards</h3>

        <div className="flex w-full justify-center">
          <Card />
          <Card />
        </div>

        <div className="flex w-full justify-center">
          <Card />
          <Card />
        </div>
      </section>
      <Footer />
    </div>
  );
}
