import profileImg from './assets/Profile.png'
function Card() {
    return (
        <div className="card">
            <img className="profileImg" src={profileImg} alt="Imagem de perfil" />
            <h2 className='cardTitle'>Caio Milhomem</h2>
            <p className='cardText'>Desenvolvedor Junior</p>
        </div>
    )
}

export default Card