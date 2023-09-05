import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title';
import Icon from '../../utils/icon';

import css from '../../../../assets/styles/scss/sections/articles/recent.module.scss';

interface Article {
	title: string;
	pubDate: string;
	link: string;
	author: string;
	thumbnail: string;
	categories: string[];
}

interface MediumArticles {
	feed: any;
	items: Article[];
}

export default function Recent({ mediumArticles }: { mediumArticles: MediumArticles }) {
	const feed = mediumArticles.feed;
	const articles = mediumArticles.items;

	return (
		<Section classProp="borderBottom">
			{/*  @ts-ignore */}
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Recent Articles"
					preTitle="Informative"
					subTitle="A personal quest to become a better creative writer."
				/>
				<section className={css.projects}>
					{articles.map(({ title, pubDate, link, author, thumbnail, categories }, index) => {
						const date = new Date(pubDate).toDateString();
						return (
							<article key={index} className={css.project}>
                <span className={css.featuredImage}>
                  <Image src={thumbnail} height={400} width={600} alt="Article thumbnail" loading="eager" />
                </span>
								<span className={css.header}>
                  <a href={link} rel="noreferrer" target="_blank">
                    {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                  </a>
                </span>
								<span className={css.descriptionContainer}></span>
								<span className={css.details}>
                  <p>By {author}</p>
                  <p className={css.pushedAt}>{date}</p>
                </span>
								<span className={css.topicsContainer}>
                  {categories.map((e, index) => {
					  return (
						  <span key={index} className={css.topics}>
                        <Icon icon={['fab', 'medium']} /> {e}
                      </span>
					  );
				  })}
                </span>
							</article>
						);
					})}
				</section>
			</Container>
		</Section>
	);
}
