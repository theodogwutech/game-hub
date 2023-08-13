import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
    iphone: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          key={platform.slug}
          marginRight="5px"
          width="20px"
          height="20px"
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
