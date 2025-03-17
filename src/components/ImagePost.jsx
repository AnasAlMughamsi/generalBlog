import React from 'react'

export const ImagePost = ({ img }) => {

    const [imageSrc, setImageSrc] = useState(`/images/${item.img || "default.jpg"}`);

    return (
        <Image
            src={img}
            alt="image-hero"
            className={styles.image}
            width={450}
            height={400}
            onError={() => setImageSrc('/images/default.jpg')} // Set fallback image on error
            unoptimized // (Optional) Avoid Next.js automatic optimization if images are local
        />
    )
}
