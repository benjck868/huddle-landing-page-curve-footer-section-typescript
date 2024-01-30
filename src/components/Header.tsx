import Button from "./Button"
export default function Header() {
  return (
    <header>
       <nav className="flex flex-row justify-between py-4 font-HLPCS-poppins items-center">
            <a className="flex flex-row gap-1 font-bold text-3xl items-center" href="#">
                <img className="h-8" src="./public/images/icon-messages.svg" alt="huddle page logo" />
                <h1 className="text-4xl">
                    Huddle
                </h1>
            </a>
            <Button isOutlined className="rounded-full">Take It Free</Button>
       </nav>
    </header>
  )
}