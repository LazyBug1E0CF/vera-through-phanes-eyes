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
  Orbit,
  Wand2,
  Telescope,
  HeartCrack,
  MoonStar,
  Shield,
  Quote,
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
    mood: 24,
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
    mood: 36,
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
    mood: 48,
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
    mood: 58,
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
    mood: 63,
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
    mood: 52,
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
    mood: 74,
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
    mood: 78,
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
    mood: 90,
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
    mood: 96,
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
    mood: 92,
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
    mood: 88,
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
    side: "仰望与吸引",
  },
  {
    name: "萨奇 × 薇拉",
    desc: "萨奇代表故乡、日常与守护欲。他爱薇拉，却总在艾克面前感到自卑。",
    side: "守护与自卑",
  },
  {
    name: "公主 × 薇拉 / 萨奇",
    desc: "公主把爱、占有与安全感缠成一体，她既竞争，也想把重要之人纳入自己的秩序。",
    side: "权力与占有",
  },
  {
    name: "艾克 × 所有人",
    desc: "艾克像是推动命运的高位存在，既是向导，也是让人无法真正掌握的时间回音。",
    side: "命运与回音",
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
    icon: Telescope,
  },
  {
    title: "爱与臣服被故意写成同一种危险语言",
    body: "‘吃眼’设定让浪漫关系与权力结构强行焊接，爱情因此变得并不纯洁。",
    icon: HeartCrack,
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

const quickStats = [
  { label: "总卷数", value: "12", icon: BookOpen },
  { label: "新增最终卷", value: "2", icon: GitBranch },
  { label: "核心人物轴", value: "4", icon: Orbit },
  { label: "终局形态", value: "双版本", icon: MoonStar },
];

const storySignals = [
  "青春成长",
  "太空歌剧",
  "情感错位",
  "元叙事",
  "时间悖论",
  "双结局",
];

const compareCards = {
  v1: {
    title: "最终卷（版本一）",
    tag: "公主 / 艾克 视角余波",
    accent: "from-fuchsia-400/25 via-pink-300/10 to-transparent",
    border: "border-fuchsia-300/25",
    icon: Shield,
    points: [
      "把卷十后未说完的情绪交给公主与艾克去消化。",
      "情感关键词不是圆满，而是余震、不甘、无法抵达。",
      "公主仍然试图把‘爱’理解为纳入与占有。",
      "艾克能看见分支，却无法替所有人兑现幸福。",
    ],
    closing: "最刺痛人的并不是失去，而是即使拥有无限尺度，也可能拿不到真正属于自己的结局。",
  },
  v2: {
    title: "最终卷（版本二）",
    tag: "萨奇 / 薇拉 视角守望",
    accent: "from-cyan-400/25 via-sky-300/10 to-transparent",
    border: "border-cyan-300/25",
    icon: Wand2,
    points: [
      "镜头回到萨奇与薇拉这条最朴素的关系线上。",
      "‘我爱你’被改写成必须由旅程证明的命题。",
      "薇拉不争夺，而是用等待与相信支撑结局。",
      "世界中心不再预设存在，而是被归来一再证明。",
    ],
    closing: "这一版给出的不是抢回幸福，而是在更大的世界之后，仍然愿意回头守住一个人。",
  },
};

function SectionTitle({ icon: Icon, eyebrow, title, desc, side }) {
  return (
    <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <Icon className="h-3.5 w-3.5" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        {desc ? <p className="mt-2 max-w-3xl text-sm leading-6 text-white/60 md:text-base">{desc}</p> : null}
      </div>
      {side ? <div className="text-sm text-cyan-100/80">{side}</div> : null}
    </div>
  );
}

function GlassCard({ className = "", children }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function StarField() {
  const dots = [
    "left-[8%] top-[14%]",
    "left-[18%] top-[28%]",
    "left-[28%] top-[8%]",
    "left-[40%] top-[20%]",
    "left-[58%] top-[10%]",
    "left-[70%] top-[18%]",
    "left-[82%] top-[8%]",
    "left-[90%] top-[24%]",
    "left-[12%] top-[54%]",
    "left-[24%] top-[68%]",
    "left-[36%] top-[52%]",
    "left-[52%] top-[62%]",
    "left-[66%] top-[56%]",
    "left-[78%] top-[68%]",
    "left-[88%] top-[52%]",
    "left-[16%] top-[86%]",
    "left-[48%] top-[88%]",
    "left-[74%] top-[84%]",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(133,180,255,0.14),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,106,210,0.12),transparent_22%),radial-gradient(circle_at_20%_80%,rgba(110,255,255,0.08),transparent_24%)]" />
      {dots.map((dot, index) => (
        <motion.span
          key={dot}
          className={`absolute h-1 w-1 rounded-full bg-white/70 ${dot}`}
          animate={{ opacity: [0.25, 0.9, 0.25], scale: [1, 1.8, 1] }}
          transition={{ duration: 2.8 + (index % 4), repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
        />
      ))}
      <motion.div
        className="absolute left-[10%] top-[18%] h-40 w-40 rounded-full bg-cyan-300/12 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[22%] h-52 w-52 rounded-full bg-fuchsia-300/10 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] left-[28%] h-56 w-56 rounded-full bg-sky-300/10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function VeraMelancholyPage() {
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeCompare, setActiveCompare] = useState("v1");

  const filteredChapters = useMemo(() => {
    return chapters.filter((c) => {
      const hitFilter = filter === "all" ? true : filter === "new" ? c.isNew : !c.isNew;
      const q = keyword.trim().toLowerCase();
      const haystack = `${c.title} ${c.tagline} ${c.events.join(" ")} ${c.theme}`.toLowerCase();
      const hitKeyword = !q || haystack.includes(q);
      return hitFilter && hitKeyword;
    });
  }, [keyword, filter]);

  const compareMeta = compareCards[activeCompare];
  const CompareIcon = compareMeta.icon;

  return (
    <div className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <StarField />

      <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <div className="sticky top-3 z-30 mb-6">
          <div className="rounded-[24px] border border-white/10 bg-[#081425]/70 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <Orbit className="h-5 w-5 text-cyan-100" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">《少女薇拉的忧郁》专题页</div>
                  <div className="text-xs text-white/45">剧情梳理 · 版本增补 · 双终局对照</div>
                </div>
              </div>
              <nav className="grid gap-2 text-sm md:grid-cols-5">
                {[
                  ["#overview", "总览"],
                  ["#chapters", "12卷章节"],
                  ["#compare", "两版最终卷"],
                  ["#relations", "人物与主题"],
                  ["#mysteries", "开放谜题"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-2.5 text-center text-white/70 transition hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <header className="relative mb-10 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.035] shadow-[0_30px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(88,202,255,0.12),transparent_28%)]" />
          <div className="relative grid gap-8 p-6 md:p-10 xl:grid-cols-[1.25fr_0.75fr] xl:p-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                <BookOpen className="h-3.5 w-3.5" />
                基于研究报告整理的视觉专题网页
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
                《少女薇拉的忧郁》
                <span className="mt-3 block text-2xl font-medium text-white/72 md:text-4xl xl:text-5xl">
                  从小镇青春，到宇宙双终局
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/68 md:text-base">
                它不是单纯的少女冒险故事，而是一部把无聊、远方、爱与臣服、时间代价全都拧在一起的青春太空歌剧。前十卷像完整成长史，新增两部最终卷则把结局拆成了两种不同的答案。
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {storySignals.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {quickStats.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      className="rounded-[24px] border border-white/10 bg-black/20 p-4"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5">
                          <Icon className="h-4 w-4 text-cyan-100" />
                        </div>
                        <div className="text-xs text-white/35">0{index + 1}</div>
                      </div>
                      <div className="text-2xl font-semibold text-white">{item.value}</div>
                      <div className="mt-1 text-sm text-white/55">{item.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 xl:grid-rows-[1.1fr_0.9fr]">
              <GlassCard className="relative overflow-hidden p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-300/10 via-transparent to-cyan-300/10" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2 text-sm text-white/60">
                    <Quote className="h-4 w-4" />
                    核心气质
                  </div>
                  <div className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                    “只有未来，
                    <span className="text-cyan-100">拯救过去。”</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    薇拉之死之后，作品真正完成了类型跃迁：从浪漫冒险，进入时间伦理与命运代价的讨论。新增的两部最终卷，则把“结局”写成了分岔后的两份手稿。
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-white/60">
                  <MoonStar className="h-4 w-4" />
                  一眼看懂
                </div>
                <div className="space-y-3 text-sm leading-6 text-white/78">
                  <p>前 10 卷写的是：薇拉、萨奇与艾克在宇宙冒险中，完成对童年的告别。</p>
                  <p>新增 2 卷写的是：结局并没有彻底封死，而是裂成两种收束方式、两套情感重心与两种终局伦理。</p>
                </div>
                <div className="mt-5 rounded-[22px] border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/72">
                  版本一偏向公主与艾克的余波，版本二偏向萨奇与薇拉的守望。前者更锋利，后者更温柔。
                </div>
              </GlassCard>
            </div>
          </div>
        </header>

        <section id="overview" className="mb-14">
          <SectionTitle
            icon={ScrollText}
            eyebrow="故事总览"
            title="从‘无聊的小镇少女’到‘宇宙中的双版本结局’"
            desc="这部作品真正迷人的地方，在于它不断放大尺度：从日常厌倦，到宇宙级冒险，再到时间悖论与元叙事。"
            side="青春 × 太空歌剧 × 时间伦理"
          />

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <GlassCard className="p-6 md:p-7">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    title: "起点",
                    body: "薇拉的忧郁不是沉重抑郁，而是对小镇生活的厌倦和对远方的饥渴。",
                  },
                  {
                    title: "推进器",
                    body: "艾克让‘远方’从地理概念变成宇宙尺度，也让青春成为必须穿越的门。",
                  },
                  {
                    title: "转折点",
                    body: "薇拉之死让故事从浪漫冒险陡然坠入‘只有未来拯救过去’的命题。",
                  },
                  {
                    title: "新终局",
                    body: "新增两部最终卷让结局本身变成谜题：它不再唯一，而是分岔。",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                  >
                    <div className="mb-3 text-lg font-medium text-white">{item.title}</div>
                    <p className="text-sm leading-6 text-white/68">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden p-6 md:p-7">
              <div className="mb-4 flex items-center gap-2 text-base font-medium text-white">
                <Clock3 className="h-4 w-4 text-cyan-200" />
                叙事时间线
              </div>
              <div className="space-y-4">
                {timeline.map((item, idx) => (
                  <div key={item} className="flex gap-4">
                    <div className="flex w-10 shrink-0 flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-medium text-cyan-100">
                        {idx + 1}
                      </div>
                      {idx !== timeline.length - 1 ? <div className="mt-2 h-full w-px bg-gradient-to-b from-white/15 to-transparent" /> : null}
                    </div>
                    <p className="pb-4 pt-1 text-sm leading-6 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="chapters" className="mb-14">
          <SectionTitle
            icon={BookOpen}
            eyebrow="章节全览"
            title="12 卷剧情卡片"
            desc="保留了检索功能，并为每一卷加入更明显的情绪强度展示，读起来更像一张逐步升压的长弧线。"
            side="可筛选 · 可搜索 · 可速览"
          />

          <GlassCard className="mb-5 p-4">
            <div className="grid gap-3 md:grid-cols-[1fr_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                <input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="搜索人物、事件、主题，例如：艾克、未来、最终卷、吃眼"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-300/25"
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
                    className={`rounded-2xl border px-4 py-3 text-sm transition ${
                      filter === value
                        ? "border-cyan-300/25 bg-cyan-300/15 text-cyan-100"
                        : "border-white/10 bg-black/20 text-white/65 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </GlassCard>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredChapters.map((chapter, index) => (
              <motion.article
                key={chapter.no}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className={`group relative overflow-hidden rounded-[28px] border p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${
                  chapter.isNew
                    ? "border-fuchsia-300/20 bg-[linear-gradient(180deg,rgba(255,116,214,0.12),rgba(255,255,255,0.04))]"
                    : "border-white/10 bg-white/[0.045]"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-white/40">Vol. {chapter.no}</div>
                    <h3 className="mt-1 text-xl font-semibold text-white">{chapter.title}</h3>
                  </div>
                  {chapter.isNew ? (
                    <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-2.5 py-1 text-xs text-fuchsia-100">
                      新增
                    </span>
                  ) : null}
                </div>

                <p className="mb-4 text-sm leading-6 text-white/74">{chapter.tagline}</p>

                <div className="mb-4 grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-cyan-100">
                    主题：{chapter.theme}
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/35">
                      <span>情绪强度</span>
                      <span>{chapter.mood}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className={`h-2 rounded-full ${chapter.isNew ? "bg-fuchsia-200/80" : "bg-cyan-200/80"}`}
                        style={{ width: `${chapter.mood}%` }}
                      />
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {chapter.events.map((event) => (
                    <li key={event} className="flex gap-2 text-sm leading-6 text-white/72">
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-white/35 transition group-hover:text-cyan-200" />
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
            desc="它们并不是简单续写，而像两份来源成谜的最终手稿：站在同一个卷十之后，却给出不同重心、不同体温、不同答案。"
            side="版本一更锋利，版本二更温柔"
          />

          <div className="mb-5 flex flex-wrap gap-2">
            {[
              ["v1", "最终卷（版本一）"],
              ["v2", "最终卷（版本二）"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setActiveCompare(value)}
                className={`rounded-2xl border px-4 py-2.5 text-sm transition ${
                  activeCompare === value
                    ? "border-cyan-300/25 bg-cyan-300/15 text-cyan-100"
                    : "border-white/10 bg-white/[0.04] text-white/65 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
            <GlassCard className="overflow-hidden p-6 md:p-7">
              <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-r ${compareMeta.accent}`} />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/35">active file</div>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{compareMeta.title}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                    <CompareIcon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className={`mb-5 inline-flex rounded-full border px-3 py-1 text-xs text-white/80 ${compareMeta.border} bg-black/20`}>
                  {compareMeta.tag}
                </div>
                <div className="space-y-3 text-sm leading-7 text-white/75">
                  {compareMeta.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/82">
                  {compareMeta.closing}
                </div>
              </div>
            </GlassCard>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
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
              ].map((row, index) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.32, delay: index * 0.06 }}
                >
                  <GlassCard className="p-5">
                    <div className="mb-3 text-sm text-white/40">{row.label}</div>
                    <div className="space-y-3 text-sm leading-6">
                      <div className="rounded-2xl border border-fuchsia-300/15 bg-fuchsia-300/10 p-3">
                        <span className="text-fuchsia-100">版本一：</span>
                        <span className="text-white/78">{row.v1}</span>
                      </div>
                      <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-3">
                        <span className="text-cyan-100">版本二：</span>
                        <span className="text-white/78">{row.v2}</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="relations" className="mb-14 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionTitle
              icon={Users}
              eyebrow="人物结构"
              title="谁在追逐谁，谁又试图占有谁？"
              desc="这不是简单三角恋，而是远方、故乡、权力与时间四套逻辑互相撞击。"
            />
            <div className="grid gap-4">
              {relationCards.map((card, index) => (
                <motion.div
                  key={card.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                >
                  <GlassCard className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="text-lg font-medium text-white">{card.name}</div>
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/55">
                        {card.side}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-white/72">{card.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              icon={Stars}
              eyebrow="主题拆解"
              title="这部作品真正想写什么？"
              desc="它最厉害的地方，在于能把青春期的不安一路写到宇宙尺度，又把宇宙尺度压回人的内心。"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {themes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <GlassCard className="h-full p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5">
                          <Icon className="h-4 w-4 text-cyan-200" />
                        </div>
                        <div className="text-base font-medium text-white">{item.title}</div>
                      </div>
                      <p className="text-sm leading-6 text-white/72">{item.body}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="mysteries" className="mb-12">
          <SectionTitle
            icon={AlertCircle}
            eyebrow="开放问题"
            title="直到最新版本，仍未彻底解开的谜题"
            desc="新增两部最终卷并不是把故事说完，而是把‘这故事到底是什么’推得更远。"
            side="文本本身也成了谜团的一部分"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {mysteries.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <GlassCard className="h-full p-5">
                  <div className="flex gap-3 text-sm leading-6 text-white/78">
                    <AlertCircle className="mt-1 h-4 w-4 shrink-0 text-fuchsia-200" />
                    <span>{item}</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <GlassCard className="mt-6 p-6 md:p-7">
            <div className="mb-3 text-lg font-semibold text-white">本页整理范围</div>
            <p className="max-w-4xl text-sm leading-7 text-white/72">
              本网页基于上一份深度研究报告整理，重点覆盖前 10 卷主线、最新新增的两部最终卷、两版结局差异、人物关系、时间线与主题分析。现在的版本做成了更接近“游戏世界观专题页”的呈现方式，更适合展示、分享和继续迭代。
            </p>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
