import Btn from "./Btn"

const Navbar = () => {
  return (
    <div className="bg-gray-600 m-0 h-14">

      <div className=" flex justify-between p-2">
        <BrandLogo></BrandLogo>
        <div>

          <Btn btnText={'Sign Up'}></Btn>
          <Btn btnText={'Sign In'}></Btn>
        </div>
      </div>
    </div>
  )
}

function BrandLogo() {
  return (
    <div className="self-center text-white pl-8">
      MECHANIC CODER
    </div>
  )
}


export default Navbar
