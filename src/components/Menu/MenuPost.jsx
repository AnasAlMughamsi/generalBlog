import React from 'react'
import styles from "./menu.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import { postList } from '@/utilities/posts'

const MenuPost = ({ withImage }) => {

    const noImage = withImage ? styles.contentItem : styles.contentItemNoImage
    return (
        <>
            {postList?.map((item, key) => (
                <Link href="/" className={styles.editorItemContainer} key={key}>
                    {withImage &&
                        <div className={styles.imageContainer}>
                            <Image className={styles.imageEditor} fill src={item.Image} alt='test' sizes='' />
                        </div>
                    }

                    <div className={noImage}>
                        <span className={styles.categoryItem}  style={{backgroundColor: `${item.color}`}}>{item.category}</span>
                        <p className={styles.paragraphItem}>{item.paragraph.substring(0, 80)}</p>

                        <div className={styles.footerItem}>
                            <span className={styles.author}>{item.author}</span>
                            <span>-</span>
                            <span className={styles.date}>{item.date} </span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default MenuPost