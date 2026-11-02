"use client";

import Counter from "../components/counter";
import Modal from "../components/modal";
import useModalToggle from "@/hooks/useModalToggle";

const Home = () => {
  const { isOpen, open, close } = useModalToggle();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button
        onClick={open}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Open Modal
      </button>
      <Modal open={isOpen} onClose={close} title="Hello">
        <p className="mb-6">This is a modal. Press Esc, click outside, or use a button to close it.</p>
        <div className="flex justify-end">
          <button
            onClick={close}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Got it
          </button>
        </div>
      </Modal>
      <Counter />
    </div>
  );
};

export default Home;
