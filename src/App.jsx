import Badge from "./components/Badge"
import Banner from "./components/Banner/index"


function App() {

  return (
    <>
      <Badge variant='square' color='red'>Badge</Badge>
      <Badge variant='pill' color='yellow'>Badge</Badge>
      <Badge className='red' color='green'>Badge</Badge>
      <Badge variant='pill'>Badge</Badge>
      <br />
      <br />
      <div className="contianer">
        <Banner variant='error'>
          <Banner.Title>sorry there are something wrong</Banner.Title>
          <Banner.Par>this app don't work</Banner.Par>
        </Banner>
        <Banner variant='neutral' />
        <Banner>hello world</Banner>
        <Banner variant='success' />
        <Banner variant='success'>hello world</Banner>
        <Banner variant='warning' />
        <Banner variant='warning'>i am warning you to kick your ass</Banner>
        <Banner variant='error' />
        <Banner variant='error'>there are some error in your app</Banner>
        <Banner variant='success'>
          <Banner.Title>good work</Banner.Title>
          <Banner.Par>ok i think this is a good jop and i realy proud of my self</Banner.Par>
        </Banner>
      </div>
    </>
  )
}

export default App
