import { UserContext } from '../../lib/context';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Results from '@components/Results';
import { RecordWebcam } from 'react-record-webcam';

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
      <RecordWebcam />
      <h2>Todo:</h2>
      <h3>UPLOAD VIDEO</h3>
      
    </main>
  );
}

