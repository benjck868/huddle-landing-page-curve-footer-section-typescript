import Button from "./components/Button.tsx"
import Footer from "./components/Footer.tsx"
import Header from "./components/Header.tsx"
import Hero from "./components/Hero.tsx"
import Hero2 from "./components/Hero2.tsx"
import Hero3, {Hero3DataProps} from "./components/Hero3.tsx"

function App() {
  const Hero2Data = [{
    'icon':'icon-communities.svg',
    'total': '14k+',
    'text': 'Communities Formed',
  },
  {
    'icon':'icon-messages.svg',
    'total': '2.7m+',
    'text': 'Messages Sent',
  }]

  const Hero3Data:Hero3DataProps[] = [{
    'title': 'Grow Together',
    'content': 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
    'image': 'illustration-grow-together.svg',
    'imgPosition': 'right'
  },
  {
    'title': 'Flowing Conversations',
    'content': 'You wouldn\'t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a  more natural flow.',
    'image': 'illustration-flowing-conversation.svg',
    'imgPosition': 'left'
  },
  {
    'title': 'Your Users',
    'content': ' It takes no time at all to integrate Huddle with your app\'s authentication solution. This means, once signed in to your app, your users can start chatting immediately.',
    'image': 'illustration-your-users.svg',
    'imgPosition': 'right'
  }]

  return (
    <>
      <Header/>
      <main className="flex flex-col gap-10 font-HLPCS-open-sans px-10 justify-evenly items-center mt-24">
        <Hero />
        <div>
          <img src="/images/screen-mockups.svg" />
        </div>
        <Hero2 data={Hero2Data} />
        <Hero3 content={Hero3Data} />
      </main>
      <div className="flex flex-col w-full gap-10">
        <p className="text-center text-4xl font-bold mt-8">Ready To Build Your Community ?</p>
        <div className="flex justify-center mb-10">
          <Button isOutlined={false} className="font-semibold w-72 py-6">Get Started For Free</Button>
        </div>
      </div>
      <div>
        <img src="/images/bg-footer-top-desktop.svg"/>
      </div>
      <Footer />
    </>
  )
}

export default App
