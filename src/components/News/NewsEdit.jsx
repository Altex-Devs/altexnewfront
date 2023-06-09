import Editor from './Editor';
import { useState } from 'react';

const NewsEdit =  () => {
  const [content, setContent] = useState('');

  return <>
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <Editor content={content} setContent={setContent} />
    </div>
  </>;
}

export default NewsEdit;