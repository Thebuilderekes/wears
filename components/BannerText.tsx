interface Props {
  title: string;
  btnText: string;
}

const BannerText = ({ title, btnText }: Props) => {
  return (
    <div className="z-10 bg-black/50 text-center px-2 py-4 backdrop-blur-sm">
      <h2 className=" text-white text-[2rem] md:text-[4rem]">{title}</h2>
      <button className="bg-blue text-white px-2 py-3 text-[1.5rem]">
        {btnText}
      </button>
    </div>
  );
};

export default BannerText;
