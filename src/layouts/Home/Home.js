import gamestackTexture2Large from '../../assets/book_detail.jpg';
import gamestackTexture2Placeholder from '../../assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '../../assets/book_detail.jpg';
import gamestackTextureLarge from '../../assets/search_poems.jpg';


import offlineBook from '../../assets/offline_book.png';
import poemReader from '../../assets/poem_reader.png';

import gamestackTexturePlaceholder from '../../assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '../../assets/search_poems.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from '../../layouts/Home/Intro';
import { ProjectSummary } from '../../layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Ebooks', 'Poetry', 'Download', 'Themes', 'Premium'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectTwo = useRef();
  const projectThree= useRef();

  useEffect(() => {
    const sections = [intro, projectTwo,projectThree];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Versify"
        description="Versify is a modern ebook and poem app that aims to provide users with a poetic utopia. 
        It is a place where poetry enthusiasts can explore, and be inspired by the world of poetry"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="The Versify app"
        description="Versify is a modern ebook and poem app that aims to provide users with a poetic utopia. 
        It is a place where poetry enthusiasts can explore, and be inspired by the world of poetry"
        buttonText="Still in development"
        buttonLink="https://github.com/Anslem27"
        model={{
          type: 'phone',
          alt: 'App screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={2}
        title="Lots of exhilarating features."
        description=""
        buttonText="Still in development"
        buttonLink="https://github.com/Anslem27"
        model={{
          type: 'phone',
          alt: 'App screen',
          textures: [
            {
              srcSet: [poemReader, poemReader],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [offlineBook, offlineBook],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
