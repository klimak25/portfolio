import  './topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')} >
      <div className='wrepper'>
        <div className='left'>
          <a href='#intro' className='logo'>.genimus</a>
          <div className='itemContainer'>
             <PersonIcon className='icon'/>
             <span>+7 978-774-34-54</span>
          </div>
           <div className='itemContainer'>
             <AttachEmailIcon className='icon'/>
             <span>klimak25@yndex.ru</span>
          </div>
        </div>
        <div className='right'>
           <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
             <span className='line1'></span>
             <span className='line2'></span>
             <span className='line3'></span>
           </div>
        </div>
      </div>
    </div>
  )
}
