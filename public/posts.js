// ============================================================
// POSTS DATA — insights hub
// ============================================================
// HOW TO ADD A NEW POST:
//   Copy one of the objects below, paste it at the TOP of the
//   array (newest first), and fill in every field.
//
// CONTENT BLOCK TYPES:
//   { type: 'paragraph', text: '...' }          — body paragraph
//   { type: 'heading',   text: '...' }          — H2 subheading
//   { type: 'book',  title, description, link } — book card
//   { type: 'quote', text, attribution }        — pull-quote
//
// AFFILIATE LINK FORMAT (inside a book block):
//   link: { text: 'Buy on Amazon', url: 'https://...', affiliate: true }
//   → Rendered as a gradient CTA button with rel="nofollow sponsored"
//   → Set affiliate: false (or omit) for non-affiliate links
//
// POST FIELDS:
//   slug          — URL-safe identifier, becomes /insights/{slug}
//   category      — 'analysis' | 'thoughts' | 'recommendations' | 'notes'
//   title         — displayed on card and post page
//   excerpt       — 1–2 sentences shown on the card
//   readTime      — integer, minutes
//   date          — ISO 8601: 'YYYY-MM-DD'
//   tags          — array of strings
//   affiliate     — true if ANY link in content is affiliate (shows badge on card)
//   content       — array of content blocks (see types above)
// ============================================================

