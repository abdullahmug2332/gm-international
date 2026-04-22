import Image from "next/image";

export default function Owners() {
  const messages = [
    {
      title: "CEO’s Message:",
      subtitle: "(GMAN GROUP OF INDUSTRIES)",
      message: `Our target is to transform Gman Group into an organization that offers more than customized solutions and quality products.

As a company, we aim to work with reliable partners, to enhance our social enterprise, add values, improve lives and give back to the communities. I am grateful to everyone who kept sharing this passion with us.`,
      name: "ABDUL SAMI",
      image:
        "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65fd163493c4a643a95d2ada_Rectangle%20230.png",
      reverse: true, // 👈 image first on large screens
    },
    {
      title: "DIRECTOR’s MESSAGE",
      subtitle: "(GMAN INTERNALTIONAL)",
      message: `Through our commitment and dedication, gman international has grown into a
socially & environmentally responsible, sustainable and ecofriendly platform to
meet the customised needs of the denim world.

I see our success not limited to just achieving customers’ satisfaction but also
ensuring equal opportunities for women in all areas along with fair, safe and
healthy working conditions for all.

I just wanted to thank you all for your efforts in making gman international a reliable
organization for everyone.`,
      name: "IZZA SAMI",
      image: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65fc0097c6f95e16753f57df_Rectangle%20229.png",
      reverse: false,
    },
  ];

  return (
    <div className="w-full! container mx-auto bg-primary py-20  my-20 lg:my-0 flex flex-col gap-16 items-center">
      {messages.map((item, i) => (
        <div
          key={i}
          className="w-[90%] border border-white/40 rounded-3xl p-4 container mx-auto"
        >
          <div
            className={`bg-primary/80 rounded-2xl lg:p-10 flex flex-col ${
              item.reverse ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10`}
          >
            {/* TEXT */}
            <div className="w-full lg:w-[60%] text-white">
              <h2 className="text-4xl lg:text-6xl uppercase leading-tight anton font-light">
                {item.title}
              </h2>

              <p className="text-xl lg:text-3xl mt-2 uppercase anton font-light">
                {item.subtitle}
              </p>

              <p className="mt-6 text-sm lg:text-lg leading-relaxed font-light opacity-90 whitespace-pre-line">
                "{item.message}"
              </p>

              <p className="mt-6 text-2xl uppercase anton font-light">
                {item.name}
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full lg:w-[40%] flex justify-center">
              <div className="rounded-2xl overflow-hidden bg-white p-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}