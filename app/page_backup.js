"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [currentCertificate, setCurrentCertificate] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const certificates = [
    {
      src: "/KHOUALDI Mohemed Achraf_page-0001.jpg",
      alt: "NCASE'24 Certificate",
      title: "NCASE'24 Participation"
    },
    {
      src: "/Responsive Web Design.png",
      alt: "Responsive Web Design - FreeCodeCamp",
      title: "Responsive Web Design"
    },
    {
      src: "/JavaScript Algorithms and Data Structures.png",
      alt: "JavaScript Algorithms and Data Structures - FreeCodeCamp",
      title: "JavaScript Algorithms"
    },
    {
      src: "/Front End Development Libraries.png",
      alt: "Front End Development Libraries - FreeCodeCamp",
      title: "Frontend Libraries"
    },
    {
      src: "/Back End Development and APIs.png",
      alt: "Back End Development and APIs - FreeCodeCamp",
      title: "Backend Development"
    },
    {
      src: "/JavaScript (Basic) Certificate.png",
      alt: "JavaScript Certificate - HackerRank",
      title: "JavaScript Intermediate"
    }
  ];

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToCertificate = (index) => {
    setCurrentCertificate(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <div className={styles.pageWrapper}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span className={styles.logoText}>MA</span>
          </div>
          <ul className={isMobileMenuOpen ? `${styles.navList} ${styles.navListOpen}` : styles.navList}>
            <li><a href="#hero" className={styles.navLink} onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" className={styles.navLink} onClick={closeMobileMenu}>About</a></li>
            <li><a href="#skills" className={styles.navLink} onClick={closeMobileMenu}>Skills</a></li>
            <li><a href="#projects" className={styles.navLink} onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#experience" className={styles.navLink} onClick={closeMobileMenu}>Experience</a></li>
            <li><a href="#contact" className={styles.navLink} onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <div 
            className={isMobileMenuOpen ? `${styles.mobileMenuBtn} ${styles.mobileMenuBtnOpen}` : styles.mobileMenuBtn}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.greeting}>Hello, I&apos;m</span>
              <span className={styles.name}>Achraf Khoualdi</span>
              <span className={styles.profession}>Full Stack Developer & Cybersecurity Engineer</span>
            </h1>
            <p className={styles.heroDescription}>
              Passionate about creating innovative web solutions and building secure digital experiences. 
              Currently pursuing Engineering in Networks & Cybersecurity at ENSTA.
            </p>
            <div className={styles.heroButtons}>
              <a href="#projects" className={styles.primaryBtn}>View My Work</a>
              <a href="#contact" className={styles.secondaryBtn}>Get In Touch</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.profileImageContainer}>
              <div className={styles.profileImage}>
                <Image
                  src="/IMG_0782.JPG"
                  alt="Achraf Khoualdi"
                  width={300}
                  height={300}
                  className={styles.profilePic}
                />
              </div>
              <div className={styles.floatingElements}>
                <div className={styles.floatingElement}></div>
                <div className={styles.floatingElement}></div>
                <div className={styles.floatingElement}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p className={styles.aboutDescription}>
                I&apos;m a passionate Full Stack Developer and aspiring Cybersecurity Engineer with expertise in 
                modern web technologies. I love creating digital solutions that make a difference and have 
                a strong foundation in both frontend and backend development.
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>6+</span>
                  <span className={styles.statLabel}>Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Frontend</h3>
              <div className={styles.skillsList}>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>Next.js</span>
                <span className={styles.skillTag}>JavaScript</span>
                <span className={styles.skillTag}>TypeScript</span>
                <span className={styles.skillTag}>HTML5</span>
                <span className={styles.skillTag}>CSS3</span>
                <span className={styles.skillTag}>Tailwind CSS</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Backend</h3>
              <div className={styles.skillsList}>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>Express.js</span>
                <span className={styles.skillTag}>Python</span>
                <span className={styles.skillTag}>MongoDB</span>
                <span className={styles.skillTag}>Supabase</span>
                <span className={styles.skillTag}>REST APIs</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Tools & Others</h3>
              <div className={styles.skillsList}>
                <span className={styles.skillTag}>Git/GitHub</span>
                <span className={styles.skillTag}>Docker</span>
                <span className={styles.skillTag}>Vercel</span>
                <span className={styles.skillTag}>Cloudinary</span>
                <span className={styles.skillTag}>Webpack</span>
                <span className={styles.skillTag}>Cybersecurity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a href="#" className={styles.projectLink}>Live Demo</a>
                    <a href="#" className={styles.projectLink}>Code</a>
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>MK Exports</h3>
                <p className={styles.projectDescription}>
                  Official website for MK Exports, an Algerian company specializing in exporting local products to global markets.
                </p>
                <div className={styles.projectTech}>
                  <span>Next.js</span>
                  <span>React</span>
                  <span>TailwindCSS</span>
                </div>
              </div>
            </div>
            
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a href="#" className={styles.projectLink}>Live Demo</a>
                    <a href="#" className={styles.projectLink}>Code</a>
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>Bayti</h3>
                <p className={styles.projectDescription}>
                  Real estate platform connecting buyers and sellers in the Algerian market with virtual tours.
                </p>
                <div className={styles.projectTech}>
                  <span>React</span>
                  <span>Supabase</span>
                  <span>TailwindCSS</span>
                </div>
              </div>
            </div>
            
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a href="#" className={styles.projectLink}>Live Demo</a>
                    <a href="#" className={styles.projectLink}>Code</a>
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>QuickMenu</h3>
                <p className={styles.projectDescription}>
                  Web application for creating and managing meal plans with personalized recipe suggestions.
                </p>
                <div className={styles.projectTech}>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025 - Present</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Co-Founder - AD NewTech</h3>
                <p className={styles.timelineDescription}>
                  Created websites, mobile apps, and software solutions for clients. Delivered projects such as MK Exports and Bayti. Focused on modern UI, responsive design, and backend integration.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Website Development - MK Exports</h3>
                <p className={styles.timelineDescription}>
                  Designed and developed a corporate website to showcase products and services with clean UI and responsive layouts.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Prototype Development - Bayti</h3>
                <p className={styles.timelineDescription}>
                  Built a housing project prototype site with category management, real-time updates, and Supabase integration for image uploads and APIs.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Nov 2024</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Organizing Committee Member - NCASE&apos;24</h3>
                <p className={styles.timelineDescription}>
                  Contributed to organizing the first National Conference of Applied Sciences and Engineering, hosted by ENSTA and LSA. Assisted in logistics, coordination, and supporting speakers.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2024</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Participant - RoboCo Sumo Robots Competition</h3>
                <p className={styles.timelineDescription}>
                  Designed, coded, and tested an autonomous sumo robot. Reached the semifinals among dozens of teams.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2024 - 2025</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Self-Learning Projects</h3>
                <p className={styles.timelineDescription}>
                  Completed FreeCodeCamp projects (JavaScript Calculator, 25+5 Clock in React) and Node.js Crash Course, gaining backend development experience with Node.js and Express.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2023 - Present</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Engineering Student - ENSTA</h3>
                <p className={styles.timelineDescription}>
                  Specializing in Networks & Cybersecurity. Hands-on labs with security tools, CTF challenges, and system analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Certificates</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.certificateCarousel}>
            <button 
              className={styles.carouselBtn + ' ' + styles.prevBtn} 
              onClick={prevCertificate}
              aria-label="Previous certificate"
            >
              &#8249;
            </button>
            
            <div className={styles.certificateContainer}>
              {certificates.map((cert, index) => {
                let position = 'next';
                if (index === currentCertificate) {
                  position = 'active';
                } else if (
                  index === (currentCertificate - 1 + certificates.length) % certificates.length
                ) {
                  position = 'prev';
                }
                
                return (
                  <div
                    key={index}
                    className={`${styles.certificateSlide} ${styles[position]}`}
                    onClick={() => goToCertificate(index)}
                  >
                    <div className={styles.certificateImageContainer}>
                      <Image
                        src={cert.src}
                        alt={cert.alt}
                        width={400}
                        height={300}
                        className={styles.certificateImage}
                      />
                    </div>
                    <h4 className={styles.certificateTitle}>{cert.title}</h4>
                  </div>
                );
              })}
            </div>
            
            <button 
              className={styles.carouselBtn + ' ' + styles.nextBtn} 
              onClick={nextCertificate}
              aria-label="Next certificate"
            >
              &#8250;
            </button>
          </div>
          
          <div className={styles.certificateIndicators}>
            {certificates.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentCertificate ? styles.activeIndicator : ''}`}
                onClick={() => goToCertificate(index)}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Let&apos;s Connect</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.contactContent}>
            <div className={styles.contactText}>
              <h3>Ready to collaborate?</h3>
              <p>I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can work together!</p>
            </div>
            <div className={styles.contactForm}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Your Name" className={styles.formInput} />
                  <input type="email" placeholder="Your Email" className={styles.formInput} />
                </div>
                <textarea placeholder="Your Message" className={styles.formTextarea}></textarea>
                <button type="submit" className={styles.formButton}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerText}>
              <p>&copy; 2025 Achraf Khoualdi. All rights reserved.</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>GitHub</a>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}