const POSTS = [

  // ── Post 1: Analysis ────────────────────────────────────────
  {
    slug:     'why-npsb-is-the-backbone-of-digital-payments',
    category: 'analysis',
    title:    "Why Bangladesh\u2019s NPSB Is the Quiet Backbone of Digital Payments",
    excerpt:  "Most fintech conversations in Bangladesh focus on bKash and Nagad. But beneath every interbank transfer runs a system almost no one talks about: the National Payment Switch Bangladesh.",
    readTime: 6,
    date:     '2026-03-10',
    tags:     ['NPSB', 'Payments', 'Bangladesh Bank', 'Infrastructure', 'Interoperability'],
    content: [
      {
        type: 'paragraph',
        text: "Most fintech conversations in Bangladesh circle around bKash, Nagad, and a handful of challenger app launches. But beneath every mobile transfer, every ATM withdrawal, and every merchant POS transaction runs a system almost no one discusses publicly: the National Payment Switch Bangladesh (NPSB). Operated by Bangladesh Bank, it is the central interoperability layer that routes retail interbank payments across the country. Without it, the digital payments ecosystem as we know it simply would not function.",
      },
      {
        type: 'paragraph',
        text: "Launched in 2012, NPSB was built to solve a fundamental fragmentation problem. Bangladesh had multiple payment channels \u2014 ATMs, internet banking, POS terminals, mobile wallets \u2014 but each institution operated in isolation. NPSB changed this by providing a common switching layer: standardised message formats, a shared interoperability framework, and a net settlement cycle running through Bangladesh Bank. Today it connects all scheduled banks, enables BEFTN (electronic fund transfers), routes ATM transactions across networks, and underpins the government\u2019s G2P disbursement programs. Transaction volumes have grown by double digits every year since 2018.",
      },
      {
        type: 'paragraph',
        text: "What makes NPSB underappreciated is precisely what makes it powerful: invisibility. It has no consumer brand. Nobody downloads the NPSB app. But as Bangladesh scales toward its Smart Bangladesh 2041 vision \u2014 with digital payment mandates, MFS-bank interoperability goals, and a rapidly growing e-commerce sector \u2014 NPSB will become either the superhighway or the bottleneck of that future. The switch needs investment in throughput capacity, API modernisation, and direct wallet integration. The question is not whether NPSB matters. The question is whether we\u2019re treating it with the strategic urgency it deserves.",
      },
    ],
  },

  // ── Post 2: Recommendations ──────────────────────────────────
  {
    slug:      '5-books-that-changed-how-i-think-about-money',
    category:  'recommendations',
    title:     "5 Books That Changed How I Think About Money and Systems",
    excerpt:   "Eight years in banking teaches you the mechanics of money. These five books reshaped the mental models underneath \u2014 how systems behave, why institutions fail, and what good financial design actually looks like.",
    readTime:  5,
    date:      '2026-02-20',
    tags:      ['Books', 'Finance', 'Systems Thinking', 'Fintech', 'Reading'],
    affiliate: true,
    content: [
      {
        type: 'paragraph',
        text: "Eight years working inside a bank teaches you the mechanics of money \u2014 how it moves, how it\u2019s created, how it\u2019s regulated. But some of the deepest shifts in my thinking came from books written well outside the ledger. These five reshaped my mental models: how I see incentive structures, why payment systems are designed the way they are, and what it actually means to build financial infrastructure that serves people.",
      },
      {
        type: 'book',
        title: 'Thinking in Systems \u2014 Donella H. Meadows',
        description: "The foundational text on systems thinking. Meadows shows how feedback loops, stocks, and flows govern everything from ecosystems to central banks. After reading this, I could no longer look at a payment network without asking: where are the reinforcing loops? Where are the delays that create instability? Absolutely essential for anyone designing or governing financial infrastructure.",
        link: { text: 'View on Amazon', url: 'https://www.amazon.com/dp/1603580557', affiliate: true },
      },
      {
        type: 'book',
        title: 'The Payments System \u2014 Bank for International Settlements',
        description: "Dense but extraordinarily rewarding. This covers how modern payment systems are architecturally designed \u2014 clearing, settlement, netting, systemic risk management, and central bank oversight. The closest thing to a systems-design document for the global payments industry. Required reading if you work anywhere near RTGS, BEFTN, or NPSB.",
        link: { text: 'Read on BIS.org (free)', url: 'https://www.bis.org/cpmi/publ/d04b.htm', affiliate: false },
      },
    ],
  },

  // ── Post 3: Thoughts ─────────────────────────────────────────
  {
    slug:     'what-neobanks-get-right-traditional-banks-dont',
    category: 'thoughts',
    title:    "What Neobanks Like PalmPay Get Right That Traditional Banks Still Don\u2019t",
    excerpt:  "PalmPay crossed 30 million users in Nigeria without a single branch. The conventional banking wisdom says that\u2019s impossible. But the conventional banking wisdom was built for a different era.",
    readTime: 4,
    date:     '2026-01-28',
    tags:     ['Neobanks', 'Digital Banking', 'Customer Experience', 'Africa', 'Strategy'],
    content: [
      {
        type: 'paragraph',
        text: "PalmPay crossed 30 million users in Nigeria without a single branch. Nubank reached 100 million customers in Latin America before most traditional banks had updated their mobile apps. These numbers should be alarming for incumbents \u2014 but too often they\u2019re dismissed as \u2018emerging market anomalies\u2019 or \u2018not really banks.\u2019 That framing is both wrong and strategically dangerous.",
      },
      {
        type: 'paragraph',
        text: "What neobanks get right isn\u2019t primarily about technology. It\u2019s about design philosophy. Traditional banks were built to serve institutions \u2014 corporations, governments, correspondent networks \u2014 and then adapted, reluctantly, for individuals. Neobanks started with the individual. Their onboarding flow is designed so a first-time smartphone user can open an account in four minutes. The notification when your salary arrives is instant. The interface doesn\u2019t assume you know what \u2018BEFTN credit\u2019 means. These seem like UX decisions. They are actually statements about whose time and cognitive load you consider worth respecting.",
      },
      {
        type: 'paragraph',
        text: "In Bangladesh, the gap is especially visible. bKash built a multi-billion dollar business on feature phones while traditional banks were debating internet banking rollout strategies. The lesson for incumbents isn\u2019t to panic and pivot to apps \u2014 it\u2019s that the institution that wins the next decade will be the one that treats customer experience as core infrastructure, not a veneer over legacy core banking. That shift in organisational mindset is harder than any technology migration. It requires changing who has power inside the institution.",
      },
    ],
  },

];
