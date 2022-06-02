import ControlledCarousel from "../../components/Carousel/ControlledCarousel";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import PurchaceOptions from "../../components/PurchaceOptions/PurchaceOptions";

export default function Home() {

  const title = 'LOS MÁS VENDIDOS';

  return(
    <>
      <ControlledCarousel />
      <PurchaceOptions />
      <div className="pt-4 pb-5">
        <ItemListContainer title={ title }/>
      </div>
    </>
  );
}