import React, { useEffect } from 'react';
import Heart from "react-heart"
// import Heart from "react-animated-heart";
import {useState} from 'react';
import {add_restaurant_to_favorite_list, remove_restaurant_from_favorite_list} from  '../hooks/yelp-api/api'
 
export function MyHeart(props) {
    const [active, setActive] = useState(props.rids.map(b => b.rid).includes(props.rid))

    useEffect(() => {
      console.log(props.rids, props.rid);
      setActive(props.rids.map(b => b.rid).includes(props.rid))
    }, [props.rids]);

    const handleHeartClick = (event) => {
      if (!active) {
        add_restaurant_to_favorite_list(props.rid)
      } else {
        remove_restaurant_from_favorite_list(props.rid)
      }
      setActive(!active);
    };

	return (
		<div style={{ width: "2rem", "margin-left": "15px", "align":"right"}}>
		{/* <div style={{"margin-top":"-38px"}}> */}
			<Heart isActive={active} onClick={handleHeartClick}/> &nbsp; &nbsp;
      {/* <Heart isClick={active} onClick={handleHeartClick} /> */}
		</div>
	);
}
