![favicon](https://github.com/user-attachments/assets/bc1acd1e-3d85-43ed-8816-0e1574458d72)


# [STRIFE](https://66b2418c622d020859e58536--strife-platform.netlify.app/) - Group chat that's all fun
An end-to-end full-stack application and real-time #strife app with all servers, channels, video calls, audio calls, editing , deleting messages and manage members role (admin, guest, moderator). You can check out live demo of the application by clicking [here](https://66b2418c622d020859e58536--strife-platform.netlify.app/)

## Getting Started
The fastest way to get started with #Strife i sby following these steps.
#### Step 1: Clone the git repository
```bash
https://github.com/1999-sahil/strife-platform-repo.git
```
#### Step 2: Install all dependencies or devDependencies
```bash
npm install or npm i
```
#### Step 3: Run the development server
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

## Application Images
#### Home page (Light Mode)
![main-l](https://github.com/user-attachments/assets/f270d670-27b0-4f8e-ab9e-c8d024e073b0)
#### Home page (Dark Mode)
![main-d](https://github.com/user-attachments/assets/aa402e07-092d-46c4-b6e3-98b98cc1d333)
#### SQL Database Design
![db-design](https://github.com/user-attachments/assets/071193e0-6f83-4a1e-8fcc-eeae6b3fae49)

## Key Features of the Strife application
* ⏱️ Real-time messaging using Socket.io
* : Send attachments as messages using UploadThing
* Delete and Edit messages in real-time for all users
* Create Text, Audio, Video call channels
* 1:1 conversation between members
* 1:1 video call between members
* Member management [Kick member, Role-change (Guest/Moderator)]
* Unique invite link generation and full working invite system
* Infinite loading for messages in batches of 10 using @tanstack/query
* Server creation and customization
* Beautiful User-interface (UI) using Tailwind CSS abd Shadcn-UI
* Full responsivity and mobile UI
* Light and Dark mode theme
* Websocket fallback: Polling with alerts
* ORM using Prisma
* MySql database using @tiDb Cloud
* Authentication with Clerk


## Built With
* [Nextjs](https://nextjs.org/) - A react.js framework
* [Tailwind CSS](https://tailwindcss.com/) - A CSS framework to design UI of the application
* [tiDB Serverless MySql](https://www.pingcap.com/blog/tidb-serverless-vs-amazon-rds/?https://www.pingcap.com/article/embracing-tidb-cloud-the-ultimate-aws-rds-alternative/?utm_source=google&utm_medium=cpc&utm_campaign=plg_search_RDScompare_blog_02&utm_term=tidb%20cloud&utm_campaign=plg_search_RDScompare_blog_02&utm_source=adwords&utm_medium=ppc&hsa_acc=4915329829&hsa_cam=21426983197&hsa_grp=172559692508&hsa_ad=704295443174&hsa_src=g&hsa_tgt=kwd-2305906205430&hsa_kw=tidb%20cloud&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwk8e1BhALEiwAc8MHiPbzFO_cZAuAORPWQ5yPz7p3_CXpLiM7UMzr5d1cMSPWz4iaZCZHAhoC9loQAvD_BwE) - An open-source distributed SQL database that supports Hybrid Transactional and Analytical Processing (HTAP) workloads. It is MySQL compatible and features horizontal scalability, strong consistency, and high availability.
* [Prisma](https://www.prisma.io/) - An ORM that makes working with databases easy
* [Socket.io](https://socket.io/) - A library that enables bi-directional and event communication between a client and a server
* [Zustand](https://zustand-demo.pmnd.rs/) - A state management tool for managing state. A centralized state and reducing prop drilling in application
* [tanstack-query](https://tanstack.com/query/latest) - A library used for data retrieval and catching in modern web apps.
* [uploadThing](https://uploadthing.com/) - An open-source tool that streamlines the process of adding file upload features to full-stack typescript applications
* [clerk-auth](https://clerk.com/) - An authetication platform providing login via passwords, social providers, one-time email/SMS codes.


## Deployement
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Free Alternatives to deploy application
* [Netlify](https://www.netlify.com/)
* [Render](https://render.com/)
* [Railway](https://railway.app/)
* [Vercel](https://vercel.com/)
