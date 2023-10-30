export interface ButtonComponentProps {
	title?: string,
	type?: 'button' | 'submit' | 'reset',
	btnText: string,
	btnClass?: string,
	props?: string[],
}