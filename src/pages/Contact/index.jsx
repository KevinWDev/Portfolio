// Styles
import '../../utils/styles/Contact.css'

function Contact() {
    
    return (

        <main>

           <div className='contact__text'>
                <h2 className='contact__text__title'>Envie de me contacter ? <br />Alors n'attendez plus ! Envoyez moi un email !</h2>
           </div>

           <section className='contact'>
            {/* <div className='contact__div'> */}

                <form action="" className='formulaire'>

                    <label htmlFor="name">Nom</label>
                    <input className='formulaire__input' type="text" id="name" name="name" placeholder='Nom Prenom'/>

                    <label htmlFor="email">Email</label>
                    <input className='formulaire__input' type="text" id="email" name="name" placeholder='adressemail@outlook.fr'/>

                    <label htmlFor="message">Message</label>
                    <textarea className='formulaire__textarea' name="message" id="message" cols="30" rows="15" placeholder='Écrivez votre message ici.'></textarea>

                    <input className='formulaire__submit' type="submit" value="Envoyer" />
                </form>
            {/* </div> */}

           </section>

        </main>
    )
}

export default Contact