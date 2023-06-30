// Hooks
import { useRef, useEffect } from 'react';
// Styles
import '../../utils/styles/Contact.css';


function Contact() {

    const iframeRef = useRef(null);

    useEffect(() => {
        if(iframeRef.current) {
            iframeRef.current.setAttribute('frameborder', '0');
            iframeRef.current.setAttribute('marginwidth', '0');
            iframeRef.current.setAttribute('marginheight', '0');
        };
    }, []);

    return (

        <main>

           <div className='contact__text'>
                <h2 className='contact__text__title'>Envie de me contacter ? <br />Alors n'attendez plus ! Envoyez moi un email !</h2>
           </div>

           <section className='contact'>
              
        <div className='contact__div__iframe'>

           <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScLb5QejAATHq7o2bzpxlq9aMqf3bPpVr6UNUcm-WPnEoFdyg/viewform?embedded=true" width="100%" height="100%" ref={iframeRef} title='Formulaire de contact'>Chargement…</iframe>
        </div>
         

           </section>

        </main>
    );
};

export default Contact;