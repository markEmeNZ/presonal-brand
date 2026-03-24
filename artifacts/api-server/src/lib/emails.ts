import { encodeToken } from "../routes/unsubscribe.js";

const SITE_URL = "https://www.personalbrand.co.nz";

export interface EmailTemplate {
  subject: string;
  html: (unsubscribeUrl: string) => string;
  text: (unsubscribeUrl: string) => string;
  sendHour: number;
}

function footer(unsubscribeUrl: string): string {
  return `
    <div style="margin-top:48px;padding-top:24px;border-top:1px solid #1a1a1a;font-size:12px;color:#444;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
      — The Personal Brand Co. &nbsp;|&nbsp; <a href="${SITE_URL}" style="color:#666;text-decoration:none;">personalbrand.co.nz</a><br><br>
      You're receiving this because you signed up for early access at personalbrand.co.nz.<br>
      <a href="${unsubscribeUrl}" style="color:#444;">Unsubscribe</a>
    </div>
  `.trim();
}

function footerText(unsubscribeUrl: string): string {
  return `\n\n---\n— The Personal Brand Co. | personalbrand.co.nz\nYou signed up for early access at personalbrand.co.nz.\nUnsubscribe: ${unsubscribeUrl}`;
}

export const EMAIL_JOURNEY: EmailTemplate[] = [
  {
    sendHour: 8,
    subject: "Your name is a brand. Just not one you've built yet.",
    text: (u) => `
You've been Googled.

Maybe by a client checking you out before signing. Maybe a recruiter sizing you up. Maybe someone you met last week who wants to know if you're legit.

What did they find?

Your personal brand is already speaking. The question is whether it's saying what you want it to.

This is the problem we're solving.

Something's coming to personalbrand.co.nz — and you got early access because you were sharp enough to sign up.

Stay tuned.

— The Personal Brand Co.
${footerText(u)}`.trim(),
    html: (u) => `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;">
<div style="max-width:600px;margin:0 auto;padding:48px 32px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#d4ff00;margin-bottom:32px;">personalbrand.co.nz — Early Access</div>
  <h1 style="font-size:32px;font-weight:900;color:#ffffff;line-height:1.1;margin:0 0 24px 0;">Your name is a brand.<br>Just not one you've built yet.</h1>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">You've been Googled.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">Maybe by a client checking you out before signing. Maybe a recruiter sizing you up. Maybe someone you met last week who wants to know if you're legit.</p>
  <p style="font-size:16px;line-height:1.7;color:#ffffff;font-weight:700;margin:0 0 16px 0;">What did they find?</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">Your personal brand is already speaking. The question is whether it's saying what you <em>want</em> it to.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">This is the problem we're solving.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">Something's coming to personalbrand.co.nz — and you got early access because you were sharp enough to sign up.</p>
  <p style="font-size:16px;color:#d4ff00;font-weight:700;margin:0 0 16px 0;">Stay tuned.</p>
  ${footer(u)}
</div>
</body>
</html>`,
  },
  {
    sendHour: 7,
    subject: "What does Google say about you?",
    text: (u) => `
Open an incognito tab.

Search your name.

Don't overthink it — just do it now.

What comes up? Your LinkedIn? An old company profile from three jobs ago? Nothing?

Here's the thing: if you're in business, if you're building a career, if you want to be taken seriously in New Zealand — your digital footprint matters. A lot.

The people who control the narrative about themselves are the ones who build it on purpose.

We're almost ready to help you do exactly that.

— The Personal Brand Co.
${footerText(u)}`.trim(),
    html: (u) => `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;">
<div style="max-width:600px;margin:0 auto;padding:48px 32px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#d4ff00;margin-bottom:32px;">personalbrand.co.nz — Early Access</div>
  <h1 style="font-size:32px;font-weight:900;color:#ffffff;line-height:1.1;margin:0 0 24px 0;">What does Google<br>say about you?</h1>
  <div style="font-size:18px;color:#ffffff;font-weight:700;background:#111;border-left:3px solid #d4ff00;padding:16px 20px;margin:24px 0;">Open an incognito tab. Search your name. Do it now.</div>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">What comes up? Your LinkedIn? An old company profile from three jobs ago? Nothing?</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">If you're in business, if you're building a career, if you want to be taken seriously in New Zealand — your digital footprint matters. A lot.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">The people who control the narrative about themselves are the ones who build it <em>on purpose</em>.</p>
  <p style="font-size:16px;color:#d4ff00;font-weight:700;margin:0 0 16px 0;">We're almost ready to help you do exactly that.</p>
  ${footer(u)}
</div>
</body>
</html>`,
  },
  {
    sendHour: 17,
    subject: "The 60-second rule.",
    text: (u) => `
You have 60 seconds.

That's how long it takes someone to decide if they trust you online.

They land on your LinkedIn. They check your website. They look at your social. They've already made a judgment before they've read a single word you've written.

This isn't shallow. It's human.

And the people who understand this — who treat their personal brand like the asset it is — they don't just get more opportunities. They get better ones.

More on what we're building soon.

— The Personal Brand Co.
${footerText(u)}`.trim(),
    html: (u) => `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;">
<div style="max-width:600px;margin:0 auto;padding:48px 32px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#d4ff00;margin-bottom:32px;">personalbrand.co.nz — Early Access</div>
  <h1 style="font-size:72px;font-weight:900;color:#ffffff;line-height:1.0;margin:0 0 4px 0;">60</h1>
  <div style="font-size:20px;color:#d4ff00;font-weight:700;margin:0 0 32px 0;">seconds. That's all you get.</div>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">That's how long it takes someone to decide if they trust you online.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">They land on your LinkedIn. They check your website. They look at your social. They've already made a judgment before they've read a single word you've written.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">This isn't shallow. It's human.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">And the people who understand this — who treat their personal brand like the asset it is — they don't just get more opportunities. They get better ones.</p>
  <p style="font-size:16px;color:#d4ff00;font-weight:700;margin:0 0 16px 0;">More on what we're building soon.</p>
  ${footer(u)}
</div>
</body>
</html>`,
  },
  {
    sendHour: 12,
    subject: "Stop writing like a corporate press release.",
    text: (u) => `
You know what kills a personal brand?

Sounding like everyone else.

"Passionate about leveraging synergies to drive transformational outcomes."

Who wrote that? No one. A robot wrote that. Or someone who stopped trusting their own voice.

The people who cut through the noise in New Zealand — on LinkedIn, on Instagram, in their newsletters — they write like humans. They have a point of view. They're not trying to please everyone.

Your voice is the most underutilised asset in your brand.

We're going to help you find it, sharpen it, and put it to work.

Launch is close.

— The Personal Brand Co.
${footerText(u)}`.trim(),
    html: (u) => `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;">
<div style="max-width:600px;margin:0 auto;padding:48px 32px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#d4ff00;margin-bottom:32px;">personalbrand.co.nz — Early Access</div>
  <h1 style="font-size:28px;font-weight:900;color:#ffffff;line-height:1.15;margin:0 0 24px 0;">Stop writing like<br>a corporate press release.</h1>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">You know what kills a personal brand?</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">Sounding like everyone else.</p>
  <div style="font-size:15px;color:#555;font-style:italic;background:#111;border-left:3px solid #333;padding:16px 20px;margin:24px 0;">"Passionate about leveraging synergies to drive transformational outcomes."</div>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">Who wrote that? No one. A robot wrote that. Or someone who stopped trusting their own voice.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">The people who cut through the noise in New Zealand — on LinkedIn, on Instagram, in their newsletters — they write like humans. They have a point of view. They're not trying to please everyone.</p>
  <p style="font-size:16px;line-height:1.7;color:#ffffff;font-weight:700;margin:0 0 16px 0;">Your voice is the most underutilised asset in your brand.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">We're going to help you find it, sharpen it, and put it to work.</p>
  <p style="font-size:16px;color:#d4ff00;font-weight:700;margin:0 0 16px 0;">Launch is close.</p>
  ${footer(u)}
</div>
</body>
</html>`,
  },
  {
    sendHour: 9,
    subject: "Your headshot is from 2019 and it shows.",
    text: (u) => `
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
${footerText(u)}`.trim(),
    html: (u) => `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;">
<div style="max-width:600px;margin:0 auto;padding:48px 32px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#d4ff00;margin-bottom:32px;">personalbrand.co.nz — Early Access</div>
  <h1 style="font-size:28px;font-weight:900;color:#ffffff;line-height:1.15;margin:0 0 24px 0;">Your headshot is from 2019<br>and it shows.</h1>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">Real talk.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 8px 0;">Your profile photo is doing one of three things:</p>
  <ol style="color:#a0a0a0;font-size:16px;line-height:2;padding-left:20px;margin:8px 0 24px;">
    <li style="color:#d4ff00;font-weight:700;">It's building trust before you've said a word.</li>
    <li>It's doing nothing.</li>
    <li>It's actively working against you.</li>
  </ol>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">In New Zealand, we tend to be modest about this stuff. We don't want to seem like we're trying too hard. But a great photo isn't arrogance. It's respect for the person looking at you.</p>
  <p style="font-size:16px;line-height:1.7;color:#ffffff;font-weight:600;margin:0 0 16px 0;">High quality photography. Images that actually look like you in 2025. B-roll for your content.</p>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">This is part of what we do.</p>
  <p style="font-size:16px;color:#d4ff00;font-weight:700;margin:0 0 16px 0;">Almost there.</p>
  ${footer(u)}
</div>
</body>
</html>`,
  },
  {
    sendHour: 18,
    subject: "We're live. Here's your early access.",
    text: (u) => `
It's here.

Personal Brand Co. is now open.

We help New Zealanders build personal brands that actually do something — copy that sounds like you at your best, photography that builds trust, social media strategy that isn't just posting for the sake of it, websites, ads, and the full picture.

Because you signed up early, you're first in line.

Visit personalbrand.co.nz to find out what we can do for you.

Let's build something worth Googling.

— The Personal Brand Co.
${footerText(u)}`.trim(),
    html: (u) => `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;">
<div style="max-width:600px;margin:0 auto;padding:48px 32px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="display:inline-block;background:#d4ff00;color:#000;font-size:11px;font-weight:900;letter-spacing:0.15em;text-transform:uppercase;padding:6px 14px;margin-bottom:24px;">We're Live</div>
  <h1 style="font-size:36px;font-weight:900;color:#ffffff;line-height:1.1;margin:0 0 24px 0;">Personal Brand Co.<br>is now open.</h1>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">We help New Zealanders build personal brands that actually do something — copy that sounds like you at your best, photography that builds trust, social media strategy that isn't just posting for the sake of it, websites, ads, and the full picture.</p>
  <p style="font-size:16px;line-height:1.7;color:#ffffff;font-weight:600;margin:0 0 24px 0;">Because you signed up early, you're first in line.</p>
  <a href="${SITE_URL}" style="display:block;text-align:center;background:#d4ff00;color:#000;font-weight:900;font-size:16px;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;padding:18px 32px;margin:24px 0;">Get Early Access →</a>
  <p style="font-size:16px;line-height:1.7;color:#a0a0a0;margin:0 0 16px 0;">Let's build something worth Googling.</p>
  ${footer(u)}
</div>
</body>
</html>`,
  },
];

export function getScheduledDates(signupDate: Date): Date[] {
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

export function getUnsubscribeUrl(subscriberId: number): string {
  const token = encodeToken(subscriberId);
  return `${SITE_URL}/unsubscribe?token=${token}`;
}
