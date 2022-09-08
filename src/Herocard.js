
import './App.css';
import { Button} from '@chakra-ui/react'
import bub1 from "./components/images/bub1.JPG"
import bub2 from "./components/images/bub2.JPG"
import bub3 from "./components/images/bub3.JPG"
import bub4 from "./components/images/bub4.JPG"

function Herocard() {
  return (
    <div className="App">
      <div className='heroCard'>
        <div className='navBar'>
          <div className='logo'>
            <h1>Tutor Master</h1>
            <p>Knowledge Transfer</p>
          </div>
          <div className='navLinks'>
            <div>
            <span>Home</span>
            <div className='underLine'></div>
            </div>
            <span>Trainings</span>
            <span>About</span>
            <a href='/'><Button size='lg'>
            Login
            </Button></a>
          </div>
        </div>
        <div className='heroContent'>
          <h1>Grow your mind and better<br/>opportunities you will find</h1>
          <p>Be a good achiever, shape your career</p>
        </div>
        <div className='dotCard2'>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dotb'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dotb'></div>
          </div>
        </div>
        <div className='dotCard'>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dotb'></div>
          </div>
          <div className='dotCardRow'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dotb'></div>
          </div>
        </div>
        <div className='bub1'><img src={bub1}/></div>
        <div className='bub2'><img src={bub2}/></div>
        <div className='bub3'><img src={bub3}/></div>
        <div className='bub4'><img src={bub4}/></div>
      </div>
      
    </div>
  );
}

export default Herocard;
