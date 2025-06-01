import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.article.createMany({
    data:[
      {
        title: "Raducanu Falls to Swiatek at Roland Garros",
        subtitle: "Raducanu vs Swiatek: a tough match at the French Open",
        description: "Raducanu struggles against Swiatek at Roland Garros. Despite defeat, Raducanu remains positive about her progress and future in tennis.",
        imageUrl: "https://s.yimg.com/ny/api/res/1.2/VP8lW3Yvi5CvIIbI7RhiSw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQwMg--/https://media.zenfs.com/en/aol_the_telegraph_333/e24b5c78d156dbb3604269837d205544",
        author: "Harrison Richards",
        category: "sports",
        contentDesc: "Full article content for Raducanu vs Swiatek...",
        content: "In a highly anticipated match at Roland Garros, Emma Raducanu faced world number one Iga Swiatek. Despite a valiant effort, Raducanu struggled to keep up with Swiatek’s aggressive playstyle and precision shots. The match concluded in straight sets in favor of Swiatek, but Raducanu showed glimpses of promise throughout. In the post-match interview, Raducanu emphasized her commitment to growth and expressed confidence in her training and team. Fans praised her sportsmanship and resilience, suggesting she has a bright future in the sport."
      },
      {
        title: "Grand Slams Added to Antitrust Lawsuit",
        subtitle: "Legal trouble in the tennis world",
        description: "Top critiques of the blockbuster antitrust lawsuit include the absence of Grand Slam tournaments as defendants. That is set to change next month.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHzre_V1LEzmgimQ_TSR2ap9wvvbhveoV6Q&s",
        author: "Daniel Kaplan",
        category: "general",
        contentDesc: "Full article content on antitrust lawsuit...",
        content: "The major antitrust lawsuit shaking the foundations of professional tennis is taking a new turn. Critics have long questioned why Grand Slam tournaments weren’t included in the initial wave of defendants. Now, according to legal filings expected next month, the four prestigious events will be formally added. This move could reshape the legal landscape of the sport and impact revenue-sharing, player rights, and governance. Experts predict a prolonged battle, as Grand Slam organizers are likely to mount strong defenses. Tennis stakeholders worldwide are closely watching for what this could mean for the future of the sport."
      },
      {
        title: "CHS Girls Tennis Wins Another Title",
        subtitle: "Christopher High School girls tennis success",
        description: "One of the best teams at Christopher High School, the Cougars girls tennis team, went undefeated again this past fall.",
        imageUrl: "https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fcnusports.com%2Fimages%2F2025%2F3%2F10%2F2024-0926-WTEN-Selects-125.jpg&type=webp",
        author: "Gordon Kass",
        category: "general",
        contentDesc: "Full article content on CHS girls tennis...",
        content: "Christopher High School’s Cougars girls tennis team capped off a remarkable fall season by remaining undefeated and capturing yet another title. With exceptional teamwork, disciplined training, and strategic play, the team dominated their opponents. Coach Linda Martinez credits the success to a strong senior leadership group and the consistent performance of underclassmen stepping up when needed. The season was marked by close matches and thrilling comebacks, solidifying the Cougars’ legacy as a powerhouse. As they prepare for next year, the team remains focused on building upon their winning culture and developing the next wave of talent."
      },
      {
        title: "Jewell Loyd’s Background Explained",
        subtitle: "Exploring Jewell Loyd's roots",
        description: "Jewell Loyd nearly became a pro tennis player before switching to basketball. Her background is explored here.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1242018251.jpg",
        author: "Soham Kulkarni",
        category: "sports",
        contentDesc: "Full article content on Jewell Loyd...",
        content: "Before Jewell Loyd emerged as a basketball star, she was a promising tennis prodigy. Trained intensively in her youth, Loyd competed in national-level tournaments and was often compared to top junior players. However, her passion eventually gravitated toward basketball. Influenced by family, mentors, and a desire for a team-driven sport, Loyd made the pivotal switch. The article explores how her tennis background helped shape her athletic discipline, agility, and strategic thinking. Loyd’s story is a testament to versatility and resilience in pursuing excellence across multiple disciplines."
      },
      {
        title: "Who Is Tommy Paul’s Wife?",
        subtitle: "Tommy Paul's personal life and French Open run",
        description: "With Taylor Fritz out of the French Open, all eyes are on Tommy Paul, who has a deep connection to this tournament.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/2023-09-29T065223Z_1172607288_RC24I3AC9YUT_RTRMADP_3_TENNIS-BEIJING-473x315.jpg",
        author: "Sayantan Roy",
        category: "sports",
        contentDesc: "Full article content on Tommy Paul...",
        content: "As the French Open progresses, American tennis player Tommy Paul has emerged as a fan favorite, especially following Taylor Fritz’s early exit. Fans are increasingly curious about his personal life, particularly his wife, Paige Lorenze. A former skier and influencer, Lorenze has been a consistent presence in Paul’s support box. The couple’s dynamic relationship has drawn media attention, and Paul credits Lorenze’s support for helping him stay focused during tough matches. With his improved performance on clay courts, Paul is proving himself as a serious contender, and his relationship adds an emotional layer to his on-court journey."
      },
      {
        title: "Danielle Collins Faces Roland Garros Backlash",
        subtitle: "Controversy at Roland Garros",
        description: "Danielle Collins’ return to the French Open sparked backlash after a controversial gesture.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/2024-07-08T180925Z_1020735456_UP1EK781EFNDY_RTRMADP_3_TENNIS-WIMBLEDON-483x315.jpg",
        author: "Tanisha Kapoor",
        category: "sports",
        contentDesc: "Full article content on Danielle Collins...",
        content: "Danielle Collins’ return to Roland Garros took an unexpected turn when a post-match gesture sparked criticism. After a heated match, Collins made a gesture interpreted by some as disrespectful. The moment quickly went viral, sparking debate among fans, commentators, and former players. Collins later addressed the controversy, explaining her intent and expressing regret for how it was perceived. Her focus, she reiterated, remains on competing at the highest level. Despite the backlash, Collins advanced in the tournament, letting her performance speak louder than the noise off the court."
      },
      {
        title: "Victoria Mboko’s Streak Continues",
        subtitle: "Teen sensation at Roland Garros",
        description: "Canadian teenager Victoria Mboko continues her winning streak to reach the third round at the French Open.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUJdY1dT9NrIdaYBs531XFd1jq8CM5wM4cw&s",
        author: "Canadian Press",
        category: "general",
        contentDesc: "Full article content on Victoria Mboko...",
        content: "Victoria Mboko, the rising Canadian tennis star, continues to captivate audiences at Roland Garros. With a string of impressive wins, she has now reached the third round, showcasing maturity and composure beyond her years. Her powerful baseline game and strategic play have caught the eye of commentators and fans alike. This performance is seen as a major breakthrough, positioning Mboko as a promising contender in future Grand Slams. Her team emphasizes keeping the focus on steady development while enjoying the moment. Canada is rallying behind their new tennis sensation with growing excitement."
      },
      {
        title: "Mboko Clashes with Opponent at French Open",
        subtitle: "French Open drama with young talent",
        description: "Victoria Mboko faces a surprising attitude from her opponent despite an impressive run at the French Open.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot-2025-05-28-at-5.48.52%E2%80%AFPM-407x315.png",
        author: "Vatsal Shah",
        category: "sports",
        contentDesc: "Full article content on Mboko match...",
        content: "During a high-stakes match at the French Open, Victoria Mboko encountered unexpected tension with her opponent. Despite playing with professionalism and composure, Mboko was met with dismissive gestures and comments that appeared to unsettle the young star. The on-court friction became a talking point in press circles, with analysts debating the mental toughness required at this level. Mboko, however, remained unfazed and completed her win with class. In post-match remarks, she downplayed the incident and emphasized her commitment to focusing on her game. The incident further highlights her maturity and potential."
      },
      {
        title: "Mboko Compared to Venus Williams",
        subtitle: "Victoria Mboko compared to a legend",
        description: "Victoria Mboko earns comparisons to Venus Williams with her performance at the French Open 2025.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/venus-williams-9-430x315.jpg",
        author: "Tanisha Kapoor",
        category: "sports",
        contentDesc: "Full article content on Mboko and comparisons...",
        content: "Victoria Mboko’s stellar performances at the 2025 French Open have drawn comparisons to tennis legend Venus Williams. Commentators have noted similarities in power, agility, and on-court presence. Mboko’s ability to dominate baseline rallies and her fierce competitive spirit reflect the traits that defined Venus in her prime. While still early in her career, Mboko’s potential seems limitless, and the comparisons have only added to the growing media attention around her. The article examines these parallels and includes insights from coaches and analysts on what lies ahead for this emerging tennis star."
      },
      {
        title: "Jordan Spieth on Tougher PGA Tour",
        subtitle: "Golf world shifts with new generation",
        description: "Jordan Spieth comments on the evolving PGA Tour dynamics and Tiger Woods’ role in raising the bar.",
        imageUrl: "https://image-cdn.essentiallysports.com/wp-content/uploads/Jordan-Spieth-Tiger-Woods-Collage-560x315.jpg",
        author: "Abhijit Raj",
        category: "sports",
        contentDesc: "Full article content on PGA Tour changes...",
        content: "In a candid interview, Jordan Spieth reflected on the shifting landscape of the PGA Tour. He highlighted how the new generation of golfers, inspired in part by Tiger Woods’ era, has raised the bar for competition. Spieth discussed the intensity of training, nutrition, and mental focus now required to stay relevant. He also praised Woods for transforming the sport’s culture and creating opportunities for younger players. With tighter leaderboards and rising stars emerging every season, Spieth emphasized that consistency and adaptability are more critical than ever in today’s professional golf scene."
      }
    ]
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
