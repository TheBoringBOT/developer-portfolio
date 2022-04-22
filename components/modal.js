import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import ContactForm from "./contact-form";

export default function modal({ setModalOpen, props }) {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setModalOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-white/80" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border-2 border-text-primary solid-shadow-2 ">
              <div className="flex justify-center">
                <Dialog.Title
                  as="h3"
                  className="text-3xl  font-semibold  leading-7  text-gray-900  py-5"
                >
                  Get In touch 👋
                </Dialog.Title>
                <span
                  onClick={() => setModalOpen(false)}
                  className="text-dark-grey absolute right-3 top-3 hover:text-black cursor-pointer"
                >
                  <IoClose />
                </span>
              </div>
              <div className="mt-2">
                <ContactForm props={props} setModalOpen={setModalOpen} />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
