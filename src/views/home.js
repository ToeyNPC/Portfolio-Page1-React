import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page1</title>
        <meta property="og:title" content="Portfolio Page1" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <span className="card-Heading home-heading">
            Nuttapong Charoenpru
          </span>
          <div className="home-links-container">
            <span className="home-link navbar-Link">About Me</span>
            <span className="home-link1 navbar-Link">Experience</span>
            <span className="home-link2 navbar-Link">Skillls&amp;Tools</span>
            <span className="home-link3 navbar-Link">Project</span>
            <span className="navbar-Link">Contact</span>
          </div>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <span className="card-Heading home-heading1">Logo</span>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link5 navbar-Link">About</span>
              <span className="home-link6 navbar-Link">Experience</span>
              <span className="home-link7 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-about-me">
        <div className="home-about-container">
          <div className="home-hero-text-container">
            <h1 className="home-heading2 section-Heading">
              Hello, My Name is Nuttapong Charoenpru
            </h1>
            <span className="home-text section-Text">
              <span className="home-text01">
                &quot;Mechanical Engineering experience in design thinking and
                problem solving looking to transition to a software developer.
                Have just completed the junior software developer program and
                I&apos;m eager to learn and put my coding skills to good
                use&quot;
              </span>
              <span>&amp;#8203;</span>
            </span>
            <div className="home-cta-btn-container">
              <button className="home-cta-btn button anchor">
                <span className="home-text03">Resume</span>
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/38091-1500w.jpg"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-education">
        <div className="home-education-container">
          <div className="home-heading-container">
            <h1 className="home-text04 section-Heading">Education</h1>
          </div>
          <div className="home-content-container">
            <div className="home-about-11">
              <div className="home-container02">
                <h3 className="home-text05">
                  Junior software developer, Generation Thailand
                </h3>
              </div>
              <div className="home-container03">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text06 card-Text">
                  unior software developer program cohort 2
                </span>
              </div>
              <div className="home-container04">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text07 card-Text">
                  Well trained in BSM skills.For example Growth Mindset,
                  Orientation to Details, Agile &amp; Scrum, etc.
                </span>
              </div>
            </div>
            <div className="home-about-12">
              <div className="home-container05">
                <span className="home-text08">
                  <span>June-August 2022</span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-content-container1">
            <div className="home-about-111">
              <div className="home-container06">
                <h3 className="home-text10">
                  <span>Mechanical Engineering B.Eng,</span>
                  <span>KMUTNB</span>
                </h3>
              </div>
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text13 card-Text">
                  Excelled in computer programming classes
                </span>
              </div>
              <div className="home-container08">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text14 card-Text">
                  Created vending machine program using C++
                </span>
              </div>
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text15 card-Text">
                  Excelled in Systematic design classes
                </span>
              </div>
            </div>
            <div className="home-about-121">
              <div className="home-container10">
                <span className="home-text16 card-Text">
                  <span>2012-2017</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-experience">
        <div className="home-experience-container">
          <div className="home-heading-container1">
            <h1 className="home-text18 section-Heading">Experience</h1>
          </div>
          <div className="home-content-container2">
            <div className="home-about-122">
              <div className="home-container11">
                <span className="home-text19 card-Text">
                  <span>2018-2020</span>
                  <br></br>
                  <span>2021-2022</span>
                </span>
              </div>
            </div>
            <div className="home-about-112">
              <div className="home-container12">
                <h3 className="home-text23">
                  Engineer at Wa-u-pug Engineering Co., Ltd.
                </h3>
              </div>
              <div className="home-container13">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text24 card-Text">
                  Identify the problem and problem-solving
                </span>
              </div>
              <div className="home-container14">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text25 card-Text">
                  Participated in Daily Scrum and contribute to the team
                </span>
              </div>
            </div>
          </div>
          <div className="home-content-container3">
            <div className="home-about-123">
              <div className="home-container15">
                <span className="home-text26 card-Text">
                  <span>2012-2017</span>
                </span>
              </div>
            </div>
            <div className="home-about-113">
              <div className="home-container16">
                <h3 className="home-text28">
                  <span>Technician at EGAT Lamtakong learning center</span>
                </h3>
              </div>
              <div className="home-container17">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text30 card-Text">
                  Planned and cooperated with 8 suppliers for device maintenance
                </span>
              </div>
              <div className="home-container18">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text31 card-Text">
                  Created maintenance reports and presentations using Microsoft
                  Word, Excel, and PowerPoint
                </span>
              </div>
              <div className="home-container19">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text32 card-Text">
                  Designed and Implemented working rutine for techinician
                </span>
              </div>
            </div>
          </div>
          <div className="home-content-container4">
            <div className="home-about-124">
              <div className="home-container20">
                <span className="home-text33 card-Text">
                  <span>2017-218</span>
                </span>
              </div>
            </div>
            <div className="home-about-114">
              <div className="home-container21">
                <h3 className="home-text35">
                  <span>Technician at EGAT Lamtakong learning center</span>
                </h3>
              </div>
              <div className="home-container22">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text37 card-Text">
                  Experienced communicating in English with more than 200
                  peoples
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-skills">
        <div className="home-heading-container2">
          <h1 className="home-text38 section-Heading">Skills&amp;Tools</h1>
        </div>
        <div className="home-skill-line1">
          <div className="home-feature-card">
            <img
              alt="image"
              src="/playground_assets/html_icon%5B1%5D-200h.png"
              className="home-logo"
            />
            <h2 className="home-text39">HTML</h2>
          </div>
          <div className="home-feature-card1">
            <img
              alt="image"
              src="/playground_assets/css_icon-200h.png"
              className="home-logo01"
            />
            <h2 className="home-text40">CSS</h2>
          </div>
          <div className="home-feature-card2">
            <img
              alt="image"
              src="/playground_assets/javascript_icon%5B1%5D-200h.png"
              className="home-logo02"
            />
            <h2 className="home-text41">Javascript</h2>
          </div>
          <div className="home-feature-card3">
            <img
              alt="image"
              src="/playground_assets/github_icon-200h.png"
              className="home-logo03"
            />
            <h2 className="home-text42">Github</h2>
          </div>
        </div>
        <div className="home-skill-line2">
          <div className="home-feature-card4">
            <img
              alt="image"
              src="/playground_assets/mongodb_icon-200h.png"
              className="home-logo04"
            />
            <h2 className="home-text43">MongoDB</h2>
          </div>
          <div className="home-feature-card5">
            <img
              alt="image"
              src="/playground_assets/express_icon-200h.png"
              className="home-logo05"
            />
            <h2 className="home-text44">Express</h2>
          </div>
          <div className="home-feature-card6">
            <img
              alt="image"
              src="/playground_assets/react_icon-200h.png"
              className="home-logo06"
            />
            <h2 className="home-text45">React</h2>
          </div>
          <div className="home-feature-card7">
            <img
              alt="image"
              src="/playground_assets/node.js_icon%5B1%5D-200h.png"
              className="home-logo07"
            />
            <h2 className="home-text46">Node.js</h2>
          </div>
        </div>
      </div>
      <div className="home-project">
        <div className="home-heading-container3">
          <h1 className="home-text47 section-Heading">Projects</h1>
        </div>
        <div className="home-project-card-container">
          <div className="home-card">
            <div className="home-card-content">
              <div className="home-card-heading">
                <img
                  alt="image"
                  src="/playground_assets/find%20your%20hat-200h.png"
                  className="home-logo08"
                />
              </div>
              <div className="home-card-content1">
                <div className="home-feature">
                  <span className="home-price">Find Your Hat</span>
                </div>
                <div className="home-feature1">
                  <span className="card-Text">
                    Created Simple yet responsive pacman like game using
                    Javascript.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <button className="home-choose anchor button">See More</button>
              </div>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-card-content2">
              <div className="home-card-heading1">
                <img
                  alt="image"
                  src="/playground_assets/jamming-200h.png"
                  className="home-logo09"
                />
              </div>
              <div className="home-card-content3">
                <div className="home-feature2">
                  <span className="home-price1">Jamming</span>
                </div>
                <div className="home-feature3">
                  <span className="home-name1 card-Text">
                    Website use to create playlist for spotify by seachin
                  </span>
                </div>
                <button className="home-choose1 anchor button">See More</button>
              </div>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-card-content4">
              <div className="home-card-heading2">
                <img
                  alt="image"
                  src="/playground_assets/infinity%20health-200h.png"
                  className="home-logo10"
                />
              </div>
              <div className="home-card-content5">
                <div className="home-feature4">
                  <span className="home-price2">Infinity Health</span>
                </div>
                <div className="home-feature5">
                  <span className="card-Text">
                    Designed and created an Interactive website for an ‘activity
                    tracker’ that help you keep up with your excercise plan.
                  </span>
                </div>
                <button className="home-choose2 anchor button">See More</button>
              </div>
            </div>
          </div>
        </div>
        <button className="home-cta-btn1 button anchor">
          <span className="home-text48">More on Github</span>
        </button>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 1024 1024" className="home-icon26">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <span className="home-text49 card-Text">
              nuttapongcharoenpru@gmail.com
            </span>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon28">
              <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
            </svg>
            <span className="home-text50 card-Text">github.com/ToeyNPC</span>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon30">
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
            <span className="home-text51 card-Text">
              linkedin.com/in/nuttapong-charoenpru-44b594240
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
