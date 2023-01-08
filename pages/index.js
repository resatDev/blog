import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Software Developer who is curious about many parts of Software Development Job as Full Stack. I am currently working on Web Development area as Junior Front End Developer. Back End development, Developing Mobile Applications, DevOps operations and some other parts of software are also my interesting areas. However, Front End Development is enjoyable area for me and I prefer to focus on this area. Briefly, you can know me as an Eager to Learn, Curious and fast learner Software Developer.</p>
      </section>
    </Layout>
  );
}