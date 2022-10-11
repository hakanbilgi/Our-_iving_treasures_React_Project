import "./Main.css"

const Main = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      {data.map((item) => {
        const { id, name, job, comment, img } = item;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="img" />
           
            </div>
          
        );
      })}
    </div>
  );
};

export default Main