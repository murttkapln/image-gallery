import data from "../helper/data";

const Card = () => {
  return (
    <div className="row  d-flex justify-content-between align-items-center m-auto">
      {data.map((user) => {
        const {
          photographer,
          src: { large },
        } = user;
        console.log(user);
        return (
          <div key={large} className="col-12 col-sm-4 col-lg-2  d-flex">
            <div
              className="card gap-2  p-3 border border-0"
            >
              <div className="img-top">
                <img
                  src={large}
                  className="card-img-top"
                  alt="img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title ">{photographer}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
