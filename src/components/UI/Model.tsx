import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode } from 'react';


interface IProps {
    isOpen: boolean;
    close: () => void;
    title?: string;
    children: ReactNode;
    description?: string
}

const Model = ({isOpen, close, title, children, description} : IProps) => {


  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-lg bg-white p-6 backdrop-blur-none duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              
              {title && <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                <h3>{title}</h3>
                <p className='mt-2 text-gray-600 text-sm'>{description}</p>
              </DialogTitle>}
            
              <div className="mt-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Model;