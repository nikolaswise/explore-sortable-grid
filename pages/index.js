import Head from 'next/head'
import Grid from '../components/Grid'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lets Explore Sortable Grids
        </h1>

        <p className={styles.description}>
          With <a href="https://github.com/clauderic/react-sortable-hoc">Reach Sortable HOC</a>

        </p>

        <div className={styles.grid}>
          <Grid />
        </div>
      </main>


    </div>
  )
}