import './App.css';
import React,{Component} from 'react'

import '../css/grids.css'

import '../css/normalize.css'
import '../css/responsive.css'
class App extends Component{
	render(){
  return (
<div>
<div id="poplogin">
  <div>
    <div>
      <div>
      <div class="loginform">
						<span class="close tran">
            <i class="fas fa-times"></i>
          </span>
          <form action="#">
            <input type="text" placeholder="نام کاربری"/>
            <input type="text" placeholder="رمز عبور"/>
              <button>ورود</button>
                        </form>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
				
)
}
}

export default App;
