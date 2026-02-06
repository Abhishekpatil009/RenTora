'use client';

import { useState } from 'react';
import { classNames } from '@/utils/classNames';

const ContactDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-10 right-10">
        💬
      </button>

      <div
        onClick={() => setOpen(false)}
        className={classNames(
          'fixed inset-0 bg-black/60',
          open ? 'block' : 'hidden'
        )}
      />
    </>
  );
};

export default ContactDrawer;
