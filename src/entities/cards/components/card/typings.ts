import {Column} from "../../../columns/pages/column-collection/typings";

export interface CardProps {
	cards: Card[];
	isLoading: boolean;
}

export type Card = {
	id?: string;
	title: string;
	relatedTo?: Column['id'];
	key: string;
}