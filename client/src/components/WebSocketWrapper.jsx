import { useRef } from 'react'
import App from '../App'

function WebSocketWrapper()
{
  const ws = new WebSocket("ws://localhost:8080")
  return (<App ws = {ws} />)
}
export default WebSocketWrapper