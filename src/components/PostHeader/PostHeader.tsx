import React from 'react';
import Post from '../../types/post';

type PostHeaderProps = Pick<Post, 'title' | 'date'>;

const PostHeader: React.FC<PostHeaderProps> = ({ date, title }) => (
	<header>
		<h1 itemProp="headline">{title}</h1>
		<p>{date}</p>
	</header>
);

export default PostHeader;
