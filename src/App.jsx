import Card from "./components/Card";

function App(props) {
  const datas = {
    0:{
      "image":"http://placekitten.com/g/300/200",
      "title":"The first Post",
      "date":"Published 06 Feb,2020"
    },
    1:{
      "image":"http://placekitten.com/300/200",
      "title":"The first Post",
      "date":"Published 06 Feb,2020"
    },
    2:{
      "image":"http://placekitten.com/g/300/200",
      "title":"The first Post",
      "date":"Published 06 Feb,2020"
    },
  }

  return (
    <>
      <div className="py-4">
        <h1 className="px-5">The Posts</h1>
        <hr />
        <div className="container">
          <div className="row">
            {
              Object.keys(datas).map((index)=>(
                <div className="col-md-4" key={index}>
                  <Card image={datas[index].image} title={datas[index].title} date={datas[index].date}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}


export default App