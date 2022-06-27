import ControlledCarousel from "../../components/Carousel/ControlledCarousel";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import PurchaseOptions from "../../components/PurchaseOptions/PurchaseOptions";

export default function Home() {
  return(
    <>
      <ControlledCarousel />
      <PurchaseOptions />
      <div className="pt-4 pb-5">
        <ItemListContainer />
      </div>
    </>
  );
}