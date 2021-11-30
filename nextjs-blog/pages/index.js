import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there ,this is a simple resume using NextJS</p>
        <p>I'm a student developer enthusiastic . Currently learning new frameworks as NextJS and ReactJS</p>
        <p>
          You can catch me on {' '}
          <a href="https://br.linkedin.com/in/victoriaemanuelle">linkedin</a>.
        </p>
      </section>
    </Layout>
  )
}