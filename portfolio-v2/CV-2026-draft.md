# NIKA URCHADZE
AI Engineer building production LLM agents, with full-stack and desktop app experience

Tbilisi, Georgia, +995 595 206 203, nurch22@freeuni.edu.ge, linkedin.com/in/nika-urchadze-292358293, github.com/5w7Tch, nika-urchadze.vercel.app

> The PDF is rendered from `cv/cv.html` (`npm run cv`). Keep this text in step with it.

## SUMMARY
I build AI systems that real customers use every day. At Edumentors I am the main engineer on Sophia, the AI agent that answers live support chats for a UK tutoring platform and sends approved replies on its own. I also designed the pipeline that transcribes and reviews tutoring lessons, and I am helping build the company's AI tutor. Before that I built AI lead generation at Stimuli Digital. On my own I have launched three desktop apps, from native code to licensing, payments and LLM features, and I work across the full stack, from Node.js and Python backends to Vue and React apps.

## EXPERIENCE

### Edumentors, AI and Full-Stack Engineer, Jan 2026 to Present
UK online tutoring marketplace. TypeScript, Node.js, MongoDB, Redis, AWS, Vue, Nuxt, LangChain, OpenAI, Anthropic, Gemini, xAI

**Sophia, AI support agent**
- Main engineer on Sophia, with over 800 commits, 88% of all commits to the project.
- Rebuilt Sophia as a single agent loop that covers 70 types of customer problems.
- Gave Sophia over 50 tools for real bookings, reschedules, cancellations and refunds, each limited to what the user may do.
- Built hybrid keyword and embedding search that finds the right problem in the top 5 for 81.6% of messages.
- Sophia correctly handles 87% of the traffic that flows through support chats, and the support team resolves the rest.
- Built an automated improvement system that learns from support's corrections, so Sophia's success rate rises week by week.

**Lesson transcripts and AI review**
- Designed and built the system that transcribes and reviews tutoring lessons held on Google Meet.
- A fleet of Puppeteer bots joins each lesson, and a predictive autoscaler starts extra EC2 capacity only when it is needed.
- Load tested with 60 lessons at once, all joined in 43 seconds with no failures. Join time dropped from about 84 seconds to 10.
- An LLM writes a lesson summary for parents, scores how engaged the tutor and student were, and flags compliance issues.
- Merging many LLM calls into one cut token use by 7 times and made the analysis 6 times faster.
- Enabled for about 24,500 sessions.

**AI tutor**
- Took part in designing the AI tutor's architecture, which teaches from a knowledge graph of the maths curriculum.
- Now building human-like conversations between the AI tutor and parents.
- Now building the pipeline that turns human tutors' lesson transcripts into each student's knowledge graph, so the AI tutor understands the student right away if their tutor changes.

**Full-stack and platform**
- Built the hand-off of customers from Sophia to the Sales team on WhatsApp, across the AI backend, main API and admin app.
- Built a standalone WhatsApp service that runs many numbers behind one API, deployed on AWS with Terraform and GitLab CI.
- Rolled the hand-off out in shadow mode first, with safeguards so no customer is ever answered twice.
- Built the support team's tools in Nuxt and Vue on the Node API: Sophia's review and approval screens with live drafts, analytics dashboards for time saved, weekly trends and audits, and the lesson transcript viewer.
- Built a tutor onboarding support chat across the API, the admin app and the tutor app.
- Built an API test suite of more than 330 tests over 83 payment, booking and referral endpoints.
- The suite found over 40 bugs, including double refunds, Stripe charges without idempotency keys and referral records anyone could delete.

### Stimuli Digital, Software Engineer, Mar 2025 to Jan 2026
Cold email outreach agency. Python, FastAPI, ARQ, React, PostgreSQL, LLM APIs, BigQuery
- Built an AI lead generation system that uses LLMs to find, enrich and qualify leads.
- Fed it with scrapers and campaign sync workers for Smartlead and Instantly, which replaced paid data tools and saved the company thousands.
- Built a private platform for buying, monitoring and health checking thousands of email accounts and domains.
- Automated account redistribution, recovery and parallel tagging, which cut hours of manual work down to seconds and kept campaigns deliverable.
- Built client portals and KPI dashboards for agencies such as C17, Sales Automation Systems and Hypergen.
- Automated onboarding and reporting with BigQuery, Looker Studio, Airtable, n8n and Make, and contributed to OutFound, Stimuli's outreach product.

## PRODUCTS BUILT AND LAUNCHED SOLO

### MeetMaster, free AI notetaker for Google Meet on Mac and Windows, meetmaster.site, Oct to Nov 2026
- Lets users ask questions about their meetings and run AI tasks like recaps, decisions and to-dos with Claude, ChatGPT, Gemini, Grok or Muse, using their own key.
- Joins Google Meet calls on its own through a hidden Chrome driven by Playwright, and turns live captions into notes with speaker names. No audio is recorded.
- Notices a call by watching the microphone and reading open browser tabs, and offers to join meetings from the calendar.
- Electron app with native helpers in Swift, using CoreAudio and EventKit, and in C#, using UI Automation, plus signed automatic updates.

### RunWatch, paid macOS app for developers who run Claude Code agents, runwatch.site, Oct 2026
- Shows every running Claude Code session as a live status dot and jumps to it in one click, using Claude Code's hooks and transcripts.
- Built and launched in 5 days in Swift 6 and SwiftUI, with 94 tests.
- Licensing runs on a Cloudflare Worker with Whop payments, offline Ed25519 licenses tied to each Mac, a free trial and forced updates.

### Mona Lisa, commercial face recognition security app, mona-lisa.online, 2026
- Mac app that locks every screen when an unknown face is at the computer, using Vision, Core ML face embeddings and blink detection to reject photos.
- Ported to Windows with .NET, WPF and ONNX Runtime, and to Linux with Avalonia. Licensing runs on a Cloudflare Worker with Whop and USDC payments.

### Life Tracker, full-stack productivity platform for web and mobile, tracker-six-gules.vercel.app, 2026
- Next.js 16 and React 19 web app, an Expo React Native mobile app, and a FastAPI and Supabase backend.
- Finance data has zero-knowledge encryption on the device with PBKDF2 and AES-GCM.
- A conflict-resolving sync engine keeps devices in step, and JWT auth, rate limits and row-level security protect the data.

## EDUCATION
**BSc Computer Science, Free University of Tbilisi**, expected 2027
- ICPC International Olympiad Quarterfinalist.
- Implemented CycleGAN from scratch in PyTorch for Kaggle's Monet style transfer competition, and built regression models with scikit-learn.
- Teaching Assistant for OOP in Java and Design Patterns, Mar 2025 to Jan 2026.

## SKILLS
**AI and LLM:** agentic tool calling, LangChain, RAG and hybrid retrieval, LLM evals with LLM as judge and pass@k, voice agents with LiveKit, OpenAI, Anthropic, Gemini and xAI APIs, Core ML, ONNX, PyTorch
**Languages:** TypeScript, JavaScript, Python, Swift, C#, Java, C, C++, SQL
**Backend and infra:** Node.js, Express, FastAPI, MongoDB, PostgreSQL, Supabase, Redis, AWS EC2, S3 and SQS, Terraform, Docker, Cloudflare Workers, GitLab CI, GitHub Actions, Stripe, Whop
**Frontend and apps:** Vue, Nuxt, React, Next.js, React Native, Expo, SwiftUI, AppKit, Electron, .NET, WPF, Playwright, Puppeteer
**Spoken:** English, German, Georgian
