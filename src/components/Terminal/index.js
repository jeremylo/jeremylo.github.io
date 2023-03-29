import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './styles.module.scss';


export default function Terminal({ title = "", children, greenLink }) {
  const [visible, setVisible] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.terminal}>
      <div className={classNames(styles.titleBar, { [styles.notCollapsed]: !collapsed })}>
        <span>{title}</span>
        <a className={classNames(styles.windowButton, styles.redButton)} onClick={() => setVisible(false)}></a>
        <a className={classNames(styles.windowButton, styles.yellowButton)} onClick={() => setCollapsed(c => !c)}></a>
        <a href={greenLink} target="_blank" className={classNames(styles.windowButton, styles.greenButton)}></a>
      </div>
      {!collapsed && <div className={styles.terminalContent}>
        {children}
      </div>}
    </div>
  );
}
