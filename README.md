# Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mcgrealife/landing-property)

- This will install/start the project on a gitpod VM.
- Then open VScode in one browser tab and a localhost loopback in another.
- Vscode will alert of an available port. Otherwise, it can be accessed via VScode's "Remote Explorer" Panel ([example photo](public/documentation-ref/remote-explorer-vsCode.png)).

## Next.js

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Main files location in the `/pages` folder.

## Deployed

- This project is deployed on vercel at [https://landing-property.vercel.app/](https://landing-property.vercel.app/)

## TailwindCSS

- TailwindCSS is used, with theme extensions and utilities defined in `tailwind.config.js`
- Tailwind allows easy mobile and desktop width style variations. Styles are applied to mobile by default, or desktop by appening `lg:` in front of the style (ie. `className='pt-4 lg:pt-4'`)
- Tailwind provides excellent defaults, however, we are primarily using "Arbitrary values" with this syntax `pt-[24px]`
- Some arbitrary values have strict syntax requirements. For example, arbitrary shadow values requires `_` for spaces. (e.g. `shadow-[0_2px_4px_rgba(100,100,100,1)])
- [TailwindCSS Docs](https://tailwindcss.com/docs/width) have quick reference for syntax. Scroll to the bottom of each page to see the arbitrary value syntax
- We're also using a Tailwind plugin called `@savvywombat/tailwindcss-grid-areas` to make working with grid-areas easier (tailwind does not provide them out-of-the-box).
- Tailwind can accept JSX inside of className strings. The JSX just has to output the full tailwind utility name. For example `` className={`pt-[${variable}]`} `` would not work. But `` className={`${variable}`} `` would work (where the variable outputs the full `pt-[24px]` string).

## Greensock Animation Platform

- Manipulates properties with friendly js syntax
- Highly performant
- This project uses their core GSAP library, with additional `ScrollTrigger` and `ScrollTo` plugins
- Targets HTML elements with React Refs
- GSAP code must be placed inside a UseEffect()

## Gitpod Tips

- If you use Gitpod in the browser often (rather than opening in local IDE), these browser settings are recommended [https://www.gitpod.io/docs/configure/browser-settings](https://www.gitpod.io/docs/configure/browser-settings)
- Gitpod command

## Current problems

### Problem 1

[Video 1 - duration:37s](https://github.com/mcgrealife/landing-property/blob/main/public/documentation-ref/PROBLEM%202%20-%20doubleFlick%20down%20triggers%20scrollTrigger%20id=_up_%20before%20animation%20on%20scrollTrigger%20id=_down_%20is%20complete.mp4%20-%205%20March%202022%201.mp4)

- there is a button in the top right that triggers a "scrollTo" tween to scroll to the bottom of the page
- on desktop, it works well
- on mobile devices (not just mobile width), it seems to get stuck on other scrollTriggers (at different positions in chrome vs safari)
- (note: the same was happening on desktop initially. I solved desktop by adding a conditional "autokill" to scrollTrigger ids="up" and "down" to true if the "longScroll" tween was active. But this did not solve it for mobile)

### Problem 2

[Video 2 - duration:52s](https://github.com/mcgrealife/landing-property/blob/main/public/documentation-ref/PROBLEM%202%20-%20doubleFlick%20down%20triggers%20scrollTrigger%20id=_up_%20before%20animation%20on%20scrollTrigger%20id=_down_%20is%20complete.mp4%20-%205%20March%202022%201.mp4)

- ScrollTrigger id="down" contains a scrollTo that scrolls from section-1 to section-2. It only plays "onEnter"
- ScrollTrigger id="up" contains a scrollTo that scrolls from section-2 to section-1. It only plays "onEnterBack"
- For single scroll/flicks, the animation works well!
- However, when scrolling/flicking multiple times quickly from section-1 to section-2 (scrollTrigger id="down"), it seems to prematurely trigger scrollTrigger id="up", and scrollTo in the opposite direction.
- I tried killing/pausing scrollTrigger id="down" until the animation on scrollTrigger id="up" was complete, but couldn't make it work.
