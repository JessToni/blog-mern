export default function Post() {
    return(
        <div className="post">
        <div className="image">
          <img src="https://keegomobility.com/wp-content/uploads/2021/01/green-transportation-electric-car.png" alt="Electric Car"/>
        </div>
        <div className="text">
          <h2>Green Transportation is the Key</h2>
          <p className="info">
            <a className="author">Jess Antoni Mosquera</a>
            <time>2023-08-11 22:21</time>
          </p>
          <p className="summary" >Green transportation is any means of travel that doesn’t negatively impact the environment.</p>
        </div>
      </div>
    );
}