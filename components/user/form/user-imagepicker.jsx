'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import uploadIcon from '@/assets/images/icon-upload-image.svg';
import cx from 'classnames';

export default function ImagePicker({ name }) {
  const [pickedImage, setPickedImage] = useState(null);

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  const imageInputRef = useRef();

  const handlePickClick = () => {
    imageInputRef.current.click();
  };

  const pickerBtnStyle = cx(
    'z-10 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg p-1',
    !pickedImage ? 'bg-purple-light text-purple-dark' : 'bg-black/30 text-white'
  );

  return (
    <div className=' focus:bg-gray'>
      <div className=' mb-1 flex items-start gap-2'>
        <div className=' relative flex h-40 w-40 items-center justify-center rounded-lg text-center text-gray'>
          <button
            className={pickerBtnStyle}
            type='button'
            onClick={handlePickClick}
          >
            <Image src={uploadIcon} alt='upload icon' />
            {!pickedImage ? `+ Upload Image` : `Change Image`}
          </button>
          {pickedImage && (
            <Image
              src={pickedImage}
              alt={'The image select by user'}
              fill
              className=' rounded-lg'
            />
          )}
        </div>
        <input
          className='hidden'
          id={name}
          type='file'
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
      </div>
    </div>
  );
}
