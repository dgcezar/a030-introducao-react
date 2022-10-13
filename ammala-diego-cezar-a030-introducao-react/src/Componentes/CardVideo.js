import React from "react";
import InfoUsuario from "./InfoUsuario";
import image1 from "../Imagens/image1.jpg";

export default function CardVideo(props) {
  const usuario = "nome do usuário";
  return (
    <>
      <img src={props.img} alt="" />
      <div className="usuario-box">
        <InfoUsuario usuario={usuario} imagemUsuario={image1}/>
        <h4>{props.titulo}</h4>
      </div>
    </>
  );
}
