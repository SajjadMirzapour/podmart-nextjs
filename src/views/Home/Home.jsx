import { Footer } from "src/layouts";
import { Atracctive, Connection, Managment, Slider, Steps, Suitable, Unlimited } from "./components";

export default function Home() {
    return (
        <>
            <Unlimited />
            <div className="w-[80%] mx-auto">
                <Steps />
                <Atracctive />
                <Managment />
                <Slider />
                <Suitable />
                <Connection />
            </div>
            <Footer />
        </>
    )
}