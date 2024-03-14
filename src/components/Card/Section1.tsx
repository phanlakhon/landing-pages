import Image from "next/image";
import { BtnShopNow } from "../Button/ShopNow";

interface CardSection1Props {
  title: string;
  bgCode: string;
  image: string;
  _class?: string;
}

export function CardSection1(props: CardSection1Props) {
  const { title, bgCode, image, _class = "" } = props;

  return (
    <div
      className={`${bgCode} relative rounded-md p-6 w-full md:min-h-[180px] min-h-[140px] lg:mb-0 mb-5`}
    >
      <div className="flex flex-col justify-between h-full">
        <p className="lg:max-w-[160px] md:max-w-full max-w-[80%]">{title}</p>
        <div>
          <BtnShopNow padding="py-1 px-2" fontSize="text-[12px]" />
        </div>
      </div>

      <div
        className={`absolute ${
          _class || "bottom-0 right-0"
        } sm:width-[50%]`}
      >
        <Image
          src={image}
          alt="Banner"
          className="!static max-w-[14rem]"
          fill
          priority
        />
      </div>
    </div>
  );
}
