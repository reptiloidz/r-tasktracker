import React from 'react';

export interface BtnProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	title?: string;
	btnClass?: string;
	children?: string;
}
