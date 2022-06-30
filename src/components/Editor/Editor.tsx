import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';

import { ModeNoteEnum } from 'shared/models';

import MDEditor from '@uiw/react-md-editor';
import './Editor.css';
export const Editor = ({ value, onChange, mode }: { value: string; onChange: (e: string) => void; mode: ModeNoteEnum }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex w="100%" h="100%" overflow="hidden">
      {mode === ModeNoteEnum.WRITE ? (
        <MDEditor
          visibleDragbar={false}
          preview="edit"
          value={value}
          hideToolbar={true}
          onChange={(e: any) => onChange(e)}
          style={{
            fontSize: '14px',
            padding: '16px',
            minHeight: '100%',
            width: '100%',
            backgroundColor: 'var(--chakra-colors-white)',
            color: 'var(--chakra-colors-black)',
            border: 'none',
            fontFamily: 'var(--chakra-fonts-body)',
          }}
        />
      ) : mode === ModeNoteEnum.VIEW ? (
        <MDEditor.Markdown
          source={value}
          style={{
            fontSize: '14px',
            padding: '16px',
            minHeight: '100%',
            width: '100%',
            backgroundColor: 'var(--chakra-colors-white)',
            color: 'var(--chakra-colors-black)',
            border: 'none',
            fontFamily: 'var(--chakra-fonts-body)',
          }}
        />
      ) : (
        <Flex w="100%" h="100%">
          <Flex direction="column" w="50%" h="100%">
            <MDEditor
              visibleDragbar={false}
              preview="edit"
              value={value}
              hideToolbar={true}
              onChange={(e: any) => onChange(e)}
              style={{
                fontSize: '14px',
                padding: '16px',
                minHeight: '100%',
                width: '100%',
                backgroundColor: 'var(--chakra-colors-white)',
                color: 'var(--chakra-colors-black)',
                border: 'none',
                fontFamily: 'var(--chakra-fonts-body)',
              }}
            />
          </Flex>
          <Flex direction="column" w="50%" h="100%">
            <MDEditor.Markdown
              source={value}
              style={{
                padding: '16px',
                fontFamily: 'var(--chakra-fonts-body)',

                fontSize: '14px',
                minHeight: '100%',
                backgroundColor: 'var(--chakra-colors-white)',
                color: 'var(--chakra-colors-black)',
                borderRight: '1px solid var(--chakra-colors-white)',
              }}
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
