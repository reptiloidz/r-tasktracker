import React, {useState} from 'react';
import {Button} from "../../../../shared/ui/button/Button";

type Props = {
    onAddCard: (title: string) => void;
}

const validateTitle = (title: string): string => {
    if (title) {
        const cleanTitle = title.trim();
        if (cleanTitle.length === 0) {
            return 'Введите название'
        }

        if (cleanTitle.length < 3) {
            return 'Название должно быть не менее 3х символов'
        }
    }

    return 'Введите название'
}

const NewCardForm = ({
    onAddCard
}: Props) => {
    const [formVisible, setFormVisible] = useState(false);
    const [cardTitle, setCardTitle] = useState('');
    const [error, setError] = useState<string>('');

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

        const checkTitle = validateTitle(cardTitle);

        return onAddCard(cardTitle);
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
                        { error && <span>{error}</span> }
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
