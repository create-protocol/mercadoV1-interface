import React from 'react'
import Blog from '../components/Blog'
import PageHeader from '../components/PageHeader'

const BlogPage = () => {
  return (
    <div style={{ minHeight: '200vh' }}>
      <PageHeader title="Blogs" />
      <section className="container">
        <div className="blog__wrapper">
          {Array.from({ length: 6 }).map((_, index) => (
            <Blog key={index} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogPage
