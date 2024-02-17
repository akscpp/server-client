import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Footer from "@/components/organisms/footer";
import JoinWaitlistModal from "@/components/organisms/modal/join-waitlist"; 
import Animate from "@/components/atoms/animate";
import SvgAwwzoOrange from "@/components/icons/awwzo-orange";
import SvgStars from "@/components/icons/stars";
import { Meta } from "@/layout/Meta";
import { supportsWebm } from "@/utils";
import { AppConfig } from "@/utils/AppConfig";
import dogBottomPng from "@public/png/landing/bottom.png";
import dogTopPng from "@public/png/landing/headd.png";
import bluePawPrintBgPng from "@public/png/landing/blue_paws_background.png";
import yellowPawPrintBgPng from "@public/png/landing/white_paws_background.png";
import whyUsFirstPng from "@public/png/landing/whyUs-1.png";
import whyUsSecondPng from "@public/png/landing/whyUs-2.png";
import whyUsThirdPng from "@public/png/landing/whyUs-3.png";
import whyUsFourthPng from "@public/png/landing/whyUs-4.png";
import whyUsFifthPng from "@public/png/landing/whyUs-5.png";
import whyUsSixthPng from "@public/png/landing/whyUs-6.png";
import servicesFirstPng from "@public/png/landing/services-1.png";
import servicesSecondPng from "@public/png/landing/services-2.png";
import servicesThirdPng from "@public/png/landing/services-3.png";
import servicesFourthPng from "@public/png/landing/services-4.png";
import servicesFifthPng from "@public/png/landing/services-5.png";



const whyUs = [
  {
    t: "PURE AIR",
    d: "Top-tier hvac system ensures fresh air",
    s: whyUsFirstPng,
  },
  {
    t: "OBSERVED",
    d: "Stay connected with your pup",
    s: whyUsSecondPng,
  },
  {
    t: "SQUEAKY CLEAN",
    d: "We maintain the highest sanitation standards.",
    s: whyUsThirdPng,
  },
  {
    t: "SURE FOOTED",
    d: "Our floors offers paw-friendly grip throughout",
    s: whyUsFourthPng,
  },
  {
    t: "IN AND OUT",
    d: "Seamless access to both indoor and outdoor areas",
    s: whyUsFifthPng,
  },
  {
    t: "DIVE IN",
    d: "Dive into our pool and cool down.",
    s: whyUsSixthPng,
  },
];

const services = [
  {
    t: "BOARDING",
    c: "Overnight stay",
    d: "A safe and comfortable home for pets.",
    s: servicesFirstPng,
  },
  {
    t: "DAY CARE",
    c: "Limited stay",
    d: "A supervised daytime care for pets.",
    s: servicesSecondPng,
  },
  {
    t: "TRAINING",
    d: "We teach and reinforce desired behaviors in pets.",
    s: servicesThirdPng,
  },
  {
    t: "GROOMING",
    d: "We enhance your pet's physical appearance and hygiene.",
    s: servicesFourthPng,
  },
  {
    t: "SWIMMING",
    d: "Dive into fun! Safe, supervised swims for happy hounds.",
    s: servicesFifthPng,
  },
];

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxrZMnYH9n0pqKSxYcja0rNVyop7VC5QxsYz8SmTHm7GA4jrQNiPXqeg0NrysGDJbzpiA/exec";

