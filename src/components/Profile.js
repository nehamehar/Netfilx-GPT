import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { supabase } from '../supabaseClient';
import { addUser } from '../utils/userSlice';
import Header from './Header';
import { photoURL } from '../utils/constants';
const Profile = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Don't render anything if the user data hasn't loaded yet
  if (!user) return null; 

  const handleRemoveAvatar = async () => {
    if (!user.photoURL) return; // No photo to remove

    setError('');
    setMessage('');

    try {
      // 1. Get the file path from the full URL
      const filePath = user.photoURL.split('/avatars/')[1];

      // 2. Remove the file from Supabase Storage
      const { error: removeError } = await supabase.storage.from('avatars').remove([filePath]);

      if (removeError) throw removeError;

      // 3. Update the user's metadata to remove the avatar_url
      const { data, error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: null }
      });

      if (updateError) throw updateError;

      // 4. Update the Redux store with the new user data (without photoURL)
      const updatedUser = data.user;
      dispatch(addUser({
        uid: updatedUser.id,
        email: updatedUser.email,
        displayName: updatedUser.user_metadata.full_name,
        photoURL: {photoURL}
      }));

      setMessage("Photo removed successfully.");

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
    </div>
  );
};

export default Profile;