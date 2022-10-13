import React from "react";

export default function InfoUsuario(props) {
  return (
    <>
      <img id="usuario-imagem" src={props.imagemUsuario} alt="" />
      <h3>{props.usuario}</h3>
    </>
  );
}
