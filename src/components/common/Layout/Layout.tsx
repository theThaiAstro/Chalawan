import React from 'react';

import styles from './Layout.module.scss';
import Header from '../Header/Header';

interface LayoutProps {
	children?: JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<div className={styles.layoutWrapper}>
		{/* <Header /> */}

		<main>{children}</main>

		<footer style={{ height: '8rem'}}></footer>
	</div>
);

export default Layout;
