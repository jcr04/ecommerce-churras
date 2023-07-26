import React from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import products from "../data/Products";

const SingleProduct = ({ match }) => {
  const  product = products.find((p) => p._id === match.params.id);  

  return (
    <>
      <Header />
      <div className="container single-product"> 
        <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
              <p>{product.description}</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Valor</h6>
                      <span>${product.price}</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Disponibilidade</h6>
                      {product.countInStock > 0 ? (
                        <span>em estoque</span>
                      ) : (
                        <span>sem estoque</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Avaliações</h6>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />
                    </div>
                    {product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantidade</h6>
                          <select>                            
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                          </select>
                        </div>
                        <button className="round-black-btn">adicionar</button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">AVALIAÇÕES</h6>                
                  <Message variant={"alert-info mt-3"}>...</Message>              
                  <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">                  
                    <strong>Admin TEST</strong>
                    <Rating/>
                    <span>April 04 2023</span>
                    <div className="alert alert-info mt-3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting 
                      industry. Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s, when an unknown printer took a galley
                      of type and scrambled it to make a type specimen book
                    </div>
                  </div>                
                </div>
                <div className="col-md-6">
                <h6>ESCREVA SUA AVALIAÇÃO</h6>
                <div className="my-4"></div>
                 
                  <form>
                    <div className="my-4">
                      <strong>Avaliação</strong>
                      <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                        <option value="">Selecione...</option>
                        <option value="1">1 - Ruim</option>
                        <option value="2">2 - Razoável</option>
                        <option value="3">3 - Boa</option>
                        <option value="4">4 - Muito boa</option>
                        <option value="5">5 - Excelente</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>Comentário:</strong>
                      <textarea
                        row="3"                       
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button className="col-12 bg-black border-0 p-3 rounded text-white">
                        ENVIAR
                      </button>
                    </div>
                  </form>                
                  <div className="my-3">
                    <Message variant={"alert-warning"}>
                      Entre com{" "}
                      <Link to="/login">
                        " <strong>Login</strong> "
                      </Link>{" "}
                      para escrever sua avaliação.{" "}
                      </Message>
                  </div>
                      
            </div>
                      
        </div>                 
              
      </div>
    </>                
                  
  );                           
};
export default SingleProduct;
