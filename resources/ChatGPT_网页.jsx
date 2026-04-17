import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Sparkles,
  Clock3,
  GitBranch,
  Search,
  Users,
  Stars,
  ScrollText,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

const chapters = [
  {
    no: 1,
    title: "卷一",
    isNew: false,
    tagline: "无聊的小镇，被宇宙异物刺破",
    events: [
      "薇拉抱怨德尔斐镇过于无聊，坚信有趣的事都在远方。",
      "她和青梅竹马萨奇谈起镇上新来的住户。",
      "薇拉拜访新住户时撞见黑发少年艾克与触手异物，日常从此失控。",
    ],
    theme: "远方的召唤",
  },
  {
    no: 2,
    title: "卷二",
    isNew: false,
    tagline: "门通向宇宙，青春从不只是年龄",
    events: [
      "艾克解释家中的门可通往宇宙任意角落。",
      "薇拉第一次被卷入异界危机，也第一次真正踏上冒险。",
      "‘穿过童年，抵达青春’成为整部作品的成长命题。",
    ],
    theme: "成长仪式",
  },
  {
    no: 3,
    title: "卷三",
    isNew: false,
    tagline: "公主登场，情感与权力同时介入",
    events: [
      "安德罗-巴西利克斯公主登场，自称仙女座帝国继承序列中的重要人物。",
      "她直言希望与艾克联姻，以换取政治安全。",
      "萨奇开始意识到自己在薇拉与艾克之间的弱势与嫉妒。",
    ],
    theme: "竞争性情感",
  },
  {
    no: 4,
    title: "卷四",
    isNew: false,
    tagline: "星星不属于任何人，但爱开始互相拉扯",
    events: [
      "艾克强调‘星星不属于任何人’，正面回应占有与嫉妒。",
      "萨奇鼓起勇气表达心意，却被公主轻蔑地否定。",
      "四人关系从冒险同伴彻底变成高张力情感系统。",
    ],
    theme: "占有与自由",
  },
  {
    no: 5,
    title: "卷五",
    isNew: false,
    tagline: "黑色喜剧外壳下的残酷宇宙",
    events: [
      "艾克午睡时，麾下诸多魔神为争强爆发荒诞大战。",
      "公主种族‘吃眼’的文化首次被清楚揭示。",
      "萨奇在绝对力量面前只能靠‘投降’保命，自卑被进一步放大。",
    ],
    theme: "爱与臣服",
  },
  {
    no: 6,
    title: "卷六",
    isNew: false,
    tagline: "想离开故乡的人，终于发现自己最熟悉的仍是故乡",
    events: [
      "节日前夕，薇拉向伙伴讲述家乡传说。",
      "艾克用宇宙视角轻描淡写地拆解‘世界中心’的浪漫。",
      "薇拉意识到，自己最熟悉也最难割舍的仍是德尔斐。",
    ],
    theme: "离乡与归属",
  },
  {
    no: 7,
    title: "卷七",
    isNew: false,
    tagline: "宏大政治、星海救援与圣龙真相",
    events: [
      "仙女座帝国与边陲星团势力冲突升级，萨奇与公主卷入绑架危机。",
      "艾克向星海众生发言，把个人关系抛到众生存亡的尺度上。",
      "圣王列班宁出手相救，并揭示自己与圣龙的复合身份。",
    ],
    theme: "个人与宇宙",
  },
  {
    no: 8,
    title: "卷八",
    isNew: false,
    tagline: "最关键的一夜被故意留白",
    events: [
      "‘少女夜话’被文本刻意省略，形成第一层叙事空洞。",
      "艾克解释公主文化中的‘吃眼’同时意味着臣服与恋慕。",
      "公主将爱、征服与安全感视作同一逻辑链条。",
    ],
    theme: "留白与误读",
  },
  {
    no: 9,
    title: "卷九",
    isNew: false,
    tagline: "喜剧突然坠入死亡与悖论",
    events: [
      "四人关系在青春期的情感张力中持续失衡。",
      "薇拉被象征命运推进的古剑划伤，远古病毒夺去性命。",
      "艾克提出全书最关键的命题：只有未来拯救过去。",
    ],
    theme: "命运与不可逆",
  },
  {
    no: 10,
    title: "卷十",
    isNew: false,
    tagline: "二十年冒险救回过去，却救不回童年",
    events: [
      "萨奇、艾克与公主经历横跨二十年的艰险冒险，终于复活薇拉。",
      "艾克自称‘时间的回音’，承认自己也受更高规则束缚。",
      "萨奇被送回启程之日，故事回到起点，但四人已不可能回到天真。",
    ],
    theme: "循环与代价",
  },
  {
    no: 11,
    title: "最终卷（版本一）",
    isNew: true,
    tagline: "公主与艾克的余波：幸福能否被夺回？",
    events: [
      "文本先以‘两份来源不明的手写稿’提出元叙事谜题。",
      "公主承认自己始终无法放下萨奇，并提出在薇拉终老后把萨奇带走。",
      "艾克在夜风里高喊‘我爱你们所有人’，却无法让呼喊真正抵达任何中心。",
    ],
    theme: "占有、分岔与余波",
  },
  {
    no: 12,
    title: "最终卷（版本二）",
    isNew: true,
    tagline: "萨奇再度出征，薇拉在世界中心等待",
    events: [
      "婚约将近时，艾克再度出现，称宇宙将毁灭，需要萨奇再次启程。",
      "本卷把‘我爱你’重新定义为一种必须被旅程证明的命题。",
      "薇拉在漫长等待中轻声重复‘我爱你们所有人’，以守望取代抢夺。",
    ],
    theme: "证明、等待与守望",
  },
];

