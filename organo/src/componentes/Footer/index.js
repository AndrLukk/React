import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='redesSociais'>
                <div>
                <a target='_blank'>
                    <img src='/imagens/fb.png' alt='Facebook'/>
                    </a>
                </div>
                <div>
                <a target='_blank'>
                    <img src='/imagens/tw.png' alt='Twitter'/>
                    </a>
                </div>
                <div>
                    <a target='_blank'>
                    <img src='/imagens/ig.png' alt='Instagram'/>
                    </a>
                </div>
            </div>
            <div>
                <img src='/imagens/logo.png' alt='Logo Footer' />
            </div>
            <div>
                <h2>Desenvolvido por Alura</h2>
            </div>
        </div>
    )
}

export default Footer