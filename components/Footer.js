import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="w-full mt-20 pt-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <img src="/logo.svg" alt="logo" className="w-28" />
              <p className="w-[22rem] text-[#2f564f] tracking-[0.3px] mt-5">
                F-commerce is a platform for online retail. We help you to buy
                our pruduct easily
              </p>
            </div>

            {/* nav link */}
            <div className="w-[30rem] text-[#2f564f] flex justify-between">
              <div className="space-y-5">
                <h3 className="text-xl font-semibold">Menu</h3>
                <div className="space-y-5 flex flex-col">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <Link href="inbox">
                    <a>Inbox</a>
                  </Link>
                  <Link href="/notification">
                    <a>Notification</a>
                  </Link>
                </div>
              </div>
              <div className="space-y-5">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <ul className="space-y-5">
                  <li>Twiter</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h3 className="text-xl font-semibold">Support</h3>
                <ul className="space-y-5">
                  <li>Help Center</li>
                  <li>FAQ</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mt-20 pb-5 text-[#2f564f]">
            <p>@2022 F-Comerce All Right Reserved</p>
            <p>Privacy Policy</p>
            <p>Term Of Use</p>
          </div>
        </div>
      </div>
    </>
  );
}
