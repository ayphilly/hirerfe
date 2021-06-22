import "./feedback.scss"
import Singlefeed from "./singlefeedback"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect, useRef} from 'react'
import {TweenLite, Power3} from 'gsap'
function Feedback() {

    let testimonialList = useRef(null);
    const testimonialWidth = 820;
    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    });

    useEffect(() => {
        TweenLite.to(testimonialList.children[0], 1, {
            opacity:1
        })
    }, [])


    const slideLeft = (index, duration, multiplied=1) => {
        TweenLite.to (testimonialList.children[index], duration, {
            x: -testimonialWidth * multiplied,
            ease: Power3
        })

    }

    const slideRight = (index, duration, multiplied = 1) => {
        TweenLite.to(testimonialList.children[index], duration, {
          x: testimonialWidth * multiplied,
          ease: Power3.easeOut
        });
    };

    const scale = (index, duration) => {
        TweenLite.from (testimonialList.children[index], 1, {
            scale: 1.4,
            ease: Power3
        })
    }

    const nextSlide = () => {
        if (testimonialList.children[0].classList.contains('active')) {
            setState({isActive1:false, isActive2:true});

            slideLeft(0, 1,1);
           
            slideLeft(1, 1,1);
            scale(1,1);

            slideLeft(2, 1,1);
            slideLeft(2, 0,1);
            

        } else if (testimonialList.children[1].classList.contains('active')) {
            setState({isActive2:false, isActive3:true});
            slideRight(0, 1);

            slideLeft(1, 1, 2);

            slideLeft(2, 1, 2);
            scale(2, 1);
        } else if (testimonialList.children[2].classList.contains('active')) {
            setState({isActive3:false, isActive1:true});
            slideLeft(2, 1, 3);

            slideLeft(0, 1,0);

            slideLeft(1, 0, 0);
            scale(0, 1);
        }
    }

    const prevSlide = () => {
        if (testimonialList.children[0].classList.contains("active")) {
          setState({ isActive1: false, isActive3: true });
          //Image transition
          slideLeft(2, 0, 3);
          slideLeft(2, 1, 2);
          scale(2, 1);
          slideRight(0, 1);
          slideRight(1, 1);
          
        } else if (testimonialList.children[1].classList.contains("active")) {
          setState({ isActive2: false, isActive1: true });
          //Image transition
          slideLeft(0, 0);
          slideRight(0, 1, 0);
          slideRight(1, 1, 0);
          slideRight(2, 1, 2);
          scale(0, 1);
          
        } else if (testimonialList.children[2].classList.contains("active")) {
          setState({ isActive2: true, isActive3: false });
          slideLeft(2, 1);
          slideLeft(1, 0, 2);
          slideLeft(1, 1);
          scale(1, 1);
         
        }
      };


     return (
         <div className="feedback-container">
             <div className="feedback-inner">
                 <div className="feedback-top">
                     <p>Talents Feedback</p>
                     <p>Having spoken to some of our students, listen to what they have to say.</p>
                 </div>

                 <div className="feedback-carousel">
                     <div className="arrow-left" onClick={prevSlide}>
                        <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-icon" size="2x"/>
                     </div>
                 
                    <div className="t-carousel">
                        <ul ref={ el => (testimonialList = el ) } >
                            <li className={state.isActive1 ? "active" : '' }> <Singlefeed name="tunde" company="SoftCom" /> </li>
                            <li className={state.isActive2 ? "active" : '' }> <Singlefeed name="Chika" company="Coven Works"/></li>
                            <li className={state.isActive3 ? "active" : '' }> <Singlefeed name="Ahmed" company="Microsoft"/></li>
                        </ul>

                    </div>
                    <div className="arrow-right" onClick={nextSlide}>
                        <FontAwesomeIcon icon={faArrowRight} className="arrow-right-icon" size="2x"/>
                    </div>
                    
                 </div>

                 


             </div>

         </div>
     )
}

export default Feedback;