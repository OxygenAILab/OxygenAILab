import { useEffect } from "react";
import { Footer, Header } from "./components/Chrome";
import PageMotion from "./components/Motion";
import { About, Approach, Hero, Model, Products } from "./components/Sections";

export default function App() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      // 用户可能手改地址栏或点到脏链接（#123、#空格），querySelector 会抛错
      let target: Element | null = null;
      try {
        target = document.querySelector(hash);
      } catch {
        target = null;
      }
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    }

    return () => {};
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <PageMotion />
      <Header />
      <main id="main">
        <Hero />
        <Products />
        <Model />
        <Approach />
        <About />
      </main>
      <Footer />
    </>
  );
}
