import './App.css'
import 'make-api/dist/style.css';
import {Button} from 'make-api';
import {useState} from 'react';
import {MakeApi} from "../../../src";

export default function App() {
  const [mode, setMode] = useState('light');

  const toggleDarkMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    root.classList.add(mode)
  };

  return (
    <div className={`flex align-center justify-start ${mode} flex-col h-[100vh]`}>
      <h1 className="text-3xl font-bold underline">
        Built using shadcn-ui-library-starter
      </h1>
      <div className='py-4'>
        <Button onClick={toggleDarkMode}>Toggle Theme Mode</Button>
      </div>

      <div className='py-4'>
        <MakeApi
          method={'post'}
          url={'https://apis.congtrinhviettel.com.vn/life-care/app_param/getBusinessTermForAdmin'}
          defaultBody={{"dataRequest":{}}}
          theme={mode}
        />
      </div>
    </div>
  )
}

