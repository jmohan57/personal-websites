// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'
import SectionGridBg from '../../blocks/section.grid'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

// Section scss
import about from '../../../../assets/styles/sections/index/about.module.scss'


export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hard Skills"
					subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock
							title="Logical Thinking"
							icon={['fas', 'chart-network']}
							copy="With a strong foundation in both design and development, I leverage logical thinking to approach every project. I bring a unique perspective, constantly seeking innovative solutions and staying up-to-date with the latest industry trends."
							iconClass={about.icon}
							containerClass={about.container}
						/>

						<BadgesBlock
							title="Software I love to work with"
							copy="As a self-taught programmer with a passion for project development, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. I particularly enjoy working with tools like VS Code and JetBrains software to create exceptional projects."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon}
						/>

						<BadgesBlock
							title="Technologies I love to build with"
							copy="As a passionate problem solver, I thrive on creating innovative solutions through coding. From front-end development to back-end systems and APIs, I embrace challenges and enjoy pushing the boundaries of what's possible."
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon}
						/>

					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="data string background" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'jetpack', name: 'Jetpack', type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{key:'blender',name:'Blender',type:'devicon'},
	{key:'unity',name:'Unity',type:'devicon'},
	{key:'androidstudio',name:'AndroidStudio',type:'devicon'},
	{key:'unrealengine',name:'UnrealEngine',type:'devicon'}



]


const tech = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'php', name: 'PHP', type: 'devicon' },
	{ key: 'wordpress', name: 'WordPress', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'java', name: 'Java', type: 'devicon' },
	{ key: 'csharp', name: 'C#', type: 'devicon' },
	{ key: 'django', name: 'Django', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'c', name: 'C', type: 'devicon' },
	{ key: 'cpp', name: 'C++', type: 'devicon' },
	{ key: 'ajax', name: 'AJAX', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'kotlin', name: 'Kotlin', type: 'devicon' },
	{ key: 'vuejs', name: 'Vuejs', type: 'devicon' },
	{ key: 'tailwind', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
	{ key: 'npm', name: 'NPM', type: 'devicon' },
	{ key: 'yarn', name: 'Yarn', type: 'devicon' },
	{key:"angularjs",name:"AngularJS",type:"devicon"},
	{key:"android",name:"Android",type:"devicon"},
	{key:"firebase",name:"Firebase",type:"devicon"},
	{key:"flask",name:"Flask",type:"devicon"}



];