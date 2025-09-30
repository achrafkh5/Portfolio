import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact" >Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.section} id="about">
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
              Hello! Im [Your Name], a [Your Profession]. Welcome to my portfolio website.
            </p>
          </section>
          <section className={styles.section} id="skills">
            <h2 className={styles.subtitle}>Skills</h2>
            <ul className={styles.list}>
              <li>Web Development<ul>
                <li><b>Languages</b>: JavaScript (ES6+), TypeScript, Python, C</li>
                <li><b>frontEnd</b>: React, Next.js, HTML5, CSS3, Tailwind CSS</li>
                <li><b>BackEnd</b>: Node.js, Express.js, Supabase, REST APIs</li>
                <li><b>Databases</b>: MongoDB</li>
                <li><b>Tools</b>: Git/GitHub, Vercel, Cloudinary, Docker, Webpack, Babel</li>
                </ul></li>
              <li>other<ul>
                <li><b>Languages</b>: English, Arabic, French</li>
                <li><b>Soft Skills</b>: Communication, Teamwork, Problem-Solving</li>
              </ul></li>
            </ul>
          </section>
          <section className={styles.section} id="projects">
            <h2 className={styles.subtitle}>Projects</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>MK Exports</h3>
                <p>Official website for MK Exports, an Algerian company specializing in exporting local products to global markets. The site showcases products, company information, and contact details.</p>
                <p>Tech Used: Next.js, React, TailwindCSS, Vercel (hosting).</p>
              </div>
              <div className={styles.card}>
                <h3>Bayti</h3>
                <p>Bayti is a real estate platform that connects buyers and sellers in the Algerian market. The site features property listings, virtual tours, and a user-friendly interface.</p>
                <p>Tech Used: React, TailwindCSS, Supabase, Vercel (hosting).</p>
              </div>
              <div className={styles.card}>
                <h3>QuickMenu</h3>
                <p>QuickMenu is a web application that allows users to create and manage their meal plans effortlessly. The app provides personalized recipe suggestions based on user preferences and dietary restrictions.</p>
                <p>Tech Used: React, Node.js, Express.js, MongoDB, Vercel (hosting).</p>
              </div>
              <div className={styles.card}>
                <h3>25 + 5 Clock</h3>
                <p>A simple Pomodoro timer application that helps users manage their work and break intervals. The app features customizable session lengths and a clean, user-friendly interface.</p>
                <p>Tech Used: React, CSS.</p>
              </div>
              <div className={styles.card}>
                <h3>Weather App</h3>
                <p>A web application that provides real-time weather information for any location. Users can search for a city and view current conditions, forecasts, and more.</p>
                <p>Tech Used: React, OpenWeatherMap API, CSS.</p>
              </div>
            </div>
          </section>
          <section className={styles.section} id="experience">
            <h2 className={styles.subtitle}>Experience</h2>
            <ul className={styles.list}>
              <li>
                <strong>Co-Founder</strong> – AD NewTech (2025 – Present)
                <p>Created websites, mobile apps, and software solutions for clients. Delivered projects such as MK Exports and Bayti. Focused on modern UI, responsive design, and backend integration.</p>
              </li>
              <li>
                <strong>Website Development</strong> – MK Exports (2025)
                <p>Designed and developed a corporate website to showcase products and services with clean UI and responsive layouts.</p>
              </li>
              <li>
                <strong>Prototype Development</strong> – Bayti (2025)
                <p>Built a housing project prototype site with category management, real-time updates, and Supabase integration for image uploads and APIs.</p>
              </li>
              <li>
                <strong>Organizing Committee Member</strong> – NCASE’24 (Nov 2024)
                <p>Contributed to organizing the first National Conference of Applied Sciences and Engineering, hosted by ENSTA and LSA. Assisted in logistics, coordination, and supporting speakers.</p>
              </li>
              <li>
                <strong>Participant</strong> – RoboCo Sumo Robots Competition (2024)
                <p>Designed, coded, and tested an autonomous sumo robot. Reached the semifinals among dozens of teams.</p>
              </li>
              <li>
                <strong>Engineering Student</strong> – ENSTA (2023 – Present)
                <p>Specializing in Networks & Cybersecurity. Hands-on labs with security tools, CTF challenges, and system analysis.</p>
              </li>
              <li>
                <strong>Self-Learning Projects</strong> (2024 – 2025)
                <p>Completed FreeCodeCamp projects (JavaScript Calculator, 25+5 Clock in React) and Node.js Crash Course, gaining backend development experience with Node.js and Express.</p>
              </li>
            </ul>
          </section>
          <section className={styles.section} id="certificates">
            <h2 className={styles.subtitle}>Certificates</h2>
            <div className={styles.certificatesGrid}>
              <div className={styles.certificate}>
                <Image
                  src="/KHOUALDI Mohemed Achraf_page-0001.jpg"
                  alt="NCASE’24 Certificate"
                  width={320}
                  height={200}
                  className={styles.certificateImage}
                />
                <p><strong>Participation</strong> – NCASE’24 (Nov 2024)</p>
              </div>
            </div>
          </section>

              <div className={styles.certificate}>
                <Image
                  src="/Responsive Web Design.png"
                  alt="Responsive Web Design - FreeCodeCamp"
                  width={320}
                  height={200}
                  className={styles.certificateImage}
                />
                <p><strong>Responsive Web Design</strong> – FreeCodeCamp (2024)</p>
              </div>

              <div className={styles.certificate}>
                <Image
                  src="/JavaScript Algorithms and Data Structures.png"
                  alt="JavaScript Algorithms and Data Structures - FreeCodeCamp"
                  width={320}
                  height={200}
                  className={styles.certificateImage}
                />
                <p><strong>JavaScript Algorithms and Data Structures</strong> – FreeCodeCamp (2024)</p>
              </div>
          
              <div className={styles.certificate}>
                <Image
                  src="/Front End Development Libraries.png"
                  alt="Front End Development Libraries - FreeCodeCamp"
                  width={320}
                  height={200}
                  className={styles.certificateImage}
                />
                <p><strong>Front End Development Libraries</strong> – FreeCodeCamp (2024)</p>
              </div>
          
              <div className={styles.certificate}>
                <Image
                  src="/Back End Development and APIs.png"
                  alt="Back End Development and APIs - FreeCodeCamp"
                  width={320}
                  height={200}
                  className={styles.certificateImage}
                />
                <p><strong>Back End Development and APIs</strong> – FreeCodeCamp (2025)</p>
              </div>
          
              <div className={styles.certificate}>
                <Image
                  src="/JavaScript (Basic) Certificate.png"
                  alt="JavaScript Certificate - HackerRank"
                  width={320}
                  height={200}
                  className={styles.certificateImage}
                />
                <p><strong>JavaScript (Intermediate)</strong> – HackerRank (2025)</p>
              </div>
          

          <section className={styles.section} id="education">
            <h2 className={styles.subtitle}>Education</h2>
            <ul className={styles.list}>
              <li>
                <strong>National Higher School of Advanced Technologies (ENSTA)</strong> – Algiers, Algeria  
                <p>Engineering Degree in Networks & Cybersecurity (Present)</p>
              </li>
              <li>
                <strong>Preparatory Classes in Mathematics & Computer Science</strong> – Algiers, Algeria  
                <p>Completed 2 years of intensive preparatory studies (2023 – 2025)</p>
              </li>
              <li>
                <strong>Baccalaureate – Mathematics</strong>  
                <p>Graduated with distinction, score: <strong>+16/20</strong> (2023)</p>
              </li>
            </ul>
          </section>
 
          <section className={styles.section} id="contact">
            <h2 className={styles.subtitle}>Contact</h2>
            <p>If youd like to get in touch, please email me at [your email address].</p>
          </section>
        </main>
    </div>
  );
}
