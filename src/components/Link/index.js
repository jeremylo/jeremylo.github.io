import React from 'react';
import styles from "./styles.module.scss";

export default function Link({ children, ...args }) {
    return <a className={styles.link} target="_blank" {...args}>{children}</a>
}
