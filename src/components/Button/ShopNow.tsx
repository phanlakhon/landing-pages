interface BtnShopNowProps {
  padding?: string;
  fontSize?: string;
}

export function BtnShopNow(props: BtnShopNowProps) {
  const { padding = "", fontSize = "" } = props;

  return (
    <button
      className={`bg-primary text-white rounded-md mt-6 
      ${fontSize || "text-sm"}
      ${padding || "py-2 px-4"}`}
    >
      Shop now
    </button>
  );
}
