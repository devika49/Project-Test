import "./topbar.css"
export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i></div>
      <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
      </div>

      <div className="topRightt">
        <img 
          className="topImg"
          src="https://freepngimg.com/thumb/yoga/77633-yoga-wall-decal-vector-sunset-exercise-physical.png"
          alt="" 
          />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      
    </div>
  )
}
