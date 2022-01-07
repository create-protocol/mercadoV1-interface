import React from 'react'
import EachFaq from '../components/EachFaq'
import PageHeader from '../components/PageHeader'

const FaqPage = () => {
  return (
    // the below inline style tag is just to make sure we have little space after the faq, you can safely remove it
    <div style={{ minHeight: '150vh' }}>
      <PageHeader title="Frequently Asked Questions" />
      <section className="container">
        {Array.from({ length: 6 }).map((_, index) => (
          <EachFaq key={index} />
        ))}
      </section>
    </div>
  )
}

export default FaqPage
