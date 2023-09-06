import Location from "./Location"
const Footer = () =>{
    return(
        <>
        <div className="flex flex-row flex-wrap w-[100%] mt-4">
            <div className=" flex flex-row gap-12 w-[100%] mx-0 px-72 py-2 bg-slate-300">
                <p className="text-2xl font-bold w-96">For better experience,download the Foodie app now</p>
                <div className="flex flex-row gap-6 ">
                <img className="h-14 w-44" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"></img>
                <img className="h-14 w-44" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"></img>
                </div>
            </div>
            <div className="bg-black text-white flex flex-row gap-16 mx-0 px-72 w-[100%] py-4  text-lg items-start leading-10">
                <ul className="leading-8">
                    <li className="font-bold">Foodie</li>
                    <li className="w-60">2023 Quintiple Technologies Pvt. Ltd.</li>
                </ul>
                <ul>
                    <li className="font-bold">Company</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Foodie One</li>
                    <li>Instamart</li>
                    <li>Genie</li>
                </ul>
                <div className="flex flex-col gap-7">
                <ul>
                    <li className="font-bold">Contact Us</li>
                    <li>Help & Support</li>
                    <li>Partner With Us</li>
                    <li>Ride With Us</li>
                </ul>
                <ul>
                    <li className="font-bold">Legal</li>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
               
                <ul>
                    <li className="font-bold">We deliver to</li>
                    <li>Bangalore</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Footer