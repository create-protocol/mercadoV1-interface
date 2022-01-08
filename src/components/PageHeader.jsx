const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="page__header">
      <div className="generic__container">
        <h1 className="page__title">{title}</h1>
        {subtitle ? <h3>{subtitle}</h3> : null}
      </div>
    </div>
  )
}

export default PageHeader
