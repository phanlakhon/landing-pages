import { BtnShopNow } from "../../Button/ShopNow";
import { Container } from "../../Container";
import Image from "next/image";

export function Banner() {
  return (
    <div className="relative min-h-[250px] md:min-h-[380px] lg:min-h-[520px] bg-[#f2d3bf]">
      <div
        className="absolute top-0 left-0 w-full h-full bg-transparent
        before:content-[url(/images/props/__before.svg)] before:absolute before:top-0
        after:content-[url(/images/props/__after.svg)] after:absolute after:bottom-0"
      />
      <div
        className="absolute top-0 left-0 w-full h-full bg-transparent
        before:content-[url(/images/props/__before-2.svg)] before:absolute before:top-0 before:left-[45%]
        after:content-[url(/images/props/__after-2.svg)] after:absolute after:bottom-[-6px] after:left-[55%]"
      />

      <div className="absolute w-full h-full z-[99]">
        <div className="relative top-[50%] translate-y-[-50%]">
          <Container>
            <div className="grid grid-flow-col gap-20 relative">
              <div className="relative z-10 rounden rounded-sm md:bg-transparent bg-[#ffffff80] md:p-0 p-2">
                <div className="relative top-[50%] translate-y-[-50%]">
                  <p className="md:text-[20px] text-md">
                    <span className="underline underline-offset-4 text-primary">
                      100%
                    </span>{" "}
                    Organic Vegetables
                  </p>
                  <p className="md:text-[40px] lg:text-[55px] text-[22px] font-bold leading-[1.3] mt-4">
                    The best way to stuff your wallet.
                  </p>
                  <p className="text-[15px] md:text-[#7A7A7A] font-light max-w-[488px] mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet reiciendis beatae consequuntur.
                  </p>
                  <BtnShopNow />
                </div>
              </div>
              <div className="m-auto md:static absolute xl:w-[24rem] md:w-[18rem] w-[12rem] right-0 z-0">
                <div className="bg-[#E5C9BD] rounded-full">
                  <Image
                    src="/images/image-banner.png"
                    alt="Banner"
                    className="!static w-[25rem]"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
