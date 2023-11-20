import React from 'react';
import {DropdownProps} from "./typings";

const Dropdown = ({options, onChange, value}: DropdownProps) => {
	return (
		<select
			value={value}
			onChange={onChange}
		>
			{
				options.map(
					(option: any) =>
						<option
							key={option.id}
							value={option.id}
						>
							{option.title}
						</option>
				)
			}
		</select>
	);
};

export {Dropdown};