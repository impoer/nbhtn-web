import React, { useState, useEffect } from 'react';
import { Editor, loader } from '@monaco-editor/react';

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
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#1E1E1E' }}>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <Editor
          height="100%"
          width="98%"
          language="customLang"
          value={code}
          theme="customTheme"
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
            readOnly: false,
          }}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default MyMonacoEditor;
