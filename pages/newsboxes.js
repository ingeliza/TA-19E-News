import React, { useState } from "react";
import styles from '../styles/boxes.module.css'
import Image from 'next/image'
import "antd/dist/antd.css";

//logo header
//nav content
//footer

function newsboxes() {
    return (
        <div className={styles.container}>
            <div className={styles.mainNews}>'
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum</h2>
            </div>
            <div className={styles.news}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum 1</h2>
            </div>
            <div className={styles.news1}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem Ipsum 2</h2>
            </div>
            <div className={styles.news2}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum 3</h2>
            </div>
            <div className={styles.news3}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum 4</h2>
            </div>
            <div className={styles.news2}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum 5</h2>
            </div>
            <div className={styles.news3}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum 6</h2>
            </div>
            <div className={styles.news2}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum 7</h2>
            </div>
            <div className={styles.news3}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum 8</h2>
            </div>
            <div className={styles.news2}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum 9</h2>
            </div>
            <div className={styles.news3}>
                <img width={200} height={200} src="pages/Cat.jpg"/>
                <h2>Lorem ipsum 10</h2>
            </div>
        </div>
    );
}

export default newsboxes;
