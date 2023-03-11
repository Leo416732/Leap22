import All from "./Blog-all";
import "../style/Main-blog.css";
const data = [
  {
    title: "User Interface (UI) Design",
    image:
      "https://syspree.com/wp-content/uploads/2022/09/What-is-an-interface-for-users.webp",
    description:
      "Design Taxi has got you covered on the latest product design inventions on UX/UI and more. If you want some packaging design inspiration, check out the packaging design section which is flooded with fresh ideas. You might want to visit the Redesign section to learn how big brands redesign their brands and find out about the impact of the redesigning. ",
    category: "UI",
  },
  {
    title: "What is UI/UX Sprint Design experience",
    image:
      "https://www.techtic.com/wp-content/uploads/2019/10/design-sprint-process-for-product-design-development.png",
    description:
      "Design Taxi has got you covered on the latest product design inventions on UX/UI and more. If you want some packaging design inspiration, check out the packaging design section which is flooded with fresh ideas. You might want to visit the Redesign section to learn how big brands redesign their brands and find out about the impact of the redesigning. ",
    category: "UX",
  },
  {
    title: "What is UI/UX Sprint Design experience",
    image:
      "https://www.techtic.com/wp-content/uploads/2019/10/design-sprint-process-for-product-design-development.png",
    description:
      "While it is recommended to include all six phases of the methodology, there are certainly situations where you might want to run a shorter workshop utilizing these methods. These methods can help align a team on the right problem to solve or provide actionable solutions to a tightly scoped challenge that can be tested with users at a later date. The important thing is that you pick the methods that work best for your specific goal and plan the number of days for your Sprint accordingly. Learn, explore, create and find out what works best for the types of problems you typically seek to solve In addition to the Design Sprint methodologies, there are a variety of other techniques you may consider, and they are always evolving. Perhaps youll contribute a Design Sprint method of your own!",
    category: "PD",
  },
  {
    title: "What Is UX Design and Why Does It Matter?",
    image:
      "https://www.resolutesoftware.com/assets/imgs/posts/what-is-ux-design.jpg",
    description:
      "UX design is the process of creating products that provide a seamless user experience, are easy to use, and are pleasant to interact with. It's about making sure your customers will find value in what you're providing. UX design also includes branding, interaction design, usability testing, and different functionalities In fact, UX design is important for all types of companies and across various industries. User experience design, or UX, in a nutshell, means that the design of an application, webpage, or another digital product is created with ease of use in mind. A bad user experience is often the reason why online buyers would not use a website. Also, the reason for online companies to fail is bad usability in more than two-thirds of cases. UX design is definitely not something that brands should overlook. ",
    category: "UX",
  },

  {
    title: "What is Product Design? Salaries, Skills, and More",
    image: "http://shorturl.at/CQR78",
    description:
      "A product designer is somebody who oversees the design process of a product from start to finish or the improvement of an existing product. A product designer might brainstorm solutions to current pain points, take input from stakeholders, act as a liaison between designers, engineers, and researchers, and help compose mock-ups through wireframes and prototypes. They have an understanding of the bigger goals of the product while being mindful of the details needed to achieve them.",
    category: "PD",
  },

  {
    title: "What does a product designer (UX/UI) do?",
    image:
      "https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/08/176_What_does_a_product_designer_do__image_blog.png",
    description:
      "What is a product designer A product designer oversees the design of a product from inception to completion, with an eye toward both user needs and business goals. This means product designers may do everything from perform user research and competitor analyses at the beginning of the project development process, create site maps, wireframes, prototypes and UI style guides during the design process They will also perform front-end coding and oversee the development team at the end of the process. Product designers also continue to be in charge of the product after it launches, running tests to ensure users are happy and developing solutions when there are issues",
    category: "PD",
  },
  {
    title: "What will happen to Figma and Adobe XD after the takeover?",
    image: "https://cdn.uiuxtrend.com/wp-content/uploads/Figma-logo.jpg",
    description:
      "Explore what will happen to Figma and Adobe XD after the $20 billion acquisition. Will Adobe kill off either Figma or Adobe XD? Explore what will happen to Figma and Adobe XD after the $20 billion acquisition. Will Adobe kills off either Figma or Adobe.",
    category: "NW",
  },
  {
    title: "How Cognitive Science and Artificial Intelligence Are Intertwined",
    image:
      "https://uxmag.com/wp-content/uploads/2022/10/big-How-Cognitive-Science-and-Artificial-Intelligence-Are-Intertwined.png",
    description:
      "Whether you've been working in UX for a month or for decades, you're undoubtedly familiar with the concept of artificial intelligence (AI). As businesses seek to streamline and automate their systems, many have incorporated AI to help connect the once disparate parts of the company into one cohesive whole, in an endeavor to achieve what Gartner has dubbed hyperautomation. What many of those who work in proximity to AI may not be so aware of, however, are its roots in cognitive science.",
    category: "UX",
  },
  {
    title: "Apple Maps vs Google Maps",
    image:
      "https://uxmag.com/wp-content/uploads/2022/12/Apple-Maps-vs-Google-Maps-big.png",
    description:
      "Apple and Google have been fighting for map dominance for nearly a decade. In 2012, just months after Google Maps first hit one billion users, Apple Maps was set as the default mapping application on IOS.As a result, it's estimated  that Google lost 300 million IOS users.I often ponder why I typically use Google Maps, given how much I love Apple, and how easy it is to access on my iPhone.And if one small poll on Twitter is representative, you largely agree.",
    category: "UX",
  },
  {
    title: "10 Intangibles of Design",
    image:
      "https://uxmag.com/wp-content/uploads/2022/12/1_2HLhlkReuCI5nzW9hX3BIA.png",
    description:
      "Becoming and being a UX Designer involves multiple facets. Core Disciplines, Soft Skills, Leadership Skills, and Discipline-Specific Skills are all part of what it takes to be a great designer. But those aren't enough. You can master Interaction Design, prototyping, facilitation skills, and empathy and still be lacking. In my 15+ years in the field, I have found that the difference between a decent, frustrated designer and a thriving designer is the presence of certain intangibles. These intangibles (sometimes I call them tenants) are not originally from me. Many of these were taught and drilled into my skull by a previous mentor, Davin Granroth. Others I picked up along the way. Shout out to John Parkinson for encouraging me to write these out and share them.",
    category: "UX",
  },
  {
    title: "The Future of Digital Product Design",
    image: "https://fuselabcreative.com/wp-content/uploads/2022/03/gd.png",
    description:
      "When trying to discover how experts can improve the accuracy of their predictions, social scientist Philip Tetlock found that a dart-throwing chimp would have beaten the vast majority of professionals who were asked to predict the outcome of various world affairs cataloged in his 2006 volume, Expert Political Judgment.",
    category: "PD",
  },
  {
    title: "Дэлхийд өрсөлдөх ур чадварыг эзэмшээрэй",
    image: "https://www.nestacademy.mn/assets/team_img_sm.webp",
    description:
      "Шилдэг инженерүүдийн боловсруулсан тусгай хөтөлбөрөөр олон улсад хүлээн зөвшөөрөгдөх технологийн мэргэжилтнүүдийг бэлтгэх академи",
    category: "NW",
  },
  {
    title: "Технологийн салбарт шинэ өнгө нэмэхээр Pinecone мэндэллээ",
    image: "https://content.ikon.mn/news/2022/9/27/ahrmi8_pine2_x974.jpg",
    description:
      "Nest Academy 2018 онд олон улсад үнэлэгдэх нэг түмэн монгол инженерийг бэлтгэх зорилттойгоор байгуулагдсан ба өдгөө 50 гаруй инженертэй өнөр хамт олон болжээ. Өнгөрсөн  дөрвөн жилийн хугацаанд төгссөн 100 гаруй инженер бүгд ажлын байртай болсон бөгөөд технологийн салбарт түүчээлэх шинэ үеийн иргэдийг бэлтгэжээ. ",
    category: "TUT",
  },
  {
    title: "What is Product Design?",
    image:
      "http://www.sharda.ac.in/blog/wp-content/uploads/2017/08/What-do-you-Learn-while-Studying-1024x538.jpg",
    description:
      "Product design as a verb is to create a new product to be sold by a business to its customers. A very broad coefficient and effective generation and development of ideas through a process that leads to new products. Thus, it is a major aspect of new product development. ",
    category: "PD",
  },
  {
    title: "10 Best Product Design Colleges in World",
    image:
      "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/11/23172318/Design-Colleges-in-Canada.jpg",
    description: "Lorem20",
    category: "NW",
  },
  {
    title: "Webby Awards 2022",
    image: "https://www.dexigner.com/images/news/xxw/33933.jpg",
    description:
      "Entries for the 27th Annual Webby Awards are now open. For nearly thirty years, The Webby Awards has celebrated a global community of the best creators, innovators and iconoclasts on the Internet.The Webby Awards honors the best of the Internet across Websites & Mobile Sites; Video; Advertising, Media & PR; Social; Podcasts; Games, Apps, dApps & Software and new this year Metaverse, Immersive & Virtual.The final deadline for entries is December 16, 2022.",
    category: "NW",
  },
  {
    title:
      "The Faces Behind Typefaces: Deep Dive into Legacies of Pioneers of Type Design",
    image: "https://www.dexigner.com/images/news/xxw/33941.jpg",
    description:
      "Readymag, in collaboration with Type Directors Club, has released a web project The Faces Behind Typefaces, featuring a selection of insightful conversations about typographers who have made extraordinary contributions to the creative field - Paula Scher, Paul Rand, Gerard Unger, Ed Benguiat, Rubén Fontana, Emigre, and Adrian Frutiger Designed in the form of an editorial, 'The Faces Behind Typefaces' coincides with the 75th anniversary of The Type Directors Club. On the 12th of September, the TDC announced Akira Kobayashi, creative type director at Monotype, as this year's recipient of its highest honor, the prestigious TDC Medal, which recognizes individuals who have made outstanding contributions to the field of typography.",
    category: "NW",
  },
  {
    title: "PAD London 2022",
    image: "https://www.dexigner.com/images/news/xxw/33942.jpg",
    description:
      "PAD London, the internationally acclaimed fair for design, returns to Berkeley Square in Mayfair for its 14th edition, running from October 10 to 16, 2022.Celebrating craftsmanship and innovation, this year's London edition will premiere outstanding works by emerging and iconic talents, while also shedding light on rare, age-old techniques, new sustainable crafts and innovative materials that inform design today.",
    category: "NW",
  },
  {
    title:
      "The End of Screen-based Interfaces and What It Means for Businesses ",
    image:
      "https://studio.uxpincdn.com/studio/wp-content/uploads/2021/05/10-Useful-UI-Design-Articles.png.webp",
    description:
      "Zero UI is a style that's been looming in the shadow for some time but is really starting to emerge now. The idea is easy to understand -- the less the user has to think about the interface, the better and more natural it feels. This article explains the specifics, and how this style is changing everything.",
    category: "UI",
  },
  {
    title:
      "5 Cognitive Psychology Theories that Contribute to the Quality of UX Design",
    image:
      "https://uiuxmagazine.com/wp-content/uploads/2021/06/psychology-in-UX-design.jpg",
    description:
      "User experience is about understanding people, their wants, needs, expectations, and predicting them.There are a lot of definitions of user experience. All of them are different but have one common feature: each definition of user experience mentions the human element of it. User experience (UX) is a person's emotions and attitudes about using a particular product, system or service.",
    category: "UX",
  },
  {
    title: "A Simple Method to Analyze Task Flow",
    image:
      "https://uxmag.com/wp-content/uploads/2021/04/AnalyzeTaskFlow_LeadBanner4-2048x1066.png",
    description:
      "This is a simple method to prove to ourselves and the stakeholders that the task flow we just created is worth being implemented. As designers, we often have to prove to ourselves and the stakeholders that the task flow we just created is worthy of implementation. It's difficult to find convincing arguments to make them believe that the upgraded flow will be successful (RIP Great ideas). What is one of the best ways to show the efficiency of a product or functionality? ",
    category: "UX",
  },
  {
    title: "Your UI Isn't A Disney Movie",
    image: "https://wallpapercave.com/wp/wp7151246.jpg",
    description:
      "I've heard some UI designers suggest Disney's animation principles as required reading for UI designers. Unfortunately this helps to promote the idea of UI as entertainment, which invariably leads to a UI that slows the user down. I'm not anti motion design for UIs. Far from it. I have a problem with animation that serves only to get in the way of the end user.",
    category: "UI",
  },
  {
    title:
      "Spotify's New Feature 'Playlist in a Bottle' Lets You Create a Time Capsule of Music",
    image:
      "https://www.cnet.com/a/img/resize/d0d9e0693c503b963200c7ae402790b579f21f84/hub/2022/04/15/151a2ca9-aa6c-4bc4-a7a6-f7d4fbc5a8de/spotify-logo-2022-148.jpg?auto=webp&fit=crop&height=675&width=1200",
    description:
      "Spotify has good news for nostalgic music lovers. The music streaming service is rolling out a new in-app experience that lets you freeze your favorite music moments in time and then listen to them one year later, the company said Wednesday.",
    category: "NW",
  },

  {
    title: "Хөвсгөл нуур",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__480.jpg",
    description:
      "If you bought an Apple MacBook with an ill-fated butterfly keyboard and ended up having to replace either individual keycaps or the whole keyboard, you may be eligible to claim part of a $50 million settlement reached after a class-action lawsuit. ",
    category: "UX",
  },

  {
    title:
      "MacBook owners have two months to claim up to $395 over butterfly keyboard woes",
    image:
      "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22046468/vpavic_4291_20201113_0428.0.jpg",
    description:
      "If you bought an Apple MacBook with an ill-fated butterfly keyboard and ended up having to replace either individual keycaps or the whole keyboard, you may be eligible to claim part of a $50 million settlement reached after a class-action lawsuit. The law firm handling the settlement has been emailing class members since mid-December (judging by this MacRumors report) but we wanted to highlight that the deadline for making a claim is fast approaching on March 6th, 2023.",
    category: "NW",
  },
  {
    title: "What Is Zero UI?",
    image:
      "https://euriskomobility.com/wp-content/uploads/2020/02/ux-ui-design-2020.png",
    description:
      "With the increasing proliferation of the Internet of Things (IoT), touchscreens will eventually become out-of-date. Zero UI technology will finally allow humans to communicate with devices using natural means of communication such as voice, movements, glances, or even thoughts. Several different devices such as smart speakers and IoT devices are already using Zero UI. As of 2018, 16% of Americans (around 39 million) own a smart speaker with 11% having an Amazon Alexa device, while 4% possess a Google Home product.",
    category: "ART",
  },
  {
    title: "Components of Zero UI",
    image:
      "https://euriskomobility.com/wp-content/uploads/2019/03/web-development-lebanon-careers.png",
    description:
      "Tech companies around the globe are using a variety of technologies to build Zero UI-based devices. Almost all these technologies are related to IoT devices such as smart cars, smart home appliances, and smart devices at work. Haptic feedback provides you with a motion or vibration-based feedback. The light vibration felt when typing a message on your smartphone is nothing but haptic feedback. Most smartwatches and fitness devices use this technology to notify the end user.",
    category: "ART",
  },
  {
    title: "How Will Zero Ul Affect Web Design?",
    image:
      "https://img.freepik.com/free-vector/design-team-concept-illustration_114360-4531.jpg?w=1480&t=st=1672885958~exp=1672886558~hmac=9170a229c7ddcaa0567e4e4f0a4b08b4c91086e1174d5177f6418b6780f8bd17",
    description:
      'Although Zero UI may seem like the end of visual interfaces, thats unlikely to happen. Humans are visual beings. We can retain visual information better and longer. So, Zero UI is not going to eliminate screens. However, it is going to change the present concept of web design forever. Contactless management and predictive thinking are going to be the pillars of Zero UI design. The present web design, being two dimensional, is mostly built on linear sequences. For example, voice search is often carried out using simple voice commands such as "Call my father" or "Call an Uber" or "Tell me the score of yesterdays Knicks game."',
    category: "ART",
  },
  {
    title: "Here Are the 10 Best Web Development Trends for 2023",
    image:
      "https://www.turing.com/blog/wp-content/uploads/2022/05/Web-development-trends-2022.jpg",
    description:
      "Website development is in great demand. The changing technology prompts developers to be abreast with the latest web development trends. For example, new frameworks like React Remix, and Next.js that emerged in the last two years are growing rapidly. And so, developers must be quick to know what is happening in the world of web development. ",
    category: "NW",
  },
  {
    title: "Product design",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXqIdvxkrkV1z30hDrg_e6Eft_TsLp_dumg&usqp=CAU",
    description:
      "Product design process: the set of strategic and tactical activities, from idea generation to commercialization, used to create a product design. In a systematic approach, product designers conceptualize and evaluate ideas, turning them into tangible inventions and products. The product designer's role is to combine art, science, and technology to create new products that people can use. Their evolving role has been facilitated by digital tools that now allow designers to do things that include communicate, visualize, analyze, 3D modeling and actually produce tangible ideas in a way that would have taken greater human resources in the past.",
    category: "PD",
  },

  {
    title: "What will happen to Figma and Adobe XD after the takeover?",
    image: "https://cdn.uiuxtrend.com/wp-content/uploads/Penpot.jpg",
    description:
      "Explore what will happen to Figma and Adobe XD after the $20 billion acquisition. Will Adobe kills off either Figma or Adobe XD?",
    category: "NW",
  },
  {
    title:
      "Clubhouse UX review: What is Clubhouse and its impact to the industry",
    image:
      "https://cdn.uiuxtrend.com/wp-content/uploads/Clubhouse-UX-Review-1.jpg",
    description:
      "What's the hype about Clubhouse? What is Clubhouse and how to use it? In this article, we review the Clubhouse app, its UX, and its impact.",
    category: "NW",
  },
  {
    title: "UX is the Top Brand Differentiator in 2020",
    image:
      "https://cdn.uiuxtrend.com/wp-content/uploads/branding-differentiator.jpg",
    description:
      "Marketers think that UX is the top brand differentiator in Bynder & OnBrand's State of Branding Report 2020. Get some insights into branding and marketing here.",
    category: "NW",
  },
  {
    title: "2023: Top UI UX Trends you need to know",
    image:
      "https://aelaschool.com/wp-content/uploads/2022/08/artigoQualadiferencaentreUXeUIDesign_01aaa69067bf7dd2a32f9fba1df84b12_2000.png",
    description:
      "What's the best way to capture the top UI trends 2023 than browsing through the websites of the top brands in the world? Apple, Microsoft, Toyota, Tesla, McDonald's, and Louis Vuitton are some of the world's most valuable brands this year. Looking at their websites, you can observe a general trend of a homepage that offers an immersive experience. The websites are clean and display only the most important information and categories.",
    category: "UI",
  },
  {
    title: "11 Inspirational Design Articles to Elevate Your Thinking",
    image:
      "https://cdn.bfldr.com/F97BMUF5/at/pur1da-7lime8-e1ovka/placeholder-blog.png?format=png&auto=webp&width=1600",
    description:
      "What do all successful designers have in common? The ability to approach complex challenges with simple, yet innovative solutions. And while we all have our own techniques for problem solving -- from team brainstorming sessions to step-by-step formulas -- sometimes we need to approach our work from an entirely different angle. Here, we've rounded up 11 inspirational design articles from creative thought leaders around the web. Spanning everything from app interactions to modern web design monotony, these reads are sure to help you see age-old problems in a new light.",
    category: "UI",
  },
  {
    title: "Web Layout Best Practices: 12 Timeless UI Patterns Analyzed",
    image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1108741/retina_800x320_image_0_-_2020-10-09T214729.825-ce7b6cb6e5a1468466c694c05ddb4c29-329be609f45601140687fdba21663f87.png",
    description:
      "UI design trends may come and go on the web, but several UI patterns have stood the test of time. What makes a UI pattern timeless? Adherence to web layout best practices that result in a combination of user-friendliness and an adaptability to changing trends and technology. ",
    category: "UI",
  },
  {
    title: "Laws of UX / Aesthetic-Usability Effect",
    image: "https://lawsofux.com/aesthetic-usability-effect/social.png",
    description:
      "The aesthetic-usability effect was first studied in the field of human computer interaction in 1995. Researchers Masaaki Kurosu and Kaori Kashimura from the Hitachi Design Center tested 26 variations of an ATM UI, asking the 252 study participants to rate each design on ease of use, as well as aesthetic appeal. They found a stronger correlation between the participants’ ratings of aesthetic appeal and perceived ease of use than the correlation between their ratings of aesthetic appeal and actual ease of use. Kurosu and Kashimura concluded that users are strongly influenced by the aesthetics of any given interface, even when they try to evaluate the underlying functionality of the system.",
    category: "TUT",
  },
  {
    title: "Laws of UX / doherty threshold",
    image: "https://lawsofux.com/doherty-threshold/social.png",
    description:
      "In 1982 Walter J. Doherty and Ahrvind J. Thadani published, in the IBM Systems Journal, a research paper that set the requirement for computer response time to be 400 milliseconds, not 2,000 (2 seconds) which had been the previous standard. When a human being’s command was executed and returned an answer in under 400 milliseconds, it was deemed to exceed the Doherty threshold, and use of such applications were deemed to be “addicting” to users.",
    category: "TUT",
  },
  {
    title: "Laws of UX / Fitts’s Law",
    image: "https://lawsofux.com/fittss-law/social.png",
    description:
      "In 1954, psychologist Paul Fitts, examining the human motor system, showed that the time required to move to a target depends on the distance to it, yet relates inversely to its size. By his law, fast movements and small targets result in greater error rates, due to the speed-accuracy trade-off. Although multiple variants of Fitts’ law exist, all encompass this idea. Fitts’ law is widely applied in user experience (UX) and user interface (UI) design. For example, this law influenced the convention of making interactive buttons large (especially on finger-operated mobile devices)—smaller buttons are more difficult (and time-consuming) to click. Likewise, the distance between a user’s task/attention area and the task-related button should be kept as short as possible.",
    category: "TUT",
  },
  {
    title: "VS code shortcut",
    image:
      "https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/KeyboardReferenceSheet.png",
    description:
      '"Tips and Tricks" lets you jump right in and learn how to be productive with Visual Studio Code. You\'ll become familiar with its powerful editing, code intelligence, and source code control features and learn useful keyboard shortcuts. This topic goes pretty fast and provides a broad overview',
    category: "TUT",
  },
  {
    title: "Stack Overflow: 74% of developers are open to new jobs",
    image:
      "https://www.developer-tech.com/wp-content/uploads/sites/3/2022/12/stack-overflow-job-insights-developer-career-study-research-report.jpeg",
    description:
      "Research from Stack Overflow suggests that almost three-quarters (74%) of developers are open to new jobs. The so-called “Great Resignation” is an ongoing post-covid economic trend where employees have voluntarily resigned over wage stagnation, poor treatment, inflexible remote working policies, lack of benefits, and general job dissatisfaction.",
    category: "ART",
  },
  {
    title: "How to receive great design feedback",
    image: "https://miro.medium.com/max/1400/0*UM5HSVn18_VSmCfO",
    description:
      "When it comes to design, being able to give and receive feedback is key to progressing in your career and forming long and fruitful relationships with clients and teammates. But how exactly can you receive constructive feedback without getting offended? Or how can you give feedback to a wider creative team that’s useful, specific, and likely to produce the best possible result? Stick around to find out.",
    category: "TUT",
  },
  {
    title: "How to use ChatGPT in product design: 8 practical examples",
    image: "https://miro.medium.com/max/1400/0*0pFSdP0kXS1tup_E",
    description:
      "ChatGPT is an advanced chatbot created by OpenAI, a company that created GPT-3. Users can ask ChatGPT open-ended questions about any topic and receive responses generated specifically for the question.",
    category: "TUT",
  },
  {
    title: "What UX Designers Should Learn in 2023",
    image: "https://miro.medium.com/max/1400/0*auQRL11EvEKyaaKX.webp",
    description:
      "It goes without saying that UX design has become one of the most competitive fields in the last couple of years, which requires designers to constantly improve themselves and keep their industry knowledge up to date. In this article, I’ll share some topics I recommend you look at and resources to study them. By mastering them, you’ll set yourself apart in the UX Design job market. Let’s get started!",
    category: "TUT",
  },
];

export default function Blog() {
  return (
    <div className="main container">
      <div className="blog-section">
        <div>
          <h3 className="blog-title">Blog Posts</h3>
          <h5>I think so, thisi is it.</h5>
          <p>
            Design begins after I begin to think about how to present an
            experience most successfully, whether a button I put in can solve a
            problem. The only point in design is not ui design, if the user does
            not have a good experience at the end of the product, the design
            will be considered unsuccessful in my opinion.
          </p>
          <div className="links">
            <a href="">
              <img src="./twitter.png" alt="" />
            </a>
            <a href="">
              <img src="./linkedin.png" alt="" />
            </a>
            <a href="">
              <img src="./medium.png" alt="" />
            </a>
          </div>
        </div>
        <div>
          <img src="./main.png" alt="" />
        </div>
      </div>
      <div className="blog-nav">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              All
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              UI Design
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              UX Design
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Product Design
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Articles
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Tutorials
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              News
            </a>
          </li>
        </ul>
        <div className="All">
          {data.map((unit) => (
            <All
              title={unit.title}
              image={unit.image}
              description={unit.description}
              category={unit.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
