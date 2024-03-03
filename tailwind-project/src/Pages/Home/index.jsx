import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home(){
  return(
    <Layout>
    <Card food="Pasta" imageUrl="https://i.pinimg.com/564x/4c/34/f0/4c34f0e70d69de7ca67c61cc6457d0b1.jpg" title="pasta-food" grade="4.8" restaurant="Italian House" price="COP 50000" />

    <Card title ="Asian Food" food = "Sushi" imageUrl="https://www.orientalmart.co.uk/images/news/220/small/1668694504-023368200.jpg" restaurant="Asiatic House" price="COP100000"  />
    </Layout>
  )
}

export default Home
