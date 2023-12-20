import React from 'react';
import { DropdownProps } from './typings';

const Dropdown = ({ options, onChange, value }: DropdownProps) => {
	return (
		<select value={value} onChange={onChange}>
			{
				//todo type
				options.map(option => (
					<option key={option.id} value={option.id}>
						{option.title}
					</option>
				))
			}
		</select>
	);
};

export { Dropdown };
