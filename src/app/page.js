import Image from "next/image";
import Logo from "../../website images/rfk.png";
// import bg from "../../public/background/bg_grey.jpeg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* <Image src={bg} alt="background-image" className="w-full h-full object-cover object-center opacity-100"/> */}
    <div className="w-full h-screen">
    <Image src={Logo}></Image>
    <p>testing</p>
    </div>


    </main>
  );
}

//make adjustments to the background imag, just a placeholder for now