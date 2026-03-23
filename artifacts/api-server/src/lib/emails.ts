export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
  sendHour: number;
}

export const EMAIL_JOURNEY: EmailTemplate[] = [
  {
    sendHour: 8,
    subject: "Your name is a brand. Just not one you've built yet.",
    text: `
You've been Googled.

Maybe by a client checking you out before signing. Maybe a recruiter sizing you up. Maybe someone you met last week who wants to know if you're legit.

What did they find?

Your personal brand is already speaking. The question is whether it's saying what you want it to.

This is the problem we're solving.

Something's coming to personalbrand.co.nz — and you got early access because you were sharp enough to sign up.

Stay tuned.

— The Personal Brand Co.
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { margin: 0; padding: 0; background: #0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 48px 32px; }
  .eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #d4ff00; margin-bottom: 32px; }
  h1 { font-size: 32px; font-weight: 900; color: #ffffff; line-height: 1.1; margin: 0 0 24px 0; }
  p { font-size: 16px; line-height: 1.7; color: #a0a0a0; margin: 0 0 16px 0; }
  .highlight { color: #ffffff; }
  .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #1a1a1a; font-size: 12px; color: #444; }
</style>
</head>
<body>
<div class="wrapper">
  <div class="eyebrow">personalbrand.co.nz — Early Access</div>
  <h1>Your name is a brand.<br>Just not one you've built yet.</h1>
  <p>You've been Googled.</p>
  <p>Maybe by a client checking you out before signing. Maybe a recruiter sizing you up. Maybe someone you met last week who wants to know if you're legit.</p>
  <p class="highlight" style="color:#fff">What did they find?</p>
  <p>Your personal brand is already speaking. The question is whether it's saying what you <em>want</em> it to.</p>
  <p>This is the problem we're solving.</p>
  <p>Something's coming to personalbrand.co.nz — and you got early access because you were sharp enough to sign up.</p>
  <p style="color:#d4ff00;font-weight:700;">Stay tuned.</p>
  <div class="footer">— The Personal Brand Co. &nbsp;|&nbsp; personalbrand.co.nz<br><br>You're receiving this because you signed up for early access. <a href="#" style="color:#444">Unsubscribe</a></div>
</div>
</body>
</html>
    `.trim(),
  },
  {
    sendHour: 7,
    subject: "What does Google say about you?",
    text: `
Open an incognito tab.

Search your name.

Don't overthink it — just do it now.

What comes up? Your LinkedIn? An old company profile from three jobs ago? Nothing?

Here's the thing: if you're in business, if you're building a career, if you want to be taken seriously in New Zealand — your digital footprint matters. A lot.

The people who control the narrative about themselves are the ones who build it on purpose.

We're almost ready to help you do exactly that.

— The Personal Brand Co.
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { margin: 0; padding: 0; background: #0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 48px 32px; }
  .eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #d4ff00; margin-bottom: 32px; }
  h1 { font-size: 32px; font-weight: 900; color: #ffffff; line-height: 1.1; margin: 0 0 24px 0; }
  p { font-size: 16px; line-height: 1.7; color: #a0a0a0; margin: 0 0 16px 0; }
  .action { font-size: 18px; color: #ffffff; font-weight: 700; background: #111; border-left: 3px solid #d4ff00; padding: 16px 20px; margin: 24px 0; }
  .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #1a1a1a; font-size: 12px; color: #444; }
</style>
</head>
<body>
<div class="wrapper">
  <div class="eyebrow">personalbrand.co.nz — Early Access</div>
  <h1>What does Google<br>say about you?</h1>
  <div class="action">Open an incognito tab. Search your name. Do it now.</div>
  <p>What comes up? Your LinkedIn? An old company profile from three jobs ago? Nothing?</p>
  <p>If you're in business, if you're building a career, if you want to be taken seriously in New Zealand — your digital footprint matters. A lot.</p>
  <p>The people who control the narrative about themselves are the ones who build it <em>on purpose</em>.</p>
  <p style="color:#d4ff00;font-weight:700;">We're almost ready to help you do exactly that.</p>
  <div class="footer">— The Personal Brand Co. &nbsp;|&nbsp; personalbrand.co.nz<br><br>You're receiving this because you signed up for early access. <a href="#" style="color:#444">Unsubscribe</a></div>
</div>
</body>
</html>
    `.trim(),
  },
  {
    sendHour: 17,
    subject: "The 60-second rule.",
    text: `
You have 60 seconds.

That's how long it takes someone to decide if they trust you online.

They land on your LinkedIn. They check your website. They look at your social. They've already made a judgment before they've read a single word you've written.

This isn't shallow. It's human.

And the people who understand this — who treat their personal brand like the asset it is — they don't just get more opportunities. They get better ones.

More on what we're building soon.

— The Personal Brand Co.
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { margin: 0; padding: 0; background: #0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 48px 32px; }
  .eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #d4ff00; margin-bottom: 32px; }
  h1 { font-size: 48px; font-weight: 900; color: #ffffff; line-height: 1.0; margin: 0 0 8px 0; }
  .subhead { font-size: 20px; color: #d4ff00; font-weight: 700; margin: 0 0 32px 0; }
  p { font-size: 16px; line-height: 1.7; color: #a0a0a0; margin: 0 0 16px 0; }
  .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #1a1a1a; font-size: 12px; color: #444; }
</style>
</head>
<body>
<div class="wrapper">
  <div class="eyebrow">personalbrand.co.nz — Early Access</div>
  <h1>60</h1>
  <div class="subhead">seconds. That's all you get.</div>
  <p>That's how long it takes someone to decide if they trust you online.</p>
  <p>They land on your LinkedIn. They check your website. They look at your social. They've already made a judgment before they've read a single word you've written.</p>
  <p>This isn't shallow. It's human.</p>
  <p>And the people who understand this — who treat their personal brand like the asset it is — they don't just get more opportunities. They get better ones.</p>
  <p style="color:#d4ff00;font-weight:700;">More on what we're building soon.</p>
  <div class="footer">— The Personal Brand Co. &nbsp;|&nbsp; personalbrand.co.nz<br><br>You're receiving this because you signed up for early access. <a href="#" style="color:#444">Unsubscribe</a></div>
</div>
</body>
</html>
    `.trim(),
  },
  {
    sendHour: 12,
    subject: "Stop writing like a corporate press release.",
    text: `
You know what kills a personal brand?

Sounding like everyone else.

"Passionate about leveraging synergies to drive transformational outcomes."

Who wrote that? No one. A robot wrote that. Or someone who stopped trusting their own voice.

The people who cut through the noise in New Zealand — on LinkedIn, on Instagram, in their newsletters — they write like humans. They have a point of view. They're not trying to please everyone.

Your voice is the most underutilised asset in your brand.

We're going to help you find it, sharpen it, and put it to work.

Launch is close.

— The Personal Brand Co.
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { margin: 0; padding: 0; background: #0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 48px 32px; }
  .eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #d4ff00; margin-bottom: 32px; }
  h1 { font-size: 28px; font-weight: 900; color: #ffffff; line-height: 1.15; margin: 0 0 24px 0; }
  p { font-size: 16px; line-height: 1.7; color: #a0a0a0; margin: 0 0 16px 0; }
  .quote { font-size: 15px; color: #555; font-style: italic; background: #111; border-left: 3px solid #333; padding: 16px 20px; margin: 24px 0; }
  .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #1a1a1a; font-size: 12px; color: #444; }
</style>
</head>
<body>
<div class="wrapper">
  <div class="eyebrow">personalbrand.co.nz — Early Access</div>
  <h1>Stop writing like<br>a corporate press release.</h1>
  <p>You know what kills a personal brand?</p>
  <p>Sounding like everyone else.</p>
  <div class="quote">"Passionate about leveraging synergies to drive transformational outcomes."</div>
  <p>Who wrote that? No one. A robot wrote that. Or someone who stopped trusting their own voice.</p>
  <p>The people who cut through the noise in New Zealand — on LinkedIn, on Instagram, in their newsletters — they write like humans. They have a point of view. They're not trying to please everyone.</p>
  <p style="color:#fff;font-weight:700;">Your voice is the most underutilised asset in your brand.</p>
  <p>We're going to help you find it, sharpen it, and put it to work.</p>
  <p style="color:#d4ff00;font-weight:700;">Launch is close.</p>
  <div class="footer">— The Personal Brand Co. &nbsp;|&nbsp; personalbrand.co.nz<br><br>You're receiving this because you signed up for early access. <a href="#" style="color:#444">Unsubscribe</a></div>
</div>
</body>
</html>
    `.trim(),
  },
  {
    sendHour: 9,
    subject: "Your headshot is from 2019 and it shows.",
    text: `
Real talk.

Your profile photo is doing one of three things:

1. It's building trust before you've said a word.
2. It's doing nothing.
3. It's actively working against you.

In New Zealand, we tend to be modest about this stuff. We don't want to seem like we're trying too hard. But here's the thing — a great photo isn't arrogance. It's respect for the person looking at you.

High quality photography. Images that actually look like you in 2025. B-roll for your content. 

This is part of what we do.

Almost there.

— The Personal Brand Co.
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { margin: 0; padding: 0; background: #0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 48px 32px; }
  .eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #d4ff00; margin-bottom: 32px; }
  h1 { font-size: 28px; font-weight: 900; color: #ffffff; line-height: 1.15; margin: 0 0 24px 0; }
  p { font-size: 16px; line-height: 1.7; color: #a0a0a0; margin: 0 0 16px 0; }
  ol { color: #a0a0a0; font-size: 16px; line-height: 2; padding-left: 20px; margin: 16px 0 24px; }
  ol li { margin-bottom: 4px; }
  ol li:first-child { color: #d4ff00; }
  .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #1a1a1a; font-size: 12px; color: #444; }
</style>
</head>
<body>
<div class="wrapper">
  <div class="eyebrow">personalbrand.co.nz — Early Access</div>
  <h1>Your headshot is from 2019<br>and it shows.</h1>
  <p>Real talk.</p>
  <p>Your profile photo is doing one of three things:</p>
  <ol>
    <li>It's building trust before you've said a word.</li>
    <li>It's doing nothing.</li>
    <li>It's actively working against you.</li>
  </ol>
  <p>In New Zealand, we tend to be modest about this stuff. We don't want to seem like we're trying too hard. But a great photo isn't arrogance. It's respect for the person looking at you.</p>
  <p style="color:#fff;font-weight:600;">High quality photography. Images that actually look like you in 2025. B-roll for your content.</p>
  <p>This is part of what we do.</p>
  <p style="color:#d4ff00;font-weight:700;">Almost there.</p>
  <div class="footer">— The Personal Brand Co. &nbsp;|&nbsp; personalbrand.co.nz<br><br>You're receiving this because you signed up for early access. <a href="#" style="color:#444">Unsubscribe</a></div>
</div>
</body>
</html>
    `.trim(),
  },
  {
    sendHour: 18,
    subject: "We're live. Here's your early access.",
    text: `
It's here.

Personal Brand Co. is now open.

We help New Zealanders build personal brands that actually do something — copy that sounds like you at your best, photography that builds trust, social media strategy that isn't just posting for the sake of it, websites, ads, and the full picture.

Because you signed up early, you're first in line.

Visit personalbrand.co.nz to find out what we can do for you.

Let's build something worth Googling.

— The Personal Brand Co.
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { margin: 0; padding: 0; background: #0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 48px 32px; }
  .eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #d4ff00; margin-bottom: 32px; }
  .live-badge { display: inline-block; background: #d4ff00; color: #000; font-size: 11px; font-weight: 900; letter-spacing: 0.15em; text-transform: uppercase; padding: 6px 14px; margin-bottom: 24px; }
  h1 { font-size: 36px; font-weight: 900; color: #ffffff; line-height: 1.1; margin: 0 0 24px 0; }
  p { font-size: 16px; line-height: 1.7; color: #a0a0a0; margin: 0 0 16px 0; }
  .cta { display: block; text-align: center; background: #d4ff00; color: #000 !important; font-weight: 900; font-size: 16px; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; padding: 18px 32px; margin: 32px 0; }
  .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #1a1a1a; font-size: 12px; color: #444; }
</style>
</head>
<body>
<div class="wrapper">
  <div class="live-badge">We're Live</div>
  <h1>Personal Brand Co.<br>is now open.</h1>
  <p>We help New Zealanders build personal brands that actually do something — copy that sounds like you at your best, photography that builds trust, social media strategy that isn't just posting for the sake of it, websites, ads, and the full picture.</p>
  <p style="color:#fff;font-weight:600;">Because you signed up early, you're first in line.</p>
  <a href="https://personalbrand.co.nz" class="cta">Get Early Access →</a>
  <p>Let's build something worth Googling.</p>
  <div class="footer">— The Personal Brand Co. &nbsp;|&nbsp; personalbrand.co.nz<br><br>You're receiving this because you signed up for early access. <a href="#" style="color:#444">Unsubscribe</a></div>
</div>
</body>
</html>
    `.trim(),
  },
];

export function getScheduledDates(signupDate: Date): Date[] {
  const NZ_OFFSET_MS = 13 * 60 * 60 * 1000;
  
  const schedules = [
    { daysAfter: 7, emailIndex: 0 },
    { daysAfter: 10, emailIndex: 1 },
    { daysAfter: 13, emailIndex: 2 },
    { daysAfter: 16, emailIndex: 3 },
    { daysAfter: 19, emailIndex: 4 },
    { daysAfter: 22, emailIndex: 5 },
  ];

  return schedules.map(({ daysAfter, emailIndex }) => {
    const template = EMAIL_JOURNEY[emailIndex];
    const date = new Date(signupDate.getTime());
    date.setDate(date.getDate() + daysAfter);
    date.setUTCHours(template.sendHour - 13, 0, 0, 0);
    return date;
  });
}
