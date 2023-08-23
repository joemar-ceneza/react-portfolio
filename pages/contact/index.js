// components
import Circles from "../../components/Circles";
import Modal from "../../components/Modal";

// icons
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

import { useState } from "react";
import { sendContactForm } from "../../lib/api";

const initState = { values: { name: "", email: "", subject: "", message: "" } };

export default function Contact() {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      console.log(error);
    }
    openModal();
  };

  // will delete this if not working
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-full bg-primary/30">
      <Modal isOpen={isOpen}>
        <div className=" rounded-[5px] bg-yellow-600 py-6">
          <BsCheckCircle className="flex mx-auto text-9xl" />
        </div>

        <h1 className="flex justify-center text-3xl my-6">Thank you!</h1>
        <p className="mx-auto text-sm text-center w-[200px]">
          Your details has been successfully submitted!
        </p>
        <button
          onClick={closeModal}
          className="flex justify-center mx-auto bg-yellow-600 p-2 max-w-[50%] w-full rounded my-6">
          OK
        </button>
      </Modal>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[25px] xl:h2 text-center mb-10 xl:mb-12">
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={onSubmit}>
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input xxxs:h-[52px] text-[12px] xxxs:text-base"
                autoComplete="off"
                name="name"
                required
                value={values.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="input xxxs:h-[52px] text-[12px] xxxs:text-base"
                autoComplete="off"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input xxxs:h-[52px] text-[12px] xxxs:text-base"
              autoComplete="off"
              name="subject"
              required
              value={values.subject}
              onChange={handleChange}
            />
            <textarea
              placeholder="Message"
              className="textarea text-[12px] xxxs:text-base"
              autoComplete="off"
              name="message"
              required
              value={values.message}
              onChange={handleChange}></textarea>
            <button className="btn xxxs:h-[52px] rounded-full border border-white/50 max-w-[130px] xxxs:max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group text-[12px] xxxs:text-base">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Submit
              </span>

              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
