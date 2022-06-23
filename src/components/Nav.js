import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
        <h1>Rep Notes</h1>
        <nav>
            {/* <Link to='/repnotes'> Home </Link> */}
            <Link to='/repnotes/dashboard'> Dashboard </Link>
            <Link to='/repnotes/newworkout'> New Workout! </Link>
            <Link to='/repnotes/about'> About </Link>
        </nav>
        </>
    )
}

export default Nav