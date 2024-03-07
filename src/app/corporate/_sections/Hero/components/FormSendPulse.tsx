'use client'

import React, { useEffect } from 'react'

const FormSendPulse: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      '//web.webformscr.com/apps/fc3/build/default-handler.js?1708945005535'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <div className="sp-form-outer sp-force-hide">
        <div
          id="sp-form-233122"
          sp-id="233122"
          sp-hash="06ea0d546f23ec51cc794916a2b242ef76043283fbd88671c9376e7068afaef2"
          sp-lang="pt-br"
          className="sp-form sp-form-regular sp-form-embed"
          sp-show-options="%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onEnter%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A10%2C%22repeat%22%3A3%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22%22%2C%22hideOnMobile%22%3Afalse%2C%22submitRedirectUrl%22%3A%22%22%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22hide%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3Anull%2C%22send%22%3Afalse%7D%7D%2C%22utmEnable%22%3Afalse%7D"
        >
          <div className="sp-form-fields-wrapper">
            <div className="sp-message">
              <div></div>
            </div>
            <form noValidate className="sp-element-container">
              <div
                className="sp-field"
                sp-id="sp-81060800-d756-4158-a627-4e5092fdb340"
              >
                <label className="sp-control-label">
                  <span>Nome</span>
                </label>
                <input
                  type="text"
                  sp-type="name"
                  name="sform[Tm9tZQ==]"
                  className="sp-form-control"
                  placeholder="Nome e Sobrenome"
                  sp-tips="%7B%7D"
                  autoComplete="on"
                />
              </div>
              <div
                className="sp-field"
                sp-id="sp-a3dfaa9b-6599-4a64-982b-8bd8a83e19ea"
              >
                <label className="sp-control-label">
                  <span>Telefone</span>
                </label>
                <input
                  type="tel"
                  sp-type="phone"
                  name="sform[phone]"
                  className="sp-form-control"
                  placeholder="1234567890"
                  sp-tips="%7B%22wrong%22%3A%22Telefone%20errado%22%7D"
                  autoComplete="on"
                />
              </div>
              <div
                className="sp-field"
                sp-id="sp-adb20323-4bb5-4c67-aa9b-27728387a115"
              >
                <label className="sp-control-label">
                  <span>Email</span>
                  <strong>*</strong>
                </label>
                <input
                  type="email"
                  sp-type="email"
                  name="sform[email]"
                  className="sp-form-control"
                  placeholder="Digite seu melhor e-mail"
                  sp-tips="%7B%22required%22%3A%22Campo%20obrigat%C3%B3rio%22%2C%22wrong%22%3A%22E-mail%20errado%22%7D"
                  autoComplete="on"
                  required
                />
              </div>
              <div
                className="sp-field sp-button-container"
                sp-id="sp-6b30e826-1614-4224-9645-80ffb45917ca"
              >
                <button
                  id="sp-6b30e826-1614-4224-9645-80ffb45917ca"
                  className="sp-button"
                >
                  SOLICITAR COTAÇÃO
                </button>
              </div>
            </form>
            <div className="sp-link-wrapper sp-brandname__left"></div>
          </div>
        </div>
      </div>
      <script
        src="//web.webformscr.com/apps/fc3/build/loader.js"
        async
        sp-form-id="06ea0d546f23ec51cc794916a2b242ef76043283fbd88671c9376e7068afaef2"
      ></script>
    </>
  )
}

export default FormSendPulse