const WhyUsItem = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: StaticImageData;
}) => {
  return (
    <div className="flex items-start mdb:w-full space-x-4 mdb:whitespace-normal">
      <div className="shrink-0 w-[54px] h-[54px] md:w-[72px] md:h-[72px] flex items-center justify-center rounded-full">
        <Image
          src={src}
          alt={title}
          className="w-12 h-12 md:w-16 md:h-16 text-center"
        />
      </div>
      <div className="grow">
        <p className="text-title-1-bold md:text-title-2-bold text-black-900 uppercase ">
          {title}
        </p>
        <p className="font-sans text-body-2-bold text-black-600">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesItem = ({
  title,
  caption,
  description,
  src,
}: {
  title: string;
  caption?: string;
  description: string;
  src: StaticImageData;
}) => {
  return (
    <div className={`shrink-0 w-full md:w-1/3 px-2 md:px-6 md:text-center`}>
      <div className="w-full max-w-[345px] mx-auto">
        <div className="w-[54px] h-[54px] md:w-[72px] md:h-[72px] mx-auto flex items-center justify-center rounded-full">
          <Image src={src} alt={title} className="w-16 md:w-24 text-center" />
        </div>
        
          <h2 className="mt-3.5 md:mt-1 text-body-3-bold md:text-title-2-bold text-black-900 mdb:text-center uppercase leading-none">
            {title}
          </h2>
          <p className="mt-1 font-sans text-body-2-bold mdb:text-center md:tracking-wide">
            {caption ? <b className="text-black-400">{caption}:</b> : null}
            <span className="text-black-600"> {description}</span>
          </p>
        
      </div>
    </div>
  );
};


const FormItem = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<any>();
  const nameInputRef = useRef<any>();

  const mobileInputRef = useRef<any>();

  const onDismiss = () => {
    setLoading(false);
  };

  // const onFormSubmit = (e: any) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const form = formRef.current;
  //   fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //     .then(() => {
  //       if (nameInputRef.current) {
  //         nameInputRef.current.value = "";
  //       }

  //       if (mobileInputRef.current) {
  //         mobileInputRef.current.value = "";
  //       }
  //       onDismiss();
  //     })
  //     .catch((error) => console.error("Error!", error.message));
  // };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
  
    const form = formRef.current;
    const formData = new FormData(form);
  
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => {
        if (nameInputRef.current) {
                  nameInputRef.current.value = "";
          }
        if (mobileInputRef.current) {
                mobileInputRef.current.value = "";
          }
        onDismiss();
        
        fetch('http://localhost:3001/id-card', {
          method: 'POST',
          body: JSON.stringify({
            name: formData.get('Name'),
            mobile: formData.get('Mobile'),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.blob())
          .then((blob) => {
           
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'Awwzo_ID.jpg';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            onDismiss();
          });
      })
      .catch((error) => {
        console.error('Error!', error.message);
        onDismiss();
      });
  };
  
  return (
    <>
      <form
        ref={formRef}
        method="POST"
        className="flex items-center"
        onSubmit={onFormSubmit}
      >
        <div className="w-full flex px-4 md:px-5 py-2.5 md:py-3 border-2 border-branding-yellow-8 bg-branding-blue rounded-l-2xl divide-x divide-branding-blue-3">
          <input
            ref={nameInputRef}
            type="text"
            name="Name"
            placeholder="Name"
            required
            className="w-full max-w-[140px] pr-3 md:pr-5 bg-transparent text-body-1-regular md:text-body-3-regular text-white placeholder:text-branding-blue-3 outline-none text-center"
          />

          <input
            ref={mobileInputRef}
            type="text"
            name="Mobile"
            placeholder="Mobile No."
            required
            className="w-full max-w-[180px] px-3 md:px-5 bg-transparent text-body-1-regular md:text-body-3-regular text-white placeholder:text-branding-blue-3 rounded-none outline-none text-center"
          />

        </div>
        <div className="-ml-7 ">
          <button
            type="submit"
            name="submit"
            className="flex items-end space-x-1 w-full px-4 md:px-9 py-4 bg-branding-yellow hover:bg-branding-yellow-2 text-body-1-bold md:text-title-1-medium text-white border-none rounded-2xl whitespace-nowrap"
          >
            <span>I am In</span>
            <SvgStars width={24} className="mdb:w-5" />
          </button>
        </div>
      </form>

      <Animate show={loading}>
        <JoinWaitlistModal onDismiss={onDismiss} />
      </Animate>
    </>
  );
};

const IndexPage = () => {
  const [mounted, setMounted] = useState(false);
  const [minHeight, setMinHeight] = useState(0);
  const scrollRef = useRef<any>();
  const videoRef = useRef<any>();

  const scrollWhyUsIntoView = () => {
    if (scrollRef.current) {
      // Scroll to the "Why Us" section smoothly
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const replayVideo = async () => {
    try {
      if (videoRef.current?.paused) {
        await videoRef.current.play();
      } else {
        await videoRef.current.pause();
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
      }
    } catch (e) { }
  };

  useEffect(() => {
    setMinHeight(window.innerHeight);
    setMounted(true);
  }, []);

  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <div className="flex flex-col justify-center">
        <section
          className="relative w-full min-h-screen flex flex-col justify-between bg-branding-blue"
          style={
            minHeight
              ? {
                minHeight: `${minHeight}px`,
              }
              : {}
          }
        >
          <Image
            src={bluePawPrintBgPng}
            alt=""
            className="absolute left-0 top-0 w-full h-full object-cover"
            priority
          />

          <div className="relative w-full">
            <header className="w-full bg-branding-yellow-4">
              <p className="py-2 font-sans-3 text-title-2-bold md:text-title-4 text-branding-blue text-center tracking-widest">
                Launching Soon in Bengaluru
              </p>
            </header>


            <div className="pt-12 md:pt-8 px-4">
              <div className="w-full max-w-[200px] md:max-w-[280px] mx-auto">
                <div className="relative w-full pb-[33.57%]">
                  <figure className="absolute top-0 left-0 w-full h-full">
                    {mounted && supportsWebm() ? (
                      <video
                        ref={videoRef}
                        src={`/video/logo.webm?v=2`}
                        muted
                        autoPlay
                        playsInline
                        className="w-full h-full"
                        onMouseEnter={replayVideo}
                        onClick={replayVideo}
                      />
                    ) : (
                      <SvgAwwzoOrange className="w-full h-full" />
                    )}
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="mdb:grow relative mt-8 px-4 flex flex-col items-center">
            <h1 className="max-w-[320px] md:max-w-[1000px] mx-auto font-sans-3 text-title-4.5 md:text-title-12 xl:text-title-13 text-white text-center">
              Experience a new level of{" "}
              <span className="text-branding-yellow-7">
                premium pet boarding
              </span>
            </h1>
            <p className="mt-4 md:mt-4 text-body-1-regular md:text-title-2.5-regular text-branding-yellow-6 text-center">
              Exclusive benefits: Join our pet parent community
            </p>
            <div className="mt-4 md:mt-4 flex items-center justify-center">
              <FormItem />
            </div>
          </div>

          <div className="relative w-full flex flex-col items-center cursor-pointer">
            <figure className="w-full px-4">
              <Image
                ref={scrollRef}
                src={dogTopPng}
                alt=""
                className="w-full max-w-[600px] mx-auto"
                priority
                onClick={scrollWhyUsIntoView}
              />
            </figure>
            <figure className="w-full px-4 flex justify-center bg-white">
              <Image
                src={dogBottomPng}
                className="w-full max-w-[600px] mx-auto"
                alt=""
                priority
                onClick={scrollWhyUsIntoView}
              />
            </figure>
          </div>
        </section>

        <section className="mdb:pt-8 pb-10 md:pb-24 px-10 bg-white">
          <div className="max-w-[1080px] mx-auto">
            <h1 className="font-sans-3 text-title-9 md:text-title-14 text-center">
              <span className="text-black-950">Why </span>
              <span className="text-branding-yellow-2">Us</span>
            </h1>

            <div className="mt-8 md:mt-24 grid grid-cols-3 gap-x-9 gap-y-7 md:gap-y-20 justify-center mdb:flex mdb:flex-col mdb:flex-nowrap">
              {whyUs.map(({ t, d, s }) => (
                <WhyUsItem key={t} title={t} description={d} src={s} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-10 md:pt-[90px] md:pb-32 px-10 bg-branding-yellow-5">
          <Image
            src={yellowPawPrintBgPng}
            alt=""
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
          <div className="relative max-w-[1080px] mx-auto">
            <h1 className="font-sans-3 text-title-9 md:text-title-14 text-center">
              <span className="text-branding-yellow-3">Our</span>
              <span className="text-black-950"> Services</span>
            </h1>

            <div className="mt-12 md:mt-24 md:-ml-10 flex mdb:flex-col gap-y-4 md:gap-y-16 flex-wrap justify-center">
              {services.map(({ t, c, d, s }) => (
                <ServicesItem
                  key={t}
                  title={t}
                  caption={c}
                  description={d}
                  src={s}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="p-4 md:pt-[72px] bg-branding-blue">
          <div className="max-w-[1500px] mx-auto flex mdb:flex-col md:justify-between items-center md:items-start">
            <div className="mdb:text-center">
              <SvgAwwzoOrange className="w-[180px] md:-ml-6 mdb:mx-auto" />
            </div>

            <div className="flex flex-col">
              <p className="mdb:mt-5 mb-5 text-body-1-medium sm:text-title-1-regular lg:text-title-2.5-regular text-branding-yellow-6 text-center md:text-end">
                Exclusive benefits: Join our pet parent community
              </p>
              <FormItem />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default IndexPage;
