import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <>
    <div className="contact_area">
        <div className="container">   
            <div className="row">
                <div className="col-lg-6 col-md-12">
                   <div className="contact_message content">
                        <h3>contact us</h3>    
                         <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                        <ul>
                            <li><i className="fa fa-fax"></i>  Address : Your address goes here.</li>
                            <li><i className="fa fa-phone"></i> <Link to="#">demo@example.com</Link></li>
                            <li><i className="fa fa-envelope-o"></i> 0(1234) 567 890</li>
                        </ul>             
                    </div> 
                </div>
                <div className="col-lg-6 col-md-12">
                   <div className="contact_message form">
                        <h3>Tell us your project</h3>   
                        <form id="contact-form" method="POST"  action="https://whizthemes.com/mail-php/jaber/contact.php">
                            <p>  
                               <label> Your Name (required)</label>
                                <input name="name" placeholder="Name *" type="text" /> 
                            </p>
                            <p>       
                               <label>  Your Email (required)</label>
                                <input name="email" placeholder="Email *" type="email" />
                            </p>
                            <p>          
                               <label>  Subject</label>
                                <input name="subject" placeholder="Subject *" type="text" />
                            </p>    
                            <div className="contact_textarea">
                                <label>  Your Message</label>
                                <textarea placeholder="Message *" name="message"  className="form-control2" ></textarea>     
                            </div>   
                            <button type="submit"> Send</button>  
                            <p className="form-messege"></p>
                        </form> 

                    </div> 
                </div>
            </div>
        </div>    
    </div>
 
    <div className="contact_map">
       <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                   <div className="map-area">
                      <iframe id="googleMap"  src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                   </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Contact