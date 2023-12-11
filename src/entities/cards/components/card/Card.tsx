import React from 'react';

type Props = {
	title?: string
}

const Card = ({
	title
}: Props) => {
	return (
		<div className='columns__item-widget widget widget--primary widget--interactive'>
			<div>
				<span className='widget__title'>
					{title}
				</span>
			</div>
		</div>
	)
}


export {Card};