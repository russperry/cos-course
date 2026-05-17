# Session 4 – Starter Prompts
## Full Autonomy

Use these prompts directly in your AI COS to finish the course strong. By now your system is real — email, voice, contacts, narrative, prep. This session is about pressure-testing it, upgrading it, and making it yours. Copy, paste, fill in the brackets, and let your COS do the work.

---

### Prompt 1 – The Maintenance Check

```
Audit yourself.

Run a full health check across every system we've built:
- Email sweep
- Voice calls
- Contacts system
- Weekly narrative
- Meeting prep

For each one, tell me:
1. Is it currently running? (live / broken / never finished)
2. When was the last time it actually fired or got used?
3. What's working well
4. What's broken, flaky, or silently failing
5. What hasn't been touched in 7+ days and may be dead weight

Then give me a prioritized fix list: top 3 things to repair or retire before we add anything new. Be honest — I'd rather kill a system than carry a broken one.
```

**Why this matters:** Most personal AI stacks rot quietly. Things stop firing, cron jobs die, API keys expire, and you don't notice until you need them. A scheduled self-audit is the single best habit for keeping a COS alive past month one.

---

### Prompt 2 – Build a Custom Command with Claude Code

```
I want to add a new custom command to my COS. Here's the idea in plain language:

Command name: [SHORT NAME, e.g. "digest" or "brief" or "status"]
What it should do: [DESCRIBE IN ONE OR TWO SENTENCES]
What I want back: [TELEGRAM MESSAGE / FILE / SPOKEN ANSWER / ETC.]
When I'd use it: [MORNING / BEFORE MEETINGS / ON DEMAND]

Scope it first — tell me exactly what you'll build, what data sources it touches, and what could go wrong. Then build it via Claude Code, test it end-to-end, and confirm it's live. Show me a real run.

Some ideas if I'm stuck:
- "digest" → daily content brief from my feeds + saved links
- "brief [person]" → pull everything I know about someone in one card
- "status" → what's open across email, calendar, and contacts right now
```

**Why this matters:** Custom commands are where your COS stops being a generic assistant and starts being yours. The friction of building one in Claude Code is now lower than the friction of doing the task manually — that's the whole point.

---

### Prompt 3 – End-to-End Live Test

```
I'm giving you a real task — not a drill. Use every capability you have.

The task: [DESCRIBE A REAL THING ON YOUR PLATE — e.g. "Confirm Thursday's meeting with [NAME], get them on the phone if they don't reply by EOD, prep me for the conversation, and brief me on Telegram"]

I expect you to:
1. Draft and send the email (use the contacts lookup — never guess an address)
2. Make or schedule the phone call
3. Generate a meeting prep card for the conversation
4. Deliver a clean summary to my Telegram when it's all in motion

Move. Tell me what you did, what's pending, and what needs my input.
```

**Why this matters:** Until you point your COS at something real with stakes, you don't actually know if it works. The test isn't whether each tool runs — it's whether they chain together without you babysitting.

---

### Prompt 4 – Upgrade Something That's Already Working

```
Pick one system that's already running for me and make it sharper.

System to upgrade: [EMAIL TRIAGE / VOICE AGENT / WEEKLY NARRATIVE / MEETING PREP / OTHER]

What it does today:
[ONE OR TWO SENTENCES]

What I wish it did differently:
[THE GAP — too long, too generic, missing a source, wrong tone, fires at the wrong time, etc.]

Propose the upgrade first: what you'd change, what you'd leave alone, and what the new output would look like. Once I approve, build it, swap it in, and run it live so I can see the difference.
```

**Why this matters:** The second version of any system is almost always 10x better than the first, because now you know what you actually wanted. Upgrades compound — neglected systems decay.

---

### Prompt 5 – Build the Grocery/Errand Agent

```
Build me a grocery and errand agent.

Connect to [KROGER API / INSTACART API / WHICHEVER IS SIMPLER TO GET WORKING].

The command: I say "order [ITEM]" or "order [LIST]" and you handle the rest — find the item, add it to my cart, confirm the total, and either place the order or hand me back a one-tap confirm link.

Rules:
- Keep it simple. As few tools and as little infrastructure as possible.
- Prefer one API and one command over a clever multi-vendor router.
- If you can't find an item, ask once and move on — don't stall.
- Default to my usual store, my usual delivery window, my usual payment method.

Scope it, build it, test it on a real order of [ITEM]. Confirm it's live.
```

**Why this matters:** This is the "Russ's rule" prompt — keep it simple, as few tools as possible. The grocery agent is small on purpose: it proves that the boring, repetitive parts of life can be one command away without overengineering.

---

### Prompt 6 – Build a Competitive Watcher

```
Build me a weekly watcher.

Target: [ONE COMPETITOR, PERSON, OR TOPIC — be specific, just one]

Every week, monitor and report on:
- New content they published (blog, podcast, posts, press)
- New hires or org changes
- Pricing or product changes
- Anything else genuinely notable (funding, partnerships, public moves)

Deliver the report to my Telegram every Monday morning. Keep it under 200 words, bullets only, with links. If nothing happened, say "nothing notable this week" — don't pad.

Set it up, confirm when it's scheduled, and fire one test run right now so I can see the format.
```

**Why this matters:** A focused watcher beats a noisy dashboard. One target, one report, one day a week — and you'll know more about them than they know about themselves within a month.

---

### Prompt 7 – Write Your Own Prompt

This one is blank on purpose. Think back to Session 1 — what's the one thing you've wanted your COS to do that hasn't shown up on the curriculum? Fill it in. Be specific. The bracket structure is just scaffolding; rewrite it however you need.

```
Build me [THE THING YOU'VE BEEN WANTING SINCE SESSION 1].

What it should do:
[DESCRIBE THE BEHAVIOR]

What I want back:
[OUTPUT FORMAT AND WHERE IT GOES]

Constraints:
[KEEP IT SIMPLE — fewest tools, fewest dependencies, smallest scope that's still useful]

Scope it first, then build it, then show me a live run.
```

**Why this matters:** The whole point of a personal COS is that the curriculum runs out and you keep going. If you can write the prompt, your COS can build it — that's the loop you're leaving this course with.

---

*Fill in every [BRACKET] before sending. The more context you give, the better the output.*

*Cohort 2 is forming. Keep building — the systems you've stood up this month only get sharper from here. Don't let them go quiet.*
