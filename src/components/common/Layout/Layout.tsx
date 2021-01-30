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

		<footer>
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.com">Gatsby</a>
		</footer>
	</div>
);

export default Layout;
