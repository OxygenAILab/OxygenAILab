import { siteConfig } from "../config";

const channels = [
  {
    title: "一般咨询",
    email: siteConfig.contactEmail,
    copy: "产品、研究与合作相关的一般问题。",
  },
  {
    title: "实验室面试",
    email: siteConfig.labEmail,
    copy: "研究与技术方向，请附简历与项目介绍。",
  },
  {
    title: "加入源川氧合",
    email: siteConfig.hrEmail,
    copy: "运营、市场与合作方向。",
  },
];

export default function Contact() {
  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="contact-hero-title">
        <p className="eyebrow">联系我们</p>
        <h1 id="contact-hero-title">选一个邮箱，直接写。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          我们是小团队，没有专门的自助客服。写清楚你的问题，我们会尽快回复。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="contact-list-title">
        <div className="card-grid">
          {channels.map((item) => (
            <article className="card" key={item.email}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a className="text-link" href={`mailto:${item.email}`}>{item.email}&nbsp;&rarr;</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
