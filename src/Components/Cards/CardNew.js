import { Link } from "react-router-dom";

function CardNew() {
    return (
        <div className='card'>
            <div className='imageSection'>

                <img src='https://axmusic.fr/wp-content/uploads/2014/04/DSC04319.jpg' className='imageSection'></img>
            </div>
            <div className='content'>
                <div className='metas'>
                    <div className='meta'>
                        01.01.01
                            </div>

                    <div className='meta'>
                        NIORT
                            </div>
                </div>
                <h4 className='title'>
                    Lorem Ipsum
                        </h4>
                <span className='excerpt'>
                    Lorem Ipsum dolor sit amet, consectetur gniagniagnia Lorem Ipsum dolor sit amet, consectetur gniagniagnia Lorem Ipsum dolor sit amet, consectetur gniagniagnia Lorem Ipsum dolor sit amet, consectetur gniagniagnia
                        </span>
            </div>
            <section className='tags'>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
                <div className='tag'>
                    House
                        </div>
            </section>
        </div>
    )
}

export default CardNew;