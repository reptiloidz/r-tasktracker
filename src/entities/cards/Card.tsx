import React from 'react';
import {Button} from "../../shared/ui/button/Button";

type Props = {
    title?: string
}
export const Card = ({ title }: Props) => {
    return (
        <Button className='btn btn--xs btn--tertiary'>
            { title || 'Карточка'}
        </Button>
    )
}
