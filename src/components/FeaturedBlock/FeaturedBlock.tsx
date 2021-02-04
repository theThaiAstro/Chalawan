import React from 'react';

import styles from './FeaturedBlock.module.scss';

interface FeaturedBlockProps {
}

const FeaturedBlock: React.FC<FeaturedBlockProps> = ({}) => (
	<div className={styles.featuredBlock}>
		<h1 className={styles.title}>
			คืนนี้ห้ามพลาด! ฝนดาวตกกลุ่มดาวสิงโต เยอะที่สุดในรอบ 999 ปี!!!
		</h1>
	</div>
);

export default FeaturedBlock;
