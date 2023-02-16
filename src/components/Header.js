
import LisaWalshPhotographyWhiteTextHeader from '../LisaWalshPhotographyWhiteTextHeader.png';




function Header(){
    return (
        <div className='App-header'>
            <nav class="flex items-centre justify-between">  
                <div class="left flex justfiy-right">  
                <div class="logo">  
                    <img src={LisaWalshPhotographyWhiteTextHeader} width="200px" alt="logo"></img>  
                </div>  
                <div>  
                    <a href="#">Home</a>  
                    <a href="#right flex-1">About</a>  
                    <a href="#socials">Socials</a>
                    <a href="#container">Contact</a>  
                </div>  
                </div>  
            </nav>
        </div>
    )
}
export default Header;