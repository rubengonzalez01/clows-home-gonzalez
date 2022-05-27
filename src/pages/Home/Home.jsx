import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

export default function Home() {

  const title = 'LOS MÁS VENDIDOS';

  return(
    <div className="container d-flex flex-column justify-content-center">
      <ItemListContainer title={ title }/>
    </div>
  );
}