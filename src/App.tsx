import * as React from 'react';
import { ChakraProvider, Flex, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/UI/ColorModeSwitcher';
import { theme } from 'theme/theme';
import { Editor } from 'components/Editor';
import { useState } from 'react';
import { ModeNoteEnum } from 'shared/models';
import { useEffect } from 'react';

export const App = () => {
  const [value, setValue] = useState('');

  const { colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === 'light') {
      document.documentElement.setAttribute('data-color-mode', 'dark');
    } else document.documentElement.setAttribute('data-color-mode', 'light');
  }, [colorMode]);

  return (
    <ChakraProvider theme={theme}>
      <Flex w="100vw" h="100vh" bg="white">
        <Editor mode={ModeNoteEnum.WRITE} value={value} onChange={setValue} />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </ChakraProvider>
  );
};
