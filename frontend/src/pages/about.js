import React from 'react';
import './pages.scss';
function about(){
    return <div className="landingPage">
        <h1>Welcome to Small Channel Shootout!</h1>
        <h2 style={{color:'white'}}>Begin exploring by searching for your favorite videos above.</h2>
        <br/>
        <div className="landingPageParagraph">
            <h5>
                Any content you search for will have been created by a "small creator". After creating an account, you'll be able to
                vote on your favorite videos each week and see the results of that vote at our Best Choice page.
            </h5>
        </div>

    </div>
}
export default about;