import {ButtonHTMLAttributes} from "react";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string,
	btnClass?: string,
	children?: string,
}
