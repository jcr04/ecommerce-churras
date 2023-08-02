import Footer from "./../components/Footer";
import Header from "./../components/Header";
import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
import '../components/parceiro.css'


export default function parceiro(){
    return(
        <>
            <Header/>
            <div className="main-ca">
              
                <h1 className="par-h1">Central BRF</h1>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={img1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div className="parc-desc">
            <p>Caso tenha um Restaurante / Mercado / Loja / Delivery / Rede de alimentação, tenha CNPJ e queira ter acesso aos produtos da BRF (Sadia, Perdigão) para incluir nos seus negócios, é bem simples, preencha o formulário <a href="https://www.brf-global.com/novos-clientes/" className="link-d" target="blank">clicando aqui</a>, que logo entraremos em contato:</p>
            </div>
            </div>
           
          
            <Footer/>
            </>
    )
}