const timeline = [
  "德尔斐小镇的少女薇拉觉得世界无聊，远方才有意义。",
  "她因艾克闯入通往宇宙的冒险，童年日常开始崩塌。",
  "公主介入后，友情、爱情、权力与嫉妒缠在一起。",
  "冒险越走越大，‘爱’也被扭转成占有、臣服与安全感的混合体。",
  "薇拉死亡，故事从浪漫太空剧骤然坠入时间悖论。",
  "二十年冒险换来复活，却无法换回未曾失去的童年。",
  "新增两部最终卷把结局分裂成两种手稿、两条收束路径。",
];

const relationCards = [
  {
    name: "薇拉 × 艾克",
    desc: "薇拉把艾克视为‘远方’与‘未知’本身，也是青春对更大世界的投射。",
  },
  {
    name: "萨奇 × 薇拉",
    desc: "萨奇代表故乡、日常与守护欲。他爱薇拉，却总在艾克面前感到自卑。",
  },
  {
    name: "公主 × 薇拉 / 萨奇",
    desc: "公主把爱、占有与安全感缠成一体，她既竞争，也想把重要之人纳入自己的秩序。",
  },
  {
    name: "艾克 × 所有人",
    desc: "艾克像是推动命运的高位存在，既是向导，也是让人无法真正掌握的时间回音。",
  },
];

const themes = [
  {
    title: "青春不是年龄，而是告别童年的过程",
    body: "全书最核心的情绪并不是‘忧郁’本身，而是少年人对既定人生脚本的反抗。",
    icon: Sparkles,
  },
  {
    title: "远方并非地理概念，而是心灵尺度",
    body: "艾克反复削弱‘宇宙奇观’的崇高感，把远方改写成一种认知与心灵的容量。",
    icon: Stars,
  },
  {
    title: "爱与臣服被故意写成同一种危险语言",
    body: "‘吃眼’设定让浪漫关系与权力结构强行焊接，爱情因此变得并不纯洁。",
    icon: Users,
  },
  {
    title: "只有未来拯救过去",
    body: "卷九与卷十将宏大宇宙剧压缩成时间伦理：过去不能改写，但未来可以为过去付出代价。",
    icon: Clock3,
  },
];

const mysteries = [
  "两份最终卷手稿究竟谁写的？哪一份更接近‘真实结局’？",
  "希尔妲是否把自己的创伤投射进了版本二？",
  "《少女薇拉的忧郁》在提瓦特世界里，到底只是小说，还是被改写过的真实事件？",
  "德尔斐究竟是不是世界中心，还是只有在‘被证明的爱’里它才成立？",
];

