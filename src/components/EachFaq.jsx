import React, { useState } from 'react'
import arrow_down from '../assets/images/arrow_down.svg'
const EachFaq = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq">
      <div onClick={() => setOpen(!open)} className="faq__title">
        <h2 className="faq__title--text">Lorem Ipsum ?</h2>
        <div className={`${open ? 'arrow_up' : 'arrow_down'}`}>
          <img src={arrow_down} alt="arrow down" />
        </div>
      </div>
      <span className={open ? 'faq-divider-active' : 'faq-divider-inactive'} />
      {open ? (
        <p className="faq__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea minus
          sunt quam nobis maxime recusandae, quibusdam ipsum officiis illum
          autem repudiandae illo, et pariatur dicta blanditiis non perferendis
          adipisci dolore. Fugiat doloremque facilis, quae assumenda hic
          voluptate est nesciunt quidem.
        </p>
      ) : null}
    </div>
  )
}

export default EachFaq
