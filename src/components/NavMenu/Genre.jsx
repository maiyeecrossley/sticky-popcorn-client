import styles from '../NavMenu/Nav.module.css'

export default function Genre() {

    return (
        <div className="dropdown">
        <button className="dropdown-toggle" onClick={handleGenre}>Select Genre</button>
        <div className="dropdown-menu">
            <label><input type="checkbox" value="Action" /> Action</label>
            <label><input type="checkbox" value="Adventure" /> Adventure</label>
            <label><input type="checkbox" value="Biography" /> Biography</label>
            <label><input type="checkbox" value="Comedy" /> Comedy</label>
            <label><input type="checkbox" value="Crime" /> Crime</label>
            <label><input type="checkbox" value="Drama" /> Drama</label>
            <label><input type="checkbox" value="Fantasy" /> Fantasy</label>
            <label><input type="checkbox" value="History" /> History</label>
            <label><input type="checkbox" value="Horror" /> Horror</label>
            <label><input type="checkbox" value="Mystery" /> Mystery</label>
            <label><input type="checkbox" value="Romance" /> Romance</label>
            <label><input type="checkbox" value="Thriller" /> Thriller</label>
            <label><input type="checkbox" value="Sci-Fi" /> Sci-Fi</label>
            <label><input type="checkbox" value="War" /> War</label>
        </div>
    </div>
    )
}