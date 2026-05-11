# Session 2 – Starter Prompts
## Give Your COS a Voice

Use these prompts directly in Hermes to complete each step tonight. Copy, paste, and go.

---

### Step 1 – Design Your Inbound Call Script

```
I'm setting up an AI voice agent on Bland.ai to screen my inbound calls.
My name is [YOUR NAME] and I run [BRIEF DESCRIPTION OF YOUR BUSINESS].

Write me a Bland.ai inbound call pathway script that:
- Greets callers professionally as my AI assistant
- Collects their name, company, and reason for calling
- Identifies if they're urgent/VIP (I'll tell you who my VIPs are: [LIST NAMES OR COMPANIES])
- If urgent: tells them you'll have me call back within the hour and sends me a text summary
- If not urgent: offers to take a message or book a meeting via Calendly

Keep the tone warm but efficient. Write each node separately so I can paste them into Bland.
```

---

### Step 2 – Set Up Your Bland.ai Phone Number

```
I just created my Bland.ai account and need to configure my first inbound phone number.
Walk me through exactly what to set in the Bland dashboard:
- What pathway to assign
- What voice to pick (give me a recommendation)
- What timezone and business hours to set
- Any other settings I should configure before going live

My business hours are [YOUR HOURS, e.g. 9 AM – 6 PM MST Monday–Friday].
```

---

### Step 3 – Build the Pathway in Hermes

```
Help me build a Bland.ai call pathway using their API.
Here's my script: [PASTE YOUR SCRIPT FROM STEP 1]
My Bland API key is: [YOUR BLAND API KEY]
My phone number ID is: [YOUR PHONE NUMBER ID FROM BLAND DASHBOARD]

Create the pathway via API and assign it to my number.
```

---

### Step 4 – Wire Call Summaries Back to You

```
I want every Bland.ai inbound call to send me a summary automatically after it ends.
My Bland API key is: [YOUR BLAND API KEY]

Set up a webhook or cron that:
- Checks for completed calls in the last hour
- Pulls the call transcript and summary
- Sends me a Telegram message with: caller name, reason for calling, and recommended action
```

---

### Step 5 – Make Your First Outbound Call

```
Make an outbound call on my behalf using Bland.ai.

Call: [PHONE NUMBER]
Purpose: [e.g. "Follow up on the proposal I sent last Tuesday. Ask if they had a chance to review it and what questions they have."]
My name: [YOUR NAME]
My Bland API key: [YOUR BLAND API KEY]
My outbound number: [YOUR BLAND PHONE NUMBER]

Keep the call under 2 minutes. Send me a summary when it's done.
```

---

### Step 6 – Test Your Full Setup

```
Run a diagnostic on my Bland.ai voice agent setup.
My Bland API key is: [YOUR BLAND API KEY]

Check:
1. Is my phone number active and assigned to a pathway?
2. Did any calls come in today? If so, summarize them.
3. Make a quick test call to [YOUR OWN CELL NUMBER] to confirm the voice and script sound right.

Report back with what's working and what needs fixing.
```

---

### Bonus – VIP Caller List

```
I want my Bland.ai inbound handler to recognize VIP callers and treat them differently.

Here are my VIPs: [LIST NAMES AND/OR PHONE NUMBERS]

Update my pathway so that when a VIP calls:
- They skip the intake questions
- The agent says "Let me get Russ for you right away" and immediately texts me their name and number
- I have 60 seconds to pick up before the agent takes a message

My Bland API key is: [YOUR BLAND API KEY]
My pathway ID is: [YOUR PATHWAY ID]
```

---

*Tip: Fill in every [BRACKET] before sending. The more context you give, the better the output.*

*Session 3 tomorrow – The Intelligence Layer. Use your number for one real interaction tonight.*
