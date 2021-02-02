import React from 'react';
import Post from '../../types/post';

import styles from './PostHeader.module.scss';

type PostHeaderProps = Pick<Post, 'title' | 'date'>;

const PostHeader: React.FC<PostHeaderProps> = ({ date, title }) => (
	<header className={styles.postHeader}>
		<h1 className={styles.postTitle} itemProp="headline">
			{title}
		</h1>
		{/* <p>{date}</p> */}
	</header>
);

export default PostHeader;
