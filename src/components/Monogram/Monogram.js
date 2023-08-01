import { forwardRef, useId } from 'react';
import Image from 'next/image';


export const Monogram = forwardRef(({  }) => {

  return (
    <div>
      <Image src="/logo.png" alt="Logo" height={100} width={100} />
    </div>
  );
});

