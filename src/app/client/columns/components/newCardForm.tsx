import React, {useState} from 'react';
import {Button} from "../../../../shared/ui/button/Button";

type Props = {
    onAddCard: (title: string) => void;
}
const NewCardForm = ({
    onAddCard
}: Props) => {
    const [formVisible, setFormVisible] = useState(false);
    const [cardTitle, setCardTitle] = useState('');

    const openCardHandler = () => {
        setFormVisible(true);
    }

    const cancelHandler = () => {
        setFormVisible(false);
    }

    const changeTitleHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setCardTitle(event.target.value);
    }

    const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        onAddCard(cardTitle);
    }

    return (
        <React.Fragment>
            { !formVisible && (
                <Button
                    className='btn btn--xs btn--secondary'
                    onClick={ openCardHandler }
                >
                    + Добавить карточку
                </Button>
            ) }

            { formVisible && (
                <form>
                    <div className=''>
                        <textarea
                            className=''
                            value={ cardTitle }
                            placeholder='Введите заголовок для новой карточки'
                            onChange={ changeTitleHandler }
                        />
                    </div>
                    <Button
                        className='btn btn--xs btn--primary'
                        onClick={ submitHandler }
                    >
                        + Добавить карточку
                    </Button>
                    <Button
                        className='btn btn--xs btn--primary'
                        onClick={ cancelHandler }
                    >
                        X
                    </Button>
                </form>
            )}
        </React.Fragment>
    );
};

export { NewCardForm };
