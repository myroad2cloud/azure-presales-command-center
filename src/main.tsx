import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import './advanced.css'
import './artifact-workbench.css'
import './control-room.css'
import './deal-economics.css'
import './executive-review.css'
import './discovery-simulator.css'
import './migration-factory.css'
import './architecture-decisions.css'
import './sow-risk.css'
import './resource-loading.css'
import './microsoft-cosell.css'
import './qualification-warroom.css'
import './customer-meeting.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/azure-presales-command-center">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
