import { Link } from "react-router-dom"

const SidePanel = () => {
  const topList = ['Projects', 'Portfolio', 'Achievements', 'AboutMe']
  const bottomList = ['AddData', 'Timetable']
  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div>
          {topList.map((link) => {
            return (
              <SideLink heading={link} key={link}></SideLink>
            )
          })}
        </div>
        <div className="mb-5">
          {bottomList.map((link) => {
            return (
              <SideLink heading={link} key={link}></SideLink>
            )
          })}
        </div>
      </div>
    </>

  )
}

function SideLink(props) {
  return (
    <Link to={props.heading}>
      <div className="w-full hover:bg-gray-100 p-4 pl-[25%] ">
        <h1>{props.heading}</h1>
      </div>
    </Link>
  )
}

export default SidePanel
