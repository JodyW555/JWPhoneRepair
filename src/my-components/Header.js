//Import all dependencies, other Components
import {Link} from 'react-router-dom';

//Function Component
function Header() {

    const headerStyle = {
        minHeight: '15vh',
        backgroundColor: '#2C3E50'
    };
    const taglineStyle = {
        minHeight: '15vh',
        backgroundColor: '#2C3E50'
    }

    //Component UI: HTML Rendering
    return(<>
       <header class="row" style={headerStyle}>
        <div class="col-12 col-md-12 col-lg-8 align-middle text-center text-white display-5 border border-dark" 
             style={taglineStyle}> Phone Fix Booking System
        </div>

        <div class="col-12 col-md-12 col-lg-4">
            <div class="row">
                {/*Button 1*/}
                <Link to="/" class="col-12 col-md-6 col-lg-6 p-0 m-0 border border-dark text-center 
                         text-white" style={{textDecoration: 'none', backgroundColor:'cadetblue'}}>Home</Link>                 
                {/*Button 2*/}
                <Link to="/advancedJS" class="col-12 col-md-6 col-lg-6 p-0 m-0 border border-dark 
                        text-center text-white" style={{textDecoration: 'none', backgroundColor:'cadetblue'}}>Extension</Link>              
            </div>
        </div>
      </header>     
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default Header;
