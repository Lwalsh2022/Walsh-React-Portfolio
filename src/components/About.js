import ProfileImage from '../FB_IMG_1619831667865.jpg';
import FacebookImage from '../Facebook.png';
import WebImage from '../download.png';
import InstagramImage from '../instagram-png-icon-5a3aafce6a9e87.5728113115137955344367.jpg'

function About(){
    
    return (
        <>
            <div className="hero flex items-centre justify-between testClass">
                <div className="left flex-1 justify-center">
                     <img src={ProfileImage} width="200px" alt="filler"></img>  
                </div>
                <div className="right flex-1">
                    <h1>Aspiring Web Developer <span></span></h1>
                    <h3>Welcome!</h3>
                    <p>Two years ago, as an essential employee during the pandemic,
                        I decided I no longer wanted to be a foodservice manager.  
                        I have always enjoyed jailbreaking
                        iPhones, updating websites or just decorating homes,
                        so pursuing a career in front-end web design seemed
                        like the perfect way to combine my love of the visual arts,
                        technology, and working from home with my two Great Pyranees rescues. Due to supply
                        chain issues I am currently out of biscuits, but I do have some awesome CSS available if that's your thing.
                    </p>
                    <div className="socials">
                        <a href="https://fineartamerica.com/profiles/2-lisa-walsh" target="_blank"><img src={WebImage} width="40px"></img></a>
                        <a href="https://www.instagram.com/lisa_walsh_photography" target="_blank"><img src={InstagramImage} width="40px"></img></a>
                        <a href="https://www.facebook.com/lisawalshweddings" target="_blank"><img src={FacebookImage} width="40px"></img></a>
                    </div>
                </div>
            </div>

{/* <div class="hero flex items-centre justify-between">
<div class="left flex-1 justify-center">
<img src="Images\FB_IMG_1619831667865.jpg" alt="Profile Picture"></img>
</div>
<div class="right flex-1">
<h1>Aspiring Web Developer <span></span></h1>
<h3>Welcome!</h3>
<p>Two years ago, as an essential employee during the pandemic,
    I decided I no longer wanted to be a foodservice manager.  
    I have always enjoyed jailbreaking
    iPhones, updating websites or just decorating homes,
    so pursuing a career in front-end web design seemed
    like the perfect way to combine my love of the visual arts,
    technology, and working from home with my two Great Pyranees rescues. <br><br> Due to supply
    chain issues I am currently out of biscuits, but I do have some awesome CSS available if that's your thing.</br></br>
</p>
<div class="socials">
<a href="https://fineartamerica.com/profiles/2-lisa-walsh" target="_blank"><img src="Images\download.png" width="40px"></img></a>
<a href="https://www.instagram.com/lisa_walsh_photography" target="_blank"><img src="Images\instagram-png-icon-5a3aafce6a9e87.5728113115137955344367.png" width="40px"></img></a>
<a href="https://www.facebook.com/lisawalshweddings" target="_blank"><img src="Images\Facebook.png" width="40px"></img></a>
</div>
</div> */}

        </>
    )

}








export default About;