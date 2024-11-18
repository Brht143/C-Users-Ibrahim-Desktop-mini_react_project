import ch  from '../images/ch.mp4'
import ch2  from '../images/ch2.mp4'



const Score = ({ score }) => {
  return (
    <div className='score'>
    <h3>{score}</h3>
    {(score >= 4) && <video src={ch} autoPlay loop type='video/mp4'></video>}
    {(score == 8) && <video src={ch2} autoPlay loop type='video/mp4'></video>}
    </div>
  )
}

export default Score
