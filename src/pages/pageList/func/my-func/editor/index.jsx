// monaco
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
// 语法高亮
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
// 查找控件
// import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import './style/index.less';

const Editor1 = () => {
  console.log('monaco.languages.getLanguages() :>> ', monaco.languages.getLanguages());
  const monacoRef = useRef(null);
  const [editor, setEditor] = useState();
  const [monacoVal, setMonacoVal] = useState('');
  useEffect(() => {
    if (monacoRef.current) {
      // const model = monaco.editor.createModel("","javascript");
      const editor = monaco.editor.create(monacoRef.current, {
        // 编辑器初始显示文字
        value: `console.log("hello,world")`,
        // 语言
        language: 'javascript',
        // 官方自带三种主题vs, hc-black, or vs-dark
        theme: 'vs',
        // 关闭小地图
        minimap: {
          enabled: false,
        },
      });
      setEditor(editor);
    }
    return () => {
      //使用完成销毁实例
      editor && editor.dispose();
    };
  }, []);
  useEffect(() => {
    if (!editor) {
      return;
    }
    editor.onDidChangeModelContent((event) => {
      const newValue = editor.getValue();
      console.log('event :>> ', event);
      console.log(newValue);
    });
  }, [editor]);

  const saveVal = () => {
    if (!editor) {
      return;
    }
    setMonacoVal(editor.getValue());
  };
  const reSaveVal = () => {
    if (!editor) {
      return;
    }
    editor.setValue(monacoVal);
  };

  return (
    <div className="monaco-box">
      <div>
        <Button onClick={saveVal}>暂存</Button>
        <Button onClick={reSaveVal}>恢复暂存内容</Button>
      </div>
      <div id="monaco" ref={monacoRef}></div>
    </div>
  );
};

export default Editor1;
