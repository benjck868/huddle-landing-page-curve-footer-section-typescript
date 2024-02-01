import Button from "./Button"
export default function Hero() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">
        Build The Community Your Fans Will Love
      </h2>
      <p className="text-center text-base">
          Huddle re-imagines the way we build communities. You have a
          voice, but so does your audience. Create connections with your
          users as you engage in genuine discussion.
      </p>
      <Button isOutlined={false} className="font-extrabold w-72 py-6">Get Started For Free</Button>
    </>
  )
}