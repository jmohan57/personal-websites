import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import React from "react";

export default function Document() {
	return (
		<Html lang="en">

			<Head>
				{/*
				Author: Muhammad Fiaz
                 GitHub: Visit the GitHub repository at https://github.com/muhammad-fiaz/muhammadfiaz.com/ for more details.
                 license: MIT License
                  */}

				{/* eslint-disable-next-line @next/next/no-title-in-document-head */}
				<title>Muhammad Fiaz - Full Stack Developer & Software Engineer | Portfolio</title>

				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
				<meta name="application-name" content="Muhammad Fiaz" />


				<meta name="theme-color" content="#000000" />
				<meta name="title" content="Muhammad Fiaz - Full Stack Developer & Software Engineer | Portfolio"/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="English"/>
				<meta name="revisit-after" content="1 days"/>
				<link rel="canonical" href="https://muhammadfiaz.com" />
				<meta name="license" content="MIT License" />
				<meta httpEquiv="content-language" content="en-us" />

				<link rel="preconnect" href="https://muhammadfiaz.com" />

				<link rel="dns-prefetch" href="https://muhammadfiaz.com" />

				<meta name="author" content="Muhammad Fiaz" />

				<link rel="alternate" hrefLang="en" href="https://muhammadfiaz.com" />

				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="bingbot" content="index, follow" />

				<meta name="description" content="Muhammad Fiaz - A dedicated Full Stack Developer, proficient in Cloud, DevOps, ML/AI, and Design. Join me in my journey of passionate programming, innovation, and shaping the future of technology." />

				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.jpg" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="manifest" href="/manifest.json" />
				<meta property="og:title" content="Muhammad Fiaz - Full Stack Developer & Software Engineer | Portfolio" key="title" />
				<meta property="og:description" content="I am Muhammad Fiaz, a dedicated Full Stack Developer with expertise in Cloud Computing, DevOps methodologies, Machine Learning, Artificial Intelligence, and Design principles. With a profound passion for programming, I embark on a relentless journey of innovation, continuously shaping the future of technology. Join me as we explore the intricate intersections of creativity, precision, and visionary problem-solving, and together, we navigate the ever-evolving landscape of digital possibilities." />
				<meta property="og:image" content="https://muhammadfiaz.com/img/fiaz-org.jpeg" />
				<meta property="og:url" content="https://muhammadfiaz.com" />
				<meta property="og:type" content="website" />
				<meta property="og:profile" content="https://github.com/muhammad-fiaz" />
				<meta property="og:site_name" content="Muhammad Fiaz" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="https://twitter.com/muhammadfiaz_" />
				<meta name="twitter:title" content="Muhammad Fiaz" />
				<meta name="twitter:description" content="I am Muhammad Fiaz, a dedicated Full Stack Developer with expertise in Cloud Computing, DevOps methodologies, Machine Learning, Artificial Intelligence, and Design principles. With a profound passion for programming, I embark on a relentless journey of innovation, continuously shaping the future of technology. Join me as we explore the intricate intersections of creativity, precision, and visionary problem-solving, and together, we navigate the ever-evolving landscape of digital possibilities." />
				<meta name="twitter:image" content="https://muhammadfiaz.com/img/fiaz-org.jpeg" />
				<meta name="twitter:creator" content="https://twitter.com/muhammadfiaz_" />
				<meta name="twitter:domain" content="https://muhammadfiaz.com" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Muhammad Fiaz",
          "url": "https://muhammadfiaz.com",
          "sameAs": [
            "https://github.com/muhammad-fiaz",
            "https://www.linkedin.com/in/muhammad-fiaz-",
            "https://medium.com/@muhammad-fiaz",
            "https://twitter.com/muhammadfiaz_",
            "https://dev.to/muhammadfiaz"
          ]
        }`
					}}
				/>


				{/*Edit this to your according FAQ */}
				<script type="application/ld+json" dangerouslySetInnerHTML={{
					__html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Have you worked on any projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks."
                }
              },
              {
                "@type": "Question",
                "name": "Can we recruit you?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am currently looking for jobs and I have also done several open-source projects as well."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Muhammad Fiaz?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muhammad Fiaz is a Full Stack Developer specializing in Cloud, DevOps, ML/AI, and Design. He is passionate about programming, innovation, and shaping the future. With expertise in various technologies and a strong background in software development, Muhammad Fiaz strives to create innovative solutions and contribute to the advancement of technology. His skill set includes proficiency in cloud computing, DevOps practices, machine learning/artificial intelligence, and design principles. Muhammad Fiaz is dedicated to staying up-to-date with the latest industry trends and leveraging his knowledge to drive impactful and transformative projects."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Muhammad Fiaz from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muhammad Fiaz is from Madurai, Tamil Nadu, India."
                }
              },
              {
                "@type": "Question",
                "name": "What does Muhammad Fiaz do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muhammad Fiaz leverages Cloud, DevOps, ML/AI, Design, and web/mobile apps to benefit people with optimized operations and user-friendly experiences."
                }
              }
            ]
          }
        `,
				}} />

				{/*Edit this to your according to your website*/}
				<script type="application/ld+json" dangerouslySetInnerHTML={{
					__html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://muhammadfiaz.com/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://muhammadfiaz.com/docs"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Articles",
              "item": "https://muhammadfiaz.com/articles"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://muhammadfiaz.com/projects"
            },{
              "@type": "ListItem",
              "position": 5,
              "name": "Sign In",
              "item": "https://muhammadfiaz.com/signin"
            }]
          }
        `
				}} />
				{/*Edit this to your according to your website*/}
				<script type="application/ld+json" dangerouslySetInnerHTML={{
					__html: `
          {
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "Muhammad Fiaz",
            "alternateName": "fiaz",
            "url": "https://muhammadfiaz.com",
            "logo": "https://muhammadfiaz.com/img/fiaz-org.jpeg",
            "sameAs": "https://www.linkedin.com/in/muhammad-fiaz-/"
          }
        `
				}} />

				{/*theme*/}
				<Script id="theme.util.jsx" strategy="beforeInteractive" >
					{`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
				</Script>

				{/* Google Analytics */}
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"></Script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag() {
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', 'G-SDJ0K1Y70X');
                        `
					}}
				/>

			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}
