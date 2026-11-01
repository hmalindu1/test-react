"use client";

import { useState } from "react";
import Modal from "../modal";

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Open Modal
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Hello">
        <p className="mb-6">This is a modal. Press Esc, click outside, or use a button to close it.</p>
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Got it
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalButton;
