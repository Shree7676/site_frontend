const data =[
    {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5bF4kx3gVICvk0XGzhOZO4eTzJ7qpLeNPUyyhFoNGFZ7xGvqeMvRzCHKyEAiMlow2SQ&usqp=CAU',
    heading:'Hackathon',
    description:'lorem jsodijf pisfj posif aposjf  oihg ncxv'
  }, {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5bF4kx3gVICvk0XGzhOZO4eTzJ7qpLeNPUyyhFoNGFZ7xGvqeMvRzCHKyEAiMlow2SQ&usqp=CAU',
    heading:'Hackathon',
    description:'lorem jsodijf pisfj posif aposjf  oihg ncxv'
  },{
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5bF4kx3gVICvk0XGzhOZO4eTzJ7qpLeNPUyyhFoNGFZ7xGvqeMvRzCHKyEAiMlow2SQ&usqp=CAU',
    heading:'Hackathon',
    description:'lorem jsodijf pisfj posif aposjf  oihg ncxv'
  },{
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5bF4kx3gVICvk0XGzhOZO4eTzJ7qpLeNPUyyhFoNGFZ7xGvqeMvRzCHKyEAiMlow2SQ&usqp=CAU',
    heading:'Hackathon',
    description:'lorem jsodijf pisfj posif aposjf  oihg ncxv'
  }
]
const Portfolio = () => {
  const mainHeadidng = ['Certificates','Projects','Videos']
  return (
    <div>
    {mainHeadidng.map((item)=>{
      <CardDiv key={item} mainHead={item}/>
    })}
    </div>
  )
}

function CardDiv(props){
  const [mainHead] = props
  return(
    <>
    <div className=" bg-slate-300 m-2 p-2 rounded-xl">
      <CardHeading mainHead={mainHead}></CardHeading>
      <div className="flex justify-evenly">
          {data.map((obj)=>{
              return(
                <Card key={obj.heading} image={obj.image} heading={obj.heading} description={obj.description}/> 
              )
            })
          }
      </div>
    </div>
    </>
  )
}

function CardHeading(props){
  const [mainHead] = props
  return(
    <>
      <h1 className="h-14 text-center text-2xl underline underline-offset-4">{mainHead}</h1>
    </>
  )
}
function Card(props){
  const {image,heading,description} = props
  return(
    <>
      <div className="m-2 p-2">
        <img src={image} alt="" className="border border-black" />
        <h1>{heading} </h1>
        <p>{description}</p>
    </div>
    </>
  )
}
export default Portfolio
