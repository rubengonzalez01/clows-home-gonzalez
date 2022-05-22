import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

export default function Home() {

  const hello = `Hola bienvenido a Clow's Home. Próximamente tendremos nuestro catálogo disponible.`;

  return(
    <>
      <h1>Home is working...</h1>
      <ItemListContainer greeting={ hello }/>
    </>
  );
}