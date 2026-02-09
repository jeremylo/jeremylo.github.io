import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEarthAfrica, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "@theme/Layout";
import classNames from "classnames";
import Link from "../components/Link";
import Terminal from "../components/Terminal";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout
      title="Hello"
      description="Hello, world! I'm Jeremy, a computer science, linguistics & music lover, & northerner down south passionate about AI for social & environmental good. 🌱"
    >
      <div className={styles.hero}>
        <div
          className={classNames("container", styles.heroContainer)}
          style={{ maxWidth: "720px" }}
        >
          <Terminal
            title="jezz@ubuntu-lts: ~"
            greenLink="https://doxaai.com/user/jezz"
          >
            <p>
              <em>Hello, world!</em>
            </p>
            <p>
              I'm <em>Jeremy</em>, a <strong>computer science</strong>,{" "}
              <strong>linguistics</strong> & <strong>music lover</strong>, &
              northerner down south passionate about{" "}
              <strong>AI for social & environmental good</strong>. 🌱
            </p>
            <p>
              I lead <Link href="https://doxaai.com/">DOXA AI</Link>: a start-up
              hosting <strong>engaging AI competitions</strong> and working to
              build an{" "}
              <strong>international community of ML enthusiasts</strong>. 🌍
            </p>
            $&nbsp;█
          </Terminal>
          <div className={styles.ctas}>
            <a href="mailto:jeremylo2001@googlemail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.linkedin.com/in/jeremyloyingping/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/jeremylo">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://discord.gg/HTTQ8AFjJp">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            {/* <a href="https://discord.gg/MUvbQ3UYcf">
              <FontAwesomeIcon icon={faDiscord} />
            </a> */}
            <a href="https://climatehack.ai">
              <FontAwesomeIcon icon={faEarthAfrica} />
            </a>
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.gridWide}>
              <Terminal
                title="About me 😎"
                greenLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                <p>
                  In June 2023, I{" "}
                  <strong>
                    co-founded <Link href="https://doxaai.com/">DOXA AI</Link>
                  </strong>{" "}
                  and became the <strong>Lead Organiser</strong> of{" "}
                  <Link href="https://climatehack.ai/">ClimateHack.AI</Link>. 🌍
                </p>

                <p>
                  I was previously an{" "}
                  <strong>MEng computer science student</strong> at{" "}
                  <strong>UCL</strong>, where I led a{" "}
                  <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7042483443170992128/">
                    software engineering team
                  </Link>{" "}
                  as Head of Development at the{" "}
                  <Link href="https://uclaisociety.co.uk/">UCL AI Society</Link>
                  . My Master&apos;s project studied the{" "}
                  <em>evolution of cooperation</em> in societies of artificial
                  reinforcement learning agents. 🤖
                </p>
                <p>
                  I've also been a{" "}
                  <strong>Production Engineering Intern</strong> at{" "}
                  <strong>Meta</strong> (Facebook) on the service degradation &
                  disaster recovery team in London during the summer of 2022.{" "}
                  <FontAwesomeIcon icon={faFacebook} />{" "}
                  <FontAwesomeIcon icon={faInstagram} />{" "}
                  <FontAwesomeIcon icon={faWhatsapp} />
                </p>
                <p>
                  I love <strong>machine learning</strong> and developing{" "}
                  <strong>scalable software systems</strong> with Python 🐍,
                  Rust 🦀, TypeScript ☕ (with React.js & Next.js ⚛) and other
                  technologies. 🚀
                </p>
              </Terminal>

              <Terminal
                title="ClimateHack.AI 2022&ndash;24 🌍"
                greenLink="https://climatehack.ai/"
              >
                <p>
                  First launched in January 2022,{" "}
                  <Link href="https://climatehack.ai/">ClimateHack.AI</Link> is
                  an{" "}
                  <strong>
                    international initiative challenging students to help reduce
                    UK carbon emissions
                  </strong>{" "}
                  by 200+ kilotonnes per year by contributing to advancing{" "}
                  <strong>
                    satellite imagery & solar power nowcasting research
                  </strong>
                  . ⛅
                </p>

                <p>
                  Over two challenges, the{" "}
                  <Link href="https://doxaai.com/">DOXA AI</Link> platform has
                  evaluated <strong>6,100+ AI model submissions</strong> from{" "}
                  <strong>460+ students</strong> at{" "}
                  <strong>26+ UK, US & Canadian universities</strong> competing
                  to attend{" "}
                  <strong>in-person finals at Harvard University & UCL</strong>{" "}
                  and be awarded a share of a <strong>£70k prize pool</strong>.
                  🏆
                </p>

                <p>
                  Challenge machine learning tasks have featured{" "}
                  <strong>700+ GiB of data</strong>, including{" "}
                  <strong>12 channels of satellite imagery</strong>,{" "}
                  <strong>numerical weather predictions</strong> and{" "}
                  <strong>air quality data</strong>. 🛰️
                </p>

                <p>
                  I've shared my thoughts on what it was like to help run the
                  2022 competition on{" "}
                  <Link href="https://www.linkedin.com/feed/update/urn:li:activity:6914592814609633280/">
                    LinkedIn
                  </Link>{" "}
                  and the 2023&ndash;24 competition on the{" "}
                  <Link href="https://blog.doxaai.com/2024/04/06/climatehack-ai-2023-finals">
                    DOXA AI blog
                  </Link>
                  ! 👀
                </p>
              </Terminal>

              <Terminal
                title="IBM UCL FISE v2 2021 💻"
                greenLink="http://students.cs.ucl.ac.uk/2020/group39/"
              >
                <p>
                  I received a UCL CS{" "}
                  <Link href="https://www.ucl.ac.uk/computer-science/news/2021/jul/ucl-computer-science-undergraduate-student-awards-2021">
                    outstanding project award
                  </Link>{" "}
                  for developing{" "}
                  <Link href="http://students.cs.ucl.ac.uk/2020/group39/">
                    Ask Bob
                  </Link>
                  : an open-source, <strong>on-device voice assistant</strong>{" "}
                  built atop Rasa, SpaCy and Mozilla DeepSpeech for the IBM{" "}
                  <em>Franklin Immersive Social Engagement</em> project. 👷‍♂️
                </p>
                <p>
                  You can read about my experience as{" "}
                  <strong>lead student architect</strong> coordinating systems
                  integration across the three teams in{" "}
                  <Link href="https://www.ucl.ac.uk/computer-science/news/2021/jul/ibm-ixn-and-ucl-computer-science-investigate-open-source-immersive-social-engagement">
                    UCL Computer Science news
                  </Link>
                  . Learn more about the project on{" "}
                  <Link href="https://github.com/UCL-COMP0016-2020-Team-39/AskBob">
                    GitHub
                  </Link>
                  , our{" "}
                  <Link href="https://ucl-comp0016-2020-team-39.github.io/">
                    development blog
                  </Link>{" "}
                  and{" "}
                  <Link href="https://www.youtube.com/playlist?list=PLe67npUiWOMa-7beg8_IzI1m1_yCB7xRB">
                    YouTube
                  </Link>
                  . 📰
                </p>
              </Terminal>
            </div>
            <div className={styles.gridThin}>
              <Terminal
                title="DOXATHON 2023 🎮"
                greenLink="https://www.linkedin.com/feed/update/urn:li:activity:7042483443170992128/"
              >
                <p>
                  On 12th March 2023, I held{" "}
                  <Link href="https://www.instagram.com/p/Cou-9NltEqh/">
                    DOXATHON 2023
                  </Link>
                  , bringing together <strong>UCL's AI & CS community</strong>{" "}
                  to compete on <Link href="https://doxaai.com/">DOXA</Link>{" "}
                  over pizza. 🍕
                </p>
                <p>
                  Find out more on{" "}
                  <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7042483443170992128/">
                    LinkedIn
                  </Link>
                  .
                </p>
              </Terminal>
              <Terminal
                title="Invited Talk 🎤"
                greenLink="/talks/2022-04-12-SKAO-JBCA-ML-club-slides.pdf"
              >
                <p>
                  On 12th April 2022, I gave a talk to the{" "}
                  <strong>SKAO&ndash;JBCA ML Club</strong> at the University of
                  Manchester on{" "}
                  <Link href="https://climatehack.ai/">ClimateHack.AI</Link>. 💬
                </p>
                <p>
                  Check out the{" "}
                  <Link href="/talks/2022-04-12-SKAO-JBCA-ML-club-slides.pdf">
                    slides
                  </Link>
                  .
                </p>
              </Terminal>
              <Terminal
                title="Summer 2021 Research 🧪"
                greenLink="/ethical-voice/"
              >
                <p>
                  As a <strong>research intern</strong> at UCL Computer Science,
                  I explored using an on-device speech recognition model for{" "}
                  <strong>breathlessness symptom tracking</strong>. 📱
                </p>
                <p>
                  See the <Link href="/ethical-voice/">project page</Link>.
                </p>
              </Terminal>
              <Terminal
                title="Epidemisim 😷"
                greenLink="https://devpost.com/software/epidemic-simulator-wz83sm"
              >
                <p>
                  At <em>Hex Cambridge 2021</em>, I won Hackathons UK and
                  Wolfram prizes for{" "}
                  <Link href="https://github.com/jeremylo/epidemic-simulator">
                    Epidemisim
                  </Link>
                  : a simple <strong>disease outbreak visualiser</strong>. 🏆
                </p>
                <p>
                  Read more on{" "}
                  <Link href="https://devpost.com/software/epidemic-simulator-wz83sm">
                    Devpost
                  </Link>
                  .
                </p>
              </Terminal>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
