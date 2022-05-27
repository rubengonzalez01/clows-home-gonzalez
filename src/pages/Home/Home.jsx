import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

export default function Home() {

  const title = 'LOS MÁS VENDIDOS';

  return(
    <div className="py-4">
      <ItemListContainer title={ title }/>
    </div>
  );
}