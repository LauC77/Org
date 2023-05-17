import "./footer.css"

const Footer=()=>{
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://github.com/LauC77'>
            <img src="/img/github.png"alt='Github' />
        </a>
        <a href='https://www.linkedin.com/in/laura-valentina-ca%C3%B1on-castro/'>
            <img src="/img/linkedin.png" alt='Linkedin' />
        </a>
    </div>
    <img className="footer-logo"src='/img/Logo.png' alt='org' />
    <strong> Laura Cañon &copy; 2023</strong>
</footer>
}
export default Footer