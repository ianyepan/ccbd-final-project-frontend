import React from 'react';
import Heart from "react-heart"
import {useState} from 'react';

export function MyHeart() {
  const [active, setActive] = useState(false)
	return (
		<div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)}/>
		</div>
	);
}
