import { Dialog } from "@headlessui/react";
import { useState } from "react";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setIsOpen(true)}>Open dialog</button>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-teal-900/50" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <Dialog.Title className="text-black font-bold text-center">
              Deactivate account
            </Dialog.Title>
            <Dialog.Description className="text-black">
              This will permanently deactivate your account
            </Dialog.Description>

            <p className="text-black">
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default App;
