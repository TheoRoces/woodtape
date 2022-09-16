import * as React from 'react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import Logo from '../../../logo-woodtape.svg';
import MiniLogo from '../../../mini-logo-woodtape.svg';
import './Header.scss';

function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const [time, setTime] = React.useState();

    React.useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleString());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
        <section className="">
            <section className="sectionHeader">
                    <img src={Logo} className='logoHeader'></img>

                <section className="sectionNavigationHeader">

                    <div className='btnMenuBurger' onClick={toggleHamburger}>
                        <div className='barBtnBurger1'></div>
                        <div className='barBtnBurger3'></div>
                    </div>

                </section>
            </section>

            <section className='sectionMenuMobileScroll menuAppMobile'>
                <section className="sectionMenuMobile">
                    <div className="topMenuMobile">
                        <div className='sectionTopTop'>
                            <img src={MiniLogo} className='miniLogoHeader'></img>
                            <div className='separatorMenuMobile'></div>
                            <span className='dateMenu'>{time}</span>
                        </div>
                        <div className="navigationLeftMobile">
                            <div className='divAnimEntry'>
                                <Link to='/' className="linkHeader"  onClick={toggleHamburger}>
                                    Accueil
                                </Link>
                            </div>
                            
                            
                            <div className='divAnimEntry'>
                            <Link to='/evenements' className="linkHeader"  onClick={toggleHamburger}>
                                Evenements
                        </Link>
                        </div>
                        <div className='divAnimEntry'>
                            <Link to='/' className="linkHeader"  onClick={toggleHamburger}>
                                Episodes
                        </Link>
                        </div>
                        <div className='divAnimEntry'>
                            <Link to='/' className="linkHeader"  onClick={toggleHamburger}>
                                News
                        </Link>
                        </div>
                        <div className='divAnimEntry'>
                            <Link to='/' className="linkHeader"  onClick={toggleHamburger}>
                                Radios
                        </Link>
                        </div>
                        <div className='divAnimEntry'>
                            <Link to='/' className="linkHeader"  onClick={toggleHamburger}>
                                Le bar
                        </Link>
                        </div>
                        <div className='divAnimEntry'>
                            <a href='https://tapehouse.upbee.fr' target='_blank' className="linkHeader linkHeaderAccount"  onClick={toggleHamburger}>
                                Mon compte
                        </a>
                        </div>
                        </div>
                    </div>

                    <div className="bottomMenuMobile">
                        <div className="dateMenuMobile">
                            <span dangerouslySetInnerHTML={{ "__html": "&copy;2022" }} />
                        </div>

                        <div className="legalsMenuMobile">
                            <Link to=''  onClick={toggleHamburger}>Mentions légales</Link>
                            <Link to=''  onClick={toggleHamburger}>Politique de confidentialité</Link>
                            <Link to=''  onClick={toggleHamburger}>Conditions générales de vente</Link>
                            <span>Copyright. All rights reserved.</span>
                        </div>
                    </div>
                </section>
            </section>

            <style jsx>{`
                .menuAppMobile {
                    opacity: ${hamburgerOpen ? 1 : 0};
                    transform: ${hamburgerOpen ? 'scale(1)' : 'scale(0)'};
                    transition: ${hamburgerOpen ? '.4s' : '.4s'}
                }

                .barBtnBurger1 {
                    transform: ${hamburgerOpen ? 'translateY(4.8px) rotate(45deg)' : 'translateY(0) rotate(0)'};
                }

                // .barBtnBurger2 {
                //     transform: ${hamburgerOpen ? 'translateX(100%)' : 'translateX(0)'};
                //     opacity: ${hamburgerOpen ? 0 : 1};
                // }

                .barBtnBurger3 {
                    transform: ${hamburgerOpen ? 'translateY(-4.8px) rotate(-45deg)' : 'translateY(0) rotate(0)'};
                }

                .separatorMenuMobile {
                    width: ${hamburgerOpen ? '100%' : '0%'};
                    animation-delay: ${hamburgerOpen ? '.4s' : '.4s'};
                    transition: ${hamburgerOpen ? '.4s' : '.4s'}
                }

                .linkHeader {
                    transform: ${hamburgerOpen ? 'translateY(0%)' : 'translateY(100%)'};
                }

                .divAnimEntry:nth-child(1) .linkHeader {
                    transition-delay: ${hamburgerOpen ? '.4s' : '0s'};
                }

                .divAnimEntry:nth-child(2) .linkHeader {
                    transition-delay: ${hamburgerOpen ? '.5s' : '0s'};
                }

                .divAnimEntry:nth-child(3) .linkHeader {
                    transition-delay: ${hamburgerOpen ? '.6s' : '0s'};
                }

                .divAnimEntry:nth-child(4) .linkHeader {
                    transition-delay: ${hamburgerOpen ? '.7s' : '0s'};
                }

                .divAnimEntry:nth-child(5) .linkHeader {
                    transition-delay: ${hamburgerOpen ? '.8s' : '0s'};
                }

                .divAnimEntry:nth-child(6) .linkHeader {
                    transition-delay: ${hamburgerOpen ? '.9s' : '0s'};
                }

                .divAnimEntry:nth-child(7) .linkHeader {
                    transition-delay: ${hamburgerOpen ? '1s' : '0s'};
                }

                `}
            </style>
        </section>
    )
}

export default Header;