function SectionTitle({ icon: Icon, eyebrow, title, desc }) {
  return (
    <div className="mb-6">
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        <Icon className="h-3.5 w-3.5" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      {desc ? <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65 md:text-base">{desc}</p> : null}
    </div>
  );
}

export default function VeraMelancholyPage() {
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeCompare, setActiveCompare] = useState("v1");

  const filteredChapters = useMemo(() => {
    return chapters.filter((c) => {
      const hitFilter =
        filter === "all" ? true : filter === "new" ? c.isNew : !c.isNew;
      const q = keyword.trim().toLowerCase();
      const haystack = `${c.title} ${c.tagline} ${c.events.join(" ")} ${c.theme}`.toLowerCase();
      const hitKeyword = !q || haystack.includes(q);
      return hitFilter && hitKeyword;
    });
  }, [keyword, filter]);

  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute right-0 top-80 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <header className="mb-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="grid gap-6 p-6 md:grid-cols-[1.25fr_0.75fr] md:p-10">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                <BookOpen className="h-3.5 w-3.5" />
                基于研究报告整理的单页网页
              </div>
              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                《少女薇拉的忧郁》
                <span className="block text-white/70">剧情梳理与版本增补全览</span>
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                这不是一部单纯的“少女冒险小说”。它从德尔斐小镇的青春无聊感出发，逐渐滑向太空歌剧、情感错位、权力结构与时间悖论。到最新版本为止，系列已从传统认知中的 10 卷扩展为 12 卷，并新增两部彼此对照的“最终卷”。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "总卷数：12",
                  "新增章节：2",
                  "核心议题：青春 / 远方 / 爱与臣服 / 时间",
                  "版本聚焦：最终卷（版本一 / 版本二）",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
                  <Sparkles className="h-4 w-4" />
                  一眼看懂
                </div>
                <div className="space-y-3 text-sm leading-6 text-white/80">
                  <p>前 10 卷讲的是：少女薇拉、青梅竹马萨奇与神秘少年艾克，在宇宙冒险中走完“告别童年”的痛苦过程。</p>
                  <p>新增 2 卷讲的是：结局并没有真正封死，而是裂成两份手稿、两种收束方式、两套情感答案。</p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
                  <GitBranch className="h-4 w-4" />
                  新版本最重要变化
                </div>
                <p className="text-sm leading-6 text-white/80">
                  “最终卷（版本一）”偏向公主与艾克的余波，聚焦占有、时间分岔与无法抵达的中心；
                  “最终卷（版本二）”偏向萨奇与薇拉，聚焦等待、证明与守望。
                </p>
              </div>
            </div>
          </div>
        </header>

        <nav className="mb-8 grid gap-3 rounded-[24px] border border-white/10 bg-white/5 p-3 text-sm backdrop-blur md:grid-cols-5">
          {[
            ["#overview", "总览"],
            ["#chapters", "12卷章节"],
            ["#compare", "两版最终卷"],
            ["#relations", "人物与主题"],
            ["#mysteries", "谜题与来源"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-2xl border border-white/5 bg-black/20 px-4 py-3 text-white/75 transition hover:border-cyan-300/20 hover:bg-cyan-300/10 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <section id="overview" className="mb-14">
          <SectionTitle
            icon={ScrollText}
            eyebrow="故事总览"
            title="从‘无聊的少女’到‘宇宙中的两份结局’"
            desc="这部作品的结构非常特别：前十卷像完整成长史，新增两卷则像对同一个结局的双重改写。"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "起点",
                body: "薇拉的忧郁并不是沉重抑郁，而是对小镇生活的厌倦与对远方的渴望。",
              },
              {
                title: "推进器",
                body: "艾克让‘远方’从地理概念变成了宇宙尺度，也让青春不再只是年龄问题。",
              },
              {
                title: "转折点",
                body: "薇拉之死把全书从浪漫冒险强行扳进‘只有未来拯救过去’的命题。",
              },
              {
                title: "新终局",
                body: "两部最终卷把文本本身变成谜题：结局不再是唯一答案，而是分岔后的两个版本。",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div className="mb-3 text-lg font-medium text-white">{item.title}</div>
                <p className="text-sm leading-6 text-white/70">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-6">
            <div className="mb-4 flex items-center gap-2 text-base font-medium">
              <Clock3 className="h-4 w-4 text-cyan-300" />
              叙事时间线
            </div>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={item} className="flex gap-4">
                  <div className="flex w-8 shrink-0 flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-xs text-cyan-100">
                      {idx + 1}
                    </div>
                    {idx !== timeline.length - 1 ? <div className="mt-2 h-full w-px bg-white/10" /> : null}
                  </div>
                  <p className="pb-4 pt-1 text-sm leading-6 text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="chapters" className="mb-14">
          <SectionTitle
            icon={BookOpen}
            eyebrow="章节全览"
            title="12 卷剧情卡片"
            desc="可按原始 10 卷或新增 2 卷筛选，也可以搜索关键词快速定位情节。"
          />

          <div className="mb-5 grid gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4 md:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="搜索人物、事件、主题，例如：艾克、未来、最终卷、吃眼"
                className="w-full rounded-2xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-sm text-white outline-none ring-0 placeholder:text-white/30 focus:border-cyan-300/25"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                ["all", "全部"],
                ["old", "前10卷"],
                ["new", "新增2卷"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    filter === value
                      ? "bg-cyan-300/15 text-cyan-100 border border-cyan-300/25"
                      : "bg-black/20 text-white/65 border border-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredChapters.map((chapter, index) => (
              <motion.article
                key={chapter.no}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className={`rounded-[26px] border p-5 ${
                  chapter.isNew
                    ? "border-fuchsia-300/20 bg-gradient-to-br from-fuchsia-300/10 to-white/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-white/45">Vol. {chapter.no}</div>
                    <h3 className="mt-1 text-xl font-semibold text-white">{chapter.title}</h3>
                  </div>
                  {chapter.isNew ? (
                    <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-2.5 py-1 text-xs text-fuchsia-100">
                      新增
                    </span>
                  ) : null}
                </div>
                <p className="mb-4 text-sm leading-6 text-white/75">{chapter.tagline}</p>
                <div className="mb-4 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-cyan-100">
                  主题：{chapter.theme}
                </div>
                <ul className="space-y-2">
                  {chapter.events.map((event) => (
                    <li key={event} className="flex gap-2 text-sm leading-6 text-white/72">
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-white/35" />
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="compare" className="mb-14">
          <SectionTitle
            icon={GitBranch}
            eyebrow="版本对照"
            title="新增两部最终卷，到底补了什么？"
            desc="它们不是简单续写，而是两份来源成谜的‘最终手稿’：同样站在卷十之后，却把情感重心和结局伦理推向了不同方向。"
          />

          <div className="mb-5 flex flex-wrap gap-2">
            {[
              ["v1", "最终卷（版本一）"],
              ["v2", "最终卷（版本二）"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setActiveCompare(value)}
                className={`rounded-2xl px-4 py-2.5 text-sm transition ${
                  activeCompare === value
                    ? "border border-cyan-300/25 bg-cyan-300/15 text-cyan-100"
                    : "border border-white/10 bg-white/5 text-white/65 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`rounded-[28px] border p-6 ${activeCompare === "v1" ? "border-fuchsia-300/25 bg-fuchsia-300/10" : "border-white/10 bg-white/5"}`}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">最终卷（版本一）</h3>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">公主 / 艾克 视角余波</span>
              </div>
              <div className="space-y-4 text-sm leading-7 text-white/75">
                <p>这版最突出的特点，是它把卷十后未说完的情绪交给了公主与艾克去消化：不是“圆满收尾”，而是“不甘心的余震”。</p>
                <p>公主坦言自己根本无法真正放下萨奇，甚至提出等薇拉安稳度过一生之后，把萨奇带回自己的秩序里。这个提议并不只是残酷，更揭示她理解爱的方式始终建立在“占有与安全”上。</p>
                <p>艾克则像一个已经疲惫到极点的高位存在。他能看见分岔、看见回音、看见不同版本的自己，却仍无法让所有人都得到幸福。</p>
                <p className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/80">
                  这一版最刺痛人的地方，不在于谁失去谁，而在于：就算拥有无限尺度与无数分支，人也未必能得到真正属于自己的结局。
                </p>
              </div>
            </div>

            <div className={`rounded-[28px] border p-6 ${activeCompare === "v2" ? "border-cyan-300/25 bg-cyan-300/10" : "border-white/10 bg-white/5"}`}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">最终卷（版本二）</h3>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">萨奇 / 薇拉 视角守望</span>
              </div>
              <div className="space-y-4 text-sm leading-7 text-white/75">
                <p>这一版把镜头拉回最朴素也最动人的关系：萨奇与薇拉。婚约将近时，艾克再度出现，要求萨奇重新踏上拯救宇宙的旅程。</p>
                <p>于是，‘我爱你’不再是说出口就成立的句子，而成了一个必须被旅途证明的命题：你见过更广阔的世界之后，依旧愿意回来，这份爱才算成立。</p>
                <p>薇拉没有去抢，也没有去夺。她做的是等待、相信和轻声重复那些曾经说过的话。与版本一相比，这版更加哀而不伤，也更温柔。</p>
                <p className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/80">
                  这一版给出的答案是：世界中心未必天然存在，但爱可以通过一次又一次归来，把某个地方证明成中心。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "叙事焦点",
                v1: "公主与艾克的余波",
                v2: "萨奇与薇拉的守望",
              },
              {
                label: "情感基调",
                v1: "占有、失配、无法抵达",
                v2: "证明、等待、仍然相信",
              },
              {
                label: "核心问题",
                v1: "幸福能否被抢回？",
                v2: "爱能否被证明？",
              },
            ].map((row) => (
              <div key={row.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 text-sm text-white/45">{row.label}</div>
                <div className="space-y-2 text-sm leading-6">
                  <div><span className="text-fuchsia-200">版本一：</span><span className="text-white/75">{row.v1}</span></div>
                  <div><span className="text-cyan-200">版本二：</span><span className="text-white/75">{row.v2}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="relations" className="mb-14 grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div>
            <SectionTitle
              icon={Users}
              eyebrow="人物结构"
              title="谁在追逐谁，谁又试图占有谁？"
              desc="这不是单纯三角恋，而是‘远方 / 故乡 / 权力 / 时间’四套逻辑互相撞击。"
            />
            <div className="grid gap-4">
              {relationCards.map((card, index) => (
                <motion.div
                  key={card.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-2 text-lg font-medium text-white">{card.name}</div>
                  <p className="text-sm leading-6 text-white/72">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              icon={Stars}
              eyebrow="主题拆解"
              title="这部作品真正想写什么？"
              desc="从文本气质来看，《少女薇拉的忧郁》最迷人的地方，在于它能把青春期的不安一路写到宇宙尺度。"
            />
            <div className="grid gap-4">
              {themes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5">
                        <Icon className="h-4 w-4 text-cyan-200" />
                      </div>
                      <div className="text-base font-medium text-white">{item.title}</div>
                    </div>
                    <p className="text-sm leading-6 text-white/72">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="mysteries" className="mb-10">
          <SectionTitle
            icon={AlertCircle}
            eyebrow="开放问题"
            title="直到最新版本，仍未彻底解开的谜题"
            desc="新增两部最终卷不是把故事说完，而是把‘这故事到底是什么’推得更远。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {mysteries.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5"
              >
                <div className="flex gap-3 text-sm leading-6 text-white/78">
                  <AlertCircle className="mt-1 h-4 w-4 shrink-0 text-fuchsia-200" />
                  <span>{item}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
            <div className="mb-3 text-lg font-semibold text-white">本页整理范围</div>
            <p className="text-sm leading-7 text-white/72">
              本网页基于上一份深度研究报告整理，内容重点覆盖：前 10 卷主线、最新版本新增的两部最终卷、两版结局差异、人物关系、时间线和主题分析。页面采用“可浏览、可速览”的呈现方式，适合快速回顾或转发阅读。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
