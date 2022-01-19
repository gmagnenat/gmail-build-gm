import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from '../Section';
import './EmailList.css';
import EmailRow from '../EmailRow';

function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className='emailList__sections'>
        <Section Icon={InboxIcon} title='Primary' color='red' selected />
        <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </div>

      <div className='emailList__list'>
        <EmailRow
          title='Gwen'
          subject='Hello'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit est sit amet suscipit bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dictum massa dui, sit amet malesuada eros rutrum vel. Proin tincidunt tempor leo, non scelerisque libero tristique sed. Sed euismod tempor magna, a blandit elit volutpat eu. Morbi sit amet finibus lacus, ac facilisis mauris. Phasellus quis pharetra felis. Nulla rhoncus hendrerit arcu, vitae pellentesque mi venenatis eget. Sed semper vulputate lacinia. Donec hendrerit ligula eu odio mollis sollicitudin. Phasellus fringilla odio at velit fringilla fringilla. Nulla non leo quis magna finibus egestas. Mauris velit sem, aliquam in ipsum vel, finibus placerat elit.'
          time='10pm'
        />
        <EmailRow
          title='Jenn'
          subject='re hello'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit est sit amet suscipit bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dictum massa dui, sit amet malesuada eros rutrum vel. Proin tincidunt tempor leo, non scelerisque libero tristique sed. Sed euismod tempor magna, a blandit elit volutpat eu. Morbi sit amet finibus lacus, ac facilisis mauris. Phasellus quis pharetra felis. Nulla rhoncus hendrerit arcu, vitae pellentesque mi venenatis eget. Sed semper vulputate lacinia. Donec hendrerit ligula eu odio mollis sollicitudin. Phasellus fringilla odio at velit fringilla fringilla. Nulla non leo quis magna finibus egestas. Mauris velit sem, aliquam in ipsum vel, finibus placerat elit.'
          time='10pm'
        />
      </div>
    </div>
  );
}

export default EmailList;
