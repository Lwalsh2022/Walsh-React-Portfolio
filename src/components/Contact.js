function Contact(){
    return (
        <div>
            <div className="container">
                ContactForm2

                <form action="action_page.php">
                    <input type="text" id="fname" name="firstname" placeholder="First name.."></input>
                    <input type="text" id="lname" name="lastname" placeholder="Last name.."></input>
                    <textarea type="text" placeholder="Write me a message!" rows={8} required></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>

        </div>
        // <div>
        //     <div className="container">
        //         <form action="action_page.php">
        
            
        //         <input type="text" id="fname" name="firstname" placeholder="First name.."></input>
            
        //         <input type="text" id="lname" name="lastname" placeholder="Last name.."></input>
        
        //         <textarea id="subject" name="subject" placeholder="Message..." style="height:200px"></textarea>
        
        //         <input type="submit" value="Submit"></input>
        
        //         </form>
        //     </div> 
        // </div>   
    )
}
export default Contact;