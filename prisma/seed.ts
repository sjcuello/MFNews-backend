import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.article.createMany({
    data: [
      {
        title: "Raducanu Falls to Swiatek at Roland Garros",
        subtitle: "Raducanu vs Swiatek: a tough match at the French Open",
        description: "Raducanu struggles against Swiatek at Roland Garros. Despite defeat, Raducanu remains positive about her progress and future in tennis.",
        imageUrl: "https://s.yimg.com/ny/api/res/1.2/VP8lW3Yvi5CvIIbI7RhiSw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQwMg--/https://media.zenfs.com/en/aol_the_telegraph_333/e24b5c78d156dbb3604269837d205544",
        author: "Harrison Richards",
        category: "sports",
        content: "Full article content for Raducanu vs Swiatek...",
      },
      {
        title: "Grand Slams Added to Antitrust Lawsuit",
        subtitle: "Legal trouble in the tennis world",
        description: "Top critiques of the blockbuster antitrust lawsuit include the absence of Grand Slam tournaments as defendants. That is set to change next month.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHzre_V1LEzmgimQ_TSR2ap9wvvbhveoV6Q&s",
        author: "Daniel Kaplan",
        category: "general",
        content: "Full article content on antitrust lawsuit...",
      },
      {
        title: "CHS Girls Tennis Wins Another Title",
        subtitle: "Christopher High School girls tennis success",
        description: "One of the best teams at Christopher High School, the Cougars girls tennis team, went undefeated again this past fall.",
        imageUrl: "https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fcnusports.com%2Fimages%2F2025%2F3%2F10%2F2024-0926-WTEN-Selects-125.jpg&type=webp",
        author: "Gordon Kass",
        category: "general",
        content: "Full article content on CHS girls tennis...",
      },
      {
        title: "Jewell Loyd’s Background Explained",
        subtitle: "Exploring Jewell Loyd's roots",
        description: "Jewell Loyd nearly became a pro tennis player before switching to basketball. Her background is explored here.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1242018251.jpg",
        author: "Soham Kulkarni",
        category: "sports",
        content: "Full article content on Jewell Loyd...",
      },
      {
        title: "Who Is Tommy Paul’s Wife?",
        subtitle: "Tommy Paul's personal life and French Open run",
        description: "With Taylor Fritz out of the French Open, all eyes are on Tommy Paul, who has a deep connection to this tournament.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/2023-09-29T065223Z_1172607288_RC24I3AC9YUT_RTRMADP_3_TENNIS-BEIJING-473x315.jpg",
        author: "Sayantan Roy",
        category: "sports",
        content: "Full article content on Tommy Paul...",
      },
      {
        title: "Danielle Collins Faces Roland Garros Backlash",
        subtitle: "Controversy at Roland Garros",
        description: "Danielle Collins’ return to the French Open sparked backlash after a controversial gesture.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/2024-07-08T180925Z_1020735456_UP1EK781EFNDY_RTRMADP_3_TENNIS-WIMBLEDON-483x315.jpg",
        author: "Tanisha Kapoor",
        category: "sports",
        content: "Full article content on Danielle Collins...",
      },
      {
        title: "Victoria Mboko’s Streak Continues",
        subtitle: "Teen sensation at Roland Garros",
        description: "Canadian teenager Victoria Mboko continues her winning streak to reach the third round at the French Open.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUJdY1dT9NrIdaYBs531XFd1jq8CM5wM4cw&s",
        author: "Canadian Press",
        category: "general",
        content: "Full article content on Victoria Mboko...",
      },
      {
        title: "Mboko Clashes with Opponent at French Open",
        subtitle: "French Open drama with young talent",
        description: "Victoria Mboko faces a surprising attitude from her opponent despite an impressive run at the French Open.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2025-05-28-at-5.48.52%E2%80%AFPM-407x315.png",
        author: "Vatsal Shah",
        category: "sports",
        content: "Full article content on Mboko match...",
      },
      {
        title: "Mboko Compared to Venus Williams",
        subtitle: "Victoria Mboko compared to a legend",
        description: "Victoria Mboko earns comparisons to Venus Williams with her performance at the French Open 2025.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/venus-williams-9-430x315.jpg",
        author: "Tanisha Kapoor",
        category: "sports",
        content: "Full article content on Mboko and comparisons...",
      },
      {
        title: "Jordan Spieth on Tougher PGA Tour",
        subtitle: "Golf world shifts with new generation",
        description: "Jordan Spieth comments on the evolving PGA Tour dynamics and Tiger Woods’ role in raising the bar.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/Jordan-Spieth-Tiger-Woods-Collage-560x315.jpg",
        author: "Abhijit Raj",
        category: "sports",
        content: "Full article content on PGA Tour changes...",
      },
    ],
  })

  console.log("Seed data inserted.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })