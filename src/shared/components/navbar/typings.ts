export interface NavbarProps {
	navs: NavLinks[];
}

export type NavLinks = {
	id: string;
	text: string;
	link: string;
}