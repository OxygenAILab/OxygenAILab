import { useEffect } from "react";
import { Footer, Header } from "./components/Chrome";
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
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
