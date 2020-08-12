import React from "react"

export default () => {
  return (
    <section id="section5" className="section section5 contact-form">
      <div className="content">
        <h2>問い合わせ</h2>
        <form className="contact-form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" defaultValue="contact" />
          <div className="contact-form--info">
            <div className="contact-form--info__name info__name">
              <label htmlFor className="info__name--label">お名前</label>
              <input type="text" name="name" className="info__name--input" />
            </div>
            <div className="contact-form--info__mail info__mail">
              <label htmlFor className="info__mail--label">メールアドレス</label>
              <input type="email" name="email" className="info__mail--input" />
            </div>
          </div>
          <div className="contact-form--body">
            <label htmlFor className="contact-form--body__label">内容</label>
            <textarea name="message" id className="contact-form--body__input" defaultValue={""} />
          </div>
          <div className="contact-form--submit">
            <button className="contact-form--submit__btn">送信</button>
          </div>
        </form>
      </div>
    </section>
  )
};
