function VerificarBomDia(Props) {
  const isBomDia = Props.diaOuNoite;

  function BomDia() {
    return <h1>Bom dia!!!</h1>;
  }
  function BoaNoite() {
    return <h1>Boa noite!!!</h1>;
  }

  return (
    <>
      <div className="fundo">
        {isBomDia === true ? <BomDia /> : <BoaNoite />}
      </div>
    </>
  );
}

export default VerificarBomDia;
