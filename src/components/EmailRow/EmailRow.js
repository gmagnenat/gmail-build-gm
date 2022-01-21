import './EmailRow.css';
import { Checkbox, IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedMail } from '../../features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const openMail = () => {
		dispatch(selectedMail({ id, title, subject, description, time }));

		navigate('/mail');
	};

	return (
		<div onClick={openMail} className="emailRow">
			<div className="emailRow__options">
				<Checkbox />
				<IconButton>
					<StarBorderOutlinedIcon />
				</IconButton>
				<IconButton>
					<LabelImportantOutlinedIcon />
				</IconButton>
			</div>
			<div className="emailRow__title">
				<h4>{title}</h4>
			</div>
			<div className="emailRow__message">
				<h4>
					{subject}{' '}
					<span className="emailRow__description"> -{description}</span>
				</h4>
			</div>
			<p className="emailRow__time">{time}</p>
		</div>
	);
}

export default EmailRow;
