import { siteConfig } from "../config";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";

type Channel = { title: Localized; email: string; copy: Localized };

const channels: Channel[] = [
  {
    title: { zh: "一般咨询", en: "General inquiries" },
    email: siteConfig.contactEmail,
    copy: {
      zh: "产品、研究与合作相关的一般问题。",
      en: "General questions about products, research, and partnerships.",
    },
  },
  {
    title: { zh: "实验室面试", en: "Lab interviews" },
    email: siteConfig.labEmail,
    copy: {
      zh: "研究与技术方向，请附简历与项目介绍。",
      en: "Research and engineering; attach a resume and project introduction.",
    },
  },
  {
    title: { zh: "加入源川氧合", en: "Join Yuanchuan Oxygen" },
    email: siteConfig.hrEmail,
    copy: {
      zh: "运营、市场与合作方向。",
      en: "Operations, marketing, and partnership roles.",
    },
  },
];

export default function Contact() {
  const { locale } = useI18n();

  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="contact-hero-title">
        <p className="eyebrow">{locale === "zh" ? "联系我们" : "Contact us"}</p>
        <h1 id="contact-hero-title">{locale === "zh" ? "选一个邮箱，直接写。" : "Choose an inbox and write directly."}</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          {locale === "zh"
            ? "我们是小团队，没有专门的自助客服。写清楚你的问题，我们会尽快回复。"
            : "We are a small team without dedicated self-service support. State your question clearly and we will reply as soon as possible."}
        </p>
      </section>

      <section className="container about-section" aria-labelledby="contact-list-title">
        <div className="card-grid">
          {channels.map((item) => (
            <article className="card" key={item.email}>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
              <a className="text-link" href={`mailto:${item.email}`}>{item.email}&nbsp;&rarr;</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
