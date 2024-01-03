import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { NotFoundContent } from '../not-found/NotFoundContent'
import { Footer } from '../footer/Footer'
import styles from '../styles/not-found-page.module.css'
import clsx from 'clsx'

export function NotFoundPage() {
  // min-h-screen w-full flex items-center justify-center
  return (
    <Fragment>
      <Helmet>
        <title>{'Nie odnaleziono strony - Mage Guild Wars'}</title>
      </Helmet>
      <section className={clsx('min-h-screen', styles.page)}>
        <NotFoundContent />
        <Footer />
      </section>
    </Fragment>
  )
}
