import React, {useState} from 'react';
import {Button} from "../../../shared/ui/button/Button";
import {Board} from "../boards/components/board/typings";
import {Card} from "../cards/Card";
import { NewCardForm } from "./components/newCardForm";
import {database} from "../../firebase";

type Props = {
    column: {
        id: string;
        title: string;
        relatedTo?: Board['id'];
    };
}

const ColumnComponent = ({ column }: Props) => {
    const [cards, setCards] = useState<string[]>([]);
    const formSubmit = async (title: string) => {
        await database.ref('cards').push({
            relatedTo: column.id, // todo
            title,
        }).catch(alert);
        setCards((prev) => [...prev, title])
    }

    return (
        <div className='widget widget--primary'>
            <h2 className='widget__title'>{ column.title }</h2>
            { cards.map((card, index) => <Card key={ index } title={ card } />) }
            <NewCardForm
                onAddCard={ formSubmit }
            />
        </div>
    );
};

export { ColumnComponent };
