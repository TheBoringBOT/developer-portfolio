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
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block tracking-wide text-black text-xs font-semibold mb-2">
            Name
          </label>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            className="appearance-none block w-full bg-light-grey text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            required
            name="name"
            placeholder="Steve Jobs"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block tracking-wide text-black text-xs font-semibold mb-2">
            E-mail
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="appearance-none block w-full bg-light-grey text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            name="email"
            required
            placeholder="steve@apple.com"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block  tracking-wide text-black text-xs font-semibold mb-2">
            Message
          </label>
          <textarea
            {...register("message", { required: true, maxLength: 300 })}
            className=" no-resize appearance-none block w-full bg-light-grey text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            required
            name="message"
            placeholder="I want to carry my music collection in my pocket, let's talk about it..."
          ></textarea>
          <div className="flex items-center justify-start">
            <p className="text-gray-600 text-xs italic mr-2">
              Dont' like forms?
            </p>
            <a
              className=" text-xs underline text-highlight hover:text-highlight-hover"
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
            className="shadow whitespace-nowrap bg-highlight hover:bg-highlight-hover transition-all focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded"
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
