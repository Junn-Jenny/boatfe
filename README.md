## Brief

A new boat company, Boat Co, has asked us to produce a mobile responsive web app that
promotes and sells their catalogue of boats. They’ve asked that the web app promotes all the details
of their boats and allows people to place orders using their credit or debit card.

## Stories

Each story describes a high-level requirement that should be considered and broken down. Consider
websites or apps you’ve used previously and how they’ve offered similar functionality to their users.
Are there things you can take as inspiration? Are there things you should implement differently under
this use case?

|        |                                                                                                                                        |
| ------ | ------------------------------------------------------------------------------------------ |
| 1      | As a visitor, I’d like to be able to browse the catalogue of boats, giving me a summary of the most important details of each product. |
| 2      | As a visitor, I’d like to click into boats on the catalogue and view additional information on them.                                   |
| 3      | As a visitor, I’d like to use my card to purchase a boat                                                                               |
| 4      | As a visitor browsing boats, I’d like to be able to sort and filter boats using various features of the boats                          |
| 5      | The catalogue of boats is likely to grow into the 100s, the system should be able to load this catalogue quickly without the risk of slowing down as more boats are added |

## Technologies

Backend: Please write the backend of this system as a GraphQL Laravel API using the latest version of the Laravel Framework [Github backend link](https://github.com/Junn-Jenny/boatbe)
Note: use boat.sqlite in botbe root folder

Frontend: Please write the frontend as a static ReactJS application using Typescript 

## Listing

![Lisitng](https://i.imgur.com/b4bZZlT.png)

![Details](https://i.imgur.com/0mqKw3f.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
