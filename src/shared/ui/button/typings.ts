import {ButtonHTMLAttributes} from "react";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	button: Btn[],
}

export type Btn = {
	title?: string,
	type?: 'button' | 'submit' | 'reset',
	btnClass?: string,
	children: string,
}