# Session 4 – Starter Prompts
## Make It Yours — Full Autonomy & Pressure Testing

Use these prompts directly in your AI COS to complete each step. Copy, paste, fill in the brackets, and let your COS do the work.

---

### Prompt 1 – The Maintenance Check

Before adding anything new, audit what you built. Most broken systems fail silently — this catches them.

```
Audit yourself.

Run a full health check across every system we've built:
- Email triage
- Voice calls (Bland.ai)
- Contacts system
- Weekly narrative
- Meeting prep

For each one, tell me:
1. Is it currently running? (live / broken / never finished)
2. When was the last time it actually fired or got used?
3. What's working well
4. What's broken, flaky, or silently failing
5. What hasn't been touched in 7+ days and may be dead weight

Then give me a prioritized fix list: the top 3 things to repair or retire before we add anything new.
```

> **The rule:** I'd rather kill a system than carry a broken one. A scheduled self-audit is the single best habit for long-term COS viability.

---

### Prompt 2 – Build a Custom Command

Custom commands are what transform your COS from a generic assistant into something that thinks like you. Pick one that saves you time every single day.

```
Build me a custom command called "[COMMAND NAME]".

When I type "[COMMAND NAME]", do the following:
[DESCRIBE EXACTLY WHAT IT SHOULD DO — step by step]

Output format: [Telegram message / file saved to russ-os / email draft / etc.]
Constraints: [e.g., under 200 words, bullets only, no fluff]

When it's built:
1. Save it as a skill so it persists across sessions
2. Run it once right now so I can see the output
3. Tell me if anything is missing before I use it for real
```

**Examples to try:**
- `digest` — pull my top 5 unread articles and summarize each in 2 sentences
- `brief [person]` — full contact card + recent email history + what to know before talking to them
- `status` — current snapshot: email backlog, today's calendar, open tasks

---

### Prompt 3 – End-to-End Live Test

This is the real test. Chain every tool together — contacts, email, voice, Telegram — on one actual task with stakes.

```
I'm giving you a real task — not a drill. Use every capability you have.

The task: [e.g., "Confirm the meeting with [NAME], get them on the phone if they don't reply by EOD, prep me for the conversation, and brief me on Telegram"]

I expect you to:
1. Draft and send the email (run contacts-lookup first)
2. Make or schedule the follow-up phone call via Bland.ai
3. Generate a meeting prep card
4. Deliver a clean summary to my Telegram when it's all done

Report back on what you did and flag anything that required my input.
```

> **Why this matters:** Anyone can build individual tools. The COS earns its keep when it can chain them together without you babysitting each step.

---

### Prompt 4 – The 10x Upgrade

Pick one system that's running but annoying you — wrong tone, too noisy, fires at the wrong time. Second versions are almost always 10x better because now you know what's actually missing.

```
I want to upgrade my [NAME THE SYSTEM — e.g., "weekly narrative" or "meeting prep command"].

Here's what's wrong with the current version:
[BE SPECIFIC — e.g., "it's too long", "the tone is too formal", "it misses context from my contact files", "it fires too early"]

Here's what I want instead:
[DESCRIBE THE BETTER BEHAVIOR]

Keep the same core function — just fix the gap. Show me a before/after comparison so I can confirm the upgrade is worth keeping.
```

---

### Prompt 5 – Build a Competitive Watcher

Stop monitoring dashboards. Build one focused weekly brief on the one competitor or topic you actually care about.

```
Build me a competitive watcher for [COMPANY NAME or TOPIC].

Every week on a schedule you set, send me a Telegram message with:
- What they shipped, announced, or changed in the last 7 days
- Any press, funding, or partnership news
- One sentence on what it means for me, if anything

Hard constraints:
- Under 200 words
- Bullets only, with source links
- "Nothing notable this week" is a valid and preferred output over filler

Sources to pull from: their blog, press releases, LinkedIn, Google News, and any RSS feeds you can find.

Set it up, confirm the schedule, and run a test report right now so I can see what the brief will look like.
```

---

### Prompt 6 – Build the One Thing You've Been Wanting

Since Session 1 you've had something in the back of your head you wanted to build. This is the prompt for that. Use the scaffold below — scope it first, then build, then test.

```
Build me [THE THING YOU'VE BEEN WANTING SINCE SESSION 1].

What it should do:
[DESCRIBE THE BEHAVIOR — what triggers it, what it does, what it outputs]

What I want back:
[OUTPUT FORMAT AND WHERE IT GOES — Telegram, file, email, etc.]

Constraints:
[KEEP IT SIMPLE — fewest tools, fewest dependencies. If you need more than 3 integrations to make it work, scope it down.]

Scope it first and tell me what you're going to build before you start. Then build it. Then show me a live run.
```

> **The loop never ends:** Scope → Build → Test → Upgrade. The curriculum ends here but this loop is how your COS keeps getting better every week.

---

### Prompt 7 – The Grocery / Errand Agent (Bonus)

The simplest possible real-world delegation test. One API, one task, one tap to confirm.

```
Build me a simple errand agent.

When I say "order [ITEM]", do the following:
1. Search [Kroger / Instacart / whatever you use] for the item
2. Add it to my cart
3. Send me a one-tap confirmation link on Telegram

Constraints:
- Connect to one API only — don't overcomplicate it
- If the item isn't found, ask me once for a substitute and move on
- Never place an order without my confirmation tap

Start with the API connection and show me a test run before wiring up the full flow.
```

---

*Fill in every [BRACKET] before sending. The more specific you are, the better the output.*

*You built this. Now run it for real.*
