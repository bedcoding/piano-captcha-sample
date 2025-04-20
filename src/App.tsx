import { useState } from 'react'
import { PianoCaptcha } from 'piano-captcha'
// import 'piano-captcha/index.css'  // 라이브러리 수정해서 이제 외부 프로젝트에서도 자동으로 css 파일이 주입되게 고침 ^^

function App() {
  const [status, setStatus] = useState('Piano Captcha Demo')
  const [showCaptcha, setShowCaptcha] = useState(true)

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{status}</h1>
      <div>
        {showCaptcha ? (
          <PianoCaptcha 
            onSuccess={() => setStatus('✨캡차 통과✨')}
            onFail={() => setStatus('😢캡차 실패😢')}
            onClose={()=> setShowCaptcha(false)}
          />
        ) : (
          <button 
            onClick={() => setShowCaptcha(true)}
            style={{ display: 'block', margin: '0 auto' }}
          >
            다시 테스트하기 🎹
          </button>
        )}
      </div>
    </div>
  )
}

export default App
