import './Song.css';

const Song = ({title, artist, position, image}) => {

    return (
        <li className="song-item">
            <img src={image} alt="Song artwork" />
            <p>{position}. {title}</p>
            <p id="artist-name">{artist}</p>
        </li>
    )
}

export default Song;