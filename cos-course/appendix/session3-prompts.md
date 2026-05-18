# Session 3 – Starter Prompts
## The Intelligence Layer

Use these prompts directly in your AI COS to complete each step. Copy, paste, fill in the brackets, and let your COS do the work.

---

### Prompt 1 – Create Your First Contact File

```
Create a contact file for someone in my network.

Name: [FULL NAME]
Role: [TITLE]
Company: [COMPANY]
How I know them: [RELATIONSHIP / WHERE WE MET]
What matters: [WHAT YOU SHOULD ALWAYS KNOW BEFORE THIS PERSON COMES UP]

Save it to contacts/[first-last].md using this structure:

# [Name]
**Role:** [Title @ Company]
**Relationship:** [How I know them]

## Context
[Why they matter, what they care about]

## History
- [YYYY-MM-DD] – [Interaction or note]

## Notes
[Anything else worth tracking]

Pull anything you already know about them from my email and calendar. Flag any gaps.
```

---

### Prompt 2 – Build the Meeting Prep Command

```
Build me a custom command called "prep".

When I type "prep", do the following:
1. Read my Google Calendar and find my next meeting (or the one I specify)
2. Identify the attendees and match them to files in contacts/
3. Pull the last 30 days of email with those attendees
4. Generate a briefing card with:
   - Who I'm meeting and our relationship
   - Last interaction summary
   - Open items or commitments
   - My likely goal for this meeting
   - One thing not to forget

Deliver it as a clean Telegram message, 5 bullets max.

Also set this up to run automatically — 30 minutes before every meeting on my Google Calendar. Skip events with no real attendees (focus blocks, personal events). If an attendee doesn't have a contact file, note it in the card so I can add them later.

Confirm when it's wired up and show me a live example.
```

---

### Prompt 3 – Run Prep on a Real Meeting

```
prep

Meeting: [MEETING TITLE or "my next meeting"]

Generate the prep card now and send it to my Telegram.
```

---

### Prompt 4 – Add Bulk Contact Files

```
I want to add multiple people to my contacts system at once.

Here's the list:
1. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]
2. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]
3. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]
4. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]
5. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]

Create a contacts/[first-last].md file for each one using my standard template. Pull anything you already know from my email and calendar history. Flag anything you're unsure about — I'll fill in the gaps.
```

---

### Prompt 5 – Build the Weekly Narrative

```
Set up a weekly synthesis that runs on a schedule you choose and delivers a briefing to my Telegram.

Synthesize the week by pulling from:
- Google Calendar (meetings I had)
- Sent and received email
- Any contact file updates
- Tasks or commitments I made

The narrative should cover:
- What happened this week (top 3 storylines, not a list dump)
- What moved forward and what stalled
- Top 3 priorities for next week
- One thing I should not let slip

Under 300 words. Written like a sharp chief of staff briefing me at the start of the week. No fluff.

Set it up, confirm when it's live, and fire a test run so I can see what the report looks like.
```

---

### Prompt 6 – End-to-End Intelligence Test

```
Run a full test of my intelligence layer.

1. Find my next calendar event with a real attendee
2. Pull the matching contact file from contacts/
3. Generate the meeting prep card
4. Send it to my Telegram

Report back: what worked, what was missing (no contact file, no recent email, etc.), and what I should fix before my next real meeting.
```

---

### Prompt 7 – Build a Smart Contact Lookup Skill

This is the upgrade that prevents your COS from ever guessing an email address. Three-layer lookup: your contact files → Google Contacts → Gmail history. If it can't find a verified address, it stops and tells you instead of inventing one.

```
Build me a contacts lookup system with three layers.

Layer 1 – Contact files
Search my contacts/ folder for a markdown file matching the person's name. Return the file contents if found.

Layer 2 – Google Contacts
If no contact file exists, search my Google Contacts (via the People API) for the person by name. Return their email and phone if found.

Layer 3 – Gmail history
If still no verified email, search my Gmail sent and received headers for any message from or to that person by name. Extract the email address they actually send from — not an address I sent to (which may be wrong). Return what you find.

Guardrail
Before composing any external email or outbound message, run all three layers in order. If none return a verified email, tell me: "I don't have a verified email for [name] — want me to create a contact file?" Never guess or infer an email address from a website or company name.

Save this as a skill called "contacts-lookup" so it's available in every future session.

Test it now on someone I've emailed recently. Show me the result from each layer and which one found the verified address.
```

**Why this matters:** The default COS behavior is to infer an email from context ("they work at acme.com so probably name@acme.com"). That breaks. Gmail history is the most reliable source — if you've ever exchanged a single email with someone, their real sending address is in your headers.

---

*Fill in every [BRACKET] before sending. The more context you give, the better the output.*

*Session 4 – Make It Yours. Come with one thing you want to build that isn't on the curriculum.*
