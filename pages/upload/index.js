import { UserContext } from '../../lib/context';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Results from '@components/Results';



export default function UploadPage(props) {
    return (
      <>
        <UploadManager />
        <Results />
      </>
    );
  }

/**
 * Get video from form and call 'UploadToGCP'
 * @returns 
 */
function UploadManager() {
  // useForm will connect our html form to react using '@react-hook-form'
  const { register, handleSubmit, formState, reset, watch, formState: { errors } } = useForm({ mode: 'onChange' });
  const { isValid, isDirty } = formState;

  const UploadToGCP = async ({ video }) => {
    // await
    // upload to gcs
  }
  return (
    <main>
     
      <h1>UPLOAD PAGE</h1>
      <form onSubmit={handleSubmit(UploadToGCP)}>
        <label>
          <h2> Choose a video to interpret</h2>
          <input type="file" name="video" className='btn-logo'>
          </input>
        </label>
        <button type="submit" value="Submit" className='btn-green'>Upload</button>
      </form>
    </main>
  );
}
