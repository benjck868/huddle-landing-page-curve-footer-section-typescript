import Button from "./Button";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-y-10  gap-x-16 w-full overflow-hidden text-white bg-HLPCS-very-dark-cyan p-24">
        <div className="flex flex-col gap-5">
            <a className="flex flex-row gap-1 font-bold text-3xl items-center" href="#">
                <img className="h-8" src="/images/icon-messages.svg" alt="huddle page logo" />
                <span className="text-4xl">
                    Huddle
                </span>
            </a>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem. 
            </p>
            <p className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"><path fill="white" d="M136.2 275.2c16.4-7 35.4-2.4 46.7 11.4l33.2 40.6c46-26.7 84.4-65.1 111.1-111.1L286.7 183c-13.8-11.3-18.5-30.3-11.4-46.7l48-112C330.8 6.7 349.7-3.1 368.4 .9l112 24C498.8 28.8 512 45.1 512 64v0c0 231.2-175.2 421.5-400.1 445.5c-9.8 1-19.7 1.8-29.6 2.2c0 0 0 0 0 0c0 0-.1 0-.1 0c-6.1 .2-12.1 .4-18.3 .4l0 0c-18.9 0-35.2-13.2-39.1-31.6l-24-112c-4-18.7 5.8-37.6 23.4-45.1l112-48zM70.5 464C286.3 460.5 460.5 286.2 464 70.5L364.8 49.2l-43 100.4L357.6 179c18.2 14.9 22.9 40.8 11.1 61.2c-30.9 53.3-75.3 97.7-128.6 128.6c-20.4 11.8-46.3 7.1-61.2-11.1l-29.4-35.9-100.4 43L70.5 464zM464 64s0 0 0 0v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"/></svg>

                Phone: +1-543-123-4567
            </p>
            <p className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 512 512"> <path fill="white" d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            example@huddle.com</p>
        </div>

        <div className="flex flex-col gap-5">
            <span className="text-xl font-semibold">
                NEWSLETTER
            </span>
            <p>
                To recieve tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address
            </p>
            <div>
                <input type="email" className="rounded-lg h-9 w-60" /> <Button isOutlined={false} className="rounded-lg mt-4">Subscriber</Button>
            </div>
        </div>
    </div>
  )
}
