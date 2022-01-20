import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db, collection } from '../../firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';

function SendMail() {
  // collection reference
  const colRef = collection(db, 'emails');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    addDoc(colRef, {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  console.log(errors);

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className='sendMail__close'
        />
      </div>

      <form className='sendMail__form' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('to', { required: true })}
          placeholder='To'
          type='email'
        />
        {errors.to && <p className='sendMail__error'>To is Required</p>}
        <input
          {...register('subject', { required: true })}
          placeholder='Subject'
          type='text'
        />
        {errors.subject && (
          <p className='sendMail__error'>A subject is Required</p>
        )}
        <input
          {...register('message', { required: true })}
          className='sendMail__message'
          placeholder='Message...'
          type='text'
        />
        {errors.message && (
          <p className='sendMail__error'>A message is Required</p>
        )}

        <div className='sendMail__options'>
          <Button type='submit' className='sendMail__send' variant='contained'>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
