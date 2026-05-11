# Session 2 – Call Notes & Recap
## Give Your COS a Voice
**Date:** Sunday, May 10 · 7:00 – 9:00 PM MST

---

## Principle #1: Tools Don't Matter – Outcomes Do

This came up early and it's worth anchoring on before anything else.

The AI space moves fast. Whatever tool we use tonight may not be the tool in 3–4 months. That's fine. The trap is letting that create decision paralysis – endlessly comparing options, following hype, losing time to "which one is best?"

**The better question is always:** what's the outcome I want? What's the simplest path to get there?

A few things that work:
- **Let your COS guide the technical decision.** Give it the goal, not the solution. It knows more about available tools than you do – let it propose the path.
- **Emphasize simplicity upfront.** Add something like "keep this as simple as possible, use as few tools as you can, find the cheapest or free option" to your initial prompt. Otherwise it'll build a spaceship when you need a bicycle.
- **Be clear on outcomes, loose on requirements.** The more specific you are about HOW to solve it, the worse the result. Describe WHAT you want done. Let it fill in the how.
- **Cost is a valid filter.** Tell your COS if you want something free or cheap. It'll factor that in.

---

## Principle #2: Tailscale – Why It Matters

Tailscale is a free private network (VPN) that connects all your devices securely. Free for up to 3 devices.

**Why it's worth setting up:**

1. **Security.** Adds a private layer when accessing your home computer or when your computer accesses the internet.
2. **Remote access to your local setup.** If your COS is running on a home computer and you're out – driving, traveling, at a cabin – Tailscale lets you connect at a deeper level to approve permissions, move files, or troubleshoot without being physically there.
3. **Screen sharing.** The ultimate escape hatch. When something isn't working and you need to actually see and control your home machine, Tailscale makes that clean and secure.
4. **Local web apps.** As your setup gets more advanced, you can build little dashboards or tools that live locally on your computer but are accessible only through your Tailscale network – from your phone, anywhere.

**Setup order:**
1. Install Tailscale on your Mac
2. Install on your phone
3. Sign in with the same account on both
4. Enable SSH on your Mac (System Settings → General → Sharing)

> ⚠️ **Permissions note:** Once Tailscale is installed, you need to grant **Full Disk Access** and **Screen Recording** in System Settings → Privacy & Security – otherwise remote file access and screen sharing won't work.

---

## Session 1 Wins – What People Built

People shared some great wins from the first week. Themes (names removed):

- **YouTube Content Engine** – Whenever a video is uploaded to YouTube, the COS automatically generates a blog post, Instagram copy, Facebook copy, Twitter copy, and a promotional email – then stores everything in a dedicated Google Drive folder. Built entirely by the COS from a description of the goal.

- **Ideal Week Calendar** – Asked the COS to analyze 8 weeks of calendar history, create a new Google Calendar called "Ideal Week," and map what the week *should* look like vs. what it currently looks like. Done automatically.

- **Email from Labels to Action** – One student evolved from having the COS label emails by priority... to having the COS just tell them exactly what to do. "Here are the 3 things to focus on this hour. Here's a draft for the first one." Game changer.

- **Self-Managing Inbox** – A cleanup scheduler that checks for old unread/flagged emails weekly and archives anything that's been sitting around without action – with a check-in on anything it's unsure about.

The pattern: describe what you want done → let the COS figure out how.

---

## AI Voice – The Big Idea

The phone is one of the most underused leverage points. Most of us either ignore calls, forget to make them, or find them annoying to manage. Your COS can own that.

**What's now possible:**
- Screen inbound calls – know who's calling and why before you pick up
- Book meetings directly – check your calendar, offer times, confirm
- Make outbound calls on your behalf – follow-ups, reservations, vendor calls, check-ins
- Log and summarize every call back into your main brain

**Real examples from this session:**
- Called a Korean BBQ restaurant at 11:30 PM the night before to ask about reservations for the next day. Got confirmation back at 11:30 AM when they opened.
- Replaced a $2,000+/month phone system with an AI-handled equivalent for ~$20/month.
- RV park bookings – called parks (many of which are phone-only) to handle the booking process.

---

## Bland.ai Setup – Step by Step

### 1. Sign up at [bland.ai](https://bland.ai)
Use your real phone number to create the account – this is your login, not a public number.

### 2. Get your API key
Go to **Settings → API Keys**. Create a new one (don't use the default one they provide – create fresh). Copy it somewhere temporarily.

### 3. Tell your COS what's happening
Go back to your main chat (Hermes/Claude/whatever you're running) and say something like:

> "I want to set up calling for you. We're using Bland.ai. I've already signed up and have an API key ready. Let's get it going."

Hand your COS the API key when it asks. Let it do the setup. It knows the Bland API – don't micromanage it.

**Pro tip:** Give your COS the Bland docs link: `https://docs.bland.ai` – tell it to read and get familiar with the API. This saves time and gets better results than explaining it yourself.

### 4. Create your Agent Persona
In the Bland dashboard, go to **Agents** and create a Persona. This is the global brain for your voice agent – how it behaves on any call.

Include:
- Who it is (name, role – e.g. "AI assistant for [Your Name]")
- Inbound direction (how to handle incoming calls)
- Outbound direction (general behavior when making calls)
- What info it can and can't share
- VIP handling (people who get through immediately vs. screened)
- IVR handling note (phone trees are tricky – more on this below)

Keep it tight. Don't over-engineer. You can refine it later.

> **Note:** Hit **Publish** after saving – changes don't go live until published.

### 5. Purchase a phone number
Under the numbers section in Bland, you can buy a dedicated number (~$1–2/month). Available area codes are limited – major metro areas like Phoenix often aren't available. Pick what you can. Connect the number to your Persona under **Modalities**.

### 6. Make calls
Once connected, just tell your COS in chat: "Call [name] at [number] and [do this specific thing]." The context you provide per-call layers on top of the global Persona.

---

## IVR Note (Phone Trees)
If you're calling a business with a phone tree ("press 1 for sales, press 2 for support..."), Bland has to learn the tree before it can navigate it effectively. This adds a step. For complex phone trees, it can get messy – your COS may actually push back and suggest you just call yourself. That's a valid outcome.

---

## Voice for Your COS (ElevenLabs)
If you want your COS to have a consistent voice identity separate from Bland (for things like voice notes, morning briefs, etc.), use **ElevenLabs**.

Same process: sign up → create API key → give it to your COS → pick a voice by voice ID.

Bland's voices are good enough to get started. If you want to get more advanced later, you can even clone your own voice.

---

## What to Do with Call Data
Call data lives in Bland's database, accessible via API. Your COS can pull call logs, transcripts, and summaries back into your main system. For business use cases, you can also push this data directly to tools like HubSpot or other CRMs.

---

## Homework Before Session 3
**Use your COS phone number for one real interaction before tomorrow.**

Screen a call. Make an outbound call. Book something. Send yourself a test call. Just use it once.

Come to Session 3 ready to share what happened.

---

## Session 3 – Tomorrow (Monday, May 11 · 7:00 – 9:00 PM MST)
**The Intelligence Layer** – making your COS smarter. The portal unlocks at 7 AM.

---

*Notes synthesized from the live session recording. Details paraphrased and lightly edited for clarity.*
