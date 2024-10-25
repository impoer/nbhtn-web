import React, { useState, useEffect } from 'react';
import { Editor, loader } from '@monaco-editor/react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MyMonacoEditor: React.FC = () => {
  const [code, setCode] = useState(`Skills
Contact
Language
English - Upper-Intermediate
Education
National University of Food Technologies
Master's in Engineering Applied Mechanics
Experience
Technologies`);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'customLang' });

      monaco.languages.setMonarchTokensProvider('customLang', {
        tokenizer: {
          root: [
            [/\b(Skills|Contact|Experience|Technologies)\b/, 'custom-keyword'],
            [/\b(English|Education)\b/, 'custom-italic'],
          ],
        },
      });

      monaco.editor.defineTheme('customTheme', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'custom-keyword', foreground: 'ffa500', fontStyle: 'bold' },
          { token: 'custom-italic', fontStyle: 'italic' },
        ],
        colors: {
          'editor.background': '#1E1E1E',
        },
      });
    });
  }, []);

  return (
    <div style={{
      height: isMobile ? '80vh' : '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#1E1E1E',
      padding: isMobile ? '10px' : '0',
    }}>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <Editor
          height="100%"
          width={isMobile ? '100%' : '98%'}
          language="customLang"
          value={code}
          theme="customTheme"
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
            readOnly: false,
            fontSize: isMobile ? 12 : 14,
            wordWrap: 'on',
            minimap: { enabled: !isMobile },
          }}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default MyMonacoEditor;
