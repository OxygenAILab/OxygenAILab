const items = [
  {
    date: "2026-09",
    tag: "产品",
    title: "Prima Beta 调研持续进行中",
    copy: "我们正在邀请真实用户参与 Prima 前期调研，用约 5 分钟描述你的使用习惯、痛点和服务期待。入选用户有机会提前体验产品。",
    link: { label: "参与调研", href: "https://prima.oxygenai.top/beta/", external: true },
  },
  {
    date: "2026-09",
    tag: "研究",
    title: "模型矩阵页面上线",
    copy: "我们在 Oxygen 官网公开了模型矩阵的规划概览：序列生成路线、隐状态动力学路线与校准决策路线，以及它们与 Prima 产品验证的衔接方式。",
    link: { label: "查看模型矩阵", href: "/model/", external: false },
  },
  {
    date: "2026-08",
    tag: "品牌",
    title: "Oxygen AI 官网上线",
    copy: "以「让推理、记忆与执行长在一起」为主题的新官网正式上线，同期上线 Prima 官网与 Beta 申请通道。",
    link: { label: "访问 Prima 官网", href: "https://prima.oxygenai.top/", external: true },
  },
];

export default function News() {
  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="news-hero-title">
        <p className="eyebrow">新闻与动态</p>
        <h1 id="news-hero-title">我们在做什么。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          产品进展、研究里程碑与团队动态都会在这里更新。我们只发布可验证的内容。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="news-list-title">
        <h2 id="news-list-title" className="visually-hidden">动态列表</h2>
        <div className="news-list">
          {items.map((item) => (
            <article className="news-item" key={item.title}>
              <div className="news-meta">
                <span className="news-date">{item.date}</span>
                <span className={`tag ${item.tag === "研究" ? "peri" : item.tag === "产品" ? "mint" : "gray"}`}>{item.tag}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              {item.link.external ? (
                <a className="text-link" href={item.link.href} target="_blank" rel="noopener noreferrer">{item.link.label}&nbsp;&rarr;</a>
              ) : (
                <a className="text-link" href={item.link.href}>{item.link.label}&nbsp;&rarr;</a>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
