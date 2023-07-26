import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Tá na dúvida do que escolher?</h2>
              <p>Cadastre-se e receba mais dicas.</p>
              <form className="form-section">
                <input placeholder="Insira seu email..." name="email" type="email" />
                <input value="Enviar!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
