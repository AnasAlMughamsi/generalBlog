// import Image from "next/image";
import styles from "./homepage.module.scss";
import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";
import SubscribeCard from "@/components/subscribeCard/SubscribeCard";
import CarouselUI from "@/components/Carousel/CarouselUI";
// import CardCarousel from "@/components/Carousel/CardCarousel";

export default function Home({ searchParams }) {

  const page = parseInt(searchParams.page) || 1;
  const cate = parseInt(searchParams.cate) || " ";
  console.log("searchParams: ", searchParams)

  return (
    <div>
      <Featured/>
      <SubscribeCard />
      <CarouselUI />
      {/* <CategoryList/> */}
      <div className={styles.content}>
        <CardList page={page} />
        <Menu/>
      </div>
      <SubscribeCard />
    </div>
  );
}
