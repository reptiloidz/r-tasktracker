import React from 'react';
import {Button} from "../../../../shared/ui/button/Button";

type Props = {
	title?: string
}

export const Card = ({
	title
}: Props) => {
	return (
		<Button className='columns__item-btn btn btn--xs btn--tertiary'>
			{title || 'Безымянная карточка'}
		</Button>
	)
}
