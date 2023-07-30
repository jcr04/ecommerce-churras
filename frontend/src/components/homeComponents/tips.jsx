import img from '../../imgs/Icone.png'
import '../homeComponents/tips.css'
import Modal from '../Modal';
import { useState } from 'react';

export default function Tips(){

  const [openModal,setOpenModal] = useState(false)
  const [telaModalh2,settelaModal] = useState()
  const [telaModalp,settelaModalp] = useState()

  var Armazenando = "Carnes resfriadas duram por volta de 30-45 dias em geladeira que esteja a 0ºc.A geladeira de casa fica a temperatura média de 5-7ºc.Por isso, as carnes que você comprar só irão durar,no máximo, três dias. Quatro, se ficar na parte mais gelada.Se você comprou uma carne resfriada e não usouneste período, pode congelar. Porém, apenas uma vez,por no máximo 90 dias."
  var Descongelando ='A melhor maneira de descongelar uma peça de carne é colocando na geladeira por 24 horas. Com isso, ela vai perder menos suco, mantendo as qualidades Se você não tiver tempo, não se preocupe! Pode pegar um recipiente com bastante agua à temperatura ambiente e submergir a peça inteira ainda embalada. Troque a água umas duas vezes ou mais, dependendo do tamanho da peça. O tempo de descongelamento é de 1 hora para peças pequenas a 3 horas para muito grandes, como um pernil de cordeiro.Vale lembrar que esse procedimento não é o mais aconselhável,já que haverá maior perda de suco interno.Jamais descongele a carne no sol. O sangue vai se aquecer, trazendo um gosto desagradável. Se você tem uma peça muito grande e só quer utilizar metade, abra o pacote a vácuo, parta a carne ainda congelada, envolva por várias vezes  a parte remanescente com papel filme e retorne ao freezer.'
  var PréGrelha = "Retire a carne da embalagem a vácuo, corte seus pedaços da maneira que quiser e reserve por alguns poucos minutos.Se for grelhar, sempre corte os bifes com pelo menos 2 dedos (4cm) de espessura. Se cortar menor, há grandes chances de sair um bife bem passado. Não salgue a carne antecipadamente. O sal só entra imediatamente antes da carne ir para a grelha ou depois de pronta. A tábua de corte pré-grelha não deve ser utilizada para cortar as carnes já prontas. Se for utilizar a mesma tábua, lave antes de cortar a carne já pronta. Não se esqueça de acender seu carvão 30-40 minutos antes de começar a assar. Carne não se faz com labaredas, se faz com calor. Se tiver uma churrasqueira a gás, ou estiver fazendo numa frigideira ou chapa, aqueça bem antes de preparar a carne. Sal em excesso faz mal e tira o gosto da carne. Para peças grelhadas, utilize o sal triturado (ou o fino, caso deseje salgar a carne depois de pronta). "
  var Assando = "Sempre comece acendendo seu fogo 30-40 minutos antes de grelhar ou assar qualquer carne. Se for fazer numa frigideira ou chapa, aqueça bem antes de preparar. Com a grelha colocada no lugar, coloque a palma da sua mão sobre ela e espere. Você tem que aguentar, no máximo, 5 segundos. Se aguentar 3 segundos, o fogo está muito quente: você vai queimar a carne por fora e ela ficará crua por dentro.Se aguentar 7 segundos, o fogo está fraco: irá cozinhar a carne. Ao colocar a carne numa grelha, ela deve fazer aquele barulho de ovo frito. Carnes maiores  devem ser colocadas mais distantes da brasa. Para saber o ponto da carne, dê uma “cutucada” na peça com a ponta do seu indicador. Se a carne estiver com uma consistência mole, está mal passada. Se estiver resistente, estará mais bem passada. Utilize a regra dos dedos: gostamos de retirar a carne do fogo e colocar para descansar por 2-3 minutos. Isso ajuda a ficar mais suculenta."

 
  
 
    return(
      
        <section className="conteudo-dicas">
            <span className='span-title'> <span className='bbq'>BBQ</span><span className='dicas'> DICAS</span> <img src={img} className='img-dicas' /></span>
            <div>
                <a href="" className="" onClick={(e)=>{e.preventDefault(); settelaModal("Armazenando"); settelaModalp(Armazenando); if(openModal==false){setOpenModal(true)}else{setOpenModal(false)}}}>Armazenando</a>
                <a href="" className="" onClick={(e)=>{e.preventDefault(); settelaModal("Descongelando"); settelaModalp(Descongelando); if(openModal==false){setOpenModal(true)}else{setOpenModal(false)}}}>Descongelando</a>
                <a href="" className="" onClick={(e)=>{e.preventDefault(); settelaModal("Pré-Grelha"); settelaModalp(PréGrelha); if(openModal==false){setOpenModal(true)}else{setOpenModal(false)}}}>Pré-Grelha</a>
                <a href="" className=""onClick={(e)=>{e.preventDefault(); settelaModal("Assando"); settelaModalp(Assando); if(openModal==false){setOpenModal(true)}else{setOpenModal(false)}}}>Assando</a>
            </div>
            <Modal isOpen={openModal} setOpenModal={()=>{setOpenModal(!openModal)}} content={<div className='dv-modal-inte'><h2 className='title-modal'>{telaModalh2}</h2><p>{telaModalp}</p></div>}></Modal>
        </section>
    )
}