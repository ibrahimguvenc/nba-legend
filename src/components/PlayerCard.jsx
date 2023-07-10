import { useState } from "react";

const PlayerCard = (item) => {
  const { name, img, statistics } = item;
  const [visible, setVisible] = useState(false);
  // const [visibleImg, setVisibleImg] = useState(false);

  // {
  //   data.statistics.map((items) => {
  //     statistics{...items}
  //   });
  // }
  return (
    <div className="player">
      <div
        className="player-card h-75"
        onClick={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <div>
          <div className="image">
            <div className="statistics">
              {visible && (
                <p>
                  {statistics.map((stc) => (
                    <p>🏀 {stc}</p>
                  ))}
                </p>
              )}
            </div>

            <img
              src={img}
              alt=""
              style={{ display: !visible ? "block" : "none" }}
            />
          </div>
        </div>

        <div className="name">
          <h3> {name} </h3>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
