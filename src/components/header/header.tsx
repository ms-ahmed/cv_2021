import React, { Fragment } from 'react';

// import { Container } from './styles';
interface ModaleProps {
	modalevar: any;
	setmodalevar: any;
}
const Header: React.FC<ModaleProps> = ({ modalevar, setmodalevar }) => {
	return (
		<header className="header header-footer-style">
			<div className="item-one header-footer-style-item-one">
				<p
					onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void =>
						setmodalevar({ modale: false })
					}
				>
					Mansan S. Ahmed
				</p>
			</div>
			<div className="item-two header-footer-style-item-two"></div>
			<div className="item-three header-footer-style-item-three">
				<p
					onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void =>
						setmodalevar({ modale: false })
					}
				>
					Profile
				</p>
			</div>
		</header>
	);
};

export default Header;
