import React from 'react';
import {Image} from 'react-native';

interface ProfileAvatarProps {
  imageUrl: string;

  /**@default 32 */
  size?: number;
  /**@default 14 */
  borderRadius?: number;
}
export function ProfileAvatar({
  imageUrl,
  size = 32,
  borderRadius = 14,
}: ProfileAvatarProps) {
  return (
    <Image
      source={{uri: imageUrl}}
      style={{width: size, height: size, borderRadius}}
    />
  );
}
