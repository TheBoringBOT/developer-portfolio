import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export default function contactForm({ props, setModalOpen }) {
  const { register, handleSubmit } = useForm();

  const [buttonText, setButtonText] = useState("Send");

  // contact form using https://www.emailjs.com/
  // ? perhaps change to custom later

  const form = useRef();

  const submitForm = () => {
    setButtonText("Sending...");

    emailjs
      .sendForm(
        props.service_id,
        props.template_id,
        form.current,
        props.public_key
      )
      .then(
        (result) => {
          setButtonText("Message Sent!");

          // close modal after 3s
          setTimeout(() => {
            setModalOpen(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="w-full max-w-lg"
      ref={form}
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3 md:mb-0">
          {/* <label className="block mb-2 text-xs font-semibold tracking-wide text-black">
            Name
          </label> */}
          <input
            {...register("name", { required: true, maxLength: 20 })}
            className="block w-full px-4 py-3 mb-3 leading-tight text-black border rounded appearance-none bg-light-grey dark:bg-black dark:text-white dark:border-white/10 border-light-grey focus:outline-none focus:bg-white dark:focus:bg-white/10"
            type="text"
            required
            name="name"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          {/* <label className="block mb-2 text-xs font-semibold tracking-wide text-black">
            E-mail
          </label> */}
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="block w-full px-4 py-3 mb-3 leading-tight text-black border rounded appearance-none bg-light-grey dark:bg-black dark:text-white dark:border-white/10 border-light-grey focus:outline-none focus:bg-white dark:focus:bg-white/10"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          {/* <label className="block mb-2 text-xs font-semibold tracking-wide text-black">
            Message
          </label> */}
          <textarea
            {...register("message", { required: true, maxLength: 300 })}
            className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-black border rounded appearance-none resize-none bg-light-grey dark:bg-black dark:text-white dark:border-white/10 border-light-grey focus:outline-none focus:bg-white dark:focus:bg-white/10"
            required
            name="message"
            maxLength="300"
            placeholder="Message."
          ></textarea>
          <div className="flex items-center justify-start">
            <p className="mr-2 text-xs italic text-gray-600 dark:text-light-grey">
              Don't like forms?
            </p>
            <a
              className="text-xs text-gray-600 underline dark:text-light-grey "
              href="mailto:hi@garethrichards.dev"
            >
              hi@garethrichards.dev
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="px-4 py-2 font-semibold text-white transition-all rounded shadow whitespace-nowrap bg-highlight hover:bg-highlight-hover focus:shadow-outline focus:outline-none"
            type="submit"
          >
            <span>{buttonText}</span>
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
}
