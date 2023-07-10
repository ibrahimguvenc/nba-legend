import { useEffect, useState } from "react";
import { data } from "../helper/data.js";
import PlayerCard from "./PlayerCard.jsx";
import "../sass/CardContainer.scss";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState(data);
  console.log("info", info);

  useEffect(() => {
    if (search) {
      console.log("search", search);
      let a = data.filter((item) => item.name.includes(search));
      console.log(a);
      setInfo(a);
    }
  }, [search]);
  // console.log(data);
  console.log("search", search);
  return (
    <div className="cards">
      <div className="card-input">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) =>
            setSearch(
              e.target.value.charAt(0).toLocaleUpperCase() +
                e.target.value.slice(1).toLowerCase()
            )
          }
          className="form-control w-50 p-2"
        />
      </div>
      <div className="card-container">
        {info.map((item) => (
          <PlayerCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
