import background from "..//assets/Images'/mainbg.jpeg"
function Image() {
  return (
    <div className='w-full h-screen  flex items-center justify-center'>
        <img className='w-auto h-[95%]' src={background} alt="" />
    </div>
  )
}

export default Image