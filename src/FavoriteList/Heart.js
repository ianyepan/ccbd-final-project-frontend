import React from 'react';
import Heart from "react-heart"
import {useState} from 'react';
import {add_restaurant_to_favorite_list, remove_restaurant_from_favorite_list} from  '../hooks/yelp-api/api'
 
export function MyHeart(props) {
    const [active, setActive] = useState(props.is_active)

    const handleHeartClick = (event) => {
      console.log('get_rid: ', props.rid)
      if (!active) {
        add_restaurant_to_favorite_list(props.rid)
      } else {
        remove_restaurant_from_favorite_list(props.rid)
      }
      setActive(!active);
    };

	return (
		<div style={{ width: "2rem", "margin-left": "25px"}}>
			{/* <Heart isActive={active} onClick={() => setActive(!active)}/> */}
			<Heart isActive={active} onClick={handleHeartClick}/>
		</div>
	);
}
