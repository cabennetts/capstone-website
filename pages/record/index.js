import { UserContext } from '../../lib/context';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Results from '@components/Results';

export default function RecordPage(props) {
  return (
    <>
      <RecordManager />
      <Results />
    </>
  );
}


function RecordManager() {
  return (
    <main>
      <h1>RECORD PAGE</h1>

      <h3>GET ACCESS TO CAMERA</h3>
      <h3>DISPLAY PREVIEW</h3>
      <h3>START RECORDING BUTTON</h3>
      <h3>STOP RECORDING BUTTON</h3>
      <h3>RESET RECORDING BUTTON</h3>
      <h3>UPLOAD VIDEO</h3>
      
    </main>
  );
}

