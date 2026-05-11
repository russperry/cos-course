# Session 3 – Starter Prompts
## The Intelligence Layer

Use these prompts directly in Hermes to complete each step tonight. Copy, paste, and go.

---

### Step 1 – Create Your First Contact File

```
Create a contact file for someone in my network. Save it to contacts/[first-last].md.

Name: [FULL NAME]
Role: [TITLE]
Company: [COMPANY]
How I know them: [RELATIONSHIP / WHERE WE MET]
What matters: [WHAT MY COS SHOULD ALWAYS KNOW BEFORE THIS PERSON COMES UP]

Use this template structure:

# [Name]
**Role:** [Title @ Company]
**Relationship:** [How I know them]

## Context
[Why they matter, what they care about]

## History
- [YYYY-MM-DD] – [Interaction or note]

## Notes
[Anything else worth tracking]

Pull anything you already know about them from my email and calendar. Flag gaps and I'll fill them in.
```

---

### Step 2 – Build the Meeting Prep Command

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

Output it as a clean Telegram message, 5 bullets max. Confirm when it's wired up and show me an example.
```

---

### Step 3 – Set Meeting Prep on Cron

```
Set up a cron that runs my "prep" command automatically.

Trigger: 30 minutes before every event on my Google Calendar.

For each upcoming meeting:
1. Generate the prep card using my contacts system + recent email
2. Send it to my Telegram

If a meeting has no real attendees (focus blocks, personal events), skip it. If a contact file doesn't exist for an attendee, note that in the card so I can add them later.
```

---

### Step 4 – Generate a Meeting Prep Card (manual)

```
prep

Meeting: [MEETING TITLE or "next meeting"]
Time: [WHEN, e.g. "today at 2pm"]

Generate the prep card now and send it to my Telegram.
```

---

### Step 5 – Build the Weekly Narrative

```
Set up a cron that runs every Friday at 4 PM and delivers a weekly narrative to my Telegram.

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

Under 300 words. Written like a sharp chief of staff briefing me on Monday morning. No fluff.
```

---

### Step 6 – Add Bulk Contact Files

```
I want to add multiple people to my contacts system at once.

Here's the list:
1. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]
2. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]
3. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]
4. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]
5. [NAME] – [ROLE, COMPANY, SHORT CONTEXT]

Create a contacts/[first-last].md file for each one using my standard template (Context, History, Notes). Pull anything you already know from my email and calendar history. Flag anything you're unsure about and I'll fill in the gaps.
```

---

### Step 7 – Test the Intelligence Layer

```
Run a full end-to-end test of my intelligence layer.

1. Find my next calendar event with a real attendee
2. Pull the matching contact file from contacts/
3. Generate the meeting prep card
4. Send it to my Telegram

Report back with what worked, what was missing (no contact file, no recent email, etc.), and what I should fix before the next meeting.
```

---

*Tip: Fill in every [BRACKET] before sending. The more context you give, the better the output.*

*Session 4 tomorrow – Full Autonomy. Bring one thing you want to build that isn't on the curriculum.*
