# Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mcgrealife/landing-property)

> This will open VScode in the browser, run commands configured in gitpod.yml, and open a localhost on port :3000.

## Next.js

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Main files location in the `/pages` folder.

## Deployed

- This project is deployed on vercel at [https://landing-property.vercel.app/](https://landing-property.vercel.app/) and [https://landing-property.vercel.app/new-header](https://landing-property.vercel.app/new-header)

## TailwindCSS

- TailwindCSS is used, with theme extensions and utilities defined in `tailwind.config.js`
- Tailwind allows easy mobile and desktop width style variations. Styles are applied to mobile by default, or desktop by appening `lg:` in front of the style (ie. `className='pt-4 lg:pt-4'`)
- Tailwind provides excellent defaults, however, we are primarily using "Arbitrary values" with this syntax `pt-[24px]`
- Some arbitrary values have strict syntax requirements. For example, arbitrary shadow values requires `_` for spaces. (e.g. `shadow-[0_2px_4px_rgba(100,100,100,1)])
- [TailwindCSS Docs](https://tailwindcss.com/docs/width) have quick reference for syntax. Scroll to the bottom of each page to see the arbitrary value syntax
- We're also using a Tailwind plugin called `@savvywombat/tailwindcss-grid-areas` to make working with grid-areas easier (tailwind does not provide them out-of-the-box).
- Tailwind can accept JSX inside of className strings. The JSX just has to output the full tailwind utility name. For example ``className={`pt-[${variable}]`}`` would not work. But ``className={`${variable}`}`` would work (where the variable outputs the full `pt-[24px]` string).


## Greensock Animation Platform

- Manipulates properties with friendly js syntax
- Highly performant
- This project uses their core GSAP library, with additional `ScrollTrigger` and `ScrollTo` plugins
- Targets HTML elements with React Refs
- GSAP code must be placed inside a UseEffect()