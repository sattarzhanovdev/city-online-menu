import React from 'react';
import cls from './NavBar.module.scss'
import {Nav_list} from "../Utils";
import {Link} from "react-router-dom";

const NavBar = () => {
	const [ id_nav, setId_nav ] = React.useState(1)
	
	return (
		<div className={cls.navbar}>
			<div className={cls.left}>
				{
					Nav_list.map(({id, title, path}) => (
						<li
							key={id}
							className={id_nav === id ? cls.active : ''}
							onClick={() => setId_nav(id)}
						>
							<Link to={path}>
								{title}
							</Link>
						</li>
					))
				}
			</div>
			<div className={cls.right}>
			
			</div>
		</div>
	);
};

export default NavBar;