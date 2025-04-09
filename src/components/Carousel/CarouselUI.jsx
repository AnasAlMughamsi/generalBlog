"use client"

import React, { useEffect, useRef, useState } from 'react'
import styles from './card-carousel.module.scss'
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import useSWR from 'swr'
import moment from 'moment'



const getPosts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/posts", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }
        return res.json();
    } catch (err) {
        console.log("Error fetching posts:", err);
        return { posts: [] }; // Return empty array to prevent errors
    }
};


const CarousalUI = () => {


    const [posts, setPosts] = useState([]);
    const [defaultImageUrl, setDefaultImageUrl] = useState("/images/default.jpg");
    const swiperRef = useRef(null);

    const showNextImage = () => {

        // setCarouselItems(prevItems => [...prevItems.slice(1), prevItems[0]]);
        setCarouselItems((prevItems) => {
            let updatedItems = [...prevItems];
            let firstCard = updatedItems.shift();
            updatedItems.push(firstCard);
            return updatedItems;
        });
    };

    const showPrevImage = () => {

        // setCarouselItems(prevItems => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
        setCarouselItems((prevItems) => {
            let updatedItems = [...prevItems];
            let lastCard = updatedItems.pop();
            updatedItems.unshift(lastCard);
            return updatedItems;
        });
    };

    const shifingCards = () => {
        if (movingClass === 'prev') {
            setCardList([...carouselItems, firstCard]);
            carouselItems.splice(carouselItems.length, 0, firstcard);
        } else if (movingClass === 'next') {
            let lastcard = carouselItems.pop();
            setCardList([lastcard, ...carouselItems]);
        }
        setMovingClass('')
    }



    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data.posts || []); // Ensure posts is always an array
        };

        fetchPosts();
    }, []); // Empty dependency array ensures it runs once when component mounts

    console.log("Fetched posts inside CardCarousel:", posts);



    return (
        <div className={styles.container}>

            <div className={styles.buttonContainer}>
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className={styles.next}
                >
                    <FaArrowLeftLong size={25} color='#b49f8e' />
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className={styles.prev}>

                    <FaArrowRightLong size={25} color='#b49f8e' />
                </button>
            </div>

            <div className={styles.carousel}>
                <h1>Recent Artical</h1>

                <Swiper
                    id="swiper"
                    slidesPerView={3}
                    spaceBetween={10}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        1500: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                // loop={true}

                >
                    {posts?.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.card} >

                                <Image src={`/images/${item.img ? item.img : "default.jpg"}`} alt='image-hero'
                                    className={styles.image} width={450} height={400}
                                    onError={() => {
                                        defaultImageUrl;
                                    }}
                                />
                                <div className={styles.cardContent}>
                                    <span className={styles.category}>{item.categorySlug}</span>
                                    <h1>{item.title}</h1>
                                    <span className={styles.date}>{moment(item.createdAt).format("LL")}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>


        </div >
    )
}

export default CarousalUI