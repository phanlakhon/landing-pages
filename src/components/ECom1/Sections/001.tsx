import { section1 } from "@/datas";
import { CardSection1 } from "../../Card/Section1";

export function Section001() {
  return (
    <div className="block lg:flex justify-between gap-3 my-4 md:my-14">
      {section1.map((section: any, index: number) => {
        return (
          <CardSection1
            key={index}
            title={section.title}
            bgCode={`${section.bg}`}
            image={section.image}
            _class={section.class || ""}
          />
        );
      })}
    </div>
  );
}
