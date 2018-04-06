---
title: "Effective Websites: 04 Web Development"
date: 2018-03-02T09:59:15-05:00
header_image: 'after-effects-header.png'
teaser_image: 'after-effects-teaser.png'
square_image: 'after-effects-square.png'
description: In which we explain everything about an effective business website. Part 4 of 5.
---

We started this series because we’ve found that most websites stink. They stink because they don’t generate business. We’re on a mission to fix that.

I love that you’re working on your [strategy](/blog/effective-website-01-strategy/), your [design](/blog/effective-website-03-web-design/), and your [content](/blog/effective-website-02-content/), but your development stinks and it makes us sad.

Your otherwise perfect website has badly written and poorly optimized code. It’s bloated and slow and it’s hurting your user experience and SEO.

It’s like a Ferrari with flat tires. It looks good, but it doesn’t perform.

Website development usually stinks for one of two reasons:

1. You don’t know that your development stinks.
2. You don’t care that your development stinks.

Let’s talk to those of you in the second camp first.

### Does website speed really matter?

Hey, we get it. If your site looks good and has good content, why should you even care about optimizing development? Do you really care how the sausage gets made?

But the statistics on the importance of website speed are clear. __Faster sites lead to better user experience, better search rankings, and better sales__.

A one second increase in speed on a mobile site increases conversion by 27%. Sites that take longer than three seconds to load have a huge increase in bounce rate.

To put it in business terms, if your site takes longer than three seconds to load, people are leaving before they even see it, and if you can get your site to load one second faster, you can increase your sales by nearly a third.

Beyond the user experience of a fast site, __Google is quickly and surely increasing the importance of speed as a ranking signal__. This means that if you continue to neglect your development, Google will be ranking your competitors’ faster sites above yours in search.

If you still aren’t convinced, take twenty minutes to skim some of these sites and come back: [Yes, speed matters. A lot](http://lmgtfy.com/?q=does+website+speed+matter%3F).

### How do I know if my development stinks?

Your website is software. It’s a multimedia application written in HTML, CSS, and JavaScript at the very least and often PHP, Python, Ruby, or Erlang if you’re fancy. Like any other software, it needs to be examined, refactored, and optimized.

But you’re a business owner, not a programmer. You trust that the people building websites know what they are doing, and I don’t blame you.

Unfortunately, design and development are separate disciplines with so little overlap that those possessing both skills are commonly called unicorns. Even more unfortunate, __most agencies neglect development__.

Fortunately, a fast, well-optimized site is not subjective, and there are many tools that can help you determine who cares about development and who doesn’t.

The two that we use most often are [GTmetrix](http://gtmetrix.com) and [Pingdom’s speed test](http://tools.pingdom.com).

Both of these tools will load your site, analyze it, give it a score, and tell you where you could use some optimization.

Run your own site through both tools. I’m guessing that you will be surprised by what you find.

For even more fun, find some local advertising agency websites and run their site through the tools.

These are the “experts” charging money to build websites. In many cases, we were shocked and appalled.

### How do I optimize my site?

Both GTmetrix and Pingdom will give you a list of insights and recommendations ranked by importance.

We’ve found that the biggest performance hits come from the following, all of which are easy to fix:

#### Serve scaled images

Scale and crop your images to the size that you will be using them on your page. If you are using WordPress or another CMS, make sure that your thumbnail sizes are set correctly.

#### Serve optimized images

Use jpeg for photographs, png for graphics, and svg for vector images. Jpeg and png images can be run through optimizilla and svg’s can be run through svgomg for the best optimization.

#### Reduce the number of HTTP requests

Often this is the result of having multiple css and javascript files, or reaching out to Google fonts/Adobe Typekit, Facebook, Twitter, LinkedIn, etc.

Combine and minify your css and javascript files and try to reduce the amount of calls to other services. Again, if you are using WordPress or another CMS, there are plugins available for minification and caching which do a lot of the work for you.

#### Add gzip and expires headers on the server

These are both server optimization techniques, and you may need to contact your server administrator to set them up.

Go through each line item on your report and fix them. It takes time and effort, but the payoff is tangible.

Ultimately, these issues should be addressed while developing the site. Your goal should be to reduce your load time to under two seconds.

__If you need help, hit us up. We spend a lot of time obsessing over details.__

We will also perform a full site audit for you and provide a full report on all of the reasons your site isn’t generating business. We’re always here and would be thrilled to fix a site that stinks.

Until next time, let’s all work together to improve the web through better strategy, content, design, and development.

And remember, we love you! &#128140;
