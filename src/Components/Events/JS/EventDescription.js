import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../../Context/eventContext';
import '../CSS/evenements.css';



const EventDescription = () => {

	const [iframeOpen, setIframeOpen] = useState(false);

	const toggleIframe = () =>{
		setIframeOpen(!iframeOpen)
	}
	const { events } = useGlobalContext();

	const { id } = useParams();
	console.log(id);

	const filterEvents = events.find((event) => event.id === parseInt(id));
	const { meta, title, link } = filterEvents;

	var none = 'none';
	var block = 'block';


	function displayBilleterie() {
		var oDomElement = document.getElementById("billetterie");
		var displayBilleterie = window.getComputedStyle(oDomElement, null).display;
		if (parseInt.keys(meta.prix_evenement) == "5") {
			console.log('caca');
		  } else {
			oDomElement.style.display = 'block';
	  } ;}

	//   function isEmptyObject(filterEvents){ 
	// 	return JSON.stringify(filterEvents) === '{}' ; 
	// }

	function isEmpty(obj) { 
		return filterEvents.keys(obj).length === 0; 
	}
	
		

	
	return (
		<>
			<section className='sectionPage'>
				<section className='sectionEventDescription'>
					<div className='containerLeftEventDescription'>
					<div className='containerImgEvent'>
						<img src={meta.image_evenement} alt="" />
					</div>
					<span className='divLinkBilletterie' id='billetterie' onClick={toggleIframe}>
						<span className='linkBilletterie'>Billetterie</span>
					</span>
					</div>
					<div className='contentItem' style={{ color: 'white' }}>
						<div className='infosEvent'>
							<span className='dateHourEvent'>
								<div dangerouslySetInnerHTML={{ __html: meta?.date_evenement }} />
								<div className='hourEvent'><span>à</span>
								<div
									dangerouslySetInnerHTML={{ __html: meta?.heure_evenement }}
								/></div>
							</span>
							<span className='localisationEvent'>
								<div dangerouslySetInnerHTML={{ __html: meta?.lieu_evenement }} />
							</span>
						</div>
						<h3>{title.rendered}</h3>
						<div className='excerptEvent'>
							<div dangerouslySetInnerHTML={{ __html: meta?.description_evenement }} />
						</div>
						<div className='tagsEvents'>
							<div dangerouslySetInnerHTML={{ __html: meta.tag_1 }} />
							<div dangerouslySetInnerHTML={{ __html: meta.tag_2 }} />
							<div dangerouslySetInnerHTML={{ __html: meta.tag_3 }} />
						</div>
					</div>
					
				</section>
				
				<section className='sectionIframeBilletterie'>
					<div className='crossQuiteIframeBilletterie' onClick={toggleIframe}>Retourner à l'évènement</div>
					<iframe src={link} target='_blank' className='iframeLinkBilletterie'>
						<span className='linkBilletterie'>Billetterie</span>
					</iframe>
				</section>

				<style jsx>{`
					.sectionIframeBilletterie {
						opacity: ${iframeOpen ? 1 : 0};
						transform: ${iframeOpen ? 'scale(1)' : 'scale(0)'};
					}

					.sectionEventDescription {
						transform: ${iframeOpen ? 'scale(0)' : 'scale(1)'};
						z-index: ${iframeOpen ? 100 : 99};
						position: ${iframeOpen ? 'fixed' : 'initial'};
						overflow: ${iframeOpen ? 'hidden' : 'hidden'};
					}
            	`}</style>

			</section>
		</>
	);
};


export default EventDescription;
